import { Event, fire } from 'bus';
import { Feat, FeatID, FEATS } from 'resources';

function getPlayerFeat(): Feat {
    return FEATS[TEARollHelper2.db.profile.featID];
}

function hasFeatByID(featID: FeatID): boolean {
    return TEARollHelper2.db.profile.featID === featID;
}

function hasFeat(feat: Feat): boolean {
    return hasFeatByID(feat.id);
}

function setPlayerFeatByID(featID: FeatID): void {
    TEARollHelper2.db.profile.featID = featID;
    fire(Event.FEAT_CHANGED, featID);
}

export { getPlayerFeat, hasFeatByID, hasFeat, setPlayerFeatByID };
