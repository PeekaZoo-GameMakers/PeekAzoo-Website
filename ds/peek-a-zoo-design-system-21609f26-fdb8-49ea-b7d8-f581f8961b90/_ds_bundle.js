/* @ds-bundle: {"format":3,"namespace":"PeekAZooDesignSystem_21609f","components":[],"sourceHashes":{"ui_kits/peek-a-zoo-app/components/ActivityScreen.jsx":"fddd4f346fff","ui_kits/peek-a-zoo-app/components/App.jsx":"4c7cc9be0f0f","ui_kits/peek-a-zoo-app/components/HomeScreen.jsx":"fd78bcf8ff90","ui_kits/peek-a-zoo-app/components/LessonSelectScreen.jsx":"d8396224f497","ui_kits/peek-a-zoo-app/components/PhoneFrame.jsx":"31f080dbc562","ui_kits/peek-a-zoo-app/components/Primitives.jsx":"3fd91eb04301","ui_kits/peek-a-zoo-app/components/ProfileScreen.jsx":"d52d0cfb5983","ui_kits/peek-a-zoo-app/components/SplashScreen.jsx":"06fa0dea68c8"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.PeekAZooDesignSystem_21609f = window.PeekAZooDesignSystem_21609f || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// ui_kits/peek-a-zoo-app/components/ActivityScreen.jsx
try { (() => {
// ActivityScreen.jsx — landscape tracing activity:
// felt-table scene fills the left, prompt + controls on the right side rail.

function ActivityScreen({
  activity,
  lesson,
  onBack,
  onComplete
}) {
  const [progress] = React.useState(35);
  const [success, setSuccess] = React.useState(false);
  const numeralSrc = activity.icon;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      display: 'grid',
      gridTemplateColumns: '1fr 260px',
      gap: 18,
      padding: '4px 18px 16px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      borderRadius: 28,
      overflow: 'hidden',
      background: '#E8D5C0',
      backgroundImage: 'radial-gradient(circle at 1.5px 1.5px, rgba(160,120,80,0.18) 1.2px, transparent 0)',
      backgroundSize: '14px 14px',
      boxShadow: 'inset 0 6px 14px rgba(160,120,80,0.18)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      height: '50%',
      background: 'linear-gradient(180deg, #C9E9F8 0%, #E8D5C0 100%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 20,
      left: 40,
      width: 80,
      height: 30,
      background: '#fff',
      borderRadius: 999,
      boxShadow: '16px 4px 0 -4px #fff, 30px -2px 0 -8px #fff'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 60,
      right: 40,
      width: 60,
      height: 24,
      background: '#fff',
      borderRadius: 999,
      boxShadow: '12px 4px 0 -4px #fff'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: '-10%',
      right: '-10%',
      bottom: -30,
      height: 130,
      background: '#A8DC70',
      borderRadius: '50% 50% 0 0',
      backgroundImage: 'radial-gradient(circle at 1.5px 1.5px, rgba(255,255,255,0.20) 1px, transparent 0)',
      backgroundSize: '14px 14px'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: '50%',
      top: '50%',
      transform: 'translate(-50%, -55%)',
      width: 200,
      height: 200,
      filter: 'drop-shadow(0 8px 12px rgba(61,44,30,0.20))'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: numeralSrc,
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'contain'
    }
  }), !success && /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 200 200",
    style: {
      position: 'absolute',
      inset: 0,
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 90 46 Q 100 44 105 48 L 105 150",
    fill: "none",
    stroke: "rgba(255,255,255,0.85)",
    strokeWidth: "6",
    strokeDasharray: "2 10",
    strokeLinecap: "round"
  }))), success && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: '24%',
      top: '28%',
      fontSize: 30,
      animation: 'pz-pop 600ms cubic-bezier(0.34,1.56,0.64,1)'
    }
  }, "\u2728"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      right: '22%',
      top: '32%',
      fontSize: 26
    }
  }, "\u2B50"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: '34%',
      bottom: '32%',
      fontSize: 22
    }
  }, "\u2728"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      right: '30%',
      bottom: '36%',
      fontSize: 28
    }
  }, "\u2B50")), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/jiku.webp",
    alt: "",
    style: {
      position: 'absolute',
      left: -8,
      bottom: -10,
      width: 130,
      height: 130,
      objectFit: 'contain',
      filter: 'drop-shadow(0 6px 10px rgba(61,44,30,0.15))',
      transform: success ? 'translateY(-12px) rotate(-6deg)' : 'none',
      transition: 'transform 300ms cubic-bezier(0.34,1.56,0.64,1)'
    }
  }), /*#__PURE__*/React.createElement("button", {
    onClick: onBack,
    "aria-label": "Back",
    style: {
      position: 'absolute',
      top: 12,
      left: 12,
      width: 40,
      height: 40,
      borderRadius: 999,
      background: '#B68CE8',
      color: '#fff',
      border: 'none',
      cursor: 'pointer',
      backgroundImage: 'radial-gradient(circle at 1.5px 1.5px, rgba(255,255,255,0.18) 1px, transparent 0)',
      backgroundSize: '14px 14px',
      boxShadow: '0 4px 0 #8A5CC8',
      zIndex: 4
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 20 20",
    style: {
      display: 'block',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M13 4l-6 6 6 6",
    fill: "none",
    stroke: "#fff",
    strokeWidth: "3.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      inset: 3,
      borderRadius: 999,
      border: '2px dashed rgba(255,255,255,0.55)',
      pointerEvents: 'none'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 24,
      right: 24,
      bottom: 16,
      background: 'rgba(255,255,255,0.95)',
      borderRadius: 999,
      padding: '8px 14px',
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      boxShadow: '0 4px 12px rgba(61,44,30,0.10)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: '"Baloo 2", sans-serif',
      fontWeight: 800,
      fontSize: 12,
      color: '#C47B0A'
    }
  }, "Step"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement(PZProgress, {
    value: success ? 100 : progress,
    color: lesson.color,
    showPct: false
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: '"Baloo 2", sans-serif',
      fontWeight: 800,
      fontSize: 13,
      color: '#3D2C1E'
    }
  }, success ? '3/3' : '1/3'))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("button", {
    "aria-label": "Audio",
    style: {
      alignSelf: 'flex-end',
      width: 44,
      height: 44,
      borderRadius: 999,
      background: '#FFFDF8',
      border: 'none',
      cursor: 'pointer',
      boxShadow: '0 3px 0 #E8D5C0',
      fontSize: 18
    }
  }, "\uD83D\uDD0A"), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '14px 14px 16px',
      background: '#FFFDF8',
      borderRadius: 22,
      boxShadow: '0 4px 14px rgba(61,44,30,0.07)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/pebi.webp",
    alt: "",
    style: {
      width: 70,
      height: 70,
      objectFit: 'contain',
      display: 'block',
      margin: '0 auto'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: '"Baloo 2", sans-serif',
      fontWeight: 800,
      fontSize: 17,
      color: '#3D2C1E',
      lineHeight: 1.2,
      textAlign: 'center',
      marginTop: 6
    }
  }, success ? 'Great job! ⭐' : `Trace the number ${activity.label.replace(/Trace\s*/i, '').trim() || '1'}!`), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Nunito',
      fontWeight: 700,
      fontSize: 12,
      color: '#A07850',
      textAlign: 'center',
      marginTop: 4
    }
  }, success ? 'You did it!' : 'Follow the dashed line with your finger.')), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, success ? /*#__PURE__*/React.createElement(PZButton, {
    variant: "green",
    size: "lg",
    onClick: onComplete,
    style: {
      width: '100%'
    }
  }, "Next \u2B50") : /*#__PURE__*/React.createElement(PZButton, {
    variant: "yellow",
    size: "lg",
    onClick: () => setSuccess(true),
    style: {
      width: '100%'
    }
  }, "Ok \u2713"), /*#__PURE__*/React.createElement(PZButton, {
    variant: "outline",
    onClick: onBack,
    style: {
      width: '100%'
    }
  }, "Skip"))), /*#__PURE__*/React.createElement("style", null, `
        @keyframes pz-pop { 0% { transform: scale(0);} 100% { transform: scale(1);} }
      `));
}
Object.assign(window, {
  ActivityScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/peek-a-zoo-app/components/ActivityScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/peek-a-zoo-app/components/App.jsx
try { (() => {
// App.jsx — main click-through router.

function App() {
  const [screen, setScreen] = React.useState('splash');
  const [lesson, setLesson] = React.useState(null);
  const [activity, setActivity] = React.useState(null);
  if (screen === 'splash') {
    return /*#__PURE__*/React.createElement(SplashScreen, {
      onStart: () => setScreen('home')
    });
  }
  if (screen === 'profile') {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ProfileScreen, {
      onBack: () => setScreen('home')
    }));
  }
  if (screen === 'lesson' && lesson) {
    return /*#__PURE__*/React.createElement(LessonSelectScreen, {
      lesson: lesson,
      onBack: () => setScreen('home'),
      onPickActivity: a => {
        setActivity(a);
        setScreen('activity');
      }
    });
  }
  if (screen === 'activity' && lesson && activity) {
    return /*#__PURE__*/React.createElement(ActivityScreen, {
      lesson: lesson,
      activity: activity,
      onBack: () => setScreen('lesson'),
      onComplete: () => setScreen('lesson')
    });
  }
  // home
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(HomeScreen, {
    onPickLesson: l => {
      setLesson(l);
      setScreen('lesson');
    }
  }), /*#__PURE__*/React.createElement(HomeTabBar, {
    tab: "home",
    onTab: t => {
      if (t === 'stars') setScreen('profile');
    }
  }));
}
Object.assign(window, {
  App
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/peek-a-zoo-app/components/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/peek-a-zoo-app/components/HomeScreen.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// HomeScreen.jsx — landscape dashboard with 3×2 lesson grid + side rail.

function HomeScreen({
  onPickLesson
}) {
  const lessons = [{
    id: 'numbers',
    title: 'Numbers',
    subtitle: '2 of 5 done',
    icon: '../../assets/icon-number-one.webp',
    color: 'green',
    badge: '⭐ 2'
  }, {
    id: 'counting',
    title: 'Counting',
    subtitle: 'Tap & count',
    icon: '../../assets/icon-number-three.webp',
    color: 'blue',
    badge: 'NEW'
  }, {
    id: 'tracing',
    title: 'Tracing',
    subtitle: 'Trace with me',
    icon: '../../assets/icon-tracing-one.webp',
    color: 'gold',
    badge: '⭐⭐'
  }, {
    id: 'stories',
    title: 'Stories',
    subtitle: 'Read with Pebi',
    icon: '../../assets/icon-story.webp',
    color: 'pink',
    badge: null
  }, {
    id: 'rhymes',
    title: 'Rhymes',
    subtitle: 'Sing & dance',
    icon: '../../assets/icon-rhyme.webp',
    color: 'lilac',
    badge: null
  }, {
    id: 'locked',
    title: 'Adventure',
    subtitle: 'Coming soon',
    icon: '../../assets/icon-locked.webp',
    color: 'coral',
    badge: null,
    locked: true
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 28px 0 28px',
      display: 'grid',
      gridTemplateColumns: '240px 1fr',
      gap: 24,
      height: '100%',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14,
      paddingTop: 8,
      paddingBottom: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(PZAvatar, {
    src: "../../assets/pebi.webp",
    color: "#F0F4FF",
    size: 64,
    ring: true
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Nunito',
      fontWeight: 700,
      fontSize: 11,
      color: '#A07850',
      letterSpacing: '0.04em',
      textTransform: 'uppercase'
    }
  }, "Hi friend!"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: '"Baloo 2", sans-serif',
      fontWeight: 800,
      fontSize: 20,
      color: '#3D2C1E',
      lineHeight: 1.1
    }
  }, "Let's play, Golu!"))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#FFFDF8',
      borderRadius: 18,
      padding: '12px 14px',
      boxShadow: '0 4px 14px rgba(61,44,30,0.06)',
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 24
    }
  }, "\uD83D\uDD25"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: '"Baloo 2", sans-serif',
      fontWeight: 800,
      fontSize: 14,
      color: '#3D2C1E'
    }
  }, "3-day streak!"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Nunito',
      fontWeight: 700,
      fontSize: 11,
      color: '#A07850'
    }
  }, "Keep going to earn a sticker"))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      background: '#FFF6E0',
      borderRadius: 18,
      padding: '12px 14px',
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      border: '2px solid #F5A623'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 36,
      height: 36,
      borderRadius: 999,
      background: '#F5A623',
      color: '#fff',
      display: 'grid',
      placeItems: 'center',
      fontFamily: '"Baloo 2", sans-serif',
      fontWeight: 800,
      fontSize: 16,
      boxShadow: '0 2px 0 #C47B0A'
    }
  }, "\u2B50"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: '"Baloo 2", sans-serif',
      fontWeight: 800,
      fontSize: 16,
      color: '#B87A00'
    }
  }, "7 stars"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Nunito',
      fontWeight: 700,
      fontSize: 11,
      color: '#A07850'
    }
  }, "level 2 \xB7 keep collecting!")))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      paddingTop: 8,
      paddingBottom: 16,
      paddingRight: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: '"Baloo 2", sans-serif',
      fontWeight: 800,
      fontSize: 18,
      color: '#3D2C1E'
    }
  }, "Today's lessons"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Nunito',
      fontWeight: 700,
      fontSize: 11,
      color: '#A07850'
    }
  }, "Tap one to begin")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gridTemplateRows: 'repeat(2, 1fr)',
      gap: 14,
      flex: 1,
      minHeight: 0
    }
  }, lessons.map(l => /*#__PURE__*/React.createElement(PZLessonCard, _extends({
    key: l.id
  }, l, {
    onClick: () => onPickLesson(l),
    style: {
      height: '100%'
    }
  }))))));
}

