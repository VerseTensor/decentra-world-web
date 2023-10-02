import type { NextPage } from "next";
import styles from "./index.module.css";
import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();
const assetPrefix = publicRuntimeConfig.assetPrefix || '';


const Homepage: NextPage = () => {
  return (
    <div className={styles.homepage}>
      <div className={styles.newsList}>
        <div className={styles.newsSmall}>
          <div className={styles.viewsImagesRatio}>
          <img 
              className={styles.imagePlaceholderCopyPaste}
              alt=""
              src={`${assetPrefix}/image-placeholder-copy-paste-here@2x.png`}
            />
          </div>
          <div className={styles.text}>
            <div className={styles.pubgBattlegrounds}>PUBG BATTLEGROUNDS</div>
            <div className={styles.flameParent}>
              <div className={styles.flame}>
              <img
                  className={styles.c7ad661Icon}
                  alt=""
                  src={`${assetPrefix}/25c7ad66-1@2x.png`}
                />
                <img
                  className={styles.c7ad662Icon}
                  alt=""
                  src={`${assetPrefix}/25c7ad66-1@2x.png`}
                />
                <img
                  className={styles.c7ad663Icon}
                  alt=""
                  src={`${assetPrefix}/25c7ad66-1@2x.png`}
                />
                <img
                  className={styles.c7ad664Icon}
                  alt=""
                  src={`${assetPrefix}/25c7ad66-1@2x.png`}
                />
                <img
                  className={styles.c7ad665Icon}
                  alt=""
                  src={`${assetPrefix}/25c7ad66-1@2x.png`}
                />
              </div>
              <div className={styles.gameId1111122222Container}>
                <p className={styles.gameId}>{`Game ID:  1111122222 `}</p>
                <p className={styles.gameId}>Owner: David (2011102101)</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.newsSmall1}>
          <div className={styles.viewsImagesRatio}>
            <img
              className={styles.imagePlaceholderCopyPaste}
              alt=""
              src={`${assetPrefix}/image-placeholder-copy-paste-here@2x.png`}
            />
          </div>
          <div className={styles.text}>
            <div
              className={styles.pubgBattlegroundsPubg}
            >{`PUBG BATTLEGROUNDS PUBG PUBG BATTLEGROUNDS `}</div>
            <div className={styles.flameParent}>
              <div className={styles.flame}>
                <img
                  className={styles.c7ad661Icon}
                  alt=""
                  src={`${assetPrefix}/25c7ad66-1@2x.png`}
                />
                <img
                  className={styles.c7ad662Icon}
                  alt=""
                  src={`${assetPrefix}/25c7ad66-1@2x.png`}
                />
                <img
                  className={styles.c7ad663Icon}
                  alt=""
                  src={`${assetPrefix}/25c7ad66-1@2x.png`}
                />
                <img
                  className={styles.c7ad664Icon}
                  alt=""
                  src={`${assetPrefix}/25c7ad66-1@2x.png`}
                />
                <img
                  className={styles.c7ad665Icon}
                  alt=""
                  src={`${assetPrefix}/25c7ad66-1@2x.png`}
                />
              </div>
              <div className={styles.gameId1111122222Container}>
                <p className={styles.gameId}>{`Game ID:  1111122222 `}</p>
                <p className={styles.gameId}>Owner: David (2011102101)</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.newsSmall2}>
          <div className={styles.viewsImagesRatio}>
          <img
              className={styles.imagePlaceholderCopyPaste}
              alt=""
              src={`${assetPrefix}/image-placeholder-copy-paste-here@2x.png`}
            />
          </div>
          <div className={styles.text}>
            <div className={styles.pubgBattlegrounds}>PUBG BATTLEGROUNDS</div>
            <div className={styles.flameParent}>
              <div className={styles.flame}>
              <img
                  className={styles.c7ad661Icon}
                  alt=""
                  src={`${assetPrefix}/25c7ad66-1@2x.png`}
                />
                <img
                  className={styles.c7ad662Icon}
                  alt=""
                  src={`${assetPrefix}/25c7ad66-1@2x.png`}
                />
                <img
                  className={styles.c7ad663Icon}
                  alt=""
                  src={`${assetPrefix}/25c7ad66-1@2x.png`}
                />
                <img
                  className={styles.c7ad664Icon}
                  alt=""
                  src={`${assetPrefix}/25c7ad66-1@2x.png`}
                />
                <img
                  className={styles.c7ad665Icon}
                  alt=""
                  src={`${assetPrefix}/25c7ad66-1@2x.png`}
                />
              </div>
              <div className={styles.gameId1111122222Container}>
                <p className={styles.gameId}>{`Game ID:  1111122222 `}</p>
                <p className={styles.gameId}>Owner: David (2011102101)</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.newsSmall3}>
          <div className={styles.viewsImagesRatio}>
          <img
              className={styles.imagePlaceholderCopyPaste}
              alt=""
              src={`${assetPrefix}/image-placeholder-copy-paste-here@2x.png`}
            />
          </div>
          <div className={styles.text}>
            <div className={styles.pubgBattlegrounds}>PUBG BATTLEGROUNDS</div>
            <div className={styles.flameParent}>
              <div className={styles.flame}>
              <img
                  className={styles.c7ad661Icon}
                  alt=""
                  src={`${assetPrefix}/25c7ad66-1@2x.png`}
                />
                <img
                  className={styles.c7ad662Icon}
                  alt=""
                  src={`${assetPrefix}/25c7ad66-1@2x.png`}
                />
                <img
                  className={styles.c7ad663Icon}
                  alt=""
                  src={`${assetPrefix}/25c7ad66-1@2x.png`}
                />
                <img
                  className={styles.c7ad664Icon}
                  alt=""
                  src={`${assetPrefix}/25c7ad66-1@2x.png`}
                />
                <img
                  className={styles.c7ad665Icon}
                  alt=""
                  src={`${assetPrefix}/25c7ad66-1@2x.png`}
                />
              </div>
              <div className={styles.gameId1111122222Container}>
                <p className={styles.gameId}>{`Game ID:  1111122222 `}</p>
                <p className={styles.gameId}>Owner: David (2011102101)</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.newsSmall4}>
          <div className={styles.viewsImagesRatio}>
          <img
              className={styles.imagePlaceholderCopyPaste}
              alt=""
              src={`${assetPrefix}/image-placeholder-copy-paste-here@2x.png`}
            />
          </div>
          <div className={styles.text}>
            <div className={styles.pubgBattlegrounds}>PUBG BATTLEGROUNDS</div>
            <div className={styles.flameParent}>
              <div className={styles.flame}>
              <img
                  className={styles.c7ad661Icon}
                  alt=""
                  src={`${assetPrefix}/25c7ad66-1@2x.png`}
                />
                <img
                  className={styles.c7ad662Icon}
                  alt=""
                  src={`${assetPrefix}/25c7ad66-1@2x.png`}
                />
                <img
                  className={styles.c7ad663Icon}
                  alt=""
                  src={`${assetPrefix}/25c7ad66-1@2x.png`}
                />
                <img
                  className={styles.c7ad664Icon}
                  alt=""
                  src={`${assetPrefix}/25c7ad66-1@2x.png`}
                />
                <img
                  className={styles.c7ad665Icon}
                  alt=""
                  src={`${assetPrefix}/25c7ad66-1@2x.png`}
                />
              </div>
              <div className={styles.gameId1111122222Container}>
                <p className={styles.gameId}>{`Game ID:  1111122222 `}</p>
                <p className={styles.gameId}>Owner: David (2011102101)</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.newsSmall5}>
          <div className={styles.viewsImagesRatio}>
            <img
              className={styles.imagePlaceholderCopyPaste}
              alt=""
              src={`${assetPrefix}/image-placeholder-copy-paste-here@2x.png`}
            />
          </div>
          <div className={styles.text}>
            <div className={styles.pubgBattlegrounds}>PUBG BATTLEGROUNDS</div>
            <div className={styles.flameParent}>
              <div className={styles.flame}>
                <img
                  className={styles.c7ad661Icon}
                  alt=""
                  src={`${assetPrefix}/25c7ad66-1@2x.png`}
                />
                <img
                  className={styles.c7ad662Icon}
                  alt=""
                  src={`${assetPrefix}/25c7ad66-1@2x.png`}
                />
                <img
                  className={styles.c7ad663Icon}
                  alt=""
                  src={`${assetPrefix}/25c7ad66-1@2x.png`}
                />
                <img
                  className={styles.c7ad664Icon}
                  alt=""
                  src={`${assetPrefix}/25c7ad66-1@2x.png`}
                />
                <img
                  className={styles.c7ad665Icon}
                  alt=""
                  src={`${assetPrefix}/25c7ad66-1@2x.png`}
                />
              </div>
              <div className={styles.gameId1111122222Container}>
                <p className={styles.gameId}>{`Game ID:  1111122222 `}</p>
                <p className={styles.gameId}>Owner: David (2011102101)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.gd} />
      <div className={styles.select}>
        <div className={styles.selectChild} />
        <div className={styles.selectItem} />
        <div className={styles.div}>
          <b className={styles.lastGame}>Last game</b>
          <b className={styles.viewList}>View list</b>
        </div>
        <div className={styles.selectInner} />
      </div>
      <div className={styles.top}>
        <div className={styles.div1}>
          <div className={styles.button01}>
            <div className={styles.top1}>TOP</div>
            <img
            className={styles.iconsaxlineartrendup}
            alt=""
            src={`${assetPrefix}/iconsaxlineartrendup.svg`}
          />
          </div>
          
        </div>
      </div>
      <div className={styles.bannerSlogan}>
        <div className={styles.banner}>
          <img className={styles.imageIcon} alt="" src={`${assetPrefix}/image@2x.png`} />
          <div className={styles.card} />
          <b className={styles.inviteFriendsTo}>
            Invite friends to win our NFT gifts! 
          </b>
          <b className={styles.experienceAndSwim}>
            Experience and swim in the world！
          </b>
        </div>
      </div>

      <div className={styles.searchBar}>
        <div className={styles.iconsaxlinearsearchnormal1Parent}>
          <div className={styles.iconsaxlinearsearchnormal1}>
            <img className={styles.vectorIcon} alt="" src={`${assetPrefix}/vector.svg`} />
          </div>
          <div className={styles.searchByUserid}>
            Search by userID or starID
          </div>
        </div>
      </div>
      <div className={styles.user}>
        <img className={styles.userChild} alt="" src={`${assetPrefix}/rectangle-9@2x.png`} />
      </div>
      <div className={styles.topNavigationBar}>
        <div className={styles.home}>Home</div>
        <div className={styles.store}>Store</div>
        <div className={styles.topUp}>top up</div>
      </div>
    </div>
  );
};

export default Homepage;
