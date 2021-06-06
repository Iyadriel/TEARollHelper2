import { StatLabels, Stats } from 'constants';
import {
    calculatePlayerMaxHealthWithoutBuffs,
    hasMastery,
    hasProficiency,
    setStat,
} from 'modules/character/index';
import {
    getAvailableNegativePoints,
    getAvailableStatPoints,
    getNegativePointsAssigned,
    getNegativePointsUsed,
    STAT_MAX_VALUE,
    STAT_MIN_VALUE,
} from 'rules/stats';
import colours from 'ui/colours';
import { Widgets } from 'ui/widgets';

function getStatLabel(stat: Stats): () => string {
    return (): string => {
        let label = StatLabels[stat];

        if (stat === Stats.Stamina) {
            label = `${label} (HP: ${calculatePlayerMaxHealthWithoutBuffs()})`;
        }

        if (hasProficiency(stat)) {
            if (hasMastery(stat)) {
                label = `${label}${colours.MASTERY} (Master)`;
            } else {
                label = `${label}${colours.PROFICIENCY} (Proficient)`;
            }
        }
        return label;
    };
}

let statSliderOrder = -1;
function statSlider(
    stat: Stats,
    proficiencyDesc: string,
    masteryDesc: string,
): AceOptions.Range {
    statSliderOrder += 1;

    return Widgets.Range({
        name: getStatLabel(stat),
        desc: `|nProficiency bonus: ${proficiencyDesc}. |n|nMastery bonus: ${masteryDesc}.`,
        min: STAT_MIN_VALUE,
        max: STAT_MAX_VALUE,
        step: 1,
        order: statSliderOrder,
    });
}

export default function getOptions(): AceOptions.Group<number> {
    return Widgets.Group({
        order: 0,
        name: 'Stats',
        inline: true,
        get: (info) => {
            const stat = info[info.length - 1] as Stats;
            return TEARollHelper2.db.profile.stats[stat];
        },
        set: (info, value): void => {
            const stat = info[info.length - 1] as Stats;
            setStat(stat, value as Stat);
            // TODO
            // updateTurnUI()
        },
        args: {
            offence: statSlider(
                Stats.Offence,
                '+2 base damage',
                "You have the Feat 'Focus' without it occupying your Feat slot (works even with Featless)",
            ),
            defence: statSlider(
                Stats.Defence,
                'Damage taken from failing a Melee Save is reduced to half rounded up',
                "You have 3 charges of 'Brace'. Each charge of Brace that you spend increases your Defence stat for your next Defense roll by +2. Every 15 damage that you prevent through Defence rolls and Melee Saves restore 1 charge of Brace",
            ),
            spirit: statSlider(
                Stats.Spirit,
                '+1 Greater Heal slot, healing done increased by +2',
                "Increases healing done by +2 against KO'd targets",
            ),
            stamina: statSlider(
                Stats.Stamina,
                'When at risk of receiving a critical wound, roll 1-4, if your result is 1 or 4 you resist the critical wound',
                'Receive +2 HP per heal from all sources. The roll made to resist going KO is no longer raw but instead applies your Stamina',
            ),
            availablePoints: Widgets.Description({
                order: 4,
                name: (): string => {
                    const availablePoints = getAvailableStatPoints();
                    const availableNegativePoints = getAvailableNegativePoints();
                    let msg = ' |n';

                    if (availablePoints > 0) {
                        msg = `${msg}Available points: ${availablePoints}`;
                    } else if (availablePoints === 0) {
                        const negativePointsTooMany =
                            getNegativePointsAssigned() -
                            getNegativePointsUsed();
                        if (negativePointsTooMany > 0) {
                            msg = `${msg}You have ${negativePointsTooMany} more negative point(s) than you can use. This is allowed, but it will not benefit you.`;
                        } else {
                            msg = `${msg}${colours.SUCCESS}You have allocated all available points.`;
                            if (availableNegativePoints > 0) {
                                msg = `${msg}${colours.NOTE}|nYou can unlock ${availableNegativePoints} more points by going negative in one or more stats.`;
                            }
                        }
                    } else {
                        msg = `${msg}${colours.ERROR}You have spent ${Math.abs(
                            availablePoints,
                        )} point(s) too many.`;
                    }

                    return msg;
                },
            }),
        },
    });
}