// Bottom tab bar — floats centered along the bottom in landscape
function HomeTabBar({
  tab = 'home',
  onTab
}) {
  const tabs = [{
    id: 'home',
    label: 'Home',
    icon: '🏡'
  }, {
    id: 'play',
    label: 'Play',
    icon: '🎈'
  }, {
    id: 'friends',
    label: 'Friends',
    icon: '🐰'
  }, {
    id: 'stars',
    label: 'Stars',
    icon: '⭐'
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: '50%',
      bottom: 14,
      transform: 'translateX(-50%)',
      background: '#FFFDF8',
      borderRadius: 26,
      padding: '6px 6px',
      boxShadow: '0 8px 24px rgba(61,44,30,0.12)',
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
      zIndex: 5,
      gap: 4
    }
  }, tabs.map(t => {
    const active = t.id === tab;
    return /*#__PURE__*/React.createElement("button", {
      key: t.id,
      onClick: () => onTab && onTab(t.id),
      style: {
        background: active ? '#6CC14E' : 'transparent',
        border: 'none',
        color: active ? '#fff' : '#A07850',
        padding: '6px 16px',
        borderRadius: 20,
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        position: 'relative',
        backgroundImage: active ? 'radial-gradient(circle at 1.5px 1.5px, rgba(255,255,255,0.18) 1px, transparent 0)' : 'none',
        backgroundSize: '14px 14px'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 16
      }
    }, t.icon), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: '"Baloo 2", sans-serif',
        fontWeight: 700,
        fontSize: 12
      }
    }, t.label), active && /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'absolute',
        inset: 3,
        borderRadius: 18,
        border: '2px dashed rgba(255,255,255,0.55)',
        pointerEvents: 'none'
      }
    }));
  }));
}
Object.assign(window, {
  HomeScreen,
  HomeTabBar
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/peek-a-zoo-app/components/HomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/peek-a-zoo-app/components/LessonSelectScreen.jsx
try { (() => {
// LessonSelectScreen.jsx — landscape: domain hero left, activity list right.

function LessonSelectScreen({
  lesson,
  onBack,
  onPickActivity
}) {
  const activities = lesson.id === 'tracing' ? [{
    id: 't1',
    icon: '../../assets/icon-tracing-one.webp',
    label: 'Trace 1',
    stars: 3,
    status: 'done'
  }, {
    id: 't2',
    icon: '../../assets/icon-tracing-two.webp',
    label: 'Trace 2',
    stars: 2,
    status: 'inprog'
  }, {
    id: 't3',
    icon: '../../assets/icon-tracing-three.webp',
    label: 'Trace 3',
    stars: 0,
    status: 'new'
  }, {
    id: 't4',
    icon: '../../assets/icon-locked.webp',
    label: 'Trace 4',
    locked: true
  }, {
    id: 't5',
    icon: '../../assets/icon-locked.webp',
    label: 'Trace 5',
    locked: true
  }] : [{
    id: 'a1',
    icon: '../../assets/icon-number-one.webp',
    label: 'One',
    stars: 3,
    status: 'done'
  }, {
    id: 'a2',
    icon: '../../assets/icon-number-three.webp',
    label: 'Two',
    stars: 1,
    status: 'inprog'
  }, {
    id: 'a3',
    icon: '../../assets/icon-number-three.webp',
    label: 'Three',
    stars: 0,
    status: 'new'
  }, {
    id: 'a4',
    icon: '../../assets/icon-locked.webp',
    label: 'Four',
    locked: true
  }, {
    id: 'a5',
    icon: '../../assets/icon-locked.webp',
    label: 'Five',
    locked: true
  }];
  const headerColor = PZ_DOMAIN_COLORS[lesson.color] || '#6CC14E';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      display: 'grid',
      gridTemplateColumns: '320px 1fr',
      gap: 20,
      padding: '4px 24px 16px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onBack,
    "aria-label": "Back",
    style: {
      alignSelf: 'flex-start',
      width: 44,
      height: 44,
      borderRadius: 999,
      background: '#B68CE8',
      color: '#fff',
      border: 'none',
      backgroundImage: 'radial-gradient(circle at 1.5px 1.5px, rgba(255,255,255,0.18) 1px, transparent 0)',
      backgroundSize: '14px 14px',
      boxShadow: '0 4px 0 #8A5CC8',
      cursor: 'pointer',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 20 20",
    style: {
      display: 'block',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M13 4l-6 6 6 6",
    fill: "none",
    stroke: "#fff",
    strokeWidth: "3.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      inset: 4,
      borderRadius: 999,
      border: '2px dashed rgba(255,255,255,0.55)',
      pointerEvents: 'none'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      padding: 18,
      background: headerColor,
      backgroundImage: 'radial-gradient(circle at 1.5px 1.5px, rgba(255,255,255,0.18) 1px, transparent 0)',
      backgroundSize: '14px 14px',
      borderRadius: 24,
      color: '#fff',
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      minHeight: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end',
      position: 'relative',
      zIndex: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      padding: '4px 12px',
      borderRadius: 999,
      background: 'rgba(255,255,255,0.22)',
      fontFamily: '"Baloo 2", sans-serif',
      fontWeight: 700,
      fontSize: 11
    }
  }, "\u2B50 5")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'grid',
      placeItems: 'center',
      position: 'relative',
      zIndex: 1,
      minHeight: 0
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/nimu.webp",
    alt: "",
    style: {
      width: '70%',
      maxHeight: 160,
      objectFit: 'contain'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Nunito',
      fontWeight: 700,
      fontSize: 11,
      opacity: 0.88,
      letterSpacing: '0.06em',
      textTransform: 'uppercase'
    }
  }, "Nimu says"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: '"Baloo 2", sans-serif',
      fontWeight: 800,
      fontSize: 19,
      lineHeight: 1.2,
      marginTop: 2
    }
  }, "Let's learn ", lesson.title.toLowerCase(), "!"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Nunito',
      fontWeight: 700,
      fontSize: 12,
      opacity: 0.88,
      marginTop: 4
    }
  }, "Pick a number to start.")), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      inset: 7,
      borderRadius: 18,
      border: '2px dashed rgba(255,255,255,0.55)',
      pointerEvents: 'none'
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      paddingTop: 4,
      overflow: 'auto',
      paddingRight: 4
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: '"Baloo 2", sans-serif',
      fontWeight: 800,
      fontSize: 16,
      color: '#3D2C1E'
    }
  }, "Activities"), activities.map(a => /*#__PURE__*/React.createElement("div", {
    key: a.id,
    onClick: () => !a.locked && onPickActivity(a),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      padding: 10,
      background: '#FFFDF8',
      borderRadius: 18,
      boxShadow: '0 4px 12px rgba(61,44,30,0.07)',
      cursor: a.locked ? 'not-allowed' : 'pointer',
      opacity: a.locked ? 0.7 : 1
    }
  }, /*#__PURE__*/React.createElement(PZIconTile, {
    src: a.icon,
    color: lesson.color,
    size: 56,
    locked: a.locked
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: '"Baloo 2", sans-serif',
      fontWeight: 800,
      fontSize: 16,
      color: '#3D2C1E'
    }
  }, a.label), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 4
    }
  }, a.locked ? /*#__PURE__*/React.createElement(PZBadge, {
    status: "locked"
  }) : a.status === 'done' ? /*#__PURE__*/React.createElement(PZBadge, {
    status: "done"
  }) : a.status === 'inprog' ? /*#__PURE__*/React.createElement(PZBadge, {
    status: "inprog"
  }) : /*#__PURE__*/React.createElement(PZBadge, {
    status: "new"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 2,
      marginRight: 4
    }
  }, !a.locked && [1, 2, 3].map(n => /*#__PURE__*/React.createElement("span", {
    key: n,
    style: {
      fontSize: 18,
      color: (a.stars || 0) >= n ? '#F5A623' : '#E8D5C0'
    }
  }, "\u2605")))))));
}
Object.assign(window, {
  LessonSelectScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/peek-a-zoo-app/components/LessonSelectScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/peek-a-zoo-app/components/PhoneFrame.jsx
try { (() => {
// PhoneFrame.jsx — landscape tablet frame for Peek-A-Zoo screens.
// 880×540. SKY-BLUE gradient + cotton-ball clouds (matches the Figma app flow).

function PhoneFrame({
  children,
  label
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "pz-phone",
    style: {
      width: 880,
      height: 540,
      borderRadius: 38,
      overflow: 'hidden',
      position: 'relative',
      background: 'linear-gradient(180deg, #7FCBF1 0%, #A8DFF7 55%, #D6EFFB 100%)',
      boxShadow: '0 30px 60px rgba(61,44,30,0.15), 0 0 0 9px #2A1F15, 0 0 0 11px #1A1208'
    }
  }, /*#__PURE__*/React.createElement("style", null, `
          .pz-phone *::-webkit-scrollbar { display: none; width: 0; height: 0; }
        `), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      pointerEvents: 'none',
      zIndex: 0
    }
  }, [{
    l: 60,
    t: 40,
    s: 1
  }, {
    l: 720,
    t: 70,
    s: 0.8
  }, {
    l: 340,
    t: 30,
    s: 0.7
  }, {
    l: 220,
    t: 110,
    s: 0.55
  }, {
    l: 600,
    t: 22,
    s: 0.45
  }, {
    l: 480,
    t: 90,
    s: 0.5
  }].map((c, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      position: 'absolute',
      left: c.l,
      top: c.t,
      width: 88 * c.s,
      height: 28 * c.s,
      background: '#fff',
      borderRadius: 999,
      boxShadow: `${18 * c.s}px ${4 * c.s}px 0 ${-4 * c.s}px #fff, ${34 * c.s}px ${-2 * c.s}px 0 ${-9 * c.s}px #fff, ${-12 * c.s}px ${2 * c.s}px 0 ${-8 * c.s}px #fff`,
      opacity: 0.96
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      pointerEvents: 'none',
      zIndex: 1,
      backgroundImage: 'radial-gradient(circle at 1.5px 1.5px, rgba(255,255,255,0.18) 1px, transparent 0)',
      backgroundSize: '14px 14px'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: '50%',
      left: 14,
      transform: 'translateY(-50%)',
      width: 8,
      height: 8,
      borderRadius: 999,
      background: '#1A1208',
      zIndex: 30,
      boxShadow: '0 0 0 3px rgba(0,0,0,0.25)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 20
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 2,
      height: 'calc(100% - 20px)'
    }
  }, children), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 10,
      pointerEvents: 'none',
      zIndex: 3,
      borderRadius: 28,
      border: '2px dashed rgba(255,255,255,0.55)'
    }
  })), label && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: '"Baloo 2", sans-serif',
      fontWeight: 700,
      fontSize: 14,
      color: '#A07850',
      letterSpacing: '0.04em'
    }
  }, label));
}
window.PhoneFrame = PhoneFrame;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/peek-a-zoo-app/components/PhoneFrame.jsx", error: String((e && e.message) || e) }); }

