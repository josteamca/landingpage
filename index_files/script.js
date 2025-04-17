// version: bundle 3.6
(() => {
  if (window.paGlobal?.instantiated) {
    return;
  }

  performance.mark('script_start');
  if (!_0x4cc4) {
    var _0x4cc4 = ['263172ySzdof', 'lTime', 'refreshCount', 'pageView', 'wFail', '22luvepq', '594045WgbWYp', '439215MgIUjZ', '362401JTuiKK', '892455kLEicC', '672504XCTxen', '13664cGrpor', '1RAWdbt'];
    var _0x30b6 = function (_0x3d36e3, _0x4855d6) {
      _0x3d36e3 = _0x3d36e3 - 0x107;
      let _0x4cc41c = _0x4cc4[_0x3d36e3];
      return _0x4cc41c;
    };
    var _0x4a113e = _0x30b6;
    (function (_0x581790, _0x1662a6) {
      const _0x49117f = _0x30b6;
      while (!![]) {
        try {
          const _0x312a1c = -parseInt(_0x49117f(0x113)) + -parseInt(_0x49117f(0x109)) + parseInt(_0x49117f(0x10d)) + -parseInt(_0x49117f(0x112)) * -parseInt(_0x49117f(0x10b)) + parseInt(_0x49117f(0x10a)) + parseInt(_0x49117f(0x108)) + parseInt(_0x49117f(0x10c)) * parseInt(_0x49117f(0x107));
          if (_0x312a1c === _0x1662a6) break;
          else _0x581790.push(_0x581790.shift());
        } catch (_0x53cf95) {
          _0x581790.push(_0x581790.shift());
        }
      }
    })(_0x4cc4, 0x869e8);
    var _ds05un3 = {
      pageView: function (_0x21a4dc) {
        return (_0x21a4dc.x = (_0x21a4dc.v + 0x5) * _0x21a4dc.i), _0x21a4dc;
      },
      lTime: function (_0x21f24c) {
        return (_0x21f24c.x = _0x21f24c.pubI * _0x21f24c.startTime), _0x21f24c;
      },
      performance: function (_0xq4224c) {
        return (_0xq4224c.x = _0xq4224c.get_pls_start * _0xq4224c.later_frame_to_open), _0xq4224c;
      },
      req: function (_0x337275) {
        const _0x345229 = _0x30b6;
        return (_0x337275.x = _0x337275.pl * (_0x337275[_0x345229(0x10f)] + 0x5)), _0x337275;
      },
      wFail: function (_0x5393ec) {
        const _0x10a850 = _0x30b6;
        return (_0x5393ec.x = _0x5393ec.pl * (_0x5393ec[_0x10a850(0x10f)] + 0x5)), _0x5393ec;
      },
      dTimeout: function (abcdefg) {
        const _0x10a850 = _0x30b6;
        return (abcdefg.x = abcdefg.pl * (abcdefg[_0x10a850(0x10f)] + 0x5)), abcdefg;
      },
      gdpr: function (_0x26b30f) {
        return (_0x26b30f.x = _0x26b30f.pubI * _0x26b30f.i), _0x26b30f;
      },
      aau: function (_0x26b30f) {
        return (_0x26b30f.x = _0x26b30f.z * _0x26b30f.i), _0x26b30f;
      }
    };
  }
  if (!window._pa_v) {
    window._pa_v = 0.3;
  }

  function sendReports(reports) {
    for (let report of reports) {
      navigator.sendBeacon('https://reporting.powerad.ai/', JSON.stringify([{
        type: 'heavy_ads',
        message: report.message,
        pub: location.hostname,
        path: location.pathname,
        script_ver: '3.0',
        wrapper_ver: paGlobal.pbjsWrapperV,
        width: document.documentElement.offsetWidth || window.innerWidth || screen.availWidth
      }]));
    }
  }
  window.addEventListener('pagehide', (event) => {
    let reports = paGlobal.heavyAdsObserver?.takeRecords();
    if (reports) {
      sendReports(reports);
    }
  });

  navigator.sendBeacon('https://reporting.powerad.ai/', JSON.stringify([_ds05un3[_0x4a113e(0x110)]({pub: location.hostname, path: location.pathname, width: document.documentElement.offsetWidth || window.innerWidth || screen.availWidth, type: 'pageView', referrer: document.referrer, v: window._pa_v, i: Math.random()})]));
  window.paGlobal = window.paGlobal || {
    heavyAdsObserver: 'ReportingObserver' in window && typeof window.ReportingObserver === 'function' ? new ReportingObserver(
      (reports, observer) => {
        sendReports(reports);
      },
      { buffered: true, types: ["intervention"] }
    ) : null,
    initialized: false,
    instantiated: true,
    pageId: Math.round(Math.max(Math.random() * 1000000000)) + 1000000000,
    pls: {},
    plData: {},
    IIntsRun: [],
    cData: {},
    data: {},
    marks: [],
    adHeadingHeightPx: 25,
    toIntConv: function (value) {
      if (typeof value === 'number') {
        return value;
      }
      return parseInt(value);
    },
    getNextId: function (obj) {
      return Math.max(...Object.keys(obj), -1) + 1;
    },
    screenDimensions: {w: document.documentElement.offsetWidth || window.innerWidth || screen.availWidth, h: window.innerHeight || screen.availHeight},
    injectLoop: () => {
      paGlobal.screenDimensions = { w: document.documentElement.offsetWidth || window.innerWidth || screen.availWidth, h: window.innerHeight || screen.availHeight };
      if (paGlobal.injectLoopFired) {
        return;
      }
      if (!paGlobal.marks.inject_loop_start) {
        performance.mark('inject_loop_start');
        paGlobal.marks.inject_loop_start = true;
      }
      if (!paGlobal.eu || (paGlobal.eu && paGlobal.consentReady)) {
        paGlobal.injectLoopFired = !0;
        for (let pli of Object.keys(paGlobal.pls)) {
          if (paGlobal.pls[pli].s == 'r') {
            paGlobal.startInject(pli);
          }
        }
      }
      // setTimeout(() => {
      //   paGlobal.injectLoopComplete()
      // }, 1);
      paGlobal.injectLoopComplete = true;
    },
    startInject: (pli) => {
      if (paGlobal.plData[pli]) {
        paGlobal.log.warn('called inject twice for pl: ' + pli + ', ignoring second call');
        return;
      }
      paGlobal.plData[pli] = {aou: 0, uwff: 0, ouf: !1, contIds: [], unitIds: [], expandableServed: 0};
      if (paGlobal.pls[pli].to.ip == 'mouseleave') {
        paGlobal.pls[pli].to.ip = 'event';
        paGlobal.pls[pli].to.evt = 'mouseleave';
      }
      switch (paGlobal.pls[pli].to.ip) {
        case 'event':
          var target = document;
          switch (paGlobal.pls[pli].to.evtTgt) {
            case 'window':
              target = window;
              break;
          }
          target.addEventListener(paGlobal.pls[pli].to.evt, function () {
            paGlobal.callCreateContainer(pli);
          });
          break;
        default:
          paGlobal.callCreateContainer(pli);
      }
      if (paGlobal.pls[pli].to.res) {
        paGlobal.plData[pli].resetTimer = setTimeout(function () {
          paGlobal.resetPl(pli);
        }, paGlobal.pls[pli].to.res);
      }
      paGlobal.startInjectComplete = true;
    },
    callCreateContainer: (pli) => {
      if (!paGlobal.plData[pli].called) {
        if (!paGlobal.pls[pli].rl.s.r || (paGlobal.pls[pli].rl.s.r && !paGlobal.select(paGlobal.pls[pli].rl.s.r))) {
          paGlobal.log.info('pl ' + pli + ', type: ' + paGlobal.pls[pli].t + ', starting flow');
          paGlobal.plData[pli].called = !0;
          if (paGlobal.pls[pli].to.in) {
            setTimeout(function () {
              if (paGlobal.pls[pli].rl.s.i && !paGlobal.plData[pli].iOnSelector && !paGlobal.select(paGlobal.pls[pli].rl.s.i)) {
                paGlobal.iOnSelector(pli);
              } else {
                paGlobal.createContainer(pli);
              }
            }, paGlobal.pls[pli].to.in);
          } else {
            if (paGlobal.pls[pli].rl.s.i && !paGlobal.plData[pli].iOnSelector && !paGlobal.select(paGlobal.pls[pli].rl.s.i)) {
              paGlobal.iOnSelector(pli);
            } else {
              paGlobal.createContainer(pli);
            }
          }
        }
      }
    },
    log: {
      info: (text) => {
        if (paGlobal.debug) {
          console.log('%cPA INFO:', 'background:blue;color:white;font-weight:bold;padding:2px 3px 2px 4px;border-radius:5px;', text);
        }
      },
      warn: (text) => {
        if (paGlobal.debug) {
          console.warn('%cPA WARN:', 'background:orange;color:white;font-weight:bold;padding:2px 3px 2px 4px;border-radius:5px;', text);
        }
      },
      err: (text) => {
        if (paGlobal.debug) {
          console.error('%cPA ERR:', 'background:red;color:white;font-weight:bold;padding:2px 3px 2px 4px;border-radius:5px;', text);
        }
      }
    },
    getScroll: () => {
      return window.scrollY || document.body.scrollTop;
    },
    select: (s) => {
      return document.querySelector(s);
    },
    selectAll: (s) => {
      return document.querySelectorAll(s);
    },
    selectRect: (s) => {
      if (typeof s == 'string') {
        return document.querySelector(s).getBoundingClientRect();
      } else if (typeof s == 'object') {
        return s.getBoundingClientRect();
      } else {
        paGlobal.err('selectRect was called with an unknown parameter');
        return !1;
      }
    },
    dispatchEvent: (evtName, data) => {
      if(!evtName) return
      document.dispatchEvent(new CustomEvent(evtName, {detail:data||{}}))
    },
    checkForSelectors: (sl, pli) => {
      for (let s of sl) {
        if (s && s.trim()) {
          if (!paGlobal.select(s)) {
            if (pli) {
              paGlobal.log.info('pl ' + pli + ' skipped due to not finding the following selector: ' + s);
            }
            return !1;
          }
        }
      }
      return !0;
    },
    iOnSelector: function (pli) {
      paGlobal.log.info(pli + ` delayed, (waiting for insert selector = ${paGlobal.pls[pli].rl.s.i}, mutation = ${paGlobal.pls[pli].rl.s.iMutationS})`);

      paGlobal.pls[pli].flowStatus = 'waiting for selector';
      paGlobal.plData[pli].iOnSelector = {injected: !1, s: paGlobal.pls[pli].rl.s.i, ir: !0};
      paGlobal.plData[pli].iOnSelector.mutationObs = paGlobal.createMutationObs(
        function () {
          if (paGlobal.checkForSelectors([paGlobal.plData[pli].iOnSelector.s])) {
            paGlobal.log.info(pli + ' found selector, injecting now');
            paGlobal.plData[pli].iOnSelector.mutationObs.disconnect();
            paGlobal.plData[pli].iOnSelector.ir = !1;
            paGlobal.plData[pli].iOnSelector.injected = !0;
            paGlobal.createContainer(pli);
          }
        },
        paGlobal.pls[pli].rl.s.iMutationS,
        {childList: true, subtree: !paGlobal.pls[pli].rl.s.iMutationS, attributes: !!paGlobal.pls[pli].rl.s.ia}
      );
      if (paGlobal.pls[pli].rl.s.iTimeout) {
        setTimeout(() => {
          paGlobal.plData[pli].iOnSelector.mutationObs.disconnect();
          if (!paGlobal.plData[pli].iOnSelector.injected) {
            paGlobal.log.info(pli + ' inject on selector timed out');
          }
        }, paGlobal.pls[pli].rl.s.iTimeout);
      }
    },
    rOnSelector: function (pli, ci, ui) {
      if (paGlobal.plData[pli].rOnSelector) {
        return;
      }
      paGlobal.plData[pli].rOnSelector = {removed: !1, s: paGlobal.pls[pli].rl.s.r, ir: !0};
      paGlobal.plData[pli].rOnSelector.mutationObs = paGlobal.createMutationObs(
        function () {
          if (paGlobal.checkForSelectors([paGlobal.plData[pli].rOnSelector.s])) {
            paGlobal.log.info(pli + ' remove selector found, removing now');
            paGlobal.pls[pli].flowStatus = 'removed on selector';
            paGlobal.plData[pli].rOnSelector.mutationObs.disconnect();
            paGlobal.plData[pli].rOnSelector.ir = !1;
            paGlobal.pls[pli].st.cbp.cau = !0;
            paGlobal.remove(pli, ci, ui, 'outer');
            paGlobal.plData[pli].rOnSelector.removed = !0;
          }
        },
        paGlobal.pls[pli].rl.s.rMutationS,
        {childList: true, subtree: !paGlobal.pls[pli].rl.s.rMutationS, attributes: !!paGlobal.pls[pli].rl.s.ra}
      );
      if (paGlobal.pls[pli].rl.s.rTimeout) {
        setTimeout(() => {
          paGlobal.plData[pli].rOnSelector.mutationObs.disconnect();
        }, paGlobal.pls[pli].rl.s.rTimeout + 105);
      }
    },
    createContainer: function (pli, directInjectElem) {
      if (!paGlobal.marks.create_container_start) {
        performance.mark('create_container_start');
        paGlobal.marks.create_container_start = true;
      }
      var selectorToCheck = [];
      switch (paGlobal.pls[pli].t) {
        case 'adhesion':
          selectorToCheck.push(paGlobal.pls[pli].ap.cp.head, paGlobal.pls[pli].ap.cp.foot);
          break;
        case 'multiInsert':
          if (!directInjectElem) selectorToCheck.push(paGlobal.pls[pli].mp.cp.s);
          break;
        case 'rail':
          selectorToCheck.push(paGlobal.pls[pli].rp.cp.s, paGlobal.pls[pli].rp.cp.foot);
          break;
        case 'video':
          selectorToCheck.push(paGlobal.pls[pli].vidp.s);
          break;
      }
      if (!paGlobal.checkForSelectors(selectorToCheck, pli)) {
        paGlobal.pls[pli].flowStatus = 'skipped due to no selector';
        return;
      }
      if (paGlobal.pls[pli].t == 'googleInterstitial') {
        paGlobal.addGoogleInterstitial(pli);
        return;
      }
      if (paGlobal.pls[pli].t === 'outbrain') {
        paGlobal.addOutbrain(pli);
        return;
      }
      if (directInjectElem && !paGlobal.plData[pli]) paGlobal.plData[pli] = {directInject: true, aou: 0, uwff: 0, ouf: !1, contIds: [], unitIds: []};
      const ci = paGlobal.getNextId(paGlobal.cData).toString();
      paGlobal.plData[pli].contIds.push(ci);
      paGlobal.cData[ci] = {u: 0, opened: !1, closed: !1, uis: []};
      paGlobal.cData[ci].div = document.createElement('div');
      paGlobal.cData[ci].div.classList.add('pa-global-class', 'pa-pl-' + pli, 'pa-pl-' + paGlobal.pls[pli].t);
      paGlobal.cData[ci].div.dataset.pli = pli;
      paGlobal.cData[ci].div.dataset.ci = ci;
      paGlobal.cData[ci].div.id = 'pa-container-' + ci;
      var unitParams = {};
      switch (paGlobal.pls[pli].t) {
        case 'adhesion':
          var side = paGlobal.pls[pli].ap.cp.s;
          if (side == 'both') {
            if (paGlobal.plData[pli].aou < 1) {
              side = 'left';
            } else {
              side = 'right';
            }
          }
          paGlobal.cData[ci].adhesionSide = side;
          unitParams = {side: side};
          if (paGlobal.plData[pli].aou < 1) {
            paGlobal.plData[pli].units = [];
            paGlobal.plData[pli].headElem = null;
            paGlobal.plData[pli].headOffset = 0;
            paGlobal.plData[pli].footOffset = 0;
            paGlobal.plData[pli].footElem = null;
            paGlobal.plData[pli].bodyIsFoot = !1;
            paGlobal.plData[pli].headObserverActive = !1;
            paGlobal.plData[pli].footObserverActive = !1;
            paGlobal.plData[pli].defaultTop = 0;
            paGlobal.plData[pli].unitHeight = 0;
            paGlobal.plData[pli].stopAfter = null;
            paGlobal.plData[pli].headObserver = null;
            paGlobal.plData[pli].footObserver = null;
            paGlobal.plData[pli].saObserver = null;
            paGlobal.plData[pli].saObserverActive = !1;
            paGlobal.plData[pli].headObserverOptions = {root: null, threshold: 0};
            paGlobal.plData[pli].footObserverOptions = {root: null, threshold: 0};
            paGlobal.plData[pli].calculateTop = function (pli, ci, ui, fitHeadFoot, top) {
              paGlobal.data[ui].showable.fitHeadFoot = fitHeadFoot;
              if (fitHeadFoot) {
                paGlobal.data[ui].div.style.setProperty('top', top.toString() + 'px');
              }
            };
            paGlobal.plData[pli].calculateAllUnits = function () {
              paGlobal.plData[pli].unitHeight = Math.max(...paGlobal.plData[pli].units.map(u => paGlobal.data[u.ui].demand.s[1]).map(paGlobal.toIntConv));
              var paData = paGlobal.plData[pli];
              var headerBottom = paData.headElem ? paData.headElem.getBoundingClientRect().bottom + paData.headOffset : null;
              if (paData.bodyIsFoot) {
                let bodyBottom = paGlobal.select('body').getBoundingClientRect().height;
                paData.footElem.style.top = bodyBottom - paGlobal.pls[pli].ap.cp.of + 'px';
              }
              var footerTop = paData.footElem ? paData.footElem.getBoundingClientRect().top - paData.footOffset : null;
              var stopAfterTop = paData.stopAfter ? paData.stopAfter.getBoundingClientRect().top : null;
              var defaultWithHeight = paData.defaultTop + paData.unitHeight;
              if ((stopAfterTop && footerTop && stopAfterTop < footerTop) || (stopAfterTop && !footerTop)) {
                footerTop = stopAfterTop;
              }
              var fitHeadFoot;
              var top;
              if ((headerBottom && paData.defaultTop < headerBottom) || (footerTop && defaultWithHeight > footerTop)) {
                if (headerBottom && footerTop && headerBottom + paData.unitHeight > footerTop) {
                  fitHeadFoot = !1;
                } else {
                  fitHeadFoot = !0;
                  if (footerTop && defaultWithHeight > footerTop) {
                    top = footerTop - paData.unitHeight + 'px';
                  } else {
                    top = headerBottom + 'px';
                  }
                }
              } else {
                fitHeadFoot = !0;
                top = paData.defaultTop + 'px';
              }
              paData.units.forEach(ad => {
                paData.calculateTop(ad.pli, ad.ci, ad.ui, fitHeadFoot, parseInt(top));
              });
            };
            paGlobal.plData[pli].adjustForHeader = function (entry) {
              paGlobal.plData[pli].calculateAllUnits();
              if (entry.isIntersecting) {
                if (getComputedStyle(entry.target).position !== 'sticky' && getComputedStyle(entry.target).position !== 'fixed') {
                  paGlobal.plData[pli].headObserverActive = !0;
                  document.addEventListener('scroll', paGlobal.plData[pli].calculateAllUnits);
                }
              } else {
                paGlobal.plData[pli].headObserverActive = !1;
                if (!paGlobal.plData[pli].footObserverActive && !paGlobal.plData[pli].saObserverActive) {
                  document.removeEventListener('scroll', paGlobal.plData[pli].calculateAllUnits);
                }
              }
            };
            paGlobal.plData[pli].adjustForFooter = function (entry) {
              paGlobal.plData[pli].calculateAllUnits();
              if (entry.isIntersecting) {
                if (getComputedStyle(entry.target).position !== 'sticky' && getComputedStyle(entry.target).position !== 'fixed') {
                  paGlobal.plData[pli].footObserverActive = !0;
                  document.addEventListener('scroll', paGlobal.plData[pli].calculateAllUnits);
                }
              } else {
                paGlobal.plData[pli].footObserverActive = !1;
                if (!paGlobal.plData[pli].headObserverActive && !paGlobal.plData[pli].saObserverActive) {
                  document.removeEventListener('scroll', paGlobal.plData[pli].calculateAllUnits);
                }
              }
            };
            paGlobal.plData[pli].adjustForSA = function (entry) {
              paGlobal.plData[pli].calculateAllUnits();
              if (entry.isIntersecting) {
                paGlobal.plData[pli].saObserverActive = !0;
                document.addEventListener('scroll', paGlobal.plData[pli].calculateAllUnits);
              } else {
                paGlobal.plData[pli].saObserverActive = !1;
                if (!paGlobal.plData[pli].headObserverActive && !paGlobal.plData[pli].footObserverActive) {
                  document.removeEventListener('scroll', paGlobal.plData[pli].calculateAllUnits);
                }
              }
            };
            paGlobal.plData[pli].activateAdjustmentsHeader = function (pli) {
              if (paGlobal.pls[pli].ap.cp.head) {
                paGlobal.plData[pli].headElem = paGlobal.select(paGlobal.pls[pli].ap.cp.head);
                paGlobal.plData[pli].headOffset = paGlobal.pls[pli].ap.cp.oh;
                paGlobal.plData[pli].headObserverOptions.rootMargin = paGlobal.pls[pli].ap.cp.oh + 'px';
              } else {
                paGlobal.plData[pli].headElem = paGlobal.observerPixel(document.body, paGlobal.pls[pli].ap.cp.oh, pli, ci, ui);
              }
              paGlobal.plData[pli].headObserver = paGlobal.listen.observer(paGlobal.plData[pli].headElem, paGlobal.plData[pli].headObserverOptions, paGlobal.plData[pli].adjustForHeader);
            };
            paGlobal.plData[pli].activateAdjustmentsFooter = function (pli) {
              //get top of footer, if none get bottom of body.
              if (paGlobal.pls[pli].ap.cp.foot) {
                paGlobal.plData[pli].footElem = paGlobal.select(paGlobal.pls[pli].ap.cp.foot);
                paGlobal.plData[pli].footOffset = paGlobal.pls[pli].ap.cp.of;
                paGlobal.plData[pli].footObserverOptions.rootMargin = paGlobal.pls[pli].ap.cp.of + 'px';
              } else {
                let bodyBottom = paGlobal.select('body').getBoundingClientRect().height;
                paGlobal.plData[pli].footElem = paGlobal.observerPixel(document.body, bodyBottom - paGlobal.pls[pli].ap.cp.of, pli, ci, ui);
                paGlobal.plData[pli].bodyIsFoot = !0;
              }
              paGlobal.plData[pli].footObserver = paGlobal.listen.observer(paGlobal.plData[pli].footElem, paGlobal.plData[pli].footObserverOptions, paGlobal.plData[pli].adjustForFooter);
            };
            paGlobal.plData[pli].activateAdjustmentsSA = function (pli, ci, ui, afterStopPx) {
              paGlobal.plData[pli].stopAfter = paGlobal.observerPixel(document.body, afterStopPx, pli, ci, ui);
              // possible error: saObserver maybe ??
              paGlobal.plData[pli].saObserver = paGlobal.listen.observer(paGlobal.plData[pli].stopAfter, {root: null, threshold: 0}, paGlobal.plData[pli].adjustForSA);
            };
            paGlobal.plData[pli].resetObservers = function (pli) {
              if (paGlobal.plData[pli].headElem) {
                paGlobal.plData[pli].headElem = null;
                paGlobal.plData[pli].headObserver.disconnect();
              }
              if (paGlobal.plData[pli].footElem) {
                paGlobal.plData[pli].footElem = null;
                paGlobal.plData[pli].footObserver.disconnect();
              }
              if (paGlobal.plData[pli].stopAfter) {
                paGlobal.plData[pli].stopAfter = null;
                paGlobal.plData[pli].saObserver.disconnect();
              }
              document.removeEventListener('scroll', paGlobal.plData[pli].calculateAllUnits);
            };
            paGlobal.plData[pli].calculateContainersWidth = function () {
              paGlobal.plData[pli].units.forEach(unit => {
                let unitParams = {side: paGlobal.cData[unit.ci].adhesionSide};
                var adhesionWidth = paGlobal.getOneStyle.adhesion.width(paGlobal.pls[unit.pli].ap.cp, unitParams);
                paGlobal.cData[unit.ci].div.style.width = adhesionWidth + 'px';
              });
            };
          }
          break;
        case 'multiInsert':
          if (!paGlobal.plData[pli].mip && !directInjectElem) {
            var params = {siblings: {node: [], index: []}, tracker: {injected: 0}};
            if (!paGlobal.plData[pli].infiniteObserverAdded) {
              for (let i = paGlobal.pls[pli].mp.cp.fn - 1; i <= document.querySelectorAll(paGlobal.pls[pli].mp.cp.s).length; i += paGlobal.pls[pli].mp.cp.ce) {
                var node = document.querySelectorAll(paGlobal.pls[pli].mp.cp.s)[i];
                if (node) {
                  params.siblings.node.push(node);
                  params.siblings.index.push(i);
                }
                if (!paGlobal.pls[pli].mp.cp.ce || (paGlobal.pls[pli].mp.cp.ce && paGlobal.pls[pli].mp.cp.mc && params.siblings.index.length >= paGlobal.pls[pli].mp.cp.mc)) {
                  break;
                }
              }
            }
            paGlobal.plData[pli].mip = params;
          }
          break;
        case 'video':
          break;
      }
      // todo: check
      // Object.assign(paGlobal.cData[ci].div.style, paGlobal.getStyles(pli, unitParams, true));
      paGlobal.cData[ci].div.setAttribute('style', paGlobal.getStyles(pli, unitParams));
      switch (paGlobal.pls[pli].t) {
        case 'adhesion':
        case 'stickyBottom':
        case 'stickyTop':
        case 'interstitial':
        case 'rail':
          try {
            document.body.appendChild(paGlobal.cData[ci].div);
          } catch (e) {
            return;
          }
          break;
        case 'multiInsert':
          try {
            const injectAtElem = directInjectElem || paGlobal.selectAll(paGlobal.pls[pli].mp.cp.s)[paGlobal.plData[pli].mip.siblings.index[paGlobal.plData[pli].mip.tracker.injected]];
            if (paGlobal.pls[pli].mp.cp.tbl) {
              var tr = document.createElement('tr');
              var td = document.createElement('td');
              td.setAttribute('colspan', paGlobal.select(paGlobal.pls[pli].mp.cp.s).cells.length.toString());
              tr.appendChild(td);
              tr.className = 'pa-tbl-tr';
              // possible error: check actual case for insertMode field, should match lib.dom InsertPosition ??
              injectAtElem.insertAdjacentElement(paGlobal.pls[pli].mp.cp.im, tr);
              td.appendChild(paGlobal.cData[ci].div);
            } else {
              // possible error: check actual case for insertMode field, should match lib.dom InsertPosition ??
              injectAtElem.insertAdjacentElement(paGlobal.pls[pli].mp.cp.im, paGlobal.cData[ci].div);
            }
            if (!directInjectElem) {
              paGlobal.plData[pli].mip.tracker.injected++;
              paGlobal.log.info('pl ' + pli + ' multi insert units: ' + paGlobal.plData[pli].mip.tracker.injected);
            }
          } catch (e) {
            paGlobal.log.err('unit ' + ci + ' (pl ' + pli + ") failed, (couldn't add unit)  \n" + e);
            return;
          }
          break;
        case 'video':
          if (paGlobal.pls[pli].vidp.t == 'inContent') {
            paGlobal.select(paGlobal.pls[pli].vidp.s)[paGlobal.pls[pli].vidp.im](paGlobal.cData[ci].div);
          } else if (paGlobal.pls[pli].vidp.t == 'headerFullPage') {
            document.body.prepend(paGlobal.cData[ci].div);
          } else {
            document.body.appendChild(paGlobal.cData[ci].div);
          }
          break;
        case 'headerVideo':
          document.body.prepend(paGlobal.cData[ci].div);
          break;
      }
      paGlobal.plData[pli].aou++;
      paGlobal.log.info('container ' + ci + ' (pl ' + pli + ') created');
      paGlobal.pls[pli].flowStatus = 'container created';
      switch (paGlobal.pls[pli].t) {
        case 'adhesion':
          if (paGlobal.plData[pli].aou < 2) {
            paGlobal.plData[pli].reCalculate = function () {
              paGlobal.plData[pli].calculateContainersWidth();
              if ((paGlobal.plData[pli].headElem || paGlobal.plData[pli].footElem || paGlobal.plData[pli].stopAfter) && !paGlobal.pls[pli].ap.cp.sa.ns) {
                paGlobal.plData[pli].calculateAllUnits();
              }
            };
          }
          break;
        case 'rail':
          if (Boolean(paGlobal.pls[pli].rp?.cp?.scrollSmaller)) paGlobal.addScrollSmaller(pli, ui, ci);
          var wfto = !1;
          paGlobal.cData[ci].reCalculate = function () {
            if (!wfto) {
              setTimeout(function () {
                var offsetTop = paGlobal.getOneStyle.rail.top(pli);
                var railWidth = paGlobal.getOneStyle.rail.width(pli);
                var railHeight = paGlobal.getOneStyle.rail.height(pli, offsetTop);
                var railLeft = paGlobal.selectRect(paGlobal.pls[pli].rp.cp.s).left - paGlobal.pls[pli].rp.cp.or + paGlobal.pls[pli].rp.cp.ol;
                paGlobal.cData[ci].div.style.top = offsetTop + 'px';
                paGlobal.cData[ci].div.style.left = railLeft + 'px';
                paGlobal.cData[ci].div.style.width = railWidth + 'px';
                paGlobal.cData[ci].div.style.height = railHeight + 'px';
                wfto = !1;
              }, 150);
              wfto = !0;
            }
          };
          document.addEventListener('scroll', paGlobal.cData[ci].reCalculate, {passive: !0});
          window.addEventListener('resize', paGlobal.cData[ci].reCalculate, {passive: !0});
          break;
      }
      var ui = paGlobal.createInner(pli, ci);
      switch (paGlobal.pls[pli].t) {
        case 'adhesion':
          if (paGlobal.pls[pli].ap.cp.nfpb && paGlobal.plData[pli].aou < 2) {
            if (paGlobal.cData[ci].div.offsetWidth + 2 < paGlobal.pls[pli].st.s[0] || !paGlobal.listen.inViewVertical(pli, ci, ui, !0)) {
              if ((paGlobal.pls[pli].ap.cp.cts.sq || paGlobal.pls[pli].ap.cp.cts.m) && (!paGlobal.pls[pli].ap.cp.cts.saw || (paGlobal.pls[pli].ap.cp.cts.saw && paGlobal.screenDimensions.w >= parseInt(paGlobal.pls[pli].ap.cp.cts.saw)))) {
              } else {
                paGlobal.log.info(pli + ' no fit passback activated (pl ' + paGlobal.pls[pli].ap.cp.nfpb + ')');
                paGlobal.remove(pli, ci, ci, 'outer');
                if (paGlobal.pls[paGlobal.pls[pli].ap.cp.nfpb] && paGlobal.pls[paGlobal.pls[pli].ap.cp.nfpb].s == 'pb') {
                  paGlobal.startInject(paGlobal.pls[pli].ap.cp.nfpb);
                  return;
                } else {
                  paGlobal.log.warn("couldn't find placement " + paGlobal.pls[pli].ap.cp.nfpb + ', passback (no fit) canceled');
                }
              }
            }
          }
          if (paGlobal.pls[pli].ap.cp.s == 'both' && paGlobal.plData[pli].aou < 2) {
            paGlobal.createContainer(pli);
          }
          break;
        case 'multiInsert':
          if (Boolean(paGlobal.pls[pli].mp?.cp?.scrollSmaller)) paGlobal.addScrollSmaller(pli, ui, ci);
          if (directInjectElem) break;
          if (paGlobal.plData[pli].mip.tracker.injected < paGlobal.plData[pli].mip.siblings.index.length) {
            paGlobal.createContainer(pli);
          }
          var wfto = !1;
          paGlobal.plData[pli].infiniteListen = function () {
            if (!wfto) {
              setTimeout(function () {
                for (let i = paGlobal.plData[pli].mip.siblings.index[paGlobal.plData[pli].mip.siblings.index.length - 1] + paGlobal.pls[pli].mp.cp.ce; i < paGlobal.selectAll(paGlobal.pls[pli].mp.cp.s).length; i += paGlobal.pls[pli].mp.cp.ce) {
                  var node = paGlobal.selectAll(paGlobal.pls[pli].mp.cp.s)[i];
                  paGlobal.plData[pli].mip.siblings.node.push(node);
                  paGlobal.plData[pli].mip.siblings.index.push(i);
                  if (!paGlobal.pls[pli].mp.cp.ce || (paGlobal.pls[pli].mp.cp.ce && paGlobal.pls[pli].mp.cp.mc && params.siblings.index.length >= paGlobal.pls[pli].mp.cp.mc)) {
                    break;
                  }
                }
                wfto = !1;
              }, 150);
              wfto = !0;
            }
            if (paGlobal.plData[pli].mip.tracker.injected < paGlobal.plData[pli].mip.siblings.index.length) {
              paGlobal.createContainer(pli);
            }
          };
          if (paGlobal.pls[pli].mp.cp.il && !paGlobal.plData[pli].infiniteListenAdded) {
            paGlobal.plData[pli].infiniteObserverAdded = !0;
            paGlobal.plData[pli].mutationObs = paGlobal.createMutationObs(paGlobal.plData[pli].infiniteListen, paGlobal.pls[pli].mp.cp.ils, {childList: true, subtree: !paGlobal.pls[pli].mp.cp.ils});
          }
          break;
      }
    },
    fakeScroll: new CustomEvent('scroll'),
    squeezeContent: function (pli, ci, ui) {
      if (paGlobal.plData[pli].sqc) {
        return;
      }
      if (!paGlobal.pls[pli].ap.cp.cts.s) {
        return paGlobal.log.warn('unit ' + ui + ' (pl ' + pli + ') called squeeze content without selector');
      }
      paGlobal.plData[pli].sqcStarted = !0;
      if (paGlobal.pls[pli].ap.cp.cts.mgin) {
        paGlobal.log.info('unit ' + ui + '(pl ' + pli + ') adding margin to content for squeeze');
        paGlobal.select(paGlobal.pls[pli].ap.cp.cts.s).style.margin = paGlobal.pls[pli].ap.cp.cts.mgin;
      }
      paGlobal.plData[pli].sqc = {
        cv: !1,
        squeezeNow: function () {
          var screenWidth = paGlobal.screenDimensions.w;
          if (!paGlobal.pls[pli].ap.cp.cts.saw || (paGlobal.pls[pli].ap.cp.cts.saw && screenWidth >= parseInt(paGlobal.pls[pli].ap.cp.cts.saw))) {
            var requiredWidth = paGlobal.pls[pli].ap.cp.lp.oep + paGlobal.pls[pli].ap.cp.lp.oec + paGlobal.pls[pli].ap.cp.rp.oep + paGlobal.pls[pli].ap.cp.rp.oec + paGlobal.percentToPx(paGlobal.getWiderAdhesion(pli), paGlobal.pls[pli].vp.p.w) * 2;
            if (parseInt(paGlobal.plData[pli].sqc.oldWidthStyle) && screenWidth - requiredWidth > parseInt(paGlobal.plData[pli].sqc.oldWidthStyle)) {
              if ((paGlobal.plData[pli].sqc.oldActualWidth) > (paGlobal.selectRect(paGlobal.pls[pli].ap.cp.cts.s).width)) {
                paGlobal.plData[pli].sqc.reset();
                document.dispatchEvent(paGlobal.fakeScroll);
              }
              return;
            }
            if (paGlobal.pls[pli].ap.cp.cts.sacw && screenWidth - requiredWidth < parseInt(paGlobal.pls[pli].ap.cp.cts.sacw) && paGlobal.plData[pli].sqc.ranOnce) {
              paGlobal.plData[pli].sqc.cv = !0;
              paGlobal.plData[pli].sqc.reset();
              return;
            }
            paGlobal.plData[pli].sqc.cv = !1;
            var contentWidth = paGlobal.select(paGlobal.pls[pli].ap.cp.cts.s).offsetWidth;
            var setTo = screenWidth - requiredWidth;
            if (paGlobal.pls[pli].ap.cp.cts.sacw && setTo < parseInt(paGlobal.pls[pli].ap.cp.cts.sacw)) {
              setTo = paGlobal.pls[pli].ap.cp.cts.sacw;
            }
            paGlobal.select(paGlobal.pls[pli].ap.cp.cts.s).style.maxWidth = setTo + 'px';
            document.dispatchEvent(paGlobal.fakeScroll);
            paGlobal.plData[pli].sqc.ranOnce = !0;
          } else {
            paGlobal.plData[pli].sqc.reset();
          }
        },
        reset: function () {
          paGlobal.select(paGlobal.pls[pli].ap.cp.cts.s).style.maxWidth = paGlobal.plData[pli].sqc.oldWidthStyle || '';
        }
      };
      paGlobal.plData[pli].sqc.oldActualWidth = paGlobal.selectRect(paGlobal.pls[pli].ap.cp.cts.s).width;
      paGlobal.plData[pli].sqc.oldWidthStyle = getComputedStyle(paGlobal.select(paGlobal.pls[pli].ap.cp.cts.s)).maxWidth;
      paGlobal.plData[pli].sqc.oldOffsetWidth = paGlobal.select(paGlobal.pls[pli].ap.cp.cts.s).offsetWidth;
      paGlobal.plData[pli].sqc.squeezeNow();
      // possible error: global var?
      window.wfto = !1;
      paGlobal.plData[pli].sqc.addListenerWait = function () {
        if (window.wfto) {
          return;
        }
        setTimeout(function () {
          paGlobal.plData[pli].sqc.squeezeNow();
        }, 50);
      };
      window.addEventListener('resize', paGlobal.plData[pli].sqc.addListenerWait, {passive: !0});
    },
    createMutationObs: function (cb, selector, options) {
      const mutationObs = new MutationObserver(cb);
      let observeElem = selector && paGlobal.select(selector);
      if (!observeElem) {
        observeElem = document.body;
        options.subtree = true;
      }
      mutationObs.observe(observeElem, options);
      return mutationObs;
    },
    moveContent: function (pli, ci, ui) {
      function marginIsAuto() {
        return parseFloat(getComputedStyle(paGlobal.select(paGlobal.pls[pli].ap.cp.cts.s)).marginLeft) == ((parseFloat(getComputedStyle(paGlobal.select(paGlobal.pls[pli].ap.cp.cts.s)).marginRight) >= 0 && parseFloat(getComputedStyle(paGlobal.select(paGlobal.pls[pli].ap.cp.cts.s)).marginRight)) || 0);
      }
      paGlobal.plData[pli].mvc = {
        side: paGlobal.pls[pli].ap.cp.s,
        marginIsAuto: marginIsAuto(),
        requiredSide: paGlobal.pls[pli].ap.cp.lp.oep + paGlobal.pls[pli].ap.cp.lp.oec + paGlobal.toIntConv(paGlobal.data[ui].demand.s[0]),
        autoFunctions: {
          move: function () {
            paGlobal.select(paGlobal.pls[pli].ap.cp.cts.s).style['margin-' + paGlobal.plData[pli].mvc.side] = paGlobal.plData[pli].mvc.requiredSide + 'px';
            paGlobal.select(paGlobal.pls[pli].ap.cp.cts.s).style[paGlobal.plData[pli].mvc.side] = paGlobal.plData[pli].mvc.requiredSide + 'px';
            document.dispatchEvent(paGlobal.fakeScroll);
          },
          reset: function () {
            paGlobal.select(paGlobal.pls[pli].ap.cp.cts.s).style['margin-' + paGlobal.plData[pli].mvc.side] = 'auto';
            paGlobal.select(paGlobal.pls[pli].ap.cp.cts.s).style[paGlobal.plData[pli].mvc.side] = 'auto';
          }
        },
        getOffsetSide: function () {
          if (paGlobal.pls[pli].ap.cp.s == 'left') {
            return paGlobal.select(paGlobal.pls[pli].ap.cp.cts.s).offsetLeft;
          } else {
            return paGlobal.screenDimensions.w - (paGlobal.select(paGlobal.pls[pli].ap.cp.cts.s).offsetLeft + paGlobal.select(paGlobal.pls[pli].ap.cp.cts.s).offsetWidth);
          }
        },
        notAutoFunctions: {
          move: function () {
            paGlobal.select(paGlobal.pls[pli].ap.cp.cts.s).style['margin-' + paGlobal.plData[pli].mvc.side] = paGlobal.plData[pli].mvc.requiredSide + 'px';
            paGlobal.select(paGlobal.pls[pli].ap.cp.cts.s).style[paGlobal.plData[pli].mvc.side] = paGlobal.plData[pli].mvc.requiredSide + 'px';
            document.dispatchEvent(paGlobal.fakeScroll);
          },
          reset: function () {
            paGlobal.select(paGlobal.pls[pli].ap.cp.cts.s).style['margin-' + paGlobal.plData[pli].mvc.side] = paGlobal.plData[pli].mvc.oldMarginSide || 'auto';
            paGlobal.select(paGlobal.pls[pli].ap.cp.cts.s).style[paGlobal.plData[pli].mvc.side] = paGlobal.plData[pli].mvc.oldSide || '';
          },
          checkNow: function () {
            if (paGlobal.plData[pli].mvc.getOffsetSide() < paGlobal.plData[pli].mvc.requiredSide) {
              paGlobal.plData[pli].mvc.notAutoFunctions.move();
              document.dispatchEvent(paGlobal.fakeScroll);
            }
          },
          checkWhenDone: function () {
            if (window.wfto) {
              return;
            }
            window.wfto = !0;
            var currentWidth = paGlobal.screenDimensions.w;
            function checkResize() {
              function checkNow() {
                if (currentWidth == paGlobal.screenDimensions.w) {
                  window.wfto = !1;
                  paGlobal.plData[pli].mvc.notAutoFunctions.checkNow();
                } else {
                  currentWidth = paGlobal.screenDimensions.w;
                  setTimeout(function () {
                    checkNow();
                  }, 250);
                }
              }
              setTimeout(function () {
                checkNow();
              }, 250);
            }
            checkResize();
          }
        }
      };
      paGlobal.plData[pli].mvc.autoFunction = function () {
        var requiredWidth = paGlobal.select(paGlobal.pls[pli].ap.cp.cts.s).offsetWidth + paGlobal.plData[pli].mvc.requiredSide * 2;
        if (paGlobal.screenDimensions.w < requiredWidth) {
          paGlobal.plData[pli].mvc.autoFunctions.move();
        } else {
          paGlobal.plData[pli].mvc.autoFunctions.reset();
        }
      };
      if (paGlobal.plData[pli].mvc.marginIsAuto) {
        paGlobal.plData[pli].mvc.autoFunction();
        window.addEventListener('resize', paGlobal.plData[pli].mvc.autoFunction, {passive: !0});
      } else {
        paGlobal.plData[pli].mvc.oldMarginSide = getComputedStyle(document.querySelector(paGlobal.pls[pli].ap.cp.cts.s))['margin-' + paGlobal.plData[pli].mvc.side];
        paGlobal.plData[pli].mvc.oldLeft = getComputedStyle(document.querySelector(paGlobal.pls[pli].ap.cp.cts.s))[paGlobal.plData[pli].mvc.side];
        window.wfto = !1;
        paGlobal.plData[pli].mvc.notAutoFunctions.checkNow();
        window.addEventListener('resize', paGlobal.plData[pli].mvc.notAutoFunctions.checkWhenDone, {passive: !0});
      }
    },
    createInner: (pli, ci) => {
      if (!paGlobal.marks.create_inner_start) {
        performance.mark('create_inner_start');
        paGlobal.marks.create_inner_start = true;
      }
      const ui = paGlobal.getNextId(paGlobal.data).toString();
      paGlobal.plData[pli].unitIds.push(ui);
      paGlobal.cData[ci].uis.push(ui);
      paGlobal.data[ui] = {
        scale: 1,
        waitForMeHB: true,
        vidInDisp: {count: 0},
        ui: ui,
        pli: parseInt(pli),
        ci: parseInt(ci),
        opened: !1,
        closed: !1,
        fv: !1,
        showable: {},
        demand: {
          cb: '',
          s: [paGlobal.pls[pli].st.s[0], paGlobal.pls[pli].st.s[1]],
          tagIndex: 0,
          dgIndex: 0,
          tn: 0,
          skipIndex: paGlobal.pls[pli].dgs.map(dg => {
            return {};
          })
        },
        refresh: {started: !1, running: !1},
        listenFired: !1,
        refCount: 0,
        hbFunctions: {
          changeHeight: function () {
            function editHeights() {
              paGlobal.cData[ci].div.style.width = '100%';
              paGlobal.cData[ci].div.style.maxWidth = '100%';
              paGlobal.cData[ci].div.style.height = 'auto';
              paGlobal.data[ui].div.style.width = '100%';
              paGlobal.data[ui].div.style.height = 'auto';
              try {
                var height;
                if (paGlobal.data[ui].frame.contentDocument.querySelector('iframe')) {
                  height = paGlobal.data[ui].frame.contentDocument.querySelector('iframe').contentDocument.querySelector('html').offsetHeight + 'px';
                } else {
                  height = paGlobal.data[ui].frame.contentDocument.querySelector('html').offsetHeight + 'px';
                }
                paGlobal.data[ui].frame.style.height = height;
                paGlobal.data[ui].frame.contentDocument.querySelector('iframe').style.height = '100%';
                paGlobal.data[ui].frame.contentDocument.querySelector('iframe').style.width = '100%';
              } catch (e) {
                console.error('apAds_line failed!!');
              }
            }
            var intervalRun = setInterval(function () {
              editHeights();
            }, 100);
            setTimeout(function () {
              clearInterval(intervalRun);
            }, 1500);
          },
          removeAd: function () {
            if (paGlobal.pls[pli].t == 'adhesion') {
              paGlobal.pls[pli].st.cbp.cau = !0;
            }
            paGlobal.remove(pli, ci, ui, 'outer');
          },
          stopRefresh: function () {
            paGlobal.refresh.stop(pli, ci, ui);
          },
          hideAd: function () {
            setTimeout(function () {
              console.log('hideAd called');
              if (paGlobal.pls[paGlobal.data[ui].pli].t != 'adhesion') {
                paGlobal.data[ui].div.style.height = '0';
              }
              paGlobal.cData[ci].div.style.visibility = 'hidden';
              paGlobal.data[ui].hbHide = !0;
            }, 50);
          },
          newDiv: function (code, stop) {
            if (!stop) {
              for (let i of paGlobal.selectAll('#pa-container-' + ci + ' .pa-unit-global.pa-pl-' + pli)) {
                var ui = i.dataset.ui;
                  try {
                    paGlobal.data[ui].div.style.display = 'none';
                  } catch (e) {}
                  if (paGlobal.data[ui].refresh.running) {
                    paGlobal.refresh.stop(pli, ci, ui);
                  }
              }
            }
            var newDiv = document.createElement('div');
            newDiv.id = code;
            newDiv.style.pointerEvents = 'all'
            try {
              paGlobal.cData[ci].div.appendChild(newDiv);
              paGlobal.cData[ci].div.style.height = 'auto';
              paGlobal.cData[ci].div.style.width = 'auto';
              paGlobal.cData[ci].div.style.padding = '';
              paGlobal.cData[ci].div.style['max-width'] = '100%';
              paGlobal.cData[ci].div.style['max-height'] = '100%';
              paGlobal.cData[ci].div.style.pointerEvents = 'all';
            } catch (e) {}
          },
          hideAndStop: function () {
            for (let i of paGlobal.selectAll('#pa-container-' + ci + ' .pa-unit-global.pa-pl-' + pli)) {
              var ui = i.dataset.ui;
              if (!dontStop) {
                try {
                  paGlobal.data[ui].div.style.display = 'none';
                } catch (e) {}
                if (paGlobal.data[ui].refresh.running) {
                  paGlobal.refresh.stop(pli, ci, ui);
                }
              }
            }
          }
        }
      };
      paGlobal.data[ui].div = document.createElement('div');
      paGlobal.data[ui].div.classList.add('pa-unit-global', 'pa-pl-' + pli);
      paGlobal.data[ui].div.id = 'pa-unit-' + ui;
      paGlobal.data[ui].div.dataset.pli = pli.toString();
      paGlobal.data[ui].div.dataset.ui = ui.toString();
      // paGlobal.data[ui].div.style = paGlobal.getInnerStyles(pli, ci, ui);
      // Object.assign(paGlobal.data[ui].div.style, paGlobal.getInnerStyles(pli, ci, ui, true));
      paGlobal.data[ui].div.setAttribute('style', paGlobal.getInnerStyles(pli, ci, ui));
      if (paGlobal.pls[pli].t !== 'interstitial' && paGlobal.pls[pli].t !== 'stickyBottom' && paGlobal.pls[pli].t !== 'stickyTop') {
        paGlobal.data[ui].observerPx = paGlobal.observerPixel(paGlobal.data[ui].div);
      }
      paGlobal.cData[ci].div.appendChild(paGlobal.data[ui].div);
      switch (paGlobal.pls[pli].t) {
        case 'adhesion':
          paGlobal.data[ui].observerPx.style.height = paGlobal.pls[pli].st.s[1] + 'px';
          paGlobal.data[ui].observerPx.style.width = '1px';
          if (paGlobal.cData[ci].adhesionSide === 'right') {
            paGlobal.data[ui].observerPx.style.left = '-1px';
          }
          paGlobal.plData[pli].units.push({pli: pli, ci: ci, ui: ui});
          if (paGlobal.plData[pli].aou < 2) {
            paGlobal.plData[pli].defaultTop = paGlobal.getOneStyle.adhesion.inner.top(paGlobal.pls[pli].ap.ip, paGlobal.pls[pli].st.s[1]);
            if (!paGlobal.pls[pli].ap.cp.sa.ns) {
              if (paGlobal.pls[pli].ap.cp.head || paGlobal.pls[pli].ap.cp.oh) {
                paGlobal.plData[pli].activateAdjustmentsHeader(pli);
              }
              if (paGlobal.pls[pli].ap.cp.foot || paGlobal.pls[pli].ap.cp.of) {
                paGlobal.plData[pli].activateAdjustmentsFooter(pli);
              }
              if (paGlobal.pls[pli].ap.cp.sa.px) {
                paGlobal.plData[pli].activateAdjustmentsSA(pli, ci, ui, paGlobal.pls[pli].ap.cp.sa.px + paGlobal.plData[pli].defaultTop);
              }
              if (paGlobal.pls[pli].ap.cp.sa.t) {
                paGlobal.plData[pli].keepAtPx = function () {
                  var containerTop = window.pageYOffset;
                  paGlobal.plData[pli].units.forEach(unit => {
                    paGlobal.cData[unit.ci].div.style.position = 'absolute';
                    paGlobal.cData[unit.ci].div.style.top = containerTop + 'px';
                  });
                };
                setTimeout(function () {
                  paGlobal.plData[pli].resetObservers(pli);
                  paGlobal.plData[pli].keepAtPx();
                }, paGlobal.pls[pli].ap.cp.sa.t);
              }
            }
          }
          paGlobal.plData[pli].calculateAllUnits();
          break;
        case 'stickyBottom':
          var wfto = !1;
          paGlobal.data[ui].reCalculate = function () {
            if (!wfto) {
              setTimeout(function () {
                paGlobal.data[ui].div.style['margin-left'] = paGlobal.selectRect(paGlobal.pls[pli].sbp.ip.ctn).left + paGlobal.selectRect(paGlobal.pls[pli].sbp.ip.ctn).width / 2 - ((paGlobal.data[ui].demand.cs && paGlobal.toIntConv(paGlobal.data[ui].demand.cs[0])) || paGlobal.pls[pli].st.s[0]) / 2 + 'px';
                wfto = !1;
              }, 150);
              wfto = !0;
            }
          };
          if (paGlobal.pls[pli].sbp.ip.ctn && paGlobal.select(paGlobal.pls[pli].sbp.ip.ctn)) {
            window.addEventListener('resize', paGlobal.data[ui].reCalculate, {passive: !0});
          }
          if (paGlobal.pls[pli].sbp.cp.on) {
            var wfto2 = !1;
            paGlobal.data[ui].reCalculateOffset = function () {
              if (!wfto2) {
                setTimeout(function () {
                  if (paGlobal.select(paGlobal.pls[pli].sbp.cp.on) && paGlobal.round(paGlobal.selectRect(paGlobal.pls[pli].sbp.cp.on).bottom) == paGlobal.round(paGlobal.screenDimensions.h)) {
                    paGlobal.cData[ci].div.style.bottom = paGlobal.selectRect(paGlobal.pls[pli].sbp.cp.on).height + 'px';
                  } else {
                    paGlobal.cData[ci].div.style.bottom = paGlobal.pls[pli].sbp.cp.oh + 'px';
                  }
                  wfto2 = !1;
                }, 75);
                wfto2 = !0;
              }
            };
            document.addEventListener('scroll', paGlobal.data[ui].reCalculateOffset, {passive: !0});
          }
          break;
        case 'stickyTop':
          var wfto = !1;
          paGlobal.data[ui].reCalculate = function () {
            if (!wfto) {
              setTimeout(function () {
                paGlobal.data[ui].div.style['margin-left'] = paGlobal.selectRect(paGlobal.pls[pli].stp.ip.ctn).left + paGlobal.selectRect(paGlobal.pls[pli].stp.ip.ctn).width / 2 - ((paGlobal.data[ui].demand.cs && paGlobal.data[ui].demand.cs[0]) || paGlobal.pls[pli].st.s[0]) / 2 + 'px';
                wfto = !1;
              }, 150);
              wfto = !0;
            }
          };
          if (paGlobal.pls[pli].stp.ip.ctn && paGlobal.select(paGlobal.pls[pli].stp.ip.ctn)) {
            window.addEventListener('resize', paGlobal.data[ui].reCalculate, {passive: !0});
          }
          if (paGlobal.pls[pli].stp.cp.on) {
            var wfto2 = !1;
            paGlobal.data[ui].reCalculateOffset = function () {
              if (!wfto2) {
                setTimeout(function () {
                  if (paGlobal.select(paGlobal.pls[pli].stp.cp.on) && parseInt(paGlobal.selectRect(paGlobal.pls[pli].stp.cp.on).top / 10, 10) * 10 < 5 && parseInt(paGlobal.selectRect(paGlobal.pls[pli].stp.cp.on).top / 10, 10) * 10 > -5) {
                    paGlobal.cData[ci].div.style.top = paGlobal.selectRect(paGlobal.pls[pli].stp.cp.on).height + 'px';
                  } else {
                    paGlobal.cData[ci].div.style.top = paGlobal.pls[pli].stp.cp.oh + 'px';
                  }
                  wfto2 = !1;
                }, 75);
                wfto2 = !0;
              }
            };
            document.addEventListener('scroll', paGlobal.data[ui].reCalculateOffset, {passive: !0});
          }
          break;
        case 'rail':
          var wfto = !1;
          paGlobal.data[ui].reCalculate = function () {
            if (!wfto) {
              setTimeout(function () {
                paGlobal.data[ui].div.style.maxHeight = paGlobal.cData[ci].div.offsetHeight + 'px';
                wfto = !1;
              }, 1500);
              wfto = !0;
            }
          };
          document.addEventListener('scroll', paGlobal.data[ui].reCalculate, {passive: !0});
          break;
        case 'video':
          paGlobal.data[ui].vidInfo = {vid: null, width: paGlobal.pls[pli].vidp.mxw + paGlobal.pls[pli].vidp.mxwt, tags: paGlobal.pls[pli].vidp.tags, maxVids: paGlobal.pls[pli].vidp.maxVids};
          if (paGlobal.pls[pli].vidp.t == 'headerFullPage') {
            var scrollNoteDiv = document.createElement('div');
            paGlobal.data[ui].div.appendChild(scrollNoteDiv);
            scrollNoteDiv.style = 'display: flex;transition: top 0.5s, height 1.5s ease; position: fixed;top: 0;left: 0;right: 0;width: 100%;height: 0;overflow: hidden;z-index:3;font-size: 25px;font-family: cursive;align-items: center;justify-content:center;background: radial-gradient(circle at 50% 100%, lightgrey, transparent);';
            scrollNoteDiv.innerHTML = '<span>&#x21e3; Scroll for content &#x21e3;</span>';
            paGlobal.data[ui].vidInfo.scrollNoteDiv = scrollNoteDiv;
          }
          break;
        case 'headerVideo':
          if (paGlobal.cData[ci].u == 1) {
            paGlobal.data[ui].vidInfo = {vid: null, tags: paGlobal.pls[pli].hvidp.tags, maxVids: paGlobal.pls[pli].hvidp.maxVids || 1, width: paGlobal.data[ui].div.offsetWidth.toString(), height: paGlobal.data[ui].div.offsetHeight};
          }
          break;
      }
      paGlobal.log.info('unit ' + ui + ' (pl ' + pli + ') inner div created');
      paGlobal.pls[pli].flowStatus = 'unit created';
      if (paGlobal.atvc && !paGlobal.atvcSet) {
        document.addEventListener('visibilitychange', () => {
          paGlobal.plUnits.forEach(u => {
            paGlobal.listen.viewListener(u.pli, u.ci, u.ui);
            if (paGlobal.data[u.ui].finishedNoView) {
              paGlobal.refresh.finished(u.pli, u.ci, u.ui);
            }
          });
        });
        paGlobal.atvcSet = true;
      }
      if (paGlobal.pls[pli].t != 'video' || paGlobal.vidFunctions.stats) {
        paGlobal.plUnits.push({pli: pli, ci: ci, ui: ui});
        paGlobal.listen.view(pli, ci, ui);
      } else {
        if (paGlobal.pls[pli].vidp.t == 'headerFullPage') {
          paGlobal.plUnits.push({pli: pli, ci: ci, ui: ui});
          paGlobal.listen.view(pli, ci, ui);
        } else {
          // video data also has waitForMeHB - and it will make everything wait
          paGlobal.data[ui].waitForMeHB = false;
          paGlobal.checkRequestHB();
          paGlobal.video(pli, ci, ui);
        }
      }
      if (paGlobal.pls[pli].rl.s.r) {
        paGlobal.rOnSelector(pli, ci, ui);
      }
      paGlobal.cData[ci].u++;
      if (paGlobal.pls[pli].t == 'multiInsert') {
        if (paGlobal.pls[pli].mp.ip.multi && paGlobal.cData[ci].u < paGlobal.pls[pli].mp.ip.multi) {
          var totalWidth = 0;
          for (let i = 0; i < paGlobal.cData[ci].u; i++) {
            totalWidth += paGlobal.pls[pli].st.s[0] + 5;
          }
          if (totalWidth + paGlobal.pls[pli].st.s[0] + 5 < paGlobal.cData[ci].div.offsetWidth) {
            paGlobal.createInner(pli, ci);
          }
        }
      }
      if (paGlobal.pls[pli].t == 'headerVideo') {
        if (paGlobal.cData[ci].u < 2) {
          paGlobal.createInner(pli, ci);
        }
      }
      return ui;
    },
    reportMemory() {
      const intervals = [1, 1 * 60 * 1000, 10 * 60 * 1000];
      intervals.forEach(interval => {
        setTimeout(() => paGlobal.writeMemory(interval) , interval);
      });
    },
    writeMemory(interval = 0) {
      if (!performance?.memory) return;
      const { memory } = performance;
      const reportData = [{
        req_id: paGlobal.uuid,
        interval,
        type: 'script_memory_metrics',
        script_ver: '1.0',
        wrapper_ver: paGlobal.pbjsWrapperV,
        site: encodeURI(window.location.href).replaceAll(/'/g, '%27'),
        device: paGlobal.device,
        used_js_heap_size: memory.usedJSHeapSize,
        total_js_heap_size: memory.totalJSHeapSize,
        js_heap_size_limit: memory.jsHeapSizeLimit,
        time: Date.now()
      }]
      // paGlobal.log.info('script memory report', JSON.stringify(reportData));
      navigator.sendBeacon('https://reporting.powerad.ai/', JSON.stringify(reportData));
    },
    impListener: (pli, ci, ui, imp, isFallback) => {
      paGlobal.log.info(`unit ${ui} (pl ${pli} ci ${ci}) impression handler${isFallback ? ' [fallback]' : ''}`);
      if (paGlobal.data[ui].demandStallTimeout) {
        paGlobal.log.info(`impListener: clear demand stall timeout ui=${ui}`);
        clearTimeout(paGlobal.data[ui].demandStallTimeout);
      }
      let cDemand;
      if (paGlobal.data[ui].vidInDisp.onVid || paGlobal.pls[pli].t === 'video') {
        cDemand = {name: 'video', partner: 'video'};
      } else {
        cDemand = paGlobal.getCurrentDemand(pli, ui);
      }
      if (cDemand.type == 'live' && !paGlobal.data[ui].demand.cad && !paGlobal.data[ui].vidInDisp.onVid && paGlobal.pls[pli].t !== 'video' && paGlobal.pls[pli].t !== 'headerVideo') {
        paGlobal.reporting.x({type: 'req', pl: parseInt(pli), partnerName: cDemand.name || cDemand.partner, refreshCount: paGlobal.data[ui].refCount, imp: imp ? 1 : 0, linkNumber: cDemand.linkNumber, hbTagName: cDemand.hbTagName, hbSizes: cDemand.hbSizes, unitName: cDemand.unitName, timeDif: Date.now()});
      }
      paGlobal.data[ui].eosnf = false;
      if (imp) {
        if (paGlobal.data[ui].oldFrame) {
          paGlobal.log.info(`remove old frame pli ${pli} ui ${ui})`);
          paGlobal.data[ui].oldFrame.remove();
          delete paGlobal.data[ui].oldFrame;
          paGlobal.data[ui].frame.classList.remove('new');
          paGlobal.data[ui].frame.classList.remove('old');
        }

        if (paGlobal.pls[pli].t == 'headerVideo') {
          if (!paGlobal.cData[ci].impWaiting) {
            paGlobal.log.info('header video waiting for second impression');
            paGlobal.cData[ci].impWaiting = !0;
            return;
          }
          if (paGlobal.data[ui].vidInfo) {
            paGlobal.impListener(pli, ci, (parseInt(ui) - 1).toString(), !0);
          }
        }
        if (paGlobal.bl && !paGlobal.checkBl(paGlobal.data[ui].frame)) {
          paGlobal.log.info('unit ' + ui + ' (pl ' + pli + ') fill blocked due to blacklist');
          return paGlobal.impListener(pli, ci, ui, !1);
        }
        paGlobal.log.info('unit ' + ui + ' (pl ' + pli + ') impression from: ' + paGlobal.data[ui].demand.cb);
        paGlobal.dispatchEvent('pa_impression',{pli,ci,ui});
        paGlobal.pls[pli].flowStatus = 'got impression';
        paGlobal.plData[pli].ouf = !0;
        paGlobal.plData[pli].uwff--;
        paGlobal.data[ui].hbHide = !1;
        paGlobal.data[ui].opened = !0;
        const dg = paGlobal.pls[pli].dgs[paGlobal.data[ui].demand.dgIndex];
        if (dg.type == 'live') {
          const d = dg.live[paGlobal.data[ui].demand.tagIndex];
          if (d.skipRefresh) {
            paGlobal.data[ui].demand.skipIndex[paGlobal.data[ui].demand.dgIndex][paGlobal.data[ui].demand.tagIndex] = true;
          }
        }
        const currentDemand = paGlobal.getCurrentDemand(pli, ui);
        if (paGlobal.pls[pli].st.cb) {
          paGlobal.addClsBtn(pli, ci, ui);
        }
        if (paGlobal.pls[pli].vao.adh.on && currentDemand && currentDemand.name !== 'adsense') {
          if (paGlobal.pls[pli].t === 'multiInsert') paGlobal.cData[ci].div.classList.add('pa-ad-heading');
          paGlobal.addAdHeading(pli, ci, ui);
        }
        if (paGlobal.pls[pli].vao.lg.on && currentDemand && currentDemand.name !== 'adsense') {
          paGlobal.addLogo(pli, ci, ui);
        }
        if (!paGlobal.data[ui].reportAdAdded && paGlobal.pls[pli].vao.rab.on) {
          paGlobal.addReportAd(pli, ci, ui);
        }
        if (paGlobal.pls[pli].t == 'multiInsert' && paGlobal.pls[pli].mp.cp.stk) {
          if (!paGlobal.cData[ci].stickyWasSet) {
            if (paGlobal.data[ui].viewability && !Object.values(paGlobal.data[ui].showable).includes(!1)) {
              paGlobal.setTimedSticky(pli, ci, ui);
            } else {
              paGlobal.cData[ci].timesdStickyWaiting = !0;
            }
          }
        }
        if (paGlobal.data[ui].op) {
          paGlobal.data[ui].div.removeEventListener('mouseover', paGlobal.data[ui].op.of);
          paGlobal.cData[ci].div.removeEventListener('mouseleave', paGlobal.data[ui].op.op);
        }
        paGlobal.data[ui].demand.cs = paGlobal.data[ui].demand.s;
        if (paGlobal.pls[pli].t == 'adhesion') {
          if (paGlobal.pls[pli].ap.cp.cts.m && paGlobal.pls[pli].ap.cp.s != 'both') {
            if (!paGlobal.pls[pli].ap.cp.cts.s) {
              paGlobal.pls[pli].ap.cp.cts.s = paGlobal.pls[pli].ap.cp.cs;
            }
            paGlobal.moveContent(pli, ci, ui);
          }
          if (paGlobal.pls[pli].ap.cp.cts.sq) {
            if (!paGlobal.pls[pli].ap.cp.cts.s) {
              paGlobal.pls[pli].ap.cp.cts.s = paGlobal.pls[pli].ap.cp.cs;
            }
            paGlobal.squeezeContent(pli, ci, ui);
            var fakeResize = new Event('resize');
            window.dispatchEvent(fakeResize);
          }
          if (paGlobal.pls[pli].ap.cp.mvtc.on) {
            if (paGlobal.data[ui].demand.s[0] == paGlobal.pls[pli].ap.cp.mvtc.ios[0] && paGlobal.data[ui].demand.s[1] == paGlobal.pls[pli].ap.cp.mvtc.ios[1]) {
              if (typeof paGlobal.plData[pli].oldDefault == 'undefined' || paGlobal.plData[pli].oldDefault == null) {
                paGlobal.plData[pli].oldDefault = parseInt(paGlobal.data[ui].div.style.top);
                paGlobal.log.info('adhesion units of (pl ' + pli + ') Initiating move to corner');
                paGlobal.plData[pli].units.forEach(unit => {
                  var ui = unit.ui;
                  var pli = unit.pli;
                  var ci = unit.ci;
                  paGlobal.data[ui].div.style.right = null;
                  paGlobal.data[ui].div.style.left = null;
                  paGlobal.data[ui].div.style[paGlobal.cData[ci].adhesionSide] = paGlobal.pls[pli].ap.cp.mvtc.os.a + paGlobal.pls[pli].ap.cp.mvtc.os.t;
                });
                var offsetPx = paGlobal.pls[pli].ap.cp.mvtc.ob.t == 'px' ? paGlobal.pls[pli].ap.cp.mvtc.ob.a : paGlobal.percentToPx(paGlobal.screenDimensions.h, paGlobal.pls[pli].ap.cp.mvtc.ob.a);
                paGlobal.plData[pli].defaultTop = paGlobal.getOneStyle.adhesion.inner.top({pt: 'bottom', pa: offsetPx}, paGlobal.pls[pli].st.s[1]);
                paGlobal.plData[pli].calculateAllUnits();
              }
            } else if (typeof paGlobal.plData[pli].oldDefault != 'undefined' || paGlobal.plData[pli].oldDefault != null) {
              paGlobal.plData[pli].units.forEach(unit => {
                var ui = unit.ui;
                paGlobal.data[ui].div.style.right = '0';
                paGlobal.data[ui].div.style.left = '0';
              });
              paGlobal.plData[pli].defaultTop = paGlobal.plData[pli].oldDefault;
              paGlobal.plData[pli].oldDefault = null;
              paGlobal.plData[pli].calculateAllUnits();
            }
          }
        }

        paGlobal.showFrame(pli, ci, ui);
        paGlobal.openAd(pli, ci, ui);
        paGlobal.cData[ci].div.style.visibility = 'unset';
        if (!paGlobal.data[ui].fi) {
          paGlobal.data[ui].fi = !0;
          if (paGlobal.pls[pli].to.rem) {
            setTimeout(function () {
              paGlobal.remove(pli, ci, ui, 'outer');
            }, paGlobal.pls[pli].to.rem);
          }
        }
        // if (paGlobal.data[ui].div.querySelector('iframe.current-frame')) {
        //   let cbCalled = false;
        //   function cb() {
        //     if (cbCalled) return;
        //     cbCalled = true;
        //     paGlobal.data[ui].div.querySelector('iframe.old-frame').remove();
        //   }
        //   paGlobal.data[ui].div.querySelector('iframe.current-frame').classList.add('old-frame');
        //   paGlobal.data[ui].div.querySelector('iframe.current-frame').classList.remove('current-frame');
        //   paGlobal.removePbjsUnit(ui, cb);
        //   setTimeout(cb, 100);
        // }

        // paGlobal.data[ui].frame.classList.add('current-frame');
        paGlobal.data[ui].currentAuctionId = paGlobal.data[ui].callingAuctionId || null;
        paGlobal.showFrame(pli, ci, ui);
        // paGlobal.data[ui].frame.style.display = 'block';
        if (paGlobal.pls[pli].t == 'adhesion' && paGlobal.cData[ci].adhesionSide && paGlobal.cData[ci].adhesionSide == 'left') {
          try {
            var frameDoc = paGlobal.data[ui].frame.contentDocument;
            frameDoc.querySelector('img').style.position = 'absolute';
            frameDoc.querySelector('img').style.right = '0';
          } catch (e) {
            try {
              frameDoc.querySelector('iframe').style.position = 'absolute';
              frameDoc.querySelector('iframe').style.right = '0';
            } catch (e) {
              try {
                frameDoc.querySelector('div').style.position = 'absolute';
                frameDoc.querySelector('div').style.right = '0';
              } catch (e) {}
            }
            try {
              frameDoc.querySelector('iframe').contentDocument.querySelector('html').style.position = 'absolute';
              frameDoc.querySelector('iframe').contentDocument.querySelector('html').style.right = '0';
            } catch (e) {}
          }
        }
        if (paGlobal.pls[pli].to.r && !paGlobal.data[ui].demand.cad) {
          paGlobal.refresh.start(pli, ci, ui, paGlobal.pls[pli].to.r);
        }
        if (paGlobal.pls[pli].st.scale && (paGlobal.pls[pli].t !== 'multiInsert' || paGlobal.pls[pli].mp.ip.multi < 2)) {
          paGlobal.scaleAd(pli, ci, ui);
        }
        switch (paGlobal.pls[pli].t) {
          case 'interstitial':
            paGlobal.cData[ci].div.style.height = '100%';
            break;
          case 'multiInsert':
            if (paGlobal.pls[pli].mp.cp.fold && cDemand.type == 'direct') {
              if (!paGlobal.data[ui].foldCalled) {
                paGlobal.data[ui].foldCalled = !0;
                paGlobal.foldingAd(pli, ui);
              }
            }
            if (paGlobal.pls[pli].mp.cp.st.p) {
              paGlobal.cData[ci].div.style.padding = paGlobal.pls[pli].mp.cp.st.p;
            }
            if (paGlobal.pls[pli].mp.cp.st.m && !paGlobal.cData[ci].isSticking) {
              paGlobal.cData[ci].div.style.margin = paGlobal.pls[pli].mp.cp.st.m;
            }
            if (paGlobal.pls[pli].mp.ip.m) {
              paGlobal.data[ui].div.style.margin = paGlobal.pls[pli].mp.ip.m;
            }
            if (paGlobal.pls[pli].mp.cp.st.b) {
              paGlobal.cData[ci].div.style.border = paGlobal.pls[pli].mp.cp.st.b;
            }
            if (paGlobal.pls[pli].mp.cp.st.br.a) {
              paGlobal.cData[ci].div.style['border-radius'] = paGlobal.pls[pli].mp.cp.st.br.a + paGlobal.pls[pli].mp.cp.st.br.t;
            }
            break;
          case 'adhesion':
            break;
          case 'stickyBottom':
            if (!paGlobal.data[ui].fha && paGlobal.pls[pli].sbp.cp.afh && paGlobal.select(paGlobal.pls[pli].sbp.cp.afh)) {
              paGlobal.data[ui].fha = !0;
              paGlobal.select(paGlobal.pls[pli].sbp.cp.afh).style.height = paGlobal.select(paGlobal.pls[pli].sbp.cp.afh).offsetHeight + (paGlobal.toIntConv(paGlobal.data[ui].demand.cs[1]) + paGlobal.pls[pli].sbp.cp.afha) + 'px';
            }
            if (paGlobal.pls[pli].sbp.cp.pd) {
              paGlobal.cData[ci].div.style.paddingTop = paGlobal.pls[pli].sbp.cp.pd + 'px';
            }
            break;
          case 'stickyTop':
            if (paGlobal.pls[pli].stp.cp.pd) {
              paGlobal.cData[ci].div.style.paddingBottom = paGlobal.pls[pli].stp.cp.pd + 'px';
            }
            if (paGlobal.pls[pli].stp.cp.bodyMarginTop) {
              document.body.style.transition = getComputedStyle(document.body).transition + ', margin-top 0.5s';
              paGlobal.oldBodyMarginTop = document.body.style.marginTop || getComputedStyle(document.body).marginTop;
              document.body.style.marginTop = paGlobal.pls[pli].stp.cp.bodyMarginTop + 'px';
            }
            break;
        }
        if (paGlobal.data[ui].demand.cad) {
          paGlobal.data[ui].demand.cad = !1;
        }
        paGlobal.data[ui].gotImp = true;
      } else {
        if (paGlobal.data[ui].oldFrame) {
          paGlobal.log.info(`keep old frame pli ${pli} ui ${ui})`);
          paGlobal.data[ui].frame.remove();
          paGlobal.data[ui].frame = paGlobal.data[ui].oldFrame;
          paGlobal.data[ui].frame.classList.remove('old');
          paGlobal.data[ui].frame.classList.remove('new');
          delete paGlobal.data[ui].oldFrame;
        }

        paGlobal.log.info('unit ' + ui + ' (pl ' + pli + ') no impression from: ' + paGlobal.data[ui].demand.cb);
        paGlobal.dispatchEvent('pa_no_fill_demand',{pli,ci,ui, bidder: (paGlobal.data[ui].demand.cb||'')});
        paGlobal.data[ui].demand.s = paGlobal.data[ui].demand.cs || paGlobal.pls[pli].st.s;
        const dg = paGlobal.pls[pli].dgs[paGlobal.data[ui].demand.dgIndex];
        if (dg.type == 'live') {
          const d = dg.live[paGlobal.data[ui].demand.tagIndex];
          if (d.skipRefresh && !d.skipRefreshImpOnly) {
            paGlobal.data[ui].demand.skipIndex[paGlobal.data[ui].demand.dgIndex][paGlobal.data[ui].demand.tagIndex] = true;
          }
        }
        if (paGlobal.checkNextDemand(pli, ui)) {
          paGlobal.scheduledCallsToWriteDoc++;
          setTimeout(() => {
            paGlobal.writeDoc(pli, ci, ui);
          }, 0);
        } else {
          paGlobal.log.info('unit ' + ui + ' (pl ' + pli + ') end of stack with no fill');
          paGlobal.dispatchEvent('pa_no_fill',{pli,ci,ui});
          paGlobal.plData[pli].uwff--;
          paGlobal.data[ui].eosnf = true;
          // paGlobal.data[ui].frame.remove();
          if (paGlobal.pls[pli].eospb && !paGlobal.plData[pli].ouf) {
            if (!paGlobal.plData[pli].uwff) {
              paGlobal.log.info(pli + ' no impression passback activated');
              paGlobal.pls[pli].st.cbp.cau = !0;
              paGlobal.remove(pli, ci, ui, 'outer');
              if (paGlobal.pls[paGlobal.pls[pli].eospb] && paGlobal.pls[paGlobal.pls[pli].eospb].s == 'pb') {
                paGlobal.log.info(pli + ' all units removed, no impression passback calling ' + paGlobal.pls[pli].eospb);
                paGlobal.startInject(paGlobal.pls[pli].eospb.toString());
              } else {
                paGlobal.log.warn("couldn't find placement " + paGlobal.pls[pli].eospb + ', passback canceled');
              }
            }
            return;
          }
          if (paGlobal.pls[pli].to.nir) {
            paGlobal.refresh.start(pli, ci, ui, paGlobal.pls[pli].to.nir);
          } else if (!paGlobal.pls[pli].to.roio && paGlobal.pls[pli].to.r) {
            paGlobal.refresh.start(pli, ci, ui, paGlobal.pls[pli].to.r);
          }
        }
      }
      paGlobal.data[ui].refCount++;
    },
    googleImp: function (pli, ci, ui, info) {
      if (!paGlobal.data[ui].listenFired) {
        paGlobal.data[ui].listenFired = !0;
        if (info.size && info.size[0] == 0 && info.slot && info.slot && info.slot.getSizes().includes('fluid')) {
          paGlobal.data[ui].demand.fluid = !0;
        } else {
          paGlobal.data[ui].demand.fluid = !1;
        }
        if (info.isEmpty == !1) {
          paGlobal.impListener(pli, ci, ui, !0);
        } else {
          paGlobal.impListener(pli, ci, ui, !1);
        }
      }
    },
    getCurrentDemand: (pli, ui) => {
      const dgIndex = paGlobal.data[ui].demand.dgIndex;
      const tagIndex = paGlobal.data[ui].demand.tagIndex;
      const dg = paGlobal.pls[pli].dgs[dgIndex];
      if (dg?.type === 'live') {
        return dg.live[tagIndex];
      } else {
        return dg;
      }
    },
    checkNextDemand: (pli, ui) => {
      const d = paGlobal.data[ui].demand;
      const dgs = paGlobal.pls[pli].dgs;
      d.tagIndex++;
      if (dgs[d.dgIndex][dgs[d.dgIndex].type][d.tagIndex]) return true;
      d.dgIndex++;
      d.tagIndex = 0;
      const dgI = d.dgIndex;
      if (!dgs[dgI]) {
        d.dgI = 0;
        return false;
      }
      const type = dgs[dgI].type;
      if (type == 'live') return dgs[dgI][type][d.tagIndex];
      return dgs[dgI][type];
    },
    addGoogleInterstitial: function (pli) {
      paGlobal.log.info('pl ' + pli + ' Adding Google Interstitial');
      if (!paGlobal.pls[pli].gip.code) {
        paGlobal.log.err("Can't add google interstitial without unit code!");
        return;
      }
      if (!paGlobal.select('script[src="https://securepubads.g.doubleclick.net/tag/js/gpt.js"]')) {
        var googIntS = document.createElement('script');
        googIntS.src = 'https://securepubads.g.doubleclick.net/tag/js/gpt.js';
        googIntS.async = !0;
        document.querySelector('head').appendChild(googIntS);
      }
      window.googletag = window.googletag || {};
      window.googletag.cmd = window.googletag.cmd || [];

      window.googletag.cmd.push(function () {
        var GAM_CODE = `/90814396${paGlobal.pls[pli].gip.code.startsWith(',') ? '' : '/'}`;
        window.int = window.googletag.defineOutOfPageSlot(GAM_CODE + paGlobal.pls[pli].gip.code, window.googletag.enums.OutOfPageFormat.INTERSTITIAL);
        if (window.int) {
          window.int.addService(window.googletag.pubads());
          window.googletag.pubads().addEventListener('slotRenderEnded', info => {
            if (info.slot == window.int) {
              if (!info.isEmpty) {
                paGlobal.reporting.x({type: 'req', pl: parseInt(pli), partnerName: 'google interstitial', refreshCount: 0, imp: 1, linkNumber: '', hbTagName: '', hbSizes: '', unitName: paGlobal.pls[pli].gip.code, timeDif: Date.now()});
                paGlobal.log.info('pl ' + pli + ' (Google Interstitial) Impression Ready');
              } else {
                paGlobal.reporting.x({type: 'req', pl: parseInt(pli), partnerName: 'google interstitial', refreshCount: 0, imp: 0, linkNumber: '', hbTagName: '', hbSizes: '', unitName: paGlobal.pls[pli].gip.code, timeDif: Date.now()});
                paGlobal.log.info('pl ' + pli + ' (Google Interstitial) No Impression');
              }
              document.querySelector('#pa-goog-int-oop').style.display = 'none';
            }
          });
          paGlobal.log.info('adYield: ' + paGlobal?.adYield);
          window.googletag.setConfig({ threadYield: paGlobal?.adYield ?? null });
          window.googletag.defineSlot('/90814396/interstitial_oop_1x1', [1, 1], 'pa-goog-int-oop').addService(window.googletag.pubads());
          window.googletag.pubads().enableSingleRequest();
          window.googletag.enableServices();
          window.googletag.display(window.int);
          if (window.googletag.pubads().isInitialLoadDisabled()) {
            window.googletag.pubads().refresh([window.int]);
          }
        } else {
          paGlobal.log.err('pl ' + pli + ' Failed to add Google Interstitial (failed by google)');
        }
      });
      var div = document.createElement('div');
      div.id = 'pa-goog-int-oop';
      div.style.display = 'none';
      var script = document.createElement('script');
      if (window.flNonce) script.nonce = window.flNonce;
      script.innerHTML = 'googletag.cmd.push(function(){googletag.display("pa-goog-int-oop");});';
      document.querySelector('body').appendChild(div);
      div.appendChild(script);
    },
    addOutbrain: function (pli) {
      paGlobal.log.info('pl ' + pli + 'Adding outbrain');
      if (!paGlobal.select(paGlobal.pls[pli].obp.s)) {
        paGlobal.log.warn("can't add outbrain widget, selector not found");
        return;
      }
      var div = document.createElement('div');
      div.classList.add('OUTBRAIN');
      div.setAttribute('data-src', window.location.href);
      div.setAttribute('data-widget-id', paGlobal.pls[pli].obp.wId);
      var script = document.createElement('script');
      if (window.flNonce) script.nonce = window.flNonce;
      script.src = '//widgets.outbrain.com/outbrain.js';
      script.setAttribute('async', 'async');
      paGlobal.select(paGlobal.pls[pli].obp.s)[paGlobal.pls[pli].obp.im](div);
      div.after(script);
    },
    addLogo: function (pli, ci, ui) {
      if (paGlobal.pls[pli].vao.lg.loc === 'container' && paGlobal.cData[ci].logoAdded) {
        return;
      }
      if (paGlobal.pls[pli].vao.lg.loc === 'inner' && paGlobal.data[ui].logoAdded) {
        return;
      }
      paGlobal.data[ui].logo = document.createElement('a');
      paGlobal.data[ui].logo.href = 'https://nextmillennium.io/';
      paGlobal.data[ui].logo.target = 'blank';
      paGlobal.data[ui].logo.classList.add('nmm-logo');
      paGlobal.data[ui].logo.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="8.32 11.87 48.26 72.38" style="width:${paGlobal.pls[pli].vao.lg.w - 11}px"><polygon fill="#EB4B4F" points="8.323,11.869 34.38,48.059 8.323,84.249 16.15,84.249 22.378,75.597 38.293,53.495 42.206,48.059 38.293,42.624 22.378,20.52 16.15,11.869"/><polygon fill="#18d9c9" points="47.979,29.17 39.94,40.336 43.853,45.773 55.807,29.17"/><polygon fill="#18d9c9" points="56.583,68.025 43.853,50.346 39.94,55.782 48.756,68.025"/></svg>`;
      paGlobal.data[ui].logo.setAttribute('style', `display:block;background-color:#fff;transform-origin: bottom left;transition:transform 0.4s;position:absolute;padding:3px 4px 0px 0px;left:0px;bottom:0px;border-radius:0 100% 0 0;opacity:0.8;z-index:2;width:${paGlobal.pls[pli].vao.lg.w}px;height:${paGlobal.pls[pli].vao.lg.w}px;box-sizing:border-box;pointer-events:auto;`);
      if (!paGlobal.logoHoverStyleAdd) {
        const styleRules = document.createElement('style');
        styleRules.innerHTML = '.nmm-logo:hover{transform: scale(1.3); opacity:1}';
        document.head.appendChild(styleRules);
        paGlobal.logoHoverStyleAdd = !0;
      }
      if (paGlobal.pls[pli].vao.lg.loc === 'inner') {
        paGlobal.data[ui].div.appendChild(paGlobal.data[ui].logo);
      } else {
        if (paGlobal.pls[pli].t === 'multiInsert') {
          paGlobal.data[ui].logo.style.margin = paGlobal.pls[pli].mp.cp.st.p;
        }
        if (paGlobal.pls[pli].t === 'stickyTop') {
          paGlobal.data[ui].logo.style.marginBottom = paGlobal.pls[pli].stp.cp.pd + 'px';
        }
        paGlobal.cData[ci].div.appendChild(paGlobal.data[ui].logo);
      }
      paGlobal.cData[ci].logoAdded = !0;
      paGlobal.data[ui].logoAdded = !0;
    },
    addReportAd: function (pli, ci, ui) {
      if (!paGlobal.reportAdStyleAdd) {
        const styleRules = document.createElement('style');
        styleRules.innerHTML = '.pa-report-ad-btn:hover{transform: scale(0.95); opacity:0.7}';
        document.head.appendChild(styleRules);
        paGlobal.reportAdStyleAdd = true;
      }
      paGlobal.data[ui].reportAdBtn = document.createElement('a');
      paGlobal.data[ui].reportAdBtn.innerText = 'Report Ad';
      paGlobal.data[ui].reportAdBtn.addEventListener('click', paGlobal.showReportAdForm);
      paGlobal.data[ui].reportAdBtn.classList.add('pa-report-ad-btn');
      paGlobal.data[ui].reportAdBtn.setAttribute('style', `position:absolute;font-family:sans-serif;font-size:${paGlobal.pls[pli].vao.rab.fs || '10'}px;cursor:default;color:${paGlobal.pls[pli].vao.rab.c || '#000000'};inset:${paGlobal.pls[pli].vao.rab.p || 'auto 0px -18px auto'};transition: all .3s`);
      paGlobal.data[ui].div.appendChild(paGlobal.data[ui].reportAdBtn);
      paGlobal.data[ui].reportAdAdded = true;
    },
    addAdHeading: function (pli, ci, ui) {
      if (paGlobal.plData[pli].adHeadingAdded) return;
      const selector = paGlobal.pls[pli].t === 'multiInsert' ? `.pa-global-class.pa-pl-${pli}.pa-ad-heading` : `.pa-unit-global.pa-pl-${pli}`;
      const styleRules = document.createElement('style');
      styleRules.innerHTML = `${selector}::before { content: '${paGlobal.pls[pli].vao.adh.t || 'ADVERTISEMENT'}';width: 100%;height: ${paGlobal.adHeadingHeightPx || 25}px;display: block;text-align: center;line-height: 23px;opacity: 0.7;font-family: sans-serif;font-size: 11px;color: ${paGlobal.pls[pli].vao.adh.c}}`;
      document.head.appendChild(styleRules);
      paGlobal.plData[pli].adHeadingAdded = !0;
    },
    showReportAdForm: function () {
      const ui = this.parentElement.dataset.ui;
      const ci = this.parentElement.parentElement.dataset.ci;
      const pli = this.parentElement.dataset.pli;
      const demand = paGlobal.data[ui].demand;
      const winBid = paGlobal.data[ui].winningBid || {};
      paGlobal.reportAdData = {
        pli: pli,
        demand: demand.cb,
        refCount: paGlobal.data[ui].refCount,
        size: demand.cs.join('x'),
        winBidCode: winBid.bidderCode || '',
        adDomain: winBid.adDomain || '',
        hbUnitId: winBid.unitId || '',
        url: location.href
      };
      if (!document.querySelector('#pa-report-ad-model')) {
        paGlobal.reportAdModel = document.createElement('div');
        paGlobal.reportAdModel.id = 'pa-report-ad-model';
        document.body.appendChild(paGlobal.reportAdModel);
        const st = document.createElement('style');
        st.innerHTML = `#pa-report-ad-form-wrapper {position: fixed;bottom: 0;left: 0;width: 100vw;background: #000000c7;display: grid;place-items: center;z-index: 999999999;height: 0px;overflow: hidden;transition: height .5s;transition-origin: top;}#pa-report-ad-form-wrapper * {box-sizing: border-box;line-height: unset;}#pa-report-ad-model.pa-report-ad-showing>#pa-report-ad-form-wrapper {height: 100vh;}#pa-report-ad-form {display: flex;flex-direction: column;background: #fff;padding: 5px 20px 20px;border-radius: 3px;max-width: 97vw;width: 340px;justify-content: flex-start;align-items: center;height: fit-content;max-height: 97vh;font: bold 15px sans-serif;}#pa-report-ad-heading {display: flex;justify-content: space-between;align-items: baseline;width: calc(100% + 40px);padding: 0px 20px 5px;box-sizing: border-box;position: relative;border-bottom: solid 1px #dadada;}button#pa-report-ad-close {background: none;border: none;font-size: 30px;cursor: pointer;transform: scaleY(0.6);color: #3e3e3e;}#pa-report-ad-form img {width: 130px;object-fit: contain;}.pa-report-ad-form-label {display: flex;flex-direction: column;width: 100%;margin-top: 30px;color: #3e3e3e;}#pa-report-ad-details {resize: vertical;max-height: 220px;}textarea#pa-report-ad-details::placeholder {font-family: sans-serif;color: #808080;}#pa-report-ad-img {background: #eeeeee;}#pa-report-ad-publisher-label {flex-direction: row;align-items: center;margin-top: 10px;position: relative;}.pa-report-ad-input:not(#pa-report-ad-publisher) {margin-top: 10px;border: solid 1px #c0c0c0;padding: 6px 9px;color: #3e3e3e;font: normal 15px sans-serif;min-height: unset;height: unset;}#pa-report-ad-publisher-label.pa-report-ad-message-shown::after {content: 'Please enter the email used for logging into Next Millennium portal';position: absolute;font-size: 10px;color: #e03131;font-weight: 100;width: 100%;height: 30px;left: 0;transform: translateY(100%);}#pa-report-ad-ad-issue:not(.pa-selection-made),#pa-report-ad-img:not(.pa-selection-made) {color: #808080;}#pa-report-ad-form ::-webkit-file-upload-button,#pa-report-ad-form ::file-selector-button {display: none;}#pa-report-upload-wrapper {display: flex;align-items: center;}#pa-report-upload-icon {
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='17' height='17' viewBox='0 0 20 20' stroke='none' fill='%23ffffff'%3E%3Cpath d='M17 12v5H3v-5H1v5a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5z'/%3E%3Cpath d='M15 7l-5-6-5 6h4v8h2V7h4z'/%3E%3C/svg%3E");min-width: 30px;height: 30px;border-radius: 2px;margin: 10px 10px 0 0;background-color: #10c4a3;background-repeat: no-repeat;background-position: center;}input#pa-report-ad-publisher {width: 17px;height: 17px;margin: 0 12px 0 0;accent-color: #0ea68a;}#pa-email-require {color: #a8a8a8;font-size: 11px;font-weight: 100;}#pa-report-ad-submit {background: #10c4a3;width: 100%;border: none;margin-top: 40px;color: #ffffff;padding: 8px;font-size: 12px;}#pa-report-upload-icon,#pa-report-ad-submit {transition: background .3s;}#pa-report-upload-icon:hover,#pa-report-ad-submit:hover {background-color: #0c8871;}#pa-report-ad-submitted-wrapper {display: flex;flex-direction: column;justify-content: center;height: 85%;}#pa-report-ad-submitted-wrapper::before {content: '';height: 70px;width: 70px;
      background-image: url("data:image/svg+xml,%3Csvg width='66' height='67' viewBox='0 0 66 67' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M48.4461 15.5068C44.6758 7.09109 36.5801 2.53143 30.1225 0.136597C21.7824 0.869015 14.0323 4.74111 8.44099 10.9691C2.84968 17.197 -0.165076 25.3155 0.00697896 33.6812C0.179034 42.0469 3.52505 50.0348 9.3677 56.0278C15.2104 62.0209 23.1132 65.5714 31.4763 65.9607C53.868 58.8777 54.6803 29.4361 48.4461 15.5068Z' fill='%2310C5A3'/%3E%3Cpath d='M32.9813 0.0012207C32.0133 0.0012207 31.0521 0.0485741 30.1045 0.13652C36.5621 2.53135 44.6577 7.09101 48.428 15.5068C54.6622 29.436 53.8432 58.8776 31.4447 65.9606C31.9524 65.9606 32.4669 66.0012 32.9813 66.0012C41.7385 66.0012 50.137 62.5244 56.3292 56.3357C62.5215 50.147 66.0002 41.7534 66.0002 33.0012C66.0002 24.2491 62.5215 15.8554 56.3292 9.6667C50.137 3.478 41.7385 0.0012207 32.9813 0.0012207Z' fill='%230BB091'/%3E%3Cpath d='M13.714 9.16104C13.714 9.16104 22.006 3.30249 26.3178 3.30249C30.6296 3.30249 33.0868 3.89782 33.2221 8.71454C33.3575 13.5313 26.839 15.2902 23.4681 14.9316C20.0972 14.5731 6.6134 15.5067 13.714 9.16104Z' fill='%231DDCB8'/%3E%3Cpath d='M21.6211 39.5226C21.6211 39.5226 35.4907 44.0011 46.4361 39.5226C44.3512 43.5479 29.4392 45.7803 21.6211 39.5226Z' fill='%23086654'/%3E%3Cpath d='M21.6012 35.0851C21.6012 34.9498 21.6012 34.8145 21.6012 34.6792C21.5497 33.166 20.912 31.7321 19.8228 30.6799C18.7335 29.6278 17.2779 29.0396 15.763 29.0396C14.2482 29.0396 12.7925 29.6278 11.7033 30.6799C10.614 31.7321 9.97636 33.166 9.9248 34.6792C9.92774 34.9942 9.95489 35.3086 10.006 35.6195C10.6423 35.1121 14.9271 31.9934 21.6012 35.0851Z' fill='%23086654'/%3E%3Cpath d='M59.1081 35.0851C59.1081 34.9498 59.1081 34.8145 59.1081 34.6792C59.0565 33.166 58.4188 31.7321 57.3296 30.6799C56.2403 29.6278 54.7847 29.0396 53.2699 29.0396C51.755 29.0396 50.2994 29.6278 49.2101 30.6799C48.1209 31.7321 47.4832 33.166 47.4316 34.6792C47.4346 34.9942 47.4617 35.3086 47.5129 35.6195C48.1559 35.1121 52.4339 31.9934 59.1081 35.0851Z' fill='%23086654'/%3E%3C/svg%3E%0A");margin: 0px auto;background-repeat: no-repeat;background-position: center;}.pa-report-ad-submited {text-align: center;width: 225px;}`;
        document.head.appendChild(st);
      }
      paGlobal.reportAdModel.insertAdjacentHTML('beforeend', `<div id="pa-report-ad-form-wrapper"><form id="pa-report-ad-form"><div id="pa-report-ad-heading"><img id="pa-report-ad-logo" src="https://powerad.ai/nmm-logo.png" alt="Next Millenium"><button type="button" id="pa-report-ad-close">&#9747;</button></div><label class="pa-report-ad-form-label" for="pa-report-ad-ad-issue">What's wrong with this ad?<select name="issue" id="pa-report-ad-ad-issue" class="pa-report-ad-input" required><option value="" disabled hidden selected>Please select one</option><option value="covering">It's covering page content</option><option value="offensive">It contains offensive or adult content</option><option value="sound">It's playing sound</option><option value="other">Another issue</option></select><textarea name="details" id="pa-report-ad-details" class="pa-report-ad-input" rows="3" placeholder="Please provide additional details and include the name of the advertiser"></textarea></label><label class="pa-report-ad-form-label" for="pa-report-ad-img">Share a screenshot of the ad<div id="pa-report-upload-wrapper"><div id="pa-report-upload-icon"></div><input type="file" name="img" id="pa-report-ad-img" class="pa-report-ad-input" accept="image/*"></div></label><label class="pa-report-ad-form-label" for="pa-report-ad-email"><span>Email <span id="pa-email-require">(optional)</span></span><input name="email" id="pa-report-ad-email" class="pa-report-ad-input" type="email"></label><label class="pa-report-ad-form-label" id="pa-report-ad-publisher-label" for="pa-report-ad-publisher"><input type="checkbox" name="publisher" id="pa-report-ad-publisher" class="pa-report-ad-input">I'm a Next Millenium publisher</label><button id="pa-report-ad-submit" type="submit">REPORT THIS AD</button></form></div>`);
      function closeReportAd(submitted) {
        paGlobal.reportAdModel.classList.remove('pa-report-ad-showing');
        paGlobal.reportAdModel.innerHTML = '';
        paGlobal.reportAdData = {};
        if (!submitted) paGlobal.refresh.resume(pli, ci, ui, paGlobal.data[ui].refresh.currentRunningTime);
      }
      setTimeout(() => {
        paGlobal.reportAdModel.classList.add('pa-report-ad-showing');
      }, 0);
      document.querySelector('#pa-report-ad-form-wrapper').addEventListener('click', function (e) {
        if (e.target === document.querySelector('#pa-report-ad-form-wrapper')) closeReportAd();
      });
      document.querySelector('#pa-report-ad-close').addEventListener('click', function () {
        closeReportAd();
      });
      document.querySelector('#pa-report-ad-publisher').addEventListener('change', function () {
        if (this.checked) {
          document.querySelector('#pa-email-require').innerText = '(required)';
          document.querySelector('#pa-report-ad-email').setAttribute('required', '');
          document.querySelector('#pa-report-ad-publisher-label').classList.add('pa-report-ad-message-shown');
        } else {
          document.querySelector('#pa-email-require').innerText = '(optional)';
          document.querySelector('#pa-report-ad-email').removeAttribute('required');
          document.querySelector('#pa-report-ad-publisher-label').classList.remove('pa-report-ad-message-shown');
        }
      });
      document.querySelector('#pa-report-ad-ad-issue').addEventListener('change', function () {
        if (this.value === 'other') {
          document.querySelector('#pa-report-ad-details').setAttribute('required', '');
        } else {
          document.querySelector('#pa-report-ad-details').removeAttribute('required');
        }
        this.classList.add('pa-selection-made');
      });
      document.querySelector('#pa-report-ad-img').addEventListener('change', function () {
        if (this.files[0].type.startsWith('image')) {
          this.classList.add('pa-selection-made');
        } else {
          this.value = '';
          this.classList.remove('pa-selection-made');
        }
      });
      document.querySelector('#pa-report-ad-form').addEventListener('submit', function (e) {
        e.preventDefault();
        const data = new FormData(this);
        Object.entries(paGlobal.reportAdData).forEach(x => {
          data.append(x[0], x[1].toString());
        });
        fetch('https://powerad.ai/report/report-ad', {
          method: 'POST',
          body: data
        });
        this.style.height = `${this.offsetHeight}px`;
        document.querySelectorAll('#pa-report-ad-form>label,#pa-report-ad-form>span,#pa-report-ad-form>button').forEach(x => x.remove());
        this.insertAdjacentHTML('beforeend', '<div id="pa-report-ad-submitted-wrapper"><h3 class="pa-report-ad-submited">Thank you for your feedback. We appreciate it very much!</h3></div>');
        paGlobal.remove(pli, ci, ui);
        setTimeout(() => {
          closeReportAd(true);
        }, 2000);
      });
      setTimeout(() => {
        paGlobal.refresh.pause(pli, ci, ui);
      }, 300);
    },
    setTimedSticky(pli, ci, ui) {
      paGlobal.cData[ci].resetTimedSticky = (pli, ci, ui) => {
        document.removeEventListener('scroll', paGlobal.cData[ci].reCalculateOffset);
        paGlobal.cData[ci].div.style.top = '';
        paGlobal.cData[ci].div.style.removeProperty('top');
        paGlobal.cData[ci].div.style.left = '';
        paGlobal.cData[ci].div.style.removeProperty('left');
        paGlobal.cData[ci].div.style.margin = paGlobal.pls[pli].mp.cp.st.m;
        paGlobal.cData[ci].div.style.background = paGlobal.pls[pli].st.contBck;
        paGlobal.cData[ci].div.style.zIndex = paGlobal.pls[pli].st.zi.toString();
        paGlobal.cData[ci].div.style.width = paGlobal.pls[pli].mp.cp.st.w.a ? paGlobal.pls[pli].mp.cp.st.w.a + paGlobal.pls[pli].mp.cp.st.w.t : '';
        paGlobal.cData[ci].stickObsPx.style.height = '0px';
        paGlobal.cData[ci].stickObsPx.style.width = '1px';
        paGlobal.cData[ci].stickObsPx.style.margin = '0px';
        paGlobal.cData[ci].div.style.position = paGlobal.pls[pli].mp.cp.p;
        paGlobal.cData[ci].isSticking = !1;
      };
      paGlobal.cData[ci].stickObsPx = paGlobal.observerPixel(paGlobal.cData[ci].div, 0, '', '', '', 'beforebegin');
      paGlobal.cData[ci].stickObsPx.style.position = 'static';
      paGlobal.cData[ci].stickObsPx.style.width = '1px';
      paGlobal.cData[ci].stickyObs = paGlobal.listen.observer(paGlobal.cData[ci].stickObsPx, {threshold: 1, rootMargin: '0px'}, e => {
        if (!paGlobal.cData[ci].obsOnce) {
          paGlobal.cData[ci].obsOnce = !0;
          return;
        }
        if (e.isIntersecting) {
          if (paGlobal.cData[ci].isSticking) {
            paGlobal.cData[ci].resetTimedSticky(pli, ci, ui);
          }
        } else if (!paGlobal.pls[pli].mp.cp.stkp.nb || e.boundingClientRect.y < 0) {
          paGlobal.cData[ci].div.style.top = paGlobal.pls[pli].mp.cp.stkp.ot + 'px';
          paGlobal.cData[ci].div.style.background = paGlobal.pls[pli].mp.cp.stkp.b;
          paGlobal.cData[ci].stickObsPx.style.height = paGlobal.cData[ci].div.offsetHeight + 'px';
          paGlobal.cData[ci].stickObsPx.style.width = paGlobal.cData[ci].div.offsetWidth + 'px';
          paGlobal.cData[ci].stickObsPx.style.margin = paGlobal.pls[pli].mp.cp.st.m;
          paGlobal.cData[ci].div.style.position = 'fixed';
          paGlobal.cData[ci].div.style.margin = `0px ${paGlobal.pls[pli].mp.cp.stkp.m || ''}`;
          paGlobal.cData[ci].isSticking = !0;
          if (paGlobal.pls[pli].mp.cp.stkp.w) {
            paGlobal.cData[ci].div.style.width = '100vw';
            paGlobal.cData[ci].div.style.left = '0px';
          }
          if (paGlobal.pls[pli].mp.cp.stkp.zi) {
            paGlobal.cData[ci].div.style.zIndex = paGlobal.pls[pli].mp.cp.stkp.zi;
          }
          if (paGlobal.pls[pli].mp.cp.stkp.on && paGlobal.select(paGlobal.pls[pli].mp.cp.stkp.on)) {
            var wfto2 = !1;
            paGlobal.cData[ci].reCalculateOffset = function () {
              if (!wfto2) {
                setTimeout(function () {
                  if (paGlobal.select(paGlobal.pls[pli].mp.cp.stkp.on) && paGlobal.round(paGlobal.selectRect(paGlobal.pls[pli].mp.cp.stkp.on).top) < 5 && paGlobal.round(paGlobal.selectRect(paGlobal.pls[pli].mp.cp.stkp.on).top) > -5) {
                    paGlobal.cData[ci].div.style.top = paGlobal.selectRect(paGlobal.pls[pli].mp.cp.stkp.on).height + 'px';
                  } else {
                    paGlobal.cData[ci].div.style.top = paGlobal.pls[pli].mp.cp.stkp.ot + 'px';
                  }
                  wfto2 = !1;
                }, 75);
                wfto2 = !0;
              }
            };
            document.addEventListener('scroll', paGlobal.cData[ci].reCalculateOffset, {passive: !0});
          }
        }
      });
      setTimeout(() => {
        paGlobal.cData[ci].resetTimedSticky(pli, ci, ui);
        paGlobal.cData[ci].stickyObs.disconnect();
      }, paGlobal.pls[pli].mp.cp.stkp.d * 1000);
      paGlobal.cData[ci].stickyWasSet = !0;
    },
    scaleAd: function (pli, ci, ui) {
      const widthSelector = paGlobal.pls[pli].st.scaleToParent ? paGlobal.cData[ci].div.parentElement : document.querySelector(paGlobal.pls[pli].st.scaleSelector || (paGlobal.pls[pli].t === 'multiInsert' ? paGlobal.pls[pli].mp.cp.s : 'body'));
      const width = Math.min(widthSelector.getBoundingClientRect().width, paGlobal.pls[pli].st.scaleMaxWidth || Infinity);
      let adWidth = (paGlobal.data[ui].demand.cs || paGlobal.data[ui].demand.s || paGlobal.pls[pli].st.s)[0];
      if (adWidth === 1) return (paGlobal.data[ui].scaleWaitingForSize = true);
      paGlobal.data[ui].scale = width / paGlobal.toIntConv(adWidth);
      if (paGlobal.data[ui].scale !== 1) paGlobal.data[ui].scaleActive = true;
      paGlobal.cData[ci].div.style.display = 'block';
      paGlobal.data[ui].div.style.transform = `scale(${paGlobal.data[ui].scale})`;
      paGlobal.data[ui].div.style.transformOrigin = `${paGlobal.data[ui].scale < 1 ? 'left' : 'center'} top`;
      paGlobal.data[ui].div.style.marginLeft = paGlobal.data[ui].scale < 1 ? `calc((100% - ${width}px) / 2)` : 'auto';
      let height = Math.max(parseInt(paGlobal.data[ui].div.style.height) * paGlobal.data[ui].scale, paGlobal.data[ui].div.getBoundingClientRect().height);
      if (paGlobal.pls[pli].vao.adh.on) height += 25;
      paGlobal.cData[ci].div.style.height = height + 'px';
      if (paGlobal.data[ui].reportAdBtn) {
        paGlobal.data[ui].reportAdBtn.style.transformOrigin = 'right top';
        paGlobal.data[ui].reportAdBtn.style.transform = `scale(${1 / paGlobal.data[ui].scale})`;
      }
    },
    addClsBtn: (pli, ci, ui) => {
      if (paGlobal.pls[pli].st.cbp.p.d != 'inner' && paGlobal.cData[ci].clsBtnAdded) {
        return;
      }
      if (paGlobal.pls[pli].st.cbp.p.d == 'inner' && paGlobal.data[ui].clsBtnAdded) {
        return;
      }
      paGlobal.cData[ci].clsBtnAdded = !0;
      paGlobal.data[ui].clsBtnAdded = !0;
      paGlobal.data[ui].clsBtn = document.createElement('div');
      paGlobal.data[ui].clsBtn.setAttribute('style', 'text-align:center;position:' + paGlobal.pls[pli].st.cbp.p.p + ';box-sizing:border-box;display:grid;place-items:center;border-radius:' + paGlobal.pls[pli].st.cbp.br + ';background:' + paGlobal.pls[pli].st.cbp.bg + ';box-shadow:' + paGlobal.pls[pli].st.cbp.shdw + ';color:' + paGlobal.pls[pli].st.cbp.c + ';' + paGlobal.pls[pli].st.cbp.p.os.hp + ':' + paGlobal.pls[pli].st.cbp.p.os.ho + paGlobal.pls[pli].st.cbp.p.os.hot + ';' + paGlobal.pls[pli].st.cbp.p.os.vp + ':' + paGlobal.pls[pli].st.cbp.p.os.vo + paGlobal.pls[pli].st.cbp.p.os.vot + ';width:' + paGlobal.pls[pli].st.cbp.s[0].a + paGlobal.pls[pli].st.cbp.s[0].t + ';height:' + paGlobal.pls[pli].st.cbp.s[1].a + paGlobal.pls[pli].st.cbp.s[1].t + ';font-size:' + paGlobal.pls[pli].st.cbp.fs + 'px;' + 'font-weight:' + paGlobal.pls[pli].st.cbp.fw + ';padding:' + paGlobal.pls[pli].st.cbp.pd + 'px;font-family:' + paGlobal.pls[pli].st.cbp.ff + ';z-index:' + paGlobal.pls[pli].st.cbp.zi + ';cursor:pointer;overflow: hidden;pointer-events:auto;');
      paGlobal.data[ui].clsBtn.className = 'cls-btn';
      var appendToDiv;
      if (paGlobal.pls[pli].st.cbp.p.d == 'inner') {
        appendToDiv = paGlobal.data[ui].div;
      } else {
        appendToDiv = paGlobal.cData[ci].div;
      }
      setTimeout(function () {
        appendToDiv.appendChild(paGlobal.data[ui].clsBtn);
        paGlobal.data[ui].activeSafeDiv = function () {
          if (paGlobal.data[ui].op) {
            paGlobal.data[ui].op.safeActive = !0;
          }
        };
        paGlobal.data[ui].deactiveSafeDiv = function () {
          if (paGlobal.data[ui].op) {
            paGlobal.data[ui].op.safeActive = !1;
          }
        };
        if (paGlobal.pls[pli].st.cbp.cbsd.on) {
          appendSafeDiv();
        }
        if (paGlobal.pls[pli].vp.op && paGlobal.pls[pli].vp.op.on) {
          if (paGlobal.data[ui].op) {
            paGlobal.data[ui].op.safeActive = !1;
          }
          paGlobal.data[ui].clsBtn.addEventListener('mouseover', paGlobal.data[ui].activeSafeDiv);
          paGlobal.data[ui].clsBtn.addEventListener('mouseleave', paGlobal.data[ui].deactiveSafeDiv);
        }
        var lineHeightSet = setInterval(function () {
          if (!paGlobal.data[ui] || !paGlobal.data[ui].clsBtn) return clearTimeout(lineHeightSet)
          paGlobal.data[ui].clsBtn.style.lineHeight = paGlobal.data[ui].clsBtn.offsetHeight - parseFloat(paGlobal.data[ui].clsBtn.style.padding.split('px')[0]) * 2 + 'px';
        }, 50);
        setTimeout(function () {
          clearTimeout(lineHeightSet);
        }, 600);
        var cbt = document.createElement('div');
        cbt.setAttribute('style', 'position: absolute;top: 0;bottom: 0;right: 0;width: 100%;background: linear-gradient(-90deg, #7c7c7c var(--percent), #cccccc var(--percent));');
        cbt.style.setProperty('--percent', '100%');
        paGlobal.data[ui].clsBtn.appendChild(cbt);
        var cbtNum = document.createElement('span');
        cbtNum.setAttribute('style', 'color:' + paGlobal.pls[pli].st.cbp.cdc + ';position:absolute;right:0;left:0;top:0;bottom:0;height:100%;width:100%;display:grid;place-items:center;');
        paGlobal.data[ui].clsBtn.appendChild(cbtNum);
        var cltNumber = paGlobal.pls[pli].st.cbp.cd / 1000;
        var cltPercentJumps = 100 / cltNumber;
        var cltPercent = 100;
        cbtNum.innerText = cltNumber.toString();
        var cltInt = setInterval(function () {
          cltPercent -= cltPercentJumps;
          cbt.style.setProperty('--percent', cltPercent + '%');
          cltNumber--;
          cbtNum.innerHTML = cltNumber.toString();
        }, 1000);
        setTimeout(function () {
          paGlobal.data[ui].clsBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 95.98 320.02 320.02" fill="${paGlobal.pls[pli].st.cbp.c}" style="width:calc(100% - 8px);height:calc(100% - 8px);"> <path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"/></svg>`;
          clearInterval(cltInt);
          try {
            cbtNum.remove();
            cbt.remove();
          } catch (e) {}
          paGlobal.data[ui].clsBtn.addEventListener('click', function () {
            paGlobal.remove(pli, ci, ui, undefined, true);
          });
        }, paGlobal.pls[pli].st.cbp.cd);
      }, paGlobal.pls[pli].st.cbp.d);
      function appendSafeDiv() {
        paGlobal.data[ui].div.style.overflow = 'visible';
        paGlobal.cData[ci].div.style.overflow = 'visible';
        paGlobal.data[ui].safeDiv = document.createElement('div');
        paGlobal.data[ui].clsBtn.before(paGlobal.data[ui].safeDiv);
        paGlobal.data[ui].safeDiv.setAttribute('style', `position:absolute;${paGlobal.pls[pli].st.cbp.p.os.vp}:${paGlobal.pls[pli].st.cbp.cbsd.vo + paGlobal.pls[pli].st.cbp.cbsd.vot};${paGlobal.pls[pli].st.cbp.p.os.hp}:${paGlobal.pls[pli].st.cbp.cbsd.ho + paGlobal.pls[pli].st.cbp.cbsd.hot};width: ${paGlobal.pls[pli].st.cbp.cbsd.s[0].a + paGlobal.pls[pli].st.cbp.cbsd.s[0].t};height:${paGlobal.pls[pli].st.cbp.cbsd.s[1].a + paGlobal.pls[pli].st.cbp.cbsd.s[1].t};z-index:${paGlobal.pls[pli].st.cbp.cbsd.zi};`);
        paGlobal.data[ui].safeDiv.className = 'cls-btn-safe-div';
        if (paGlobal.pls[pli].vp.op && paGlobal.pls[pli].vp.op.on) {
          paGlobal.data[ui].safeDiv.addEventListener('mouseover', paGlobal.data[ui].activeSafeDiv);
          paGlobal.data[ui].safeDiv.addEventListener('mouseleave', paGlobal.data[ui].deactiveSafeDiv);
        }
      }
    },
    getLoweredSize: function (os, w, t) {
      if (t == 'px') {
        return w;
      } else {
        return paGlobal.percentToPx(os, w);
      }
    },
    openPart: function (pli, ci, ui) {
      if (paGlobal.pls[pli].vp.op.a || paGlobal.pls[pli].st.a) {
        paGlobal.data[ui].div.style.transition = 'height 0.5s, width 0.5s';
      }
      if (paGlobal.pls[pli].vp.op.sp == 'part') {
        paGlobal.data[ui].div.style.width = paGlobal.getLoweredSize(paGlobal.toIntConv(paGlobal.data[ui].demand.s[0]), paGlobal.pls[pli].vp.op.lw.a, paGlobal.pls[pli].vp.op.lw.t) + 'px';
        let loweredSize = paGlobal.getLoweredSize(paGlobal.toIntConv(paGlobal.data[ui].demand.s[1]), paGlobal.pls[pli].vp.op.lh.a, paGlobal.pls[pli].vp.op.lh.t);
        paGlobal.data[ui].div.style.height = paGlobal.getHeight(loweredSize, pli) + 'px';
        paGlobal.data[ui].demand.opcl = !0;
      } else {
        paGlobal.data[ui].div.style.width = paGlobal.data[ui].demand.s[0] + 'px';
        paGlobal.data[ui].div.style.height = paGlobal.getHeight(paGlobal.toIntConv(paGlobal.data[ui].demand.s[1]), pli) + 'px';
        paGlobal.data[ui].demand.opcl = !1;
      }
      if (paGlobal.pls[pli].vp.op.f) {
        function applyAfterStyles() {
          if (paGlobal.pls[pli].vp.op.sp == 'part') {
            paGlobal.data[ui].div.style.width = paGlobal.data[ui].demand.s[0] + 'px';
            paGlobal.data[ui].div.style.height = paGlobal.getHeight(paGlobal.toIntConv(paGlobal.data[ui].demand.s[1]), pli) + 'px';
            paGlobal.data[ui].demand.opcl = !1;
          } else {
            paGlobal.data[ui].div.style.width = paGlobal.getLoweredSize(paGlobal.toIntConv(paGlobal.data[ui].demand.s[0]), paGlobal.pls[pli].vp.op.lw.a, paGlobal.pls[pli].vp.op.lw.t) + 'px';
            let loweredSize = paGlobal.getLoweredSize(paGlobal.toIntConv(paGlobal.data[ui].demand.s[1]), paGlobal.pls[pli].vp.op.lh.a, paGlobal.pls[pli].vp.op.lh.t);
            paGlobal.data[ui].div.style.height = paGlobal.getHeight(loweredSize, pli) + 'px';
            paGlobal.data[ui].demand.opcl = !0;
          }
        }
        if (paGlobal.data[ui].gotImp) {
          applyAfterStyles();
        } else {
          setTimeout(applyAfterStyles, paGlobal.toIntConv(paGlobal.pls[pli].vp.op.f) * 1000);
        }
      }
      if (paGlobal.pls[pli].vp.op.eoh) {
        paGlobal.data[ui].op = {
          of: function () {
            setTimeout(function () {
              if (!paGlobal.data[ui].op.safeActive) {
                if (paGlobal.pls[pli].vp.op.a || paGlobal.pls[pli].st.a) {
                  paGlobal.data[ui].div.style.transition = 'height 0.5s, width 0.5s';
                }
                paGlobal.data[ui].div.style.width = paGlobal.data[ui].demand.s[0] + 'px';
                paGlobal.data[ui].div.style.height = paGlobal.getHeight(paGlobal.toIntConv(paGlobal.data[ui].demand.s[1]), pli) + 'px';
                paGlobal.largeCloseBtn(pli, ci, ui);
              }
            }, 10);
          },
          op: function () {
            if (paGlobal.data[ui].demand.opcl) {
              paGlobal.data[ui].div.style.width = paGlobal.getLoweredSize(paGlobal.toIntConv(paGlobal.data[ui].demand.s[0]), paGlobal.pls[pli].vp.op.lw.a, paGlobal.pls[pli].vp.op.lw.t) + 'px';
              let loweredSize = paGlobal.getLoweredSize(paGlobal.toIntConv(paGlobal.data[ui].demand.s[1]), paGlobal.pls[pli].vp.op.lh.a, paGlobal.pls[pli].vp.op.lh.t);
              paGlobal.data[ui].div.style.height = paGlobal.getHeight(loweredSize, pli) + 'px';
              paGlobal.smallCloseBtn(pli, ci, ui);
            }
          }
        };
        paGlobal.data[ui].div.addEventListener('mouseover', paGlobal.data[ui].op.of);
        paGlobal.cData[ci].div.addEventListener('mouseleave', paGlobal.data[ui].op.op);
      }
    },
    largeCloseBtn: function (pli, ci, ui) {
      paGlobal.data[ui].clsBtnLineHeight = paGlobal.data[ui].clsBtnLineHeight || paGlobal.data[ui].clsBtn.style.lineHeight;
      var styles = {borderRadius: '50%', height: '50px', width: '50px', lineHeight: '50px', fontSize: '20px'};
      styles[paGlobal.pls[pli].st.cbp.p.os.vp] = '-20px';
      if (paGlobal.pls[pli].st.cbp.p.d == 'inner') {
        styles[paGlobal.pls[pli].st.cbp.p.os.hp] = '-20px';
      }
      paGlobal.data[ui].div.style.overflow = 'visible';
      paGlobal.cData[ci].div.style.overflow = 'visible';
      paGlobal.data[ui].clsBtn.style.transition = 'height 0.7s, width 0.7s, top 0.7s, right 0.7s, left 0.7s, font-size 0.7s, line-height 0.7s, border-radius 0.7s';
      for (let s of Object.keys(styles)) {
        paGlobal.data[ui].clsBtn.style[s] = styles[s];
      }
    },
    smallCloseBtn: function (pli, ci, ui) {
      var styles = {borderRadius: paGlobal.pls[pli].st.cbp.br + paGlobal.pls[pli].st.cbp.brt, height: paGlobal.pls[pli].st.cbp.s[1].a + paGlobal.pls[pli].st.cbp.s[1].t, width: paGlobal.pls[pli].st.cbp.s[0].a + paGlobal.pls[pli].st.cbp.s[0].t, fontSize: paGlobal.pls[pli].st.cbp.fs + 'px', lineHeight: paGlobal.data[ui].clsBtnLineHeight};
      styles[paGlobal.pls[pli].st.cbp.p.os.hp] = paGlobal.pls[pli].st.cbp.p.os.ho + paGlobal.pls[pli].st.cbp.p.os.hot;
      styles[paGlobal.pls[pli].st.cbp.p.os.vp] = paGlobal.pls[pli].st.cbp.p.os.vo + paGlobal.pls[pli].st.cbp.p.os.vot;
      for (let s of Object.keys(styles)) {
        paGlobal.data[ui].clsBtn.style[s] = styles[s];
      }
    },
    remove: function (pli, ci, ui, removeDiv, fromClsButton) {
      paGlobal.log.info(`call remove (${pli}, ${ci}, ${ui}, ${removeDiv})`);

      if (paGlobal.pls[pli].t == 'video' && paGlobal.pls[pli].vidp.t !== 'headerFullPage') {
        paGlobal.vidFunctions.xButton();
        return;
      }
      if (removeDiv === 'outer') {
        paGlobal.cData[ci].div.querySelectorAll('.pa-unit-global').forEach(unit => {
          paGlobal.remove(pli, ci, unit.dataset.ui, 'inner');
        });
        return;
      }
      switch (paGlobal.pls[pli].t) {
        case 'adhesion':
          document.removeEventListener('scroll', paGlobal.cData[ci].reCalculate);
          window.removeEventListener('resize', paGlobal.cData[ci].reCalculate);
          if (paGlobal.plData[pli].sqc && document.querySelectorAll('.pa-global-class.pa-pl-' + pli).length < 2) {
            window.removeEventListener('resize', paGlobal.plData[pli].sqc.addListenerWait);
            paGlobal.plData[pli].sqc.reset();
          }
          if (paGlobal.plData[pli].mvc) {
            if (paGlobal.plData[pli].mvc.marginIsAuto) {
              window.removeEventListener('resize', paGlobal.plData[pli].mvc.autoFunction);
              paGlobal.plData[pli].mvc.autoFunctions.reset();
            } else {
              window.removeEventListener('resize', paGlobal.plData[pli].mvc.notAutoFunctions.checkWhenDone);
              paGlobal.plData[pli].mvc.notAutoFunctions.reset();
            }
          }
          if (paGlobal.pls[pli].ap.cp.cts.m) {
            if (paGlobal.cData[ci].moveContent) {
              window.removeEventListener('resize', paGlobal.cData[ci].moveContent);
            }
          }
          break;
        case 'stickyTop':
          window.removeEventListener('resize', paGlobal.data[ui].reCalculate);
          if (paGlobal.pls[pli].stp.cp.on) {
            document.removeEventListener('scroll', paGlobal.data[ui].reCalculateOffset);
          }
          if (paGlobal.pls[pli].stp.cp.bodyMarginTop) {
            document.body.style.marginTop = paGlobal.oldBodyMarginTop || '0';
          }
          break;
        case 'stickyBottom':
          window.removeEventListener('resize', paGlobal.data[ui].reCalculate);
          if (paGlobal.pls[pli].sbp.cp.on) {
            document.removeEventListener('scroll', paGlobal.data[ui].reCalculateOffset);
          }
          break;
        case 'multiInsert':
          if (paGlobal.pls[pli].mp.cp.fold) {
            if (paGlobal.data[ui].positionFolds) {
              document.removeEventListener('scroll', paGlobal.data[ui].positionFolds);
            }
          }
          if (paGlobal.pls[pli].mp.cp.sb && paGlobal.data[ui].smallerBoxChange) {
            document.removeEventListener('scroll', paGlobal.data[ui].smallerBoxChange);
          }
          break;
        case 'rail':
          document.removeEventListener('scroll', paGlobal.cData[ci].reCalculate);
          window.removeEventListener('resize', paGlobal.cData[ci].reCalculate);
          document.removeEventListener('scroll', paGlobal.data[ui].reCalculate);
          break;
      }
      if (paGlobal.data[ui].demandStallTimeout) {
        paGlobal.log.info(`remove: clear demand stall timeout ui=${ui}`);
        clearTimeout(paGlobal.data[ui].demandStallTimeout);
      }
      if (paGlobal.plData[pli].resetTimer) {
        clearTimeout(paGlobal.plData[pli].resetTimer);
      }
      if (paGlobal.pls[pli].st.cbp.cau && !paGlobal.data[ui].closed) {
        paGlobal.log.info('unit ' + ui + ' (pl ' + pli + ') called remove for all units');
        paGlobal.data[ui].closed = !0;
        paGlobal.cData[ci].closed = !0;
        document.querySelectorAll(`.pa-global-class.${paGlobal.cData[ci].div.classList[1]}`).forEach(i => {
          var ci2 = i.dataset.ci;
          paGlobal.cData[ci2].closed = !0;
          document.querySelectorAll('#' + i.id + ' > div.pa-unit-global').forEach(a => {
            var ui2 = a.dataset.ui;
            paGlobal.data[ui2].closed = !0;
            paGlobal.remove(pli, ci2, ui2, 'outer');
          });
        });
      } else {
        if (paGlobal.plData[pli].rOnSelector) {
          paGlobal.plData[pli].rOnSelector.mutationObs.disconnect();
        }
        paGlobal.log.info('unit ' + ui + ' (pl ' + pli + ') removed');
        paGlobal.data[ui].closed = !0;
        
        let divRemoved = false;
        function cb() {
          if (divRemoved) return;
          divRemoved = true;
          if (paGlobal.pls[pli].st.a) {
            paGlobal.data[ui].div.style.transition = 'height 0.5s';
            paGlobal.data[ui].div.style.height = '0';
            setTimeout(function () {
              paGlobal.log.info('(pl ' + pli + ') Remove unit div');
                paGlobal.data[ui].div.remove();
                delete paGlobal.data[ui].frame;
                paGlobal.data[ui].documentExists = false;
            }, 500);
          } else {
            paGlobal.log.info('(pl ' + pli + ') Remove unit div');
              paGlobal.data[ui].div.remove();
              delete paGlobal.data[ui].frame;
              paGlobal.data[ui].documentExists = false;
          }
        }
        // fix: URL change listener removes NEW unit at callback
        if (paGlobal.urlChangeListenerAdded){
          paGlobal.data[ui].div.remove()
          paGlobal.cData[ci].div.remove()
          divRemoved = true
        }
        cb();
        setTimeout(cb, 100);
        paGlobal.cData[ci].u--;
        if (paGlobal.cData[ci].u < 1) {
          if (paGlobal.pls[pli].st.a) {
            setTimeout(function () {
              paGlobal.log.info('(pl ' + pli + ') Remove container div');
                paGlobal.cData[ci].div.remove();
            }, 500);
          } else {
            paGlobal.log.info('(pl ' + pli + ') Remove container div');
              paGlobal.cData[ci].div.remove();
          }
        }
        if (paGlobal.data[ui].refresh && (paGlobal.data[ui].refresh.started || paGlobal.data[ui].refresh.running)) {
          paGlobal.refresh.stop(pli, ci, ui);
        }
      }
    },
    resetPl: (pli) => {
      paGlobal.log.info(`resetting pl ${pli}`);
      if (!paGlobal.plData[pli]) return paGlobal.log.warn(`pli (${pli}) not found in injected pls, skipping reset`);
      if(paGlobal.pls[pli].t == 'video') {
        try {
          window.vid && window.vid.api.removeAllEvts();
          window.vid && window.vid.api.stop();
        }
        catch (e) {
          console.log('window.vid.api.stop failed, ', e);
        }
      }
      const cis = paGlobal.plData[pli].contIds;
      const uis = paGlobal.plData[pli].unitIds;
      const originalCau = !!paGlobal.pls[pli].st.cbp.cau;
      paGlobal.pls[pli].st.cbp.cau = true;
      if (uis.length) paGlobal.remove(pli, cis[0], uis[0]);
      paGlobal.pls[pli].st.cbp.cau = originalCau;
      if (cis.length) cis.forEach(ci => paGlobal.resetCont(ci));
      if (paGlobal.plData[pli]) {
        if (paGlobal.plData[pli].mutationObs) paGlobal.plData[pli].mutationObs.disconnect();
        if (paGlobal.plData[pli].headObserver) paGlobal.plData[pli].headObserver.disconnect();
        if (paGlobal.plData[pli].footObserver) paGlobal.plData[pli].footObserver.disconnect();
        if (paGlobal.plData[pli].saObserver) paGlobal.plData[pli].saObserver.disconnect();
        if (paGlobal.plData[pli].iOnSelector && paGlobal.plData[pli].iOnSelector.mutationObs) paGlobal.plData[pli].iOnSelector.mutationObs.disconnect();
        if (paGlobal.plData[pli].rOnSelector && paGlobal.plData[pli].rOnSelector.mutationObs) paGlobal.plData[pli].rOnSelector.mutationObs.disconnect();
        delete paGlobal.plData[pli];
      }
      paGlobal.plUnits = paGlobal.plUnits.filter(x => parseInt(x.pli) !== parseInt(pli));
    },
    resetUnit: (ui) => {
      if (!paGlobal.data[ui]) return;
      if (paGlobal.data[ui].observer) paGlobal.data[ui].observer.disconnect();
      if (paGlobal.data[ui].showObs) paGlobal.data[ui].showObs.disconnect();
      if (paGlobal.data[ui].hideObs) paGlobal.data[ui].hideObs.disconnect();
      paGlobal.plUnits = paGlobal.plUnits.filter(u => u.ui !== ui);
      for (const plData of Object.values(paGlobal.plData)) {
        plData.unitIds = plData.unitIds.filter((u) => u != ui);
      }
      delete paGlobal.data[ui];
    },
    resetCont: function (ci) {
      if (!paGlobal.cData[ci]) return;
      paGlobal.cData[ci].uis.forEach(ui => paGlobal.resetUnit(ui));
      if (paGlobal.cData[ci].observer) paGlobal.cData[ci].observer.disconnect();
      if (paGlobal.cData[ci].stickyObs) paGlobal.cData[ci].stickyObs.disconnect();
      if (paGlobal.cData[ci].lbvObs) paGlobal.cData[ci].lbvObs.disconnect();
      for (const plData of Object.values(paGlobal.plData)) {
        plData.contIds = plData.contIds.filter((c) => c != ci);
      }
      delete paGlobal.cData[ci];
    },
    getOneStyle: {
      adhesion: {
        top: function (oh, head) {
          if (head) {
            return oh + paGlobal.selectRect(head).height + (paGlobal.selectRect(head).top + paGlobal.getScroll());
          } else {
            return oh;
          }
        },
        sideOffset: function (cp, unitParams) {
          if (unitParams.side == 'left') {
            return cp.lp.oep;
          } else {
            return cp.rp.oep;
          }
        },
        width: function (cp, unitParams) {
          var adhesionWidth = 0;
          var sideOffsetsSelect = 'lp';
          if (unitParams.side == 'right') {
            sideOffsetsSelect = 'rp';
          }
          if (cp.cs && paGlobal.select(cp.cs)) {
            if (unitParams.side == 'left') {
              adhesionWidth = paGlobal.selectRect(cp.cs).left - cp[sideOffsetsSelect].oec - cp[sideOffsetsSelect].oep;
            } else {
              adhesionWidth = paGlobal.screenDimensions.w - paGlobal.selectRect(cp.cs).right - (cp[sideOffsetsSelect].oec + cp[sideOffsetsSelect].oep) * 2;
            }
          } else {
            adhesionWidth = (paGlobal.screenDimensions.w - cp.cw) / 2 - cp[sideOffsetsSelect].oec - cp[sideOffsetsSelect].oep;
          }
          if (adhesionWidth <= 0) {
            adhesionWidth = 0;
          }
          return adhesionWidth;
        },
        height: function (cp, top) {
          var adhesionHeight = 0;
          if (cp.foot) {
            adhesionHeight = paGlobal.select(cp.foot).offsetTop - top - cp.of;
          } else {
            adhesionHeight = document.body.getBoundingClientRect().height - top - cp.of;
          }
          if (adhesionHeight < 0) {
            adhesionHeight = 0;
          }
          if (cp.sa.px) {
            if (adhesionHeight > cp.sa.px) {
              adhesionHeight = cp.sa.px;
            }
          }
          return adhesionHeight;
        },
        inner: {
          top: function (ip, height) {
            switch (ip.pt) {
              case 'center':
                return paGlobal.screenDimensions.h / 2 - height / 2;
                break;
              case 'top':
                return ip.pa || 0;
                break;
              case 'bottom':
                return paGlobal.screenDimensions.h - height - (ip.pa || 0);
                break;
            }
          },
          width: function (ui) {
            return paGlobal.data[ui].demand.s[0];
          }
        }
      },
      rail: {
        top: function (pli) {
          if (paGlobal.pls[pli].rp.cp.s) {
            return paGlobal.pls[pli].rp.cp.oh + paGlobal.selectRect(paGlobal.pls[pli].rp.cp.s).height + (paGlobal.selectRect(paGlobal.pls[pli].rp.cp.s).top + paGlobal.getScroll());
          } else {
            return paGlobal.pls[pli].rp.cp.oh;
          }
        },
        width: function (pli) {
          return paGlobal.selectRect(paGlobal.pls[pli].rp.cp.s).width + paGlobal.pls[pli].rp.cp.ol - paGlobal.pls[pli].rp.cp.or;
        },
        height: function (pli, top) {
          var result;
          if (paGlobal.pls[pli].rp.cp.foot) {
            result = paGlobal.selectRect(paGlobal.pls[pli].rp.cp.foot).top + paGlobal.getScroll() - top - paGlobal.pls[pli].rp.cp.of;
          } else {
            result = paGlobal.selectRect('body').height - top - paGlobal.pls[pli].rp.cp.of;
          }
          if (result < 0) {
            result = 0;
          }
          return result;
        },
        inner: {
          top: function (ip, height) {
            switch (ip.pt) {
              case 'center':
                return paGlobal.screenDimensions.h / 2 - height / 2;
                break;
              case 'top':
                return ip.pa;
                break;
              case 'bottom':
                return paGlobal.screenDimensions.h - height - ip.pa;
                break;
            }
          }
        }
      }
    },
    getStyles: function (pli, unitParams) {
      var styles = {};
      if (paGlobal.pls[pli].st.zi) {
        styles['z-index'] = paGlobal.pls[pli].st.zi;
      }
      if (paGlobal.pls[pli].st.contBck) {
        styles.background = paGlobal.pls[pli].st.contBck;
      }
      if (paGlobal.pls[pli].st.contShdw) {
        styles['box-shadow'] = paGlobal.pls[pli].st.contShdw;
      }
      if (paGlobal.pls[pli].st.a) {
        styles.transition = 'height 0.5s';
      }
      var plSStyles = {};
      switch (paGlobal.pls[pli].t) {
        case 'adhesion':
          if (paGlobal.pls[pli].ap.cp.head && paGlobal.select(paGlobal.pls[pli].ap.cp.head)) {
            var headElem = paGlobal.select(paGlobal.pls[pli].ap.cp.head);
            if (getComputedStyle(headElem).position === 'sticky' || getComputedStyle(headElem).position === 'fixed') {
              paGlobal.pls[pli].ap.cp.oh += paGlobal.selectRect(headElem).height;
              paGlobal.pls[pli].ap.cp.head = '';
            }
          }
          var offsetTop = paGlobal.getOneStyle.adhesion.top(paGlobal.pls[pli].ap.cp.oh, paGlobal.pls[pli].ap.cp.head);
          var side = unitParams.side;
          var offsetSide = paGlobal.getOneStyle.adhesion.sideOffset(paGlobal.pls[pli].ap.cp, unitParams);
          var adhesionWidth = paGlobal.getOneStyle.adhesion.width(paGlobal.pls[pli].ap.cp, unitParams);
          var adhesionHeight = paGlobal.getOneStyle.adhesion.height(paGlobal.pls[pli].ap.cp, offsetTop);
          if (paGlobal.pls[pli].ap.cp.sa.ns) {
            plSStyles = {position: 'absolute', top: offsetTop + 'px', [side]: offsetSide + 'px', width: adhesionWidth + 'px', height: '100vh'};
          } else {
            plSStyles = {position: 'fixed', top: 0 + 'px', [side]: offsetSide + 'px', width: adhesionWidth + 'px', height: '100vh'};
            // document.body.parentElement.style.cssText += 'overflow:unset !important';
            // document.body.style.cssText += 'overflow-y:unset !important';
            document.documentElement.style.cssText += 'height:auto !important';
          }
          break;
        case 'stickyBottom':
          plSStyles = {position: 'fixed', bottom: (paGlobal.pls[pli].sbp.cp.oh || 0) + 'px', width: '100%', overflow: paGlobal.pls[pli].st.ovf || 'hidden'};
          if (!paGlobal.pls[pli].sbp.ip.ctn || (paGlobal.pls[pli].sbp.ip.ctn && !paGlobal.select(paGlobal.pls[pli].sbp.ip.ctn))) {
            plSStyles.margin = '0 auto';
            plSStyles.left = 0;
            plSStyles.right = 0;
          }
          if (paGlobal.pls[pli].sbp.cp.on && paGlobal.select(paGlobal.pls[pli].sbp.cp.on) && parseInt(paGlobal.selectRect(paGlobal.pls[pli].sbp.cp.on).bottom / 10, 10) * 10 == parseInt(paGlobal.screenDimensions.h / 10, 10) * 10) {
            plSStyles.bottom = paGlobal.selectRect(paGlobal.pls[pli].sbp.cp.on).height + 'px';
          }
          if (paGlobal.pls[pli].sbp.cp.mxw) {
            plSStyles['max-width'] = paGlobal.pls[pli].sbp.cp.mxw + paGlobal.pls[pli].sbp.cp.mxwt;
            delete plSStyles.overflow;
          }
          break;
        case 'stickyTop':
          plSStyles = {position: 'fixed', top: paGlobal.pls[pli].stp.cp.oh + 'px', width: '100%', overflow: paGlobal.pls[pli].st.ovf || 'hidden'};
          if (paGlobal.pls[pli].stp.cp.on && paGlobal.select(paGlobal.pls[pli].stp.cp.on) && parseInt(paGlobal.selectRect(paGlobal.pls[pli].stp.cp.on).top / 10, 10) * 10 < 5 && parseInt(paGlobal.selectRect(paGlobal.pls[pli].stp.cp.on).top / 10, 10) * 10 > -5) {
            plSStyles.top = paGlobal.selectRect(paGlobal.pls[pli].stp.cp.on).height + 'px';
          }
          if (!paGlobal.pls[pli].stp.ip.ctn || (paGlobal.pls[pli].stp.ip.ctn && !paGlobal.select(paGlobal.pls[pli].stp.ip.ctn))) {
            plSStyles.margin = '0 auto';
            plSStyles.left = 0;
            plSStyles.right = 0;
          }
          if (paGlobal.pls[pli].stp.cp.mxw) {
            plSStyles['max-width'] = paGlobal.pls[pli].stp.cp.mxw + paGlobal.pls[pli].stp.cp.mxwt;
            delete plSStyles.overflow;
          }
          break;
        case 'multiInsert':
          plSStyles = {'max-width': paGlobal.pls[pli].mp.cp.st.mw.a + paGlobal.pls[pli].mp.cp.st.mw.t, display: paGlobal.pls[pli].mp.cp.st.d, position: paGlobal.pls[pli].mp.cp.p};
          if (paGlobal.pls[pli].mp.cp.st.w && paGlobal.pls[pli].mp.cp.st.w.a) {
            plSStyles.width = paGlobal.pls[pli].mp.cp.st.w.a + paGlobal.pls[pli].mp.cp.st.w.t;
          }
          if (paGlobal.pls[pli].mp.cp.st.im) {
            plSStyles.margin = paGlobal.pls[pli].mp.cp.st.im;
          }
          if (paGlobal.pls[pli].mp.cp.st.f) {
            if (paGlobal.pls[pli].mp.cp.st.f == 'clear') {
              plSStyles.clear = 'both';
            } else {
              plSStyles.float = paGlobal.pls[pli].mp.cp.st.f;
            }
          }
          if (paGlobal.pls[pli].mp.cp.st.d == 'inline-block') {
            plSStyles.width = paGlobal.pls[pli].mp.cp.st.mw.a + paGlobal.pls[pli].mp.cp.st.mw.t;
          }
          if (paGlobal.pls[pli].mp.cp.st.d == 'inline') {
            plSStyles.maxWidth = paGlobal.pls[pli].mp.cp.st.mw.a + paGlobal.pls[pli].mp.cp.st.mw.t;
            plSStyles.width = paGlobal.pls[pli].mp.cp.st.mw.a + paGlobal.pls[pli].mp.cp.st.mw.t;
          }
          if (paGlobal.pls[pli].mp.cp.st.d == 'flex') {
            plSStyles['justify-content'] = 'space-evenly';
            plSStyles['flex-wrap'] = 'wrap';
          }
          break;
        case 'rail':
          var offsetTop = paGlobal.getOneStyle.rail.top(pli);
          var railWidth = paGlobal.getOneStyle.rail.width(pli);
          var railHeight = paGlobal.getOneStyle.rail.height(pli, offsetTop);
          var railLeft = paGlobal.selectRect(paGlobal.pls[pli].rp.cp.s).left - paGlobal.pls[pli].rp.cp.or + paGlobal.pls[pli].rp.cp.ol;
          plSStyles = {position: 'absolute', top: offsetTop + 'px', left: railLeft + 'px', width: railWidth + 'px', height: railHeight + 'px'};
          document.body.parentElement.style.cssText += 'overflow:unset !important';
          document.body.style.cssText += 'overflow-y:unset !important';
          break;
        case 'interstitial':
          plSStyles = {position: 'fixed', top: 0, bottom: 0, right: 0, left: 0, width: '100%', height: 0, background: 'rgb(0,0,0,0.9)'};
          break;
        case 'video':
          var position = paGlobal.pls[pli].vidp.p;
          if (paGlobal.pls[pli].vidp.t == 'interstitial') {
            position = 'fixed';
          } else if (paGlobal.pls[pli].vidp.fas == 'relative') {
            position = 'relative';
          }
          if (paGlobal.pls[pli].vidp.t == 'inContent') {
            plSStyles = {'max-height': 0, margin: paGlobal.pls[pli].vidp.m || '0 auto', overflow: paGlobal.pls[pli].st.ovf || 'hidden', 'text-align': 'center', position: position, 'max-width': paGlobal.pls[pli].vidp.mxw + paGlobal.pls[pli].vidp.mxwt};
            if (paGlobal.pls[pli].vidp.newVidScript) delete plSStyles['max-height'];
            if (paGlobal.pls[pli].vidp.p == 'fixed' && paGlobal.pls[pli].vidp.fas == 'fixed') {
              plSStyles['max-width'] = paGlobal.pls[pli].vidp.mxwf + paGlobal.pls[pli].vidp.mxwft;
              plSStyles.width = paGlobal.pls[pli].vidp.mxwf + paGlobal.pls[pli].vidp.mxwft;
            }
            if (paGlobal.pls[pli].vidp.p == 'fixed' && paGlobal.pls[pli].vidp.fas == 'fixed' && paGlobal.pls[pli].vidp.t != 'interstitial') {
              plSStyles[paGlobal.pls[pli].vidp.vp] = paGlobal.pls[pli].vidp.vpo + paGlobal.pls[pli].vidp.vpot;
              plSStyles[paGlobal.pls[pli].vidp.hp] = paGlobal.pls[pli].vidp.hpo + paGlobal.pls[pli].vidp.hpot;
            }
          } else if (paGlobal.pls[pli].vidp.t == 'headerFullPage') {
            plSStyles = {'max-height': 0, margin: '0 auto', overflow: paGlobal.pls[pli].st.ovf || 'hidden', 'text-align': 'center', position: position, width: '100%', height: 0};
          } else {
            plSStyles = {position: 'fixed'};
          }
          if (paGlobal.pls[pli].st.a) {
            plSStyles.transition = 'max-height 500ms ease-out';
          }
          plSStyles.overflow = 'hidden'
          break;
        case 'headerVideo':
          plSStyles = {'max-height': 0, height: 0, margin: '0 auto', overflow: paGlobal.pls[pli].st.ovf || 'hidden', 'text-align': 'center', position: 'relative', width: '100%', display: 'flex', 'align-items': 'center'};
          break;
      }
      if (paGlobal.pls[pli].st.ora) {
        switch (paGlobal.pls[pli].t) {
          case 'multiInsert':
            if (paGlobal.pls[pli].mp.cp.st.p) {
              styles.padding = paGlobal.pls[pli].mp.cp.st.p;
            }
            plSStyles.margin = paGlobal.pls[pli].mp.cp.st.m;
            break;
          case 'stickyBottom':
          case 'stickyTop':
            var t = 'sbp';
            var s = 'top';
            if (paGlobal.pls[pli].t == 'stickyTop') {
              t = 'stp';
              s = 'bottom';
            }
            if (paGlobal.pls[pli][t].cp.pd) {
              styles['padding-' + s] = paGlobal.pls[pli][t].cp.pd + 'px';
            }
            break;
        }
      }
      if (paGlobal.pls[pli].t !== 'interstitial') plSStyles['pointer-events'] = 'none';
      return paGlobal.convertStyles(styles, plSStyles);
    },
    containsConnatix: function (pli) {
      if (!paGlobal.pls[pli] || !paGlobal.pls[pli].dgs) {
        return false;
      }

      const domain = 'connatix.com';

      const checkTag = (tag) => {
        if (!tag) {
          return false;
        }

        return tag.indexOf(domain) !== -1;
      }
      
      return paGlobal.pls[pli].dgs.some((demand) => {
        if (demand.type !== 'live' || !demand.live || demand.live.length === 0) {
          return false;
        }

        return demand.live.some((live) => checkTag(live.bodyTag));
      });
    },
    getInnerStyles: function (pli, ci, ui) {
      const isConnatix = paGlobal.containsConnatix(pli);

      var styles = { 'z-index': !isConnatix ? 1 : undefined, height: 0 };
      if (paGlobal.pls[pli].st.bck) {
        styles.background = paGlobal.pls[pli].st.bck;
      }
      if (paGlobal.pls[pli].st.shdw) {
        styles['box-shadow'] = paGlobal.pls[pli].st.shdw;
      }
      if (paGlobal.pls[pli].st.a) {
        styles.transition = 'height 0.5s, margin 0.5s';
        if (paGlobal.pls[pli].t == 'video') {
          styles.transition = 'height 0.1s, margin 0.5s';
        }
      }
      if (paGlobal.pls[pli].st.ora) {
        styles.width = paGlobal.pls[pli].st.s[0] + 'px';
        const extra = paGlobal.pls[pli].vao.adh.on ? 25 : 0; // 25px from addAdHeading height
        styles.height = `calc(${paGlobal.pls[pli].st.s[1]}px + ${extra}px)`;
      }
      var plSStyles = {};
      switch (paGlobal.pls[pli].t) {
        case 'adhesion':
          var adhesionAdTop = paGlobal.getOneStyle.adhesion.inner.top(paGlobal.pls[pli].ap.ip, paGlobal.pls[pli].st.s[1]);
          var adhesionAdWidth = paGlobal.getOneStyle.adhesion.inner.width(ui);
          plSStyles = {position: 'absolute', height: paGlobal.pls[pli].st.s[1] + 'px', top: adhesionAdTop + 'px', width: adhesionAdWidth + 'px', 'max-width': '100%', right: 0, left: 0};
          var side = 'left';
          var otherSide = 'right';
          if (paGlobal.cData[ci].adhesionSide == 'right') {
            side = 'right';
            otherSide = 'left';
          }
          var sideMargin = 'auto';
          var otherSideMargin = 'auto';
          if (paGlobal.pls[pli].ap.ip.is) {
            switch (paGlobal.pls[pli].ap.ip.is) {
              case 'center':
                sideMargin = 'auto';
                otherSideMargin = 'auto';
                break;
              case 'end':
                sideMargin = 0;
                otherSideMargin = 'auto';
                break;
              case 'content':
                sideMargin = 'auto';
                otherSideMargin = 0;
                break;
            }
          }
          plSStyles['margin-' + side] = sideMargin;
          plSStyles['margin-' + otherSide] = otherSideMargin;
          if (!paGlobal.pls[pli].st.ora) {
            plSStyles.width = 0;
          }
          break;
        case 'stickyBottom':
          plSStyles = {position: 'relative', overflow: paGlobal.pls[pli].st.ovf || 'hidden'};
          if (!paGlobal.pls[pli].sbp.ip.ctn || (paGlobal.pls[pli].sbp.ip.ctn && !paGlobal.select(paGlobal.pls[pli].sbp.ip.ctn))) {
            plSStyles.margin = '0 auto';
            plSStyles.left = 0;
            plSStyles.right = 0;
          }
          if (paGlobal.pls[pli].sbp.ip.ctn && paGlobal.select(paGlobal.pls[pli].sbp.ip.ctn)) {
            plSStyles['margin-left'] = paGlobal.selectRect(paGlobal.pls[pli].sbp.ip.ctn).left + paGlobal.selectRect(paGlobal.pls[pli].sbp.ip.ctn).width / 2 - paGlobal.pls[pli].st.s[0] / 2 + 'px;';
          }
          break;
        case 'stickyTop':
          plSStyles = {position: 'relative', overflow: paGlobal.pls[pli].st.ovf || 'hidden'};
          if (!paGlobal.pls[pli].stp.ip.ctn || (paGlobal.pls[pli].stp.ip.ctn && !paGlobal.select(paGlobal.pls[pli].stp.ip.ctn))) {
            plSStyles.margin = '0 auto';
            plSStyles.left = 0;
            plSStyles.right = 0;
          }
          if (paGlobal.pls[pli].stp.ip.ctn && paGlobal.select(paGlobal.pls[pli].stp.ip.ctn)) {
            plSStyles['margin-left'] = paGlobal.selectRect(paGlobal.pls[pli].stp.ip.ctn).left + paGlobal.selectRect(paGlobal.pls[pli].stp.ip.ctn).width / 2 - paGlobal.pls[pli].st.s[0] / 2 + 'px;';
          }
          break;
        case 'multiInsert':
          plSStyles = {position: 'relative'};
          if (paGlobal.pls[pli].st.ora) {
            if (paGlobal.pls[pli].mp.cp.sb) {
              styles.height = paGlobal.pls[pli].mp.cp.sbp.h + 'px';
            }
            styles.margin = paGlobal.pls[pli].mp.ip.m;
          }
          break;
        case 'rail':
          var railAdTop = paGlobal.getOneStyle.rail.inner.top(paGlobal.pls[pli].rp.ip, paGlobal.pls[pli].st.s[1]);
          plSStyles = {position: 'sticky', position: 'sticky', top: railAdTop + 'px', margin: '0 auto', 'max-width': '100%', overflow: 'hidden'};
          break;
        case 'interstitial':
          plSStyles = {top: paGlobal.screenDimensions.h / 2 - paGlobal.pls[pli].st.s[1] / 2 + 'px', margin: '0 auto', position: 'relative', overflow: paGlobal.pls[pli].st.ovf || 'hidden'};
          break;
        case 'video':
          plSStyles = {position: 'relative', display: 'inherit', height: 'inherit', width: 'inherit', 'max-height': 'inherit', 'max-width': 'inherit', overflow: paGlobal.pls[pli].st.ovf || 'hidden', margin: '0 auto'};
          if (paGlobal.pls[pli].vidp.p == 'fixed') {
            if (paGlobal.pls[pli].vidp.fas == 'fixed') {
              (plSStyles.width = '100%'), (plSStyles['max-width'] = '100%');
            } else {
              plSStyles['max-width'] = paGlobal.pls[pli].vidp.mxw + paGlobal.pls[pli].vidp.mxwt;
            }
          }
          if (paGlobal.pls[pli].vidp.t == 'headerFullPage') {
            plSStyles.position = 'absolute';
            plSStyles.margin = '0 auto';
            plSStyles.left = 0;
            plSStyles.right = 0;
            var heightClip = paGlobal.pls[pli].vidp.relHeight == 'fullPage' ? '100vh' : 'min(calc(100vw * 0.5625), 100vh)';
            (plSStyles.clip = 'rect(0px, 100vw, ' + heightClip + ', 0px)'), (plSStyles.overflow = 'hidden');
            plSStyles.width = paGlobal.pls[pli].vidp.mxw + paGlobal.pls[pli].vidp.mxwt;
          }
          break;
        case 'headerVideo':
          if (paGlobal.cData[ci].u == 0) {
            plSStyles = {position: 'relative', display: 'inherit', height: 'inherit', width: paGlobal.pls[pli].hvidp.dispWidth + paGlobal.pls[pli].hvidp.dispWidthType, 'max-height': 'inherit', 'max-width': 'inherit', overflow: 'hidden', margin: paGlobal.pls[pli].hvidp.dispMargin || '0'};
          } else {
            plSStyles = {position: 'relative', display: 'inherit', height: 'inherit', width: paGlobal.pls[pli].hvidp.vidWidth + paGlobal.pls[pli].hvidp.vidWidthType, 'max-height': 'inherit', 'max-width': 'inherit', overflow: 'hidden', [paGlobal.pls[pli].hvidp.vs]: 0, position: 'absolute', margin: paGlobal.pls[pli].hvidp.vidMargin || '0'};
          }
          break;
      }
      return paGlobal.convertStyles(styles, plSStyles);
    },
    multipleStyles: {sticky: 'sticky;position:-webkit-sticky'},
    convertStyles: function (styles, specificStyles) {
      var result = '';
      for (let i of Object.keys(styles)) {
        result += i + ':' + (paGlobal.multipleStyles[styles[i]] || styles[i]) + ';';
      }
      for (let i of Object.keys(specificStyles)) {
        result += i + ':' + (paGlobal.multipleStyles[specificStyles[i]] || specificStyles[i]) + ';';
      }
      return result;
    },
    addScrollSmaller: (pli, ci, ui) => {
      const container = paGlobal.cData[ci].div;
      const unit = paGlobal.data[ui].div;
      container.style.height = unit.offsetHeight + 'px';

      const scrollSmallerOptions = paGlobal.pls[pli].mp?.cp;
      const isOffset = scrollSmallerOptions?.scrollSmaller && scrollSmallerOptions?.scrollSmallerOffset;
      let topOffset = isOffset ? scrollSmallerOptions?.scrollSmallerOffset : 0;

      function resetUnit() {
        if (unit.style.position !== 'fixed') return;
        unit.style.position = 'relative';
        unit.style.top = 'unset';
        unit.style.left = 'unset';
        unit.style.bottom = 'unset';
      }

      let ticking = false;
      window.addEventListener('scroll', () => {
        if (!ticking) {
          window.requestAnimationFrame(() => {
            try {
              const unitHeight = unit.offsetHeight;
              const containerRect = container.getBoundingClientRect();
              const containerTop = containerRect.top;
              const containerHeight = containerRect.height;
              const containerWidth = containerRect.width;
              const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0;
              const containerCenterXPos = scrollLeft + containerRect.left + containerRect.width / 2;
              const maxOffset = containerHeight - unitHeight - (paGlobal.plData[pli].adHeadingAdded ? paGlobal.adHeadingHeightPx : 0);
              const calculatedOffset = containerTop < topOffset ? topOffset - containerTop : 0;
              const offset = Math.min(calculatedOffset, maxOffset);
              const unitRect = unit.getBoundingClientRect();
              const unitWidth = unitRect.width;
              unit.style.willChange = 'left, top';

              if (offset > 0) {
                if (calculatedOffset > maxOffset + paGlobal.adHeadingHeightPx) {
                  if (unit.style.position !== 'absolute') {
                    unit.style.position = 'absolute';
                    unit.style.bottom = '0px';
                    unit.style.left = (containerWidth / 2) - (unitWidth / 2) + 'px';
                    unit.style.top = 'unset';
                  }
                } else {
                  const newTop = (topOffset || '0') + 'px';
                  const newLeft = containerCenterXPos - unitWidth / 2 + 'px';
                  if (unit.style.position !== 'fixed' || unit.style.top !== newTop || unit.style.left !== newLeft) {
                    unit.style.position = 'fixed';
                    unit.style.top = newTop;
                    unit.style.left = newLeft;
                  }
                }
              } else {
                resetUnit();
              }
            } catch (e) {
              console.error(e);
              resetUnit();
            }
            ticking = false;
          });
          ticking = true;
        }
      });
    },
    getExpandable: (pli, ci, ui) => {
      if (paGlobal.pls[pli].t !== 'multiInsert') return false;
      if (!paGlobal.pls[pli].mp.cp.expandable) return false;
      if (paGlobal.pls[pli].mp.cp.expandableLimit) return (paGlobal.plData[pli].expandableServed || 0) < paGlobal.toIntConv(paGlobal.pls[pli].mp.cp.expandableLimit);
      return true;
    },
    getScreenDimensions: function () {
      // use the lesser number of outerWidth / innerWidth
      //honeslty not completely sure the
      return {
        w: screen.width || document.documentElement.offsetWidth || window.innerWidth || screen.availWidth,
        h: screen.height || window.innerHeight || screen.availHeight
      };
    },
    hideFrame: (pli, ci, ui) => {
      if (paGlobal.getExpandable(pli, ci, ui)) {
        paGlobal.data[ui].hiddenByExpandable = true;
        const frame = paGlobal.data[ui].frame;
        frame.style.position = 'absolute';
        frame.style.left = '-1000px';
        frame.removeAttribute('width');
        frame.removeAttribute('height');
        const screenDimensions = paGlobal.getScreenDimensions();
        frame.style.width = screenDimensions.w + 'px';
        frame.style.height = screenDimensions.h + 'px';
      } else {
        paGlobal.data[ui].frame.style.display = 'none';
        paGlobal.data[ui].frame.style.maxWidth = '100%';
      }
    },
    showFrame: (pli, ci, ui) => {
      if (paGlobal.data[ui].hiddenByExpandable) {
        paGlobal.data[ui].hiddenByExpandable = false;
        paGlobal.data[ui].frame.style.position = 'relative';
        paGlobal.data[ui].frame.style.left = '0';

        const frame = paGlobal.data[ui].frame;
        const size = paGlobal.data[ui].demand.s;
        const div = paGlobal.cData[ci].div;

        if (paGlobal.toIntConv(size[0]) > div.offsetWidth) {
          // if this happens that means this is an expandable ad...
          paGlobal.plData[pli].expandableServed++;
          const diff = paGlobal.toIntConv(size[0]) - div.offsetWidth;
          frame.style.marginLeft = -(diff / 2) + 'px';
        }
        if (paGlobal.toIntConv(size[1]) < frame.offsetHeight) {
          frame.style.height = size[1] + 'px';
        }
        if (paGlobal.toIntConv(size[0]) < frame.offsetWidth) {
          frame.style.width = size[0] + 'px';
        }
      } else {
        paGlobal.data[ui].frame.style.display = 'block';
      }
    },
    addFrame: (pli, ci, ui) => {
      paGlobal.dispatchEvent('pa_request', {pli, ci, ui})
      if (!paGlobal.marks.first_add_frame) {
        performance.mark('first_add_frame');
        paGlobal.marks.first_add_frame = true;
      } else if (paGlobal.fivePassed && !paGlobal.marks.later_add_frame) {
        performance.mark('later_add_frame');
        paGlobal.marks.later_add_frame = true;
      }

      if (paGlobal.data[ui].documentExists) {
        paGlobal.data[ui].pbjsBidWonFired = undefined;
        paGlobal.data[ui].prebidSize = undefined;
        paGlobal.data[ui].amzSize = undefined;
      }

      paGlobal.data[ui].demand.dgIndex = 0;
      paGlobal.data[ui].demand.tagIndex = 0;

      const isDirectInject = paGlobal.plData[pli].directInject;

      if (!paGlobal.data[ui].documentExists) {
        paGlobal.data[ui].frame = (isDirectInject ? paGlobal.data[ui].div.ownerDocument : document).createElement('iframe');
        paGlobal.data[ui].frame.src = 'about:blank';
        paGlobal.data[ui].frame.setAttribute('frameborder', '0');
        paGlobal.data[ui].frame.setAttribute('marginwidth', '0');
        paGlobal.data[ui].frame.setAttribute('marginheight', '0');
        paGlobal.data[ui].frame.setAttribute('scrolling', 'no');
        paGlobal.data[ui].frame.style.width = 'inherit';
        paGlobal.data[ui].frame.style.height = 'inherit';
        // paGlobal.data[ui].frame.style.display = 'none';
        paGlobal.hideFrame(pli, ci, ui);
        // paGlobal.data[ui].frame.style.maxWidth = '100%';
        paGlobal.data[ui].frame.style.margin = '0';
        if (paGlobal.sandboxFrames) paGlobal.data[ui].frame.setAttribute('sandbox', 'allow-forms allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-top-navigation-by-user-activation');
        paGlobal.data[ui].frame.classList.add('pa_frame');
        paGlobal.data[ui].div.appendChild(paGlobal.data[ui].frame);
        paGlobal.scheduledCallsToWriteDoc++;
        paGlobal.data[ui].documentExists = false;
      }

      setTimeout(() => {
        paGlobal.writeDoc(pli, ci, ui);

        if (paGlobal.data[ui].documentExists) {
          window.postMessage({ event: 'ad.slot.ready', ui }, location.origin);
        }
      }, 0);
    },
    scheduledCallsToWriteDoc: 0,
    getDirectImgs: function (pli, link, ui) {
      if (paGlobal.pls[pli].t === 'multiInsert' && paGlobal.pls[pli].mp.cp.fold) {
        return `<div class="folding-unit-wrap">${Array.from({length: paGlobal.data[ui].segmentCount})
          .map((x, i) => `<div class="folding-segment-wrap"><div id="img-segment-wrap-${i + 1}" class="img-segment-wrap"><img id="img-segment-${i + 1}"  class="img-segment" src="${link}"></div></div>`)
          .join('')}</div>`;
      } else {
        return `<img>`;
      }
    },
    setFluidHeight: (pli, ci, ui) => {
      var cHeight = paGlobal.pls[pli].st.fMinH || paGlobal.pls[pli].st.s[1];
      function getNextFrame(frameD) {
        if (frameD) {
          // possible error: global var?
          var frame = frameD.querySelector('iframe');
          return frame;
        } else {
          return null;
        }
      }
      function getDiv() {
        var frame = paGlobal.data[ui].frame;
        function tryDiv(frame) {
          var frameD = frame.contentDocument;
          if (frameD.querySelector('[id^="/90814396/"]')) {
            return frameD.querySelector('[id^="/90814396/"]');
          } else {
            var nextFrame = getNextFrame(frameD);
            if (nextFrame) {
              return tryDiv(nextFrame);
            } else {
              return frame;
            }
          }
        }
        return tryDiv(frame);
      }
      // possible error: global var?
      var div = getDiv();
      var tries = 0;
      var maxTries = 5;
      if (div.offsetHeight) {
        setHeight();
      } else {
        tryAgain();
      }
      function trySettingHeight() {
        if (div.offsetHeight) {
          setHeight();
        } else {
          setTimeout(() => {
            trySettingHeight();
          }, 50 * tries);
        }
      }
      function tryAgain() {
        if (tries < maxTries) {
          trySettingHeight();
        } else {
          tryAgain();
        }
        tries++;
      }
      function setHeight() {
        paGlobal.data[ui].demand.s = [paGlobal.data[ui].div.offsetWidth, Math.max(paGlobal.toIntConv(cHeight), div.offsetHeight || 0)];
        paGlobal.data[ui].demand.cs = paGlobal.data[ui].demand.s;
        paGlobal.data[ui].div.style.height = paGlobal.getHeight(paGlobal.toIntConv(paGlobal.data[ui].demand.s[1]), pli) + 'px';
      }
    },
    setAmazonHeight: (pli, ci, ui) => {
      paGlobal.data[ui].div.style.width = '100%';
      var plHeight = (paGlobal.data[ui].demand.s && paGlobal.data[ui].demand.s[1]) || paGlobal.pls[pli].st.s[1];
      var frameBody = paGlobal.data[ui].frame.contentDocument && paGlobal.data[ui].frame.contentDocument.body;
      var tries = 0;
      var maxTries = 10;
      if (frameBody.offsetHeight) {
        setHeight();
      } else {
        tryAgain();
      }
      function tryAgain() {
        if (tries < maxTries) {
          trySettingHeight();
        }
        tries++;
      }
      function trySettingHeight() {
        if (frameBody.offsetHeight) {
          setHeight();
        } else {
          setTimeout(() => {
            tryAgain();
          }, 50 * tries);
        }
      }
      function setHeight() {
        paGlobal.data[ui].demand.s = [paGlobal.data[ui].div.offsetWidth, Math.max(frameBody.offsetHeight, paGlobal.toIntConv(plHeight))];
        paGlobal.data[ui].demand.cs = paGlobal.data[ui].demand.s;
        paGlobal.data[ui].div.style.height = paGlobal.getHeight(paGlobal.toIntConv(paGlobal.data[ui].demand.s[1]), pli) + 'px';
      }
    },
    openAd: function (pli, ci, ui, afterSizeFired) {
      if (!paGlobal.marks.first_open_ad) {
        performance.mark('first_open_ad');
        paGlobal.marks.first_open_ad = true;
        performance.measure('first_frame_to_open', 'first_add_frame', 'first_open_ad');
      }
      if (!paGlobal.marks.later_open_ad && paGlobal.marks.later_add_frame) {
        performance.mark('later_open_ad');
        performance.measure('later_frame_to_open', 'later_add_frame', 'later_open_ad');
        paGlobal.marks.later_open_ad = true;
        const marks = {type: 'performance', pubI: paGlobal.pubI, pub_name: paGlobal.pubName};
        performance
          .getEntries()
          .filter(e => Object.keys(paGlobal.marks).includes(e.name) || ['first_frame_to_open', 'later_frame_to_open', 'script_start', 'pls_retrieved', 'tab_toggle', 'aau_check', 'abp_check'].includes(e.name) || /(localhost\/)([0-9]+\/)?(script)/.test(e.name) || /(powerad.ai\/)([0-9]+\/)?(script)/.test(e.name) || e.entryType === 'first-input')
          .forEach(e => {
          if (e.entryType === 'first-input') {
            marks.fid = e.processingStart - e.startTime;
            marks.first_input_start = e.startTime;
            return;
          }
          if (e.entryType === 'measure') {
            marks[e.name] = e.duration;
            return;
          }
          if (e.entryType === 'resource') {
            if (window.__paC && window.__pa) {
              if (e.name.endsWith('script.js')) return;
            }
            marks.script_load_start = e.startTime;
            marks.script_duration = e.duration;
            return;
          }
          marks[e.name] = e.startTime;
        });
        if (!marks.fid) {
          marks.fid = 0;
        }
        marks.network_speed = (navigator.connection && navigator.connection.downlink) || '-1';
        marks.pbjs_v = paGlobal.pbjsWrapperV || '1.1';
        marks.tab_active = paGlobal.initialTabState ? 1 : 0;
        if (!marks.tab_toggle) {
          marks.tab_toggle = 0;
        }
        const clsObs = new PerformanceObserver(entryList => {
          let sessionValue = 0;
          let sessionEntries = [];
          entryList.getEntries().forEach(entry => {
            if (!entry.hadRecentInput) {
              const firstSessionEntry = sessionEntries[0];
              const lastSessionEntry = sessionEntries[sessionEntries.length - 1];
              if (sessionValue && entry.startTime - lastSessionEntry.startTime < 1000 && entry.startTime - firstSessionEntry.startTime < 5000) {
                sessionValue += entry.value;
                sessionEntries.push(entry);
              } else {
                sessionValue = entry.value;
                sessionEntries = [entry];
              }
            }
          });
          marks.cls = sessionValue || 0;
          clsObs.disconnect();
        });
        clsObs.observe({type: 'layout-shift', buffered: true});
        const lcpObs = new PerformanceObserver(entryList => {
          marks.lcp = Math.max(...entryList.getEntries().map(e => e.startTime), 0);
          lcpObs.disconnect();
          marks.timeDif = Date.now();
          paGlobal.reporting.x(marks);
        });
        lcpObs.observe({type: 'largest-contentful-paint', buffered: true});
      }
      paGlobal.data[ui].demand.cs = paGlobal.data[ui].demand.cs || paGlobal.data[ui].demand.s || paGlobal.pls[pli].st.s;
      if (paGlobal.pls[pli].vp.op.on) {
        if (paGlobal.pls[pli].vp.op.aos) {
          if (paGlobal.toIntConv(paGlobal.data[ui].demand.s[0]) >= paGlobal.pls[pli].vp.op.aosp[0] && paGlobal.toIntConv(paGlobal.data[ui].demand.s[1]) >= paGlobal.pls[pli].vp.op.aosp[1]) {
            paGlobal.openPart(pli, ci, ui);
          } else {
            paGlobal.data[ui].div.style.width = paGlobal.data[ui].demand.s[0] + 'px';
            paGlobal.data[ui].div.style.height = paGlobal.getHeight(paGlobal.toIntConv(paGlobal.data[ui].demand.s[1]), pli) + 'px';
          }
        } else {
          paGlobal.openPart(pli, ci, ui);
        }
      } else if (paGlobal.pls[pli].t == 'multiInsert' && paGlobal.pls[pli].mp.cp.sb) {
        if (!paGlobal.pls[pli].mp.cp.sbp.aos || (paGlobal.pls[pli].mp.cp.sbp.aos && paGlobal.toIntConv(paGlobal.data[ui].demand.s[1]) >= paGlobal.pls[pli].mp.cp.sbp.aos)) {
          paGlobal.smallerBox(pli, ci, ui);
        } else {
          if (paGlobal.pls[pli].t == 'multiInsert' && paGlobal.pls[pli].mp.cp.sb) {
            paGlobal.cleanSmallerBox(pli, ci, ui);
          }
          paGlobal.data[ui].div.style.width = paGlobal.data[ui].demand.s[0] + 'px';
          paGlobal.data[ui].div.style.height = paGlobal.getHeight(paGlobal.toIntConv(paGlobal.data[ui].demand.s[1]), pli) + 'px';
        }
      } else {
        if (paGlobal.data[ui].demand.fluid || paGlobal.data[ui].demand.cb == 'otherFluid') {
          var maxWidth = '';
          if (paGlobal.pls[pli].st.fmw) {
            maxWidth = ', ' + paGlobal.pls[pli].st.fmw + 'px';
          }
          paGlobal.data[ui].div.style.width = 'Min(100%' + maxWidth + ')';
        } else {
          if (paGlobal.pls[pli].t == 'video') {
          } else {
            if (paGlobal.pls[pli].t == 'headerVideo') {
              paGlobal.cData[ci].div.style.height = 'auto';
              paGlobal.cData[ci].div.style.maxHeight = '100%';
              paGlobal.data[ui].frame.style.width = '100%';
              if (paGlobal.data[ui].vidInfo) {
                paGlobal.data[ui].div.style.width = paGlobal.data[ui].vidInfo.width;
              } else {
                paGlobal.data[ui].frame.style.width = paGlobal.data[ui].demand.s[0] + 'px';
                paGlobal.data[ui].frame.style.margin = paGlobal.pls[pli].hvidp.dispMargin;
              }
            } else {
              paGlobal.data[ui].div.style.width = paGlobal.data[ui].demand.s[0] + 'px';
            }
          }
        }
        if (paGlobal.pls[pli].t == 'stickyBottom' && paGlobal.pls[pli].sbp.ip.ctn && paGlobal.select(paGlobal.pls[pli].sbp.ip.ctn)) {
          if (paGlobal.toIntConv(paGlobal.data[ui].demand.cs[0]) < 950) {
            paGlobal.data[ui].div.style.marginLeft = paGlobal.selectRect(paGlobal.pls[pli].sbp.ip.ctn).left + paGlobal.selectRect(paGlobal.pls[pli].sbp.ip.ctn).width / 2 - paGlobal.toIntConv(paGlobal.data[ui].demand.cs[0]) / 2 + 'px';
          } else {
            paGlobal.data[ui].div.style.margin = '0 auto';
            paGlobal.data[ui].div.style.left = '0';
            paGlobal.data[ui].div.style.right = '0';
          }
        }
        if (paGlobal.pls[pli].t == 'video') {
          if (paGlobal.pls[pli].vidp.t == 'headerFullPage') {
            paGlobal.cData[ci].div.style.transition = 'height 0.5s';
            paGlobal.data[ui].vidInfo.scrollNoteDiv.style.height = '35px';
            if (paGlobal.pls[pli].vidp.relHeight == 'fullPage') {
              paGlobal.data[ui].vidInfo.scrollNoteDiv.style.top = '';
              paGlobal.data[ui].vidInfo.scrollNoteDiv.style.removeProperty('top');
              paGlobal.data[ui].vidInfo.scrollNoteDiv.style.bottom = '0';
            } else {
              paGlobal.data[ui].vidInfo.scrollNoteDiv.style.top = 'min(calc(56.25vw - 35px), calc(100vh - 35px))';
            }
            paGlobal.cData[ci].div.style.maxHeight = '100%';
            paGlobal.cData[ci].div.style.height = paGlobal.pls[pli].vidp.relHeight == 'fullPage' ? '100vh' : 'min(calc(100vw * 0.5625), 100vh)';
            paGlobal.data[ui].frame.style.position = 'fixed';
          }
          // possible error: check actual case
        } else if (paGlobal.pls[pli].t == 'headervideo') {
          if (paGlobal.data[ui].vidInfo) {
            paGlobal.data[ui].height = paGlobal.data[ui].vidInfo.height;
          } else {
            paGlobal.data[ui].div.style.height = paGlobal.data[ui].demand.s[1] + 'px';
          }
        } else {
          if (paGlobal.data[ui].vidInDisp.onVid && paGlobal.pls[pli].vidInDisp.oph) {
            var openHeight = paGlobal.getHeight(paGlobal.pls[pli].st.s[1], pli);
          } else {
            var openHeight = paGlobal.getHeight(paGlobal.toIntConv(paGlobal.data[ui].demand.s[1]), pli);
          }
          if (paGlobal.data[ui].demand.fluid || paGlobal.data[ui].demand.cb == 'otherFluid') {
            if (paGlobal.data[ui].demand.cb == 'otherFluid') {
              paGlobal.setAmazonHeight(pli, ci, ui);
            } else {
              paGlobal.setFluidHeight(pli, ci, ui);
            }
          } else if (paGlobal.pls[pli].t !== 'video') {
            paGlobal.data[ui].div.style.height = openHeight + 'px';
          }
        }
        if (paGlobal.data[ui].vidInDisp.onVid && paGlobal.pls[pli].vidInDisp.contMaxH) {
          paGlobal.cData[ci].div.style.maxHeight = paGlobal.pls[pli].vidInDisp.contMaxH + 'px';
          paGlobal.cData[ci].div.style.overflow = 'visible';
          if (paGlobal.pls[pli].t === 'stickyBottom' && paGlobal.pls[pli].vidInDisp.contMaxH < openHeight) {
            paGlobal.data[ui].frame.style.marginTop = paGlobal.pls[pli].vidInDisp.contMaxH - openHeight + 'px';
          }
        }
      }
      if (afterSizeFired && paGlobal.data[ui].scaleActive) {
        let height = Math.max(parseInt(paGlobal.data[ui].div.style.height) * paGlobal.data[ui].scale, paGlobal.data[ui].div.getBoundingClientRect().height);
        if (paGlobal.pls[pli].vao.adh.on) height += 25;
        paGlobal.cData[ci].div.style.height = height + 'px';
      }
      if (paGlobal.data[ui].scaleWaitingForSize) {
        paGlobal.scaleAd(pli, ci, ui);
        paGlobal.data[ui].scaleWaitingForSize = false;
      }
      if (paGlobal.pls[pli].t == 'multiInsert' && paGlobal.pls[pli].mp.cp.fe) {
        paGlobal.flipEffect(pli, ci, ui);
      }
      if (paGlobal.pls[pli].t === 'adhesion') {
        paGlobal.data[ui].observerPx.style.height = paGlobal.data[ui].demand.cs[1] + 'px';
      }
      if (paGlobal.pls[pli].t === 'interstitial') {
        paGlobal.data[ui].div.style.top = paGlobal.screenDimensions.h / 2 - paGlobal.getHeight(paGlobal.toIntConv(paGlobal.data[ui].demand.cs[1]), pli) / 2 + 'px';
      }
      paGlobal.data[ui].div.style.pointerEvents = 'auto';
    },
    compileHBDoc: (pli, ci, ui, options) => {
      return new Promise((res, rej) => {
        const {
          currentDemand,
          runGeoEdge,
          runAdLight
        } = options || {}
        const hbSizes = (currentDemand && currentDemand.hbSizes) || [];
        const pSizes = hbSizes.filter((size) => {
          paGlobal.data[ui].demand.s = size;
          return paGlobal.checkFitable(pli, ci, ui);
        });
        let keyValues = [
          ["refresh", paGlobal.data[ui].refCount],
          ["url", window.location.href],
          ["pli", pli],
          ["pa_placement_type", paGlobal.pls[pli].t || ""],
        ];
        if (currentDemand.keyValues)
          keyValues.push(...paGlobal.getDemandGeyValues(currentDemand));
        if (!paGlobal.refSent) {
          paGlobal.refSent = true;
          keyValues.push(["referrer", document.referrer]);
        }

        const placementUnitCount = paGlobal.plData[pli].unitIds.indexOf(ui);
        keyValues.push(["placement_unit_count", placementUnitCount]);
        keyValues = keyValues.concat(paGlobal.keyValues);

        const gpid = (paGlobal.pls[pli].gpid && `${paGlobal.pls[pli].gpid}-${placementUnitCount + 1}`) || "";

        paGlobal.getHBData(currentDemand.linkNumber, pSizes || [], keyValues || [], gpid, (parts) => {
          if (parts.error) {
            paGlobal.log.warn(`Cannot get wrapper params for unit ${parts.unitId}: ${parts.error}`);
          }
          if (paGlobal.pbjsWrapperV === '3.0' && !parts.error) {
            const someProps = {
              unitSizes: pSizes,
              customTargetings: [],
            };
            if (pSizes.length === 0) {
              delete someProps.unitSizes;
            }
            if (Array.isArray(parts.data.customTargetings)) {
              someProps.customTargetings.push(...parts.data.customTargetings);
            }
            someProps.customTargetings.push(...keyValues);
            const v3id = window['pa_pbjs_fw3.0'].wPbjs.add(parts.data);
            window['pa_pbjs_fw3.0'].wPbjs.setSomeProperties(v3id, someProps);
    
            paGlobal.placementsIdsToCall.push(v3id);
    
            if (parts.head) {
              parts.head = parts.head.replaceAll('[[PLACEMENT_ID]]', v3id);
              paGlobal.data[ui].v3id = v3id;
            }
          }

          if (hbSizes[0] && !pSizes[0]) {
            paGlobal.log.info(`unit ${ui} (pl ${pli}) skipping demand ${(paGlobal.data[ui].demand.tn + 1)} (${paGlobal.data[ui].demand.cb}) as no fitting size found`);
            clearTimeout(paGlobal.data[ui].fallbackTimeout);
            return paGlobal.impListener(pli, ci, ui, !1);
          }

          let comscoreCode = "";
          if (currentDemand.comscore) {
            comscoreCode = '<script>window._comscore=[{c1:"8",c2:"38232103",c3:"1"}];</script><script async src="https://sb.scorecardresearch.com/cs/38232103/beacon.js"></script>';
          }
          const pausedRequestPW = currentDemand.pauseAfterAuction ? `function pausedRequestPW({bidderCode,price,resumeRequest}){parent.paGlobal.data[${ui}].resumeRequest=resumeRequest};` : "";

          paGlobal.data[ui].callingAuctionId = parts.auctionId;
          paGlobal.data[ui].pSizes = pSizes;
          
          res(`<html><head>
            <script>performance.mark('frame.${pli}.${ci}.${ui}')</script>
            <script${window.flNonce ? ` nonce="${window.flNonce}"` : ""}>parent.paGlobal.log.info('hb frame: clear fallback timeout for pli = ${pli} ci = ${ci} ui = ${ui}'); parent.clearTimeout(parent.paGlobal.data[${ui}].fallbackTimeout);${paGlobal.getUspapiString("parent")}${paGlobal.getGdprString("parent")}${pausedRequestPW}<\/script>
            ${runAdLight ? `<script src="https://tagan.adlightning.com/nextmillenium/op.js"${window.flNonce ? ` nonce="${window.flNonce}"` : ""}><\/script>` : ""}${runGeoEdge ? `<script${window.flNonce ? ` nonce="${window.flNonce}"` : ""}>window.grumi={key: '17d0317a-896b-4287-bbe3-927a34a6cfa3'};<\/script><script src="//rumcdn.geoedge.be/17d0317a-896b-4287-bbe3-927a34a6cfa3/grumi-ip.js" async${window.flNonce ? ` nonce="${window.flNonce}"` : ""}><\/script>` : ""}
            ${parts.head}
            ${currentDemand.blockThrough ? `<script src="https://btloader.com/tag?o=5759505104109568&upapi=true" async${window.flNonce ? ` nonce="${window.flNonce}"` : ""}><\/script>` : ""}
            <script${window.flNonce ? ` nonce="${window.flNonce}"` : ""}>
              window.hbAUS?.cmd.push(() => {
                window.hbAUS?.setConfig({ debug: ${paGlobal.debug} });
              });
              window.hbAUS?.cmd.push(() => {
                ${paGlobal.plData[pli].directInject ? 'top' : 'parent'}.postMessage({ event: 'ad.slot.ready', ui: ${ui} }, location.origin);
              });
            <\/script>${comscoreCode}
          </head>
            <body>${parts.body}</body>
            <script>console.log('frame.${pli}.${ci}.${ui}.creationTime', performance.measure('frame.${pli}.${ci}.${ui}.creationTime', 'frame.${pli}.${ci}.${ui}'))</script>
            </html>`);
        })
      })
    },
    compileDoc: (pli, ci, ui) => {
      return new Promise(async (res, rej) => {
        let result = `<html><head><title>Yukshy Inject Frame</title><script${window.flNonce ? ` nonce="${window.flNonce}"` : ''}>parent.paGlobal.log.info('frame: clear fallback timeout for pli = ${pli} ci = ${ci} ui = ${ui}'); parent.clearTimeout(parent.paGlobal.data[${ui}].fallbackTimeout)</script><script${window.flNonce ? ` nonce="${window.flNonce}"` : ''}>function imp(){parent.paGlobal.impListener(${pli},${ci},${ui},true);};function noImp(){parent.paGlobal.impListener(${pli},${ci},${ui},false)};</script>`;
        let currentDemand = paGlobal.getCurrentDemand(pli, ui);
        if ((currentDemand.type == 'direct' || paGlobal.data[ui].demand.cad) && !paGlobal.data[ui].vidInDisp.onVid && paGlobal.pls[pli].t !== 'video' && (paGlobal.pls[pli].t !== 'headerVideo' || (paGlobal.pls[pli].t === 'headerVideo' && !paGlobal.data[ui].vidInfo))) {
          paGlobal.data[ui].demand.cb = 'direct';
          if (paGlobal.pls[pli].t === 'multiInsert' && paGlobal.pls[pli].mp.cp.fold) {
            const fSegH = paGlobal.pls[pli].mp.cp.foldParams.fSegHeight >= 0 ? paGlobal.pls[pli].mp.cp.foldParams.fSegHeight : 50;
            paGlobal.data[ui].segmentCount = Math.round((paGlobal.pls[pli].st.s[1] - fSegH) / 50) + 1;
            result += `<style>.folding-unit-wrap.fully-open>.folding-segment-wrap:first-child{max-height:unset}.folding-unit-wrap.fully-open #img-segment-wrap-1{height:auto}.folding-unit-wrap.fully-open #img-segment-1{height:auto}div.folding-segment-wrap{width:100%;margin:0 auto;perspective:500px;padding:0}.folding-segment-wrap:first-child{max-height:${fSegH}}.img-segment-wrap,img.img-segment{width:100%;height:50px;object-fit:cover;margin:0;mix-blend-mode:color;background-size:100% 200%;background-repeat:no-repeat;}.folding-segment-wrap:nth-child(even)>.img-segment-wrap{background-image:linear-gradient(transparent 50%,#0000006b)}.folding-segment-wrap:nth-child(odd)>.img-segment-wrap{background-image:linear-gradient(#0000006b,transparent 50%);background-position:0% 100%;margin-top:-1px}.folding-segment-wrap:first-child>.img-segment-wrap,#img-segment-1{background-image:none;margin-top: 0px;height:${fSegH}px}#img-segment-1{object-position:0% 0%}${Array.from({length: paGlobal.data[ui].segmentCount}, (_, i) => i + 2)
              .map((x, i) => `#img-segment-${x}{object-position:0% -${fSegH + 50 * i}px}`)
              .join('')}.folding-segment-wrap:last-child .img-segment{object-position:0% 100% !important}</style>`;
          }
          let clickThrough = '';
          let creative;
          if (currentDemand.rc) {
            creative = currentDemand.direct[Math.floor(Math.random() / (1 / currentDemand.direct.length))];
          } else {
            creative = currentDemand.direct;
          }
          if (creative.ct) {
            if (creative?.size) {
              try {
                paGlobal.data[ui].demand.s = JSON.parse(creative.size);
              } catch (err) {}
            }
            let ct = creative.ct;
            if (creative.impTracking) ct = `https://reporting.powerad.ai/impression_tracking?domain=${document.domain}&pl=${pli}&redirect_url=${ct}`;
            clickThrough = 'href="' + ct + '"';
          }
          result += `</head><body><a target="_blank" ${clickThrough}>${paGlobal.getDirectImgs(pli, creative.l, ui)}</a><script${window.flNonce ? ` nonce="${window.flNonce}"` : ''}>const img=document.querySelector('img');img.addEventListener('load', imp);img.src="${creative.l}"</script>`;
          if (currentDemand.customHTML) result += decodeURIComponent(currentDemand.customHTML);
          result += '</body></html>';
        } else {
          if (paGlobal.data[ui].vidInDisp.onVid) {
            currentDemand = {s: paGlobal.data[ui].vidInDisp.s, partner: 'vid-in-disp'};
          } else if (paGlobal.pls[pli].t !== 'video' && paGlobal.pls[pli].t !== 'headerVideo') {
          } else {
            currentDemand = {partner: 'video', s: paGlobal.data[ui].demand.s};
          }
          paGlobal.data[ui].demand.s = currentDemand.s || paGlobal.pls[pli].st.s;
          if (typeof paGlobal.data[ui].demand.s[0] == 'string') {
            // possible error: demand.s maybe ??
            paGlobal.data[ui].demand.s = paGlobal.data[ui].demand.s.map(x => paGlobal.toIntConv(x) || x);
          }
          currentDemand.s = paGlobal.data[ui].demand.s;
          // paGlobal.data[ui].demand.cb = cDemand.name || cDemand.partner || 'Unknown';
          var rn = Math.floor(Math.random() * 50);
          var runAdLight = false;
          var runGeoEdge = false;
          if (paGlobal.geoEdge && !currentDemand.geoEdgeOff) {
            runGeoEdge = Math.floor(Math.random() / (1 / paGlobal.geoEdgePace)) === 0;
          }
          switch (currentDemand.partner) {
            case 'video':
              result += `<style>body{display: flex; justify-content: center; align-items: center;} .video-container {position: relative; margin: auto; padding: 0;}</style></head><body><div class='video-container'></div><script${window.flNonce ? ` nonce="${window.flNonce}"` : ''}>var vid = new parent.paVid.Video(document.querySelector('div.video-container'),parent.paGlobal.data[${ui}].vidInfo.tags,parent.paGlobal.data[${ui}].vidInfo.maxVids || 1,null,parent.paGlobal.device || 'desktop',{pli:${pli},pauseOOV:false,toggleMute: true,width: ${paGlobal.data[ui].div.offsetWidth},height: ${paGlobal.data[ui].vidInfo.height || paGlobal.data[ui].div.offsetWidth * 0.5625},autoResize: true,refCountStart: ${paGlobal.data[ui].refCount}});impCalled = false;vid.on('impression',()=>{if(impCalled){return};setTimeout(()=>{parent.document.dispatchEvent(parent.paGlobal.fakeScroll);},500);impCalled = true;imp()});vid.on('error',()=>{if(impCalled){return};impCalled = true;noImp()});vid.on('complete',()=>{if(parent.paGlobal.pls[${pli}].t == 'headerVideo'){if(parent.paGlobal.pls[${pli}].hvidp.closeOnComplete){parent.paGlobal.remove(${pli},${ci},${ui},'outer');} else {parent.paGlobal.remove(${pli},${ci},${ui});}} else if(parent.paGlobal.pls[${pli}].t == 'video'){parent.paGlobal.cData[${ci}].div.style.height = 0;parent.paGlobal.remove(${pli},${ci},${ui});};});parent.paGlobal.data[${ui}].vidInfo.vid = vid;</script></body></html>`;
              break;
            case 'vid-in-disp':
              switch (paGlobal.pls[pli].vidInDisp.player) {
                case 'pavid': {
                  result += `<link rel="stylesheet" type="text/css" href="https://powerad.ai/vid_style.css"></link><style>.video-container {width: 100%;height: 100%;margin: 0;padding: 0;}</style></head><body><div class="video-container"></div><script${window.flNonce ? ` nonce="${window.flNonce}"` : ''}>if(window.parent.getPaVid){window.parent.paVid = window.parent.getPaVid()};var vid = new window.parent.paVid.Video(document.querySelector('div.video-container'), parent.paGlobal.pls[${pli}].vidInDisp.tags, parent.paGlobal.pls[${pli}].vidInDisp.vidTimes || 1, null, parent.paGlobal.device || 'desktop',{pli:${pli},pauseOOV:true,toggleMute: true,width: parent.paGlobal.data[${ui}].vidInDisp.s[0],height: parent.paGlobal.data[${ui}].vidInDisp.s[1],refCountStart: ${paGlobal.data[ui].refCount || 0}, vidInDisp: true});impCalled = false;vid.on('impression',()=>{if(impCalled){return};impCalled = true;imp()});vid.on('error',()=>{parent.paGlobal.vidInDispVidComplete(${pli},${ci},${ui},true);});vid.on('nextVid',()=>{if(vid.is.vid > 0){parent.paGlobal.data[${ui}].vidInDisp.count++;parent.paGlobal.data[${ui}].refCount++;}});vid.on('complete',()=>{parent.paGlobal.vidInDispVidComplete(${pli},${ci},${ui});});parent.paGlobal.data[${ui}].vidInDisp.vid = vid;</script></body></html>`;
                  break;
                }
                case 'power-player': {
                  result += `<style>.video-container {width: 100%;height: 100%;margin: 0;padding: 0;}</style></head><body><div class="video-container"></div><script>
  impCalled = false;
  const widthPx = parent.paGlobal.data[${ui}].vidInDisp.s[0] - 10;
  const heightPx = parent.paGlobal.data[${ui}].vidInDisp.s[1];
  var vid = new parent.PowerPlayer({
    target: document.querySelector('div.video-container'),
    skin: 'default',
    autoplay: true,
    muted: true,
    width: widthPx,
    height: heightPx,
    outstream: true,
    plugins: {
      ad: {
        listeners: {
          'impression': () => {
            if (impCalled) {
              return
            }
            
            impCalled = true;
            imp()
            
            parent.player.resize(widthPx - 5, heightPx, true);
          },
          'error': () => {
            parent.paGlobal.vidInDispVidComplete(${pli}, ${ci}, ${ui}, true);
          },
          'nextVid': () => {
            if (parent.paVid.vidInstances[0].is.vid > 0) {
              parent.paGlobal.data[${ui}].vidInDisp.count++;
              parent.paGlobal.data[${ui}].refCount++;
            }
            
            parent.player.play()
          },
          'complete': () => {
            parent.paGlobal.vidInDispVidComplete(${pli}, ${ci}, ${ui});
          },
        },
        maxVideos: parent.paGlobal.pls[${pli}].vidInDisp.vidTimes || 1,
        tags: parent.paGlobal.pls[${pli}].vidInDisp.tags,
        device: parent.paGlobal.device || 'desktop',
        options: {
            refCountStart: parent.paGlobal.data[${ui}].refCount || 0,
            pli: ${pli}
        },
        hideBottomControls: true,
        hideCentralPlay: true,
        hideSeekBar: true,
        hideBottomTiming: true,
        hideBottomFullscreen: true,
        hideCloseButton: true,
        hideSoundIcon: false,
        eachVideo: true
      },
      logErrors: {
          enabled: false
      },
      disableViewTracking: true,
      unmuteOnHover: true
    }
  });
  parent.paGlobal.data[${ui}].vidInDisp.vid = vid;
  </script></body></html>`;

                  break;
                }
              }
              break;
            case 'other':
              paGlobal.log.info('Compile document for other');
              currentDemand.headTag = paGlobal.replaceOtherMacros(currentDemand.headTag, {pli: parseInt(pli)});
              currentDemand.bodyTag = paGlobal.replaceOtherMacros(currentDemand.bodyTag, {pli: parseInt(pli)});
              result += '<script>' + paGlobal.getUspapiString() + paGlobal.getGdprString() + '</scr' + 'ipt>';
              result += '<script>var impTimeout = setTimeout(function(){imp();},' + currentDemand.timeout + ");var noImpression=new Event('noImpression');document.addEventListener('noImpression',function(){noImp();})</script>";
              result += currentDemand.headTag + '</head><body>' + currentDemand.bodyTag + '</body></html>';
              break;
            case 'google':
              paGlobal.log.info('Compile document for google');
              if (runGeoEdge) {
                result += `<script${window.flNonce ? ` nonce="${window.flNonce}"` : ''}>window.grumi={key: \'17d0317a-896b-4287-bbe3-927a34a6cfa3\'};</script><script src="//rumcdn.geoedge.be/17d0317a-896b-4287-bbe3-927a34a6cfa3/grumi-ip.js" async${window.flNonce ? ` nonce="${window.flNonce}"` : ''}></script>`;
              }
              var GAM_CODE = `/90814396${currentDemand.unitName.startsWith(',') ? '' : '/'}`;
              result += `<script${window.flNonce ? ` nonce="${window.flNonce}"` : ''}>${paGlobal.getUspapiString() + paGlobal.getGdprString()}</scr` + 'ipt>';
              result += `<script async='async' src='https://www.googletagservices.com/tag/js/gpt.js'></script><script${window.flNonce ? ` nonce="${window.flNonce}"` : ''}>var googletag = googletag || {};googletag.cmd = googletag.cmd || [];googletag.cmd.push(function() {googletag.defineSlot('${GAM_CODE}${currentDemand.unitName}', [${currentDemand.s}], 'inject-google-slot-id-${rn}').addService(googletag.pubads());googletag.pubads().enableSingleRequest();googletag.enableServices();});googletag.cmd.push(function(){googletag.pubads().addEventListener('slotRenderEnded',(info)=>parent.paGlobal.googleImp(${pli},${ci},${ui},info));});</script></head><body><div id='inject-google-slot-id-${rn}'><script${window.flNonce ? ` nonce="${window.flNonce}"` : ''}>googletag.cmd.push(function(){googletag.display('inject-google-slot-id-${rn}');});</script></div></body></html>`;
              break;
            case 'hb':
              paGlobal.log.info('Compile document for hb');
              result = await paGlobal.compileHBDoc(pli, ci, ui, {currentDemand, runGeoEdge, runAdLight})
              return res(result)
              break;
            case 'amazon':
              paGlobal.log.info('Compile document for amazon');
              result += `<script async='async' src='https://www.googletagservices.com/tag/js/gpt.js'></script><script${window.flNonce ? ` nonce="${window.flNonce}"` : ''}>var googletag=googletag||{};googletag.cmd=googletag.cmd||[];googletag.cmd.push(function(){googletag.defineSlot('/90814396/${currentDemand.unitName}',[[${currentDemand.s[1]},${currentDemand.s[0]}]],'inject-amazon-slot-id-1').addService(googletag.pubads());googletag.pubads().disableInitialLoad();googletag.pubads().enableSingleRequest();googletag.enableServices()});</script><script type='text/javascript'${window.flNonce ? ` nonce="${window.flNonce}"` : ''}>!function(a9,a,p,s,t,A,g){if(a[a9])return;function q(c,r){a[a9]._Q.push([c,r])}a[a9]={init:function(){q("i",arguments)},fetchBids:function(){q("f",arguments)},setDisplayBids:function(){},targetingKeys:function(){return[]},_Q:[]};A=p.createElement(s);A.async=!0;A.src=t;g=p.getElementsByTagName(s)[0];g.parentNode.insertBefore(A,g)}("apstag",window,document,"script","//c.amazon-adsystem.com/aax2/apstag.js");apstag.init({pubID:'79e40b05-e673-4b6c-85f9-79252a7f96a5',adServer:'googletag',bidTimeout:2e3});apstag.fetchBids({slots:[{slotID:'inject-amazon-slot-id-1',slotName:'/90814396/${currentDemand.unitName}',sizes:[${currentDemand.s[0]},${currentDemand.s[1]}]}]},function(bids){googletag.cmd.push(function(){apstag.setDisplayBids();googletag.pubads().refresh()})});googletag.cmd.push(function(){googletag.pubads().addEventListener('slotRenderEnded',(info)=>parent.paGlobal.googleImp(${pli},${ci},${ui},info));})</script></head><body><div id='inject-amazon-slot-id-1'><script${window.flNonce ? ` nonce="${window.flNonce}"` : ''}>googletag.cmd.push(function(){googletag.display('inject-amazon-slot-id-1')});</script></div></body></html>`;
              break;
          }
        }
        return res(result); 
      });
    },
    getDemandGeyValues: (d) => {
      if(!d || !d.keyValues) return []
      return d.keyValues.split(',').map(pair=>pair.split('=').map(x=>x.trim()))
    },
    replaceOtherMacros: (s, customMacros) => {
      customMacros = customMacros || {};
      return s
        .replace(/{{domain}}/g, document.domain)
        .replace(/{{cachebuster}}/g, Math.random().toString())
        .replace(/{{pli}}/g, (customMacros.pli || 0).toString());
    },
    getAuctionId: function () {
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = (Math.random() * 16) | 0,
          v = c == 'x' ? r : (r & 0x3) | 0x8;
        return v.toString(16);
      });
    },
    getHBIds: () => {
      const auctionId = paGlobal.getAuctionId();
      return {
        auctionId: auctionId,
        uniqId: auctionId.split('-')[1]
      };
    },
    hbData: {},
    calledHbData: [],
    hbDataWaitingCb: {},
    unitIdToAuctionId: {},
    auctionIdsToCall: [],
    placementsIdsToCall: [],
    replaceHBMacros: (parts, sizes, kvs, gpid, isArray = false) => {
      // possible error: global var?
      var result = (isArray ? [] : {});
      // possible error: global var?
      var ids = paGlobal.getHBIds();

      Object.entries(parts).forEach(([key, value]) => {
          if (Array.isArray(value) && typeof value[0] === 'object' && !Array.isArray(value[0])) {
              result[key] = value.map((p) => paGlobal.replaceHBMacros(p, sizes, kvs, gpid));
              return;
          }

          if (typeof value === 'object' && !Array.isArray(value)) {
              result[key] = paGlobal.replaceHBMacros(value, sizes, kvs, gpid);
              return;
          }

          if (typeof value !== 'string') {
              result[key] = value;
              return;
          }

          result[key] = value
              .replace(/\[\[AUCTION_ID\]\]/g, ids.auctionId)
              .replace(/\[\[UNIQ_ID\]\]/g, ids.uniqId)
              .replace(/\"\[\[UNIT_SIZES\]\]\"/g, '[[UNIT_SIZES]]')
              .replace(/\[\[UNIT_SIZES\]\]/g, JSON.stringify(sizes))
              .replace(/\[\[CUSTOM_TARGETINGS\]\]/g, JSON.stringify(kvs))
              .replace(/\[\[GPID\]\]/g, gpid || '');
          if (window.flNonce) result[key] = result[key].replace(/<script/g, `<script nonce="${window.flNonce}" `);
      });
      return result;
    },
    totalHBCalls: 0,
    hbIdsToCall: [],
    getHBData: (linkNumber, sizes, kvs, gpid, cb) => {
      if (paGlobal.hbData[linkNumber]) {
        // here - for 2.0 do the same thing as checkReqeustHB
        // or just put the checkRequestHB into a function that could be called from here
        // main point is that 2 units should be able to run together if it's in the same time

        cb(paGlobal.replaceHBMacros(paGlobal.hbData[linkNumber], sizes, kvs, gpid));
        if (paGlobal.pbjsWrapperV == '3.0') {
            // paGlobal.hb3.callWaitingHB3AuctionIds();
        }
        return;
    }
    if (paGlobal.calledHbData.includes(linkNumber)) {
        paGlobal.hbDataWaitingCb[linkNumber].push({ cb: cb, params: [sizes, kvs, gpid] });
        return;
    }
    paGlobal.calledHbData.push(linkNumber);
    paGlobal.hbDataWaitingCb[linkNumber] = [];
    paGlobal.hbDataWaitingCb[linkNumber].push({ cb: cb, params: [sizes, kvs, gpid] });

    if (paGlobal.pbjsWrapperV == '3.0') {
        paGlobal.hbIdsToCall.push(linkNumber);
        paGlobal.checkRequestHB();
        return;
    }

      fetch(`https://hb.brainlyads.com/json-parts/${linkNumber}/?ver=${paGlobal.pbjsWrapperV}&pageId=${paGlobal.pageId}&winbidder=${JSON.stringify(window.hb_win && window.hb_win[linkNumber]) || ''}`)
        .then(x => x.json())
        .then(res => {
            paGlobal.hbData[linkNumber] = res;
            paGlobal.hbDataWaitingCb[linkNumber].forEach(cb => cb.cb(paGlobal.replaceHBMacros(res, cb.params[0], cb.params[1], cb.params[2])));
        })
        .catch(e => {
            console.warn('failed to fetch hb (' + linkNumber + ')! ', e);
        });
    },
    getHbDataPbjsPath: function () {
      return `https://hb.brainlyads.com/${paGlobal.pbjsPath}`;
    },
    removePbjsUnit: (ui, cb) => {
      if (paGlobal.pbjsWrapperV == '3.0') {
        if (paGlobal.data[ui].currentAuctionId && window.pa_pbjs_fw && window.pa_pbjs_fw.wPbjs && window.pa_pbjs_fw.wPbjs.delete) {
          paGlobal.log.info(`calling HB delete for ui: ${ui}`);
          // window['pa_pbjs_fw3.0'].wPbjs.delete([paGlobal.data[ui].currentAuctionId], cb);
        }
      }
    },

    checkRequestHB: () => {
      if (!paGlobal.hbIdsToCall.length) return;
      // possible error: global var?
      window.unitsWaiting = Object.values(paGlobal.data).filter(x => x.waitForMeHB).length;
      if (!paGlobal.checkRequestHBFallbackRunning) {
        paGlobal.checkRequestHBFallbackRunning = true;
        paGlobal.checkRequestHBFallback = setTimeout(() => {
          paGlobal.checkRequestHBFallbackRunning = false;
          paGlobal.requestHB();
        }, 1000);
      }
      if (unitsWaiting) return;
      paGlobal.requestHB();
      // paGlobal.callWaitingHBAuctionIds();
    },
    requestHB: () => {
      const currentIdsToCall = [...paGlobal.hbIdsToCall];
      paGlobal.hbIdsToCall = [];
      if (!currentIdsToCall.length) return;
      fetch(`https://hb.brainlyads.com/json-parts/?unit_ids=${[...currentIdsToCall]}&ver=${paGlobal.pbjsWrapperV}&pageId=${paGlobal.pageId}`)
        .then(x => x.json())
        .then(res => {
          ((res && res.data) || []).forEach(data => {
            paGlobal.hbData[data.unitId] = data;
              paGlobal.hbDataWaitingCb[data.unitId].forEach(cb => cb.cb(paGlobal.replaceHBMacros(data, cb.params[0], cb.params[1], cb.params[2])));
          });
          // paGlobal.callWaitingHBAuctionIds();
        })
        .catch(e => {
          paGlobal.log.warn('failed to fetch hb (' + JSON.stringify(currentIdsToCall) + ') ' + e);
        });
    },
    callWaitingHBAuctionIds: () => {
      if (!paGlobal.placementsIdsToCall.length) return;
      const unitsWaiting = Object.values(paGlobal.data).filter(x => x.waitForMeHB).length;
      if (unitsWaiting) {
        if (paGlobal.callHBIdsTimeoutRunning) return;
        paGlobal.callHBIdsTimeoutRunning = true;
        setTimeout(() => {
          paGlobal.callHBIdsTimeoutRunning = false;
          // paGlobal.callWaitingHBAuctionIds();
        }, 150);
        return;
      }

      try {
        if (!paGlobal.pbjsLoaded) {
          paGlobal.log.warn('HB is ready to call before wPbjs (wrapper) loaded - adding loaded event');
          document.addEventListener('wPbjsLoaded', () => {
            paGlobal.callWaitingHBAuctionIds();
          });
          return;
        }
        paGlobal.log.info(`run auctions: ${paGlobal.placementsIdsToCall}`);
        setTimeout(() => window.pa_pbjs_fw.wPbjs.run(paGlobal.placementsIdsToCall), 1000);
        paGlobal.placementsIdsToCall = [];
      } catch (e) {
        console.error('failed the call to hb: ', e);
      }
    },
    callHBAuction: function (ui) {
        const id = paGlobal.data[ui].v3id;

        if (id) {
            paGlobal.log.info(`call auction pli ${paGlobal.data[ui].pli} ui ${ui} ${id}`);

            const someProps = paGlobal.data[ui].someProps;
            if (someProps) {
              window.pa_pbjs_fw.wPbjs.setSomeProperties(v3id, someProps);
            }
            window.pa_pbjs_fw.wPbjs.run([id]);
        }
    },

    getHBState: (pli, ui) => {
      try {
        const frameDoc = paGlobal.data[ui].frame.contentDocument;
        const deeperFrameWin = frameDoc && frameDoc.querySelector('iframe') && frameDoc.querySelector('iframe').contentWindow;
        paGlobal.log.info('state', deeperFrameWin?.eventBus?.state?.event);
        return (deeperFrameWin && deeperFrameWin.eventBus && deeperFrameWin.eventBus.state && deeperFrameWin.eventBus.state.event) || 'Unknown';
      } catch (e) {
        paGlobal.log.warn('failed to get hb state: ' + e);
        return 'Unknown';
      }
    },
    vidInDisp: function (pli, ci, ui) {
      if (paGlobal.data[ui].vidInDisp.called) {
        return !1;
      }
      paGlobal.data[ui].vidInDisp.called = !0;
      if (!paGlobal.pls[pli].vidInDisp || !paGlobal.pls[pli].vidInDisp.dispTimes || !paGlobal.pls[pli].vidInDisp.dispTimes || !paGlobal.pls[pli].vidInDisp.tags) {
        return !1;
      }
      var firstOne = 'dispTimes';
      var secondOne = 'vidTimes';
      if (paGlobal.pls[pli].vidInDisp.sp == 'video') {
        firstOne = 'vidTimes';
        secondOne = 'dispTimes';
      }
      var returner = {dispTimes: !1, vidTimes: !0};
      if (paGlobal.data[ui].vidInDisp.count < paGlobal.pls[pli].vidInDisp[firstOne]) {
        paGlobal.data[ui].vidInDisp.count++;
        return returner[firstOne];
      } else {
        paGlobal.data[ui].vidInDisp.count++;
        if (paGlobal.data[ui].vidInDisp.count >= paGlobal.pls[pli].vidInDisp[firstOne] + paGlobal.pls[pli].vidInDisp[secondOne]) {
          paGlobal.data[ui].vidInDisp.count = 0;
        }
        return returner[secondOne];
      }
    },
    vidInDispVidComplete: function (pli, ci, ui, vidErrored) {
      if (vidErrored) {
        paGlobal.data[ui].refCount++;
        if (paGlobal.data[ui].demandStallTimeout) {
          paGlobal.log.info(`vidInDispVidComplete: clear demand stall timeout ui=${ui}`);
          clearTimeout(paGlobal.data[ui].demandStallTimeout);
        }
      }
      if (paGlobal.pls[pli].vidInDisp.sp == 'display') {
        paGlobal.data[ui].vidInDisp.count = 0;
      } else if (paGlobal.data[ui].vidInDisp.count < paGlobal.pls[pli].vidInDisp.vidTimes) {
        paGlobal.data[ui].vidInDisp.count = paGlobal.pls[pli].vidInDisp.vidTimes;
      }
      paGlobal.data[ui].refresh.running = true;
      paGlobal.refresh.finished(pli, ci, ui);
    },
    writeDoc: (pli, ci, ui) => {
      paGlobal.log.info(`Write document for unit ${ui} (pl ${pli})`);

      paGlobal.data[ui].waitForMeHB = false;
      paGlobal.data[ui].vidInDisp.onVid = !1;
      var writeNow = !0;
      let cDemand;
      if (!paGlobal.data[ui].demand.cad && paGlobal.vidInDisp(pli, ci, ui)) {
        if (!window.paVid) {
          writeNow = !1;
        }
        paGlobal.data[ui].vidInDisp.onVid = !0;
        var maxWidth = Math.min((paGlobal.data[ui].demand.cs && paGlobal.toIntConv(paGlobal.data[ui].demand.cs[0])) || paGlobal.pls[pli].st.s[0]) || paGlobal.data[ui].div.offsetWidth;
        var maxHeight = paGlobal.data[ui].div.offsetHeight || (paGlobal.data[ui].demand.cs && paGlobal.toIntConv(paGlobal.data[ui].demand.cs[1])) || paGlobal.pls[pli].st.s[1];
        var width = Math.min(maxWidth, maxHeight / 0.5625);
        var height = Math.min(maxHeight, width * 0.5625);
        width = Math.min(width, height / 0.5625);
        if (paGlobal.pls[pli].vidInDisp.minH) {
          height = paGlobal.pls[pli].vidInDisp.minH;
          width = height / 0.5625;
        }
        let demand = {s: [width, height], name: 'video-in-display', partner: 'video-in-display'};
        paGlobal.data[ui].demand.cb = 'video-in-display';
        paGlobal.data[ui].vidInDisp.s = demand.s;
        cDemand = demand;
      } else {
        let demand = paGlobal.getCurrentDemand(pli, ui);
        if (demand) {
          paGlobal.data[ui].demand.s = demand.s || paGlobal.pls[pli].st.s;
          if (paGlobal.data[ui].demand.s[0] == 'string') {
            paGlobal.data[ui].demand.s[0] = paGlobal.toIntConv(paGlobal.data[ui].demand.s[0]) || paGlobal.pls[pli].st.s[0];
            paGlobal.data[ui].demand.s[1] = paGlobal.toIntConv(paGlobal.data[ui].demand.s[1]) || paGlobal.pls[pli].st.s[1];
          }
          paGlobal.data[ui].demand.cb = demand.name || demand.partner || 'Direct';
          cDemand = demand;
        } else {
          if (!window.paVid) {
            writeNow = !1;
          }
        }
      }
      if (!paGlobal.aau && cDemand.acceptableAds) {
        paGlobal.log.info('unit ' + ui + ' (pl ' + pli + ') skipping demand ' + (paGlobal.data[ui].demand.tn + 1) + ' (' + paGlobal.data[ui].demand.cb + ") as it's marked for Acceptable Ads user'");
        paGlobal.scheduledCallsToWriteDoc--;
        return paGlobal.impListener(pli, ci, ui, !1);
      }
      if (paGlobal.aau && !paGlobal.pls[pli].aa && !cDemand.acceptableAds) {
        paGlobal.log.info('unit ' + ui + ' (pl ' + pli + ') skipping demand ' + (paGlobal.data[ui].demand.tn + 1) + ' (' + paGlobal.data[ui].demand.cb + ") as it's not marked for Acceptable Ads user'");
        paGlobal.scheduledCallsToWriteDoc--;
        return paGlobal.impListener(pli, ci, ui, !1);
      }
      if (cDemand.partner !== 'hb') {
        paGlobal.checkRequestHB();
      }
      if (!paGlobal.checkFitable(pli, ci, ui)) {
        paGlobal.log.info('unit ' + ui + ' (pl ' + pli + ') skipping demand ' + (paGlobal.data[ui].demand.tn + 1) + ' (' + paGlobal.data[ui].demand.cb + ") as it doesn't fit (percent view)");
        paGlobal.scheduledCallsToWriteDoc--;
        return paGlobal.impListener(pli, ci, ui, !1);
      }
      // here - implement skip on refresh with the new way
      // if (paGlobal.data[ui].demand.skipIndex[paGlobal.data[ui].demand.tn]) {
      if (paGlobal.data[ui].demand.skipIndex[paGlobal.data[ui].demand.dgIndex][paGlobal.data[ui].demand.tagIndex]) {
        paGlobal.log.info('unit ' + ui + ' (pl ' + pli + ') skipping demand ' + (paGlobal.data[ui].demand.tn + 1) + ' (' + paGlobal.data[ui].demand.cb + ') as skip on refresh is active');
        return paGlobal.impListener(pli, ci, ui, !1);
      }

      paGlobal.log.info(`unit ${ui} (pl ${pli}) [frame exists = ${paGlobal.data[ui].documentExists}]`);
      paGlobal.log.info(`unit ${ui} (pl ${pli}) [frame demand cb = ${paGlobal.data[ui].documentDemand}]`);
      paGlobal.log.info(`unit ${ui} (pl ${pli}) [current demand cb = ${paGlobal.data[ui].demand.cb}]`);

      const isHB = cDemand?.partner === 'hb';
      const isDirectInject = paGlobal.plData[pli].directInject;
      const tagChanged = paGlobal.data[ui].documentDemand !== paGlobal.data[ui].demand.cb;
      const hbIdChanged = paGlobal.data[ui].documentDemand === 'hb' && paGlobal.data[ui].demand.cb === 'hb' && paGlobal.data[ui].documentHBId !== cDemand?.linkNumber;

      if (!isHB || (paGlobal.data[ui].documentDemand && (tagChanged || hbIdChanged))) {
        paGlobal.log.info(`Replace frame unit ${ui} (pl ${pli})`);
        if (paGlobal.data[ui].oldFrame) {
          paGlobal.log.warn(`Old frame stalled from impListener ${ui} (pl ${pli})`);
          paGlobal.data[ui].oldFrame.remove();
          delete paGlobal.data[ui].oldFrame;
        }
        paGlobal.data[ui].oldFrame = paGlobal.data[ui].frame;
        paGlobal.data[ui].frame = paGlobal.data[ui].oldFrame.cloneNode();
        paGlobal.data[ui].oldFrame.classList.add('old');
        paGlobal.data[ui].oldFrame.classList.remove('new');
        paGlobal.data[ui].frame.classList.add('new');
        paGlobal.data[ui].frame.style.display = 'none';
        // paGlobal.data[ui].frame.remove();
        // paGlobal.data[ui].frame = paGlobal.data[ui].newFrame;
        // paGlobal.data[ui].newFrame = null;
        paGlobal.data[ui].div.appendChild(paGlobal.data[ui].frame);
        paGlobal.data[ui].documentExists = false;

        if (paGlobal.data[ui].documentDemand === 'hb' && paGlobal.data[ui].v3id) {
          window['pa_pbjs_fw3.0'].wPbjs.delete([paGlobal.data[ui].v3id]);
          delete paGlobal.data[ui].v3id;
        }
      }

      var frameDoc = paGlobal.data[ui].frame.contentDocument;
      paGlobal.log.info('unit ' + ui + ' (pl ' + pli + ') calling: ' + paGlobal.data[ui].demand.cb + ' (' + (paGlobal.data[ui].demand.tn + 1) + ')');
      paGlobal.data[ui].listenFired = !1;
      if (paGlobal.data[ui].fallbackTimeout) {
        paGlobal.log.info(`writeDoc: clear fallback timeout ui=${ui}`);
        clearTimeout(paGlobal.data[ui].fallbackTimeout);
      }
      paGlobal.log.info(`writeDoc: set fallback timeout ui=${ui}`);
      paGlobal.data[ui].fallbackTimeout = setTimeout(() => {
        paGlobal.log.warn('Fallback timeout expired for unit ' + ui + ' (pl ' + pli + ')');
        paGlobal.impListener(pli, ci, ui, !1, true);
        paGlobal.reporting.x({type: 'wFail', pl: parseInt(pli), partnerName: cDemand.name || cDemand.partner, refreshCount: paGlobal.data[ui].refCount, linkNumber: cDemand.linkNumber, hbTagName: cDemand.hbTagName, unitName: cDemand.unitName, timeDif: Date.now()});
      }, 2500);
      if (paGlobal.data[ui].demandStallTimeout) {
        paGlobal.log.info(`writeDoc: clear demand stall timeout ui=${ui}`);
        clearTimeout(paGlobal.data[ui].demandStallTimeout);
      }
      paGlobal.log.info(`writeDoc: set demand stall timeout ui=${ui}`);
      paGlobal.data[ui].demandStallTimeout = setTimeout(() => {
        const state = paGlobal.getHBState(pli, ui);
        paGlobal.log.warn('Demand stall timeout expired for unit: ' + ui + '(pl ' + pli + '), state: ' + state);
        paGlobal.reporting.x({type: 'dTimeout', pl: parseInt(pli), partnerName: cDemand.name || cDemand.partner, refreshCount: paGlobal.data[ui].refCount, linkNumber: cDemand.linkNumber, hbTagName: cDemand.hbTagName, unitName: cDemand.unitName, hb_state: state, timeDif: Date.now(), speed: (navigator.connection && navigator.connection.downlink) || '-1'});
        // paGlobal.impListener(pli, ci, ui, !1)
      }, 30000);
      async function writeCb() {
        if (cDemand.partner == 'hb' && !paGlobal.pbjsLoaded) {
          // what happens if pls callback fires before hb callback
          function listener() {
            writeCb();
            document.removeEventListener('wPbjsLoaded', listener);
          }
          document.addEventListener('wPbjsLoaded', listener);
          return;
        }
        if (paGlobal.data[ui].documentExists) {
          return;
        }
        frameDoc.open();
        const doc = await paGlobal.compileDoc(pli, ci, ui)
        paGlobal.log.info(`create frame ${pli}, ${ci}, ${ui}`);
        try {
          doc && frameDoc.write(doc);
          frameDoc.close();
          paGlobal.data[ui].documentExists = true;
          paGlobal.data[ui].documentDemand = paGlobal.data[ui].demand.cb;
          paGlobal.data[ui].documentHBId = paGlobal.getCurrentDemand(pli, ui)?.linkNumber;
        } catch (e) {
          if (paGlobal.debug) {
            console.warn('Cannot create frame due to errors in markup/scripts');
            console.log('Error:');
            console.error(e);
            console.log('HTML document:');
            console.log(doc);
          }
          throw e;
        }
      }
      if (writeNow) {
        writeCb();
      } else {
        const player = paGlobal.pls[pli].vidInDisp.player;
        if ((player === 'pavid' && !window.paVid) || (player === 'power-player' && !window.PowerPlayer)) {
          paGlobal.log.info(`writeDoc: [paVid] clear fallback timeout ui=${ui}`);
          clearTimeout(paGlobal.data[ui].fallbackTimeout);
          const vidScript = document.createElement('script');

          switch (player) {
            case 'pavid': {
              vidScript.src = 'https://powerad.ai/vid_script.js';
              break;
            }
            case 'power-player': {
              vidScript.src = 'https://cdn.nextmillmedia.com/power-player/latest/power-player.js';
              break;
            }
          }

          document.head.appendChild(vidScript);
          vidScript.addEventListener('load', () => {
            if (!window.getPaVid) {
              window.getPaVid = () => window.paVid;
            }
            writeCb();
          });
        } else {
          writeCb();
        }
      }
    },
    getHeight: (height, pli) => {
      if (paGlobal.pls[pli].vao.adh.on && paGlobal.pls[pli].t !== 'multiInsert') {
        return height + 25;
      } else {
        return height;
      }
    },
    smallerBox: function (pli, ci, ui, frame) {
      let height = paGlobal.pls[pli].mp.cp.sbp.h;
      if (paGlobal.pls[pli].vao.adh.on) height += 25;
      paGlobal.cData[ci].div.style.height = height + 'px';
      paGlobal.data[ui].div.style.height = paGlobal.pls[pli].mp.cp.sbp.h + 'px';
      paGlobal.data[ui].div.style.width = paGlobal.data[ui].demand.s[0] + 'px';
      paGlobal.data[ui].frame.style.height = paGlobal.data[ui].demand.s[1] + 'px';
      paGlobal.data[ui].frame.style.cssText += 'max-height: 100vh !important';
      if (paGlobal.pls[pli].mp.cp.sbp.sft) {
        paGlobal.cData[ci].div.style.cssText += 'overflow-y: hidden !important';
        paGlobal.data[ui].div.style.cssText += 'overflow-y: hidden !important';
        var totalScroll = paGlobal.toIntConv(paGlobal.data[ui].demand.s[1]) - paGlobal.pls[pli].mp.cp.sbp.h;
        paGlobal.data[ui].smallerBoxChange = function () {
          var maxTop = paGlobal.screenDimensions.h - paGlobal.pls[pli].mp.cp.sbp.h - paGlobal.pls[pli].mp.cp.sbp.osb;
          var osTop = paGlobal.data[ui].div.getBoundingClientRect().top;
          if (osTop < 0 && osTop >= -paGlobal.pls[pli].mp.cp.sbp.h) {
            paGlobal.data[ui].frame.style.transform = 'translateY(-' + totalScroll + 'px)';
          }
          if (osTop >= 0 && osTop <= maxTop) {
            var transY = totalScroll - paGlobal.percentToPx(totalScroll, (osTop / maxTop) * 100);
            paGlobal.data[ui].frame.style.transform = 'translateY(-' + transY + 'px)';
          }
        };
        paGlobal.data[ui].smallerBoxChange();
        document.addEventListener('scroll', paGlobal.data[ui].smallerBoxChange, {passive: !0});
      } else {
        paGlobal.data[ui].div.style.cssText += 'position: absolute !important';
        let top = 0;
        if (paGlobal.pls[pli].vao.adh.on) top = 25;
        paGlobal.data[ui].div.style.top = top + 'px';
        paGlobal.data[ui].div.style.left = '0';
        paGlobal.data[ui].div.style.right = '0';
        paGlobal.data[ui].div.style.clip = 'rect(0px, ' + paGlobal.data[ui].demand.s[0] + 'px, ' + paGlobal.pls[pli].mp.cp.sbp.h + 'px, 0px)';
        paGlobal.data[ui].div.style.cssText += '-webkit-clip-path: polygon(0px 0px, 100% 0px, 100% ' + paGlobal.pls[pli].mp.cp.sbp.h + 'px, 0px ' + paGlobal.pls[pli].mp.cp.sbp.h + 'px)';
        paGlobal.data[ui].div.style.clipPath = 'polygon(0px 0px, 100% 0px, 100% ' + paGlobal.pls[pli].mp.cp.sbp.h + 'px, 0px ' + paGlobal.pls[pli].mp.cp.sbp.h + 'px)';
        paGlobal.data[ui].frame.style.position = 'fixed';
        paGlobal.data[ui].frame.style.top = paGlobal.screenDimensions.h / 2 - paGlobal.toIntConv(paGlobal.data[ui].demand.s[1]) / 2 + 'px';
        if (!paGlobal.pls[pli].mp.cp.sbp.sft && paGlobal.pls[pli].mp.cp.sbp.soa == 'stick') {
          paGlobal.data[ui].smallerBoxChange = function () {
            if (paGlobal.pls[pli].mp.cp.sbp.aos && paGlobal.pls[pli].mp.cp.sbp.aos > paGlobal.toIntConv(paGlobal.data[ui].demand.cs[1])) return paGlobal.cleanSmallerBox(pli, ci, ui);
            var maxToTop = paGlobal.screenDimensions.h / 2 - paGlobal.toIntConv(paGlobal.data[ui].demand.s[1]) / 2;
            var maxFromTop = maxToTop + paGlobal.toIntConv(paGlobal.data[ui].demand.s[1]) - paGlobal.pls[pli].mp.cp.sbp.h;
            if (paGlobal.selectRect(paGlobal.data[ui].div).top <= maxToTop) {
              paGlobal.data[ui].frame.style.position = 'absolute';
              paGlobal.data[ui].frame.style.top = '0';
            } else if (paGlobal.selectRect(paGlobal.data[ui].div).top >= maxFromTop) {
              paGlobal.data[ui].frame.style.position = 'absolute';
              paGlobal.data[ui].frame.style.top = paGlobal.pls[pli].mp.cp.sbp.h - paGlobal.toIntConv(paGlobal.data[ui].demand.s[1]) + 'px';
              paGlobal.data[ui].frame.style.bottom = '0';
            } else {
              paGlobal.data[ui].frame.style.position = 'fixed';
              paGlobal.data[ui].frame.style.top = paGlobal.screenDimensions.h / 2 - paGlobal.toIntConv(paGlobal.data[ui].demand.s[1]) / 2 + 'px';
            }
          };
          document.addEventListener('scroll', paGlobal.data[ui].smallerBoxChange, {passive: !0});
        }
      }
    },
    cleanSmallerBox: function (pli, ci, ui) {
      if (paGlobal.data[ui].smallerBoxChange) {
        document.removeEventListener('scroll', paGlobal.data[ui].smallerBoxChange);
      }
      paGlobal.cData[ci].div.style.removeProperty('height');
      paGlobal.data[ui].div.style.removeProperty('width');
      paGlobal.data[ui].div.style.removeProperty('top');
      paGlobal.data[ui].div.style.removeProperty('right');
      paGlobal.data[ui].div.style.removeProperty('left');
      paGlobal.data[ui].div.style.removeProperty('clip');
      paGlobal.data[ui].div.style.removeProperty('clip-path');
      paGlobal.data[ui].div.style.position = 'relative';

      paGlobal.data[ui].frame.style.removeProperty('top');
      paGlobal.data[ui].frame.style.removeProperty('right');
      paGlobal.data[ui].frame.style.removeProperty('left');
      paGlobal.data[ui].frame.style.removeProperty('clip');
      paGlobal.data[ui].frame.style.removeProperty('clip-path');
      paGlobal.data[ui].frame.style.position = 'relative';

      if (paGlobal.data[ui].op) {
        paGlobal.data[ui].div.removeEventListener('mouseover', paGlobal.data[ui].op.of);
        paGlobal.cData[ci].div.removeEventListener('mouseleave', paGlobal.data[ui].op.op);
      }
    },
    foldingAd: function (pli, ui) {
      const closeFoldBottom = paGlobal.pls[pli].mp.cp.foldParams.closeFoldBottom || 0;
      const activeHeight = paGlobal.screenDimensions.h - closeFoldBottom;
      const fullyOpenAtTop = paGlobal.percentToPx(paGlobal.screenDimensions.h, paGlobal.pls[pli].mp.cp.foldParams.openFoldTop);
      const fullyOpenAtBottom = paGlobal.percentToPx(paGlobal.screenDimensions.h, paGlobal.pls[pli].mp.cp.foldParams.openFoldBottom);
      const fSegH = paGlobal.pls[pli].mp.cp.foldParams.fSegHeight >= 0 ? paGlobal.pls[pli].mp.cp.foldParams.fSegHeight : 50;
      paGlobal.data[ui].foldingWrap = paGlobal.data[ui].frame.contentDocument.querySelector('div.folding-unit-wrap');
      paGlobal.data[ui].foldingSegmantWraps = paGlobal.data[ui].frame.contentDocument.querySelectorAll('div.folding-segment-wrap');
      paGlobal.data[ui].imgSegmantWraps = paGlobal.data[ui].frame.contentDocument.querySelectorAll('div.img-segment-wrap');
      paGlobal.data[ui].adjustFold = function () {
        const top = paGlobal.data[ui].div.getBoundingClientRect().top;
        const outOfView = top <= 0 || top > activeHeight - fSegH;
        const topOfView = top > 0 && top < fullyOpenAtTop;
        const inView = top > fullyOpenAtTop && top < paGlobal.screenDimensions.h - fullyOpenAtBottom - fSegH;
        const bottomOfView = top > paGlobal.screenDimensions.h - fullyOpenAtBottom - fSegH && top < activeHeight - fSegH;
        if (outOfView) {
          if (paGlobal.data[ui].fullyClosed) return;
          paGlobal.data[ui].fodingAnimArr.forEach(a => {
            a.currentTime = 99;
          });
          paGlobal.data[ui].fodingAnimArr2.forEach(a => {
            a.currentTime = 99;
          });
          paGlobal.data[ui].div.style.height = fSegH + 'px';
          paGlobal.data[ui].foldingWrap.classList.remove('fully-open');
          paGlobal.data[ui].fullyOpen = false;
          paGlobal.data[ui].fullyClosed = true;
        }
        if (topOfView) {
          const animationStage = 100 - top / (fullyOpenAtTop / 100);
          paGlobal.data[ui].fodingAnimArr.forEach(a => {
            a.currentTime = animationStage;
          });
          paGlobal.data[ui].fodingAnimArr2.forEach(a => {
            a.currentTime = animationStage;
          });
          paGlobal.data[ui].div.style.height = paGlobal.data[ui].foldingWrap.getBoundingClientRect().height + 20 + 'px';
          paGlobal.data[ui].foldingWrap.classList.remove('fully-open');
          paGlobal.data[ui].fullyOpen = false;
          paGlobal.data[ui].fullyClosed = false;
        }
        if (inView) {
          if (paGlobal.data[ui].fullyOpen) return;
          paGlobal.data[ui].fodingAnimArr.forEach(a => {
            a.currentTime = 0;
          });
          paGlobal.data[ui].fodingAnimArr2.forEach(a => {
            a.currentTime = 0;
          });
          paGlobal.data[ui].div.style.height = paGlobal.data[ui].demand.cs[1] + 'px';
          paGlobal.data[ui].foldingWrap.classList.add('fully-open');
          paGlobal.data[ui].fullyOpen = true;
          paGlobal.data[ui].fullyClosed = false;
        }
        if (bottomOfView) {
          const animationStage = 100 - (activeHeight - top - fSegH) / ((fullyOpenAtBottom - closeFoldBottom) / 100);
          paGlobal.data[ui].fodingAnimArr.forEach(a => {
            a.currentTime = animationStage;
          });
          paGlobal.data[ui].fodingAnimArr2.forEach(a => {
            a.currentTime = animationStage;
          });
          paGlobal.data[ui].div.style.height = paGlobal.data[ui].foldingWrap.getBoundingClientRect().height + 20 + 'px';
          paGlobal.data[ui].foldingWrap.classList.remove('fully-open');
          paGlobal.data[ui].fullyOpen = false;
          paGlobal.data[ui].fullyClosed = false;
        }
        if (paGlobal.pls[pli].st.scale) paGlobal.cData[paGlobal.data[ui].ci].div.style.height = paGlobal.data[ui].div.getBoundingClientRect().height + 'px';
      };
      const animOptions = {
        duration: 100,
        iterations: Infinity
      };
      paGlobal.data[ui].fodingAnimArr = [];
      paGlobal.data[ui].imgSegmantWraps.forEach((e, i) => {
        if (i === 0) {
          const fSegH = paGlobal.pls[pli].mp.cp.foldParams.fSegHeight >= 0 ? paGlobal.pls[pli].mp.cp.foldParams.fSegHeight : 50;
          paGlobal.data[ui].fodingAnimArr[i] = e.animate([{marginBottom: 0}, {marginBottom: `-${25}px`}], animOptions);
        } else {
          paGlobal.data[ui].fodingAnimArr[i] = e.animate(
            [
            {transform: 'rotateX(0deg)', backgroundPosition: (i / 2) % 1 === 0 ? '0 100%' : '0 0%'},
            {transform: (i / 2) % 1 === 0 ? 'rotateX(90deg)' : 'rotateX(-90deg)', backgroundPosition: (i / 2) % 1 === 0 ? '0 0%' : '0 100%'}
          ],
          animOptions
        );
        }
        paGlobal.data[ui].fodingAnimArr[i].pause();
      });
      paGlobal.data[ui].fodingAnimArr2 = [];
      paGlobal.data[ui].foldingSegmantWraps.forEach((e, i) => {
        if (i === 0) return;
        {
          paGlobal.data[ui].fodingAnimArr2[i] = e.animate(
            [
            {height: '50px', transform: 'scaleX(1)', marginBottom: '0px'},
            {height: '22px', transform: 'scaleX(.965)', marginBottom: '12px'},
            {height: '0px', transform: 'scaleX(0.97)', marginBottom: '0px'}
          ],
          animOptions
        );
        }
        paGlobal.data[ui].fodingAnimArr2[i].pause();
      });
      paGlobal.listen.observer(paGlobal.data[ui].div, undefined, e => {
        if (e.isIntersecting) {
          document.addEventListener('scroll', paGlobal.data[ui].adjustFold, {passive: true});
        } else {
          document.removeEventListener('scroll', paGlobal.data[ui].adjustFold);
        }
      });
      paGlobal.data[ui].adjustFold();
    },
    flipEffect(pli, ci, ui) {
      paGlobal.cData[ci].div.style.perspective = '1000px';
      paGlobal.data[ui].div.style.transition = 'all 0.1s';
      paGlobal.cData[ci].observer = new IntersectionObserver(
        (ent, obs) => {
        ent.forEach(e => {
          if (e.boundingClientRect.y < 300) {
            paGlobal.data[ui].div.style.transformOrigin = 'bottom';
            paGlobal.data[ui].div.style.transform = `rotateX(${93 - e.intersectionRatio * 100 * 0.93}deg)`;
            paGlobal.data[ui].div.style.filter = `drop-shadow(${10 - e.intersectionRatio * 10}px ${100 - e.intersectionRatio * 100}px ${26 - e.intersectionRatio * 26}px #00000075)`;
          } else {
            paGlobal.data[ui].div.style.transformOrigin = 'top';
            paGlobal.data[ui].div.style.transform = `rotateX(${-83 + e.intersectionRatio * 100 * 0.83}deg)`;
            paGlobal.data[ui].div.style.filter = `drop-shadow(-${10 - e.intersectionRatio * 10}px ${100 - e.intersectionRatio * 100}px ${26 - e.intersectionRatio * 26}px #00000075)`;
          }
        });
      }, 
      {rootMargin: '-50px 0px', threshold: [0, 0.5, 0.1, 0.15, 0.2, 0.25, 0.3, 0.35, 0.4, 0.45, 0.5, 0.55, 0.6, 0.65, 0.7, 0.75, 0.8, 0.85, 0.9, 0.95, 1.0]}
    );
      paGlobal.cData[ci].observer.observe(paGlobal.cData[ci].div);
    },
    percentToPx(dimension, percent) {
      return (percent / 100) * dimension;
    },
    refresh: {
      start: (pli, ci, ui, time) => {
        if (paGlobal.data[ui].vidInDisp.onVid) {
          return;
        }
        if (paGlobal.data[ui].refresh.finished) {
          return;
        }
        if (!time || time < 5000) {
          time = 5000;
        }
        if (paGlobal.pls[pli].to.mr && paGlobal.data[ui].refCount >= paGlobal.pls[pli].to.mr) {
          paGlobal.log.info('unit ' + ui + ' (pl ' + pli + ') max refresh reached');
          return;
        }
        paGlobal.data[ui].refresh.timer = setTimeout(function () {
          paGlobal.refresh.finished(pli, ci, ui);
        }, time);
        paGlobal.log.info('unit ' + ui + ' (pl ' + pli + ') refresh started for ' + time / 1000 + ' seconds');
        paGlobal.data[ui].refresh.startTs = Date.now();
        paGlobal.data[ui].refresh.started = !0;
        paGlobal.data[ui].refresh.running = !0;
        paGlobal.data[ui].refresh.ran = 0;
        paGlobal.data[ui].refresh.currentRunningTime = time;
        paGlobal.data[ui].div.onmouseenter = function () {
          if (paGlobal.pls[pli].vp.rtnv) {
            paGlobal.data[ui].currentlyHovered = true;
          }
          paGlobal.refresh.pause(pli, ci, ui, time);
        };
        paGlobal.data[ui].div.onmouseleave = function () {
          paGlobal.refresh.resume(pli, ci, ui, time);
          if (paGlobal.pls[pli].vp.rtnv) {
            paGlobal.data[ui].currentlyHovered = false;
            if (paGlobal.data[ui].waitingForMouseLeave) {
              paGlobal.data[ui].waitingForMouseLeave = false;
              paGlobal.refresh.finished(pli, ci, ui);
            }
          }
        };
        if (paGlobal.pls[pli].vp.rtnv) {
          paGlobal.data[ui].inViewCount = 0;
          paGlobal.data[ui].inViewTS = Date.now();
        }
        if (!paGlobal.data[ui].viewability) {
          paGlobal.refresh.pause(pli, ci, ui);
        }
      },
      pause: (pli, ci, ui, time) => {
        if (paGlobal.data[ui].vidInDisp.onVid) {
          return;
        }
        if (!paGlobal.data[ui].refresh.running) {
          return;
        }
        if (paGlobal.pls[pli]?.vp?.rtnv && !paGlobal.data[ui].finishedNoView) {
          if (paGlobal.pls[pli].vp.miv) {
            paGlobal.data[ui].inViewCount += Date.now() - paGlobal.data[ui].inViewTS;
          }
          return;
        }
        paGlobal.data[ui].refresh.running = !1;
        var ran = Date.now() - paGlobal.data[ui].refresh.startTs;
        paGlobal.data[ui].refresh.ran += ran;
        clearTimeout(paGlobal.data[ui].refresh.timer);
        paGlobal.log.info('unit ' + ui + ' (pl ' + pli + ') paused refresh');
      },
      resume: (pli, ci, ui, time) => {
        if (paGlobal.data[ui].vidInDisp.onVid) {
          return;
        }
        if (paGlobal.data[ui].refresh.finished || paGlobal.data[ui].refresh.running) {
          return;
        }
        var leftToRun = time - paGlobal.data[ui].refresh.ran;
        paGlobal.data[ui].refresh.startTs = Date.now();
        paGlobal.data[ui].refresh.timer = setTimeout(function () {
          paGlobal.refresh.finished(pli, ci, ui);
        }, leftToRun);
        paGlobal.data[ui].refresh.running = !0;
        if (paGlobal.pls[pli].vp.rtnv) {
          paGlobal.data[ui].inViewTS = Date.now();
          return;
        }
        paGlobal.log.info('unit ' + ui + ' (pl ' + pli + ') resumed refresh');
      },
      stop: (pli, ci, ui, time) => {
        paGlobal.log.info('unit ' + ui + ' (pl ' + pli + ') stopped refresh');
        clearTimeout(paGlobal.data[ui].refresh.timer);
        paGlobal.data[ui].refresh = { started: !0, running: !1, finished: !0 };
      },
      finished: (pli, ci, ui) => {
        paGlobal.log.info('unit ' + ui + ' (pl ' + pli + ') refresh finished');
        clearTimeout(paGlobal.data[ui].refresh.timer);
        if (!paGlobal.data[ui].refresh.running) {
          paGlobal.log.info('refresh is not running');
          return;
        }
        if (paGlobal.data[ui].closed) {
          paGlobal.log.info('unit is closed');
          return;
        }
        if (paGlobal.data[ui].refresh.finished) {
          paGlobal.log.info('refresh is finished');
          return;
        }
        if (!paGlobal.data[ui].viewability || Object.values(paGlobal.data[ui].showable).includes(false) || document.visibilityState === 'hidden') {
          if (paGlobal.pls[pli].vp.rtnv) {
            paGlobal.data[ui].finishedNoView = true;
          }
          paGlobal.log.info('unit ' + ui + ' (pl ' + pli + ') refresh is on pause');
          paGlobal.refresh.pause(pli, ci, ui);
          return;
        }
        if (paGlobal.pls[pli].vp.rtnv) {
          paGlobal.data[ui].finishedNoView = false;
          if (paGlobal.data[ui].currentlyHovered) {
            paGlobal.data[ui].waitingForMouseLeave = true;
            paGlobal.log.info(`unit ${ui} (pl ${pli}) refresh finished while hovered, will refresh on mouseleave`);
            return;
          }
        }
        if (paGlobal.pls[pli].vp.rtnv && paGlobal.pls[pli].vp.miv && !paGlobal.data[ui].eosnf) {
          paGlobal.data[ui].inViewCount += Date.now() - paGlobal.data[ui].inViewTS;
          if (paGlobal.data[ui].inViewCount < paGlobal.pls[pli].vp.miv * 1000) {
            paGlobal.data[ui].refresh.running = false;
            paGlobal.data[ui].refresh.ran = paGlobal.data[ui].inViewCount;
            paGlobal.log.info(`unit ${ui} (pl ${pli}) refresh finished before minimum in-view, will delay refresh for ${paGlobal.pls[pli].vp.miv - paGlobal.data[ui].inViewCount / 1000} seconds`);
            paGlobal.refresh.resume(pli, ci, ui, paGlobal.pls[pli].vp.miv * 1000);
            return;
          }
        }
        paGlobal.data[ui].demand.tn = 0;
        try {
          // delete paGlobal.data[ui].frame;
        } catch (e) {}
        paGlobal.data[ui].vidInDisp.called = !1;
        paGlobal.addFrame(pli, ci, ui);
        paGlobal.data[ui].refresh = {started: !1, running: !1};
      }
    },
    honPls: [],
    plUnits: [],
    checkMinMaxView: (pli, ci, ui) => {
      if ((paGlobal.pls[pli].vp.sd.mn.w && paGlobal.screenDimensions.w < paGlobal.pls[pli].vp.sd.mn.w) || (paGlobal.pls[pli].vp.sd.mn.h && paGlobal.screenDimensions.h < paGlobal.pls[pli].vp.sd.mn.h) || (paGlobal.pls[pli].vp.sd.mx.w && paGlobal.screenDimensions.w > paGlobal.toIntConv(paGlobal.pls[pli].vp.sd.mx.w)) || (paGlobal.pls[pli].vp.sd.mx.h && paGlobal.screenDimensions.h > paGlobal.toIntConv(paGlobal.pls[pli].vp.sd.mx.h))) {
        return !1;
      } else {
        return !0;
      }
    },
    checkFitable: function (pli, ci, ui) {
      if (paGlobal.pls[pli].st.scale && (paGlobal.pls[pli].t !== 'multiInsert' || paGlobal.pls[pli].mp.ip.multi < 2)) return true;
      if (paGlobal.pls[pli].t == 'interstitial') {
        const clsBtnAddHeight = paGlobal.pls[pli].st.cb && paGlobal.pls[pli].st.cbp.p.os.vo < 0 ? paGlobal.pls[pli].st.cbp.p.os.vo * -1 + paGlobal.pls[pli].st.cbp.s[1].a + paGlobal.pls[pli].st.cbp.pd : 0;
        return paGlobal.screenDimensions.w >= paGlobal.percentToPx(paGlobal.toIntConv(paGlobal.data[ui].demand.s[0]), paGlobal.pls[pli].vp.p.w) && paGlobal.screenDimensions.h >= paGlobal.percentToPx(paGlobal.toIntConv(paGlobal.data[ui].demand.s[1]), paGlobal.pls[pli].vp.p.h) + clsBtnAddHeight;
      }
      if (paGlobal.pls[pli].t == 'adhesion') {
        if ((paGlobal.pls[pli].ap.cp.cts.sq || paGlobal.pls[pli].ap.cp.cts.m) && (!paGlobal.pls[pli].ap.cp.cts.saw || (paGlobal.pls[pli].ap.cp.cts.saw && paGlobal.screenDimensions.w >= parseInt(paGlobal.pls[pli].ap.cp.cts.saw)))) {
          if (!paGlobal.plData[pli].sqcStarted || !paGlobal.plData[pli].sqc.cv) {
            return !0;
          }
        }
      }
      return paGlobal.cData[ci].div.offsetWidth + 2 >= paGlobal.percentToPx(paGlobal.toIntConv(paGlobal.data[ui].demand.s[0]), paGlobal.pls[pli].vp.p.w);
    },
    listen: {
      inViewVertical: (pli, ci, ui, nfpb) => {
        if (paGlobal.pls[pli].vp.lbv && !paGlobal.data[ui].fv && paGlobal.selectRect(paGlobal.data[ui].div).top - paGlobal.screenDimensions.h < paGlobal.pls[pli].vp.lbv && paGlobal.selectRect(paGlobal.data[ui].div).top + paGlobal.toIntConv(paGlobal.data[ui].demand.s[1]) + paGlobal.pls[pli].vp.lbv >= 0) {
          return !0;
        }
        switch (paGlobal.pls[pli].t) {
          case 'multiInsert':
          case 'video':
            return paGlobal.selectRect(paGlobal.data[ui].div).top + paGlobal.toIntConv(paGlobal.data[ui].demand.s[1]) >= paGlobal.percentToPx(paGlobal.toIntConv(paGlobal.data[ui].demand.s[1]), paGlobal.pls[pli].vp.p.h) && paGlobal.screenDimensions.h - paGlobal.selectRect(paGlobal.data[ui].div).top >= paGlobal.percentToPx(paGlobal.toIntConv(paGlobal.data[ui].demand.s[1]), paGlobal.pls[pli].vp.p.h);
            break;
          case 'stickyBottom':
          case 'stickyTop':
          case 'interstitial':
            return !0;
            break;
          case 'rail':
          case 'adhesion':
            return paGlobal.selectRect(paGlobal.data[ui].div).top + paGlobal.toIntConv(paGlobal.data[ui].demand.s[1]) >= paGlobal.percentToPx(paGlobal.toIntConv(paGlobal.data[ui].demand.s[1]), paGlobal.pls[pli].vp.p.h) && paGlobal.screenDimensions.h - paGlobal.selectRect(paGlobal.data[ui].div).top >= paGlobal.percentToPx(paGlobal.toIntConv(paGlobal.data[ui].demand.s[1]), paGlobal.pls[pli].vp.p.h) && paGlobal.cData[ci].div.offsetHeight >= paGlobal.percentToPx(paGlobal.toIntConv(paGlobal.data[ui].demand.s[1]), paGlobal.pls[pli].vp.p.h);
            break;
        }
      },
      checkLBV: (pli, ci, ui) => {
        if (paGlobal.pls[pli].vp.lbv && !paGlobal.data[ui].fv && paGlobal.selectRect(paGlobal.data[ui].div).top - paGlobal.screenDimensions.h < paGlobal.pls[pli].vp.lbv && paGlobal.selectRect(paGlobal.data[ui].div).top + paGlobal.toIntConv(paGlobal.data[ui].demand.s[1]) + paGlobal.pls[pli].vp.lbv >= 0) {
          return !0;
        } else {
          return !1;
        }
      },
      checkHON: (pli, ci, ui) => {
        if (!paGlobal.data[ui].demand.cs) {
          paGlobal.data[ui].demand.cs = paGlobal.data[ui].demand.s;
        }
        var hide = !1;
        paGlobal.selectAll(paGlobal.pls[pli].vp.hon).forEach(i => {
          const adRect = paGlobal.selectRect(paGlobal.data[ui].div);
          const honRect = paGlobal.selectRect(i);
          const size = paGlobal.data[ui].demand.cs;
          if (adRect.top + paGlobal.toIntConv(size[1]) >= honRect.top && adRect.bottom <= honRect.top + honRect.height + paGlobal.toIntConv(size[1]) && paGlobal.toIntConv(adRect.left + paGlobal.toIntConv(size[0])) >= honRect.left && adRect.left <= honRect.left + honRect.width) {
            paGlobal.data[ui].showable.honShow = !1;
            hide = !0;
          }
        });
        if (!hide) {
          paGlobal.data[ui].showable.honShow = !0;
        }
        paGlobal.listen.viewListener(pli, ci, ui);
      },
      view: (pli, ci, ui) => {
        if (!paGlobal.marks.view_start) {
          performance.mark('view_start');
          paGlobal.marks.view_start = true;
        }
        paGlobal.data[ui].showable.minMaxView = paGlobal.checkMinMaxView(pli, ci, ui);
        paGlobal.data[ui].showable.fitable = paGlobal.checkFitable(pli, ci, ui);
        const scrollableNode = paGlobal.pls[pli].vp.s.scrollableNode ? document.querySelector(paGlobal.pls[pli].vp.s.scrollableNode) : document.body;
        if (paGlobal.pls[pli].vp.s.s) {
          paGlobal.data[ui].showable.scrollShow = !1;
          paGlobal.data[ui].showObs = paGlobal.listen.observer(paGlobal.observerPixel(scrollableNode, paGlobal.pls[pli].vp.s.s, pli, ci, ui), {threshold: 0, rootMargin: '0px'}, paGlobal.toggleScrollShow);
        }
        if (paGlobal.pls[pli].vp.s.h) {
          paGlobal.data[ui].showable.scrollHide = !1;
          paGlobal.data[ui].hideObs = paGlobal.listen.observer(paGlobal.observerPixel(scrollableNode, paGlobal.pls[pli].vp.s.h, pli, ci, ui), {threshold: 0, rootMargin: '0px'}, paGlobal.toggleScrollHide);
        }
        if (paGlobal.pls[pli].vp.lbv) {
          if (paGlobal.listen.checkLBV(pli, ci, ui)) {
            paGlobal.data[ui].closeToView = !0;
          } else {
            if (!paGlobal.cData[ci].lbvObs) {
              paGlobal.cData[ci].lbvObs = paGlobal.listen.observer(paGlobal.observerPixel(paGlobal.cData[ci].div, paGlobal.toIntConv(paGlobal.pls[pli].vp.s.h), pli, ci, ui), { threshold: 0, rootMargin: `${paGlobal.pls[pli].vp.lbv}px 0px ${paGlobal.pls[pli].vp.lbv + paGlobal.pls[pli].st.s[1]}px` }, e => {
                if (e.isIntersecting) {
                  paGlobal.cData[ci].uis.forEach(u => {
                    paGlobal.data[u].closeToView = !0;
                    paGlobal.listen.viewListener(pli, ci, u);
                  });
                  paGlobal.cData[ci].lbvObs.disconnect();
                }
              });
            }
          }
        }
        if (paGlobal.pls[pli].vp.hon) {
          paGlobal.honPls.push({pli: pli, ci: ci, ui: ui});
          paGlobal.listen.checkHON(pli, ci, ui);
          if (!paGlobal.honListenerSet) {
            paGlobal.honListenerSet = !0;
            document.addEventListener('scroll', () => paGlobal.honPls.forEach(pl => paGlobal.listen.checkHON(pl.pli, pl.ci, pl.ui)));
            document.addEventListener('resize', () => paGlobal.honPls.forEach(pl => paGlobal.listen.checkHON(pl.pli, pl.ci, pl.ui)));
          }
        }
        if (paGlobal.pls[pli].t == 'adhesion') {
          paGlobal.plData[pli].calculateAllUnits();
        }
        if (paGlobal.pls[pli].t !== 'interstitial' && paGlobal.pls[pli].t !== 'stickyBottom' && paGlobal.pls[pli].t !== 'stickyTop') {
          paGlobal.addViewableObserver(pli, ci, ui);
        } else {
          paGlobal.log.info(`unit ${ui} (pl ${pli}) in viewport (listen.view)`);
          paGlobal.data[ui].viewability = !0;
          paGlobal.listen.viewListener(pli, ci, ui);
        }
      },
      observer: (elem, options, cb) => {
        var o = new IntersectionObserver((ent, obs) => {
          ent.forEach(e => cb(e));
        }, options);
        o.observe(elem);
        return o;
      },
      viewListener: (pli, ci, ui) => {
        if ((paGlobal.data[ui].viewability || (!paGlobal.data[ui].fv && (paGlobal.pls[pli].vp.lra || (paGlobal.pls[pli].vp.lbv && paGlobal.data[ui].closeToView)))) && !Object.values(paGlobal.data[ui].showable).includes(!1) && document.visibilityState !== 'hidden') {
          if (!paGlobal.data[ui].fv) {
            paGlobal.data[ui].waitForMeHB = true;
            paGlobal.data[ui].fv = !0;
            paGlobal.addFrame(pli, ci, ui);
            paGlobal.plData[pli].uwff++;
          }
          if (paGlobal.cData[ci].timesdStickyWaiting) {
            paGlobal.cData[ci].timesdStickyWaiting = !1;
            paGlobal.setTimedSticky(pli, ci, ui);
          }
          if (!paGlobal.data[ui].hbHide) {
            paGlobal.cData[ci].div.style.visibility = 'unset';
          }
          if (paGlobal.data[ui].opened) {
            if (paGlobal.pls[pli].st.a) {
              if (paGlobal.pls[pli].t === 'adhesion') {
                paGlobal.data[ui].div.style.transition = 'width 0.5s, opacity 0.4';
              } else if (paGlobal.pls[pli].t !== 'multiInsert' || (paGlobal.pls[pli].t === 'multiInsert' && !paGlobal.pls[pli].mp.cp.fold)) {
                paGlobal.data[ui].div.style.transition = 'height 0.5s, opacity 0.4s';
              }
            }
            if (paGlobal.pls[pli].t !== 'adhesion' && paGlobal.pls[pli].t !== 'video' && (paGlobal.pls[pli].t !== 'multiInsert' || (paGlobal.pls[pli].t === 'multiInsert' && !paGlobal.pls[pli].mp.cp.fold && !paGlobal.pls[pli].mp.cp.sb))) {
              if (!paGlobal.pls[pli].vp.op.on) {
                paGlobal.data[ui].div.style.height = paGlobal.getHeight(paGlobal.toIntConv(paGlobal.data[ui].demand.s[1]), pli) + 'px';
              } else {
                let loweredSize = paGlobal.getLoweredSize(paGlobal.toIntConv(paGlobal.data[ui].demand.s[1]), paGlobal.pls[pli].vp.op.lh.a, paGlobal.pls[pli].vp.op.lh.t);
                paGlobal.data[ui].div.style.height = paGlobal.getHeight(loweredSize, pli) + 'px';
              }
            } else if (paGlobal.pls[pli].t === 'adhesion') {
              paGlobal.data[ui].div.style.width = paGlobal.data[ui].demand.cs[0] + 'px';
            } else if (paGlobal.pls[pli].t !== 'video' && !paGlobal.pls[pli].mp.cp.fold) {
              paGlobal.data[ui].div.style.height = paGlobal.data[ui].demand.cs[1] + 'px';
            }
            paGlobal.data[ui].div.style.pointerEvents = 'auto';
            if (paGlobal.data[ui].refresh.started) {
              paGlobal.refresh.resume(pli, ci, ui, paGlobal.data[ui].refresh.currentRunningTime);
            } else if (paGlobal.data[ui].vidInDisp.onVid) {
              switch (paGlobal.pls[pli].vidInDisp.player) {
                case 'pavid':
                  paGlobal.data[ui].vidInDisp.vid.resume();
                  break;
                case 'power-player':
                  paGlobal.data[ui].vidInDisp.vid.play();
                  break;
              }
            }
          }
          if (paGlobal.pls[pli].t == 'headerVideo' || (paGlobal.pls[pli].t == 'video' && paGlobal.pls[pli].vidp.t == 'headerFullPage')) {
            if (paGlobal.data[ui].vidInfo && paGlobal.data[ui].vidInfo.vid) {
              setTimeout(() => {
                if (paGlobal.pls[pli].vidp.jumpToFixed) {
                  if (paGlobal.data[ui].vidInfo.jumpedToContent) {
                    return;
                  }
                  paGlobal.data[ui].vidInfo.jumpedToContent = true;
                  paGlobal.data[ui].vidInfo.jumpedToFixed = false;
                  var heightClip = paGlobal.pls[pli].vidp.relHeight == 'fullPage' ? '100vh' : 'min(calc(100vw * 0.5625), 100vh)';
                  paGlobal.data[ui].div.style.clip = 'rect(0px, 100vw, ' + heightClip + ', 0px)';
                  paGlobal.data[ui].vidInfo.scrollNoteDiv.style.display = 'block';
                  var frame = paGlobal.data[ui].frame;
                  frame.style.maxWidth = '100%';
                  frame.style.maxHeight = '100%';
                  frame.style.maxHeight = '';
                  paGlobal.data[ui].frame.style.removeProperty(paGlobal.pls[pli].vidp.videoHeaderJumpToFixedXPos);
                  frame.style.right = '';
                  paGlobal.data[ui].frame.style.removeProperty(paGlobal.pls[pli].vidp.videoHeaderJumpToFixedYPos);
                  frame.style.bottom = '';
                  paGlobal.data[ui].vidInfo.vid.resize(frame.offsetWidth);
                } else {
                  paGlobal.data[ui].vidInfo.vid.resume();
                }
              }, 1);
            }
          }
        } else {
          if (paGlobal.data[ui].waitForMeHB) {
            paGlobal.data[ui].waitForMeHB = false;
            paGlobal.checkRequestHB();
          }
          if (paGlobal.data[ui].opened && paGlobal.data[ui].refresh.started) {
            paGlobal.refresh.pause(pli, ci, ui, paGlobal.data[ui].refresh.currentRunningTime);
          } else if (paGlobal.data[ui].vidInDisp.onVid) {
            paGlobal.data[ui].vidInDisp.vid.pause();
          }
          if ((paGlobal.data[ui].viewability || (!paGlobal.data[ui].viewability && paGlobal.pls[pli].t === 'adhesion')) && document.visibilityState !== 'hidden') {
            if (paGlobal.pls[pli].st.a) {
              if (paGlobal.pls[pli].t === 'adhesion') {
                paGlobal.data[ui].div.style.transition = 'width 0.5s, opacity 0.7s';
              } else {
                paGlobal.data[ui].div.style.transition = 'height 0.5s, opacity 0.7s';
              }
            }
            if (paGlobal.pls[pli].t !== 'adhesion') {
              paGlobal.data[ui].div.style.height = 0;
              paGlobal.data[ui].div.style.pointerEvents = 'none';
            } else {
              paGlobal.data[ui].div.style.width = 0;
            }
            paGlobal.cData[ci].div.style.visibility = 'hidden';
          }
        }
        if (paGlobal.pls[pli].t == 'headerVideo' || (paGlobal.pls[pli].t == 'video' && paGlobal.pls[pli].vidp.t == 'headerFullPage')) {
          if (paGlobal.data[ui].vidInfo && paGlobal.data[ui].vidInfo.vid) {
            if (paGlobal.pls[pli].vidp.jumpToFixed) {
              if (paGlobal.data[ui].vidInfo.jumpedToFixed) {
                return;
              }
              paGlobal.data[ui].vidInfo.jumpedToFixed = true;
              paGlobal.data[ui].vidInfo.jumpedToContent = false;
              paGlobal.data[ui].vidInfo.scrollNoteDiv.style.display = 'none';
              paGlobal.data[ui].div.style.clip = '';
              var frame = paGlobal.data[ui].frame;
              frame.style.maxWidth = paGlobal.pls[pli].vidp.videoHeaderJumpToFixedMaxWidth + paGlobal.pls[pli].vidp.videoHeaderJumpToFixedMaxWidthType;
              frame.style.maxHeight = frame.offsetWidth * 0.5625 + 'px';
              frame.style[paGlobal.pls[pli].vidp.videoHeaderJumpToFixedXPos] = paGlobal.pls[pli].vidp.videoHeaderJumpToFixedXOffset + paGlobal.pls[pli].vidp.videoHeaderJumpToFixedXOffsetType;
              frame.style[paGlobal.pls[pli].vidp.videoHeaderJumpToFixedYPos] = paGlobal.pls[pli].vidp.videoHeaderJumpToFixedYOffset + paGlobal.pls[pli].vidp.videoHeaderJumpToFixedYOffsetType;
              paGlobal.data[ui].vidInfo.vid.resize(frame.offsetWidth);
            } else {
              paGlobal.data[ui].vidInfo.vid.pause();
            }
          }
        }
        if (paGlobal.data[ui].viewability && paGlobal.data[ui].refresh.started && !paGlobal.data[ui].refresh.running) {
          const time = (paGlobal.pls[pli].vp.rtnv ? paGlobal.pls[pli].vp.miv * 1000 : 0);
          paGlobal.log.info(`unit ${ui} (pl ${pli}) resume refresh (wait for ${time}ms)`);
          paGlobal.refresh.resume(pli, ci, ui, paGlobal.data[ui].refresh.currentRunningTime + time);
        }
        if (!paGlobal.data[ui].viewability && paGlobal.data[ui].refresh.started && paGlobal.data[ui].refresh.running) {
          paGlobal.refresh.pause(pli, ci, ui);
        }
      }
    },
    addViewableObserver: (pli, ci, ui) => {
      var options = {threshold: Math.max(paGlobal.pls[pli].vp.p.w / 100, 0), rootMargin: `${paGlobal.pls[pli].st.s[1] - paGlobal.percentToPx(paGlobal.pls[pli].st.s[1], paGlobal.pls[pli].vp.p.h)}px 0px ${paGlobal.percentToPx(paGlobal.pls[pli].st.s[1], paGlobal.pls[pli].vp.p.h) * -1}px`};
      if (paGlobal.pls[pli].t === 'adhesion') {
        options = {threshold: Math.max(paGlobal.pls[pli].vp.p.h / 100, 0), rootMargin: `0px 350px`};
      }
      paGlobal.data[ui].observer = paGlobal.listen.observer(paGlobal.data[ui].observerPx, options, e => {
        if (!paGlobal.data[ui]) return console.warn('observer fired without paGlobal.data[ui]');
        if (e.isIntersecting) {
          paGlobal.log.info(`unit ${ui} (pl ${pli}) in viewport (observer)`);
          paGlobal.data[ui].viewability = !0;
        } else {
          paGlobal.log.info(`unit ${ui} (pl ${pli}) out of viewport`);
          paGlobal.data[ui].viewability = !1;
        }
        paGlobal.listen.viewListener(pli, ci, ui);
      });
    },
    observerPixel: (elem, top, pli, ci, ui, insert) => {
      var px = document.createElement('div');
      px.classList.add('pa-observer-px');
      px.setAttribute('style', `height:0px;width:100%;background:transparent;position:absolute;left:0;top:${top || 0}px;pointer-events:none`);
      if (pli && parseInt(ui) > -1 && parseInt(ci) > -1) {
        px.dataset.ui = ui;
        px.dataset.ci = ci;
        px.dataset.pli = pli;
      }
      elem.insertAdjacentElement(insert || 'beforeend', px);
      return px;
    },
    toggleScrollShow: function (e) {
      let unitData = e.target.dataset;
      if (!e.isIntersecting && e.boundingClientRect.y < 0) {
        paGlobal.data[unitData.ui].showable.scrollShow = !0;
        if (paGlobal.data[unitData.ui].viewability) paGlobal.listen.viewListener(unitData.pli, unitData.ci, unitData.ui);
      } else {
        paGlobal.data[unitData.ui].showable.scrollShow = !1;
        if (paGlobal.data[unitData.ui].viewability) paGlobal.listen.viewListener(unitData.pli, unitData.ci, unitData.ui);
      }
    },
    toggleScrollHide: function (e) {
      let unitData = e.target.dataset;
      if (!e.isIntersecting && e.boundingClientRect.y < 0) {
        paGlobal.data[unitData.ui].showable.scrollHide = !1;
        if (paGlobal.data[unitData.ui].viewability) paGlobal.listen.viewListener(unitData.pli, unitData.ci, unitData.ui);
      } else {
        paGlobal.data[unitData.ui].showable.scrollHide = !0;
        if (paGlobal.data[unitData.ui].viewability) paGlobal.listen.viewListener(unitData.pli, unitData.ci, unitData.ui);
      }
    },
    getWiderAdhesion: (pli) => {
      if (document.querySelector('.pa-global-class.pa-pl-' + pli)) {
        var ad = document.querySelector('.pa-unit-global.pa-pl-' + pli);
        return paGlobal.toIntConv(paGlobal.data[ad.dataset.ui].demand.s[0]);
      }
      var uis = [];
      document.querySelectorAll('.pa-unit-global.pa-pl-' + pli).forEach(unit => uis.push(parseInt(unit.dataset.ui)));
      return Math.max(paGlobal.toIntConv(paGlobal.data[uis[0]].demand.s[0]), paGlobal.toIntConv(paGlobal.data[uis[1]].demand.s[0]));
    },
    vidFunctions: {
      xButton: () => {
        if (paGlobal.vidFunctions.stats.position == 'fixed' && paGlobal.pls[window.vidPli].vidp.xftr) {
          paGlobal.pls[window.vidPli].vidp.p = 'relative';
          paGlobal.pls[window.vidPli].vidp.asa = 'pause';
          paGlobal.vidFunctions.togglePosition.inContent();
        } else {
          window.vid.api.stop()
          paGlobal.vidFunctions.remove();
          paGlobal.vidFunctions.close();
        }
      },
      inView: () => {
        if (paGlobal.vidFunctions.vidParams.position == 'fixed' || paGlobal.vidFunctions.vidParams.type == 'interstitial') {
          if ((paGlobal.vidFunctions.vidParams.atSelector == 'relative' || !window.vidCont) && paGlobal.vidFunctions.vidParams.type != 'interstitial') {
            if (!window.vidCont) {
              paGlobal.log.warn("can't find selector to change video relative to");
            } else {
              if (!paGlobal.pls[window.vidPli].vidp.newVidScript) {
                if (window.vidCont.getBoundingClientRect().top > paGlobal.screenDimensions.h - window.vidCont.offsetHeight / 2) {
                  paGlobal.vidFunctions.togglePosition.fixed();
                  setTimeout(() => {
                    paGlobal.vidFunctions.togglePosition.fixed();
                  }, 50);
                } else if (window.vidCont.getBoundingClientRect().top + window.vidCont.offsetHeight / 2 < 0) {
                  paGlobal.vidFunctions.togglePosition.fixed();
                } else {
                  paGlobal.vidFunctions.togglePosition.inContent();
                }
              }
            }
          } else {
          }
          return !0;
        } else {
          if (paGlobal.pls[window.vidPli].vidp.asa == 'pause') {
            return window.vidDiv.getBoundingClientRect().top + paGlobal.vidFunctions.getHeight(window.vidDiv) / 2 >= 0 && window.vidDiv.getBoundingClientRect().top + paGlobal.vidFunctions.getHeight(window.vidDiv) / 2 <= paGlobal.screenDimensions.h;
          } else if (paGlobal.pls[window.vidPli].vidp.asa == 'move') {
            if (window.vidDiv.getBoundingClientRect().top + paGlobal.vidFunctions.getHeight(window.vidDiv) / 2 <= paGlobal.screenDimensions.h) {
              if (!paGlobal.pls[window.vidPli].vidp.newVidScript) {
                if (window.vidCont.getBoundingClientRect().top + paGlobal.vidFunctions.getHeight(window.vidDiv) / 2 >= 0) {
                  paGlobal.vidFunctions.togglePosition.inContent();
                } else {
                  paGlobal.vidFunctions.togglePosition.fixed();
                }
              }

              return !0;
            } else {
              return !1;
            }
          }
        }
        paGlobal.log.warn("can't determine if video is in view with current position and scroll action");
        return !1;
      },
      getAutoplay: () => {
        if (typeof paGlobal.pls[window.vidPli].vidp.autoplay === 'undefined') return true;
        if (paGlobal.pls[window.vidPli].vidp.autoplayAfter) return paGlobal.pls[window.vidPli].vidp.autoplayAfter * 1000;
        return paGlobal.pls[window.vidPli].vidp.autoplay;
      },
      addVideo: async () => {
        paGlobal.vidFunctions.stats.added = !0;
        if (paGlobal.pls[window.vidPli].vidp.powerad) {
          let checkForVidVar = window.paVid;
          if (paGlobal.pls[window.vidPli].vidp.newVidScript) {
            checkForVidVar = window.PowerPlayer != undefined;
          }
          if (!checkForVidVar) {
            let args = ['', {}];
            if (paGlobal.pls[window.vidPli].vidp.newVidScript) {
              args = ['power-player', {powerPlayerV: paGlobal.pls[window.vidPli].vidp.newVidVersion}];
            }
            await paGlobal.callVidScript(...args);
            start();
          } else {
            start();
          }
          function start() {
            if (paGlobal.pls[window.vidPli].vidp.newVidScript) {
              const adSettings = {
                // listeners: paGlobal.vidFunctions.listen.newVidEvts,
                listeners: {},
                // autoplay: true,
                maxVideos: paGlobal.pls[window.vidPli].vidp.maxVids,
                device: paGlobal.device,
                tags: paGlobal.pls[window.vidPli].vidp.tags,
                eachVideo: paGlobal.pls[window.vidPli].vidp.eachVideo,
                hideCloseButton: !paGlobal.pls[window.vidPli].vidp.newVidScriptClsBtn,
                hideCentralPlay: true,
                hideSeekBar: true,
                hideBottomControls: true,
                hideSoundIcon: paGlobal.pls[window.vidPli].vidp.hideMuteBtn,
                hideBottomPlay: true,
                hideBottomTiming: true,
                hideBottomFullscreen: true,
                delay: paGlobal.pls[window.vidPli].vidp.delay || 0
              };
              const vidOptions = {
                target: paGlobal.data[window.vidUi].div,
                skin: paGlobal.pls[window.vidPli].vidp.skin || 'default',
                playlistType: paGlobal.pls[window.vidPli].vidp.playlistType || 'internal',
                closeButtonType: paGlobal.pls[window.vidPli].vidp.xBtnType,
                closeButtonPosition: paGlobal.pls[window.vidPli].vidp.xBtnPos || 'right',
                autoplay: paGlobal.vidFunctions.getAutoplay(),
                closeMode: paGlobal.pls[window.vidPli].vidp.newVidClsBtnMode || 'container',
                width: '100%',
                height: 'auto',
                muted: paGlobal.pls[window.vidPli].vidp.muted,
                playlistOptions: {
                  env: paGlobal.pls[window.vidPli].vidp.environment,
                  mode: paGlobal.pls[window.vidPli].vidp.playlistSource
                },
                plugins: {
                  ...(paGlobal.pls[window.vidPli].vidp.autoMidrolls && {midrollOption: {cues: paGlobal.pls[window.vidPli].vidp.cueCount, force: paGlobal.pls[window.vidPli].vidp.forceCues}}),
                  hls: paGlobal.pls[window.vidPli].vidp.hls,
                  title: paGlobal.pls[window.vidPli].vidp.title ? paGlobal.pls[window.vidPli].vidp.customTitle || paGlobal.pls[window.vidPli].vidp.title : false,
                  ad: adSettings,
                  midroll: (paGlobal.pls[window.vidPli].vidp.midroll || []).map(x => {
                    return {...adSettings, offset: x};
                  }),
                  sticky: paGlobal.vidFunctions.getNewVideoSticky(),
                  unmuteOnHover: paGlobal.pls[window.vidPli].vidp.unmuteOnHover,
                  analytics: {
                    enabled: paGlobal.pls[window.vidPli].vidp.analytics,
                    environment: 'prod'
                  }
                }
              };
              if (paGlobal.pls[window.vidPli].vidp.contentLink) {
                if (paGlobal.pls[window.vidPli].vidp.contentLink.startsWith('http')) {
                  vidOptions.src = paGlobal.pls[window.vidPli].vidp.contentLink;
                } else {
                  vidOptions.plugins.playlist = paGlobal.pls[window.vidPli].vidp.contentLink;
                }
              }
              paGlobal.data[window.vidUi].vidInfo.player = new window.PowerPlayer(vidOptions);
              paGlobal.data[window.vidUi].vidInfo.player.resize(window.vidDiv.offsetWidth);
              paGlobal.data[window.vidUi].vidInfo.player.on('close', paGlobal.vidFunctions.listen.newVidEvts.close);
              paGlobal.vidFunctions.listen.newVidEvts.impression();
            } else {
              window.vid.api.on('ready', () => {
                paGlobal.vidFunctions.listen.imp();
                if (!paGlobal.vidFunctions.vidParams.clickToPlay) {
                  window.vid.api.mute();
                }
              });
              window.vid.api.resize(window.vidDiv.offsetWidth);
              window.vid.api.request(window.vidDiv, paGlobal.pls[window.vidPli].vidp.tags, paGlobal.pls[window.vidPli].vidp.maxVids || 1, null, paGlobal.device, window.vidPli, paGlobal.pls[window.vidPli].vidp.resumeOnReload, paGlobal.pls[window.vidPli].vidp.contentLink, paGlobal.pls[window.vidPli].vidp.ctp, window.vidPli);
            }
          }
        } else {
          var jwScript = document.createElement('script');
          if (window.flNonce) jwScript.nonce = window.flNonce;
          jwScript.src = paGlobal.pls[window.vidPli].vidp.pl;
          jwScript.id = 'jw-library-script';
          window.vidDiv.appendChild(jwScript);
          var vidElement = document.createElement('div');
          vidElement.id = 'pa-jw-player';
          window.vidDiv.appendChild(vidElement);
          jwScript.addEventListener('load', () => {
            paGlobal.vidFunctions.playerInstance = window.jwplayer('pa-jw-player');
            var playerInstance = paGlobal.vidFunctions.playerInstance;
            playerInstance.setup({file: paGlobal.pls[window.vidPli].vidp.vl, image: paGlobal.pls[window.vidPli].vidp.img});
            playerInstance.on('ready', () => {
              paGlobal.vidFunctions.listen.imp();
              if (!paGlobal.vidFunctions.vidParams.clickToPlay) {
                playerInstance.setMute(!0);
                playerInstance.play();
              }
            });
          });
        }
      },
      getNewVideoSticky: () => {
        // relative / pause -> return false
        // relative / move -> return mode sticky - with params
        // fixed -> return mode fixed - with params
        // missing mode fixed - relative - fixed
        const vidp = paGlobal.pls[window.vidPli].vidp;
        if (vidp.p == 'relative' && vidp.asa == 'pause') return false;
        const result = {
          [vidp.vp]: vidp.vpo + vidp.vpot,
          [vidp.hp]: vidp.hpo + vidp.hpot,
          width: vidp.mxwf + vidp.mxwft,
          zIndex: vidp.zif || 1000000,
          mode: 'sticky'
        };
        if (vidp.p == 'fixed') result.mode = 'fixed';
        return result;
      },
      togglePosition: {
        fixed: () => {
          if (paGlobal.vidFunctions.stats.position != 'fixed') {
            if (paGlobal.vidFunctions.stats.opened && !paGlobal.vidFunctions.stats.removed) {
              paGlobal.vidFunctions.stats.position = 'fixed';
              window.vidDiv.style.position = 'fixed';
              window.vidDiv.style.width = paGlobal.pls[window.vidPli].vidp.mxwf + paGlobal.pls[window.vidPli].vidp.mxwft;
              window.vidDiv.style.maxWidth = paGlobal.pls[window.vidPli].vidp.mxwf + paGlobal.pls[window.vidPli].vidp.mxwft;
              window.vidDiv.style.zIndex = paGlobal.pls[window.vidPli].vidp.zif || 1000000;
              window.vidDiv.style.height = paGlobal.vidFunctions.getHeight(window.vidDiv) + 'px';
              window.vidDiv.style.maxHeight = paGlobal.vidFunctions.getHeight(window.vidDiv) + 'px';
              window.vidDiv.style.boxShadow = 'rgb(0 0 0 / 40%) 1px 1px 6px 3px';
              window.vidDiv.style[paGlobal.pls[window.vidPli].vidp.vp] = paGlobal.pls[window.vidPli].vidp.vpo + paGlobal.pls[window.vidPli].vidp.vpot;
              window.vidDiv.style[paGlobal.pls[window.vidPli].vidp.hp] = paGlobal.pls[window.vidPli].vidp.hpo + paGlobal.pls[window.vidPli].vidp.hpot;
              if (paGlobal.pls[window.vidPli].vidp.powerad) {
                if (paGlobal.pls[window.vidPli].vidp.newVidScript) {
                  paGlobal.data[window.vidUi].vidInfo.player.resize(window.vidDiv.offsetWidth, window.vidDiv.offsetHeight);
                } else {
                  window.vid.api.resize(window.vidDiv.offsetWidth, null, true);
                }
              }
            } else {
            }
          }
          if (paGlobal.pls[window.vidPli].vidp.hxf) {
            if (window.vid) window.vid.api.hideClose()
          } else {
            if (window.vid) window.vid.api.showClose() 
          }
          if (paGlobal.pls[window.vidPli].vidp.hxf && paGlobal.pls[window.vidPli].st.cb) {
            try {
              window.vidCont.querySelector('.cls-btn').style.display = 'none';
            } catch (e) {}
          } else if (paGlobal.pls[window.vidPli].st.cb) {
            try {
              window.vidCont.querySelector('.cls-btn').style.display = 'block';
            } catch (e) {}
          }
        },
        inContent: () => {
          window.vidDiv.style.transition = '';
          if (paGlobal.vidFunctions.stats.position == 'fixed' && window.vidCont && window.vidDiv) {
            paGlobal.vidFunctions.stats.position = 'inContent';
            window.vidDiv.style.position = paGlobal.vidFunctions.vidParams.atSelector == 'relative' ? 'relative' : paGlobal.vidFunctions.vidParams.position;
            window.vidDiv.style[paGlobal.pls[window.vidPli].vidp.vp] = 0;
            window.vidDiv.style[paGlobal.pls[window.vidPli].vidp.hp] = 0;

            window.vidDiv.style.boxShadow = '';
            if (paGlobal.pls[window.vidPli].vidp.powerad) {
              if (paGlobal.pls[window.vidPli].vidp.newVidScript) {
                paGlobal.data[window.vidUi].vidInfo.player.resize(window.vidDiv.offsetWidth, window.vidDiv.offsetHeight);
              } else {
                vid.api.resize(window.vidCont.offsetWidth);
              }
            }
            window.vidDiv.style.width = 'inherit';
            window.vidDiv.style.maxWidth = 'inherit';
            let height = paGlobal.vidFunctions.getHeight(window.vidCont)
            // if (window.vid && vid.api) height = vid.api.getHeight()
            window.vidDiv.style.height = height + 'px';
            window.vidDiv.style.maxHeight = height + 'px';
            window.vidCont.style.height = height + 'px';
            window.vidCont.style.maxHeight = height + 'px';
          }
          if (paGlobal.pls[window.vidPli].vidp.hxr) {
            if (window.vid) vid.api.hideClose()
          } else {
            if (window.vid) vid.api.showClose()
          }
          if (paGlobal.pls[window.vidPli].vidp.hxr && paGlobal.pls[window.vidPli].st.cb) {
            try {
              window.vidCont.querySelector('.cls-btn').style.display = 'none';
            } catch (e) {}
          } else if (paGlobal.pls[window.vidPli].st.cb) {
            try {
              window.vidCont.querySelector('.cls-btn').style.display = 'block';
            } catch (e) {}
          }
        }
      },
      imp: () => {
        if(paGlobal.plData[window.vidPli].impFired) return
        paGlobal.plData[window.vidPli].impFired = true
        if (paGlobal.pls[window.vidPli].st.cb) {
          paGlobal.addClsBtn(window.vidPli, window.vidCi, window.vidUi);
          if (paGlobal.pls[window.vidPli].hxf && paGlobal.vidFunctions.stats.position == 'fixed') {
            try {
              window.vidCont.querySelector('.cls-btn').style.display = 'none';
            } catch (e) {}
          } else if (paGlobal.pls[window.vidPli].hxr && paGlobal.vidFunctions.stats.position == 'inContent') {
            try {
              window.vidCont.querySelector('.cls-btn').style.display = 'none';
            } catch (e) {}
          }
        }
        if (paGlobal.pls[window.vidPli].vao.adh.on) {
          paGlobal.addAdHeading(window.vidPli, window.vidCi, window.vidUi);
        }
        if (paGlobal.pls[window.vidPli].vao.lg.on) {
          paGlobal.addLogo(window.vidPli, window.vidCi, window.vidUi);
        }
        paGlobal.vidFunctions.open();
        if (!paGlobal.vidFunctions.vidParams.clickToPlay) {
          if (!paGlobal.pls[window.vidPli].vidp.newVidScript) {
            paGlobal.vidFunctions.play();
          }
        } else {
          if (paGlobal.pls[window.vidPli].vidp.powerad) {
            if (paGlobal.pls[window.vidPli].vidp.newVidScript) {
              paGlobal.data[window.vidUi].vidInfo.player.muted = false;
            } else {
              // vid.api.unmute();
            }
          } else {
            paGlobal.vidFunctions.playerInstance.setMute(!1);
          }
          window.vidDiv.addEventListener('click', togglePlaying);
          function togglePlaying() {
            paGlobal.vidFunctions.stats.started = !0;
            paGlobal.vidFunctions.stats.playing = !0;
            window.vidDiv.removeEventListener('click', togglePlaying);
            if (paGlobal.pls[window.vidPli].vidp.powerad) {
            }
          }
        }
        if (paGlobal.pls[window.vidPli].vidp.powerad) {
          function complete() {
            paGlobal.vidFunctions.finished();
            // if (!paGlobal.vidFunctions.vidParams.clickToPlay) {
            // } else {
            //   // paGlobal.log.err("powerad doesn't support content video after ad yet, sorry");
            //   paGlobal.vidFunctions.finished();
            // }
          }
          if (paGlobal.pls[window.vidPli].vidp.newVidScript) {
            // already added when intiated
          } else {
            vid.api.on('complete', complete);
            vid.api.on('close', paGlobal.vidFunctions.closeBtn)
            vid.api.on('skipped', complete);
          }
        } else {
          paGlobal.vidFunctions.playerInstance.on('complete adComplete adSkipped', () => {
            if (!paGlobal.vidFunctions.vidParams.clickToPlay) {
              paGlobal.vidFunctions.finished();
            }
            if (paGlobal.pls[window.vidPli].vidp.live) {
              paGlobal.vidFunctions.playerInstance.on('firstFrame', () => {
                paGlobal.vidFunctions.finished();
              });
            }
          });
        }
      },
      noImp: () => {
        paGlobal.log.info('no fill for video');
        if (paGlobal.pls[window.vidPli].vidp.powerad) {
          if (paGlobal.pls[window.vidPli].vidp.newVidScript) {
            console.warn("new vid script doesn't have stop method");
          } else {
            // vid.api.stop();
          }
        } else {
          paGlobal.vidFunctions.playerInstance.stop();
        }
        if (!paGlobal.vidFunctions.vidParams.clickToPlay) {
          paGlobal.vidFunctions.remove();
        }
        if (paGlobal.vidFunctions.vidParams.recall > paGlobal.vidFunctions.stats.recalled) {
          paGlobal.vidFunctions.recall();
        } else if (paGlobal.pls[window.vidPli].vidp.nip) {
          paGlobal.vidFunctions.remove();
          if (paGlobal.pls[paGlobal.pls[window.vidPli].vidp.nip] && paGlobal.pls[paGlobal.pls[window.vidPli].vidp.nip].s == 'pb') {
            paGlobal.startInject(paGlobal.pls[window.vidPli].vidp.nip);
            return;
          } else {
            paGlobal.log.warn("couldn't find placement " + paGlobal.pls[window.vidPli].vidp.nip + ', passback canceled');
          }
        } else if (paGlobal.pls[window.vidPli].vidp.prebid) {
          paGlobal.vidFunctions.prebid();
        } else if (paGlobal.vidFunctions.vidParams.type == 'interstitial') {
          paGlobal.vidFunctions.close();
        }
      },
      playContent: () => {
        [...window.vidDiv.children].forEach(i => {
          try {
            if (i != paGlobal.data[window.vidUi].clsBtn) {
              i.remove();
            }
          } catch (e) {}
        });
        if (true) {
          var contentVideo = document.createElement('video');
          contentVideo.style = 'width: 100%; height: 100%; margin: auto;';
          contentVideo.setAttribute('autoplay', '');
          contentVideo.setAttribute('controls', '');
          contentVideo.setAttribute('controlsList', 'nodownload');
          contentVideo.setAttribute('volume', '0');
          contentVideo.setAttribute('muted', '');
          contentVideo.muted = true;
          contentVideo.autoplay = true;
          contentVideo.src = paGlobal.pls[window.vidPli].vidp.contentLink;
          window.vidDiv.appendChild(contentVideo);
          paGlobal.plData[window.vidPli].vid = contentVideo;
          contentVideo.onplay = () => {
            if (!paGlobal.vidFunctions.stats.contentStarted) {
              paGlobal.vidFunctions.stats.contentStarted = true;
            }
            paGlobal.vidFunctions.stats.contentPlaying = true;
          };
          contentVideo.onComplete = () => {
            paGlobal.vidFunctions.stats.contentFinished = true;
          };
        } else {
          var contentFrame = document.createElement('iframe');
          contentFrame.setAttribute('frameborder', '0');
          contentFrame.setAttribute('marginwidth', '0');
          contentFrame.setAttribute('marginheight', '0');
          contentFrame.setAttribute('scrolling', 'no');
          contentFrame.setAttribute('allowfullscreen', '');
          contentFrame.style = 'width: 100%; height: 100%; margin: auto;';
          contentFrame.src = paGlobal.pls[window.vidPli].vidp.contentLink;
          var autoPlayString = 'autoplay=1&mute=1';
          if (contentFrame.src.includes('?')) {
            contentFrame.src += '&' + autoPlayString;
          } else {
            contentFrame.src += '?' + autoPlayString;
          }
          window.vidDiv.appendChild(contentFrame);
        }
      },
      closeBtn: () => {
        paGlobal.vidFunctions.xButton()
      },
      finished: () => {
        paGlobal.vidFunctions.remove();
        if (paGlobal.pls[window.vidPli].vidp.newVidScript) {
          return;
        }
        return
        if (paGlobal.pls[window.vidPli].vidp.contentLink) {
          paGlobal.vidFunctions.playContent();
          return;
        }
        if (!paGlobal.pls[window.vidPli].vidp.ko || paGlobal.vidFunctions.vidParams.type == 'interstitial') {
          paGlobal.vidFunctions.close();
        } else if (paGlobal.pls[window.vidPli].vidp.dp) {
          paGlobal.vidFunctions.callDisplay();
        }
      },
      remove: () => {
        try {
          var vidFinishedEvt = new Event('vidFinished');
          document.dispatchEvent(vidFinishedEvt);
        } catch (e) {
          console.warn('failed to fire video finished event!\n' + e);
        }
        paGlobal.vidFunctions.stats.removed = !0;
        if (paGlobal.pls[window.vidPli].vidp.contentLink && !paGlobal.pls[window.vidPli].vidp.newVidScript) {
          // return;
        }
        window.vidDiv.style.maxHeight = 0;
        paGlobal.cData[window.vidCi].div.style.maxHeight = 0;
        // setTimeout(function () {
          window.vidDiv.remove();
        // }, 500);
        if (!paGlobal.pls[window.vidPli].vidp.powerad) {
          try {
            document.querySelector('#jw-library-script').remove();
            document.querySelector('#pa-jw-player').remove();
          } catch (e) {}
        }
        if (!paGlobal.pls[window.vidPli].vidp.newVidScript) {
          document.removeEventListener('scroll', paGlobal.vidFunctions.listen.view);
        }
        paGlobal.log.info('video removed');
      },
      getHeight: (vidDiv) => {
        if(window.vid && vid.api) return vid.api.getHeight()
        return vidDiv.offsetWidth * 0.5625;
      },
      open: () => {
        if (paGlobal.vidFunctions.vidParams.type == 'interstitial') {
          window.vidCont.style.transition = 'max-height 0.5s';
          window.vidCont.style.height = '100%';
          window.vidCont.style.maxHeight = '100%';
          window.vidCont.style.width = '100%';
          window.vidCont.style.maxWidth = '100%';
          window.vidCont.style.background = 'rgb(0,0,0,0.8)';
          window.vidCont.style.top = 0;
          window.vidCont.style.bottom = 0;
          window.vidCont.style.right = 0;
          window.vidCont.style.left = 0;
          window.vidDiv.style.zIndex = paGlobal.pls[window.vidPli].st.zi || 100000;
          window.vidDiv.style.transition = 'height: 0.5s';
          window.vidDiv.style.maxWidth = paGlobal.pls[window.vidPli].vidp.mxw + paGlobal.pls[window.vidPli].vidp.mxwt;
          window.vidDiv.style.maxHeight = paGlobal.vidFunctions.getHeight(window.vidDiv) + 'px';
          window.vidDiv.style.position = 'absolute';
          window.vidDiv.style.margin = '0px auto';
          window.vidDiv.style.left = 0;
          window.vidDiv.style.right = 0;
          window.vidDiv.style.top = paGlobal.screenDimensions.h / 2 - paGlobal.vidFunctions.getHeight(window.vidDiv) / 2 + 'px';
          if (paGlobal.pls[window.vidPli].vidp.powerad) {
            if (paGlobal.pls[window.vidPli].vidp.newVidScript) {
              paGlobal.data[window.vidUi].vidInfo.player.resize(window.vidDiv.offsetWidth, window.vidDiv.offsetHeight);
            } else {
              // vid.api.resize(window.vidDiv.offsetWidth, window.vidDiv.offsetHeight);
            }
          }
        } else {
          if (paGlobal.pls[window.vidPli].vidp.powerad) {
            if (paGlobal.pls[window.vidPli].vidp.newVidScript) {
              paGlobal.data[window.vidUi].vidInfo.player.resize(window.vidDiv.offsetWidth);
              window.vidCont.style.maxHeight = paGlobal.data[window.vidUi].vidInfo.player.height + 'px';
              window.vidCont.style.height = paGlobal.data[window.vidUi].vidInfo.player.height + 'px';
            } else {
              vid.api.resize(window.vidCont.offsetWidth);
              window.vidCont.style.maxHeight = vid.api.getHeight() + 'px';
              window.vidCont.style.height = vid.api.getHeight() + 'px';
              // window.vidCont.style.width = '100%'
            }
          } else {
            window.vidCont.style.maxHeight = paGlobal.vidFunctions.getHeight(window.vidDiv) + 'px';
            window.vidCont.style.height = paGlobal.vidFunctions.getHeight(window.vidDiv) + 'px';
          }
        }
        paGlobal.vidFunctions.stats.opened = !0;
      },
      play: () => {
        paGlobal.vidFunctions.stats.started = !0;
        paGlobal.vidFunctions.stats.playing = !0;
        if (paGlobal.vidFunctions.vidParams.type == 'interstitial') {
          if (paGlobal.pls[window.vidPli].vidp.powerad) {
            if (paGlobal.pls[window.vidPli].vidp.newVidScript) {
              paGlobal.data[window.vidUi].vidInfo.player.muted = false;
            } else {
              vid.api.unmute();
            }
          } else {
            paGlobal.vidFunctions.playerInstance.setMute(!1);
          }
        } else {
          if (paGlobal.pls[window.vidPli].vidp.powerad) {
            if (paGlobal.pls[window.vidPli].vidp.newVidScript) {
              paGlobal.data[window.vidUi].vidInfo.player.muted = true;
            } else {
              vid.api.mute();
            }
          } else {
            paGlobal.vidFunctions.playerInstance.setMute(!0);
          }
        }
        if (paGlobal.pls[window.vidPli].vidp.unmuteOnHover) {
          paGlobal.vidFunctions.listen.mouse();
        }
        if (!paGlobal.vidFunctions.vidParams.clickToPlay) {
          if (paGlobal.pls[window.vidPli].vidp.powerad) {
            if (paGlobal.pls[window.vidPli].vidp.newVidScript) {
              paGlobal.data[window.vidUi].vidInfo.player.play();
            } else {
              // vid.api.play();
            }
          } else {
            paGlobal.vidFunctions.playerInstance.play();
          }
        }
      },
      pause: () => {
        paGlobal.vidFunctions.stats.playing = !1;
        if (paGlobal.pls[window.vidPli].vidp.powerad) {
          if (paGlobal.pls[window.vidPli].vidp.newVidScript) {
            paGlobal.data[window.vidUi].vidInfo.player.pause();
          } else {
            vid.api.pause();
          }
        } else {
          paGlobal.vidFunctions.playerInstance.pause();
        }
      },
      close: () => {
        if (!window.vidCont) {
          paGlobal.log.warn("can't close video container, not found");
          return;
        }
        paGlobal.vidFunctions.stats.closed = !0;
        window.vidCont.style.maxHeight = 0;
        // setTimeout(function () {
          paGlobal.log.info('Remove vidUi container div');
          window.vidCont.remove();
          paGlobal.cData[window.vidUi].div.remove()
        // }, 500);
        paGlobal.log.info('video closed');
      },
      recall: () => {
        paGlobal.vidFunctions.stats.recalled++;
        paGlobal.vidFunctions.addVideo();
        paGlobal.log.info('video recalled (#' + paGlobal.vidFunctions.stats.recalled + ')');
      },
      prebid: () => {
        paGlobal.log.info('video calling prebid');
        if (paGlobal.pls[window.vidPli].vidp.pr.ns) {
          try {
            var insertMode = paGlobal.pls[window.vidPli].vidp.im;
            paGlobal.select(paGlobal.pls[window.vidPli].vidp.pr.ns)[insertMode](window.vidCont);
            paGlobal.log.info('moved prebid video to new selector');
          } catch (e) {
            paGlobal.log.err('failed to move the prebid video to new selector: ' + e);
          }
        }
        var googScript = document.createElement('script');
        googScript.setAttribute('async', 'async');
        googScript.src = 'https://www.googletagservices.com/tag/js/gpt.js';
        window.vidCont.appendChild(googScript);
        var preScript = document.createElement('script');
        preScript.src = 'https://acdn.adnxs.com/prebid/not-for-prod/1/prebid.js';
        window.vidCont.appendChild(preScript);
        var bidders = [];
        if (paGlobal.pls[window.vidPli].vidp.pr.teads) {
          bidders.push({pageId: paGlobal.pls[window.vidPli].vidp.pr.teadsp.pageId, placementId: paGlobal.pls[window.vidPli].vidp.pr.teadsp.placementId});
        }
        if (paGlobal.pls[window.vidPli].vidp.pr.teads) {
          bidders.push({targetingUUID: paGlobal.pls[window.vidPli].vidp.pr.unrulyp.targetingUUID, siteId: paGlobal.pls[window.vidPli].vidp.pr.unrulyp.siteId});
        }
        window.vidPreUnits = [{code: 'pa-vid-pre-slot', mediaTypes: {video: {context: 'outstream', playerSize: [640, 480]}}, bids: bidders}];
        window.googletag = window.googletag || {};
        window.googletag.cmd = googletag.cmd || [];
        window.googletag.cmd.push(function () {
          window.googletag.pubads().disableInitialLoad();
        });
        window.pbjs = window.pbjs || {};
        window.pbjs.que = pbjs.que || [];
        window.pbjs.que.push(function () {
          window.pbjs.addAdUnits(vidPreUnits);
          window.pbjs.requestBids({bidsBackHandler: initAdserver, timeout: 1000});
        });
        function initAdserver() {
          if (window.pbjs.initAdserverSet) return;
          window.pbjs.initAdserverSet = !0;
          window.googletag.cmd.push(function () {
            window.pbjs.que.push(function () {
              window.pbjs.setTargetingForGPTAsync();
              window.googletag.pubads().refresh();
            });
          });
        }
        setTimeout(function () {
          initAdserver();
        }, 3000);
        window.googletag.cmd.push(function () {
          paGlobal.log.info('adYield: ' + paGlobal?.adYield);
          window.googletag.setConfig({ threadYield: paGlobal?.adYield ?? null });
          window.googletag.defineSlot('/90814396/' + paGlobal.pls[window.vidPli].vidp.pr.code, [1, 1], 'pa-vid-pre-slot').addService(googletag.pubads());
          window.googletag.pubads().enableSingleRequest();
          window.googletag.enableServices();
        });
        window.googletag.cmd.push(function () {
          window.googletag.pubads().addEventListener('slotRenderEnded', function (info) {
            if (paGlobal.vidFunctions.stats.prebidSlotRenderRec) {
              return;
            }
            paGlobal.vidFunctions.stats.prebidSlotRenderRec = !0;
            if (info.isEmpty == !1) {
              window.vidCont.style.maxHeight = 'auto';
              window.vidCont.style.maxHeight = '';
              window.vidCont.style.height = 'auto';
              window.vidCont.style.position = 'relative';
              paGlobal.log.info('received fill for prebid video');
            } else if (info.isEmpty == !0) {
              paGlobal.log.info('no fill for prebid video');
            }
          });
        });
        var preVidDiv = document.createElement('div');
        preVidDiv.id = 'pa-vid-pre-slot';
        var preVidDivScript = document.createElement('script');
        if (window.flNonce) preVidDivScript.nonce = window.flNonce;
        preVidDivScript.innerHTML = `googletag.cmd.push(function(){googletag.display('pa-vid-pre-slot');})`;
        try {
          window.vidCont.appendChild(preVidDiv);
          preVidDiv.appendChild(preVidDivScript);
        } catch (e) {
          paGlobal.log.err('failed to add prebid video div to page: ' + e);
        }
      },
      callDisplay: () => {
        if (paGlobal.vidFunctions.stats.displayCalled) {
          return;
        }
        paGlobal.log.info('calling display after video');
        paGlobal.vidFunctions.stats.displayCalled = !0;
        paGlobal.createInner(window.vidPli, window.vidCi);
      },
      listen: {
        newVidEvts: {
          impression: () => {
            paGlobal.vidFunctions.stats.filled = !0;
            paGlobal.vidFunctions.imp();
            try {
              document.dispatchEvent(paGlobal.fakeScroll);
            } catch (e) {}
          },
          error: () => {
            console.log('error fired');
            paGlobal.vidFunctions.noImp();
          },
          complete: () => {
            window.vidDiv.onmouseenter = null;
            if (!paGlobal.pls[window.vidPli].vidp.contentLink) {
              paGlobal.vidFunctions.finished();
            }
          },
          close: () => {
            paGlobal.remove(parseInt(window.vidPli), window.vidCi, window.vidUi);
          }
        },
        imp: () => {
          if (paGlobal.pls[window.vidPli].vidp.live) {
            if (paGlobal.pls[window.vidPli].vidp.powerad) {
              if (paGlobal.pls[window.vidPli].vidp.newVidScript) {
                // listener added at initiation
              } else {
                window.vid.api.on('impression', function () {
                  paGlobal.vidFunctions.stats.filled = !0;
                  paGlobal.vidFunctions.imp();
                  try {
                    document.dispatchEvent(paGlobal.fakeScroll);
                  } catch (e) {}
                });
                window.vid.api.on('error', function () {
                  paGlobal.vidFunctions.noImp();
                });
              }
            } else {
              var playerInstance = paGlobal.vidFunctions.playerInstance;
              playerInstance.on('adImpression', function () {
                paGlobal.vidFunctions.stats.filled = !0;
                paGlobal.vidFunctions.imp();
              });
              playerInstance.on('adError error', function () {
                paGlobal.vidFunctions.noImp();
              });
            }
          } else {
            if (paGlobal.pls[window.vidPli].vidp.powerad) {
              if (paGlobal.pls[window.vidPli].vidp.newVidScript) {
                console.warn("you can't run video without live demand connected");
              } else {
                paGlobal.log.err("Powerad can't run direct video's yet, sorry");
                vid.api.removeAllEvts();
              }
            } else {
              paGlobal.vidFunctions.imp();
              paGlobal.vidFunctions.playerInstance.on('error adError', function () {
                paGlobal.vidFunctions.noImp();
              });
            }
          }
        },
        mouse: () => {
          window.vidDiv.onmouseenter = function () {
            if (paGlobal.vidFunctions.vidParams.userClicked) {
              window.vidDiv.onmouseenter = null;
              if (paGlobal.pls[window.vidPli].vidp.powerad) {
                if (paGlobal.pls[window.vidPli].vidp.newVidScript) {
                  paGlobal.data[window.vidUi].vidInfo.player.muted = false;
                } else {
                  vid.api.unmute();
                }
              } else {
                paGlobal.vidFunctions.playerInstance.setMute(!1);
              }
            }
          };
        },
        view: () => {
          if (paGlobal.vidFunctions.inView() && document.visibilityState !== 'hidden') {
            if (!paGlobal.vidFunctions.stats.added) {
              // paGlobal.vidFunctions.addVideo();
            } else {
              if (paGlobal.vidFunctions.stats.started) {
                if (paGlobal.vidFunctions.stats.playing) {
                } else {
                  if (!paGlobal.vidFunctions.stats.finished) {
                    if (!paGlobal.vidFunctions.vidParams.clickToPlay) {
                      // paGlobal.vidFunctions.play();
                    }
                  }
                }
              }
              if (paGlobal.vidFunctions.stats.contentStarted && !paGlobal.vidFunctions.stats.contentPlaying) {
                paGlobal.vidFunctions.resumeContent();
              }
            }
          } else {
            if (paGlobal.vidFunctions.stats.opened && !paGlobal.vidFunctions.stats.removed) {
              if (paGlobal.vidFunctions.stats.started) {
                if (paGlobal.vidFunctions.stats.playing) {
                  // paGlobal.vidFunctions.pause();
                }
              }
            }
            if (paGlobal.vidFunctions.stats.contentStarted && paGlobal.vidFunctions.stats.contentPlaying) {
              paGlobal.vidFunctions.pauseContent();
            }
          }
        }
      },
      pauseContent: () => {
        paGlobal.vidFunctions.stats.contentPlaying = false;
        paGlobal.log.info('pause video content');
        paGlobal.plData[window.vidPli].vid.pause();
      },
      resumeContent: () => {
        if (!paGlobal.vidFunctions.stats.contentFinished) {
          paGlobal.vidFunctions.stats.contentPlaying = true;
          paGlobal.log.info('play video content');
          paGlobal.plData[window.vidPli].vid.play();
        }
      }
    },
    video: (pli, ci, ui) => {
      window.vidPli = pli;
      window.vidCont = paGlobal.cData[ci].div;
      window.vidCi = ci;
      window.vidDiv = paGlobal.data[ui].div;
      window.vidUi = ui;
      paGlobal.vidFunctions.stats = {vidCalled: !0, position: 'inContent', innerAdded: !1, opened: !1, started: !1, playing: !1, videoClosed: !1, recalled: 0, removed: !1, mute: !0};
      paGlobal.vidFunctions.vidParams = {type: paGlobal.pls[window.vidPli].vidp.t, position: paGlobal.pls[window.vidPli].vidp.p, atSelector: paGlobal.pls[window.vidPli].vidp.fas, maxRecall: paGlobal.pls[window.vidPli].vidp.nor, keepOpen: paGlobal.pls[window.vidPli].vidp.ko, displayAfter: paGlobal.pls[window.vidPli].vidp.dp, userClicked: !1, prebid: paGlobal.pls[window.vidPli].vidp.prebid, clickToPlay: paGlobal.pls[window.vidPli].vidp.ctp};
      if (paGlobal.pls[window.vidPli].vidp.prebid) {
        paGlobal.vidFunctions.vidParams.prebidParams = paGlobal.pls[window.vidPli].vidp.prebidParams;
      }
      if (paGlobal.pls[window.vidPli].vidp.t == 'interstitial') {
        paGlobal.vidFunctions.stats.position = 'interstitial';
      }
      function toggleUserClicked() {
        paGlobal.vidFunctions.vidParams.userClicked = !0;
        document.removeEventListener('click', toggleUserClicked);
      }
      document.addEventListener('click', toggleUserClicked);
      if (!window.vidCont) {
        paGlobal.log.warn("cant add video, as container wasn't fount");
        return;
      }
      if (paGlobal.pls[window.vidPli].st.ora) {
        window.vidCont.style.height = window.vidCont.offsetWidth * 0.5625 + 'px';
        window.vidCont.style.maxHeight = window.vidCont.offsetWidth * 0.5625 + 'px';
      }
      // if (paGlobal.pls[window.vidPli].vidp.newVidScript) {
        // new video takes care of viewability
        paGlobal.vidFunctions.addVideo();
        paGlobal.vidFunctions.listen.view(paGlobal.pls[window.vidPli], window.vidCont, window.vidDiv);
        document.addEventListener('scroll', paGlobal.vidFunctions.listen.view, {passive: !0});
        document.addEventListener('visibilitychange', paGlobal.vidFunctions.listen.view);
        return;
      // }
    },
    urlChangeListener: () => {
      paGlobal.currentUrl = location.href;
      setInterval(function () {
        if (paGlobal.currentUrl !== location.href) {
          setTimeout(paGlobal.paReset, 10);
        }
      }, paGlobal.urlCLTo || 500);
    },
    paReset: () => {
      paGlobal.log.info('url change detected');
      paGlobal.currentUrl = location.href;
      paGlobal.dispatchEvent('url_changed');
      try {
        document.querySelectorAll('[id^=ad_is]').forEach(i => {
          try {
            i.remove();
          } catch (e) {}
        });
      } catch (e) {}
      try {
        document.querySelector('.ut_container').remove();
      } catch (e) {}
      const plIds = Object.keys(paGlobal.plData);
      plIds.forEach(pli => paGlobal.resetPl(pli));
      paGlobal.plData = {};
      paGlobal.cData = {};
      paGlobal.data = {};
      document.querySelectorAll('.pa-observer-px').forEach(x => x.remove());
      try {
        delete paGlobal.vidFunctions.stats;
      } catch (e) {
        paGlobal.vidFunctions.stats = {};
      }
      paGlobal.pageId = Math.round(Math.max(Math.random() * 1000000000)) + 1000000000;
      paGlobal.injectLoopFired = !1;
      paGlobal.reporting.x({pub: location.hostname, path: location.pathname, width: paGlobal.screenDimensions.w, type: 'pageView', referrer: document.referrer, v: window._pa_v, i: Math.random(), timeDif: Date.now()});
      paGlobal.pbjsLoaded = false;
      paGlobal.initialized = false;
      paGlobal.pls = [];
      paGlobal.urlChangeCallPlacements()
    },
    urlChangeCallPlacements: () => {
      if (!paGlobal.urlCLSelector) return paGlobal.getPlacements();

      if (paGlobal.urlCLSelectorInt) clearInterval(paGlobal.urlCLSelectorInt);
      if (document.querySelector(paGlobal.urlCLSelector)) return paGlobal.getPlacements();
      paGlobal.log.info('url change will wait for selector before calling PLs');
      let called = false;
      paGlobal.urlCLSelectorInt = setInterval(() => {

        if (document.querySelector(paGlobal.urlCLSelector)) {
          clearInterval(paGlobal.urlCLSelectorInt);
          called = true;
          paGlobal.initialized = false;
          paGlobal.pls = [];
          paGlobal.log.info('url change selector found');
          paGlobal.getPlacements();
        }
      }, 100);
      setTimeout(() => {
        if (!called) {
          paGlobal.log.info('url change selector timed out, will call PLs now');
          clearInterval(paGlobal.urlCLSelectorInt);
          paGlobal.initialized = false;
          paGlobal.pls = [];
          paGlobal.getPlacements();
        }
      }, 4000);
    },
    callHBPrebid: () => {
    },
    pbjsWrapperV: null,
    pbjsVersionsLoaded: {},
    pbjsFiredFromPls: false,
    pbjsWrapperLoaded: function (v, firedFromPls) {
      if (firedFromPls) {
        paGlobal.pbjsFiredFromPls = true;
        if (!paGlobal.pbjsVersionsLoaded[parseFloat(paGlobal.pbjsWrapperV) || 0]) {
          return;
        }
      } else {
        paGlobal.pbjsVersionsLoaded[parseFloat(v) || 0] = true;
        if (!paGlobal.pbjsFiredFromPls) {
          return;
        }
      }
      if ((parseFloat(v) || 0) === (parseFloat(paGlobal.pbjsWrapperV) || 0)) {
        window.pa_pbjs_fw = window[`pa_pbjs_fw${paGlobal.pbjsWrapperV || '1.1'}`];
        paGlobal.pbjsLoaded = true;
        paGlobal.log.info('pbjs loaded');
        const evt = new Event('wPbjsLoaded');
        document.dispatchEvent(evt);
      }
    },
    callHBPbjs: () => {
      paGlobal.callHBPrebid();

      paGlobal.pwListen = window.pwListen = (event, data) => {
        const payload = JSON.parse(data);

        paGlobal.log.info(`pwListen ${event} ${data}`);

        const entity = Object.values(paGlobal.data).find(({ v3id }) => v3id && v3id == payload.placementId);

        if (!entity) {
          paGlobal.log.info(`Cannot find related data for placementId = ${payload.placementId}`);
          return;
        }

        const { pli, ci, ui } = entity;

        switch (event) {
          case 'bidWon': {
            paGlobal.log.info(`Handle event ${event} for ui = ${ui}, pli = ${pli}, ci = ${ci}`);

            if (entity.pbjsBidWonFired) { return };

            entity.pbjsBidWonFired = true;
            entity.prebidSize = [payload.width, payload.height];

            paGlobal.data[ui].demand.s = entity.prebidSize;
            paGlobal.data[ui].demand.cs = entity.prebidSize;
            paGlobal.openAd(pli, ci, ui, true);
            break;
          }

          case 'gpt.event.slotRenderEnded': {
            paGlobal.log.info(`Handle event ${event} for ui = ${ui}, pli = ${pli}, ci = ${ci}`);

            if (payload.creativeId === 138340605220) {
              payload.isEmpty = true;
              paGlobal.log.info('unit ui (pl pli) received FP impression');
            };

            if (!payload.isEmpty) {
              if (payload.size && payload.size[0] == 0 && payload.slot && payload.slot && payload.slot.getSizes().includes("fluid")) {
                paGlobal.data[ui].demand.fluid = true
              } else {
                paGlobal.data[ui].demand.fluid = false
              };
              paGlobal.log.info(`Sizes for ui = ${ui}, pli = ${pli}, ci = ${ci} ${JSON.stringify(entity.pSizes || [])}`);
              if (entity.pSizes && entity.pSizes[0]) {
                let amzn_win, cDoc = paGlobal.data[ui].frame.contentDocument?.querySelector('iframe') && paGlobal.data[ui].frame.contentDocument?.querySelector('iframe').contentWindow;
                for (let a = 0; a < 5; a++) {
                  if (cDoc && cDoc.amzn_win) {
                    amzn_win = cDoc.amzn_win;
                    break;
                  };
                  try {
                    cDoc = cDoc.document.querySelector('iframe').contentWindow
                  } catch (e) {
                    break;
                  }
                };
                if (amzn_win) {
                  if ((amzn_win.amzSize && amzn_win.amzSize[0]) || (amzn_win.adUnitSize && amzn_win.adUnitSize[0])) {
                    entity.amzSize = amzn_win.amzSize || amzn_win.adUnitSize
                  }
                  try {
                    let f = paGlobal.data[ui].frame.contentDocument?.querySelector('iframe[id^="google_ads_iframe_/"]'), fSize = [parseInt(f.width), parseInt(f.height)];
                    if (fSize[0] && fSize[0] != 0) {
                      entity.amzSize = fSize;
                    }
                  } catch (e) { }
                };
                paGlobal.data[ui].demand.s = entity.prebidSize || entity.amzSize || payload.size;
                paGlobal.log.info(`ui = ${ui}, pli = ${pli}, ci = ${ci}, result sizes = ${JSON.stringify(paGlobal.data[ui].demand.s || [])}`);
                entity.sizeFired = true;
              } else {
                paGlobal.log.info(`ui = ${ui}, pli = ${pli}, ci = ${ci}, using sizes from event`);
                paGlobal.data[ui].demand.s = payload.size;
              }
              paGlobal.impListener(pli, ci, ui, true);
            } else if (payload.isEmpty == !0) {
              paGlobal.impListener(pli, ci, ui, false);
            }
            break;
          }

          case 'apAds': {
            paGlobal.log.info(`Handle event ${event} for ui = ${ui}, pli = ${pli}, ci = ${ci}`);

            if (payload.bidder === 'undertone' && payload.removeCode) {
              document
                .querySelector('head')
                .appendChild(document.createElement('script'))
                .innerHTML = `setTimeout(function() {try{window.document.querySelector('.ut_container').remove();} catch(e) {console.log('error removing apAds ad (undertone):', e.toString());}}, ${payload.gumgumRemovalTime})`
            }

            paGlobal.log.info('pa info apAds event now fired');
            paGlobal.data[ui].hbFunctions.stopRefresh();
            break;
          }

          case 'apAds_line': {
            paGlobal.log.info(`Handle event ${event} for ui = ${ui}, pli = ${pli}, ci = ${ci}`);

            paGlobal.log.info('pa info: apAds_line event now fired');
            paGlobal.data[ui].hbFunctions.changeHeight();
            break;
          }

          case 'apAds_x': {
            paGlobal.log.info(`Handle event ${event} for ui = ${ui}, pli = ${pli}, ci = ${ci}`);

            paGlobal.log.info('pa info apAds_x event now fired');
            paGlobal.data[ui].hbFunctions.removeAd();
            break;
          }

          case 'apAds_hide': {
            paGlobal.log.info(`Handle event ${event} for ui = ${ui}, pli = ${pli}, ci = ${ci}`);

            if (payload.bidder === 'gumgum') {
              document
                .querySelector('head')
                .appendChild(document.createElement('script'))
                .innerHTML = `setTimeout(function() {for(let i of window.document.querySelectorAll('[id^=ad_is]')) {try{i.remove();} catch(e) {console.log('error removing apAds ad (gumgum):', e.toString());}}}, ${payload.gumgumRemovalTime})`;
            } else if (bidder === '33across') {
              document
                .querySelector('head')
                .appendChild(document.createElement('script'))
                .innerHTML = `setTimeout(function() {for(let i of window.document.querySelectorAll('[class^="ttx"],[id^="tynt"]')) {try{i.remove();} catch(e) {console.log('error removing apAds ad (33across):', e.toString());}}}, ${payload.gumgumRemovalTime})`;
            }

            paGlobal.log.info('pa info apAds_hide event now fired');
            paGlobal.data[ui].hbFunctions.hideAd();
            break;
          }

          case 'apAds_div': {
            paGlobal.log.info(`Handle event ${event} for ui = ${ui}, pli = ${pli}, ci = ${ci}`);

            paGlobal.log.info('pa info apAds_div event now fired');
            paGlobal.log.info(payload.detail);
            paGlobal.data[ui].hbFunctions.newDiv(payload.detail, payload.bidder === 'teads');
            break;
          }

          case 'apAds_teads': {
            paGlobal.log.info(`Handle event ${event} for ui = ${ui}, pli = ${pli}, ci = ${ci}`);

            paGlobal.log.info('pa info apAds_teads event now fired');
            paGlobal.log.info(payload.detail);
            paGlobal.data[ui].hbFunctions.hideAndStop(payload.detail);
            break;
          }
        }
      };

      console.trace('callHBPbjs');
      window.addEventListener('message', (e) => {
        if (e.origin !== location.origin || !e.data.event) {
          return;
        }

        if (e.data.event === 'ad.slot.ready' && e.data.ui !== undefined) {
          paGlobal.log.info(`ad.slot.ready: ui=${e.data.ui} pli=${paGlobal.data[e.data.ui].pli}`);
          if (paGlobal.data[e.data.ui].fallbackTimeout) {
            paGlobal.log.info(`clear fallback timeout ui=${e.data.ui}`)
            clearTimeout(paGlobal.data[e.data.ui].fallbackTimeout);
          }
          paGlobal.callHBAuction(e.data.ui);
        }
      });

      ['3.0'].forEach(v => {
        if (window[`pa_pbjs_fw${v}`] && document.querySelector(`#pa-pbjs-frame${v.replace('.', '')}`)) {
          paGlobal.pbjsWrapperLoaded(v);
          return;
        }
        const pbjsFrame = document.createElement('iframe');
        pbjsFrame.src = 'about:blank';
        pbjsFrame.setAttribute('frameborder', '0');
        pbjsFrame.setAttribute('marginwidth', '0');
        pbjsFrame.setAttribute('marginheight', '0');
        pbjsFrame.setAttribute('scrolling', 'no');
        pbjsFrame.style.display = 'none';
        pbjsFrame.id = `pa-pbjs-frame${v.replace('.', '')}`;
        if (window.flNonce) pbjsFrame.setAttribute('sandbox', 'allow-forms allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-top-navigation-by-user-activation');
        document.body.appendChild(pbjsFrame);
        const pbjsFrameD = pbjsFrame.contentDocument;
        window[`pa_pbjs_fw${v}`] = pbjsFrame.contentWindow;
        window.pa_prebid_fw = pbjsFrame.contentWindow;
        pbjsFrameD.open();
        pbjsFrameD.write(`<html><head>
            <script${window.flNonce ? ` nonce="${window.flNonce}"` : ''}>var pbjs = pbjs || {};pbjs.que = pbjs.que || [];var loadPrebid = function () {if (!prebidLoaded) {prebidLoaded = true;var pbs = document.createElement('script');pbs.type = 'text/javascript';pbs.async = true;pbs.src = '${paGlobal.getHbDataPbjsPath()}';${window.flNonce ? `pbs.nonce='${window.flNonce}';` : ''}document.head.appendChild(pbs);}};${window.PWT ? 'var prebidLoaded = false;loadPrebid();' : `var PWT = {};var prebidLoaded = false;PWT.isLoaded = function () {loadPrebid();};setTimeout(loadPrebid, 100);(function () {var purl = window.location.href;var url = '//ads.pubmatic.com/AdServer/js/pwt/157577/2378/';var profileVersionId = '';if (purl.indexOf('pwtv=') > 0) {var regexp = /pwtv=(.*?)(&|$)/g;var matches = regexp.exec(purl);if (matches.length >= 2 && matches[1].length > 0) {profileVersionId = '/' + matches[1];}}var wtads = document.createElement('script');wtads.async = true;wtads.type = 'text/javascript';wtads.src = url + profileVersionId + '/pwt.js';${window.flNonce ? `wtads.nonce='${window.flNonce}';` : ''}var node = document.getElementsByTagName('script')[0];node.parentNode.insertBefore(wtads, node);})();`}</script>
            <script src="https://hb.brainlyads.com/pbjs_wrapper.v${v}.js"${window.flNonce ? ` nonce="${window.flNonce}"` : ''}></script><script${window.flNonce ? ` nonce="${window.flNonce}"` : ''}>parent.paGlobal.pbjsWrapperLoaded("${v}")</script>
            </head><body>
            </body></html>`);
        pbjsFrameD.close();
        pbjsFrame.onload = (e) => {
          paGlobal.log.info('onload');
          paGlobal.pbjsWrapperLoaded(paGlobal.pbjsWrapperV, true);
        };
      });
    },
    keyValues: [['script2', false]],
    setKeyValue: function (key, value) {
      if (!key) return console.warn('setKeyValue, no key received');
      const keyIndex = paGlobal.keyValues.filter(x => x[0] === key);
      if (keyIndex[0]) {
        return (paGlobal.keyValues[paGlobal.keyValues.indexOf(keyIndex[0])] = [key, value]);
      }
      paGlobal.keyValues.push([key, value]);
    },
    getVarFromObject: (obj, str) => {
      if (!obj) {
        return null;
      }
      if (!str.includes('.')) {
        return obj[str];
      }
      var dotIndex = str.indexOf('.');
      return paGlobal.getVarFromObject(obj[str.substring(0, dotIndex)], str.substr(dotIndex + 1));
    },
    addKeyValues: function (kvs) {
      Object.entries(kvs).forEach(kv => {
        var soFar;
        if (!kv[0].includes('.')) {
          soFar = window[kv[0]];
        } else {
          soFar = window;
          for (let x of kv[0].split('.')) {
            if (soFar[x]) {
              soFar = soFar[x];
            } else {
              soFar = null;
              break;
            }
          }
        }
        if (soFar) {
          paGlobal.keyValues.push([kv[1], soFar]);
        }
      });
    },
    getRefCatKV: () => {
      var referrerCategoryList = {
        google: 'Search',
        'search.yahoo': 'Search',
        yandex: 'Search',
        bing: 'Search',
        duckduckgo: 'Search',
        ecosia: 'Search',
        youtube: 'Social',
        twitter: 'Social',
        facebook: 'Social',
        instagram: 'Social',
        reddit: 'Social'
      };
      var referrerCategory = '';
      var ref = document.referrer.toLowerCase();
      if (!ref) {
        return 'Direct';
      }
      for (let refCat of Object.entries(referrerCategoryList)) {
        if (ref.includes(refCat[0])) {
          return refCat[1];
        }
      }
      var domain = document.domain;
      domain = domain.replace(/(https:|http:)(\/\/www.|\/\/)/, '');
      var domainReg = new RegExp(domain);
      var refDomain = ref.replace('://www.', '://').replace('https://', '').replace('http://', '').split('/')[0];
      var refDomainReg = new RegExp(refDomain);
      if (domainReg.test(refDomain) || refDomainReg.test(domain)) {
        return 'Domain';
      }
      return 'Referral';
    },
    directInjectWaiting: [],
    directInject: function (pli, elem) {
        const hasElem = {};
        for (let i = 0; i < window.frames.length; i++) {
          try {
            if (window.frames[i].document.contains(elem)) {
              hasElem[window.frames[i].location.href] = window.frames[i];
            }
          } catch {
          }
        }
        for (const [href, frame] of Object.entries(hasElem)) {
          try {
            frame.window.pwListen = paGlobal.pwListen;
            paGlobal.log.info(`assign listener for ${pli} ${href}`);
          } catch {
            paGlobal.log.warn(`cannot assing message listener for child iframe: ${pli} ${href}`);
          }
        }

      if ((!paGlobal.successRes || (paGlobal.eu && !paGlobal.consentReady)) && !paGlobal.directInjectWaiting.some(x => x.pli === pli && x.elem === elem)) {
        paGlobal.directInjectWaiting.push({pli, elem});
        if (paGlobal.diWaitInt) return;
        paGlobal.diWaitInt = setInterval(() => {
          if (paGlobal.successRes && (!paGlobal.eu || (paGlobal.eu && paGlobal.consentReady))) {
            clearInterval(paGlobal.diWaitInt);
            paGlobal.directInjectWaiting.forEach(x => paGlobal.directInject(x.pli, x.elem));
          }
        }, 100);
        return;
      }
      if (!paGlobal.pls[pli]) return paGlobal.log.info(`pl ${pli} not found for direct inject`);
      if (paGlobal.pls[pli].t !== 'multiInsert') return paGlobal.log.info(`skipping direct inject on pl ${pli}, as its type is ${paGlobal.pls[pli].t} and not multiInsert`);
      paGlobal.log.info(`Adding direct-inject unit for pl ${pli}`);
      paGlobal.createContainer(pli, elem);

      // nmbid_reporting
      if (window.nmbidEvents && window.nmbidEvents.includes(pli)) {
        const evtIds = window.nmbidEvtIds && window.nmbidEvtIds[pli];
        let uid = '',
          hbId = '';
        if (evtIds) {
          uid = evtIds.uid || '';
          hbId = evtIds.hb_id || '';
          delete window.nmbidEvtIds[pli];
        }
        const r = document.createElement('iframe');
        r.src = `https://powerad.ai/nmbid_reporting/man_call?v=3&type=dirInj&cb=${Math.random()}&uid=${uid}&hb_id=${hbId}&url=${location.href}&pls=${pli}`;
        r.style = 'height:0;width:0;display:none;';
        document.head.appendChild(r);
        window.nmbidEvents.splice(window.nmbidEvents.indexOf(pli), 1);
      }
    },
    loadAdPushUp: () => {
      const adPushUpIds = {
        'imgflip.com': 44955,
        'theblaze.com': 44956,
        'mediaite.com': 44957,
        'whatfontis.com': 44958,
        'tunebat.com': 44959,
        'uscardforum.com': 44961,
        'imamother.com':45164,
        'fleaflicker.com':45160,
        'getyarn.io':45161,
        'scamadviser.com':45162,
        'gamewith.net':45163,
        'letsrun.com':45166,
        'tvtv.us': 45302,
        'scorebooklive.com':  45460,
        'leaguesecretary.com': 45462,
        'tweaksforgeeks.com': 45463,
        'kicksonfire.com': 45464,
        'newslive.com': 45465,
        'amgreatness.com': 45467,
        'lawyersgunsmoneyblog.com': 45468,
        'winnersandwhiners.com': 45469,
        'fifaratings.com': 45470,
        'londynek.net': 45471
      }
      const s = document.createElement('script')
      let domain = document.domain || new URL(window.location.href).hostname
      if(domain.startsWith('www.')) domain = domain.replace('www.','')
      const id = adPushUpIds[domain]
      if(!id) return
      s.src = `https://delivery.adrecover.com/${id}/adRecover.js`
      document.head.appendChild(s)
    },
    plsFailedReq: () => {
      paGlobal.loadAdPushUp()
    },
    getPlacements: function () {
      if (paGlobal.pls.length && paGlobal.initialized) {
        return;
      }
      paGlobal.uuid = paGlobal.getAuctionId();
      paGlobal.reportMemory();

      if (!paGlobal.marks.get_pls_start) {
        performance.mark('get_pls_start');
        paGlobal.marks.get_pls_start = true;
      }
      paGlobal.initialTabState = document.visibilityState !== 'hidden';
      document.addEventListener('visibilitychange', () => performance.mark('tab_toggle'), {once: true});
      var plReq = new XMLHttpRequest();
      plReq.open('GET', 'https://powerad.ai/pubPls/?width=' + paGlobal.screenDimensions.w + '&url=' + encodeURIComponent(window.location.href) + '&pbjsV=3.0', !0);
      plReq.withCredentials = !0;
      plReq.send();
      plReq.onerror = paGlobal.plsFailedReq;
      plReq.onabort = paGlobal.plsFailedReq;
      plReq.onreadystatechange = function () {
        if (plReq.readyState == 4) {
          if (!paGlobal.fLoad) {
            paGlobal.fLoad = !0;
          }
          try {
            var pls = JSON.parse(plReq.response);
          } catch (e) {
            if (location.href.includes('pa_debug=true')) {
              paGlobal.debug = true;
              paGlobal.log.err(`failed to parse pls\n${e}`);
            }
            paGlobal.successRes = !1;
            paGlobal.plsRetrieved = true;
            paGlobal.prepareForInject();
            return;
          }
          if (!paGlobal.debug && pls.debug) {
            paGlobal.debug = pls.debug;
          }
          if (pls.err) {
            paGlobal.log.warn('received an error: ' + pls.err);
            paGlobal.pubPlsErr = pls.err;
            paGlobal.successRes = !1;
            return;
          }
          paGlobal.pubI = parseInt(pls.pubI);
          paGlobal.pubName = pls.pubName;
          paGlobal.pls = pls.pls;
          paGlobal.adYield = pls.adYield;
          paGlobal.pbjsPath = pls.pbjsPath;
          if (document.readyState == 'loading') {
            document.addEventListener('DOMContentLoaded', paGlobal.callHBPbjs);
          } else {
            paGlobal.callHBPbjs();
          } 
          paGlobal.successRes = !0;
          paGlobal.heavyAdsObserver?.observe();
          if (pls.adLight && Math.floor(Math.random() / (1 / (pls.adLightPace || 1))) === 0) {
            const s = document.createElement('script');
            s.src = 'https://tagan.adlightning.com/nextmillenium/op.js';
            
            // dansdeals special adlight script
            let domain = document.domain || new URL(window.location.href).hostname
            if (domain.startsWith('www.')) domain = domain.replace('www.','')
            if (domain === 'dansdeals.com') s.src = 'https://tagan.adlightning.com/nextmillenium-dansdeals/op.js';
            if (domain === 'whyy.org') s.src = 'https://tagan.adlightning.com/nextmillenium-whyy/op.js';
            if (domain === 'billypenn.com') s.src = 'https://tagan.adlightning.com/nextmillenium-billypenn/op.js';
            if (domain === 'junkmail.co.za') s.src = 'https://tagan.adlightning.com/nextmillenium-junkmail/op.js';


            if (window.flNonce) s.nonce = window.flNonce;
            document.head.appendChild(s);
          }
          if (pls.sandboxFrames) paGlobal.sandboxFrames = true;
          if (pls.geoEdge) {
            paGlobal.geoEdge = true;
            paGlobal.geoEdgePace = pls.geoEdgePace || 1;
          }
          paGlobal.device = pls.device;
          paGlobal.plsServer = pls.server || '';
          if (pls.cmp) {
            pls.cmp.split(',').forEach(c => {
              var s = document.createElement('script');
              s.src = c.trim();
              if (window.flNonce) s.nonce = window.flNonce;
              document.querySelector('head').appendChild(s);
            });
          }
          if (pls.gatID) {
            var gatS = document.createElement('script');
            gatS.src = 'https://www.googletagmanager.com/gtag/js?id=' + pls.gatID;
            document.head.appendChild(gatS);
            window.dataLayer = window.dataLayer || [];
            function gtag() {
              window.dataLayer.push(arguments);
            }
            gtag('js', new Date());
            gtag('config', pls.gatID);
          }
          if (pls.liverampAtsHref) {
            const s = document.createElement('script');
            s.async = 'true';
            s.defer = 'true';
            s.src = pls.liverampAtsHref;
            document.head.appendChild(s);

            if (paGlobal.liverampExtraData) {
              src.onload = () => {
                window.addEventListener('envelopeModuleReady', () => {
                  paGlobal.passUserData(paGlobal.liverampExtraData);
                  delete paGlobal.liverampExtraData;
                });
              }
            }
            document.head.appendChild(s);
          } else {
            paGlobal.log.info('Liveramp not configured. Remove user data')
            delete paGlobal.liverampExtraData;
          }
          if (pls.customJS) {
            const s = document.createElement('script');
            if (window.flNonce) s.nonce = window.flNonce;
            s.innerHTML = pls.customJS;
            document.head.appendChild(s);
          }
          if (pls.customCSS) {
            const cssTag = document.createElement('style');
            cssTag.innerHTML = pls.customCSS;
            document.head.appendChild(cssTag);
          }
          if (pls.audigent) {
            let audigentS = document.createElement('script');
            if (window.flNonce) audigentS.nonce = window.flNonce;
            audigentS.src = `https://a.ad.gt/api/v1/u/matches/251?url=${encodeURIComponent(window.location.href)}&ref=${encodeURIComponent(document.referrer)}`;
            document.head.appendChild(audigentS);
          }
          if (pls.captify) {
            let captifyS = document.createElement('script');
            if (window.flNonce) captifyS.nonce = window.flNonce;
            captifyS.src = 'https://p.cpx.to/p/12967/px.js';
            document.head.appendChild(captifyS);
          }
          if (pls.hbData) {
            pls.hbData.data.forEach(unit => {
              paGlobal.hbData[unit.unitId] = unit;
            });
          }
          if (pls.pbjsWrapperVersion) {
            if (!pls.abTestVersions || (pls.abTestVersions && Math.random() < 0.5)) {
              paGlobal.pbjsWrapperV = '3.0'; // pls.pbjsWrapperVersion;
            } else {
              paGlobal.pbjsWrapperV = '1.1';
            }
            paGlobal.abTestVersions = pls.abTestVersions;
          }
          paGlobal.pbjsWrapperLoaded(paGlobal.pbjsWrapperV, true);
          if (pls.bl) {
            paGlobal.bl = pls.bl;
          }
          if (pls.fPls) {
            paGlobal.fPls = pls.fPls;
          }
          if (pls.debug) {
            var rs = [],
            pbs = [],
            ms = [];
            for (let pli of Object.keys(paGlobal.pls)) {
              switch (paGlobal.pls[pli].s) {
                case 'r':
                  rs.push(pli);
                  break;
                case 'pb':
                  pbs.push(pli);
                  break;
                case 'm':
                  ms.push(pli);
                  break;
              }
            }
            paGlobal.log.info('received pls: \nActive: ' + rs.join(', ') + '\nPB: ' + pbs.join(', ') + '\nM: ' + ms.join(', ') + '\n' + (pls.geoInfo || ''));
          }
          paGlobal.atvc = pls.atvc || !1;
          paGlobal.us_p = '1---';
          paGlobal.__gdpr = '';
          paGlobal.getGdprString = function () {
            return '';
          };
          if (pls.ca) {
            paGlobal.checkCCPA(pls);
          }
          paGlobal.getUspapiString = function (relativeParentString) {
            if (!relativeParentString) relativeParentString = 'parent';
            return `window.__uspapi = ${relativeParentString}.window.__uspapi || function(c,v,cb){switch(c.toLowerCase()){case 'getuspdata':try{cb({uspString:'${paGlobal.us_p || ''}',version:1},true)}catch(e){return;}break;default:try{cb({uspString:'${paGlobal.us_p || ''}',version:1},true)} catch(e){return;}return;}};`;
          };
          if (pls.eu) {
            paGlobal.eu = !0;
            if (pls.cmpDelay > -1) {
              paGlobal.cmpDelay = pls.cmpDelay;
            }
          }
          if (paGlobal.eu) {
            paGlobal.log.info(`In EEU, attempting to access consent string. Will attempt for ${paGlobal.cmpDelay > -1 ? paGlobal.cmpDelay : 20} seconds`);
            paGlobal.checkGDPR();
          }
          // possible error: global var ?
          let refCatKv = ['referrerCategory', paGlobal.getRefCatKV() || 'Unknown'];
          if (paGlobal.keyValues.filter(kv => kv[0] === 'referrerCategory').length) {
            paGlobal.keyValues = paGlobal.keyValues.map(kv => {
              if (kv[0] === 'referrerCategory') return refCatKv;
              return kv;
            });
          } else {
            paGlobal.keyValues.push(refCatKv);
          }
          if (pls.keyValues) {
            paGlobal.addKeyValues(pls.keyValues);
          }
          paGlobal.urlCL = pls.urlCL;
          paGlobal.urlCLSelector = pls.urlCLSelector;
          performance.mark('pls_retrieved');
          paGlobal.plsRetrieved = true;
          paGlobal.prepareForInject();
          paGlobal.prepareVideoScript();
        }
      };
      paGlobal.initialized = true;
    },
    callVidScript: function (type, options) {
      options = options || {};
      if (paGlobal.callVidScriptPromise) return paGlobal.callVidScriptPromise;
      paGlobal.callVidScriptPromise = new Promise((res, rej) => {
        const vidScript = document.createElement('script');
        if (window.flNonce) vidScript.nonce = window.flNonce;
        if (type == 'power-player') {
          vidScript.src = `https://cdn.nextmillmedia.com/power-player/${options.powerPlayerV || 'latest'}/power-player.js`;
          const l = document.createElement('link');
          l.rel = 'stylesheet';
          l.href = `https://cdn.nextmillmedia.com/power-player/${options.powerPlayerV || 'latest'}/power-player.css`;
          document.head.appendChild(l);
        } else {
          vidScript.src = 'https://powerad.ai/vid_script.js';
        }
        document.head.appendChild(vidScript);
        vidScript.addEventListener('load', () => {
          return res();
        });
      });
      return paGlobal.callVidScriptPromise;
    },
    prepareVideoScript: async function () {
      const vidPl = Object.values(paGlobal.pls).find(pl => pl.vidp);
      if (vidPl) {
        const newVidPl =  vidPl.vidp.newVidScript
        if(newVidPl) {
          paGlobal.powerPlayerCalled = true;
          await paGlobal.callVidScript('power-player', {powerPlayerV: newVidPl.vidp.newVidVersion});
          paGlobal.powerPlayerLoaded = true;
        } else {
          paGlobal.callVidScript()
        }
      }
    },
    prepareForInject: function () {
      if (!paGlobal.plsRetrieved || !paGlobal.aauCheckComplete || !paGlobal.abpUserCheckComplete) return;
      paGlobal.reporting.x({ type: 'aau', aau: paGlobal.aau && !paGlobal.abpUser ? 1 : paGlobal.abpUser ? 2 : 0, pub: location.hostname, z: Math.random(), i: Math.random(), timeDif: Date.now() });
      paGlobal.log.info(`AdBlock-Plus User: ${paGlobal.abpUser || paGlobal.aau ? `true. Acceptable-Ads User: ${paGlobal.aau && !paGlobal.abpUser}` : 'false'}.`);
      if (paGlobal.abpUser) return;
      if (!paGlobal.aau) {
        Object.keys(paGlobal.pls).forEach(pli => {
          if (paGlobal.pls[pli].aa) {
            delete paGlobal.pls[pli];
            if (paGlobal.debug) {
              paGlobal.fPls[pli] = 'acceptable-ads';
            }
          }
        });
      }
      if (paGlobal.aau) {
        Object.keys(paGlobal.pls).forEach(pli => {
          if (!paGlobal.pls[pli].aa) {
            paGlobal.pls[pli].dgs = paGlobal.pls[pli].dgs.filter(dg => dg.type === 'live' && dg[dg.type].filter(d => d.acceptableAds)[0]);
            if (!paGlobal.pls[pli].dgs[0]) {
              delete paGlobal.pls[pli];
              if (paGlobal.debug) {
                paGlobal.fPls[pli] = 'acceptable-ads-user';
              }
            }
          }
        });
      }
      var readyToInjectTS = Date.now();
      if (document.readyState == 'loading') {
        document.addEventListener('DOMContentLoaded', function () {
          paGlobal.log.info('lost for body wait: ' + (Date.now() - readyToInjectTS));
          paGlobal.injectLoop();
        });
      } else {
        paGlobal.injectLoop();
      }
      if (paGlobal.urlCL && !paGlobal.urlChangeListenerAdded) {
        paGlobal.urlChangeListenerAdded = !0;
        paGlobal.urlChangeListener();
      }

      window.addEventListener(
        'resize',
        () => {
          paGlobal.screenDimensions = { w: document.documentElement.offsetWidth || window.innerWidth || screen.availWidth, h: window.innerHeight || screen.availHeight };
          paGlobal.plUnits.forEach(u => {
            if (paGlobal.pls[u.pli].t == 'adhesion') {
              paGlobal.plData[u.pli].reCalculate();
            }
            let prevShow = paGlobal.data[u.ui].showable.minMaxView;
            let prevFit = paGlobal.data[u.ui].showable.fitable;
            paGlobal.data[u.ui].showable.minMaxView = paGlobal.checkMinMaxView(u.pli, u.ci, u.ui);
            paGlobal.data[u.ui].showable.fitable = paGlobal.checkFitable(u.pli, u.ci, u.ui);
            if (prevShow !== paGlobal.data[u.ui].showable.minMaxView || prevFit !== paGlobal.data[u.ui].showable.fitable) {
              paGlobal.listen.viewListener(u.pli, u.ci, u.ui);
            }
            if (paGlobal.data[u.ui].scaleActive) paGlobal.scaleAd(u.pli, u.ci, u.ui);
          });
        },
        { passive: !0 }
      );
      document.addEventListener('visibilitychange', paGlobal.reporting.sendAll);
      window.addEventListener('pagehide', paGlobal.reporting.sendAll);
      window.addEventListener('beforeunload', paGlobal.reporting.sendAll);
      setTimeout(() => {
        paGlobal.fivePassed = true;
      }, 5000);
    },
    reporting: {
      sendAll: function () {
        const reportsArr = JSON.parse(localStorage.getItem('_pa_reports')) || [];
        if (!reportsArr[0]) {
          return;
        }
        reportsArr.forEach(r => (r.timeDif = Date.now() - r.timeDif));
        let success = navigator.sendBeacon(`https://reporting.powerad.ai/`, JSON.stringify(reportsArr));
        if (success) {
          localStorage.removeItem('_pa_reports');
        }
      },
      x: function (z) {
        const reportsArr = JSON.parse(localStorage.getItem('_pa_reports')) || [];
        reportsArr.push(_ds05un3[z.type](z));
        localStorage.setItem('_pa_reports', JSON.stringify(reportsArr));
        if (!paGlobal.reporting.waitingToSend) {
          paGlobal.reporting.waitingToSend = true;
          setTimeout(() => {
            paGlobal.reporting.waitingToSend = false;
            paGlobal.reporting.sendAll();
          }, 1500);
        }
      }
    },
    sendReport: (data) => {
      navigator.sendBeacon(`https://reporting.powerad.ai/`, JSON.stringify([data]));
    },
    checkCCPA: (pls) => {
      paGlobal.log.info('In California, CCPA functions in effect');
      if (pls.ccpaAutoOut) {
        paGlobal.us_p = '1NYN';
        paGlobal.log.info('Pub set to CCPA Auto Opt-Out.');
      } else {
        function getCCPAMan() {
          paGlobal.us_p = paGlobal.getCookie('usprivacy') || paGlobal.getCookie('us_privacy') || '1---';
        }
        if (window.__uspapi) {
          paGlobal.log.info('Found IAB CCPA Framework functions on page from pub');
          try {
            window.__uspapi('getUSPData', 1, function (us_p, s) {
              if (s) {
                paGlobal.us_p = (us_p && us_p.uspString.toUpperCase()) || '1---';
              } else {
                getCCPAMan();
              }
            });
          } catch (e) {
            getCCPAMan();
          }
        } else {
          paGlobal.log.info("Couldn't find IAB CCPA Framework functions on page from Pub, will try to get cookie manually");
          getCCPAMan();
        }
      }
    },
    checkGDPR: () => {
      let tcfListenerSet = false;
      let continueCalled = false;
      function continueInject(logMsg) {
        if (!continueCalled) {
          continueCalled = !0;
          clearInterval(consentInterval);
          paGlobal.consentReady = !0;
          paGlobal.log.info(logMsg);
          paGlobal.injectLoop();
        }
      }
      function tcfapiCallback(tcData, success) {
        if (continueCalled) {
          if (tcfListenerSet && tcData) window.__tcfapi('removeEventListener', 2, null, tcData.listenerId);
          return;
        }
        if (success && tcData.tcString && tcData.eventStatus !== 'cmpuishown') {
          continueInject('Consent string ready, starting inject');
          if (tcfListenerSet) window.__tcfapi('removeEventListener', 2, null, tcData.listenerId);
          return;
        }
        if (!tcfListenerSet) {
          tcfListenerSet = true;
          window.__tcfapi('addEventListener', 2, tcfapiCallback);
        }
      }
      setTimeout(
        () => {
          if (paGlobal.consentReady) return;
          continueInject("Couldn't get consent string, starting inject");
          paGlobal.reporting.x({type: 'gdpr', pubI: paGlobal.pubI, i: Math.random(), timeDif: Date.now()});
        },
        paGlobal.cmpDelay > -1 ? paGlobal.cmpDelay * 1000 : 20000
      );
      const consentInterval = setInterval(() => {
        if (window.__tcfapi) {
          clearInterval(consentInterval);
          paGlobal.log.info('__tcfapi found, waiting for consent string');
          window.__tcfapi('getTCData', 2, tcfapiCallback);
        }
      }, 50);
      paGlobal.getGdprString = function (relativeParentString) {
        // todo: when __gdpr = '' - update here to see that and return that instead
        if (!relativeParentString) relativeParentString = 'parent';
        return `if(${relativeParentString}.window.__tcfapi){__tcfapi = (p1, p2, p3) => parent.parent.window.__tcfapi(p1, p2, p3);}`;
      };
    },
    checkBl: (f) => {
      if (!paGlobal.bl) {
        return !0;
      }
      if (f.contentDocument && f.contentDocument.documentElement) {
        for (let i of paGlobal.bl) {
          if (f.contentDocument.documentElement.innerHTML.toLowerCase().indexOf(i.toLowerCase()) != -1) {
            return !1;
          }
        }
        for (let fr of f.contentDocument.querySelectorAll('iframe')) {
          if (!paGlobal.checkBl(fr)) {
            return !1;
          }
        }
        return !0;
      }
    },
    getCookie: function (name) {
      var result = '';
      var name = name + '=';
      var cookieArray = document.cookie.split(';');
      for (let i of cookieArray) {
        paGlobal.removeSpaces(i);
        if (i.indexOf(name) == 0) {
          result = i.substring(name.length, i.length);
          break;
        }
      }
      return result;
    },
    removeSpaces: function (t) {
      for (let a = 0; a < 100; a++) {
        if (t.charAt(0) == ' ') {
          t = t.substring(1);
        } else {
          break;
        }
      }
      return t;
    },
    passUserData: function (data) {
      if (data.phoneNumber) {
        window.atsenvelopemodule.setAdditionalData({ type: 'phoneNumber', id: data.phoneNumber });
      }
      if (data.phoneNumberHashes) {
        // SHA1
        window.atsenvelopemodule.setAdditionalData({ type: 'phoneNumberHashes', id: data.phoneNumberHashes });
      }
      if (data.emailHashes) {
        // SHA1, SHA256, MD5
        window.atsenvelopemodule.setAdditionalData({ type: 'emailHashes', id: data.emailHashes });
      }
      if (data.email) {
        window.atsenvelopemodule.setAdditionalData({ type: 'email', id: data.email });
      }
    },
    provideUserData: function (data) {
      if (window.atsenvelopemodule) {
        paGlobal.passUserData(data);
      } else if (window.ats) {
        window.addEventListener('envelopeModuleReady', () => {
          paGlobal.passUserData(data);
        });
      } else {
        paGlobal.liverampExtraData = data;
      }
    }
  };

  (async function () {
    const res = await fetch('https://powerad.ai/detect-aau?ch=2');
    paGlobal.aau = !res.ok;
  })()
    .catch(e => (paGlobal.aau = true))
    .finally(() => {
      paGlobal.aauCheckComplete = true;
      paGlobal.prepareForInject();
      performance.mark('aau_check');
    });
  (async function () {
    const res = await fetch('https://powerad.ai/detect-aau?ch=1');
    paGlobal.abpUser = !res.ok;
  })()
    .catch(e => (paGlobal.abpUser = true))
    .finally(() => {
      paGlobal.abpUserCheckComplete = true;
      paGlobal.prepareForInject();
      performance.mark('abp_check');
    });

  window.callUnitMan = function callUnitMan(pli) {
    console.log('call unit manually (' + pli + ')');
    if (paGlobal.successRes && (!paGlobal.eu || (paGlobal.eu && paGlobal.consentReady))) {
      if (paGlobal.pls[pli] && paGlobal.pls[pli].s == 'm') {
        paGlobal.startInject(pli);
      } else {
        console.warn("couldn't find placement: " + pli + ' in manual placement list');
      }
    } else {
      console.warn('called placement (pl ' + pli + ') before placements were received, will call again once placements are received');
      var callManAdAfterLoadInt = setInterval(function () {
        if (paGlobal.successRes && (!paGlobal.eu || (paGlobal.eu && paGlobal.consentReady))) {
          if (paGlobal.pls[pli] && paGlobal.pls[pli].s == 'm') {
            paGlobal.startInject(pli);
            clearInterval(callManAdAfterLoadInt);
          }
        }
      }, 100);
      setTimeout(function () {
        clearInterval(callManAdAfterLoadInt);
        if (paGlobal.successRes) {
          if (!paGlobal.plData[pli]) {
            if (paGlobal.pls[pli] && paGlobal.pls[pli].s == 'm') {
              paGlobal.startInject(pli);
            } else {
              console.warn("couldn't find placement: " + pli + ' in manual placement list');
            }
          }
        } else {
          console.warn('failed to get placements within timeout for manual call, canceling');
        }
      }, 10000);
    }
    // nmbid_reporting
    if (window.nmbidEvents && window.nmbidEvents.includes(pli)) {
      const evtIds = window.nmbidEvtIds && window.nmbidEvtIds[pli];
      let uid = '',
        hbId = '';
      if (evtIds) {
        uid = evtIds.uid || '';
        hbId = evtIds.hb_id || '';
        delete window.nmbidEvtIds[pli];
      }
      const r = document.createElement('iframe');
      r.src = `https://powerad.ai/nmbid_reporting/man_call?v=3&type=manCall&cb=${Math.random()}&uid=${uid}&hb_id=${hbId}&url=${location.href}&pls=${pli}`;
      r.style = 'height:0;width:0;display:none;';
      document.head.appendChild(r);

      window.nmbidEvents.splice(window.nmbidEvents.indexOf(pli), 1);
    }
  }

  if (!paGlobal.initialized) {
    paGlobal.getPlacements();
  }

})();
