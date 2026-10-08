import React from "react";
import {Composition} from "remotion";
import {HcashBossModePromo} from "./Promo";

export const RemotionRoot: React.FC = () => (
  <Composition id="HcashBossModePromo" component={HcashBossModePromo}
    durationInFrames={720} fps={30} width={1920} height={1080} defaultProps={{}} />
);