// ui_kits/peek-a-zoo-app/components/Primitives.jsx
try { (() => {
// Primitives.jsx — Peek-A-Zoo shared low-level UI components.
// All surfaces use the real felt-texture image (assets/felt-texture.png),
// blended with each brand color via background-blend-mode: multiply, plus
// a subtle tint overlay that re-saturates the color.

// The texture path is resolved from the HTML page that loads this script.
// All UI kit screens are served from `ui_kits/peek-a-zoo-app/index.html`,
// so the relative path is "../../assets/felt-texture.png".
const FELT_URL = '../../assets/felt-texture.png';
const FELT_SIZE = '320px auto';

// Returns inline styles that apply the felt texture + tint over a base color.
function feltSurface(bg) {
  return {
    backgroundColor: bg,
    backgroundImage: `
      linear-gradient(180deg, rgba(255,255,255,0.22) 0%, rgba(255,255,255,0) 45%),
      linear-gradient(180deg, rgba(0,0,0,0) 60%, rgba(0,0,0,0.10) 100%),
      url("${FELT_URL}")
    `,
    backgroundSize: `auto, auto, ${FELT_SIZE}`,
    backgroundBlendMode: 'overlay, normal, multiply'
  };
}

// Organic capsule radius — slightly hand-cut, not mechanical pill.
const CAPSULE_RADIUS = '999px 990px 999px 992px / 999px 992px 999px 990px';

// ─────────── Button — felt capsule (matches the production app) ───────────
// Variants: blue, green, yellow, red, purple, pink, beige, gray (locked), outline
const PZ_BTN_COLORS = {
  blue: {
    bg: '#5BB8E8',
    shadow: 'rgba(46,144,200,0.40)',
    text: '#fff'
  },
  green: {
    bg: '#6CC14E',
    shadow: 'rgba(74,143,53,0.40)',
    text: '#fff'
  },
  yellow: {
    bg: '#F5A623',
    shadow: 'rgba(196,123,10,0.42)',
    text: '#fff'
  },
  red: {
    bg: '#F47B5A',
    shadow: 'rgba(192,64,48,0.40)',
    text: '#fff'
  },
  purple: {
    bg: '#B68CE8',
    shadow: 'rgba(138,92,200,0.42)',
    text: '#fff'
  },
  pink: {
    bg: '#F07EC0',
    shadow: 'rgba(212,93,160,0.40)',
    text: '#fff'
  },
  beige: {
    bg: '#D6B886',
    shadow: 'rgba(94,68,31,0.32)',
    text: '#5E441F'
  },
  gold: {
    bg: '#F5A623',
    shadow: 'rgba(196,123,10,0.42)',
    text: '#fff'
  },
  coral: {
    bg: '#F47B5A',
    shadow: 'rgba(192,64,48,0.40)',
    text: '#fff'
  },
  lilac: {
    bg: '#B68CE8',
    shadow: 'rgba(138,92,200,0.42)',
    text: '#fff'
  },
  gray: {
    bg: '#B0B8C0',
    shadow: 'rgba(128,144,160,0.32)',
    text: '#fff'
  }
};
function PZButton({
  variant = 'blue',
  children,
  onClick,
  locked = false,
  style = {},
  size = 'md'
}) {
  const [hover, setHover] = React.useState(false);
  const [pressed, setPressed] = React.useState(false);
  if (variant === 'outline') {
    return /*#__PURE__*/React.createElement("button", {
      onClick: !locked ? onClick : undefined,
      style: {
        fontFamily: '"Baloo 2", sans-serif',
        fontWeight: 800,
        fontSize: size === 'sm' ? 14 : size === 'lg' ? 18 : 16,
        padding: size === 'sm' ? '8px 22px' : size === 'lg' ? '14px 38px' : '12px 30px',
        borderRadius: CAPSULE_RADIUS,
        color: '#fff',
        background: 'transparent',
        border: '2px dashed rgba(255,255,255,0.65)',
        cursor: locked ? 'not-allowed' : 'pointer',
        opacity: locked ? 0.6 : 1,
        textShadow: '0 1px 0 rgba(0,0,0,0.25)',
        ...style
      }
    }, children);
  }
  const c = PZ_BTN_COLORS[locked ? 'gray' : variant] || PZ_BTN_COLORS.blue;
  const padY = size === 'sm' ? 11 : size === 'lg' ? 20 : 16;
  const padX = size === 'sm' ? 24 : size === 'lg' ? 44 : 36;
  const fs = size === 'sm' ? 15 : size === 'lg' ? 19 : 17;
  return /*#__PURE__*/React.createElement("button", {
    onClick: !locked ? onClick : undefined,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPressed(false);
    },
    onMouseDown: () => setPressed(true),
    onMouseUp: () => setPressed(false),
    onTouchStart: () => setPressed(true),
    onTouchEnd: () => setPressed(false),
    style: {
      position: 'relative',
      fontFamily: '"Baloo 2", sans-serif',
      fontWeight: 800,
      fontSize: fs,
      padding: `${padY}px ${padX}px`,
      minWidth: size === 'sm' ? 120 : size === 'lg' ? 220 : 170,
      borderRadius: CAPSULE_RADIUS,
      border: 'none',
      color: c.text,
      ...feltSurface(c.bg),
      boxShadow: pressed ? `0 3px 8px ${c.shadow}, 0 1px 2px rgba(61,44,30,0.10)` : hover ? `0 10px 18px ${c.shadow}, 0 3px 4px rgba(61,44,30,0.10)` : `0 6px 14px ${c.shadow}, 0 2px 4px rgba(61,44,30,0.10)`,
      textShadow: c.text === '#fff' ? '0 1.5px 0 rgba(0,0,0,0.22)' : '0 1px 0 rgba(255,255,255,0.45)',
      transform: pressed ? 'translateY(1px)' : hover ? 'translateY(-2px)' : 'none',
      transition: 'transform 150ms cubic-bezier(0.34,1.56,0.64,1), box-shadow 150ms',
      cursor: locked ? 'not-allowed' : 'pointer',
      opacity: locked ? 0.75 : 1,
      outline: 'none',
      overflow: 'hidden',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      zIndex: 2
    }
  }, children), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      inset: 6,
      borderRadius: 'inherit',
      border: '2px dashed rgba(255,255,255,0.70)',
      pointerEvents: 'none'
    }
  }));
}

