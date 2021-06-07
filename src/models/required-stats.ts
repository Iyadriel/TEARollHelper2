import { Stats } from 'constants';

type RequiredStatGroup = {
    [stat in Stats]?: number;
};

type RequiredStats = RequiredStatGroup[];

export { RequiredStats, RequiredStatGroup };
