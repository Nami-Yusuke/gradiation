export default () => {
  const el = document.querySelector(".js-movie");

  // 要素がなかったら 終了
  if (el === null) {
    return false;
  }

  const seekButton = document.querySelector(".js-seekButton");
  const playButton = document.querySelector(".js-playButton");
  const pausedButton = document.querySelector(".js-pauseButton");

  // Youtubeの動画IDを取得
  const movieId = el.getAttribute("data-movie");

  // script要素を取得
  const tag = document.createElement("script");
  tag.src = "https://www.youtube.com/iframe_api";
  const firstScriptTag = document.getElementsByTagName("script")[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  let player;

  window.onYouTubeIframeAPIReady = () => {
    player = new YT.Player("player", {
      width: 1280,
      height: 720,
      videoId: movieId,
      playerVars: {
        modestbranding: 1,
        autohide: 1,
        controls: 1,
        showinfo: 0,
        cc_load_policy: 1,
        rel: 0,
        fs: 1,
        playsinline: 1,
        // origin: 'http://192.168.1.6:3000/',
        wmode: "transparent",
      },
      events: {
        onReady: onPlayerReady,
        onStateChange: onPlayerStateChange,
        onPlaybackRateChange: onPlaybackRateChange,
        onPlaybackQualityChange: onPlaybackQualityChange,
        onApiChange: onApiChange,
      },
    });
  };

  // Ready
  function onPlayerReady(event) {
    document.documentElement.classList.remove("is-moviePlay", "is-moviePause");
    document.documentElement.classList.add("is-movieReady");

    //動画内移動ボタン
    if (seekButton) {
      seekButton.addEventListener("click", (e) => {
        const seekTime = createSecond(e.target.innerText);
        event.target.seekTo(seekTime, true);
        if (event.target.getPlayerState() != 1) {
          event.target.playVideo();
        }
      });
    }

    // 再生ボタン
    if (playButton) {
      playButton.addEventListener("click", (e) => {
        event.target.playVideo();
      });
    }

    //  一時停止ボタン
    if (pausedButton) {
      pausedButton.addEventListener("click", (e) => {
        event.target.pauseVideo();
      });
    }
  }

  // 状態が変更された時
  function onPlayerStateChange(event) {
    // 再生開始時の処理
    if (event.data == YT.PlayerState.PLAYING) {
      document.documentElement.classList.remove("is-moviePause", "is-movieReady", "is-moviewEnd");
      document.documentElement.classList.add("is-moviePlay");
    }

    // 再生完了時の処理
    if (event.data == YT.PlayerState.ENDED) {
      document.documentElement.classList.remove("is-moviePause", "is-moviePlay");
      document.documentElement.classList.add("is-movieReady", "is-movieEnd");
    }

    // 一時停止時の処理
    if (event.data == YT.PlayerState.PAUSED) {
      document.documentElement.classList.remove("is-moviePause", "is-moviePlay", "is-movieReady");
      document.documentElement.classList.add("is-moviePause");
    }
  }

  //再生スピード変化イベント
  function onPlaybackRateChange(event) {}

  //　画質変更　イベント
  function onPlaybackQualityChange(event) {}

  //字幕の読み込み完了
  function onApiChange() {}

  // 時間の生成
  function createSecond(t) {
    const time = t;

    let h, m, s, second;

    if (time.indexOf(":") != -1) {
      var timeArgs = time.split(":");
      if (timeArgs.length == 3) {
        h = Number(timeArgs[0]) * 3600;
        m = Number(timeArgs[1]) * 60;
        s = Number(timeArgs[2]);
        second = h + m + s;
      } else if (timeArgs.length == 2) {
        m = Number(timeArgs[0]) * 60;
        s = Number(timeArgs[1]);
        second = m + s;
      } else {
        second = Number(timeArgs[0]);
      }
      return second;
    }
    return t;
  }
};