// ─────────── Icon tile — felt square (image-on-color) ───────────
const PZ_DOMAIN_COLORS = {
  green: '#6CC14E',
  gold: '#F5A623',
  blue: '#5BB8E8',
  pink: '#F07EC0',
  lilac: '#B68CE8',
  coral: '#F47B5A',
  yellow: '#F5A623',
  red: '#F47B5A',
  purple: '#B68CE8',
  gray: '#B0B8C0'
};
function PZIconTile({
  src,
  color = 'green',
  size = 72,
  locked = false,
  style = {},
  children,
  onClick
}) {
  const bg = PZ_DOMAIN_COLORS[locked ? 'gray' : color] || PZ_DOMAIN_COLORS.green;
  return /*#__PURE__*/React.createElement("div", {
    onClick: !locked ? onClick : undefined,
    style: {
      position: 'relative',
      width: size,
      height: size,
      borderRadius: 18,
      ...feltSurface(bg),
      display: 'grid',
      placeItems: 'center',
      overflow: 'hidden',
      cursor: onClick && !locked ? 'pointer' : 'default',
      opacity: locked ? 0.7 : 1,
      flexShrink: 0,
      ...style
    }
  }, src && /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: "",
    style: {
      width: '78%',
      height: '78%',
      objectFit: 'contain',
      position: 'relative',
      zIndex: 1
    }
  }), children, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      inset: 6,
      borderRadius: 14,
      border: '2px dashed rgba(255,255,255,0.65)',
      pointerEvents: 'none',
      zIndex: 2
    }
  }), locked && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 4,
      right: 4,
      width: 24,
      height: 24,
      borderRadius: 999,
      background: '#fff',
      display: 'grid',
      placeItems: 'center',
      fontSize: 13,
      zIndex: 3,
      boxShadow: '0 1px 2px rgba(0,0,0,0.15)'
    }
  }, "\uD83D\uDD12"));
}

