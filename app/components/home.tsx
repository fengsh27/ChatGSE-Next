'use client'

import * as React from "react";

import styles from "./home.module.scss";
import BotIcon from "../icons/bot.svg";
import LoadingIcon from "../icons/three-dots.svg";

function Loading(props: { noLogo?: boolean }) {
  return (
    <div className={styles["loading-content"] + " no-dark"}>
      {!props.noLogo && <BotIcon />}
      <LoadingIcon />
    </div>
  );
}

export default function Home() {
  return (
    <div>
        <div>Welcome to Nextjs</div>      
        <Loading />
    </div>
  )
}