// ─────────── Lesson card — felt rectangle ───────────
function PZLessonCard({
  icon,
  title,
  subtitle,
  color = 'green',
  badge,
  locked = false,
  onClick,
  style = {}
}) {
  const bg = PZ_DOMAIN_COLORS[locked ? 'gray' : color];
  return /*#__PURE__*/React.createElement("div", {
    onClick: !locked ? onClick : undefined,
    style: {
      position: 'relative',
      borderRadius: 24,
      padding: 16,
      color: '#fff',
      ...feltSurface(bg),
      boxShadow: '0 8px 20px rgba(61,44,30,0.18), 0 2px 4px rgba(61,44,30,0.10)',
      display: 'flex',
      flexDirection: 'column',
      cursor: onClick && !locked ? 'pointer' : 'default',
      opacity: locked ? 0.7 : 1,
      transition: 'transform 180ms cubic-bezier(0.34,1.56,0.64,1)',
      overflow: 'hidden',
      ...style
    },
    onMouseEnter: e => {
      if (!locked) e.currentTarget.style.transform = 'translateY(-3px) rotate(-1deg)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = '';
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      position: 'relative',
      zIndex: 1
    }
  }, icon && /*#__PURE__*/React.createElement("div", {
    style: {
      width: 56,
      height: 56,
      borderRadius: 14,
      background: 'rgba(255,255,255,0.20)',
      display: 'grid',
      placeItems: 'center',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: icon,
    alt: "",
    style: {
      width: '78%',
      height: '78%',
      objectFit: 'contain'
    }
  })), badge && /*#__PURE__*/React.createElement("span", {
    style: {
      padding: '3px 10px',
      borderRadius: 999,
      background: 'rgba(255,255,255,0.22)',
      fontFamily: '"Baloo 2", sans-serif',
      fontWeight: 700,
      fontSize: 11
    }
  }, badge)), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      position: 'relative',
      zIndex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: '"Baloo 2", sans-serif',
      fontWeight: 700,
      fontSize: 17,
      lineHeight: 1.2,
      textShadow: '0 1px 0 rgba(0,0,0,0.18)'
    }
  }, title), subtitle && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Nunito, sans-serif',
      fontWeight: 700,
      fontSize: 12,
      opacity: 0.88,
      marginTop: 2
    }
  }, subtitle)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      inset: 7,
      borderRadius: 19,
      border: '2px dashed rgba(255,255,255,0.65)',
      pointerEvents: 'none'
    }
  }), locked && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 10,
      right: 10,
      width: 28,
      height: 28,
      borderRadius: 999,
      background: '#fff',
      display: 'grid',
      placeItems: 'center',
      fontSize: 15,
      zIndex: 3
    }
  }, "\uD83D\uDD12"));
}

// ─────────── Progress bar — felt fill ───────────
function PZProgress({
  value = 0,
  color = 'green',
  showPct = true
}) {
  const bg = PZ_DOMAIN_COLORS[color];
  const darks = {
    green: '#4A8F35',
    gold: '#B87A00',
    yellow: '#B87A00',
    blue: '#2E90C8',
    pink: '#D45DA0',
    lilac: '#8A5CC8',
    purple: '#8A5CC8',
    coral: '#C04030',
    red: '#C04030'
  };
  const dark = darks[color] || '#4A8F35';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: 14,
      background: '#E8D5C0',
      borderRadius: 999,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: `${Math.max(0, Math.min(100, value))}%`,
      height: '100%',
      ...feltSurface(bg),
      borderRadius: 999,
      position: 'relative',
      transition: 'width 600ms cubic-bezier(0.4,0,0.2,1)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 6,
      right: 6,
      top: 2,
      height: 3,
      background: 'rgba(255,255,255,0.5)',
      borderRadius: 2
    }
  }))), showPct && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: '"Baloo 2", sans-serif',
      fontWeight: 800,
      fontSize: 13,
      color: dark,
      minWidth: 36,
      textAlign: 'right'
    }
  }, Math.round(value), "%"));
}

// ─────────── Status badge (no felt — small surface, stays flat) ───────────
const PZ_BADGES = {
  done: {
    bg: '#EBF8E8',
    color: '#4A8F35',
    dot: '#6CC14E',
    label: 'Completed'
  },
  inprog: {
    bg: '#FFF6E0',
    color: '#B87A00',
    dot: '#F5A623',
    label: 'In progress'
  },
  new: {
    bg: '#F0F4FF',
    color: '#3350C8',
    dot: '#5BB8E8',
    label: 'New ⭐'
  },
  retry: {
    bg: '#FFEDE6',
    color: '#C04030',
    dot: '#F47B5A',
    label: 'Try again'
  },
  locked: {
    bg: '#F5F5F5',
    color: '#808090',
    dot: '#B0B8C0',
    label: 'Locked'
  }
};
function PZBadge({
  status = 'done',
  children
}) {
  const s = PZ_BADGES[status];
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      padding: '6px 14px',
      borderRadius: 999,
      background: s.bg,
      fontFamily: '"Baloo 2", sans-serif',
      fontWeight: 700,
      fontSize: 13,
      color: s.color
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: '50%',
      background: s.dot
    }
  }), children || s.label);
}

// ─────────── Avatar — felt circle ───────────
function PZAvatar({
  src,
  color = '#F0F4FF',
  size = 80,
  ring = false,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: size,
      height: size,
      borderRadius: '50%',
      ...feltSurface(color),
      overflow: 'hidden',
      boxShadow: ring ? '0 0 0 4px #fff, 0 0 0 7px #F5A623' : 'none',
      ...style
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: "",
    style: {
      position: 'absolute',
      left: '-15%',
      top: '-12%',
      width: '130%',
      height: '130%',
      objectFit: 'contain',
      zIndex: 1
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      inset: 6,
      borderRadius: '50%',
      border: '2px dashed rgba(255,255,255,0.55)',
      pointerEvents: 'none',
      zIndex: 2
    }
  }));
}

// ─────────── Top bar (back arrow uses felt) ───────────
function PZTopBar({
  title,
  onBack,
  color = '#B68CE8',
  dark = '#8A5CC8',
  right
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '8px 20px 14px',
      gap: 12
    }
  }, onBack ? /*#__PURE__*/React.createElement("button", {
    onClick: onBack,
    "aria-label": "Back",
    style: {
      position: 'relative',
      width: 44,
      height: 44,
      borderRadius: 999,
      color: '#fff',
      border: 'none',
      ...feltSurface(color),
      boxShadow: `0 4px 0 ${dark}, 0 6px 10px rgba(61,44,30,0.12)`,
      cursor: 'pointer',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 20 20",
    style: {
      display: 'block',
      margin: '0 auto',
      position: 'relative',
      zIndex: 1
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M13 4l-6 6 6 6",
    fill: "none",
    stroke: "#fff",
    strokeWidth: "3.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      inset: 4,
      borderRadius: 999,
      border: '2px dashed rgba(255,255,255,0.65)',
      pointerEvents: 'none'
    }
  })) : /*#__PURE__*/React.createElement("span", {
    style: {
      width: 44
    }
  }), title && /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      textAlign: 'center',
      fontFamily: '"Baloo 2", sans-serif',
      fontWeight: 800,
      fontSize: 18,
      color: '#3D2C1E'
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 44,
      display: 'flex',
      justifyContent: 'flex-end'
    }
  }, right || null));
}

// expose for cross-script Babel scope
Object.assign(window, {
  PZButton,
  PZIconTile,
  PZLessonCard,
  PZProgress,
  PZBadge,
  PZAvatar,
  PZTopBar,
  PZ_DOMAIN_COLORS,
  feltSurface,
  FELT_URL
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/peek-a-zoo-app/components/Primitives.jsx", error: String((e && e.message) || e) }); }

// ui_kits/peek-a-zoo-app/components/ProfileScreen.jsx
try { (() => {
// ProfileScreen.jsx — landscape: avatar + progress on the left, stickers on the right.

function ProfileScreen({
  onBack
}) {
  const domains = [{
    name: 'Numbers',
    color: 'green',
    value: 72
  }, {
    name: 'Counting',
    color: 'blue',
    value: 100
  }, {
    name: 'Tracing',
    color: 'gold',
    value: 48
  }, {
    name: 'Stories',
    color: 'pink',
    value: 16
  }, {
    name: 'Rhymes',
    color: 'lilac',
    value: 0
  }];
  const stickers = [{
    src: '../../assets/pebi.webp',
    unlocked: true,
    bg: '#F0F4FF'
  }, {
    src: '../../assets/nimu.webp',
    unlocked: true,
    bg: '#A8DC70'
  }, {
    src: '../../assets/nimu.webp',
    unlocked: true,
    bg: '#FFF6E0'
  }, {
    src: '../../assets/jiku.webp',
    unlocked: false,
    bg: '#FFEDE6'
  }, {
    src: '../../assets/mimi.webp',
    unlocked: false,
    bg: '#F4ECFF'
  }, {
    src: '../../assets/icon-story.webp',
    unlocked: false,
    bg: '#F5F5F5'
  }, {
    src: '../../assets/icon-rhyme.webp',
    unlocked: false,
    bg: '#F5F5F5'
  }, {
    src: '../../assets/icon-tracing-one.webp',
    unlocked: true,
    bg: '#FFF6E0'
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      display: 'grid',
      gridTemplateColumns: '300px 1fr',
      gap: 20,
      padding: '4px 24px 16px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onBack,
    "aria-label": "Back",
    style: {
      alignSelf: 'flex-start',
      width: 40,
      height: 40,
      borderRadius: 999,
      background: '#B68CE8',
      color: '#fff',
      border: 'none',
      cursor: 'pointer',
      backgroundImage: 'radial-gradient(circle at 1.5px 1.5px, rgba(255,255,255,0.18) 1px, transparent 0)',
      backgroundSize: '14px 14px',
      boxShadow: '0 4px 0 #8A5CC8',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 20 20",
    style: {
      display: 'block',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M13 4l-6 6 6 6",
    fill: "none",
    stroke: "#fff",
    strokeWidth: "3.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      inset: 3,
      borderRadius: 999,
      border: '2px dashed rgba(255,255,255,0.55)',
      pointerEvents: 'none'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(PZAvatar, {
    src: "../../assets/nimu.webp",
    color: "#A8DC70",
    size: 96,
    ring: true
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: '"Baloo 2", sans-serif',
      fontWeight: 800,
      fontSize: 20,
      color: '#3D2C1E'
    }
  }, "Golu"), /*#__PURE__*/React.createElement(PZBadge, {
    status: "inprog"
  }, "\u2B50 7 stars \xB7 level 2")), /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#FFFDF8',
      borderRadius: 20,
      padding: '12px 14px',
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      boxShadow: '0 4px 14px rgba(61,44,30,0.06)',
      flex: 1,
      minHeight: 0,
      overflow: 'auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: '"Baloo 2", sans-serif',
      fontWeight: 800,
      fontSize: 14,
      color: '#3D2C1E'
    }
  }, "Progress"), domains.map(d => /*#__PURE__*/React.createElement("div", {
    key: d.name,
    style: {
      display: 'grid',
      gridTemplateColumns: '70px 1fr 36px',
      gap: 8,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: '"Baloo 2", sans-serif',
      fontWeight: 700,
      fontSize: 12,
      color: '#3D2C1E'
    }
  }, d.name), /*#__PURE__*/React.createElement(PZProgress, {
    value: d.value,
    color: d.color,
    showPct: false
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: '"Baloo 2", sans-serif',
      fontWeight: 800,
      fontSize: 11,
      color: '#A07850',
      textAlign: 'right'
    }
  }, d.value, "%"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      paddingTop: 4
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: '"Baloo 2", sans-serif',
      fontWeight: 800,
      fontSize: 18,
      color: '#3D2C1E'
    }
  }, "Sticker book"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Nunito',
      fontWeight: 700,
      fontSize: 11,
      color: '#A07850'
    }
  }, "4 of 8 unlocked")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 12,
      flex: 1,
      minHeight: 0
    }
  }, stickers.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      position: 'relative',
      borderRadius: 18,
      background: s.unlocked ? s.bg : '#B0B8C0',
      backgroundImage: 'radial-gradient(circle at 1.5px 1.5px, rgba(255,255,255,0.18) 1px, transparent 0)',
      backgroundSize: '14px 14px',
      overflow: 'hidden',
      display: 'grid',
      placeItems: 'center',
      opacity: s.unlocked ? 1 : 0.7
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: s.src,
    alt: "",
    style: {
      width: '78%',
      height: '78%',
      objectFit: 'contain',
      position: 'relative',
      zIndex: 1
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      inset: 6,
      borderRadius: 14,
      border: '2px dashed rgba(255,255,255,0.55)',
      pointerEvents: 'none',
      zIndex: 2
    }
  }), !s.unlocked && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 6,
      right: 6,
      width: 24,
      height: 24,
      borderRadius: 999,
      background: '#fff',
      display: 'grid',
      placeItems: 'center',
      fontSize: 13,
      zIndex: 3,
      boxShadow: '0 1px 2px rgba(0,0,0,0.15)'
    }
  }, "\uD83D\uDD12"))))));
}
Object.assign(window, {
  ProfileScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/peek-a-zoo-app/components/ProfileScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/peek-a-zoo-app/components/SplashScreen.jsx
try { (() => {
// SplashScreen.jsx — landscape splash. The phone frame now provides sky+clouds,
// so this screen only contributes logo + characters + CTA. (Matches Figma Login frame.)

function SplashScreen({
  onStart
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      position: 'relative',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 24,
      padding: '0 36px 32px',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo.png",
    alt: "Peek-A-Zoo",
    style: {
      width: '100%',
      maxWidth: 360,
      display: 'block',
      filter: 'drop-shadow(0 6px 0 rgba(0,0,0,0.18))'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: '"Baloo 2", sans-serif',
      fontWeight: 800,
      fontSize: 18,
      color: '#fff',
      lineHeight: 1.3,
      maxWidth: 320,
      textShadow: '0 2px 0 rgba(0,0,0,0.20)'
    }
  }, "Let's begin the adventure!"), /*#__PURE__*/React.createElement(PZButton, {
    variant: "yellow",
    size: "lg",
    onClick: onStart
  }, "Let's play!")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/mimi.webp",
    alt: "",
    style: {
      width: 140,
      transform: 'rotate(-8deg) translateY(14px)',
      filter: 'drop-shadow(0 6px 10px rgba(0,0,0,0.18))'
    }
  }), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/pebi.webp",
    alt: "",
    style: {
      width: 220,
      zIndex: 2,
      marginLeft: -20,
      marginRight: -20,
      filter: 'drop-shadow(0 8px 12px rgba(0,0,0,0.22))'
    }
  }), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/jiku.webp",
    alt: "",
    style: {
      width: 140,
      transform: 'rotate(8deg) translateY(14px)',
      filter: 'drop-shadow(0 6px 10px rgba(0,0,0,0.18))'
    }
  })));
}
Object.assign(window, {
  SplashScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/peek-a-zoo-app/components/SplashScreen.jsx", error: String((e && e.message) || e) }); }

})();
