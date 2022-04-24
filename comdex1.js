(this["webpackJsonpcomdex-web-app"] = this["webpackJsonpcomdex-web-app"] || []).push([[0], {
    1058: function(e, t, n) {},
    1135: function(e, t, n) {},
    1139: function(e, t, n) {},
    1150: function(e, t, n) {},
    1153: function(e, t, n) {},
    1179: function(e, t) {},
    1186: function(e, t) {},
    1232: function(e, t) {},
    1445: function(e, t) {},
    1446: function(e, t) {},
    1473: function(e, t) {},
    1485: function(e, t) {},
    1515: function(e, t) {},
    1578: function(e, t, n) {},
    1581: function(e, t, n) {},
    1582: function(e, t, n) {},
    1585: function(e, t, n) {},
    1586: function(e, t, n) {},
    1595: function(e, t, n) {},
    1596: function(e, t, n) {},
    1597: function(e, t, n) {},
    1598: function(e, t, n) {},
    1604: function(e, t, n) {},
    1605: function(e, t, n) {},
    1621: function(e, t, n) {
        "use strict";
        n.r(t);
        Boolean("localhost" === window.location.hostname || "[::1]" === window.location.hostname || window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
        var a = n(308)
          , i = n(24)
          , s = n(64)
          , c = n(735)
          , o = n(0)
          , l = n.n(o)
          , r = n(32)
          , d = n(5)
          , u = "POOLS_SET"
          , m = "POOL_SET"
          , b = "POOL_BALANCE_SET"
          , j = "POOL_DEPOSITS_SET"
          , v = "SPOT_PRICE_SET"
          , h = "POOL_BALANCE_FETCH_IN_PROGRESS"
          , p = "FIRST_RESERVE_COIN_DENOM_SET"
          , x = "SECOND_RESERVE_COIN_DENOM_SET"
          , f = "POOL_TOKEN_SUPPLY_SET"
          , O = "POOL_BALANCES_SET"
          , g = "POOLS_LIQUIDITY_LIST_SET"
          , N = function(e, t) {
            return {
                type: u,
                list: e,
                pagination: t
            }
        }
          , y = function(e) {
            return {
                type: m,
                value: e
            }
        }
          , C = function(e) {
            return {
                type: b,
                list: e
            }
        }
          , w = function(e) {
            return {
                type: h,
                value: e
            }
        }
          , _ = function(e) {
            return {
                type: v,
                value: e
            }
        }
          , D = function(e) {
            return {
                type: p,
                value: e
            }
        }
          , A = function(e) {
            return {
                type: x,
                value: e
            }
        }
          , k = (n(57),
        n(19))
          , S = "PAIRS_SET"
          , T = "PAIR_ID_SET"
          , E = "PAIR_SET"
          , I = "ASSETS_SET"
          , F = "OUT_ASSET_SET"
          , B = "IN_ASSET_SET"
          , R = "OUT_AMOUNT_SET"
          , M = "IN_AMOUNT_SET"
          , P = "COLLATERAL_RATIO_SET"
          , q = "COIN_STATS_FETCH_SUCCESS"
          , L = "VOLUME_CHART_DATA_SET"
          , U = "VOLUME_CHART_DATA_FETCH_ERROR"
          , V = "PRICE_CHART_DATA_SET"
          , H = "PRICE_CHART_DATA_FETCH_ERROR"
          , W = "RANGE_SET"
          , z = "TOTA_COLLATERAL_LIST_SET"
          , G = "PRICE_CHART_DATA_FETCH_IN_PROGRESS"
          , Q = "VOLUME_CHART_DATA_FETCH_IN_PROGRGESS"
          , X = n(736)
          , K = n.n(X)
          , Y = "https://test-campaign.comdex.one"
          , $ = n(126)
          , J = n.n($)
          , Z = n(185)
          , ee = n.n(Z)
          , te = new K.a
          , ne = function(e) {
            return {
                type: q,
                value: e
            }
        }
          , ae = function(e) {
            return {
                type: "COIN_STATS_FETCH_ERROR",
                message: e
            }
        }
          , ie = function(e) {
            return {
                type: L,
                data: e
            }
        }
          , se = function(e) {
            return {
                type: U,
                message: e
            }
        }
          , ce = function(e) {
            return {
                type: Q,
                value: e
            }
        }
          , oe = (n(58),
        n(28))
          , le = (n(192),
        n(106))
          , re = n(6)
          , de = (n(802),
        n(265))
          , ue = n(41)
          , me = n.n(ue)
          , be = n(79)
          , je = n(10)
          , ve = n.n(je)
          , he = n(164)
          , pe = {
            chainId: "test-1",
            chainName: "Comdex Test Chain",
            coinDenom: "CMDX",
            coinMinimalDenom: "ucmdx",
            coinDecimals: 6,
            prefix: "comdex",
            rpc: "https://test-rpc.comdex.one",
            rest: "https://test-rest.comdex.one",
            explorer: "https://dev-explorer.comdex.one"
        }
          , xe = n(12)
          , fe = n(190)
          , Oe = n(229)
          , ge = n(738)
          , Ne = n(134)
          , ye = new Ne.Registry([].concat(Object(xe.a)(he.defaultRegistryTypes), [["/comdex.vault.v1beta1.MsgCreateRequest", fe.MsgCreateRequest], ["/comdex.vault.v1beta1.MsgDepositRequest", fe.MsgDepositRequest], ["/comdex.vault.v1beta1.MsgWithdrawRequest", fe.MsgWithdrawRequest], ["/comdex.vault.v1beta1.MsgDrawRequest", fe.MsgDrawRequest], ["/comdex.vault.v1beta1.MsgRepayRequest", fe.MsgRepayRequest], ["/comdex.vault.v1beta1.MsgCloseRequest", fe.MsgCloseRequest], ["/comdex.liquidity.v1beta1.MsgSwapWithinBatch", Oe.MsgSwapWithinBatch], ["/comdex.liquidity.v1beta1.MsgCreatePool", Oe.MsgCreatePool], ["/comdex.liquidity.v1beta1.MsgDepositWithinBatch", Oe.MsgDepositWithinBatch], ["/comdex.liquidity.v1beta1.MsgWithdrawWithinBatch", Oe.MsgWithdrawWithinBatch], ["/comdex.auction.v1beta1.MsgPlaceBidRequest", ge.MsgPlaceBidRequest]]))
          , Ce = n(213)
          , we = function(e) {
            return _e(pe.rpc, e)
        }
          , _e = function(e, t) {
            Ce.Tendermint34Client.connect(e).then((function(e) {
                var n = new he.QueryClient(e)
                  , a = Object(he.createProtobufRpcClient)(n);
                t(null, a)
            }
            )).catch((function(e) {
                t(null === e || void 0 === e ? void 0 : e.message)
            }
            ))
        }
          , De = function() {
            var e = Object(be.a)(ve.a.mark((function e() {
                var t, n, a, i = arguments;
                return ve.a.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return t = i.length > 0 && void 0 !== i[0] ? i[0] : pe.chainId,
                            e.next = 3,
                            window.keplr.enable(t);
                        case 3:
                            return n = window.getOfflineSigner(t),
                            e.next = 6,
                            n.getAccounts();
                        case 6:
                            return a = e.sent,
                            e.abrupt("return", [n, a]);
                        case 8:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )));
            return function() {
                return e.apply(this, arguments)
            }
        }()
          , Ae = function() {
            var e = Object(be.a)(ve.a.mark((function e(t, n, a) {
                var i, s, c, o;
                return ve.a.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2,
                            De(pe.chainId);
                        case 2:
                            if (i = e.sent,
                            s = Object(re.a)(i, 2),
                            c = s[0],
                            o = s[1],
                            n === o[0].address) {
                                e.next = 10;
                                break
                            }
                            return "Connected account is not active in Keplr",
                            a("Connected account is not active in Keplr"),
                            e.abrupt("return");
                        case 10:
                            he.SigningStargateClient.connectWithSigner(pe.rpc, c, {
                                registry: ye
                            }).then((function(e) {
                                e.signAndBroadcast(n, [t.message], t.fee, t.memo).then((function(e) {
                                    a(null, e)
                                }
                                )).catch((function(e) {
                                    a(null === e || void 0 === e ? void 0 : e.message)
                                }
                                ))
                            }
                            )).catch((function(e) {
                                a(null === e || void 0 === e ? void 0 : e.message)
                            }
                            ));
                        case 11:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )));
            return function(t, n, a) {
                return e.apply(this, arguments)
            }
        }()
          , ke = function(e, t, n) {
            Object(be.a)(ve.a.mark((function a() {
                var i, s, c, o, l, r, d, u, m, b, j, v, h, p, x;
                return ve.a.wrap((function(a) {
                    for (; ; )
                        switch (a.prev = a.next) {
                        case 0:
                            return a.next = 2,
                            window.keplr;
                        case 2:
                            if (a.t0 = a.sent,
                            !a.t0) {
                                a.next = 5;
                                break
                            }
                            window.keplr.enable(e.chainId);
                        case 5:
                            return x = window.getOfflineSignerOnlyAmino && window.getOfflineSignerOnlyAmino(e.chainId),
                            a.next = 8,
                            he.SigningStargateClient.connectWithSigner(e.rpc, x);
                        case 8:
                            a.sent.sendIbcTokens(null === (i = t.msg) || void 0 === i || null === (s = i.value) || void 0 === s ? void 0 : s.sender, null === (c = t.msg) || void 0 === c || null === (o = c.value) || void 0 === o ? void 0 : o.receiver, null === (l = t.msg) || void 0 === l || null === (r = l.value) || void 0 === r ? void 0 : r.token, null === (d = t.msg) || void 0 === d || null === (u = d.value) || void 0 === u ? void 0 : u.source_port, null === (m = t.msg) || void 0 === m || null === (b = m.value) || void 0 === b ? void 0 : b.source_channel, null === (j = t.msg) || void 0 === j || null === (v = j.value) || void 0 === v ? void 0 : v.timeout_height, null === (h = t.msg) || void 0 === h || null === (p = h.value) || void 0 === p ? void 0 : p.timeout_timestamp, t.fee, t.memo).then((function(e) {
                                void 0 !== (null === e || void 0 === e ? void 0 : e.code) && 0 !== e.code ? n(e.log || e.rawLog) : n(null, e)
                            }
                            )).catch((function(e) {
                                n(null === e || void 0 === e ? void 0 : e.message)
                            }
                            ));
                        case 10:
                        case "end":
                            return a.stop()
                        }
                }
                ), a)
            }
            )))()
        }
          , Se = function(e, t, n, a, i) {
            we((function(s, c) {
                s ? i(s) : new de.QueryClientImpl(c).LiquidityPools({
                    pagination: {
                        key: "",
                        offset: me.a.fromNumber(e),
                        limit: me.a.fromNumber(t),
                        countTotal: n,
                        reverse: a
                    }
                }).then((function(e) {
                    i(null, e)
                }
                )).catch((function(e) {
                    return i(null === e || void 0 === e ? void 0 : e.message)
                }
                ))
            }
            ))
        }
          , Te = 10
          , Ee = 5e3
          , Ie = (n(242),
        n(98))
          , Fe = n(2)
          , Be = n(16)
          , Re = n(7)
          , Me = n.n(Re)
          , Pe = (n(739),
        n(1))
          , qe = l.a.createContext({});
        qe.Consumer,
        qe.Provider;
        function Le(e, t) {
            var n = Object(o.useContext)(qe);
            return e || n[t] || t
        }
        var Ue = ["bsPrefix", "className", "as"]
          , Ve = ["xl", "lg", "md", "sm", "xs"]
          , He = l.a.forwardRef((function(e, t) {
            var n = e.bsPrefix
              , a = e.className
              , i = e.as
              , s = void 0 === i ? "div" : i
              , c = Object(Be.a)(e, Ue)
              , o = Le(n, "col")
              , l = []
              , r = [];
            return Ve.forEach((function(e) {
                var t, n, a, i = c[e];
                if (delete c[e],
                null != i && "object" === typeof i) {
                    var s = i.span;
                    t = void 0 === s || s,
                    n = i.offset,
                    a = i.order
                } else
                    t = i;
                var d = "xs" !== e ? "-".concat(e) : "";
                null != t && l.push(!0 === t ? "".concat(o).concat(d) : "".concat(o).concat(d, "-").concat(t)),
                null != a && r.push("order".concat(d, "-").concat(a)),
                null != n && r.push("offset".concat(d, "-").concat(n))
            }
            )),
            l.length || l.push(o),
            Object(Pe.jsx)(s, Object(Fe.a)(Object(Fe.a)({}, c), {}, {
                ref: t,
                className: Me.a.apply(void 0, [a].concat(l, r))
            }))
        }
        ));
        He.displayName = "Col";
        var We = He
          , ze = ["bsPrefix", "fluid", "as", "className"]
          , Ge = l.a.forwardRef((function(e, t) {
            var n = e.bsPrefix
              , a = e.fluid
              , i = e.as
              , s = void 0 === i ? "div" : i
              , c = e.className
              , o = Object(Be.a)(e, ze)
              , l = Le(n, "container")
              , r = "string" === typeof a ? "-".concat(a) : "-fluid";
            return Object(Pe.jsx)(s, Object(Fe.a)(Object(Fe.a)({
                ref: t
            }, o), {}, {
                className: Me()(c, a ? "".concat(l).concat(r) : l)
            }))
        }
        ));
        Ge.displayName = "Container",
        Ge.defaultProps = {
            fluid: !1
        };
        var Qe = ["bsPrefix", "noGutters", "as", "className"]
          , Xe = l.a.forwardRef((function(e, t) {
            var n = e.bsPrefix
              , a = e.noGutters
              , i = e.as
              , s = void 0 === i ? "div" : i
              , c = e.className
              , o = Object(Be.a)(e, Qe)
              , l = Le(n, "row");
            return Object(Pe.jsx)(s, Object(Fe.a)(Object(Fe.a)({
                ref: t
            }, o), {}, {
                className: Me()(c, l, a && "no-gutters")
            }))
        }
        ));
        Xe.displayName = "Row",
        Xe.defaultProps = {
            noGutters: !1
        };
        var Ke = Xe
          , Ye = ["name", "viewbox", "width", "height", "fill", "className", "onClick"]
          , $e = function(e) {
            var t = e.name
              , n = e.viewbox
              , a = e.width
              , i = e.height
              , s = e.fill
              , c = e.className
              , o = e.onClick
              , l = Object(Be.a)(e, Ye)
              , r = Me()(c, "icon");
            return Object(Pe.jsx)(Pe.Fragment, {
                children: Object(Pe.jsx)("svg", Object(Fe.a)(Object(Fe.a)({
                    className: r,
                    viewBox: n
                }, l), {}, {
                    style: {
                        width: a,
                        height: i,
                        fill: s
                    },
                    onClick: o,
                    children: Object(Pe.jsx)("use", {
                        xlinkHref: "#" + t
                    })
                }))
            })
        }
          , Je = (n(178),
        n(97))
          , Ze = (n(381),
        n(138))
          , et = (n(1058),
        "CAUTION_NOTICE_VALUES_SET")
          , tt = "DEMAND_COIN_DENOM_SET"
          , nt = "DEMAND_COIN_AMOUNT_SET"
          , at = "OFFER_COIN_DENOM_SET"
          , it = "OFFER_COIN_AMOUNT_SET"
          , st = "REVERSE_SET"
          , ct = "COMPLETE_SET"
          , ot = "SLIPPAGE_SET"
          , lt = "SUCCESS_DATA_SET"
          , rt = "PARAMS_SET"
          , dt = "SLIPPAGE_TOLERANCE_SET;"
          , ut = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0]
              , t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            return {
                type: et,
                show: e,
                isAccepted: t
            }
        }
          , mt = function(e) {
            return {
                type: tt,
                value: e
            }
        }
          , bt = function(e) {
            return {
                type: at,
                value: e
            }
        }
          , jt = function(e) {
            return {
                type: st,
                value: e
            }
        }
          , vt = function(e, t) {
            return {
                type: ct,
                value: e,
                data: t
            }
        }
          , ht = function(e) {
            return {
                type: lt,
                value: e
            }
        }
          , pt = {
            setCautionNoticeValues: ut
        }
          , xt = Object(i.b)((function(e) {
            return {
                lang: e.language,
                cautionNotice: e.swap.cautionNotice
            }
        }
        ), pt)((function(e) {
            var t = e.cautionNotice
              , n = e.setCautionNoticeValues
              , a = e.inProgress
              , i = e.handleClick;
            return Object(Pe.jsx)(Pe.Fragment, {
                children: Object(Pe.jsx)(Je.a, {
                    centered: !0,
                    className: "caution-notice-modal",
                    footer: null,
                    header: null,
                    visible: null === t || void 0 === t ? void 0 : t.show,
                    width: 550,
                    onCancel: function() {
                        return n(!1, !1)
                    },
                    closeIcon: Object(Pe.jsx)($e, {
                        name: "close",
                        viewbox: "0 0 19 19"
                    }),
                    children: Object(Pe.jsxs)("div", {
                        className: "d-flex flex-wrap flex-column",
                        children: [Object(Pe.jsx)("h2", {
                            children: "Caution Notice"
                        }), Object(Pe.jsx)("p", {
                            children: "Trading involves a significant risk of loss and is not suitable for all investors, in particular, past developments do not necessarily indicate future results"
                        }), Object(Pe.jsx)("h3", {
                            children: "TRADE AT YOUR OWN RISK"
                        }), Object(Pe.jsx)("div", {
                            children: Object(Pe.jsx)(Ze.a, {
                                checked: null === t || void 0 === t ? void 0 : t.isAccepted,
                                onChange: function(e) {
                                    return n(null === t || void 0 === t ? void 0 : t.show, e.target.checked)
                                },
                                children: "I have read and understand these risks, and wish to proceed."
                            })
                        }), Object(Pe.jsx)("div", {
                            className: "d-flex agree-btn",
                            children: Object(Pe.jsx)(oe.a, {
                                disabled: !(null !== t && void 0 !== t && t.isAccepted),
                                name: "Agree",
                                loading: a,
                                type: "primary",
                                onClick: function() {
                                    i ? i() : n(!1, !1)
                                },
                                className: "btn-filled",
                                children: "Agree"
                            })
                        })]
                    })
                })
            })
        }
        ))
          , ft = function(e) {
            return Object(Pe.jsx)(Ie.a, {
                overlayClassName: "comdex-tooltip",
                title: e.text || "Tooltip info text",
                children: Object(Pe.jsx)($e, {
                    className: "tooltip-icon",
                    name: "info-icon"
                })
            })
        }
          , Ot = {
            en: {
                dashboard: "Dashboard",
                balances: "Balances",
                c_swap: "cSwap",
                borrow: "Borrow",
                farm: "Farm",
                mint: "Mint",
                MyHome: "My Home",
                assets: "Assets",
                govern: "Govern",
                auction: "Auction",
                more: "More",
                connect: "Connect",
                connected: "Connected",
                testnet: "Devnet",
                mainnet: "Mainnet",
                connect_wallet: "Connect Wallet",
                keplr_wallet: "Keplr Wallet",
                balance_wallet: "Balance",
                address_wallet: "Address",
                disconnect: "Disconnect",
                disconnect_wallet: "Disconnect Wallet",
                yes: "Yes",
                no: "No",
                view_explore: "View Explore",
                overview: "Overview",
                tvl: "Total Value Locked (TVL)",
                tv: "Total Value",
                collateral: "Collateral",
                liquidity: "Liquidity",
                pair_id: "Pair Id",
                cmdx_circulating_supply: "Circulating Supply",
                cmdx_market_cap: "Market Cap",
                cmdx_price: "CMDX Price",
                others: "OTHERS",
                staked: "Staked",
                casset_market_cap: "cAsset Market Cap",
                trading_fee: "Trading Fee",
                txn_fee: "TXN Fee",
                gold: "ucgold",
                silver: "Silver",
                crude_oil: "Crude Oil",
                price: "Price",
                trade: "Trade",
                total_value_of_all_cassets_in_lps: "Total Value of all CASSETS IN LPS",
                comdex_description: "Comdex's synthetics protocol unlocks access to a vast set of commodity debt assets and liquidity, making the flow of capital from DeFi to CeFi seamless.",
                day: "Day",
                week: "Week",
                month: "Month",
                year: "Year",
                comdexs: "Comdex\u2019s",
                decentralized: "Decentralized",
                synthetic_exchange: "Synthetics Exchange",
                platform: "Platform",
                find_out_more: "Find Out More",
                total_volume: "TOTAL VOLUME",
                total_value_locked: "TOTAL VALUE LOCKED",
                total_liquidity: "Liquidity",
                total_collateral: "Collateral",
                total_claimable_rewards: "total claimable rewards",
                holding: "Holding",
                borrowed: "Borrowed",
                farming: "Farming",
                total_value: "Total Value",
                current_ltv: "Current LTV",
                cAsset_balance: "cAsset Balance",
                mint_balance: "Mint Balance",
                farm_balance: "Farm Balance",
                asset_balance: "Asset Balance",
                borrowing_power_used: "Borrowing Power Used",
                your_collateral: "Your Collateral",
                health_factor: "Health Factor",
                you_borrowed: "You Borrowed",
                borrow_information: "Borrow Information",
                cmdx: "cmdx",
                ust: "ust",
                atom: "atom",
                xprt: "xprt",
                USD: "USD",
                CMDX: "CMDX",
                deposit: "Deposit",
                withdraw: "Withdraw",
                draw: "Draw",
                repay: "Repay",
                deposit_collateral: "Deposit Collateral",
                withdraw_collateral: "Withdraw Collateral",
                draw_debt: "Draw Debt",
                repay_debt: "Repay Debt",
                closeVault: "Close Vault",
                collateral_type: "Collateral Type",
                add_remove: "Add/Remove",
                receiver_address: "Reciepient address",
                receiver_address_placeholder: "Enter Reciepient's address",
                token: "Token",
                amount: "Amount",
                send: "Send",
                cancle: "Cancle",
                available: "Available",
                max: "Max",
                half: "Half",
                from: "From",
                to: "To",
                edit: "Edit",
                close: "Close",
                borrow_cAssets: "Borrow cAssets",
                borrow_cAsset: "Borrow cAsset",
                choose_collateral: "Collateral Asset",
                collateral_asset: "Collateral asset may affect the minimum collateral ratio.",
                set_collateral_ratio: "Set a Collateral Ratio",
                liquidate_below_minimum: "Position will be liquidated if the collateral ratio moves below the minimum threshold",
                confirm_borrow_amount: "Confirm borrow amount",
                position_closed: "Position can be closed by repaying the borrowed amount.",
                asset_description: "",
                withdraw_amount: "Withdrawn Amount",
                burn_amount: "Burn Amount",
                collateral_ratio: "Collateral Ratio",
                borrowed_assets: "Borrowed Assets",
                removed_liquidity: " Remove Liquidity",
                long: "Long",
                short: "Short",
                provide_casset: "Provide cAsset",
                provide_ust: "Provide UST",
                provide: "Provide",
                total_amount: "Total amount",
                pool_details: "POOL DETAILS",
                your_details: "YOUR DETAILS",
                my_amount: "My amount",
                my_liquidity: "My liquidity",
                limit_order: "Limit Order",
                pay: "Pay",
                balance: "Balance",
                tobuy: "To Buy",
                expected_price: "Expected Price",
                minimum_received: "Minimum Received",
                tx_fee: "Transaction Fee",
                tx_hash: "Transaction Hash",
                swap_fee: "Swap Fee",
                oracle_price: "Oracle Price",
                sell: "Sell",
                to_get: "To Get",
                buy: "Buy",
                price_per_gld: "Price per ucgold",
                spread: "Spread",
                slippage: "Slippage",
                commission: "Commission",
                swap: "Swap",
                swap_anyway: "Swap Anyway",
                oracle_price_tooltip: "Asset price feched from oracle",
                volume_tooltip: "24 hour trading volume for the Asset",
                premium_tooltip: "Difference between the Asset price in the pool and the oracle price",
                liquidity_tooltip: "Total liquidity for current Asset",
                estimated_slippage: "Estimated Slippage",
                back: "Back",
                caution_header: "Caution Notice",
                sub_text: "Trading involves a significant risk of loss and is not suitable for all investors, in particular, past developments do not necessarily indicate future results",
                risk: "TRADE AT YOUR OWN RISK",
                read_and_understand: "I have read and understand these risks, and wish to proceed.",
                agree: "Agree",
                switch_dark: "Enable dark mode",
                switch_light: "Enable light mode",
                poolSize: "Pool Size",
                poolLiquidity: "Pool Liquidity",
                apr: "APR",
                tooltip_circulating_supply: "Circulating supply is the amount of CMDX available and circulating in the market.",
                tooltip_total_value: "Total value of all cAssets holdings, minted, farmed and asset balances across the platform",
                tooltip_total_value_locked: "Total value locked of collateral, liquidity and staked CMDX",
                tooltip_market_cap: "Market Cap = Current Price * Circulating Supply",
                tooltip_staked: "Total Value of Staked CMDX",
                tooltip_liquidity: "Total liquidity in cAsset pools",
                tooltip_collateral: "Total collateral locked for minted cAssets",
                tooltip_total_casset: "Total value of all cAssets held",
                tooltip_total_mint: "Total collateral value minus borrowed value",
                tooltip_total_farm: "Total value of all assets in liquidity pools",
                tooltip_total_asset: "Total value of native and IBC tokens in wallet",
                tooltip_cswap_price: "cSwap price calculated based on the pool price and spread",
                tooltip_tx_fee: "Fee paid to the protocol to execute this transaction",
                lq_ratio: "Liquidation Ratio",
                debt: "Debt",
                casset: "cAsset",
                cswap_price: "cSwap Price",
                tooltip_burn_amount: "The minted cAsset will be burned to keep the protocol solvent once you withdraw your collateral",
                tooltip_withdraw_amount: "Amount of collateral redeemed for the borrowed cAsset",
                total_asset_balance: "Total Asset Balance",
                comdex_assets: "Assets",
                tx_success: "Transaction Successful",
                tx_failed: "Transaction Failed",
                asset_bought: "Asset Bought",
                asset_swap: "Asset Swapped",
                banner_paira: "Stake your CMDX tokens to earn rewards and participate in governance proposals",
                yield_card_text: "  Yield smarter with Unagii, the automated DeFi yield platform redefining the way you earn.",
                omniflix_card_text: "OmniFlix Network is a trusted Proof-of-Stake infrastructure provider and validator to comfortably stake your coins and earn rewards.",
                manage_stake: " Manage Stake",
                details: "Details",
                filter: "Filter",
                campaign: "Campaign"
            }
        }
          , gt = n(81)
          , Nt = n(85)
          , yt = function(e, t) {
            var n = Number(e && e[0] && e[0].amount) * Rt(t, e[0] && e[0].denom) + Number(e && e[1] && e[1].amount) * Rt(t, e[1] && e[1].denom);
            return n ? Pt(n) : 0
        }
          , Ct = function(e, t, n) {
            var a = e * t / Number(null === n || void 0 === n ? void 0 : n.amount);
            return a ? qt(a) : 0
        }
          , wt = n(55)
          , _t = function(e) {
            return decodeURIComponent(e.replace("#", "")) || void 0
        }
          , Dt = function(e) {
            switch (e) {
            case "ucgold":
                return "gold-icon";
            case "ucsilver":
                return "silver-icon";
            case "ucoil":
                return "crude-oil";
            case "uatom":
            case "ibc/EF48E6B1A1A19F47ECAEA62F5670C37C0580E86A9E88498B7E393EB6F49F33C0":
                return "atom-icon";
            case "ucmdx":
                return "comdex-icon";
            case "uust":
            case "ibc/D4FBF14D5963C1619BBD5FE8EF05AA015F1D1BF6305C8CFA0BC776BB70B27C31":
            case "uusd":
                return "ust-icon";
            case "uxprt":
            case "ibc/F9DEC4F5FFE69B7B9A881D394A30D11DDE2C1FD1FF3941D7F9EBD7CF208BD61A":
                return "xprt-icon";
            case "uluna":
            case "ibc/265435C653FE85CD659E88CD51D4A735BDD4D3804871400378A488C71D68C72B":
                return "luna-icon";
            case "uosmo":
            case "ibc/47BD209179859CDE4A2806763D7189B6E6FE13A17880FE2B42DE1E6C1E329E23":
                return "osmosis-icon";
            default:
                return ""
            }
        }
          , At = function(e, t, n) {
            return "".concat(e.substr(0, t), "...").concat(e.substr(e.length - n, e.length))
        }
          , kt = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : pe.coinDecimals;
            return e.indexOf(".") >= 0 ? e.substr(0, e.indexOf(".")) + e.substr(e.indexOf("."), t + 1) : e
        }
          , St = function(e) {
            return "".concat(e && function(e) {
                var t = e.amount;
                return t ? Pt(t) : 0
            }(e) || 0, " ").concat(Ut((null === e || void 0 === e ? void 0 : e.denom) || ""))
        }
          , Tt = function(e, t) {
            return "".concat(e, " ").concat(Ut(t) || "")
        }
          , Et = function(e, t) {
            return Object(xe.a)(new Set(e && e.length > 0 ? e.map((function(e) {
                return "in" === t ? e.denomIn : e.denomOut
            }
            )) : []))
        }
          , It = function(e) {
            return e >= 1e3 && e < 1e6 ? (e / 1e3).toFixed(2) + "K" : e >= 1e6 ? (e / 1e6).toFixed(2) + "M" : e < 1e3 ? e : void 0
        }
          , Ft = function(e) {
            var t = e.toString().split(".")
              , n = t[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            return t[1] ? n.concat(".", t[1]) : n
        }
          , Bt = function(e) {
            return gt.Decimal.fromAtomics(e, 18).toString()
        }
          , Rt = function(e, t) {
            var n = e.filter((function(e) {
                return e.symbol === function(e) {
                    switch (e) {
                    case "uatom":
                    case "ibc/EF48E6B1A1A19F47ECAEA62F5670C37C0580E86A9E88498B7E393EB6F49F33C0":
                        return "ATOM";
                    case "udvpn":
                        return "DVPN";
                    case "uusd":
                    case "uust":
                    case "ibc/D4FBF14D5963C1619BBD5FE8EF05AA015F1D1BF6305C8CFA0BC776BB70B27C31":
                        return "USD";
                    case "uxprt":
                    case "ibc/F9DEC4F5FFE69B7B9A881D394A30D11DDE2C1FD1FF3941D7F9EBD7CF208BD61A":
                        return "XPRT";
                    case "uluna":
                    case "ibc/265435C653FE85CD659E88CD51D4A735BDD4D3804871400378A488C71D68C72B":
                        return "LUNA";
                    case "uosmo":
                    case "ibc/47BD209179859CDE4A2806763D7189B6E6FE13A17880FE2B42DE1E6C1E329E23":
                        return "OSMO";
                    case "ucmdx":
                        return "CMDX";
                    case "ucgold":
                        return "XAU";
                    case "ucsilver":
                        return "XAG";
                    case "ucoil":
                        return "OIL";
                    default:
                        return "cosmos"
                    }
                }(t)
            }
            ));
            return n && n[0] ? n[0] && n[0].rates / 1e6 : 1
        }
          , Mt = function(e) {
            return (e * Math.pow(10, pe.coinDecimals)).toFixed(0).toString()
        }
          , Pt = function(e, t) {
            var n = Number(e) / Math.pow(10, pe.coinDecimals);
            return Ft(n.toFixed(t || pe.coinDecimals))
        }
          , qt = function(e, t) {
            return (Number(e) / Math.pow(10, pe.coinDecimals)).toFixed(t || pe.coinDecimals)
        }
          , Lt = function(e) {
            return (Number(e) * Math.pow(10, 18)).toFixed(0).toString()
        }
          , Ut = function(e) {
            if (e && "u" === e.substr(0, 1))
                return e && "uc" === e.substr(0, 2) && "ucm" !== e.substr(0, 3) ? e.substr(1, e.length) && (n = e.substr(1, e.length)).charAt(0).toLowerCase() + n.slice(1).toUpperCase() : e.substr(1, e.length) && e.substr(1, e.length).toUpperCase();
            if (e && "ibc" === e.substr(0, 3)) {
                var t = function(e) {
                    switch (e) {
                    case "ibc/EF48E6B1A1A19F47ECAEA62F5670C37C0580E86A9E88498B7E393EB6F49F33C0":
                        return "uatom";
                    case "ibc/D4FBF14D5963C1619BBD5FE8EF05AA015F1D1BF6305C8CFA0BC776BB70B27C31":
                        return "uust";
                    case "ibc/265435C653FE85CD659E88CD51D4A735BDD4D3804871400378A488C71D68C72B":
                        return "uluna";
                    case "ibc/F9DEC4F5FFE69B7B9A881D394A30D11DDE2C1FD1FF3941D7F9EBD7CF208BD61A":
                        return "uxprt";
                    case "ibc/47BD209179859CDE4A2806763D7189B6E6FE13A17880FE2B42DE1E6C1E329E23":
                        return "uosmo";
                    default:
                        return ""
                    }
                }(e);
                return t.substr(1, t.length).toUpperCase()
            }
            return e;
            var n
        }
          , Vt = function(e, t) {
            return e && e.length > 0 && e.find((function(e) {
                return e.denom === t
            }
            )) && e.find((function(e) {
                return e.denom === t
            }
            )).amount
        }
          , Ht = n(262)
          , Wt = function(e, t, n, a, i, s) {
            we((function(c, o) {
                c ? s(c) : new Ht.QueryClientImpl(o).AllBalances({
                    address: e,
                    pagination: {
                        key: "",
                        offset: me.a.fromNumber(t),
                        limit: me.a.fromNumber(n),
                        countTotal: a,
                        reverse: i
                    }
                }).then((function(e) {
                    s(null, e)
                }
                )).catch((function(e) {
                    s(null === e || void 0 === e ? void 0 : e.message)
                }
                ))
            }
            ))
        }
          , zt = function(e, t) {
            we((function(n, a) {
                n ? t(n) : new Ht.QueryClientImpl(a).SupplyOf({
                    denom: e
                }).then((function(e) {
                    t(null, e)
                }
                )).catch((function(e) {
                    t(null === e || void 0 === e ? void 0 : e.message)
                }
                ))
            }
            ))
        }
          , Gt = Object(i.b)((function(e) {
            return {
                markets: e.oracle.market.list
            }
        }
        ))((function(e) {
            var t = e.lang
              , n = e.pool
              , a = e.markets
              , s = e.poolIndex
              , c = Object(r.f)()
              , l = Object(i.c)()
              , d = Object(o.useState)(0)
              , u = Object(re.a)(d, 2)
              , m = u[0]
              , b = u[1];
            Object(o.useEffect)((function() {
                j(null === n || void 0 === n ? void 0 : n.reserveAccountAddress, 0, Te, !0, !1)
            }
            ), []);
            var j = function(e, t, n, a, i) {
                w(!0),
                Wt(e, t, n, a, i, (function(e, t) {
                    w(!1),
                    e || b(t.balances)
                }
                ))
            }
              , v = function(e) {
                if (e && e.length > 0) {
                    var t = (e && e.length > 0 && e[0] && e[0].amount && Number(e[0].amount)) * Rt(a, e[0] && e[0].denom) + (e && e.length > 0 && e[1] && e[1].amount && Number(e[1].amount)) * Rt(a, e[1] && e[1].denom);
                    return l({
                        type: "POOLS_LIQUIDITY_LIST_SET",
                        value: t,
                        index: s
                    }),
                    t
                }
                return 0
            }
              , h = v(m) && Pt(v(m), 2)
              , p = (null === n || void 0 === n ? void 0 : n.reserveCoinDenoms[0]) !== pe.coinMinimalDenom ? null === n || void 0 === n ? void 0 : n.reserveCoinDenoms[0] : null === n || void 0 === n ? void 0 : n.reserveCoinDenoms[1];
            return Object(Pe.jsx)("div", {
                className: "dashboard-bottom-card-border",
                children: Object(Pe.jsx)("div", {
                    className: "dashboard-card",
                    onClick: function() {
                        return n.id && n.id.toNumber(),
                        l({
                            type: "OFFER_COIN_DENOM_SET",
                            value: pe.coinMinimalDenom
                        }),
                        l({
                            type: "DEMAND_COIN_DENOM_SET",
                            value: (null === n || void 0 === n ? void 0 : n.reserveCoinDenoms[0]) === pe.coinMinimalDenom ? null === n || void 0 === n ? void 0 : n.reserveCoinDenoms[1] : null === n || void 0 === n ? void 0 : n.reserveCoinDenoms[0]
                        }),
                        void c({
                            pathname: "/swap",
                            hash: "buy"
                        })
                    },
                    children: Object(Pe.jsxs)("div", {
                        className: "dashboard-card-inner",
                        children: [Object(Pe.jsxs)("div", {
                            className: "card-upper",
                            children: [Object(Pe.jsx)("h3", {
                                children: p && Ut(p)
                            }), Object(Pe.jsxs)("div", {
                                className: "card-svg-icon-container",
                                children: [Object(Pe.jsx)("div", {
                                    className: "card-svgicon card-svgicon-1",
                                    children: Object(Pe.jsxs)("div", {
                                        className: "card-svgicon-inner",
                                        children: [Object(Pe.jsx)($e, {
                                            name: "comdex-icon",
                                            viewBox: "0 0 23.515 31"
                                        }), " "]
                                    })
                                }), Object(Pe.jsx)("div", {
                                    className: "card-svgicon  card-svgicon-2",
                                    children: Object(Pe.jsxs)("div", {
                                        className: "card-svgicon-inner",
                                        children: [Object(Pe.jsx)($e, {
                                            name: Dt(p)
                                        }), " "]
                                    })
                                })]
                            })]
                        }), Object(Pe.jsxs)("div", {
                            className: "card-bottom",
                            children: [Object(Pe.jsxs)("div", {
                                className: "cardbottom-row",
                                children: [Object(Pe.jsx)("label", {
                                    children: Ot[t].poolLiquidity
                                }), Object(Pe.jsx)("p", {
                                    children: "$".concat(h)
                                })]
                            }), Object(Pe.jsxs)("div", {
                                className: "cardbottom-row",
                                children: [Object(Pe.jsx)("label", {
                                    children: Ot[t].apr
                                }), Object(Pe.jsx)("p", {
                                    children: "-"
                                })]
                            })]
                        })]
                    })
                })
            })
        }
        ))
          , Qt = function(e) {
            var t = e.lang;
            return Object(Pe.jsx)("div", {
                className: "dashboard-banner",
                children: Object(Pe.jsxs)("div", {
                    className: "banner-left",
                    children: [Object(Pe.jsxs)("h2", {
                        children: [Ot[t].comdexs, " ", Object(Pe.jsx)("span", {
                            children: Ot[t].decentralized
                        }), " ", Object(Pe.jsx)("br", {}), " ", Object(Pe.jsx)("span", {
                            children: Ot[t].synthetic_exchange
                        }), " ", Ot[t].platform, " "]
                    }), Object(Pe.jsx)(oe.a, {
                        type: "primary",
                        children: Object(Pe.jsx)("a", {
                            href: "https://comdex.one",
                            "aria-label": "Website",
                            rel: "noreferrer",
                            target: "_blank",
                            children: Ot[t].find_out_more
                        })
                    })]
                })
            })
        }
          , Xt = n(186)
          , Kt = n.n(Xt)
          , Yt = n(187)
          , $t = n.n(Yt)
          , Jt = function(e) {
            var t = e.lang
              , n = e.totalVolume
              , a = e.chartData
              , i = e.handleClick
              , s = e.range
              , c = e.isDarkMode
              , o = e.totalLiquidity
              , l = e.totalCollateralList
              , r = e.markets
              , d = e.inProgress
              , u = l.map((function(e) {
                return e.amount * Rt(r, e.denom)
            }
            )).reduce((function(e, t) {
                return e + t
            }
            ), 0)
              , m = {
                chart: {
                    type: "spline",
                    backgroundColor: null,
                    height: 140,
                    marginBottom: 30
                },
                credits: {
                    enabled: !1
                },
                title: {
                    text: ""
                },
                yAxis: {
                    gridLineWidth: 0,
                    title: {
                        enabled: !1
                    },
                    labels: {
                        enabled: !1
                    }
                },
                xAxis: {
                    labels: {
                        formatter: function() {
                            return J()(this.value).format("DD/MM")
                        },
                        style: {
                            fontSize: 8,
                            color: "#ACBFDB"
                        }
                    },
                    gridLineWidth: 1,
                    gridLineColor: c ? "#111C2F" : "aliceblue",
                    categories: a && a.length > 0 ? a.map((function(e) {
                        return e[0]
                    }
                    )) : []
                },
                plotOptions: {},
                tooltip: {
                    useHTML: !0,
                    formatter: function() {
                        return '<div class="chart-value-tooltip">' + It(this.y) + '<br /><small style="font-size: 10px;">' + J()(this.x).format("MMM DD, YYYY HH:mm") + "</small></div>"
                    },
                    backgroundColor: "#222A49",
                    borderColor: "#222A49",
                    borderRadius: 10,
                    zIndex: 99,
                    style: {
                        color: "#fff"
                    }
                },
                series: [{
                    showInLegend: !1,
                    lineWidth: 1,
                    lineColor: "#FE4350",
                    marker: !1,
                    data: a && a.length > 0 ? a.map((function(e) {
                        return e[1]
                    }
                    )) : []
                }]
            }
              , b = {
                chart: {
                    type: "pie",
                    backgroundColor: null,
                    height: 150,
                    margin: 5
                },
                credits: {
                    enabled: !1
                },
                title: {
                    text: null
                },
                subtitle: {
                    floating: !0,
                    style: {
                        fontSize: "25px",
                        fontWeight: "500",
                        fontFamily: "Lexend Deca",
                        color: "#fff"
                    },
                    y: 70
                },
                plotOptions: {
                    pie: {
                        showInLegend: !1,
                        size: "130%",
                        innerSize: "80%",
                        borderWidth: 0,
                        dataLabels: {
                            enabled: !1,
                            distance: -14,
                            style: {
                                fontsize: 50
                            }
                        }
                    }
                },
                tooltip: {
                    useHTML: !0,
                    formatter: function() {
                        return '<div class="chart-value-tooltip">' + It(qt(this.y)) + "<br /><small>" + this.key + "</small></div>"
                    },
                    backgroundColor: "#222A49",
                    borderColor: "#222A49",
                    borderRadius: 10,
                    style: {
                        color: "#fff",
                        fontWeight: 800,
                        textAlign: "center"
                    }
                },
                series: [{
                    states: {
                        hover: {
                            enabled: !1
                        }
                    },
                    name: "",
                    data: [{
                        name: "Total Liquidity",
                        y: o || 0,
                        color: "#123C73"
                    }, {
                        name: "Total Collateral",
                        y: u || 0,
                        color: c ? "#3E74B9" : "#3F82C7"
                    }]
                }]
            };
            return Object(Pe.jsxs)("div", {
                className: "dashboard-total-section",
                children: [Object(Pe.jsxs)("div", {
                    className: "dashboard-total-value",
                    children: [Object(Pe.jsx)("div", {
                        className: "totalvalue-head",
                        children: Object(Pe.jsxs)("div", {
                            className: "totalvalue-left",
                            children: [Object(Pe.jsxs)("div", {
                                className: "totalvalue-head-upContainer",
                                children: [Object(Pe.jsx)("label", {
                                    children: Ot[t].total_volume
                                }), Object(Pe.jsxs)("div", {
                                    className: "totalvalue-left-button-container",
                                    children: [Object(Pe.jsx)("button", {
                                        className: "d" === s ? "ant-btn ant-btn-primary btn-active" : "ant-btn ant-btn-primary ",
                                        onClick: function() {
                                            return i("d")
                                        },
                                        children: Ot[t].day
                                    }), Object(Pe.jsx)("button", {
                                        className: "w" === s ? "ant-btn ant-btn-primary btn-active" : "ant-btn ant-btn-primary ",
                                        onClick: function() {
                                            return i("w")
                                        },
                                        children: Ot[t].week
                                    }), Object(Pe.jsx)("button", {
                                        className: "M" === s ? "ant-btn ant-btn-primary btn-active" : "ant-btn ant-btn-primary ",
                                        onClick: function() {
                                            return i("M")
                                        },
                                        children: Ot[t].month
                                    }), Object(Pe.jsx)("button", {
                                        className: "y" === s ? "ant-btn ant-btn-primary btn-active" : "ant-btn ant-btn-primary ",
                                        onClick: function() {
                                            return i("y")
                                        },
                                        children: Ot[t].year
                                    })]
                                })]
                            }), Object(Pe.jsxs)("p", {
                                children: [n ? Ft(n) : 0, " ", Ot[t].USD]
                            })]
                        })
                    }), d && Object(Pe.jsx)("div", {
                        className: "loader",
                        children: Object(Pe.jsx)(le.a, {})
                    }), Object(Pe.jsx)($t.a, {
                        highcharts: Kt.a,
                        options: m
                    })]
                }), Object(Pe.jsxs)("div", {
                    className: "dashboard-total-locked",
                    children: [Object(Pe.jsxs)("div", {
                        className: "total-locked-head",
                        children: [Object(Pe.jsx)("label", {
                            children: Ot[t].total_value_locked
                        }), Object(Pe.jsxs)("p", {
                            children: [Pt(Number(o) + Number(u), 2), " ", Ot[t].USD]
                        })]
                    }), Object(Pe.jsxs)("div", {
                        className: "total-locked-content",
                        children: [Object(Pe.jsxs)("div", {
                            className: "total-locked-content-left",
                            children: [Object(Pe.jsxs)(Ke, {
                                children: [Object(Pe.jsx)(We, {
                                    className: "mb-2",
                                    children: Object(Pe.jsxs)("div", {
                                        className: "labels",
                                        children: [Object(Pe.jsx)("div", {
                                            className: "shapes shape-liquidity"
                                        }), " ", Object(Pe.jsx)("div", {
                                            className: "mr-1",
                                            children: Ot[t].total_liquidity
                                        }), " ", Object(Pe.jsx)(ft, {
                                            text: Ot[t].tooltip_liquidity
                                        })]
                                    })
                                }), Object(Pe.jsx)(We, {
                                    className: "text-right mb-2",
                                    children: Object(Pe.jsxs)("p", {
                                        children: [Pt(o, 2) || 0, " ", Ot[t].USD]
                                    })
                                })]
                            }), Object(Pe.jsxs)(Ke, {
                                children: [Object(Pe.jsx)(We, {
                                    className: "mb-2",
                                    children: Object(Pe.jsxs)("div", {
                                        className: "labels",
                                        children: [Object(Pe.jsx)("div", {
                                            className: "shapes shape-collateral"
                                        }), " ", Object(Pe.jsx)("div", {
                                            className: "mr-1",
                                            children: Ot[t].total_collateral
                                        }), " ", Object(Pe.jsx)(ft, {
                                            text: Ot[t].tooltip_collateral
                                        })]
                                    })
                                }), Object(Pe.jsx)(We, {
                                    className: "text-right mb-2",
                                    children: Object(Pe.jsxs)("p", {
                                        children: [Pt(u, 2) || 0, " ", Ot[t].USD]
                                    })
                                })]
                            })]
                        }), Object(Pe.jsx)("div", {
                            className: "total-locked-content-right",
                            children: Object(Pe.jsx)($t.a, {
                                highcharts: Kt.a,
                                options: b
                            })
                        })]
                    })]
                })]
            })
        }
          , Zt = n(335)
          , en = function(e, t, n, a, i, s) {
            we((function(c, o) {
                c ? s(c) : new Zt.QueryServiceClientImpl(o).QueryVaults({
                    owner: e,
                    pagination: {
                        key: "",
                        offset: me.a.fromNumber(t),
                        limit: me.a.fromNumber(n),
                        countTotal: a,
                        reverse: i
                    }
                }).then((function(e) {
                    s(null, e)
                }
                )).catch((function(e) {
                    s(null === e || void 0 === e ? void 0 : e.message)
                }
                ))
            }
            ))
        }
          , tn = function(e) {
            var t, n, a = e.lang, i = e.pool, s = e.pools, c = e.setPools, l = e.fetchCoinStats, r = e.fetchVolumeChartData, d = e.volumeChart, u = e.volumeChartInProgress, m = e.statistics, b = e.fetchPriceChartData, j = e.priceChartInProgress, v = e.priceChart, h = e.range, p = e.setRange, x = e.isDarkMode, f = e.liquidityList, O = e.setTotalCollateralList, g = e.totalCollateralList, N = e.markets, y = Object(o.useState)(!1), C = Object(re.a)(y, 2), w = C[0], _ = C[1], D = {
                chart: {
                    type: "spline",
                    backgroundColor: null,
                    height: 200,
                    marginBottom: 50
                },
                credits: {
                    enabled: !1
                },
                title: {
                    text: ""
                },
                yAxis: {
                    gridLineWidth: 0,
                    title: {
                        enabled: !1
                    }
                },
                xAxis: {
                    labels: {
                        formatter: function() {
                            return J.a.unix(this.value).format("DD/MM")
                        },
                        style: {
                            fontSize: 8,
                            color: "#ACBFDB"
                        }
                    },
                    gridLineWidth: 1,
                    gridLineColor: x ? "#111C2F" : "aliceblue",
                    categories: v && v.length > 0 ? v.map((function(e) {
                        return e.time
                    }
                    )) : []
                },
                plotOptions: {},
                tooltip: {
                    useHTML: !0,
                    formatter: function() {
                        return '<div class="chart-value-tooltip">' + "$".concat(Ft(this.y.toFixed(2))) + "<br /><small>" + J.a.unix(this.x).format("MMM DD, YYYY HH:mm") + "</small></div>"
                    },
                    backgroundColor: "#222A49",
                    borderColor: "#222A49",
                    borderRadius: 10,
                    style: {
                        color: "#fff",
                        fontWeight: "700"
                    }
                },
                series: [{
                    showInLegend: !1,
                    lineWidth: 1,
                    lineColor: "#FE4350",
                    marker: !1,
                    data: v && v.length > 0 ? v.map((function(e) {
                        return e.high
                    }
                    )) : []
                }]
            };
            Object(o.useEffect)((function() {
                l(),
                r(h),
                b("10080"),
                s.length || A(0, Te, !0, !1)
            }
            ), []),
            Object(o.useEffect)((function() {
                var e;
                e = function(e, t) {
                    e ? k.b.error(e) : O(null === t || void 0 === t ? void 0 : t.collaterals)
                }
                ,
                we((function(t, n) {
                    t ? e(t) : new Zt.QueryServiceClientImpl(n).QueryTotalCollaterals({}).then((function(t) {
                        e(null, t)
                    }
                    )).catch((function(t) {
                        e(null === t || void 0 === t ? void 0 : t.message)
                    }
                    ))
                }
                ))
            }
            ), [N]);
            var A = function(e, t, n, a) {
                _(!0),
                Se(e, t, n, a, (function(e, t) {
                    _(!1),
                    e ? k.b.error(e) : c(t.pools)
                }
                ))
            }
              , S = null === m || void 0 === m || null === (t = m.market_data) || void 0 === t ? void 0 : t.price_change_percentage_24h
              , T = d.reduce((function(e, t) {
                return e + t[1]
            }
            ), 0) / d.length
              , E = f.reduce((function(e, t) {
                return e + t
            }
            ), 0);
            return Object(Pe.jsx)("div", {
                className: "app-content-wrapper",
                children: Object(Pe.jsxs)("div", {
                    className: "dashboard-wrapper",
                    children: [Object(Pe.jsxs)("div", {
                        className: "dashboard-left",
                        children: [Object(Pe.jsx)(Qt, {
                            lang: a
                        }), Object(Pe.jsx)(Jt, {
                            isDarkMode: x,
                            lang: a,
                            totalLiquidity: E,
                            range: h,
                            handleClick: function(e) {
                                p(e),
                                r(e)
                            },
                            totalVolume: T && Number(T).toFixed(2),
                            chartData: d,
                            inProgress: u,
                            markets: N,
                            totalCollateralList: g
                        }), w && Object(Pe.jsx)("div", {
                            className: "loader",
                            children: Object(Pe.jsx)(le.a, {})
                        }), Object(Pe.jsx)("div", {
                            className: "dashboard-card-section",
                            children: !w && i && i.list && i.list.length > 0 ? i.list.map((function(e, t) {
                                return Object(Pe.jsx)(Gt, {
                                    pool: e,
                                    poolIndex: t,
                                    lang: a
                                }, e.id)
                            }
                            )) : null
                        })]
                    }), Object(Pe.jsxs)("div", {
                        className: "dashboard-right",
                        children: [Object(Pe.jsxs)("div", {
                            className: "details-upper",
                            children: [Object(Pe.jsxs)("div", {
                                className: "rows",
                                children: [Object(Pe.jsxs)("label", {
                                    children: [Ot[a].cmdx_circulating_supply, " ", Object(Pe.jsx)(ft, {
                                        text: Ot[a].tooltip_circulating_supply
                                    }), " "]
                                }), Object(Pe.jsxs)("p", {
                                    children: [null !== m && void 0 !== m && null !== (n = m.market_data) && void 0 !== n && n.circulating_supply ? Ft(m.market_data.circulating_supply.toFixed(2)) : 0, " ", Object(Pe.jsx)("small", {
                                        children: Ot[a].CMDX
                                    })]
                                })]
                            }), Object(Pe.jsxs)("div", {
                                className: "rows",
                                children: [Object(Pe.jsxs)("label", {
                                    children: [Ot[a].cmdx_market_cap, " ", Object(Pe.jsx)(ft, {
                                        text: Ot[a].tooltip_market_cap
                                    })]
                                }), Object(Pe.jsxs)("p", {
                                    children: ["$", function() {
                                        var e, t, n = null === m || void 0 === m || null === (e = m.market_data) || void 0 === e || null === (t = e.market_cap) || void 0 === t ? void 0 : t.usd;
                                        return n ? "".concat(Ft(n.toFixed(2))) : 0
                                    }()]
                                })]
                            })]
                        }), Object(Pe.jsxs)("div", {
                            className: "cmdx-price",
                            children: [Object(Pe.jsx)("h4", {
                                children: Ot[a].cmdx_price
                            }), Object(Pe.jsx)("div", {
                                className: "cmdx-price-circle",
                                children: Object(Pe.jsx)("div", {
                                    className: "cmdx-price-circle1",
                                    children: Object(Pe.jsx)("div", {
                                        className: "cmdx-price-circle2",
                                        children: Object(Pe.jsx)("div", {
                                            className: "cmdx-price-circle3",
                                            children: Object(Pe.jsxs)("div", {
                                                children: [Object(Pe.jsxs)("h3", {
                                                    children: ["$", function() {
                                                        var e, t, n = null === m || void 0 === m || null === (e = m.market_data) || void 0 === e || null === (t = e.current_price) || void 0 === t ? void 0 : t.usd;
                                                        return n ? "".concat(Ft(n.toFixed(2))) : 0
                                                    }()]
                                                }), Object(Pe.jsxs)("p", {
                                                    className: S > 0 ? " " : "text-red",
                                                    children: [S ? "".concat(Ft(Math.abs(S).toFixed(2)), " ") : 0, "% \xa0", S > 0 ? Object(Pe.jsx)($e, {
                                                        name: "price-up-arrow",
                                                        viewbox: "0 0 19 12"
                                                    }) : Object(Pe.jsx)($e, {
                                                        name: "price-down-arrow",
                                                        viewbox: "0 0 19 12"
                                                    })]
                                                })]
                                            })
                                        })
                                    })
                                })
                            })]
                        }), Object(Pe.jsxs)("div", {
                            className: "cmdx-chart",
                            children: [j && Object(Pe.jsx)("div", {
                                className: "loader",
                                children: Object(Pe.jsx)(le.a, {})
                            }), Object(Pe.jsx)($t.a, {
                                highcharts: Kt.a,
                                options: D
                            })]
                        }), Object(Pe.jsx)("div", {
                            className: "text-center mt-4 mb-2",
                            children: Object(Pe.jsx)(oe.a, {
                                type: "primary",
                                className: "btn-filled px-4",
                                children: Object(Pe.jsx)("a", {
                                    "aria-label": "Osmosis",
                                    href: "https://app.osmosis.zone/?from=OSMO&to=CMDX",
                                    rel: "noreferrer",
                                    target: "_blank",
                                    children: Ot[a].buy
                                })
                            })
                        })]
                    })]
                })
            })
        };
        tn.propTypes = {
            fetchPriceChartData: d.func.isRequired,
            fetchVolumeChartData: d.func.isRequired,
            isDarkMode: d.bool.isRequired,
            lang: d.string.isRequired,
            range: d.string.isRequired,
            setRange: d.func.isRequired,
            setPools: d.func.isRequired,
            markets: d.arrayOf(d.shape({
                rates: d.shape({
                    high: d.number,
                    low: d.number,
                    unsigned: d.bool
                }),
                symbol: d.string,
                script_id: d.string
            })),
            liquidityList: d.array,
            statistics: d.shape({
                market_data: d.shape({
                    total_volume: d.shape({
                        usd: d.number
                    }),
                    current_price: d.shape({
                        usd: d.number
                    }),
                    price_change_percentage_24h: d.number,
                    circulating_supply: d.number,
                    market_cap: d.shape({
                        usd: d.number
                    })
                })
            }),
            pool: d.shape({
                list: d.arrayOf(d.shape({
                    id: d.shape({
                        high: d.number,
                        low: d.number,
                        unsigned: d.bool
                    }),
                    reserveAccountAddress: d.string,
                    poolCoinDenom: d.string,
                    reserveCoinDenoms: d.array
                }))
            }),
            pools: d.arrayOf(d.shape({
                id: d.shape({
                    high: d.number,
                    low: d.number,
                    unsigned: d.bool
                }),
                reserveAccountAddress: d.string,
                poolCoinDenom: d.string,
                reserveCoinDenoms: d.array
            })),
            priceChart: d.arrayOf(d.shape({
                time: d.number,
                open: d.number,
                high: d.number,
                low: d.number,
                close: d.number
            })),
            priceChartInProgress: d.bool,
            totalCollateralList: d.array,
            volumeChart: d.array,
            volumeChartInProgress: d.bool
        };
        var nn = {
            setPools: N,
            fetchCoinStats: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "comdex";
                return function(t) {
                    te.coins.fetch(e).then((function(e) {
                        e.data && t(ne(e.data))
                    }
                    )).catch((function(e) {
                        k.b.error(e.response ? e.response.data.message : e.message),
                        t(ae(e.response ? e.response.data.message : e.message))
                    }
                    ))
                }
            },
            fetchVolumeChartData: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "comdex";
                return function(n) {
                    n(ce(!0)),
                    te.coins.fetchMarketChartRange(t, {
                        from: J()().subtract(1, e).unix(),
                        to: J()().unix(),
                        vs_currency: "usd"
                    }).then((function(e) {
                        return e.data
                    }
                    )).then((function(e) {
                        n(ie(null === e || void 0 === e ? void 0 : e.total_volumes))
                    }
                    ), (function(e) {
                        n(se(null === e || void 0 === e ? void 0 : e.message)),
                        k.b.error(null === e || void 0 === e ? void 0 : e.message)
                    }
                    ))
                }
            },
            fetchPriceChartData: function(e) {
                return function(t) {
                    t({
                        type: G,
                        value: !0
                    }),
                    ee.a.get(function(e) {
                        return "https://api-osmosis.imperator.co/tokens/v2/historical/CMDX/chart?tf=".concat(e)
                    }(e)).then((function(e) {
                        var n;
                        t((n = null === e || void 0 === e ? void 0 : e.data,
                        {
                            type: V,
                            data: n
                        }))
                    }
                    )).catch((function(e) {
                        t(function(e) {
                            return {
                                type: H,
                                message: e
                            }
                        }(null === e || void 0 === e ? void 0 : e.message)),
                        k.b.error(null === e || void 0 === e ? void 0 : e.message)
                    }
                    ))
                }
            },
            setRange: function(e) {
                return {
                    type: W,
                    value: e
                }
            },
            setTotalCollateralList: function(e) {
                return {
                    type: z,
                    data: e
                }
            }
        }
          , an = Object(i.b)((function(e) {
            return {
                lang: e.language,
                pool: e.liquidity.pool,
                pools: e.liquidity.pool.list,
                statistics: e.dashboard.statistics,
                volumeChart: e.dashboard.volumeChart,
                priceChart: e.dashboard.priceChart,
                range: e.dashboard.range,
                isDarkMode: e.theme.theme.darkThemeEnabled,
                liquidityList: e.liquidity.list,
                totalCollateralList: e.dashboard.totalCollateralList,
                markets: e.oracle.market.list,
                priceChartInProgress: e.dashboard.priceChartInProgress,
                volumeChartInProgress: e.dashboard.volumeChartInProgress
            }
        }
        ), nn)(tn)
          , sn = (n(574),
        function(e, t) {
            return {
                type: S,
                list: e,
                pagination: t
            }
        }
        )
          , cn = function(e, t) {
            var n = e.filter((function(e) {
                return "uc" === e.denom.substr(0, 2) && !("ucm" === e.denom.substr(0, 3))
            }
            ));
            return {
                type: I,
                list: e,
                pagination: t,
                cAssets: n
            }
        }
          , on = function(e, t, n) {
            var a = "".concat(e, "/ibc/core/channel/v1/channels/").concat(t, "/ports/transfer");
            ee.a.get(a, {
                headers: {
                    "Content-Type": "application/json"
                }
            }).then((function(e) {
                var t;
                n(null, null === (t = e.data) || void 0 === t ? void 0 : t.proof_height)
            }
            )).catch((function(e) {
                k.b.error(null === e || void 0 === e ? void 0 : e.message),
                n(null === e || void 0 === e ? void 0 : e.message)
            }
            ))
        }
          , ln = n(118)
          , rn = n.n(ln)
          , dn = n(257)
          , un = function(e) {
            switch (e) {
            case "create":
                return "/comdex.vault.v1beta1.MsgCreateRequest";
            case "deposit":
                return "/comdex.vault.v1beta1.MsgDepositRequest";
            case "withdraw":
                return "/comdex.vault.v1beta1.MsgWithdrawRequest";
            case "draw":
                return "/comdex.vault.v1beta1.MsgDrawRequest";
            case "repay":
                return "/comdex.vault.v1beta1.MsgRepayRequest"
            }
        }
          , mn = function(e) {
            switch (e) {
            case "/cosmos.bank.v1beta1.MsgSend":
                return "Send";
            case "/comdex.vault.v1beta1.MsgCreateRequest":
                return "CreateVault";
            case "/comdex.vault.v1beta1.MsgDepositRequest":
                return "VaultDepositCollateral";
            case "/comdex.vault.v1beta1.MsgWithdrawRequest":
                return "VaultWithdrawCollateral";
            case "/comdex.vault.v1beta1.MsgDrawRequest":
                return "VaultDrawDebt";
            case "/comdex.vault.v1beta1.MsgRepayRequest":
                return "VaultRepayDebt";
            case "/comdex.vault.v1beta1.MsgCloseRequest":
                return "CloseVault";
            case "/comdex.liquidity.v1beta1.MsgDepositWithinBatch":
                return "PoolDeposit";
            case "/comdex.liquidity.v1beta1.MsgWithdrawWithinBatch":
                return "PoolWithdraw";
            case "/comdex.liquidity.v1beta1.MsgSwapWithinBatch":
                return "PoolSwap";
            case "/ibc.applications.transfer.v1.MsgTransfer":
                return "IBC-Transfer";
            case "/comdex.auction.v1beta1.MsgPlaceBidRequest":
                return "PlaceBid";
            default:
                return e
            }
        }
          , bn = function() {
            return {
                amount: [{
                    denom: "ucmdx",
                    amount: Ee.toString()
                }],
                gas: "2500000"
            }
        }
          , jn = function(e, t, n, a) {
            Ce.Tendermint34Client.connect(pe.rpc).then((function(i) {
                i.txSearch(function(e, t, n, a) {
                    return {
                        query: Object(dn.buildQuery)({
                            tags: [{
                                key: a,
                                value: e
                            }]
                        }),
                        page: t,
                        per_page: n,
                        prove: !1,
                        order_by: "desc"
                    }
                }(e, t, n, "message.sender")).then((function(e) {
                    a(null, e)
                }
                )).catch((function(e) {
                    a(e && e.message)
                }
                ))
            }
            )).catch((function(e) {
                a(e && e.message)
            }
            ))
        }
          , vn = (n(575),
        n(325))
          , hn = function(e) {
            var t, n = e.type, a = void 0 === n ? "number" : n, i = e.className, s = e.value, c = e.disabled, o = e.placeholder, l = e.onChange, r = e.onFocus, d = e.validationError, u = (null === d || void 0 === d || null === (t = d.message) || void 0 === t ? void 0 : t.length) > 0;
            return Object(Pe.jsxs)(Pe.Fragment, {
                children: [Object(Pe.jsx)(vn.a, {
                    type: a,
                    value: s || "",
                    className: i,
                    disabled: c,
                    placeholder: o || Number().toFixed(pe.coinDecimals),
                    onChange: l,
                    onFocus: r
                }), u ? Object(Pe.jsx)("div", {
                    className: u ? "alert-label" : "alert-label alert-hidden",
                    children: null === d || void 0 === d ? void 0 : d.message
                }) : null]
            })
        }
          , pn = (n(1135),
        n(740))
          , xn = (n(1139),
        function(e) {
            var t = e.text
              , n = Object(o.useState)(!1)
              , a = Object(re.a)(n, 2)
              , i = a[0]
              , s = a[1]
              , c = function() {
                s(!1)
            };
            return Object(Pe.jsx)("div", {
                className: "copy-section",
                onClick: function(e) {
                    e.preventDefault(),
                    e.stopPropagation()
                },
                children: Object(Pe.jsx)(Ie.a, {
                    arrow: !0,
                    visible: i,
                    color: "#FE4350",
                    title: "Copied!",
                    children: Object(Pe.jsx)(pn.CopyToClipboard, {
                        onCopy: function() {
                            s(!0),
                            setTimeout(c, 1e3)
                        },
                        text: t,
                        children: Object(Pe.jsx)($e, {
                            name: "copy",
                            viewbox: "0 0 17.61 20.985"
                        })
                    })
                })
            })
        }
        )
          , fn = Object(i.b)((function(e) {
            return {
                lang: e.language,
                isComplete: e.swap.isComplete,
                successData: e.swap.successData,
                refreshBalance: e.account.refreshBalance
            }
        }
        ))((function(e) {
            var t = e.isComplete
              , n = e.successData
              , a = e.targetTab
              , s = e.refreshBalance
              , c = Object(r.f)()
              , o = Object(i.c)();
            return Object(Pe.jsx)(Pe.Fragment, {
                children: Object(Pe.jsx)(Je.a, {
                    centered: !0,
                    className: "success-modal",
                    footer: null,
                    maskClosable: !1,
                    header: null,
                    visible: t,
                    width: 500,
                    onCancel: function() {
                        o({
                            type: "BALANCE_REFRESH_SET",
                            value: s + 1
                        }),
                        o({
                            type: "COMPLETE_SET",
                            value: !1
                        }),
                        o({
                            type: "DEMAND_COIN_AMOUNT_SET",
                            value: 0
                        }),
                        o({
                            type: "OFFER_COIN_AMOUNT_SET",
                            value: 0
                        })
                    },
                    closeIcon: Object(Pe.jsx)($e, {
                        name: "close",
                        viewbox: "0 0 19 19"
                    }),
                    children: Object(Pe.jsxs)("div", {
                        children: [Object(Pe.jsx)("div", {
                            className: "check-icon",
                            children: Object(Pe.jsx)($e, {
                                name: "success-icon",
                                viewbox: "0 0 129 129"
                            })
                        }), Object(Pe.jsxs)("ul", {
                            className: "list-data",
                            children: [n && n.pair && n.pair.denomIn && n.inAmount ? Object(Pe.jsxs)("li", {
                                children: [Object(Pe.jsx)("label", {
                                    children: "Collateral"
                                }), Object(Pe.jsxs)("p", {
                                    children: [n.inAmount, " ", Ut(n.pair.denomIn)]
                                }), " "]
                            }) : null, n && n.collateralRatio ? Object(Pe.jsxs)("li", {
                                children: [Object(Pe.jsx)("label", {
                                    children: "Collateral Ratio"
                                }), Object(Pe.jsxs)("p", {
                                    children: [n.collateralRatio, "%"]
                                })]
                            }) : null, n && n.pair && n.pair.denomOut && n.outAmount ? Object(Pe.jsxs)("li", {
                                children: [Object(Pe.jsx)("label", {
                                    children: "Borrowed Asset"
                                }), Object(Pe.jsxs)("p", {
                                    children: [n.outAmount, " ", Ut(n.pair.denomOut)]
                                }), " "]
                            }) : null, n && n.brought ? Object(Pe.jsxs)("li", {
                                children: [Object(Pe.jsx)("label", {
                                    children: "Asset Bought"
                                }), Object(Pe.jsxs)("p", {
                                    children: [n.brought.amount, " ", n.brought.denom && Ut(n.brought.denom)]
                                })]
                            }) : null, n && n.swapped ? Object(Pe.jsxs)("li", {
                                children: [Object(Pe.jsx)("label", {
                                    children: "Asset Swapped"
                                }), Object(Pe.jsxs)("p", {
                                    children: [n.swapped.amount, " ", n.swapped.denom && Ut(n.swapped.denom)]
                                })]
                            }) : null]
                        }), Object(Pe.jsxs)("ul", {
                            className: "list-data-bottom",
                            children: [n && n.slippage ? Object(Pe.jsxs)("li", {
                                children: [Object(Pe.jsx)("label", {
                                    children: "Slippage"
                                }), Object(Pe.jsxs)("p", {
                                    children: [n.slippage, "%"]
                                })]
                            }) : null, n && n.hash ? Object(Pe.jsxs)("li", {
                                children: [Object(Pe.jsx)("label", {
                                    children: "Transaction Hash"
                                }), Object(Pe.jsxs)("a", {
                                    href: "".concat(null === pe || void 0 === pe ? void 0 : pe.explorer, "/transactions/").concat(null === n || void 0 === n ? void 0 : n.hash),
                                    rel: "noreferrer",
                                    target: "_blank",
                                    "aria-label": "explorer",
                                    children: [" ", At(n.hash, 18, 18)]
                                }), Object(Pe.jsx)(xn, {
                                    text: n && n.hash
                                })]
                            }) : null]
                        }), Object(Pe.jsx)("div", {
                            className: "d-flex myhome-btn justify-content-center",
                            children: Object(Pe.jsx)(oe.a, {
                                type: "primary",
                                className: "btn-filled",
                                size: "large",
                                onClick: function() {
                                    o({
                                        type: "BALANCE_REFRESH_SET",
                                        value: s + 1
                                    }),
                                    o({
                                        type: "COMPLETE_SET",
                                        value: !1
                                    }),
                                    c({
                                        pathname: "/home",
                                        hash: a
                                    })
                                },
                                children: "My Home"
                            })
                        })]
                    })
                })
            })
        }
        ))
          , On = function(e, t, n) {
            return e < 0 ? new Error("Input must be positive number") : 0 === t ? new Error("No available balance") : t && Number(t) < e ? new Error("Insufficient funds") : "macro" === n && qt(e) <= 1e-4 ? new Error("Input amount should be over 100 micro") : new Error("")
        }
          , gn = (n(386),
        n(128))
          , Nn = gn.a.Option
          , yn = function(e) {
            var t = e.value
              , n = e.onChange
              , a = e.list;
            return Object(Pe.jsx)(gn.a, {
                className: "assets-select",
                dropdownClassName: "asset-select-dropdown",
                value: t,
                placeholder: Object(Pe.jsxs)("div", {
                    className: "select-placeholder",
                    children: [Object(Pe.jsx)("div", {
                        className: "circle-icon",
                        children: Object(Pe.jsx)("div", {
                            className: "circle-icon-inner"
                        })
                    }), "Select"]
                }),
                onChange: n,
                defaultActiveFirstOption: !0,
                suffixIcon: Object(Pe.jsx)($e, {
                    name: "arrow-down",
                    viewbox: "0 0 19.244 10.483"
                }),
                children: a && a.map((function(e) {
                    var t = e.denom ? e.denom : e;
                    return Object(Pe.jsx)(Nn, {
                        value: t,
                        children: Object(Pe.jsxs)("div", {
                            className: "select-inner",
                            children: [Object(Pe.jsx)("div", {
                                className: "svg-icon",
                                children: Object(Pe.jsx)("div", {
                                    className: "svg-icon-inner",
                                    children: Object(Pe.jsx)($e, {
                                        name: Dt(t)
                                    })
                                })
                            }), Object(Pe.jsx)("div", {
                                className: "name",
                                children: Ut(t)
                            })]
                        })
                    }, t)
                }
                ))
            })
        }
          , Cn = n(336)
          , wn = function(e, t, n, a, i) {
            we((function(s, c) {
                s ? i(s) : new Cn.QueryServiceClientImpl(c).QueryPairs({
                    pagination: {
                        key: "",
                        offset: me.a.fromNumber(e),
                        limit: me.a.fromNumber(t),
                        countTotal: n,
                        reverse: a
                    }
                }).then((function(e) {
                    i(null, e)
                }
                )).catch((function(e) {
                    i(null === e || void 0 === e ? void 0 : e.message)
                }
                ))
            }
            ))
        }
          , _n = function(e, t, n, a, i) {
            we((function(s, c) {
                s ? i(s) : new Cn.QueryServiceClientImpl(c).QueryAssets({
                    pagination: {
                        key: "",
                        offset: me.a.fromNumber(e),
                        limit: me.a.fromNumber(t),
                        countTotal: n,
                        reverse: a
                    }
                }).then((function(e) {
                    i(null, e)
                }
                )).catch((function(e) {
                    i(null === e || void 0 === e ? void 0 : e.message)
                }
                ))
            }
            ))
        }
          , Dn = function(e) {
            var t = e.lang
              , n = e.address
              , a = e.pools
              , i = e.pool
              , s = e.setPool
              , c = e.setPoolBalance
              , l = e.setSpotPrice
              , r = e.spotPrice
              , d = e.balances
              , u = e.reverse
              , m = e.setReverse
              , b = e.markets
              , j = e.firstReserveCoinDenom
              , v = e.secondReserveCoinDenom
              , h = e.setFirstReserveCoinDenom
              , p = e.setSecondReserveCoinDenom
              , x = e.setCautionNoticeValues
              , f = e.setComplete
              , O = e.setSuccessData
              , g = e.setPairs
              , N = e.pairs
              , y = e.poolBalance
              , C = e.refreshData
              , w = Object(o.useState)()
              , _ = Object(re.a)(w, 2)
              , D = _[0]
              , A = _[1]
              , S = Object(o.useState)()
              , T = Object(re.a)(S, 2)
              , E = T[0]
              , I = T[1]
              , F = Object(o.useState)(!1)
              , B = Object(re.a)(F, 2)
              , R = B[0]
              , M = B[1]
              , P = Object(o.useState)()
              , q = Object(re.a)(P, 2)
              , L = q[0]
              , U = q[1]
              , V = Object(o.useState)()
              , H = Object(re.a)(V, 2)
              , W = H[0]
              , z = H[1];
            Object(o.useEffect)((function() {
                f(!1),
                m(!1)
            }
            ), []),
            Object(o.useEffect)((function() {
                G(0, Te, !0, !1)
            }
            ), []),
            Object(o.useEffect)((function() {
                var e = y && y[0] && y[0].denom
                  , t = (y && y[0] && y[0].amount) / (y && y[1] && y[1].amount);
                l(e === pe.coinMinimalDenom ? t.toFixed(6) : (1 / t).toFixed(6))
            }
            ), [y]),
            Object(o.useEffect)((function() {
                if (D) {
                    var e = (D * Q()).toFixed(6);
                    z(On(Mt(e), ie, "macro")),
                    isFinite(Number(e)) && I(e)
                }
            }
            ), [r]);
            var G = function(e, t, n, a) {
                wn(e, 100, n, a, (function(e, t) {
                    e ? k.b.error(e) : g(t.pairsInfo, t.pagination)
                }
                ))
            }
              , Q = function() {
                return u ? r : 1 / r
            }
              , X = function() {
                return u ? 1 / r : r
            }
              , K = function() {
                var e = Object(be.a)(ve.a.mark((function e(t, n) {
                    var a;
                    return ve.a.wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                a = $(t, n),
                                s(a),
                                Y(null === a || void 0 === a ? void 0 : a.reserveAccountAddress, 0, Te, !0, !1);
                            case 3:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )));
                return function(t, n) {
                    return e.apply(this, arguments)
                }
            }()
              , Y = function(e, t, n, a, i) {
                Wt(e, t, n, a, i, (function(e, t) {
                    e || c(t.balances)
                }
                ))
            }
              , $ = function(e, t) {
                return rn.a.filter(a, {
                    reserveCoinDenoms: [e, t]
                })[0]
            }
              , J = function(e) {
                e = kt(e).toString().trim(),
                U(On(Mt(e), ae, "macro"));
                var t = (e * Q()).toFixed(6);
                A(e),
                z(On(Mt(t), ie, "macro")),
                isFinite(Number(t)) && I(t)
            }
              , Z = function(e) {
                e = kt(e).toString().trim(),
                z(On(Mt(e), ie, "macro"));
                var t = (e * X()).toFixed(6);
                I(e),
                U(On(Mt(t), ae, "macro")),
                isFinite(Number(t)) && A(t)
            }
              , ee = Object(xe.a)(new Set([pe.coinMinimalDenom]))
              , te = N && N.list && N.list.length > 0 ? N.list.map((function(e) {
                return e.denomOut
            }
            )) : []
              , ne = Object(xe.a)(new Set(te))
              , ae = Vt(d, j) || 0
              , ie = Vt(d, v) || 0
              , se = function() {
                M(!0),
                x(!1, !1);
                var e = [{
                    denom: j,
                    amount: Mt(D)
                }, {
                    denom: v,
                    amount: Mt(E)
                }].sort((function(e, t) {
                    return e.denom.localeCompare(t.denom)
                }
                ));
                Ae({
                    message: {
                        typeUrl: "/comdex.liquidity.v1beta1.MsgDepositWithinBatch",
                        value: {
                            depositorAddress: n,
                            poolId: null === i || void 0 === i ? void 0 : i.id,
                            depositCoins: e
                        }
                    },
                    fee: bn(),
                    memo: ""
                }, n, (function(e, t) {
                    if (M(!1),
                    C(i),
                    e)
                        k.b.error(e);
                    else if (null !== t && void 0 !== t && t.code)
                        k.b.info(null === t || void 0 === t ? void 0 : t.rawLog);
                    else {
                        var n = {
                            hash: null === t || void 0 === t ? void 0 : t.transactionHash
                        };
                        f(!0),
                        A(),
                        I(),
                        U(),
                        z(),
                        O(n)
                    }
                }
                ))
            };
            return Object(Pe.jsx)(We, {
                lg: "6",
                md: "12",
                className: "mx-auto",
                children: Object(Pe.jsxs)("div", {
                    className: "farm-content-card",
                    children: [Object(Pe.jsxs)("div", {
                        className: "assets-select-card",
                        children: [Object(Pe.jsxs)("div", {
                            className: "assets-left",
                            children: [Object(Pe.jsxs)("label", {
                                className: "leftlabel",
                                children: [Ot[t].provide, " ", Ut(j)]
                            }), Object(Pe.jsx)("div", {
                                className: "assets-select-wrapper",
                                children: Object(Pe.jsx)(yn, {
                                    onChange: function(e) {
                                        h(e),
                                        K(e, v)
                                    },
                                    value: j || null,
                                    list: ee
                                })
                            })]
                        }), Object(Pe.jsxs)("div", {
                            className: "assets-right",
                            children: [Object(Pe.jsxs)("div", {
                                className: "label-right",
                                children: [Ot[t].available, " ", Object(Pe.jsxs)("span", {
                                    className: "ml-1",
                                    children: [" ", Pt(ae), " ", Ut(j)]
                                }), Object(Pe.jsx)("div", {
                                    className: "maxhalf",
                                    children: Object(Pe.jsx)(oe.a, {
                                        className: "active",
                                        onClick: function() {
                                            return e = Number(ae) > Ee ? qt(ae - Ee) : qt(ae),
                                            Number(Mt((e * Q()).toFixed(6))) < Number(ie) ? J(e) : Z(qt(ie - Ee));
                                            var e
                                        },
                                        children: Ot[t].max
                                    })
                                })]
                            }), Object(Pe.jsxs)("div", {
                                className: "input-select",
                                children: [Object(Pe.jsx)(hn, {
                                    value: D,
                                    onChange: function(e) {
                                        return J(e.target.value)
                                    },
                                    validationError: L
                                }), Object(Pe.jsx)("small", {
                                    children: (null === i || void 0 === i ? void 0 : i.id) && function() {
                                        var e = (u ? r : 1 / r) * Rt(b, v) * D;
                                        return "\u2248 $".concat(Number(e && isFinite(e) ? e : 0).toFixed(2))
                                    }()
                                }), Object(Pe.jsx)("small", {
                                    children: (null === i || void 0 === i ? void 0 : i.id) && function() {
                                        var e = Ut(j)
                                          , t = Ut(v)
                                          , n = u ? r : 1 / r;
                                        return "1 ".concat(e || "", " = ").concat(Number(n && isFinite(n) ? n : 0).toFixed(6), " ").concat(t || "")
                                    }()
                                })]
                            })]
                        })]
                    }), Object(Pe.jsxs)("div", {
                        className: "assets-select-card ",
                        children: [Object(Pe.jsxs)("div", {
                            className: "assets-left",
                            children: [Object(Pe.jsxs)("label", {
                                className: "leftlabel",
                                children: [Ot[t].provide, " ", Ut(v)]
                            }), Object(Pe.jsx)("div", {
                                className: "assets-select-wrapper",
                                children: Object(Pe.jsx)(yn, {
                                    value: v || null,
                                    onChange: function(e) {
                                        p(e),
                                        K(j, e)
                                    },
                                    list: ne
                                })
                            })]
                        }), Object(Pe.jsxs)("div", {
                            className: "assets-right",
                            children: [Object(Pe.jsxs)("div", {
                                className: "label-right",
                                children: [Ot[t].available, " ", Object(Pe.jsxs)("span", {
                                    className: "ml-1",
                                    children: [Pt(ie), " ", Ut(v)]
                                }), Object(Pe.jsx)("div", {
                                    className: "maxhalf",
                                    children: Object(Pe.jsx)(oe.a, {
                                        className: "active",
                                        onClick: function() {
                                            return e = Number(ie) > Ee ? qt(ie - Ee) : qt(ie),
                                            Number(Mt((e * X()).toFixed(6))) < Number(ae) ? Z(e) : J(qt(ae - Ee));
                                            var e
                                        },
                                        children: Ot[t].max
                                    })
                                })]
                            }), Object(Pe.jsxs)("div", {
                                className: "input-select",
                                children: [Object(Pe.jsx)(hn, {
                                    value: E,
                                    onChange: function(e) {
                                        return Z(e.target.value)
                                    },
                                    validationError: W
                                }), Object(Pe.jsx)("small", {
                                    children: (null === i || void 0 === i ? void 0 : i.id) && function() {
                                        var e = (u ? 1 / r : r) * Rt(b, j) * E;
                                        return "\u2248 $".concat(Number(e && isFinite(e) ? e : 0).toFixed(2))
                                    }()
                                }), Object(Pe.jsx)("small", {
                                    children: (null === i || void 0 === i ? void 0 : i.id) && function() {
                                        var e = Ut(j)
                                          , t = Ut(v)
                                          , n = u ? 1 / r : r;
                                        return "1 ".concat(t || "", " = ").concat(Number(n && isFinite(n) ? n : 0).toFixed(6), " ").concat(e || "")
                                    }()
                                })]
                            })]
                        })]
                    }), Object(Pe.jsx)("div", {
                        className: "assets PoolSelect-btn",
                        children: Object(Pe.jsxs)("div", {
                            className: "assets-form-btn text-center  mb-2",
                            children: [Object(Pe.jsx)(oe.a, {
                                loading: R,
                                disabled: R || !(null !== i && void 0 !== i && i.id) || !Number(D) || !Number(E) || (null === L || void 0 === L ? void 0 : L.message) || (null === W || void 0 === W ? void 0 : W.message),
                                type: "primary",
                                className: "btn-filled",
                                onClick: function() {
                                    return x(!0, !1)
                                },
                                children: Ot[t].farm
                            }), Object(Pe.jsx)(xt, {
                                inProgress: R,
                                handleClick: function() {
                                    return se()
                                }
                            }), Object(Pe.jsx)("div", {
                                className: "d-flex agree-btn",
                                children: Object(Pe.jsx)(fn, {
                                    targetTab: "3"
                                })
                            })]
                        })
                    })]
                })
            })
        };
        Dn.propTypes = {
            lang: d.string.isRequired,
            refreshData: d.func.isRequired,
            setCautionNoticeValues: d.func.isRequired,
            setComplete: d.func.isRequired,
            setFirstReserveCoinDenom: d.func.isRequired,
            setPoolBalance: d.func.isRequired,
            setPool: d.func.isRequired,
            setReverse: d.func.isRequired,
            setSecondReserveCoinDenom: d.func.isRequired,
            setSpotPrice: d.func.isRequired,
            setSuccessData: d.func.isRequired,
            address: d.string,
            balances: d.arrayOf(d.shape({
                denom: d.string.isRequired,
                amount: d.string
            })),
            firstReserveCoinDenom: d.string,
            markets: d.arrayOf(d.shape({
                rates: d.shape({
                    high: d.number,
                    low: d.number,
                    unsigned: d.bool
                }),
                symbol: d.string,
                script_id: d.string
            })),
            pairs: d.shape({
                list: d.arrayOf(d.shape({
                    denomIn: d.string,
                    denomOut: d.string,
                    liquidationRatio: d.string,
                    id: d.shape({
                        high: d.number,
                        low: d.number,
                        unsigned: d.bool
                    })
                }))
            }),
            pool: d.shape({
                id: d.shape({
                    high: d.number,
                    low: d.number,
                    unsigned: d.bool
                }),
                reserveAccountAddress: d.string,
                poolCoinDenom: d.string,
                reserveCoinDenoms: d.array
            }),
            poolBalance: d.arrayOf(d.shape({
                amount: d.string,
                denom: d.string
            })),
            pools: d.arrayOf(d.shape({
                id: d.shape({
                    high: d.number,
                    low: d.number,
                    unsigned: d.bool
                }),
                reserveAccountAddress: d.string,
                poolCoinDenom: d.string,
                reserveCoinDenoms: d.array
            })),
            reverse: d.bool,
            secondReserveCoinDenom: d.string
        };
        var An = {
            setPoolBalance: C,
            setPool: y,
            setFirstReserveCoinDenom: D,
            setSecondReserveCoinDenom: A,
            setCautionNoticeValues: ut,
            setComplete: vt,
            setSuccessData: ht,
            setSpotPrice: _,
            setReverse: jt,
            setPairs: sn
        }
          , kn = Object(i.b)((function(e) {
            return {
                lang: e.language,
                pools: e.liquidity.pool.list,
                pool: e.liquidity.pool._,
                address: e.account.address,
                reverse: e.swap.reverse,
                markets: e.oracle.market.list,
                spotPrice: e.liquidity.spotPrice,
                balances: e.account.balances.list,
                firstReserveCoinDenom: e.liquidity.firstReserveCoinDenom,
                secondReserveCoinDenom: e.liquidity.secondReserveCoinDenom,
                pairs: e.asset.pairs,
                poolBalance: e.liquidity.poolBalance
            }
        }
        ), An)(Dn)
          , Sn = (n(387),
        n(222))
          , Tn = "COMPLETE_SET"
          , En = "CAUTION_VALUES_SET"
          , In = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0]
              , t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            return {
                type: En,
                show: e,
                isAccepted: t
            }
        }
          , Fn = {
            setCautionValues: In
        }
          , Bn = Object(i.b)((function(e) {
            return {
                lang: e.language,
                cautionNotice: e.farm.caution
            }
        }
        ), Fn)((function(e) {
            var t = e.cautionNotice
              , n = e.setCautionValues
              , a = e.inProgress
              , i = e.handleClick;
            return Object(Pe.jsx)(Pe.Fragment, {
                children: Object(Pe.jsx)(Je.a, {
                    centered: !0,
                    className: "caution-notice-modal",
                    footer: null,
                    header: null,
                    visible: null === t || void 0 === t ? void 0 : t.show,
                    width: 550,
                    onCancel: function() {
                        return n(!1, !1)
                    },
                    closeIcon: Object(Pe.jsx)($e, {
                        name: "close",
                        viewbox: "0 0 19 19"
                    }),
                    children: Object(Pe.jsxs)("div", {
                        className: "d-flex flex-wrap flex-column",
                        children: [Object(Pe.jsx)("h2", {
                            children: "Caution Notice"
                        }), Object(Pe.jsx)("p", {
                            children: "Trading involves a significant risk of loss and is not suitable for all investors, in particular, past developments do not necessarily indicate future results"
                        }), Object(Pe.jsx)("h3", {
                            children: "TRADE AT YOUR OWN RISK"
                        }), Object(Pe.jsx)("div", {
                            children: Object(Pe.jsx)(Ze.a, {
                                checked: null === t || void 0 === t ? void 0 : t.isAccepted,
                                onChange: function(e) {
                                    return n(null === t || void 0 === t ? void 0 : t.show, e.target.checked)
                                },
                                children: "I have read and understand these risks, and wish to proceed."
                            })
                        }), Object(Pe.jsx)("div", {
                            className: "d-flex agree-btn",
                            children: Object(Pe.jsx)(oe.a, {
                                disabled: !(null !== t && void 0 !== t && t.isAccepted),
                                name: "Agree",
                                loading: a,
                                type: "primary",
                                onClick: function() {
                                    i ? i() : n(!1, !1)
                                },
                                className: "btn-filled",
                                children: "Agree"
                            })
                        })]
                    })
                })
            })
        }
        ))
          , Rn = function(e) {
            var t, n, a, i, s = e.lang, c = e.poolBalance, o = e.markets;
            return Object(Pe.jsxs)("div", {
                className: "farm-content-card-right",
                children: [Object(Pe.jsx)("h3", {
                    children: Ot[s].pool_details
                }), Object(Pe.jsxs)(Ke, {
                    children: [Object(Pe.jsx)(We, {
                        sm: "6",
                        children: Object(Pe.jsxs)("div", {
                            className: "pool-details-upper",
                            children: [Object(Pe.jsx)("div", {
                                className: "pool-details-icon",
                                children: Object(Pe.jsx)("div", {
                                    className: "pool-details-icon-inner",
                                    children: Object(Pe.jsx)($e, {
                                        name: Dt(null === (t = c[0]) || void 0 === t ? void 0 : t.denom)
                                    })
                                })
                            }), Object(Pe.jsxs)("div", {
                                className: "pool-details-dlt",
                                children: [Object(Pe.jsx)("h2", {
                                    children: "50%"
                                }), Object(Pe.jsx)("small", {
                                    children: Ut((null === (n = c[0]) || void 0 === n ? void 0 : n.denom) || "")
                                })]
                            })]
                        })
                    }), Object(Pe.jsx)(We, {
                        sm: "6",
                        children: Object(Pe.jsxs)("div", {
                            className: "pool-details-upper",
                            children: [Object(Pe.jsx)("div", {
                                className: "pool-details-icon",
                                children: Object(Pe.jsx)("div", {
                                    className: "pool-details-icon-inner",
                                    children: Object(Pe.jsx)($e, {
                                        name: Dt(null === (a = c[1]) || void 0 === a ? void 0 : a.denom)
                                    })
                                })
                            }), Object(Pe.jsxs)("div", {
                                className: "pool-details-dlt",
                                children: [Object(Pe.jsx)("h2", {
                                    children: "50%"
                                }), Object(Pe.jsx)("small", {
                                    children: Ut((null === (i = c[1]) || void 0 === i ? void 0 : i.denom) || "")
                                }), " "]
                            })]
                        })
                    })]
                }), Object(Pe.jsxs)(Ke, {
                    className: "pool-details-list",
                    children: [Object(Pe.jsxs)(We, {
                        sm: "6",
                        className: "mb-2",
                        children: [Object(Pe.jsx)("label", {
                            children: Ot[s].total_amount
                        }), Object(Pe.jsx)("p", {
                            children: St(c[0])
                        })]
                    }), Object(Pe.jsxs)(We, {
                        sm: "6",
                        className: "mb-2",
                        children: [Object(Pe.jsx)("label", {
                            children: Ot[s].total_amount
                        }), Object(Pe.jsx)("p", {
                            children: St(c[1])
                        })]
                    }), Object(Pe.jsxs)(We, {
                        sm: "6",
                        className: "mb-2",
                        children: [Object(Pe.jsxs)("label", {
                            children: [Ot[s].poolLiquidity, " ", Object(Pe.jsx)(ft, {
                                text: "Total Liquidity of the current pool"
                            })]
                        }), Object(Pe.jsxs)("p", {
                            children: ["$", yt(c, o)]
                        })]
                    }), Object(Pe.jsxs)(We, {
                        sm: "6",
                        className: "mb-2",
                        children: [Object(Pe.jsxs)("label", {
                            children: [Ot[s].apr, " ", Object(Pe.jsx)(ft, {
                                text: "Annual percentage rate of CMDX rewards for the corresponding  pool. Note:- APRs are subject to change with pool size."
                            })]
                        }), Object(Pe.jsx)("p", {
                            children: "-"
                        })]
                    })]
                })]
            })
        }
          , Mn = {
            0: "0",
            50: "50%",
            100: "100%"
        }
          , Pn = {
            setCautionValues: In,
            setComplete: vt,
            setSuccessData: ht,
            setPoolTokenSupply: function(e) {
                return {
                    type: f,
                    value: e
                }
            }
        }
          , qn = Object(i.b)((function(e) {
            return {
                lang: e.language,
                address: e.account.address,
                balances: e.account.balances.list,
                poolBalance: e.liquidity.poolBalance,
                markets: e.oracle.market.list,
                pool: e.liquidity.pool._,
                poolTokenSupply: e.liquidity.poolTokenSupply
            }
        }
        ), Pn)((function(e) {
            var t, n, a, i, s, c = e.lang, l = e.pool, r = e.address, d = e.poolBalance, u = e.markets, m = e.balances, b = e.setCautionValues, j = e.setComplete, v = e.setSuccessData, h = e.setPoolTokenSupply, p = e.poolTokenSupply, x = e.refreshData, f = Object(o.useState)(!1), O = Object(re.a)(f, 2), g = O[0], N = O[1], y = Object(o.useState)(0), C = Object(re.a)(y, 2), w = C[0], _ = C[1];
            (null === (t = d[0]) || void 0 === t ? void 0 : t.denom) !== pe.coinMinimalDenom && d.reverse(),
            Object(o.useEffect)((function() {
                j(!1),
                null !== l && void 0 !== l && l.poolCoinDenom && D(null === l || void 0 === l ? void 0 : l.poolCoinDenom)
            }
            ), [l]);
            var D = function(e) {
                zt(e, (function(e, t) {
                    e ? k.b.error(e) : h(null === t || void 0 === t ? void 0 : t.amount)
                }
                ))
            }
              , A = function(e) {
                _(e)
            }
              , S = Vt(m, null === l || void 0 === l ? void 0 : l.poolCoinDenom) || 0
              , T = function() {
                var e = qt(Vt(m, null === l || void 0 === l ? void 0 : l.poolCoinDenom)) || 0
                  , t = w / 100 * e;
                return t && Mt(t)
            }
              , E = Ct(S, null === (n = d[0]) || void 0 === n ? void 0 : n.amount, p)
              , I = Ct(S, null === (a = d[1]) || void 0 === a ? void 0 : a.amount, p);
            return Object(Pe.jsx)(Pe.Fragment, {
                children: Object(Pe.jsxs)(We, {
                    lg: "6",
                    md: "12",
                    className: "mx-auto",
                    children: [Object(Pe.jsx)(Rn, {
                        lang: c,
                        poolBalance: d,
                        markets: u
                    }), Object(Pe.jsxs)("div", {
                        className: "farm-content-card-right your-details-card mt-4",
                        children: [Object(Pe.jsx)("h3", {
                            children: Ot[c].my_liquidity
                        }), Object(Pe.jsxs)(Ke, {
                            className: "pool-details-list",
                            children: [Object(Pe.jsxs)(We, {
                                sm: "4",
                                className: "mb-2",
                                children: [Object(Pe.jsxs)("label", {
                                    children: [Ot[c].my_amount, " "]
                                }), Object(Pe.jsx)("p", {
                                    children: Tt(E, null === (i = d[0]) || void 0 === i ? void 0 : i.denom)
                                })]
                            }), Object(Pe.jsxs)(We, {
                                sm: "4",
                                className: "mb-2",
                                children: [Object(Pe.jsxs)("label", {
                                    children: [Ot[c].my_amount, " "]
                                }), Object(Pe.jsx)("p", {
                                    children: Tt(I, null === (s = d[1]) || void 0 === s ? void 0 : s.denom)
                                })]
                            }), Object(Pe.jsxs)(We, {
                                sm: "4",
                                className: "mb-2",
                                children: [Object(Pe.jsxs)("label", {
                                    children: [Ot[c].my_liquidity, " ", Object(Pe.jsx)(ft, {
                                        text: "Total value of current position"
                                    })]
                                }), Object(Pe.jsxs)("p", {
                                    children: ["$", function() {
                                        var e, t, n = Number(E) * Rt(u, null === (e = d[0]) || void 0 === e ? void 0 : e.denom) + Number(I) * Rt(u, null === (t = d[1]) || void 0 === t ? void 0 : t.denom);
                                        return n ? n.toFixed(6) : 0
                                    }()]
                                })]
                            })]
                        }), Object(Pe.jsx)("div", {
                            className: "slider-bar mt-2 pb-2",
                            children: Object(Pe.jsxs)("div", {
                                className: "slider-numbers",
                                children: [Object(Pe.jsx)(Sn.a, {
                                    className: "comdex-slider",
                                    defaultValue: w,
                                    marks: Mn,
                                    value: w,
                                    max: 100,
                                    min: 0,
                                    disabled: !S,
                                    onChange: A,
                                    tooltipVisible: !1
                                }), Object(Pe.jsx)(hn, {
                                    defaultValue: w,
                                    onChange: function(e) {
                                        var t;
                                        A(null === (t = e.target) || void 0 === t ? void 0 : t.value)
                                    },
                                    placeholder: "0",
                                    disabled: !S,
                                    value: "".concat(w)
                                }), "%"]
                            })
                        }), Object(Pe.jsxs)("div", {
                            className: "text-center mt-4 mb-2",
                            children: [Object(Pe.jsx)(oe.a, {
                                type: "primary",
                                loading: g,
                                onClick: function() {
                                    return b(!0, !1)
                                },
                                disabled: !S || !w || w <= 0 || w > 100,
                                className: "btn-filled px-4",
                                children: Ot[c].removed_liquidity
                            }), Object(Pe.jsx)(Bn, {
                                inProgress: g,
                                handleClick: function() {
                                    return N(!0),
                                    b(!1, !1),
                                    void Ae({
                                        message: {
                                            typeUrl: "/comdex.liquidity.v1beta1.MsgWithdrawWithinBatch",
                                            value: {
                                                withdrawerAddress: r,
                                                poolId: null === l || void 0 === l ? void 0 : l.id,
                                                poolCoin: {
                                                    denom: null === l || void 0 === l ? void 0 : l.poolCoinDenom,
                                                    amount: T()
                                                }
                                            }
                                        },
                                        fee: bn(),
                                        memo: ""
                                    }, r, (function(e, t) {
                                        if (N(!1),
                                        x(l),
                                        e)
                                            k.b.error(e);
                                        else if (null !== t && void 0 !== t && t.code)
                                            k.b.info(null === t || void 0 === t ? void 0 : t.rawLog);
                                        else {
                                            var n = {
                                                hash: null === t || void 0 === t ? void 0 : t.transactionHash
                                            };
                                            j(!0),
                                            v(n)
                                        }
                                    }
                                    ))
                                }
                            }), Object(Pe.jsx)("div", {
                                className: "d-flex agree-btn",
                                children: Object(Pe.jsx)(fn, {
                                    targetTab: "3"
                                })
                            })]
                        })]
                    })]
                })
            })
        }
        ))
          , Ln = {
            setPools: N,
            setPool: y,
            setPoolBalance: C,
            setFetchBalanceInProgress: w,
            setSecondReserveCoinDenom: A,
            setFirstReserveCoinDenom: D,
            setSpotPrice: _
        }
          , Un = Object(i.b)((function(e) {
            return {
                lang: e.language,
                inProgress: e.liquidity.inProgress,
                pools: e.liquidity.pool.list
            }
        }
        ), Ln)((function(e) {
            var t = e.setPools
              , n = e.setPool
              , a = e.setPoolBalance
              , i = e.setFetchBalanceInProgress
              , s = e.setFirstReserveCoinDenom
              , c = e.setSecondReserveCoinDenom
              , l = e.setSpotPrice
              , d = Object(o.useState)(!1)
              , u = Object(re.a)(d, 2)
              , m = (u[0],
            u[1])
              , b = Object(r.g)().id;
            Object(o.useEffect)((function() {
                b && v(b),
                j(0, Te, !0, !1)
            }
            ), []);
            var j = function(e, n, a, i) {
                m(!0),
                Se(e, n, a, i, (function(e, n) {
                    m(!1),
                    e ? k.b.error(e) : (t(n.pools),
                    b || v(n.pools && n.pools[0] && n.pools[0].id && n.pools[0].id.toNumber()))
                }
                ))
            }
              , v = function(e) {
                !function(e, t) {
                    we((function(n, a) {
                        n ? t(n) : new de.QueryClientImpl(a).LiquidityPool({
                            poolId: me.a.fromNumber(e)
                        }).then((function(e) {
                            t(null, e)
                        }
                        )).catch((function(e) {
                            return t(null === e || void 0 === e ? void 0 : e.message)
                        }
                        ))
                    }
                    ))
                }(e, (function(e, t) {
                    var a, i, o, l, r, d;
                    if (e)
                        k.b.error(e);
                    else {
                        var u = t.pool;
                        n(u),
                        s((null === u || void 0 === u || null === (a = u.reserveCoinDenoms) || void 0 === a ? void 0 : a[0]) === pe.coinMinimalDenom ? null === u || void 0 === u || null === (i = u.reserveCoinDenoms) || void 0 === i ? void 0 : i[0] : null === u || void 0 === u || null === (o = u.reserveCoinDenoms) || void 0 === o ? void 0 : o[1]),
                        c((null === u || void 0 === u || null === (l = u.reserveCoinDenoms) || void 0 === l ? void 0 : l[1]) !== pe.coinMinimalDenom ? null === u || void 0 === u || null === (r = u.reserveCoinDenoms) || void 0 === r ? void 0 : r[1] : null === u || void 0 === u || null === (d = u.reserveCoinDenoms) || void 0 === d ? void 0 : d[0]),
                        h(u)
                    }
                }
                ))
            }
              , h = function(e) {
                p(null === e || void 0 === e ? void 0 : e.reserveAccountAddress, 0, Te, !0, !1)
            }
              , p = function(e, t, n, s, c) {
                i(!0),
                Wt(e, t, n, s, c, (function(e, t) {
                    if (i(!1),
                    !e) {
                        a(t.balances);
                        var n = (t.balances && t.balances[0] && t.balances[0].amount) / (t.balances && t.balances[1] && t.balances[1].amount);
                        l(n.toFixed(6))
                    }
                }
                ))
            };
            return Object(Pe.jsx)("div", {
                className: "app-content-wrapper",
                children: Object(Pe.jsxs)(Ke, {
                    children: [Object(Pe.jsx)(kn, {
                        refreshData: h
                    }), Object(Pe.jsx)(qn, {
                        refreshData: h
                    })]
                })
            })
        }
        ))
          , Vn = (n(184),
        n(96))
          , Hn = (n(1150),
        n(432),
        n(109))
          , Wn = (n(1153),
        n(167))
          , zn = n(72)
          , Gn = function() {
            return {
                chainId: null === pe || void 0 === pe ? void 0 : pe.chainId,
                chainName: null === pe || void 0 === pe ? void 0 : pe.chainName,
                rpc: null === pe || void 0 === pe ? void 0 : pe.rpc,
                rest: null === pe || void 0 === pe ? void 0 : pe.rest,
                stakeCurrency: {
                    coinDenom: null === pe || void 0 === pe ? void 0 : pe.coinDenom,
                    coinMinimalDenom: null === pe || void 0 === pe ? void 0 : pe.coinMinimalDenom,
                    coinDecimals: null === pe || void 0 === pe ? void 0 : pe.coinDecimals
                },
                bip44: {
                    coinType: 118
                },
                bech32Config: {
                    bech32PrefixAccAddr: "".concat(null === pe || void 0 === pe ? void 0 : pe.prefix),
                    bech32PrefixAccPub: "".concat(null === pe || void 0 === pe ? void 0 : pe.prefix, "pub"),
                    bech32PrefixValAddr: "".concat(null === pe || void 0 === pe ? void 0 : pe.prefix, "valoper"),
                    bech32PrefixValPub: "".concat(null === pe || void 0 === pe ? void 0 : pe.prefix, "valoperpub"),
                    bech32PrefixConsAddr: "".concat(null === pe || void 0 === pe ? void 0 : pe.prefix, "valcons"),
                    bech32PrefixConsPub: "".concat(null === pe || void 0 === pe ? void 0 : pe.prefix, "valconspub")
                },
                currencies: [{
                    coinDenom: null === pe || void 0 === pe ? void 0 : pe.coinDenom,
                    coinMinimalDenom: null === pe || void 0 === pe ? void 0 : pe.coinMinimalDenom,
                    coinDecimals: null === pe || void 0 === pe ? void 0 : pe.coinDecimals
                }],
                feeCurrencies: [{
                    coinDenom: null === pe || void 0 === pe ? void 0 : pe.coinDenom,
                    coinMinimalDenom: null === pe || void 0 === pe ? void 0 : pe.coinMinimalDenom,
                    coinDecimals: null === pe || void 0 === pe ? void 0 : pe.coinDecimals
                }],
                coinType: 118,
                gasPriceStep: {
                    low: .01,
                    average: .025,
                    high: .04
                }
            }
        }
          , Qn = function(e) {
            Object(be.a)(ve.a.mark((function t() {
                var n, a;
                return ve.a.wrap((function(t) {
                    for (; ; )
                        switch (t.prev = t.next) {
                        case 0:
                            if (window.getOfflineSigner && window.keplr) {
                                t.next = 5;
                                break
                            }
                            "Please install keplr extension",
                            e("Please install keplr extension"),
                            t.next = 23;
                            break;
                        case 5:
                            if (!window.keplr.experimentalSuggestChain) {
                                t.next = 21;
                                break
                            }
                            return t.prev = 6,
                            t.next = 9,
                            window.keplr.experimentalSuggestChain(Gn());
                        case 9:
                            return n = window.getOfflineSigner(null === pe || void 0 === pe ? void 0 : pe.chainId),
                            t.next = 12,
                            n.getAccounts();
                        case 12:
                            a = t.sent,
                            e(null, a[0]),
                            t.next = 19;
                            break;
                        case 16:
                            t.prev = 16,
                            t.t0 = t.catch(6),
                            e(null === t.t0 || void 0 === t.t0 ? void 0 : t.t0.message);
                        case 19:
                            t.next = 23;
                            break;
                        case 21:
                            "Please use the recent version of keplr extension",
                            e("Please use the recent version of keplr extension");
                        case 23:
                        case "end":
                            return t.stop()
                        }
                }
                ), t, null, [[6, 16]])
            }
            )))()
        }
          , Xn = function(e, t) {
            Object(be.a)(ve.a.mark((function n() {
                var a, i;
                return ve.a.wrap((function(n) {
                    for (; ; )
                        switch (n.prev = n.next) {
                        case 0:
                            if (window.getOfflineSigner && window.keplr) {
                                n.next = 5;
                                break
                            }
                            "Please install keplr extension",
                            t("Please install keplr extension"),
                            n.next = 23;
                            break;
                        case 5:
                            if (!window.keplr.experimentalSuggestChain) {
                                n.next = 21;
                                break
                            }
                            return n.prev = 6,
                            n.next = 9,
                            window.keplr.experimentalSuggestChain(e);
                        case 9:
                            return a = window.getOfflineSigner(null === e || void 0 === e ? void 0 : e.chainId),
                            n.next = 12,
                            a.getAccounts();
                        case 12:
                            i = n.sent,
                            t(null, i[0]),
                            n.next = 19;
                            break;
                        case 16:
                            n.prev = 16,
                            n.t0 = n.catch(6),
                            t(null === n.t0 || void 0 === n.t0 ? void 0 : n.t0.message);
                        case 19:
                            n.next = 23;
                            break;
                        case 21:
                            "Please use the recent version of keplr extension",
                            t("Please use the recent version of keplr extension");
                        case 23:
                        case "end":
                            return n.stop()
                        }
                }
                ), n, null, [[6, 16]])
            }
            )))()
        }
          , Kn = function() {
            var e = new Wn.ChainStore([Gn()])
              , t = new Wn.QueriesStore(new zn.MemoryKVStore("test_store_web_queries"),e,Wn.getKeplrFromWindow,Wn.QueriesWithCosmos);
            return new Wn.AccountStore(window,Wn.AccountWithCosmos,e,t,{
                defaultOpts: {
                    prefetching: !1,
                    suggestChain: !1,
                    autoInit: !0,
                    getKeplr: Wn.getKeplrFromWindow
                }
            }).getAccount(null === pe || void 0 === pe ? void 0 : pe.chainId)
        }
          , Yn = "ACCOUNT_ADDRESS_SET"
          , $n = "ACCOUNT_CONNECT_MODAL_SHOW"
          , Jn = "ACCOUNT_VAULTS_SET"
          , Zn = "TOTAL_VALUE_SET"
          , ea = "TRANSACTION_HISTORY_SET"
          , ta = "FORM_MODAL_SHOW"
          , na = "VAULT_SET"
          , aa = "ACCOUNT_BALANCES_SET"
          , ia = "ASSET_BALANCE_SET"
          , sa = "cASSET_BALANCE_SET"
          , ca = "ACCOUNT_POOL_BALANCE_SET"
          , oa = "COLLATERAL_BALANCE_SET"
          , la = "DEBT_BALANCE_SET"
          , ra = "BALANCE_REFRESH_SET"
          , da = "ACCOUNT_NAME_SET"
          , ua = function(e) {
            return {
                type: Yn,
                value: e
            }
        }
          , ma = function(e) {
            return {
                type: da,
                value: e
            }
        }
          , ba = function(e) {
            return {
                type: $n,
                value: e
            }
        }
          , ja = function(e, t) {
            return {
                type: Jn,
                list: e,
                pagination: t
            }
        }
          , va = function(e) {
            return {
                type: na,
                value: e
            }
        }
          , ha = function(e) {
            return {
                type: ra,
                value: e
            }
        }
          , pa = {
            setBalanceRefresh: ha
        }
          , xa = Object(i.b)((function(e) {
            return {
                lang: e.language,
                address: e.account.address,
                refreshBalance: e.account.refreshBalance
            }
        }
        ), pa)((function(e) {
            var t = e.lang
              , n = e.chain
              , a = e.address
              , i = e.refreshBalance
              , s = e.setBalanceRefresh
              , c = Object(o.useState)(!1)
              , l = Object(re.a)(c, 2)
              , r = l[0]
              , d = l[1]
              , u = Object(o.useState)("")
              , m = Object(re.a)(u, 2)
              , b = m[0]
              , j = m[1]
              , v = Object(o.useState)(!1)
              , h = Object(re.a)(v, 2)
              , p = h[0]
              , x = h[1]
              , f = Object(o.useState)()
              , O = Object(re.a)(f, 2)
              , g = O[0]
              , N = O[1]
              , y = Object(o.useState)(0)
              , C = Object(re.a)(y, 2)
              , w = C[0]
              , _ = C[1]
              , D = Object(o.useState)(0)
              , A = Object(re.a)(D, 2)
              , S = A[0]
              , T = A[1]
              , E = Object(o.useState)()
              , I = Object(re.a)(E, 2)
              , F = I[0]
              , B = I[1]
              , R = Object(o.useState)(!1)
              , M = Object(re.a)(R, 2)
              , P = M[0]
              , q = M[1];
            return Object(Pe.jsxs)(Pe.Fragment, {
                children: [Object(Pe.jsx)(oe.a, {
                    type: "primary",
                    size: "small",
                    onClick: function() {
                        Xn(n.chainInfo, (function(e, t) {
                            var a;
                            if (e)
                                return k.b.error(e),
                                void x(!1);
                            j(null === t || void 0 === t ? void 0 : t.address),
                            q(!0),
                            function(e, t, n, a) {
                                _e(e, (function(e, i) {
                                    e ? a(e) : new Ht.QueryClientImpl(i).Balance({
                                        address: t,
                                        denom: n
                                    }).then((function(e) {
                                        a(null, e)
                                    }
                                    )).catch((function(e) {
                                        a(null === e || void 0 === e ? void 0 : e.message)
                                    }
                                    ))
                                }
                                ))
                            }(null === n || void 0 === n || null === (a = n.chainInfo) || void 0 === a ? void 0 : a.rpc, null === t || void 0 === t ? void 0 : t.address, null === n || void 0 === n ? void 0 : n.denom, (function(e, t) {
                                q(!1),
                                e || _(null === t || void 0 === t ? void 0 : t.balance)
                            }
                            )),
                            on(null === pe || void 0 === pe ? void 0 : pe.rest, n.sourceChannelId, (function(e, t) {
                                e || T(t)
                            }
                            ))
                        }
                        )),
                        d(!0)
                    },
                    children: Ot[t].deposit
                }), Object(Pe.jsx)(Je.a, {
                    className: "asstedepositw-modal",
                    centered: !0,
                    closable: !0,
                    footer: null,
                    visible: r,
                    width: 480,
                    onCancel: function() {
                        d(!1)
                    },
                    onOk: function() {
                        d(!1)
                    },
                    closeIcon: Object(Pe.jsx)($e, {
                        name: "close",
                        viewbox: "0 0 19 19"
                    }),
                    title: "IBC Deposit",
                    children: Object(Pe.jsxs)(Hn.a, {
                        layout: "vertical",
                        children: [Object(Pe.jsxs)(Ke, {
                            children: [Object(Pe.jsx)(We, {
                                children: Object(Pe.jsx)(Hn.a.Item, {
                                    label: "From",
                                    children: Object(Pe.jsx)(hn, {
                                        type: "text",
                                        value: At(b, 9, 9),
                                        disabled: !0
                                    })
                                })
                            }), Object(Pe.jsx)($e, {
                                name: "arrow-right",
                                viewbox: "0 0 17.04 15.13"
                            }), Object(Pe.jsx)(We, {
                                children: Object(Pe.jsx)(Hn.a.Item, {
                                    label: "To",
                                    children: Object(Pe.jsx)(hn, {
                                        type: "text",
                                        value: At(a, 9, 9),
                                        disabled: !0
                                    })
                                })
                            })]
                        }), Object(Pe.jsx)(Ke, {
                            children: Object(Pe.jsxs)(We, {
                                className: "position-relative mt-3",
                                children: [Object(Pe.jsx)("div", {
                                    className: "availabe-balance",
                                    children: P ? Object(Pe.jsx)(le.a, {}) : Object(Pe.jsxs)(Pe.Fragment, {
                                        children: [Ot[t].available, Object(Pe.jsxs)("span", {
                                            className: "ml-1",
                                            children: [w && w.amount && qt(w.amount) || 0, " ", n.currency && n.currency.coinDenom && Ut(n.currency.coinDenom) || ""]
                                        }), Object(Pe.jsx)("span", {
                                            className: "assets-maxhalf",
                                            children: Object(Pe.jsx)(oe.a, {
                                                className: " active",
                                                onClick: function() {
                                                    N((null === w || void 0 === w ? void 0 : w.amount) > Ee ? qt((null === w || void 0 === w ? void 0 : w.amount) - Ee) : qt(null === w || void 0 === w ? void 0 : w.amount))
                                                },
                                                children: Ot[t].max
                                            })
                                        })]
                                    })
                                }), Object(Pe.jsx)(Hn.a.Item, {
                                    label: "Amount to Deposit",
                                    className: "assets-input-box",
                                    children: Object(Pe.jsx)(hn, {
                                        value: g,
                                        onChange: function(e) {
                                            return t = e.target.value,
                                            t = kt(t).toString().trim(),
                                            N(t),
                                            void B(On(Mt(t), null === w || void 0 === w ? void 0 : w.amount));
                                            var t
                                        },
                                        validationError: F
                                    })
                                })]
                            })
                        }), Object(Pe.jsx)(Ke, {
                            children: Object(Pe.jsx)(We, {
                                className: "text-center mt-2",
                                children: Object(Pe.jsx)(oe.a, {
                                    loading: p,
                                    type: "primary",
                                    disabled: p || !Number(g) || (null === F || void 0 === F ? void 0 : F.message),
                                    className: "btn-filled modal-btn",
                                    onClick: function() {
                                        if (x(!0),
                                        null === S || void 0 === S || !S.revision_height)
                                            return k.b.error("Unable to get the latest block height"),
                                            void x(!1);
                                        var e = {
                                            msg: {
                                                typeUrl: "/ibc.applications.transfer.v1.MsgTransfer",
                                                value: {
                                                    source_port: "transfer",
                                                    source_channel: n.destChannelId,
                                                    token: {
                                                        denom: n.denom,
                                                        amount: Mt(g)
                                                    },
                                                    sender: b,
                                                    receiver: a,
                                                    timeout_height: {
                                                        revisionNumber: Number(S.revision_number),
                                                        revisionHeight: Number(S.revision_height) + 100
                                                    },
                                                    timeout_timestamp: void 0
                                                }
                                            },
                                            fee: {
                                                amount: [{
                                                    denom: n.denom,
                                                    amount: "25000"
                                                }],
                                                gas: "200000"
                                            },
                                            memo: ""
                                        };
                                        ke(n.chainInfo, e, (function(e, a) {
                                            x(!1),
                                            e ? k.b.error(Object(Pe.jsxs)("span", {
                                                children: [Ot[t].tx_failed, Object(Pe.jsxs)("a", {
                                                    href: "".concat(n.chainInfo.explorerUrlToTx.replace("{txHash}", null === a || void 0 === a ? void 0 : a.transactionHash.toUpperCase())),
                                                    target: "_blank",
                                                    className: "ml-3 text-light ",
                                                    children: [" ", Ot[t].view_explore]
                                                })]
                                            })) : (k.b.success(Object(Pe.jsxs)("span", {
                                                children: [Ot[t].tx_success, Object(Pe.jsxs)("a", {
                                                    href: "".concat(n.chainInfo.explorerUrlToTx.replace("{txHash}", null === a || void 0 === a ? void 0 : a.transactionHash.toUpperCase())),
                                                    target: "_blank",
                                                    className: "ml-3 text-light ",
                                                    children: [" ", Ot[t].view_explore]
                                                })]
                                            })),
                                            s(i + 1),
                                            d(!1))
                                        }
                                        ))
                                    },
                                    children: Ot[t].deposit
                                })
                            })
                        })]
                    })
                })]
            })
        }
        ))
          , fa = (n(1578),
        {
            setBalanceRefresh: ha
        })
          , Oa = Object(i.b)((function(e) {
            return {
                lang: e.language,
                address: e.account.address,
                refreshBalance: e.account.refreshBalance
            }
        }
        ), fa)((function(e) {
            var t = e.lang
              , n = e.chain
              , a = e.address
              , i = e.refreshBalance
              , s = e.setBalanceRefresh
              , c = Object(o.useState)(!1)
              , l = Object(re.a)(c, 2)
              , r = l[0]
              , d = l[1]
              , u = Object(o.useState)("")
              , m = Object(re.a)(u, 2)
              , b = m[0]
              , j = m[1]
              , v = Object(o.useState)(!1)
              , h = Object(re.a)(v, 2)
              , p = h[0]
              , x = h[1]
              , f = Object(o.useState)()
              , O = Object(re.a)(f, 2)
              , g = O[0]
              , N = O[1]
              , y = Object(o.useState)(0)
              , C = Object(re.a)(y, 2)
              , w = C[0]
              , _ = C[1]
              , D = Object(o.useState)()
              , A = Object(re.a)(D, 2)
              , S = A[0]
              , T = A[1];
            return Object(Pe.jsxs)(Pe.Fragment, {
                children: [Object(Pe.jsx)(oe.a, {
                    type: "primary",
                    size: "small",
                    onClick: function() {
                        Xn(n.chainInfo, (function(e, t) {
                            var a;
                            e ? k.b.error(e) : (j(null === t || void 0 === t ? void 0 : t.address),
                            on(null === (a = n.chainInfo) || void 0 === a ? void 0 : a.rest, n.sourceChannelId, (function(e, t) {
                                e || _(t)
                            }
                            )))
                        }
                        )),
                        d(!0)
                    },
                    children: Ot[t].withdraw
                }), Object(Pe.jsx)(Je.a, {
                    className: "asstedepositw-modal",
                    centered: !0,
                    closable: !0,
                    footer: null,
                    visible: r,
                    width: 480,
                    onCancel: function() {
                        d(!1)
                    },
                    onOk: function() {
                        d(!1)
                    },
                    closeIcon: Object(Pe.jsx)($e, {
                        name: "close",
                        viewbox: "0 0 19 19"
                    }),
                    title: "IBC Withdraw",
                    children: Object(Pe.jsxs)(Hn.a, {
                        layout: "vertical",
                        children: [Object(Pe.jsxs)(Ke, {
                            children: [Object(Pe.jsx)(We, {
                                children: Object(Pe.jsx)(Hn.a.Item, {
                                    label: "From",
                                    children: Object(Pe.jsx)(hn, {
                                        type: "text",
                                        value: At(a, 9, 9),
                                        disabled: !0
                                    })
                                })
                            }), Object(Pe.jsx)($e, {
                                name: "arrow-right",
                                viewbox: "0 0 17.04 15.13"
                            }), Object(Pe.jsx)(We, {
                                children: Object(Pe.jsx)(Hn.a.Item, {
                                    label: "To",
                                    children: Object(Pe.jsx)(hn, {
                                        type: "text",
                                        value: At(b, 9, 9),
                                        disabled: !0
                                    })
                                })
                            })]
                        }), Object(Pe.jsx)(Ke, {
                            children: Object(Pe.jsxs)(We, {
                                className: "position-relative",
                                children: [Object(Pe.jsxs)("div", {
                                    className: "availabe-balance",
                                    children: [Ot[t].available, Object(Pe.jsxs)("span", {
                                        className: "ml-1",
                                        children: [n && n.ibc && qt(n.ibc.amount) || 0, " ", n.currency && n.currency.coinDenom && Ut(n.currency.coinDenom) || ""]
                                    }), Object(Pe.jsx)("span", {
                                        className: "assets-maxhalf",
                                        children: Object(Pe.jsx)(oe.a, {
                                            className: " active",
                                            onClick: function() {
                                                var e;
                                                N(qt((null === n || void 0 === n || null === (e = n.ibc) || void 0 === e ? void 0 : e.amount) || 0))
                                            },
                                            children: Ot[t].max
                                        })
                                    })]
                                }), Object(Pe.jsx)(Hn.a.Item, {
                                    label: "Amount to Withdraw",
                                    children: Object(Pe.jsx)(hn, {
                                        value: g,
                                        onChange: function(e) {
                                            return function(e) {
                                                var t;
                                                e = kt(e).toString().trim(),
                                                N(e),
                                                T(On(Mt(e), null === n || void 0 === n || null === (t = n.ibc) || void 0 === t ? void 0 : t.amount))
                                            }(e.target.value)
                                        },
                                        validationError: S
                                    })
                                })]
                            })
                        }), Object(Pe.jsx)(Ke, {
                            children: Object(Pe.jsx)(We, {
                                className: "text-center mt-2",
                                children: Object(Pe.jsx)(oe.a, {
                                    loading: p,
                                    type: "primary",
                                    disabled: p || !Number(g) || (null === S || void 0 === S ? void 0 : S.message),
                                    onClick: function() {
                                        var e;
                                        if (x(!0),
                                        null === w || void 0 === w || !w.revision_height)
                                            return k.b.error("Unable to get the latest block height"),
                                            void x(!1);
                                        var c = {
                                            msg: {
                                                typeUrl: "/ibc.applications.transfer.v1.MsgTransfer",
                                                value: {
                                                    source_port: "transfer",
                                                    source_channel: n.sourceChannelId,
                                                    token: {
                                                        denom: null === (e = n.ibc) || void 0 === e ? void 0 : e.denom,
                                                        amount: Mt(g)
                                                    },
                                                    sender: a,
                                                    receiver: b,
                                                    timeout_height: {
                                                        revisionNumber: Number(w.revision_number),
                                                        revisionHeight: Number(w.revision_height) + 100
                                                    },
                                                    timeout_timestamp: void 0
                                                }
                                            },
                                            fee: bn(),
                                            memo: ""
                                        };
                                        ke(Gn(), c, (function(e, a) {
                                            x(!1),
                                            e ? k.b.error(Object(Pe.jsxs)("span", {
                                                children: [Ot[t].tx_failed, Object(Pe.jsxs)("a", {
                                                    href: "".concat(n.chainInfo.explorerUrlToTx.replace("{txHash}", null === a || void 0 === a ? void 0 : a.transactionHash.toUpperCase())),
                                                    target: "_blank",
                                                    className: "ml-3 text-light ",
                                                    children: [" ", Ot[t].view_explore]
                                                })]
                                            })) : (k.b.success(Object(Pe.jsxs)("span", {
                                                children: [Ot[t].tx_success, Object(Pe.jsxs)("a", {
                                                    href: "".concat(n.chainInfo.explorerUrlToTx.replace("{txHash}", null === a || void 0 === a ? void 0 : a.transactionHash.toUpperCase())),
                                                    target: "_blank",
                                                    className: "ml-3 text-light ",
                                                    children: [" ", Ot[t].view_explore]
                                                })]
                                            })),
                                            s(i + 1),
                                            d(!1))
                                        }
                                        ))
                                    },
                                    className: "btn-filled modal-btn",
                                    children: Ot[t].withdraw
                                })
                            })
                        })]
                    })
                })]
            })
        }
        ))
          , ga = [{
            counterpartyChainId: "theta-testnet-001",
            sourceChannelId: "channel-4",
            destChannelId: "channel-278",
            coinMinimalDenom: "uatom",
            ibcDenomHash: "ibc/EF48E6B1A1A19F47ECAEA62F5670C37C0580E86A9E88498B7E393EB6F49F33C0"
        }, {
            counterpartyChainId: "bombay-12",
            sourceChannelId: "channel-1",
            destChannelId: "channel-115",
            coinMinimalDenom: "uusd",
            ibcDenomHash: "ibc/D4FBF14D5963C1619BBD5FE8EF05AA015F1D1BF6305C8CFA0BC776BB70B27C31"
        }, {
            counterpartyChainId: "test-core-1",
            sourceChannelId: "channel-2",
            destChannelId: "channel-69",
            coinMinimalDenom: "uxprt",
            ibcDenomHash: "ibc/F9DEC4F5FFE69B7B9A881D394A30D11DDE2C1FD1FF3941D7F9EBD7CF208BD61A"
        }, {
            counterpartyChainId: "osmo-test-4",
            sourceChannelId: "channel-3",
            destChannelId: "channel-214",
            coinMinimalDenom: "uosmo",
            ibcDenomHash: "ibc/47BD209179859CDE4A2806763D7189B6E6FE13A17880FE2B42DE1E6C1E329E23"
        }, {
            counterpartyChainId: "bombay-12",
            sourceChannelId: "channel-1",
            destChannelId: "channel-115",
            coinMinimalDenom: "uluna",
            ibcDenomHash: "ibc/265435C653FE85CD659E88CD51D4A735BDD4D3804871400378A488C71D68C72B"
        }]
          , Na = [{
            rpc: "https://dev-cassets.comdex.one/vega",
            rest: "https://dev-cassets.comdex.one/vega-rest",
            chainId: "theta-testnet-001",
            chainName: "Cosmos Hub Test",
            stakeCurrency: {
                coinDenom: "ATOM",
                coinMinimalDenom: "uatom",
                coinDecimals: 6,
                coinGeckoId: "cosmos",
                coinImageUrl: window.location.origin + "/public/assets/tokens/cosmos.svg"
            },
            bip44: {
                coinType: 118
            },
            bech32Config: {
                bech32PrefixAccAddr: "cosmos",
                bech32PrefixAccPub: "cosmospub",
                bech32PrefixValAddr: "cosmosvaloper",
                bech32PrefixValPub: "cosmosvaloperpub",
                bech32PrefixConsAddr: "cosmosvalcons",
                bech32PrefixConsPub: "cosmosvalconspub"
            },
            currencies: [{
                coinDenom: "ATOM",
                coinMinimalDenom: "uatom",
                coinDecimals: 6,
                coinGeckoId: "cosmos",
                coinImageUrl: window.location.origin + "/public/assets/tokens/cosmos.svg"
            }],
            feeCurrencies: [{
                coinDenom: "ATOM",
                coinMinimalDenom: "uatom",
                coinDecimals: 6,
                coinGeckoId: "cosmos",
                coinImageUrl: window.location.origin + "/public/assets/tokens/cosmos.svg"
            }],
            coinType: 118,
            features: ["stargate", "ibc-transfer"],
            explorerUrlToTx: "https://explorer.theta-testnet.polypore.xyz/transactions/{txHash}"
        }, {
            rpc: "https://terra-bombay-rpc.comdex.one",
            rest: "https://terra-bombay-rest.comdex.one",
            chainId: "bombay-12",
            chainName: "Terra Test",
            stakeCurrency: {
                coinDenom: "LUNA",
                coinMinimalDenom: "uluna",
                coinDecimals: 6,
                coinGeckoId: "terra-luna",
                coinImageUrl: window.location.origin + "/public/assets/tokens/luna.png"
            },
            bip44: {
                coinType: 330
            },
            bech32Config: {
                bech32PrefixAccAddr: "terra",
                bech32PrefixAccPub: "terrapub",
                bech32PrefixValAddr: "terravaloper",
                bech32PrefixValPub: "terravaloperpub",
                bech32PrefixConsAddr: "terravalcons",
                bech32PrefixConsPub: "terravalconspub"
            },
            currencies: [{
                coinDenom: "LUNA",
                coinMinimalDenom: "uluna",
                coinDecimals: 6,
                coinGeckoId: "terra-luna",
                coinImageUrl: window.location.origin + "/public/assets/tokens/luna.png"
            }, {
                coinDenom: "UST",
                coinMinimalDenom: "uusd",
                coinDecimals: 6,
                coinGeckoId: "terrausd",
                coinImageUrl: window.location.origin + "/public/assets/tokens/ust.png"
            }, {
                coinDenom: "KRT",
                coinMinimalDenom: "ukrw",
                coinDecimals: 6,
                coinGeckoId: "terra-krw",
                coinImageUrl: window.location.origin + "/public/assets/tokens/krt.png"
            }],
            feeCurrencies: [{
                coinDenom: "LUNA",
                coinMinimalDenom: "uluna",
                coinDecimals: 6,
                coinGeckoId: "terra-luna",
                coinImageUrl: window.location.origin + "/public/assets/tokens/luna.png"
            }, {
                coinDenom: "UST",
                coinMinimalDenom: "uusd",
                coinDecimals: 6,
                coinGeckoId: "terrausd",
                coinImageUrl: window.location.origin + "/public/assets/tokens/ust.png"
            }],
            gasPriceStep: {
                low: .015,
                average: .015,
                high: .015
            },
            features: ["stargate", "ibc-transfer", "no-legacy-stdTx"],
            explorerUrlToTx: "https://finder.terra.money/testnet/tx/{txHash}"
        }, {
            rpc: "https://rpc.testnet.persistence.one",
            rest: "https://rest.testnet.persistence.one",
            chainId: "test-core-1",
            chainName: "Persistence-test",
            stakeCurrency: {
                coinDenom: "XPRT",
                coinMinimalDenom: "uxprt",
                coinDecimals: 6,
                coinGeckoId: "persistence",
                coinImageUrl: window.location.origin + "/public/assets/tokens/xprt.png"
            },
            bip44: {
                coinType: 750
            },
            bech32Config: {
                bech32PrefixAccAddr: "persistence",
                bech32PrefixAccPub: "persistencepub",
                bech32PrefixValAddr: "persistencevaloper",
                bech32PrefixValPub: "persistencevaloperpub",
                bech32PrefixConsAddr: "persistencevalcons",
                bech32PrefixConsPub: "persistencevalconspub"
            },
            currencies: [{
                coinDenom: "XPRT",
                coinMinimalDenom: "uxprt",
                coinDecimals: 6,
                coinGeckoId: "persistence",
                coinImageUrl: window.location.origin + "/public/assets/tokens/xprt.png"
            }],
            feeCurrencies: [{
                coinDenom: "XPRT",
                coinMinimalDenom: "uxprt",
                coinDecimals: 6,
                coinGeckoId: "persistence",
                coinImageUrl: window.location.origin + "/public/assets/tokens/xprt.png"
            }],
            features: ["stargate", "ibc-transfer"],
            explorerUrlToTx: "https://test-core-1.explorer.persistence.one/transactions/{txHash}"
        }, {
            rpc: "https://rpc.osmo-test.ccvalidators.com",
            rest: "https://lcd.osmo-test.ccvalidators.com",
            chainId: "osmo-test-4",
            chainName: "Osmosis-Test",
            stakeCurrency: {
                coinDenom: "OSMO",
                coinMinimalDenom: "uosmo",
                coinDecimals: 6,
                coinGeckoId: "osmosis",
                coinImageUrl: window.location.origin + "/public/assets/tokens/osmosis.svg"
            },
            bip44: {
                coinType: 118
            },
            bech32Config: {
                bech32PrefixAccAddr: "osmo",
                bech32PrefixAccPub: "osmopub",
                bech32PrefixValAddr: "osmovaloper",
                bech32PrefixValPub: "osmovaloperpub",
                bech32PrefixConsAddr: "osmovalcons",
                bech32PrefixConsPub: "osmovalconspub"
            },
            currencies: [{
                coinDenom: "OSMO",
                coinMinimalDenom: "uosmo",
                coinDecimals: 6,
                coinGeckoId: "osmosis",
                coinImageUrl: window.location.origin + "/public/assets/tokens/osmosis.svg"
            }, {
                coinDenom: "ION",
                coinMinimalDenom: "uion",
                coinDecimals: 6,
                coinGeckoId: "ion",
                coinImageUrl: window.location.origin + "/public/assets/tokens/ion.png"
            }],
            feeCurrencies: [{
                coinDenom: "OSMO",
                coinMinimalDenom: "uosmo",
                coinDecimals: 6,
                coinGeckoId: "osmosis",
                coinImageUrl: window.location.origin + "/public/assets/tokens/osmosis.svg"
            }],
            features: ["stargate", "ibc-transfer"],
            explorerUrlToTx: "https://bigdipper.testnet.osmo.mp20.net/transactions/{txHash}"
        }]
          , ya = Object(i.b)((function(e) {
            return {
                lang: e.language,
                assetBalance: e.account.balances.asset,
                balances: e.account.balances.list,
                markets: e.oracle.market.list
            }
        }
        ))((function(e) {
            var t = e.lang
              , n = e.assetBalance
              , a = e.balances
              , i = e.markets
              , s = [{
                title: "Asset",
                dataIndex: "asset",
                key: "asset"
            }, {
                title: "Balances",
                dataIndex: "balances",
                key: "balances",
                align: "right",
                render: function(e) {
                    return Object(Pe.jsxs)(Pe.Fragment, {
                        children: [Object(Pe.jsx)("p", {
                            children: (null === e || void 0 === e ? void 0 : e.amount) || 0
                        }), Object(Pe.jsxs)("small", {
                            children: [qt(null === e || void 0 === e ? void 0 : e.value, 2), " ", Ot[t].USD]
                        })]
                    })
                }
            }, {
                title: "IBC Deposit",
                dataIndex: "ibcdeposit",
                key: "ibcdeposit",
                width: 110,
                render: function(e) {
                    if (e)
                        return Object(Pe.jsx)(xa, {
                            chain: e
                        })
                }
            }, {
                title: "IBC Withdraw",
                dataIndex: "ibcwithdraw",
                key: "ibcwithdraw",
                width: 110,
                render: function(e) {
                    if (e)
                        return Object(Pe.jsx)(Oa, {
                            chain: e
                        })
                }
            }]
              , c = function(e) {
                return Rt(i, e) || 0
            }
              , o = ga.map((function(e) {
                var t = Na.filter((function(t) {
                    return t.chainId === e.counterpartyChainId
                }
                ))[0]
                  , n = t && t.currencies.find((function(t) {
                    return t.coinMinimalDenom === e.coinMinimalDenom
                }
                ));
                n || k.b.info("Unknown currency ".concat(e.coinMinimalDenom, " for ").concat(e.counterpartyChainId));
                var i = a.find((function(t) {
                    return t.denom === (null === e || void 0 === e ? void 0 : e.ibcDenomHash)
                }
                ))
                  , s = c(null === i || void 0 === i ? void 0 : i.denom) * (null === i || void 0 === i ? void 0 : i.amount);
                return {
                    chainInfo: t,
                    denom: null === n || void 0 === n ? void 0 : n.coinMinimalDenom,
                    balance: {
                        amount: null !== i && void 0 !== i && i.amount ? qt(i.amount) : 0,
                        value: s || 0
                    },
                    ibc: i,
                    sourceChannelId: e.sourceChannelId,
                    destChannelId: e.destChannelId,
                    isUnstable: e.isUnstable,
                    currency: n
                }
            }
            ))
              , l = a.filter((function(e) {
                return e.denom === (null === pe || void 0 === pe ? void 0 : pe.coinMinimalDenom)
            }
            ))[0]
              , r = c(null === l || void 0 === l ? void 0 : l.denom) * (null === l || void 0 === l ? void 0 : l.amount)
              , d = [{
                key: pe.chainId,
                asset: Object(Pe.jsx)(Pe.Fragment, {
                    children: Object(Pe.jsxs)("div", {
                        className: "assets-withicon",
                        children: [Object(Pe.jsx)("div", {
                            className: "assets-icon",
                            children: Object(Pe.jsx)($e, {
                                name: Dt(null === pe || void 0 === pe ? void 0 : pe.coinMinimalDenom)
                            })
                        }), " ", Ut(null === pe || void 0 === pe ? void 0 : pe.coinMinimalDenom), " "]
                    })
                }),
                balances: {
                    amount: null !== l && void 0 !== l && l.amount ? qt(l.amount) : 0,
                    value: r || 0
                }
            }]
              , u = o && o.map((function(e) {
                var t, n;
                return {
                    key: e.denom,
                    asset: Object(Pe.jsx)(Pe.Fragment, {
                        children: Object(Pe.jsxs)("div", {
                            className: "assets-withicon",
                            children: [Object(Pe.jsx)("div", {
                                className: "assets-icon",
                                children: Object(Pe.jsx)($e, {
                                    name: Dt(null === (t = e.currency) || void 0 === t ? void 0 : t.coinMinimalDenom)
                                })
                            }), " ", null === (n = e.currency) || void 0 === n ? void 0 : n.coinDenom, " "]
                        })
                    }),
                    balances: e.balance,
                    ibcdeposit: e,
                    ibcwithdraw: e
                }
            }
            ))
              , m = rn.a.concat(d, u);
            return Object(Pe.jsx)("div", {
                className: "app-content-wrapper",
                children: Object(Pe.jsxs)("div", {
                    className: "app-content-small assets-section",
                    children: [Object(Pe.jsx)(Ke, {
                        children: Object(Pe.jsx)(We, {
                            children: Object(Pe.jsxs)("div", {
                                className: "assets-head",
                                children: [Object(Pe.jsx)("div", {
                                    children: Object(Pe.jsx)("h2", {
                                        children: Ot[t].comdex_assets
                                    })
                                }), Object(Pe.jsxs)("div", {
                                    children: [Object(Pe.jsx)("span", {
                                        children: Ot[t].total_asset_balance
                                    }), " ", Pt(n, 2), " ", Ot[t].USD]
                                })]
                            })
                        })
                    }), Object(Pe.jsx)(Ke, {
                        children: Object(Pe.jsx)(We, {
                            children: Object(Pe.jsx)(Vn.a, {
                                className: "custom-table assets-table",
                                dataSource: m,
                                columns: s,
                                pagination: !1,
                                scroll: {
                                    x: "100%"
                                }
                            })
                        })
                    })]
                })
            })
        }
        ))
          , Ca = (n(1579),
        n(750))
          , wa = (n(577),
        n(148))
          , _a = (n(1581),
        {
            setComplete: vt,
            setCautionNoticeValues: ut,
            setSuccessData: ht
        })
          , Da = Object(i.b)((function(e) {
            return {
                address: e.account.address,
                demandCoin: e.swap.demandCoin,
                offerCoin: e.swap.offerCoin,
                pool: e.liquidity.pool,
                spotPrice: e.liquidity.spotPrice,
                poolBalance: e.liquidity.poolBalance,
                slippage: e.swap.slippage,
                slippageTolerance: e.swap.slippageTolerance
            }
        }
        ), _a)((function(e) {
            var t = e.poolBalance
              , n = e.spotPrice
              , a = e.offerCoin
              , i = e.demandCoin
              , s = e.address
              , c = e.pool
              , l = e.name
              , r = e.isDisabled
              , d = e.setCautionNoticeValues
              , u = e.setComplete
              , m = e.slippage
              , b = e.slippageTolerance
              , j = e.setSuccessData
              , v = e.validationError
              , h = Object(o.useState)(!1)
              , p = Object(re.a)(h, 2)
              , x = p[0]
              , f = p[1];
            Object(o.useEffect)((function() {
                u(!1)
            }
            ), []);
            return Object(Pe.jsxs)("div", {
                className: "assets-form-btn",
                children: [Object(Pe.jsx)(oe.a, {
                    disabled: r || x || !(a && Number(a.amount)) || (null === v || void 0 === v ? void 0 : v.message),
                    type: "primary",
                    loading: x,
                    className: "btn-filled",
                    onClick: function() {
                        return d(!0, !1)
                    },
                    children: l
                }), " ", Object(Pe.jsx)(xt, {
                    inProgress: x,
                    handleClick: function() {
                        var e;
                        f(!0),
                        d(!1, !1);
                        var o = function() {
                            var e = t && t[0] && t[0].denom
                              , i = Number(e === pe.coinMinimalDenom ? n : 1 / n);
                            return e === (null === a || void 0 === a ? void 0 : a.denom) ? Lt(i + i * Number(b / 100)) : Lt(i - i * Number(b / 100))
                        }();
                        if ("0" === o)
                            return k.b.info("Unable to get order price"),
                            void f(!1);
                        Ae({
                            message: {
                                typeUrl: "/comdex.liquidity.v1beta1.MsgSwapWithinBatch",
                                value: {
                                    swapRequesterAddress: s,
                                    poolId: null === c || void 0 === c || null === (e = c._) || void 0 === e ? void 0 : e.id,
                                    swapTypeId: 1,
                                    offerCoin: {
                                        denom: null === a || void 0 === a ? void 0 : a.denom,
                                        amount: Mt(null === a || void 0 === a ? void 0 : a.amount)
                                    },
                                    offerCoinFee: {
                                        denom: null === a || void 0 === a ? void 0 : a.denom,
                                        amount: Math.ceil(null === a || void 0 === a ? void 0 : a.fee).toString()
                                    },
                                    demandCoinDenom: null === i || void 0 === i ? void 0 : i.denom,
                                    orderPrice: o
                                }
                            },
                            fee: bn(),
                            memo: ""
                        }, s, (function(e, t) {
                            var s;
                            if (f(!1),
                            e)
                                k.b.error(e);
                            else if (null !== t && void 0 !== t && t.code)
                                k.b.info(null === t || void 0 === t ? void 0 : t.rawLog);
                            else {
                                var c = {
                                    hash: null === t || void 0 === t ? void 0 : t.transactionHash,
                                    cSwapPrice: (1 / n).toFixed(2),
                                    swapped: a,
                                    brought: i,
                                    slippage: null === (s = Number(m)) || void 0 === s ? void 0 : s.toFixed(pe.coinDecimals)
                                };
                                u(!0),
                                j(c)
                            }
                        }
                        ))
                    }
                }), Object(Pe.jsxs)("div", {
                    className: "d-flex agree-btn",
                    children: [Object(Pe.jsx)(fn, {}), " "]
                })]
            })
        }
        ))
          , Aa = function(e) {
            var t, n = e.asset, a = e.lang, i = e.markets, s = e.poolBalance, c = e.premium, o = s.filter((function(e) {
                return (null === e || void 0 === e ? void 0 : e.denom) === (null === n || void 0 === n ? void 0 : n.denom)
            }
            ))[0], l = o && o.amount && Number(o.amount), r = l * Rt(i, o && o.denom);
            return Object(Pe.jsxs)("div", {
                className: "cswap-head",
                children: [Object(Pe.jsxs)("div", {
                    className: "header-left",
                    children: [Object(Pe.jsx)("div", {
                        className: "icon-circle",
                        children: Object(Pe.jsx)("div", {
                            className: "svg-icon-inner",
                            children: Object(Pe.jsx)($e, {
                                name: Dt(null === n || void 0 === n ? void 0 : n.denom),
                                viewbox: "0 0 26.229 14"
                            })
                        })
                    }), Object(Pe.jsx)("div", {
                        children: n ? Ut(n.denom) : ""
                    })]
                }), Object(Pe.jsx)("div", {
                    className: "head-right",
                    children: Object(Pe.jsxs)(Ke, {
                        children: [Object(Pe.jsxs)(We, {
                            xs: "6",
                            className: "mb-2",
                            children: [Object(Pe.jsxs)("label", {
                                children: ["Oracle Price ", Object(Pe.jsx)(ft, {
                                    text: Ot[a].oracle_price_tooltip
                                })]
                            }), Object(Pe.jsxs)("p", {
                                children: [" ", null === (t = Rt(i, null === n || void 0 === n ? void 0 : n.denom)) || void 0 === t ? void 0 : t.toFixed(2), " ", Ot[a].USD]
                            })]
                        }), Object(Pe.jsxs)(We, {
                            xs: "6",
                            className: "mb-2",
                            children: [Object(Pe.jsxs)("label", {
                                children: ["Volume ", Object(Pe.jsx)(ft, {
                                    text: Ot[a].volume_tooltip
                                })]
                            }), Object(Pe.jsx)("p", {
                                children: l ? It(qt(l)) : 0
                            })]
                        }), Object(Pe.jsxs)(We, {
                            xs: "6",
                            className: "mb-2",
                            children: [Object(Pe.jsxs)("label", {
                                children: ["Premium ", Object(Pe.jsx)(ft, {
                                    text: Ot[a].premium_tooltip
                                })]
                            }), Object(Pe.jsxs)("p", {
                                children: [c, "%"]
                            })]
                        }), Object(Pe.jsxs)(We, {
                            xs: "6",
                            className: "mb-2",
                            children: [Object(Pe.jsxs)("label", {
                                children: ["Liquidity ", Object(Pe.jsx)(ft, {
                                    text: Ot[a].liquidity_tooltip
                                })]
                            }), Object(Pe.jsxs)("p", {
                                children: [r ? It(qt(r, 2)) : 0, " ", Ot[a].USD]
                            })]
                        })]
                    })
                })]
            })
        }
          , ka = function(e) {
            var t, n = e.lang, a = e.offerCoin, i = e.demandCoin, s = e.setReverse, c = e.setSpotPrice, l = e.markets, r = e.pools, d = e.setPool, u = e.setPoolBalance, m = e.balances, b = e.reverse, j = e.asset, v = e.spotPrice, h = e.setAssets, p = e.setPools, x = e.setDemandCoinDenom, f = e.setOfferCoinDenom, O = e.setOfferCoinAmount, g = e.setDemandCoinAmount, N = e.setSlippage, y = e.slippage, C = e.setCautionNoticeValues, w = e.setPairs, _ = e.pairs, D = e.pool, A = e.poolBalance, S = e.setParams, T = e.params, E = e.setSlippageTolerance, I = e.slippageTolerance, F = Object(o.useState)(!1), B = Object(re.a)(F, 2), R = (B[0],
            B[1]), M = Object(o.useState)(), P = Object(re.a)(M, 2), q = P[0], L = P[1], U = Object(o.useState)(), V = Object(re.a)(U, 2), H = V[0], W = V[1], z = Object(Pe.jsxs)("div", {
                className: "slippage-tolerance",
                children: [Object(Pe.jsxs)("div", {
                    children: ["Slippage Tolerance", " ", Object(Pe.jsx)(ft, {
                        text: "Your transaction will revert if the price changes unfavourably by more than this percent."
                    })]
                }), Object(Pe.jsxs)("div", {
                    className: "tolerance-bottom",
                    children: [Object(Pe.jsxs)(wa.a.Group, {
                        onChange: function(e) {
                            return E(e.target.value)
                        },
                        defaultValue: "a",
                        children: [Object(Pe.jsx)(wa.a.Button, {
                            value: "0.5",
                            children: "0.5%"
                        }), Object(Pe.jsx)(wa.a.Button, {
                            value: "1",
                            children: "1%"
                        }), Object(Pe.jsx)(wa.a.Button, {
                            value: "1.5",
                            children: "1.5%"
                        })]
                    }), Object(Pe.jsx)("div", {
                        className: "input-section",
                        children: Object(Pe.jsx)(hn, {
                            className: "input-cmdx",
                            onChange: function(e) {
                                return t = (t = e.target.value).toString().trim(),
                                W(On(t)),
                                void E(t);
                                var t
                            },
                            value: I,
                            validationError: H,
                            placeholder: "0"
                        })
                    })]
                })]
            });
            Object(o.useEffect)((function() {
                null !== a && void 0 !== a && a.denom || f(pe.coinMinimalDenom),
                null !== i && void 0 !== i && i.denom || x("ucgold"),
                null !== a && void 0 !== a && a.denom && null !== i && void 0 !== i && i.denom && Y(null === a || void 0 === a ? void 0 : a.denom, null === i || void 0 === i ? void 0 : i.denom),
                s(!1),
                j.cAssets.length || (R(!0),
                K(0, Te, !0, !1)),
                C(!1, !1),
                X()
            }
            ), [r]),
            Object(o.useEffect)((function() {
                var e;
                return G(0, Te, !0, !1),
                Q(0, Te, !0, !1),
                e = function(e, t) {
                    e ? k.b.error(e) : S(null === t || void 0 === t ? void 0 : t.params)
                }
                ,
                we((function(t, n) {
                    t ? e(t) : new de.QueryClientImpl(n).Params().then((function(t) {
                        e(null, t)
                    }
                    )).catch((function(t) {
                        return e(null === t || void 0 === t ? void 0 : t.message)
                    }
                    ))
                }
                )),
                function() {
                    f(""),
                    x("")
                }
            }
            ), []),
            Object(o.useEffect)((function() {
                null !== a && void 0 !== a && a.amount && Z(b ? v : 1 / v, null === a || void 0 === a ? void 0 : a.amount)
            }
            ), [v]);
            var G = function(e, t, n, a) {
                wn(e, 100, n, a, (function(e, t) {
                    e ? k.b.error(e) : w(t.pairsInfo, t.pagination)
                }
                ))
            }
              , Q = function(e, t, n, a) {
                R(!0),
                Se(e, t, n, a, (function(e, t) {
                    R(!1),
                    e ? k.b.error(e) : p(t.pools)
                }
                ))
            }
              , X = function() {
                O(0, 0),
                g(0),
                L()
            }
              , K = function(e, t, n, a) {
                _n(e, t, n, a, (function(e, t) {
                    R(!1),
                    e ? k.b.error(e) : h(t.assets, t.pagination)
                }
                ))
            }
              , Y = function() {
                var e = Object(be.a)(ve.a.mark((function e(t, n) {
                    var a;
                    return ve.a.wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                a = ee(t, n),
                                d(a),
                                $(null === a || void 0 === a ? void 0 : a.reserveAccountAddress, 0, 10, !0, !1);
                            case 3:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )));
                return function(t, n) {
                    return e.apply(this, arguments)
                }
            }()
              , $ = function(e, t, n, a, i) {
                Wt(e, t, n, a, i, (function(e, t) {
                    if (!e) {
                        u(t.balances);
                        var n = t.balances && t.balances[0] && t.balances[0].denom
                          , a = (t.balances && t.balances[0] && t.balances[0].amount) / (t.balances && t.balances[1] && t.balances[1].amount);
                        c(n === pe.coinMinimalDenom ? a.toFixed(6) : (1 / a).toFixed(6))
                    }
                }
                ))
            }
              , J = function(e) {
                var t = Math.ceil(Mt(e) * (Bt(null === T || void 0 === T ? void 0 : T.swapFeeRate) / 2));
                L(On(Number(Mt(e)) + t, te, "macro")),
                O(e, t),
                Z(b ? v : 1 / v, e)
            }
              , Z = function(e, t) {
                g((e * t).toFixed(6))
            }
              , ee = function(e, t) {
                return rn.a.filter(r, {
                    reserveCoinDenoms: [e, t]
                })[0]
            }
              , te = Vt(m, null === a || void 0 === a ? void 0 : a.denom) || 0
              , ne = function() {
                var e = null === i || void 0 === i ? void 0 : i.denom
                  , t = null === a || void 0 === a ? void 0 : a.denom;
                x(t),
                g(null === a || void 0 === a ? void 0 : a.amount),
                f(e),
                O(null === i || void 0 === i ? void 0 : i.amount, Math.ceil(Mt(null === i || void 0 === i ? void 0 : i.amount) * (Bt(null === T || void 0 === T ? void 0 : T.swapFeeRate) / 2))),
                s(!b)
            }
              , ae = Object(xe.a)(new Set([pe.coinMinimalDenom]))
              , ie = Et(_ && _.list)
              , se = b ? ie : ae
              , ce = b ? ae : ie;
            return Object(Pe.jsx)("div", {
                className: "app-content-wrapper",
                children: Object(Pe.jsx)("div", {
                    className: "app-content-small cswap-section",
                    children: Object(Pe.jsx)(Ke, {
                        children: Object(Pe.jsxs)(We, {
                            children: [Object(Pe.jsx)(Aa, {
                                lang: n,
                                asset: i,
                                markets: l,
                                poolBalance: A,
                                premium: function() {
                                    var e = (b ? 1 / v : v) * Rt(l, null === a || void 0 === a ? void 0 : a.denom)
                                      , t = Rt(l, null === i || void 0 === i ? void 0 : i.denom)
                                      , n = 100 * ((e - t) / t);
                                    return n && null !== i && void 0 !== i && i.denom ? n.toFixed(2) : Number().toFixed(2)
                                }()
                            }), Object(Pe.jsxs)("div", {
                                className: "cswap-content",
                                children: [Object(Pe.jsx)(Ca.a, {
                                    className: "setting-popover",
                                    content: z,
                                    placement: "bottomRight",
                                    overlayClassName: "cmdx-popver",
                                    trigger: "click",
                                    children: Object(Pe.jsx)($e, {
                                        name: "setting",
                                        viewbox: "0 0 33 33"
                                    })
                                }), Object(Pe.jsxs)("div", {
                                    className: "assets-select-card",
                                    children: [Object(Pe.jsxs)("div", {
                                        className: "assets-left",
                                        children: [Object(Pe.jsx)("label", {
                                            className: "leftlabel",
                                            children: Ot[n].from
                                        }), Object(Pe.jsx)("div", {
                                            className: "assets-select-wrapper",
                                            children: Object(Pe.jsx)(yn, {
                                                value: null !== a && void 0 !== a && a.denom ? null === a || void 0 === a ? void 0 : a.denom : null,
                                                onChange: function(e) {
                                                    (null === i || void 0 === i ? void 0 : i.denom) === e ? ne() : f(e),
                                                    Y(e, null === i || void 0 === i ? void 0 : i.denom)
                                                },
                                                list: se
                                            })
                                        })]
                                    }), Object(Pe.jsxs)("div", {
                                        className: "assets-right",
                                        children: [Object(Pe.jsxs)("div", {
                                            className: "label-right",
                                            children: [Ot[n].available, Object(Pe.jsxs)("span", {
                                                className: "ml-1",
                                                children: [Pt(te), " ", Ut(null === a || void 0 === a ? void 0 : a.denom)]
                                            }), " ", Object(Pe.jsxs)("div", {
                                                className: "maxhalf",
                                                children: [Object(Pe.jsx)(oe.a, {
                                                    className: "active",
                                                    onClick: function() {
                                                        return J(Number(te) > Ee ? qt(te - Ee) : qt(te))
                                                    },
                                                    children: Ot[n].max
                                                }), " ", Object(Pe.jsx)(oe.a, {
                                                    onClick: function() {
                                                        return J(te ? qt(te) / 2 : 0)
                                                    },
                                                    children: Ot[n].half
                                                })]
                                            })]
                                        }), Object(Pe.jsxs)("div", {
                                            className: "input-select",
                                            children: [Object(Pe.jsx)(hn, {
                                                value: a && a.amount,
                                                className: "assets-select-input with-select",
                                                onChange: function(e) {
                                                    return function(e) {
                                                        e = kt(e).toString().trim(),
                                                        J(e);
                                                        var t = A.filter((function(e) {
                                                            return (null === e || void 0 === e ? void 0 : e.denom) === (null === a || void 0 === a ? void 0 : a.denom)
                                                        }
                                                        ))[0]
                                                          , n = t && t.amount && Number(t.amount);
                                                        N(Number(e) / (Number(qt(n)) + Number(e)) * 100)
                                                    }(e.target.value)
                                                },
                                                validationError: q
                                            }), Object(Pe.jsx)("small", {
                                                children: (null === D || void 0 === D ? void 0 : D.id) && function() {
                                                    var e = (b ? v : 1 / v) * Rt(l, null === i || void 0 === i ? void 0 : i.denom) * (null === a || void 0 === a ? void 0 : a.amount);
                                                    return "\u2248 $".concat(Number(e && isFinite(e) ? e : 0).toFixed(2))
                                                }()
                                            }), Object(Pe.jsx)("small", {
                                                children: (null === D || void 0 === D ? void 0 : D.id) && function() {
                                                    var e = Ut(null === a || void 0 === a ? void 0 : a.denom)
                                                      , t = Ut(null === i || void 0 === i ? void 0 : i.denom)
                                                      , n = b ? v : 1 / v;
                                                    return "1 ".concat(e || "", " = ").concat(Number(n && isFinite(n) ? n : 0).toFixed(6), " ").concat(t || "")
                                                }()
                                            })]
                                        })]
                                    })]
                                }), Object(Pe.jsx)("div", {
                                    className: "buysell-arrow",
                                    children: Object(Pe.jsx)($e, {
                                        onClick: ne,
                                        name: "buy-sell-arrow",
                                        viewbox: "0 0 30.937 32.344"
                                    })
                                }), Object(Pe.jsxs)("div", {
                                    className: "assets-select-card",
                                    children: [Object(Pe.jsxs)("div", {
                                        className: "assets-left",
                                        children: [Object(Pe.jsx)("label", {
                                            className: "leftlabel",
                                            children: Ot[n].to
                                        }), Object(Pe.jsx)("div", {
                                            className: "assets-select-wrapper",
                                            children: Object(Pe.jsx)(yn, {
                                                value: null !== i && void 0 !== i && i.denom ? null === i || void 0 === i ? void 0 : i.denom : null,
                                                onChange: function(e) {
                                                    (null === a || void 0 === a ? void 0 : a.denom) === e ? ne() : x(e),
                                                    x(e),
                                                    Y(null === a || void 0 === a ? void 0 : a.denom, e)
                                                },
                                                list: ce
                                            })
                                        })]
                                    }), Object(Pe.jsx)("div", {
                                        className: "assets-right swap-assets-right",
                                        children: Object(Pe.jsxs)("div", {
                                            children: [Object(Pe.jsx)(hn, {
                                                disabled: !0,
                                                className: "assets-select-input with-select",
                                                value: i && i.amount
                                            }), " ", Object(Pe.jsx)("small", {
                                                children: (null === D || void 0 === D ? void 0 : D.id) && function() {
                                                    var e = Ut(null === a || void 0 === a ? void 0 : a.denom)
                                                      , t = Ut(null === i || void 0 === i ? void 0 : i.denom)
                                                      , n = b ? 1 / v : v;
                                                    return "1 ".concat(t || "", " = ").concat(Number(n && isFinite(n) ? n : 0).toFixed(6), " ").concat(e || "")
                                                }()
                                            })]
                                        })
                                    })]
                                }), Object(Pe.jsx)(Ke, {
                                    children: Object(Pe.jsxs)(We, {
                                        sm: "10",
                                        className: "mt-3 mx-auto card-bottom-details",
                                        children: [Object(Pe.jsxs)(Ke, {
                                            className: "mt-1",
                                            children: [Object(Pe.jsx)(We, {
                                                children: Object(Pe.jsx)("label", {
                                                    children: Ot[n].estimated_slippage
                                                })
                                            }), Object(Pe.jsxs)(We, {
                                                className: I < y ? "alert-label text-right" : "text-right",
                                                children: [null === (t = Number(y)) || void 0 === t ? void 0 : t.toFixed(pe.coinDecimals), "%"]
                                            })]
                                        }), Object(Pe.jsxs)(Ke, {
                                            className: "mt-1",
                                            children: [Object(Pe.jsx)(We, {
                                                children: Object(Pe.jsxs)("label", {
                                                    children: [Ot[n].swap_fee, " ", Object(Pe.jsx)(ft, {
                                                        text: Ot[n].tooltip_tx_fee
                                                    })]
                                                })
                                            }), Object(Pe.jsxs)(We, {
                                                className: "text-right",
                                                children: [100 * (Bt(null === T || void 0 === T ? void 0 : T.swapFeeRate) || 0), "%"]
                                            })]
                                        })]
                                    })
                                }), Object(Pe.jsx)("div", {
                                    className: "assets-form-btn",
                                    children: Object(Pe.jsx)(Da, {
                                        validationError: q || H,
                                        isDisabled: !(null !== D && void 0 !== D && D.id) || !Number(null === i || void 0 === i ? void 0 : i.amount) || !Number(I),
                                        max: te,
                                        name: I < y ? Ot[n].swap_anyway : Ot[n].swap
                                    })
                                })]
                            })]
                        })
                    })
                })
            })
        };
        ka.propTypes = {
            setAssets: d.func.isRequired,
            setCautionNoticeValues: d.func.isRequired,
            setOfferCoinDenom: d.func.isRequired,
            setOfferCoinAmount: d.func.isRequired,
            setDemandCoinAmount: d.func.isRequired,
            setParams: d.func.isRequired,
            setSlippage: d.func.isRequired,
            setSlippageTolerance: d.func.isRequired,
            setSpotPrice: d.func.isRequired,
            setPairs: d.func.isRequired,
            setPool: d.func.isRequired,
            setPoolBalance: d.func.isRequired,
            setPools: d.func.isRequired,
            setReverse: d.func.isRequired,
            asset: d.shape({
                cAssets: d.arrayOf(d.shape({
                    id: d.shape({
                        low: d.number
                    }),
                    name: d.string,
                    denom: d.string
                }))
            }),
            balances: d.arrayOf(d.shape({
                denom: d.string.isRequired,
                amount: d.string
            })),
            demandCoin: d.shape({
                amount: d.oneOfType([d.string, d.number]),
                denom: d.string
            }),
            handleSet: d.func,
            lang: d.string,
            markets: d.arrayOf(d.shape({
                rates: d.shape({
                    high: d.number,
                    low: d.number,
                    unsigned: d.bool
                }),
                symbol: d.string,
                script_id: d.string
            })),
            pairs: d.shape({
                list: d.arrayOf(d.shape({
                    denomIn: d.string,
                    denomOut: d.string,
                    liquidationRatio: d.string,
                    id: d.shape({
                        high: d.number,
                        low: d.number,
                        unsigned: d.bool
                    })
                }))
            }),
            params: d.shape({
                swapFeeRate: d.string
            }),
            pool: d.shape({
                id: d.shape({
                    high: d.number,
                    low: d.number,
                    unsigned: d.bool
                }),
                reserveAccountAddress: d.string,
                poolCoinDenom: d.string,
                reserveCoinDenoms: d.array
            }),
            poolBalance: d.arrayOf(d.shape({
                amount: d.string,
                denom: d.string
            })),
            pools: d.arrayOf(d.shape({
                id: d.shape({
                    high: d.number,
                    low: d.number,
                    unsigned: d.bool
                }),
                reserveAccountAddress: d.string,
                poolCoinDenom: d.string,
                reserveCoinDenoms: d.array
            })),
            reverse: d.bool,
            slippageTolerance: d.oneOfType([d.string, d.number]),
            spotPrice: d.oneOfType([d.string, d.number]),
            slippage: d.oneOfType([d.string, d.number])
        };
        var Sa = {
            setDemandCoinDenom: mt,
            setPool: y,
            setOfferCoinAmount: function(e, t) {
                return {
                    type: it,
                    value: e,
                    fee: t
                }
            },
            setOfferCoinDenom: bt,
            setDemandCoinAmount: function(e) {
                return {
                    type: nt,
                    value: e
                }
            },
            setPoolBalance: C,
            setSpotPrice: _,
            setReverse: jt,
            setAssets: cn,
            setPools: N,
            setSlippage: function(e) {
                return {
                    type: ot,
                    value: e
                }
            },
            setCautionNoticeValues: ut,
            setPairs: sn,
            setParams: function(e) {
                return {
                    type: rt,
                    value: e
                }
            },
            setSlippageTolerance: function(e) {
                return {
                    type: dt,
                    value: e
                }
            }
        }
          , Ta = Object(i.b)((function(e) {
            return {
                lang: e.language,
                asset: e.asset._,
                markets: e.oracle.market.list,
                demandCoin: e.swap.demandCoin,
                offerCoin: e.swap.offerCoin,
                spotPrice: e.liquidity.spotPrice,
                reverse: e.swap.reverse,
                balances: e.account.balances.list,
                pools: e.liquidity.pool.list,
                slippage: e.swap.slippage,
                pairs: e.asset.pairs,
                pool: e.liquidity.pool._,
                poolBalance: e.liquidity.poolBalance,
                params: e.swap.params,
                slippageTolerance: e.swap.slippageTolerance
            }
        }
        ), Sa)(ka)
          , Ea = (n(1582),
        n.p + "static/media/govern-top-image.054c1bcc.svg")
          , Ia = n.p + "static/media/govern-icon-1.af06f1c4.svg"
          , Fa = n.p + "static/media/govern-icon-2.1d539bda.svg"
          , Ba = Object(i.b)((function(e) {
            return {
                lang: e.language
            }
        }
        ))((function(e) {
            return Object(Pe.jsxs)("div", {
                className: "app-content-wrapper",
                children: [Object(Pe.jsx)(Ke, {
                    children: Object(Pe.jsx)(We, {
                        children: Object(Pe.jsxs)("div", {
                            className: "dashboard-banner govern-banner ",
                            children: [Object(Pe.jsxs)("div", {
                                className: "banner-left",
                                children: [Object(Pe.jsxs)("h2", {
                                    children: ["Welcome to comdex ", Object(Pe.jsx)("br", {}), " Staking and Governance"]
                                }), Object(Pe.jsx)("div", {
                                    className: "govern-left-paira ",
                                    children: Ot[e.lang].banner_paira
                                })]
                            }), Object(Pe.jsx)("img", {
                                className: "banner-right",
                                src: Ea,
                                alt: "@error"
                            })]
                        })
                    })
                }), Object(Pe.jsx)(Ke, {
                    className: "mt-4",
                    children: Object(Pe.jsx)(We, {
                        children: Object(Pe.jsxs)("div", {
                            className: "govern-bottom-container",
                            children: [Object(Pe.jsxs)("div", {
                                className: "MyHome-upper mygovern-flex-basic mr-4",
                                children: [Object(Pe.jsxs)("div", {
                                    className: "govern-card-uppart mb-3",
                                    children: [Object(Pe.jsx)("div", {
                                        className: "govern-card-uppart-icon mr-3",
                                        children: Object(Pe.jsx)("img", {
                                            src: Ia,
                                            alt: "@icon"
                                        })
                                    }), Object(Pe.jsx)("div", {
                                        className: "govern-card-uppart-text",
                                        children: Ot[e.lang].yield_card_text
                                    })]
                                }), Object(Pe.jsx)("div", {
                                    className: "govern-card-down",
                                    children: Object(Pe.jsxs)("div", {
                                        className: "ant-btn ant-btn-primary btn-filled ",
                                        children: [Object(Pe.jsx)("a", {
                                            "aria-label": "Unagii",
                                            href: "https://app.unagii.com/stake/comdex",
                                            rel: "noreferrer",
                                            target: "_blank",
                                            children: Ot[e.lang].manage_stake
                                        }), " "]
                                    })
                                })]
                            }), Object(Pe.jsxs)("div", {
                                className: "MyHome-upper mygovern-flex-basic",
                                children: [Object(Pe.jsxs)("div", {
                                    className: "govern-card-uppart mb-3",
                                    children: [Object(Pe.jsx)("div", {
                                        className: "govern-card-uppart-icon mr-3",
                                        children: Object(Pe.jsx)("img", {
                                            src: Fa,
                                            alt: "@icon"
                                        })
                                    }), Object(Pe.jsx)("div", {
                                        className: "govern-card-uppart-text ",
                                        children: Ot[e.lang].omniflix_card_text
                                    })]
                                }), Object(Pe.jsx)("div", {
                                    className: "govern-card-down",
                                    children: Object(Pe.jsx)("div", {
                                        className: "ant-btn ant-btn-primary btn-filled ",
                                        children: Object(Pe.jsx)("a", {
                                            "aria-label": "Omniflix",
                                            href: "https://comdex.omniflix.co/",
                                            rel: "noreferrer",
                                            target: "_blank",
                                            children: Ot[e.lang].manage_stake
                                        })
                                    })
                                })]
                            })]
                        })
                    })
                })]
            })
        }
        ))
          , Ra = (n(730),
        n(232))
          , Ma = (n(304),
        {
            0: "0%",
            150: "Min - 150%",
            200: "Safe: 200%"
        })
          , Pa = function(e) {
            var t, n = e.lang, a = e.address, i = e.pairs, s = e.pair, c = e.balances, l = e.setPair, r = e.setAssetIn, d = e.setAssetOut, u = e.setAmountIn, m = e.setAmountOut, b = e.setComplete, j = e.inAmount, v = e.outAmount, h = e.markets, p = e.collateralRatio, x = e.setCollateralRatio, f = e.setCautionNoticeValues, O = e.vaults, g = e.setVault, N = e.vault, y = e.setSuccessData, C = Object(o.useState)(!1), w = Object(re.a)(C, 2), _ = w[0], D = w[1], A = Object(o.useState)(), S = Object(re.a)(A, 2), T = S[0], E = S[1];
            Object(o.useEffect)((function() {
                if (N.id) {
                    var e;
                    I(null === N || void 0 === N || null === (e = N.pairId) || void 0 === e ? void 0 : e.low)
                } else {
                    var t = me.a.fromNumber(1);
                    I(null === t || void 0 === t ? void 0 : t.low),
                    F(t)
                }
            }
            ), [i, O]),
            Object(o.useEffect)((function() {
                d(s && s.denomOut),
                r(s && s.denomIn)
            }
            ), [s]),
            Object(o.useEffect)((function() {
                b(!1),
                x(200),
                B()
            }
            ), []);
            var I = function(e) {
                var t, n;
                t = e,
                n = function(e, t) {
                    e ? k.b.error(e) : l(t.pairInfo)
                }
                ,
                we((function(e, a) {
                    e ? n(e) : new Cn.QueryServiceClientImpl(a).QueryPair({
                        id: me.a.fromNumber(t)
                    }).then((function(e) {
                        n(null, e)
                    }
                    )).catch((function(e) {
                        n(null === e || void 0 === e ? void 0 : e.message)
                    }
                    ))
                }
                ))
            }
              , F = function(e) {
                var t = O.filter((function(t) {
                    return t.pairId.toNumber() === e.toNumber()
                }
                ));
                g(t[0])
            }
              , B = function() {
                u(0),
                m(0)
            }
              , R = function(e) {
                x(e),
                m(P(j, q, e / 100, Rt(h, s && s.denomOut)))
            }
              , M = function(e) {
                u(e),
                m(P(e, q, p / 100, Rt(h, s && s.denomOut)))
            }
              , P = function(e, t, n, a) {
                var i = e * t / (n * a);
                return (isFinite(i) && i || 0).toFixed(6)
            }
              , q = Rt(h, s && s.denomIn)
              , L = function(e) {
                var t = Rt(h, s && s.denomOut)
                  , n = Ut(s && s.denomIn)
                  , a = Ut(s && s.denomOut);
                return e ? "1 ".concat(n || "", " = ").concat(Number(t ? q / t : 0).toFixed(6), " ").concat(a || "") : "1 ".concat(a || "", " = ").concat(Number(t / q).toFixed(6), " ").concat(n || "")
            }
              , U = Vt(c, s && s.denomIn) || 0
              , V = Et(i && i.list, "in")
              , H = Et(i && i.list);
            return Object(Pe.jsxs)("div", {
                className: "borrw-content-card",
                children: [Object(Pe.jsxs)("div", {
                    className: "borrow-tab-head",
                    children: [Object(Pe.jsx)("div", {
                        className: "head-icons",
                        children: Object(Pe.jsx)("div", {
                            className: "head-icons-inner",
                            children: Object(Pe.jsx)($e, {
                                name: Dt(s && s.denomIn)
                            })
                        })
                    }), Object(Pe.jsx)("div", {
                        className: "head-icons",
                        children: Object(Pe.jsx)("div", {
                            className: "head-icons-inner",
                            children: Object(Pe.jsx)($e, {
                                name: Dt(s && s.denomOut)
                            })
                        })
                    }), Object(Pe.jsxs)("div", {
                        className: "righttext",
                        children: [Object(Pe.jsx)("h3", {
                            children: Ot[n].borrow_cAssets
                        }), Object(Pe.jsxs)("p", {
                            children: [Ot[n].collateral, " :", " ", Ut(s && s.denomIn)]
                        })]
                    })]
                }), Object(Pe.jsxs)("div", {
                    className: "assets-select-card mb-4",
                    children: [Object(Pe.jsxs)("div", {
                        className: "assets-left",
                        children: [Object(Pe.jsx)("label", {
                            className: "leftlabel",
                            children: Ot[n].choose_collateral
                        }), Object(Pe.jsx)("div", {
                            className: "assets-select-wrapper",
                            children: Object(Pe.jsx)(yn, {
                                list: V,
                                value: s && s.denomIn,
                                onChange: function(e) {
                                    var t = i && i.list.filter((function(t) {
                                        return t.denomIn === e && t.denomOut === s.denomOut
                                    }
                                    ));
                                    t.length && (l(t[0]),
                                    F(t[0].id)),
                                    r(e),
                                    m(P(j, q, p / 100, Rt(h, e)))
                                }
                            })
                        })]
                    }), Object(Pe.jsxs)("div", {
                        className: "assets-right",
                        children: [Object(Pe.jsxs)("div", {
                            className: "label-right",
                            children: [Ot[n].available, Object(Pe.jsxs)("span", {
                                className: "ml-1",
                                children: [Pt(U), " ", Ut(s && s.denomIn)]
                            }), Object(Pe.jsx)("div", {
                                className: "maxhalf",
                                children: Object(Pe.jsx)(oe.a, {
                                    className: "active",
                                    onClick: function() {
                                        return M(Number(U) > Ee ? qt(U - Ee) : qt(U))
                                    },
                                    children: "Max"
                                })
                            })]
                        }), Object(Pe.jsxs)("div", {
                            children: [Object(Pe.jsx)("div", {
                                className: "input-select",
                                children: Object(Pe.jsx)(hn, {
                                    value: j,
                                    onChange: function(e) {
                                        return t = e.target.value,
                                        t = kt(t).toString().trim(),
                                        M(t),
                                        void E(On(Mt(t), U));
                                        var t
                                    },
                                    validationError: T
                                })
                            }), Object(Pe.jsx)("small", {
                                children: function() {
                                    var e = Rt(h, null === s || void 0 === s ? void 0 : s.denomIn) * j;
                                    return "\u2248 $".concat(Number(e && isFinite(e) ? e : 0).toFixed(2))
                                }()
                            }), Object(Pe.jsx)("small", {
                                children: L("In")
                            })]
                        })]
                    })]
                }), Object(Pe.jsxs)("div", {
                    className: "slider-bar",
                    children: [Object(Pe.jsxs)("label", {
                        children: [Ot[n].set_collateral_ratio, " ", Object(Pe.jsx)(ft, {
                            text: Ot[n].liquidate_below_minimum
                        })]
                    }), Object(Pe.jsxs)("div", {
                        className: "slider-numbers",
                        children: [Object(Pe.jsx)(Sn.a, {
                            className: "comdex-slider borrow-comdex-slider " + (p <= 150 ? " red-track" : p < 200 ? " orange-track" : p >= 200 ? " green-track" : " "),
                            defaultValue: p,
                            marks: Ma,
                            value: p,
                            max: 500,
                            onChange: R,
                            min: 0,
                            tooltipVisible: !1
                        }), Object(Pe.jsx)(hn, {
                            defaultValue: p,
                            onChange: function(e) {
                                var t;
                                R(null === (t = e.target) || void 0 === t ? void 0 : t.value)
                            },
                            placeholder: "0",
                            value: p
                        }), Object(Pe.jsx)("span", {
                            className: "collateral-percentage",
                            children: "%"
                        })]
                    })]
                }), Object(Pe.jsxs)("div", {
                    className: "assets-select-card mt-4",
                    children: [Object(Pe.jsxs)("div", {
                        className: "assets-left",
                        children: [Object(Pe.jsx)("label", {
                            className: "leftlabel",
                            children: Ot[n].borrow_cAsset
                        }), Object(Pe.jsx)("div", {
                            className: "assets-select-wrapper",
                            children: Object(Pe.jsx)(yn, {
                                list: H,
                                value: s && s.denomOut,
                                onChange: function(e) {
                                    var t = i && i.list.filter((function(t) {
                                        return t.denomIn === s.denomIn && t.denomOut === e
                                    }
                                    ));
                                    t.length && (l(t[0]),
                                    F(t[0].id)),
                                    d(e),
                                    m(P(j, q, p / 100, Rt(h, e)))
                                }
                            })
                        })]
                    }), Object(Pe.jsx)("div", {
                        className: "assets-right",
                        children: Object(Pe.jsxs)("div", {
                            children: [Object(Pe.jsx)("div", {
                                className: "input-select",
                                children: Object(Pe.jsx)(hn, {
                                    value: v,
                                    disabled: !0
                                })
                            }), Object(Pe.jsx)("small", {
                                children: function() {
                                    var e = Rt(h, null === s || void 0 === s ? void 0 : s.denomOut) * v;
                                    return "\u2248 $".concat(Number(e && isFinite(e) ? e : 0).toFixed(2))
                                }()
                            }), Object(Pe.jsx)("small", {
                                children: L()
                            })]
                        })
                    })]
                }), Object(Pe.jsx)(Ke, {
                    children: Object(Pe.jsx)(We, {
                        sm: "10",
                        className: "mt-3 mx-auto card-bottom-details",
                        children: Object(Pe.jsxs)(Ke, {
                            className: "mt-1",
                            children: [Object(Pe.jsx)(We, {
                                children: Object(Pe.jsx)("label", {
                                    children: Ot[n].oracle_price
                                })
                            }), Object(Pe.jsxs)(We, {
                                className: "text-right",
                                children: [null === (t = Rt(h, s && s.denomOut)) || void 0 === t ? void 0 : t.toFixed(2), " ", Ot[n].USD]
                            })]
                        })
                    })
                }), Object(Pe.jsxs)("div", {
                    className: "assets-form-btn",
                    children: [Object(Pe.jsxs)(oe.a, {
                        disabled: _ || !s || !Number(j) || !Number(v) || (null === T || void 0 === T ? void 0 : T.message) || Number(p) < 150,
                        loading: _,
                        type: "primary",
                        className: "btn-filled",
                        onClick: function() {
                            return f(!0, !1)
                        },
                        children: [Ot[n].borrow, " "]
                    }), Object(Pe.jsx)(xt, {
                        inProgress: _,
                        handleClick: function() {
                            return function() {
                                if (a) {
                                    if (null !== N && void 0 !== N && N.id)
                                        return k.b.info("This vault already exits. Try editing"),
                                        void f(!1, !1);
                                    D(!0),
                                    f(!1, !1),
                                    k.b.info("Transaction initiated"),
                                    Ae({
                                        message: {
                                            typeUrl: un("create"),
                                            value: {
                                                from: a,
                                                amountIn: Mt(j),
                                                amountOut: Mt(v),
                                                pairId: null === s || void 0 === s ? void 0 : s.id
                                            }
                                        },
                                        fee: bn()
                                    }, a, (function(e, t) {
                                        if (D(!1),
                                        e)
                                            k.b.error(e);
                                        else if (null !== t && void 0 !== t && t.code)
                                            k.b.info(null === t || void 0 === t ? void 0 : t.rawLog);
                                        else {
                                            var n = {
                                                hash: null === t || void 0 === t ? void 0 : t.transactionHash,
                                                collateralRatio: p,
                                                inAmount: j,
                                                outAmount: v,
                                                pair: s
                                            };
                                            b(!0),
                                            B(),
                                            y(n)
                                        }
                                    }
                                    ))
                                } else
                                    k.b.error("Address not found, please connect to Keplr")
                            }()
                        }
                    }), Object(Pe.jsx)("div", {
                        className: "d-flex agree-btn",
                        children: Object(Pe.jsx)(fn, {
                            targetTab: "2"
                        })
                    })]
                })]
            })
        };
        Pa.propTypes = {
            lang: d.string.isRequired,
            setAmountIn: d.func.isRequired,
            setAmountOut: d.func.isRequired,
            setAssetIn: d.func.isRequired,
            setAssetOut: d.func.isRequired,
            setCautionNoticeValues: d.func.isRequired,
            setCollateralRatio: d.func.isRequired,
            setComplete: d.func.isRequired,
            setPair: d.func.isRequired,
            setVault: d.func.isRequired,
            setSuccessData: d.func.isRequired,
            address: d.string,
            balances: d.arrayOf(d.shape({
                denom: d.string.isRequired,
                amount: d.string
            })),
            collateralRatio: d.number,
            inAmount: d.oneOfType([d.string, d.number]),
            markets: d.arrayOf(d.shape({
                rates: d.shape({
                    high: d.number,
                    low: d.number,
                    unsigned: d.bool
                }),
                symbol: d.string,
                script_id: d.string
            })),
            outAmount: d.oneOfType([d.string, d.number]),
            pair: d.shape({
                denomIn: d.string,
                denomOut: d.string
            }),
            pairs: d.shape({
                list: d.arrayOf(d.shape({
                    denomIn: d.string,
                    denomOut: d.string,
                    liquidationRatio: d.string,
                    id: d.shape({
                        high: d.number,
                        low: d.number,
                        unsigned: d.bool
                    })
                }))
            }),
            vault: d.shape({
                collateral: d.shape({
                    denom: d.string
                }),
                debt: d.shape({
                    denom: d.string
                }),
                id: d.shape({
                    low: d.number
                })
            }),
            vaults: d.arrayOf(d.shape({
                collateral: d.shape({
                    amount: d.string,
                    denom: d.string
                }),
                debt: d.shape({
                    amount: d.string,
                    denom: d.string
                }),
                id: d.shape({
                    high: d.number,
                    low: d.number,
                    unsigned: d.bool
                })
            }))
        };
        var qa = {
            setPair: function(e) {
                return {
                    type: E,
                    value: e
                }
            },
            setVault: va,
            setComplete: vt,
            setAssetIn: function(e) {
                return {
                    type: B,
                    value: e
                }
            },
            setAssetOut: function(e) {
                return {
                    type: F,
                    value: e
                }
            },
            setAmountIn: function(e) {
                return {
                    type: M,
                    value: e
                }
            },
            setAmountOut: function(e) {
                return {
                    type: R,
                    value: e
                }
            },
            setCollateralRatio: function(e) {
                return {
                    type: P,
                    value: e
                }
            },
            setCautionNoticeValues: ut,
            setSuccessData: ht
        }
          , La = Object(i.b)((function(e) {
            return {
                lang: e.language,
                address: e.account.address,
                pair: e.asset.pair,
                pairs: e.asset.pairs,
                inAmount: e.asset.inAmount,
                outAmount: e.asset.outAmount,
                markets: e.oracle.market.list,
                collateralRatio: e.asset.collateralRatio,
                balances: e.account.balances.list,
                vaults: e.account.vaults.list,
                vault: e.account.vault
            }
        }
        ), qa)(Pa)
          , Ua = gn.a.Option
          , Va = {
            0: "0%",
            150: "Min - 150%",
            200: "Safe: 200%"
        }
          , Ha = function(e) {
            var t, n, a, i, s, c, l, d, u, m, b = e.lang, j = e.address, v = e.vaults, h = e.vault, p = e.markets, x = e.balances, f = e.setVault, O = e.setCautionValues, g = e.setBalanceRefresh, N = e.refreshBalance, y = Object(o.useState)(!1), C = Object(re.a)(y, 2), w = C[0], _ = C[1], D = Object(o.useState)(), A = Object(re.a)(D, 2), S = A[0], T = A[1], E = Object(o.useState)("deposit"), I = Object(re.a)(E, 2), F = I[0], B = I[1], R = Object(o.useState)(), M = Object(re.a)(R, 2), P = M[0], q = M[1], L = Object(o.useState)(), U = Object(re.a)(L, 2), V = U[0], H = U[1], W = Object(r.f)();
            Object(o.useEffect)((function() {
                O(!1, !1),
                h.id && z(h.id)
            }
            ), [v]);
            var z = function(e) {
                !function(e, t) {
                    we((function(n, a) {
                        n ? t(n) : new Zt.QueryServiceClientImpl(a).QueryVault({
                            id: e
                        }).then((function(e) {
                            t(null, e)
                        }
                        )).catch((function(e) {
                            t(null === e || void 0 === e ? void 0 : e.message)
                        }
                        ))
                    }
                    ))
                }(e, (function(e, t) {
                    var n;
                    if (e)
                        k.b.error(e);
                    else {
                        f(null === t || void 0 === t ? void 0 : t.vaultInfo);
                        var a = (100 * Bt(null === t || void 0 === t || null === (n = t.vaultInfo) || void 0 === n ? void 0 : n.collateralizationRatio)).toFixed(1);
                        H(a)
                    }
                }
                ))
            }
              , G = Vt(x, null === h || void 0 === h || null === (t = h.collateral) || void 0 === t ? void 0 : t.denom) || 0
              , Q = Vt(x, null === h || void 0 === h || null === (n = h.debt) || void 0 === n ? void 0 : n.denom) || 0
              , X = Rt(p, null === h || void 0 === h || null === (a = h.collateral) || void 0 === a ? void 0 : a.denom)
              , K = Rt(p, null === h || void 0 === h || null === (i = h.debt) || void 0 === i ? void 0 : i.denom)
              , Y = function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : F
                  , n = e / 100;
                if ("deposit" === t) {
                    var a, i, s = Number(null === h || void 0 === h || null === (a = h.debt) || void 0 === a ? void 0 : a.amount) * K * n / X - Number(null === h || void 0 === h || null === (i = h.collateral) || void 0 === i ? void 0 : i.amount);
                    H(e),
                    T(qt(s)),
                    q(On(s, G))
                } else if ("withdraw" === t) {
                    var c, o, l, r = Number(null === h || void 0 === h || null === (c = h.collateral) || void 0 === c ? void 0 : c.amount) - Number(null === h || void 0 === h || null === (o = h.debt) || void 0 === o ? void 0 : o.amount) * K * n / X;
                    H(e),
                    T(qt(r)),
                    q(On(r, null === h || void 0 === h || null === (l = h.collateral) || void 0 === l ? void 0 : l.amount))
                } else if ("repay" === t) {
                    var d, u, m = Number(null === h || void 0 === h || null === (d = h.debt) || void 0 === d ? void 0 : d.amount) - Number(null === h || void 0 === h || null === (u = h.collateral) || void 0 === u ? void 0 : u.amount) * X / (K * n);
                    H(e),
                    T(qt(m)),
                    q(On(m, Q))
                } else {
                    var b, j, v = Number(null === h || void 0 === h || null === (b = h.collateral) || void 0 === b ? void 0 : b.amount) * X / (K * n) - Number(null === h || void 0 === h || null === (j = h.debt) || void 0 === j ? void 0 : j.amount);
                    H(e),
                    T(qt(v)),
                    q(On(v))
                }
            }
              , $ = function(e, t) {
                if ("deposit" === t) {
                    var n, a, i = (Number(null === h || void 0 === h || null === (n = h.collateral) || void 0 === n ? void 0 : n.amount) + Number(Mt(e))) * X / (Number(null === h || void 0 === h || null === (a = h.debt) || void 0 === a ? void 0 : a.amount) * K);
                    H((100 * i).toFixed(1)),
                    q(On(Mt(e), G))
                } else if ("withdraw" === t) {
                    var s, c, o, l = (Number(null === h || void 0 === h || null === (s = h.collateral) || void 0 === s ? void 0 : s.amount) - Number(Mt(e))) * X / (Number(null === h || void 0 === h || null === (c = h.debt) || void 0 === c ? void 0 : c.amount) * K);
                    H((100 * l).toFixed(1)),
                    q(On(Mt(e), null === h || void 0 === h || null === (o = h.collateral) || void 0 === o ? void 0 : o.amount))
                } else if ("repay" === t) {
                    var r, d, u = Number(null === h || void 0 === h || null === (r = h.collateral) || void 0 === r ? void 0 : r.amount) * X / ((Number(null === h || void 0 === h || null === (d = h.debt) || void 0 === d ? void 0 : d.amount) - Number(Mt(e))) * K);
                    H((100 * u).toFixed(1)),
                    q(On(Mt(e), Q))
                } else {
                    var m, b, j = Number(null === h || void 0 === h || null === (m = h.collateral) || void 0 === m ? void 0 : m.amount) * X / ((Number(null === h || void 0 === h || null === (b = h.debt) || void 0 === b ? void 0 : b.amount) + Number(Mt(e))) * K);
                    H((100 * j).toFixed(1)),
                    q(On(Mt(e)))
                }
            };
            return Object(Pe.jsxs)("div", {
                className: "borrw-content-wapper",
                children: [Object(Pe.jsxs)("div", {
                    className: "borrowcard-header",
                    children: [Object(Pe.jsxs)("div", {
                        className: "head-colums",
                        children: [Object(Pe.jsx)("div", {
                            className: "head-icons",
                            children: Object(Pe.jsx)("div", {
                                className: "head-icons-inner",
                                children: Object(Pe.jsx)($e, {
                                    name: "collateral-icon",
                                    viewbox: "0 0 36.444 36.996"
                                })
                            })
                        }), Object(Pe.jsx)("label", {
                            children: Ot[b].collateral
                        }), Object(Pe.jsx)("p", {
                            children: qt((null === h || void 0 === h || null === (s = h.collateral) || void 0 === s ? void 0 : s.amount) || 0)
                        })]
                    }), Object(Pe.jsxs)("div", {
                        className: "head-colums",
                        children: [Object(Pe.jsx)("div", {
                            className: "head-icons",
                            children: Object(Pe.jsx)("div", {
                                className: "head-icons-inner",
                                children: Object(Pe.jsx)($e, {
                                    name: "borrowed-icon",
                                    viewbox: "0 0 39.009 39"
                                })
                            })
                        }), Object(Pe.jsx)("label", {
                            children: Ot[b].borrowed
                        }), Object(Pe.jsx)("p", {
                            children: qt((null === h || void 0 === h || null === (c = h.debt) || void 0 === c ? void 0 : c.amount) || 0)
                        })]
                    }), Object(Pe.jsxs)("div", {
                        className: "head-colums",
                        children: [Object(Pe.jsx)("div", {
                            className: "head-icons",
                            children: Object(Pe.jsxs)("div", {
                                className: "head-icons-inner",
                                children: [Object(Pe.jsx)($e, {
                                    name: Dt(null === h || void 0 === h || null === (l = h.collateral) || void 0 === l ? void 0 : l.denom)
                                }), " "]
                            })
                        }), Object(Pe.jsx)("label", {
                            children: Ut(null === h || void 0 === h || null === (d = h.collateral) || void 0 === d ? void 0 : d.denom)
                        }), Object(Pe.jsx)("p", {
                            children: qt(G)
                        })]
                    }), Object(Pe.jsxs)("div", {
                        className: "head-colums",
                        children: [Object(Pe.jsx)("div", {
                            className: "head-icons",
                            children: Object(Pe.jsx)("div", {
                                className: "head-icons-inner",
                                children: Object(Pe.jsx)($e, {
                                    name: "gold-icon"
                                })
                            })
                        }), Object(Pe.jsx)("label", {
                            children: Ut(null === h || void 0 === h || null === (u = h.debt) || void 0 === u ? void 0 : u.denom)
                        }), Object(Pe.jsx)("p", {
                            children: qt(Q)
                        })]
                    })]
                }), Object(Pe.jsxs)("div", {
                    className: "borrowcard-content",
                    children: [Object(Pe.jsxs)("div", {
                        className: "assets-select-card",
                        children: [Object(Pe.jsx)("div", {
                            className: "assets-left",
                            children: Object(Pe.jsx)("div", {
                                className: "assets-select-wrapper",
                                children: Object(Pe.jsxs)(gn.a, {
                                    className: "assets-select center-select-text",
                                    dropdownClassName: "asset-select-dropdown",
                                    defaultActiveFirstOption: !0,
                                    suffixIcon: Object(Pe.jsx)($e, {
                                        name: "arrow-down",
                                        viewbox: "0 0 19.244 10.483"
                                    }),
                                    defaultValue: "deposit",
                                    onChange: function(e) {
                                        return B(t = e),
                                        void $(S, t);
                                        var t
                                    },
                                    children: [Object(Pe.jsx)(Ua, {
                                        value: "deposit",
                                        children: "Deposit"
                                    }), Object(Pe.jsx)(Ua, {
                                        value: "withdraw",
                                        children: "Withdraw"
                                    }), Object(Pe.jsx)(Ua, {
                                        value: "draw",
                                        children: "Draw"
                                    }), Object(Pe.jsx)(Ua, {
                                        value: "repay",
                                        children: "Repay"
                                    })]
                                })
                            })
                        }), Object(Pe.jsx)("div", {
                            className: "assets-right swap-assets-right",
                            children: Object(Pe.jsxs)("div", {
                                children: [Object(Pe.jsx)(hn, {
                                    className: "assets-select-input with-select mt-0",
                                    value: S,
                                    validationError: P,
                                    onChange: function(e) {
                                        return t = e.target.value,
                                        t = kt(t).toString().trim(),
                                        T(t),
                                        void $(t, F);
                                        var t
                                    }
                                }), Object(Pe.jsx)("small", {
                                    children: function() {
                                        var e, t, n = "deposit" === F || "withdraw" === F ? null === h || void 0 === h || null === (e = h.collateral) || void 0 === e ? void 0 : e.denom : null === h || void 0 === h || null === (t = h.debt) || void 0 === t ? void 0 : t.denom;
                                        return "1 ".concat(Ut(n), " \u2248 ").concat(Rt(p, n), " ").concat(Ot[b].USD)
                                    }()
                                })]
                            })
                        })]
                    }), Object(Pe.jsxs)("div", {
                        className: "slider-bar mt-3",
                        children: [Object(Pe.jsxs)("label", {
                            children: [Ot[b].collateral_ratio, " ", Object(Pe.jsx)(ft, {
                                text: Ot[b].liquidate_below_minimum
                            })]
                        }), Object(Pe.jsxs)("div", {
                            className: "slider-numbers",
                            children: [Object(Pe.jsx)(Sn.a, {
                                className: "comdex-slider borrow-comdex-slider " + (V <= 150 ? " red-track" : V < 200 ? " orange-track" : V >= 200 ? " green-track" : " "),
                                defaultValue: "150",
                                marks: Va,
                                max: 500,
                                onChange: Y,
                                value: V,
                                tooltipVisible: !1
                            }), Object(Pe.jsx)(hn, {
                                defaultValue: V,
                                placeholder: "0",
                                onChange: function(e) {
                                    return Y(e.target.value)
                                },
                                value: V
                            }), Object(Pe.jsx)("span", {
                                className: "collateral-percentage",
                                children: "%"
                            })]
                        })]
                    }), Object(Pe.jsx)(Ke, {
                        children: Object(Pe.jsx)(We, {
                            sm: "10",
                            className: "mt-3 mx-auto card-bottom-details",
                            children: Object(Pe.jsxs)(Ke, {
                                className: "mt-1",
                                children: [Object(Pe.jsx)(We, {
                                    children: Object(Pe.jsx)("label", {
                                        children: Ot[b].oracle_price
                                    })
                                }), Object(Pe.jsxs)(We, {
                                    className: "text-right",
                                    children: [null === K || void 0 === K ? void 0 : K.toFixed(2), " ", Ot[b].USD]
                                })]
                            })
                        })
                    }), Object(Pe.jsxs)("div", {
                        className: "assets-form-btn",
                        children: [Object(Pe.jsxs)(oe.a, {
                            disabled: w || (null === P || void 0 === P ? void 0 : P.message) || !Number(S) || S === qt(null === h || void 0 === h || null === (m = h.debt) || void 0 === m ? void 0 : m.amount) || Number(V) < 150 || Number(V) > 1e3,
                            type: "primary",
                            className: "btn-filled",
                            loading: w,
                            onClick: function() {
                                return O(!0, !1)
                            },
                            children: [Ot[b][F], " "]
                        }), Object(Pe.jsx)(Bn, {
                            inProgress: w,
                            handleClick: function() {
                                _(!0),
                                O(!1, !1),
                                Ae({
                                    message: {
                                        typeUrl: un(F),
                                        value: {
                                            from: j,
                                            id: null === h || void 0 === h ? void 0 : h.id,
                                            amount: Mt(S)
                                        }
                                    },
                                    fee: bn(),
                                    memo: ""
                                }, j, (function(e, t) {
                                    _(!1),
                                    e ? k.b.error(e) : null !== t && void 0 !== t && t.code ? k.b.info(null === t || void 0 === t ? void 0 : t.rawLog) : (q(),
                                    T(),
                                    g(N + 1),
                                    k.b.success("success"),
                                    null !== h && void 0 !== h && h.id && z(null === h || void 0 === h ? void 0 : h.id),
                                    W({
                                        pathname: "/home",
                                        hash: "2"
                                    }))
                                }
                                ))
                            }
                        })]
                    })]
                })]
            })
        };
        Ha.propTypes = {
            lang: d.string.isRequired,
            setCautionValues: d.func.isRequired,
            setBalanceRefresh: d.func.isRequired,
            setVault: d.func.isRequired,
            balances: d.arrayOf(d.shape({
                denom: d.string.isRequired,
                amount: d.string
            })),
            refreshBalance: d.number.isRequired,
            markets: d.arrayOf(d.shape({
                rates: d.shape({
                    high: d.number,
                    low: d.number,
                    unsigned: d.bool
                }),
                symbol: d.string,
                script_id: d.string
            })),
            vault: d.shape({
                collateral: d.shape({
                    denom: d.string
                }),
                debt: d.shape({
                    denom: d.string
                }),
                id: d.shape({
                    low: d.number
                })
            }),
            vaults: d.arrayOf(d.shape({
                collateral: d.shape({
                    amount: d.string,
                    denom: d.string
                }),
                debt: d.shape({
                    amount: d.string,
                    denom: d.string
                }),
                id: d.shape({
                    high: d.number,
                    low: d.number,
                    unsigned: d.bool
                })
            }))
        };
        var Wa = {
            setVault: va,
            setCautionValues: In,
            setBalanceRefresh: ha
        }
          , za = Object(i.b)((function(e) {
            return {
                lang: e.language,
                address: e.account.address,
                vault: e.account.vault,
                vaults: e.account.vaults.list,
                markets: e.oracle.market.list,
                balances: e.account.balances.list,
                refreshBalance: e.account.refreshBalance
            }
        }
        ), Wa)(Ha)
          , Ga = {
            setVault: va,
            setBalanceRefresh: ha
        }
          , Qa = Object(i.b)((function(e) {
            return {
                lang: e.language,
                address: e.account.address,
                vault: e.account.vault,
                markets: e.oracle.market.list,
                refreshBalance: e.account.refreshBalance,
                balances: e.account.balances.list
            }
        }
        ), Ga)((function(e) {
            var t, n, a, i, s, c, l = e.lang, d = e.address, u = e.vault, m = e.markets, b = e.setVault, j = e.refreshBalance, v = e.setBalanceRefresh, h = e.balances, p = Object(o.useState)(!1), x = Object(re.a)(p, 2), f = x[0], O = x[1], g = Object(r.f)();
            return Object(Pe.jsxs)("div", {
                className: "borrw-content-card",
                children: [Object(Pe.jsxs)("div", {
                    className: "close-tab-content",
                    children: [Object(Pe.jsxs)("div", {
                        className: "close-tab-row",
                        children: [Object(Pe.jsxs)("div", {
                            className: "text-left",
                            children: [Ot[l].burn_amount, " ", Object(Pe.jsx)(ft, {
                                text: Ot[l].tooltip_burn_amount
                            })]
                        }), Object(Pe.jsxs)("div", {
                            className: "text-right",
                            children: [qt(null === u || void 0 === u || null === (t = u.debt) || void 0 === t ? void 0 : t.amount), " ", Ut(null === u || void 0 === u || null === (n = u.debt) || void 0 === n ? void 0 : n.denom)]
                        })]
                    }), Object(Pe.jsxs)("div", {
                        className: "close-tab-row",
                        children: [Object(Pe.jsxs)("div", {
                            className: "text-left",
                            children: [Ot[l].oracle_price, " ", Object(Pe.jsx)(ft, {
                                text: Ot[l].oracle_price_tooltip
                            })]
                        }), Object(Pe.jsxs)("div", {
                            className: "text-right",
                            children: [null === (a = Rt(m, null === u || void 0 === u || null === (i = u.debt) || void 0 === i ? void 0 : i.denom)) || void 0 === a ? void 0 : a.toFixed(2), " ", Ot[l].USD]
                        })]
                    }), Object(Pe.jsxs)("div", {
                        className: "close-tab-row",
                        children: [Object(Pe.jsxs)("div", {
                            className: "text-left",
                            children: [Ot[l].withdraw_amount, " ", Object(Pe.jsx)(ft, {
                                text: Ot[l].tooltip_withdraw_amount
                            })]
                        }), Object(Pe.jsxs)("div", {
                            className: "text-right",
                            children: [qt(null === u || void 0 === u || null === (s = u.collateral) || void 0 === s ? void 0 : s.amount), " ", Ut(null === u || void 0 === u || null === (c = u.collateral) || void 0 === c ? void 0 : c.denom)]
                        })]
                    }), Object(Pe.jsxs)("div", {
                        className: "close-tab-row",
                        children: [Object(Pe.jsxs)("div", {
                            className: "text-left",
                            children: [Ot[l].tx_fee, " ", Object(Pe.jsx)(ft, {
                                text: Ot[l].tooltip_tx_fee
                            })]
                        }), Object(Pe.jsxs)("div", {
                            className: "text-right",
                            children: [qt(Ee), " ", Ot[l].CMDX]
                        })]
                    })]
                }), Object(Pe.jsx)("div", {
                    className: "assets-form-btn",
                    children: Object(Pe.jsx)(oe.a, {
                        loading: f,
                        disabled: f,
                        type: "primary",
                        onClick: function() {
                            return function() {
                                var e, t;
                                if (O(!0),
                                Number(Vt(h, null === u || void 0 === u || null === (e = u.debt) || void 0 === e ? void 0 : e.denom)) < Number(null === u || void 0 === u || null === (t = u.debt) || void 0 === t ? void 0 : t.amount))
                                    return k.b.info("Insufficient funds"),
                                    void O(!1);
                                Ae({
                                    message: {
                                        typeUrl: "/comdex.vault.v1beta1.MsgCloseRequest",
                                        value: {
                                            from: d,
                                            id: null === u || void 0 === u ? void 0 : u.id
                                        }
                                    },
                                    fee: bn(),
                                    memo: ""
                                }, d, (function(e, t) {
                                    O(!1),
                                    e ? k.b.error(e) : null !== t && void 0 !== t && t.code ? k.b.info(null === t || void 0 === t ? void 0 : t.rawLog) : (b({}),
                                    v(j + 1),
                                    k.b.success("success"),
                                    g({
                                        pathname: "/home",
                                        hash: "2"
                                    }))
                                }
                                ))
                            }()
                        },
                        className: "btn-filled",
                        children: Ot[l].close
                    })
                })]
            })
        }
        ))
          , Xa = Ra.a.TabPane
          , Ka = {
            setPairs: sn,
            setAccountVaults: ja
        }
          , Ya = Object(i.b)((function(e) {
            return {
                lang: e.language,
                address: e.account.address,
                pairs: e.asset.pairs,
                vault: e.account.vault
            }
        }
        ), Ka)((function(e) {
            var t = e.lang
              , n = e.address
              , a = e.pairs
              , i = e.setPairs
              , s = e.vault
              , c = e.setAccountVaults
              , l = Object(o.useState)("1")
              , d = Object(re.a)(l, 2)
              , u = d[0]
              , m = d[1]
              , b = Object(r.e)()
              , j = _t(b.hash);
            Object(o.useEffect)((function() {
                j && m("2"),
                a.list.length || v(0, Te, !0, !1),
                h()
            }
            ), [n]);
            var v = function(e, t, n, a) {
                wn(e, 100, n, a, (function(e, t) {
                    e ? k.b.error(e) : i(t.pairsInfo, t.pagination)
                }
                ))
            }
              , h = function() {
                p(n, 0, Te, !0, !1)
            }
              , p = function(e, t, n, a, i) {
                en(e, t, n, a, i, (function(e, t) {
                    e ? k.b.error(e) : c(null === t || void 0 === t ? void 0 : t.vaultsInfo, null === t || void 0 === t ? void 0 : t.pagination)
                }
                ))
            };
            return Object(Pe.jsx)("div", {
                className: "app-content-wrapper",
                children: Object(Pe.jsx)("div", {
                    className: "app-content-small",
                    children: Object(Pe.jsx)(Ke, {
                        children: Object(Pe.jsx)(We, {
                            children: Object(Pe.jsxs)(Ra.a, {
                                className: "comdex-tabs",
                                type: "card",
                                onChange: m,
                                activeKey: u,
                                children: [Object(Pe.jsx)(Xa, {
                                    tab: Ot[t].borrow,
                                    children: Object(Pe.jsx)(La, {})
                                }, "1"), Object(Pe.jsx)(Xa, {
                                    tab: Ot[t].edit,
                                    disabled: !s.id,
                                    children: Object(Pe.jsx)(za, {})
                                }, "2"), Object(Pe.jsx)(Xa, {
                                    tab: Ot[t].close,
                                    disabled: !s.id,
                                    children: Object(Pe.jsx)(Qa, {})
                                }, "3")]
                            })
                        })
                    })
                })
            })
        }
        ))
          , $a = (n(305),
        {
            setAssets: cn,
            setOfferCoinDenom: bt,
            setDemandCoinDenom: mt
        })
          , Ja = Object(i.b)((function(e) {
            return {
                lang: e.language,
                address: e.account.address,
                balances: e.account.balances.list,
                cAssets: e.asset._.cAssets,
                markets: e.oracle.market.list
            }
        }
        ), $a)((function(e) {
            var t = e.lang
              , n = e.address
              , a = e.cAssets
              , i = e.setAssets
              , s = e.markets
              , c = e.balances
              , l = e.setDemandCoinDenom
              , d = e.setOfferCoinDenom
              , u = Object(o.useState)(!1)
              , m = Object(re.a)(u, 2)
              , b = m[0]
              , j = m[1]
              , v = Object(r.f)();
            Object(o.useEffect)((function() {
                h(0, Te, !0, !1)
            }
            ), [n]);
            var h = function(e, t, n, a) {
                j(!0),
                _n(e, t, n, a, (function(e, t) {
                    j(!1),
                    e ? k.b.error(e) : i(t.assets, t.pagination)
                }
                ))
            }
              , p = [{
                title: "cAsset",
                dataIndex: "asset",
                key: "asset",
                align: "center"
            }, {
                title: Object(Pe.jsxs)(Pe.Fragment, {
                    children: ["cSwap Price", " ", Object(Pe.jsx)(ft, {
                        text: "Current price of cAsset from the pool"
                    })]
                }),
                dataIndex: "cswap_price",
                key: "cswap_price",
                render: function(e) {
                    return Object(Pe.jsxs)(Pe.Fragment, {
                        children: [e, " ", Ot[t].USD]
                    })
                }
            }, {
                title: Object(Pe.jsxs)(Pe.Fragment, {
                    children: ["Balances ", Object(Pe.jsx)(ft, {
                        text: "Total balance of cAsset"
                    })]
                }),
                dataIndex: "balances",
                key: "balances"
            }, {
                title: Object(Pe.jsxs)(Pe.Fragment, {
                    children: ["Value ", Object(Pe.jsx)(ft, {
                        text: "Value of the corresponding cAsset held"
                    })]
                }),
                dataIndex: "value",
                key: "value",
                width: 200,
                render: function(e) {
                    return Object(Pe.jsxs)(Pe.Fragment, {
                        children: [e, " ", Ot[t].USD]
                    })
                }
            }, {
                title: "Action",
                dataIndex: "action",
                key: "action",
                align: "right",
                render: function(e) {
                    return Object(Pe.jsx)(oe.a, {
                        type: "primary",
                        onClick: function() {
                            return function(e) {
                                d(pe.coinMinimalDenom),
                                l(null === e || void 0 === e ? void 0 : e.denom),
                                v({
                                    pathname: "/swap",
                                    hash: "buy"
                                })
                            }(e)
                        },
                        className: "btn-filled",
                        size: "small",
                        children: Ot[t].trade
                    })
                }
            }]
              , x = function(e) {
                var t = c.filter((function(t) {
                    return t.denom === e.denom
                }
                ))[0];
                return (null === t || void 0 === t ? void 0 : t.amount) || 0
            }
              , f = function(e) {
                var t = c.filter((function(t) {
                    return t.denom === e.denom
                }
                ))[0];
                return Rt(s, null === t || void 0 === t ? void 0 : t.denom) * (null === t || void 0 === t ? void 0 : t.amount) || 0
            }
              , O = n && a && a.length > 0 && a.map((function(e, t) {
                return {
                    key: t,
                    asset: Object(Pe.jsx)(Pe.Fragment, {
                        children: Object(Pe.jsxs)("div", {
                            className: "assets-withicon",
                            children: [Object(Pe.jsx)("div", {
                                className: "assets-icon",
                                children: Object(Pe.jsx)($e, {
                                    name: Dt(null === e || void 0 === e ? void 0 : e.denom),
                                    viewBox: "0 0 30 30"
                                })
                            }), " ", Ut(null === e || void 0 === e ? void 0 : e.denom)]
                        })
                    }),
                    cswap_price: Rt(s, e.denom) && Rt(s, e.denom).toFixed(2),
                    balances: Pt(x(e)),
                    value: Pt(f(e), 2),
                    action: e
                }
            }
            ));
            return Object(Pe.jsx)("div", {
                className: "app-content-wrapper",
                children: Object(Pe.jsx)(Ke, {
                    children: Object(Pe.jsx)(We, {
                        children: Object(Pe.jsx)(Vn.a, {
                            className: "custom-table swap-table",
                            dataSource: O,
                            columns: p,
                            loading: b,
                            pagination: !1,
                            scroll: {
                                x: "100%"
                            }
                        })
                    })
                })
            })
        }
        ))
          , Za = {
            setPoolBalances: function(e, t) {
                return {
                    type: O,
                    value: e,
                    index: t
                }
            }
        }
          , ei = Object(i.b)(null, Za)((function(e) {
            var t, n, a = e.lang, i = e.pool, s = e.markets, c = e.setPoolBalances, l = Object(o.useState)([]), r = Object(re.a)(l, 2), d = r[0], u = r[1], m = Object(o.useState)(), b = Object(re.a)(m, 2), j = b[0], v = b[1];
            Object(o.useEffect)((function() {
                p(i),
                h(i)
            }
            ), [i]);
            var h = function() {
                zt(null === i || void 0 === i ? void 0 : i.denom, (function(e, t) {
                    e ? message.error(e) : v(null === t || void 0 === t ? void 0 : t.amount)
                }
                ))
            }
              , p = function(e) {
                Wt(null === e || void 0 === e ? void 0 : e.reserveAccountAddress, 0, Te, !0, !1, (function(e, t) {
                    var n;
                    e || u((null === (n = t.balances[0]) || void 0 === n ? void 0 : n.denom) !== pe.coinMinimalDenom ? t.balances.reverse() : t.balances)
                }
                ))
            }
              , x = function(e, t, n) {
                var a = e * t / Number(null === n || void 0 === n ? void 0 : n.amount);
                return a ? qt(a) : 0
            }
              , f = x(null === i || void 0 === i ? void 0 : i.amount, d && d[0] && d[0].amount, j)
              , O = x(null === i || void 0 === i ? void 0 : i.amount, d && d[1] && d[1].amount, j);
            return Object(Pe.jsxs)(Pe.Fragment, {
                children: [Object(Pe.jsxs)("p", {
                    children: [f, " ", Ut(null === (t = d[0]) || void 0 === t ? void 0 : t.denom), " +", " ", O, " ", Ut(null === (n = d[1]) || void 0 === n ? void 0 : n.denom), " "]
                }), Object(Pe.jsxs)("small", {
                    children: [function() {
                        var e, t = Number(f) * Rt(s, d && d[0] && d[0].denom) + Number(O) * Rt(s, d && d[1] && d[1].denom);
                        return c(t, null === i || void 0 === i || null === (e = i.id) || void 0 === e ? void 0 : e.low),
                        t ? t.toFixed(2) : 0
                    }(), " ", Ot[a].USD]
                })]
            })
        }
        ))
          , ti = {
            setPools: N,
            setFirstReserveCoinDenom: D,
            setSecondReserveCoinDenom: A
        }
          , ni = Object(i.b)((function(e) {
            return {
                lang: e.language,
                balances: e.account.balances.list,
                pools: e.liquidity.pool.list,
                markets: e.oracle.market.list
            }
        }
        ), ti)((function(e) {
            var t = e.lang
              , n = e.setPools
              , a = e.pools
              , i = e.balances
              , s = e.setFirstReserveCoinDenom
              , c = e.setSecondReserveCoinDenom
              , l = e.markets
              , d = Object(o.useState)(!1)
              , u = Object(re.a)(d, 2)
              , m = u[0]
              , b = u[1]
              , j = Object(r.f)();
            Object(o.useEffect)((function() {
                v(0, Te, !0, !1)
            }
            ), []);
            var v = function(e, t, a, i) {
                b(!0),
                Se(e, t, a, i, (function(e, t) {
                    b(!1),
                    e ? k.b.error(e) : n(t.pools, t.pagination)
                }
                ))
            }
              , h = [{
                title: "Asset Pair",
                dataIndex: "assetpair",
                key: "assetpair",
                align: "center"
            }, {
                title: Object(Pe.jsxs)(Pe.Fragment, {
                    children: ["Current Position", Object(Pe.jsx)(ft, {
                        text: "Your current liquidity position in the corresponding cAsset pool"
                    })]
                }),
                dataIndex: "position",
                key: "position",
                render: function(e) {
                    return Object(Pe.jsx)(ei, {
                        lang: t,
                        pool: e,
                        markets: l
                    })
                }
            }, {
                title: Object(Pe.jsxs)(Pe.Fragment, {
                    children: ["Reward", Object(Pe.jsx)(ft, {
                        text: "CMDX rewards generated for your current position"
                    })]
                }),
                dataIndex: "reward",
                key: "reward",
                render: function(e) {
                    return Object(Pe.jsxs)(Pe.Fragment, {
                        children: [e || 0, " ", Ot[t].CMDX]
                    })
                }
            }, {
                title: "Action",
                dataIndex: "action",
                key: "action",
                align: "right",
                render: function(e) {
                    return Object(Pe.jsx)(oe.a, {
                        type: "primary",
                        onClick: function() {
                            return function(e) {
                                var t, n;
                                s(null === e || void 0 === e || null === (t = e.reserveCoinDenoms) || void 0 === t ? void 0 : t[0]),
                                c(null === e || void 0 === e || null === (n = e.reserveCoinDenoms) || void 0 === n ? void 0 : n[1]),
                                j({
                                    pathname: "/farm/".concat(e.id && e.id.toNumber())
                                })
                            }(e)
                        },
                        className: "btn-filled",
                        size: "small",
                        children: Ot[t].add_remove
                    })
                }
            }]
              , p = i.filter((function(e) {
                return "pool" === e.denom.substr(0, 4)
            }
            ))
              , x = [];
            a && a.forEach((function(e) {
                p.forEach((function(t) {
                    if (t.denom === e.poolCoinDenom) {
                        var n = {
                            denom: t.denom,
                            amount: t.amount,
                            reserveCoinDenoms: e.reserveCoinDenoms[0] !== pe.coinMinimalDenom ? e.reserveCoinDenoms.reverse() : e.reserveCoinDenoms,
                            reserveAccountAddress: e.reserveAccountAddress,
                            id: e.id
                        };
                        x.push(n)
                    }
                }
                ))
            }
            ));
            var f = x.length > 0 && x.map((function(e, t) {
                return {
                    key: t,
                    assetpair: Object(Pe.jsx)(Pe.Fragment, {
                        children: Object(Pe.jsxs)("div", {
                            className: "assets-withicon",
                            children: [Object(Pe.jsx)("div", {
                                className: "assets-icon assets-icon-1",
                                children: Object(Pe.jsx)($e, {
                                    name: Dt(null === e || void 0 === e ? void 0 : e.reserveCoinDenoms[0]),
                                    viewBox: "0 0 30 30"
                                })
                            }), Object(Pe.jsx)("div", {
                                className: "assets-icon assets-icon-2",
                                children: Object(Pe.jsx)($e, {
                                    name: Dt(null === e || void 0 === e ? void 0 : e.reserveCoinDenoms[1]),
                                    viewBox: "0 0 30 30"
                                })
                            }), Ut(null === e || void 0 === e ? void 0 : e.reserveCoinDenoms[0]), "-", Ut(null === e || void 0 === e ? void 0 : e.reserveCoinDenoms[1])]
                        })
                    }),
                    position: e,
                    reward: e.reward,
                    action: e
                }
            }
            ));
            return Object(Pe.jsx)("div", {
                className: "app-content-wrapper",
                children: Object(Pe.jsx)(Ke, {
                    children: Object(Pe.jsx)(We, {
                        children: Object(Pe.jsx)(Vn.a, {
                            className: "custom-table farm-table",
                            loading: m,
                            dataSource: f,
                            columns: h,
                            pagination: !1,
                            scroll: {
                                x: "100%"
                            }
                        })
                    })
                })
            })
        }
        ))
          , ai = (n(731),
        n(327))
          , ii = {
            setAccountVaults: ja
        }
          , si = Object(i.b)((function(e) {
            return {
                lang: e.language,
                address: e.account.address,
                markets: e.oracle.market.list,
                vaults: e.account.vaults.list
            }
        }
        ), ii)((function(e) {
            var t = e.vaults
              , n = e.markets
              , a = e.address
              , s = e.lang
              , c = e.setAccountVaults
              , l = Object(r.f)()
              , d = Object(i.c)();
            Object(o.useEffect)((function() {
                u()
            }
            ), []);
            var u = function() {
                m(a, 0, Te, !0, !1)
            }
              , m = function(e, t, n, a, i) {
                en(e, t, n, a, i, (function(e, t) {
                    e ? k.b.error(e) : c(null === t || void 0 === t ? void 0 : t.vaultsInfo, null === t || void 0 === t ? void 0 : t.pagination)
                }
                ))
            }
              , b = [{
                title: "cAsset",
                dataIndex: "asset",
                key: "asset"
            }, {
                title: Object(Pe.jsxs)(Pe.Fragment, {
                    children: ["Oracle price", Object(Pe.jsx)(ft, {
                        text: "cAsset price fetched from oracle"
                    })]
                }),
                dataIndex: "oracle_price",
                key: "oracle_price",
                render: function(e) {
                    return Object(Pe.jsxs)(Pe.Fragment, {
                        children: [e, " ", Ot[s].USD]
                    })
                }
            }, {
                title: Object(Pe.jsxs)(Pe.Fragment, {
                    children: ["Borrowed", Object(Pe.jsx)(ft, {
                        text: "Quantity of the cAsset borrowed"
                    })]
                }),
                dataIndex: "borrowed",
                key: "borrowed",
                render: function(e) {
                    return Object(Pe.jsxs)(Pe.Fragment, {
                        children: [Object(Pe.jsxs)("p", {
                            children: [Pt(null === e || void 0 === e ? void 0 : e.amount), " ", Ut(null === e || void 0 === e ? void 0 : e.denom), " "]
                        }), Object(Pe.jsxs)("small", {
                            children: [Pt(null === e || void 0 === e ? void 0 : e.value, 2), " ", Ot[s].USD]
                        })]
                    })
                }
            }, {
                title: Object(Pe.jsxs)(Pe.Fragment, {
                    children: ["Collateral", Object(Pe.jsx)(ft, {
                        text: "Quantity of collateral deposited for the  borrow position"
                    })]
                }),
                dataIndex: "collateral",
                key: "collateral",
                render: function(e) {
                    return Object(Pe.jsxs)(Pe.Fragment, {
                        children: [Object(Pe.jsxs)("p", {
                            children: [Pt(null === e || void 0 === e ? void 0 : e.amount), " ", Ut(null === e || void 0 === e ? void 0 : e.denom), " "]
                        }), Object(Pe.jsxs)("small", {
                            children: [Pt(null === e || void 0 === e ? void 0 : e.value, 2), " ", Ot[s].USD]
                        })]
                    })
                }
            }, {
                title: Object(Pe.jsxs)(Pe.Fragment, {
                    children: ["Collateral Ratio", Object(Pe.jsx)(ft, {
                        text: "Ratio of Collateral value to the borrowed value"
                    })]
                }),
                dataIndex: "collateral_ratio",
                key: "collateral_ratio",
                align: "right",
                render: function(e) {
                    return Object(Pe.jsx)(Pe.Fragment, {
                        children: Object(Pe.jsx)("div", {
                            className: "collateral-ratio-colum",
                            children: Object(Pe.jsxs)("div", {
                                className: "ratio-progressbar",
                                children: [Object(Pe.jsx)("small", {
                                    children: "Min 150%"
                                }), " ", Object(Pe.jsx)(ai.a, {
                                    className: e < 20 ? "alert-bg" : "success-bg",
                                    format: function(t) {
                                        return e > 50 ? "".concat((10 * t / 2).toFixed(0), "+ % ") : "".concat((10 * t / 2).toFixed(1), "% ")
                                    },
                                    percent: e && 2 * Number(e).toFixed(2)
                                })]
                            })
                        })
                    })
                }
            }, {
                title: Object(Pe.jsxs)(Pe.Fragment, {
                    children: ["Reward", Object(Pe.jsx)(ft, {
                        text: "Minting Reward"
                    })]
                }),
                dataIndex: "reward",
                key: "reward",
                align: "left",
                render: function(e) {
                    var t, n;
                    return Object(Pe.jsx)(Pe.Fragment, {
                        children: e && e.length > 0 ? "".concat(Pt(null === (t = e[0]) || void 0 === t ? void 0 : t.amount), " ").concat(Ut(null === (n = e[0]) || void 0 === n ? void 0 : n.denom)) : "0 ".concat(Ut(pe.coinMinimalDenom))
                    })
                }
            }, {
                title: "Action",
                dataIndex: "action",
                key: "action",
                align: "right",
                render: function(e) {
                    return Object(Pe.jsx)(oe.a, {
                        type: "primary",
                        onClick: function() {
                            return function(e) {
                                d({
                                    type: "VAULT_SET",
                                    value: e
                                }),
                                l({
                                    pathname: "/borrow",
                                    hash: "edit"
                                })
                            }(e)
                        },
                        className: "btn-filled",
                        size: "small",
                        children: "Edit"
                    })
                }
            }]
              , j = t && t.length > 0 ? t.filter((function(e) {
                return e.owner === a
            }
            )) : []
              , v = j.length > 0 && j.map((function(e, t) {
                var a, i, s, c, o, l, r, d, u, m, b, j, v;
                return {
                    key: t,
                    asset: Object(Pe.jsx)(Pe.Fragment, {
                        children: Object(Pe.jsxs)("div", {
                            className: "assets-withicon",
                            children: [Object(Pe.jsx)("div", {
                                className: "assets-icon",
                                children: Object(Pe.jsx)($e, {
                                    name: Dt(null === e || void 0 === e || null === (a = e.debt) || void 0 === a ? void 0 : a.denom),
                                    viewBox: "0 0 30 30"
                                })
                            }), Ut(null === (i = e.debt) || void 0 === i ? void 0 : i.denom)]
                        })
                    }),
                    oracle_price: Rt(n, null === (s = e.debt) || void 0 === s ? void 0 : s.denom) && Rt(n, null === (c = e.debt) || void 0 === c ? void 0 : c.denom).toFixed(2),
                    borrowed: {
                        amount: null === (o = e.debt) || void 0 === o ? void 0 : o.amount,
                        denom: null === (l = e.debt) || void 0 === l ? void 0 : l.denom,
                        value: Rt(n, null === (r = e.debt) || void 0 === r ? void 0 : r.denom) * (null === (d = e.debt) || void 0 === d ? void 0 : d.amount)
                    },
                    collateral: {
                        amount: null === (u = e.collateral) || void 0 === u ? void 0 : u.amount,
                        denom: null === (m = e.collateral) || void 0 === m ? void 0 : m.denom,
                        value: (v = null === (b = e.collateral) || void 0 === b ? void 0 : b.denom,
                        (Rt(n, v) || 0) * (null === (j = e.collateral) || void 0 === j ? void 0 : j.amount))
                    },
                    collateral_ratio: 10 * Bt(e.collateralizationRatio),
                    reward: e.rewardsReceived && e.rewardsReceived.length > 0 ? e.rewardsReceived.filter((function(e) {
                        return e.denom === pe.coinMinimalDenom
                    }
                    )) : [],
                    action: e
                }
            }
            ));
            return Object(Pe.jsx)("div", {
                className: "app-content-wrapper",
                children: Object(Pe.jsx)(Ke, {
                    children: Object(Pe.jsx)(We, {
                        children: Object(Pe.jsx)(Vn.a, {
                            className: "custom-table farm-table",
                            dataSource: v,
                            columns: b,
                            pagination: !1,
                            scroll: {
                                x: "100%"
                            }
                        })
                    })
                })
            })
        }
        ))
          , ci = [{
            title: "Transaction Hash",
            dataIndex: "transactionHash",
            key: "txHash"
        }, {
            title: "Message Type",
            dataIndex: "msgType",
            key: "msgType",
            width: 250
        }, {
            title: "Height",
            dataIndex: "height",
            key: "height"
        }]
          , oi = {
            setTransactionHistory: function(e, t) {
                return {
                    type: ea,
                    list: e,
                    count: t
                }
            }
        }
          , li = Object(i.b)((function(e) {
            return {
                lang: e.language,
                history: e.account.history,
                address: e.account.address
            }
        }
        ), oi)((function(e) {
            var t = Object(o.useState)(!1)
              , n = Object(re.a)(t, 2)
              , a = n[0]
              , i = n[1]
              , s = Object(o.useState)(1)
              , c = Object(re.a)(s, 2)
              , l = c[0]
              , r = c[1]
              , d = Object(o.useState)(5)
              , u = Object(re.a)(d, 2)
              , m = u[0]
              , b = u[1];
            Object(o.useEffect)((function() {
                j(e.address, l, m)
            }
            ), []);
            var j = function(t, n, a) {
                i(!0),
                jn(t, n, a, (function(t, n) {
                    i(!1),
                    t ? k.b.error(t) : e.setTransactionHistory(n.txs, n.totalCount)
                }
                ))
            }
              , v = e.history && e.history.list && e.history.list.length > 0 && e.history.list.map((function(e, t) {
                var n, a = Object(Ne.decodeTxRaw)(e.tx), i = (n = e.tx,
                wt.toHex(Object(Nt.sha256)(n)).toUpperCase());
                return {
                    key: t,
                    transactionHash: Object(Pe.jsxs)("a", {
                        href: "".concat(pe.explorer, "/transactions/").concat(i),
                        rel: "noreferrer",
                        target: "_blank",
                        children: [" ", i]
                    }),
                    msgType: mn(a.body.messages[0].typeUrl),
                    height: e.height
                }
            }
            ));
            return Object(Pe.jsx)("div", {
                className: "app-content-wrapper",
                children: Object(Pe.jsx)(Ke, {
                    children: Object(Pe.jsx)(We, {
                        children: Object(Pe.jsx)("div", {
                            className: "custom-table  history-table",
                            children: Object(Pe.jsx)(Vn.a, {
                                columns: ci,
                                dataSource: v,
                                loading: a,
                                pagination: {
                                    total: e.history && e.history.count,
                                    showSizeChanger: !0,
                                    defaultPageSize: 5,
                                    pageSizeOptions: ["5", "10", "20", "50"]
                                },
                                total: e.history && e.history.count,
                                onChange: function(t) {
                                    return r((n = t).current),
                                    b(n.pageSize),
                                    void j(e.address, n.current, n.pageSize);
                                    var n
                                }
                            })
                        })
                    })
                })
            })
        }
        ))
          , ri = Ra.a.TabPane
          , di = function(e) {
            var t, n = e.lang, a = e.assetBalance, i = e.cAssetBalance, s = e.poolBalance, c = e.collateralBalance, l = e.debtBalance, d = e.isDarkMode, u = e.address, m = e.setPools, b = e.balances, j = e.markets, v = Object(o.useState)("1"), h = Object(re.a)(v, 2), p = h[0], x = h[1], f = Object(o.useState)([]), O = Object(re.a)(f, 2), g = O[0], N = O[1], y = Object(r.e)(), C = _t(y.hash);
            Object(o.useEffect)((function() {
                C && x(C)
            }
            ), []),
            Object(o.useEffect)((function() {
                N([]),
                w(0, Te, !0, !1)
            }
            ), [j, b]);
            var w = function(e, t, n, a) {
                Se(e, t, n, a, (function(e, t) {
                    e ? k.b.error(e) : (m(t.pools, t.pagination),
                    b && b.length > 0 && j && j.length > 0 && t.pools && t.pools.length > 0 && t.pools.forEach((function(e, t) {
                        return D(e, t)
                    }
                    )))
                }
                ))
            }
              , _ = function() {
                return (t = i + a + A + s + (c - l)) && Number(t)
            }
              , D = function(e) {
                Wt(null === e || void 0 === e ? void 0 : e.reserveAccountAddress, 0, 10, !0, !1, (function(t, n) {
                    if (!t) {
                        var a = n.balances;
                        zt(null === e || void 0 === e ? void 0 : e.poolCoinDenom, (function(t, n) {
                            if (t)
                                k.b.error(t);
                            else {
                                var i = null === n || void 0 === n ? void 0 : n.amount
                                  , s = Vt(b, null === e || void 0 === e ? void 0 : e.poolCoinDenom) || 0
                                  , c = s * (a && a[0] && a[0].amount) / Number(null === i || void 0 === i ? void 0 : i.amount)
                                  , o = s * (a && a[1] && a[1].amount) / Number(null === i || void 0 === i ? void 0 : i.amount)
                                  , l = Number(c) * Rt(j, a && a[0] && a[0].denom) + Number(o) * Rt(j, a && a[1] && a[1].denom);
                                N((function(e) {
                                    return [].concat(Object(xe.a)(e), [l])
                                }
                                ))
                            }
                        }
                        ))
                    }
                }
                ))
            }
              , A = Object(xe.a)(new Set(g)).reduce((function(e, t) {
                return e + t
            }
            ), 0)
              , S = {
                chart: {
                    type: "pie",
                    backgroundColor: null,
                    height: 170
                },
                credits: {
                    enabled: !1
                },
                title: {
                    text: null
                },
                subtitle: {
                    text: "".concat(Pt(_(), 2), " <br /> ").concat(Ot[n].USD),
                    floating: !!u,
                    style: {
                        fontSize: "20px",
                        fontWeight: "300",
                        fontFamily: "Lexend Deca",
                        color: d ? "#fff" : "#000"
                    },
                    y: 70
                },
                plotOptions: {
                    pie: {
                        showInLegend: !1,
                        size: "130%",
                        innerSize: "80%",
                        borderWidth: 0,
                        dataLabels: {
                            enabled: !1,
                            distance: -14,
                            style: {
                                fontsize: 50
                            }
                        }
                    }
                },
                tooltip: {
                    formatter: function() {
                        return '<div style="text-align:center; font-weight:800; ">' + It(this.y.toFixed(2)) + '<br /><small style="font-size: 10px; font-weight:400;">' + this.key + "</small></div>"
                    },
                    useHTML: !0,
                    backgroundColor: "#222A49",
                    borderColor: "#222A49",
                    borderRadius: 10,
                    zIndex: 99,
                    style: {
                        color: "#fff"
                    }
                },
                series: [{
                    states: {
                        hover: {
                            enabled: !1
                        }
                    },
                    name: "",
                    data: [{
                        name: Ot[n].cAsset_balance,
                        y: Number(qt(i)) || 0,
                        color: d ? "#2561B0" : "#003f9a"
                    }, {
                        name: Ot[n].mint_balance,
                        y: Number(qt(c - l)) || 0,
                        color: d ? "#3879CE" : "#2871cc"
                    }, {
                        name: Ot[n].farm_balance,
                        y: Number(qt(A)) || 0,
                        color: d ? "#1A4F94" : "#5099f4"
                    }, {
                        name: Ot[n].asset_balance,
                        y: Number(qt(a)) || 0,
                        color: d ? "#123C73" : "#78c1ff"
                    }]
                }]
            };
            return Object(Pe.jsxs)("div", {
                className: "app-content-wrapper",
                children: [Object(Pe.jsx)(Ke, {
                    children: Object(Pe.jsx)(We, {
                        children: Object(Pe.jsxs)("div", {
                            className: "MyHome-upper",
                            children: [Object(Pe.jsxs)("div", {
                                className: "MyHome-chart",
                                children: [Pt(_(), 2) <= 0 ? Object(Pe.jsxs)("div", {
                                    className: "nodatachart",
                                    children: [Number(0).toFixed(2), " ", Object(Pe.jsx)("p", {
                                        children: "USD"
                                    })]
                                }) : Object(Pe.jsx)($t.a, {
                                    highcharts: Kt.a,
                                    options: S
                                }), " "]
                            }), Object(Pe.jsxs)("div", {
                                className: "MyHome-upper-right",
                                children: [Object(Pe.jsx)(Ke, {
                                    className: "mb-2",
                                    children: Object(Pe.jsxs)(We, {
                                        children: [Object(Pe.jsxs)("label", {
                                            children: [Ot[n].tv, " ", Object(Pe.jsx)(ft, {
                                                text: Ot[n].tooltip_total_value
                                            })]
                                        }), Object(Pe.jsxs)("h2", {
                                            children: [Pt(_(), 2), " ", Ot[n].USD]
                                        })]
                                    })
                                }), Object(Pe.jsxs)(Ke, {
                                    children: [Object(Pe.jsxs)(We, {
                                        xs: "6",
                                        md: "6",
                                        lg: "3",
                                        children: [Object(Pe.jsxs)("label", {
                                            className: "stats-label",
                                            children: [Object(Pe.jsx)("div", {
                                                className: "rect-shape shape-cAsset-bal"
                                            }), " ", Ot[n].cAsset_balance, " ", Object(Pe.jsx)(ft, {
                                                text: Ot[n].tooltip_total_casset
                                            })]
                                        }), Object(Pe.jsxs)("h3", {
                                            children: [Pt(i, 2), " ", Ot[n].USD]
                                        })]
                                    }), Object(Pe.jsxs)(We, {
                                        xs: "6",
                                        md: "6",
                                        lg: "3",
                                        children: [Object(Pe.jsxs)("label", {
                                            className: "stats-label",
                                            children: [Object(Pe.jsx)("div", {
                                                className: "rect-shape shape-mint-bal"
                                            }), " ", Ot[n].mint_balance, " ", Object(Pe.jsx)(ft, {
                                                text: Ot[n].tooltip_total_mint
                                            })]
                                        }), Object(Pe.jsxs)("h3", {
                                            children: [Pt(c - l, 2), " ", Ot[n].USD]
                                        })]
                                    }), Object(Pe.jsxs)(We, {
                                        xs: "6",
                                        md: "6",
                                        lg: "3",
                                        children: [Object(Pe.jsxs)("label", {
                                            className: "stats-label",
                                            children: [Object(Pe.jsx)("div", {
                                                className: "rect-shape shape-farm-bal"
                                            }), " ", Ot[n].farm_balance, " ", Object(Pe.jsx)(ft, {
                                                text: Ot[n].tooltip_total_farm
                                            })]
                                        }), Object(Pe.jsxs)("h3", {
                                            children: [Pt(u ? A : 0, 2), " ", Ot[n].USD]
                                        })]
                                    }), Object(Pe.jsxs)(We, {
                                        xs: "6",
                                        md: "6",
                                        lg: "3",
                                        children: [Object(Pe.jsxs)("label", {
                                            className: "stats-label",
                                            children: [Object(Pe.jsx)("div", {
                                                className: "rect-shape shape-asset-bal"
                                            }), " ", Ot[n].asset_balance, " ", Object(Pe.jsx)(ft, {
                                                text: Ot[n].tooltip_total_asset
                                            })]
                                        }), Object(Pe.jsxs)("h3", {
                                            children: [Pt(a, 2), " ", Ot[n].USD]
                                        })]
                                    })]
                                })]
                            })]
                        })
                    })
                }), Object(Pe.jsx)(Ke, {
                    className: "mt-4",
                    children: Object(Pe.jsx)(We, {
                        children: Object(Pe.jsx)("div", {
                            className: "myhome-bottom",
                            children: Object(Pe.jsxs)(Ra.a, {
                                className: "comdex-tabs",
                                onChange: x,
                                activeKey: p,
                                type: "card",
                                children: [Object(Pe.jsxs)(ri, {
                                    tab: "Swap",
                                    children: [Object(Pe.jsxs)("div", {
                                        className: "myhome-tabextra",
                                        children: [Object(Pe.jsxs)("span", {
                                            children: [Ot[n].holding, " ="]
                                        }), " ", Pt(i, 2), " ", Ot[n].USD]
                                    }), Object(Pe.jsx)(Ja, {})]
                                }, "1"), Object(Pe.jsxs)(ri, {
                                    tab: "Mint",
                                    children: [Object(Pe.jsxs)("div", {
                                        className: "myhome-tabextra",
                                        children: [Object(Pe.jsxs)("span", {
                                            children: [Ot[n].borrowed, " ="]
                                        }), " ", Pt(l, 2), " ", Ot[n].USD, " ", Object(Pe.jsxs)("span", {
                                            children: [Ot[n].collateral, " ="]
                                        }), " ", Pt(c, 2), " ", Ot[n].USD, " "]
                                    }), Object(Pe.jsx)(si, {})]
                                }, "2"), Object(Pe.jsxs)(ri, {
                                    tab: "Farm",
                                    children: [Object(Pe.jsxs)("div", {
                                        className: "myhome-tabextra",
                                        children: [Object(Pe.jsxs)("span", {
                                            children: [Ot[n].farming, " ="]
                                        }), " ", Pt(A || 0, 2), " ", Ot[n].USD, " "]
                                    }), Object(Pe.jsx)(ni, {})]
                                }, "3"), Object(Pe.jsx)(ri, {
                                    tab: "History",
                                    children: Object(Pe.jsx)(li, {})
                                }, "5")]
                            })
                        })
                    })
                })]
            })
        };
        di.propTypes = {
            setPools: d.func.isRequired,
            lang: d.string.isRequired,
            address: d.string,
            assetBalance: d.number,
            cAssetBalance: d.number,
            collateralBalance: d.number,
            debtBalance: d.number,
            poolBalance: d.number,
            isDarkMode: d.bool.isRequired,
            balances: d.arrayOf(d.shape({
                denom: d.string.isRequired,
                amount: d.string
            })),
            markets: d.arrayOf(d.shape({
                rates: d.shape({
                    high: d.number,
                    low: d.number,
                    unsigned: d.bool
                }),
                symbol: d.string,
                script_id: d.string
            }))
        };
        var ui = {
            setPools: N
        }
          , mi = Object(i.b)((function(e) {
            return {
                lang: e.language,
                cAssets: e.account.balances.cAssets,
                cAssetBalance: e.account.balances.cAsset,
                assetBalance: e.account.balances.asset,
                poolBalance: e.account.balances.pool,
                collateralBalance: e.account.balances.collateral,
                debtBalance: e.account.balances.debt,
                isDarkMode: e.theme.theme.darkThemeEnabled,
                address: e.account.address,
                balances: e.account.balances.list,
                markets: e.oracle.market.list
            }
        }
        ), ui)(di)
          , bi = n(744)
          , ji = (n(1585),
        n.p + "static/media/stack_svg.5245578b.svg")
          , vi = n.p + "static/media/auctionAsset 1comdex.bd5dd685.svg"
          , hi = Object(i.b)((function(e) {
            return {
                lang: e.language
            }
        }
        ))((function(e) {
            Object(bi.a)(e);
            var t = Object(r.f)()
              , n = function(e) {
                t({
                    pathname: e
                })
            };
            return Object(Pe.jsx)("div", {
                className: "app-content-wrapper",
                children: Object(Pe.jsxs)(Ke, {
                    children: [Object(Pe.jsx)(We, {
                        lg: "6",
                        md: "6",
                        sm: "12",
                        className: "mb-3",
                        children: Object(Pe.jsx)("div", {
                            className: "more-card",
                            children: Object(Pe.jsxs)("div", {
                                className: "more-card-inner",
                                children: [Object(Pe.jsxs)("div", {
                                    className: "morecard-left",
                                    children: [Object(Pe.jsx)("h2", {
                                        children: "Staking and Governance"
                                    }), Object(Pe.jsx)("p", {
                                        children: "Stake your CMDX tokens to earn rewards and participate in governance proposals"
                                    }), Object(Pe.jsx)(oe.a, {
                                        type: "primary",
                                        className: "btn-filled",
                                        onClick: function() {
                                            return n("/govern")
                                        },
                                        children: "Manage Stake"
                                    })]
                                }), Object(Pe.jsx)("img", {
                                    src: ji,
                                    alt: ji
                                })]
                            })
                        })
                    }), Object(Pe.jsx)(We, {
                        lg: "6",
                        md: "6",
                        sm: "12",
                        className: "mb-3",
                        children: Object(Pe.jsx)("div", {
                            className: "more-card",
                            children: Object(Pe.jsxs)("div", {
                                className: "more-card-inner",
                                children: [Object(Pe.jsxs)("div", {
                                    className: "morecard-left",
                                    children: [Object(Pe.jsx)("h2", {
                                        children: "Participate in Auctions"
                                    }), Object(Pe.jsx)("p", {
                                        children: "Auction between bidders to capitalize on the liquidation of assets and acquire assets at a discounted rate"
                                    }), Object(Pe.jsx)(oe.a, {
                                        type: "primary",
                                        className: "btn-filled",
                                        onClick: function() {
                                            return n("/auction")
                                        },
                                        children: "Enter Now"
                                    })]
                                }), Object(Pe.jsx)("div", {
                                    className: "morecard-right",
                                    children: Object(Pe.jsx)("img", {
                                        src: vi,
                                        alt: vi
                                    })
                                })]
                            })
                        })
                    })]
                })
            })
        }
        ))
          , pi = "AUCTION_LIST_SET"
          , xi = "CURRENT_AUCTION_SET"
          , fi = "BID_AMOUNT_SET"
          , Oi = "BIDDING_LIST_SET"
          , gi = (n(1586),
        n(732),
        function(e) {
            var t, n, a, i, s, c = e.lang, l = e.address, r = e.auction, d = e.setBidAmount, u = e.bidAmount, m = e.refreshData, b = e.discount, j = e.balances, v = Object(o.useState)(!1), h = Object(re.a)(v, 2), p = h[0], x = h[1], f = Object(o.useState)(!1), O = Object(re.a)(f, 2), g = O[0], N = O[1], y = Object(o.useState)(), C = Object(re.a)(y, 2), w = C[0], _ = C[1], D = function() {
                var e;
                N(!0),
                Ae({
                    message: {
                        typeUrl: "/comdex.auction.v1beta1.MsgPlaceBidRequest",
                        value: {
                            auctionId: null === r || void 0 === r ? void 0 : r.id,
                            amount: {
                                denom: null === r || void 0 === r || null === (e = r.bid) || void 0 === e ? void 0 : e.denom,
                                amount: Mt(u)
                            },
                            bidder: l
                        }
                    },
                    fee: bn(),
                    memo: ""
                }, l, (function(e, t) {
                    N(!1),
                    x(!1),
                    e ? k.b.error(e) : null !== t && void 0 !== t && t.code ? k.b.info(null === t || void 0 === t ? void 0 : t.rawLog) : (m(),
                    k.b.success("success"))
                }
                ))
            }, A = function() {
                return r && r.bid && Number(r.bid.amount) > 0 ? qt(r.bid.amount) : r && r.minBid && r.minBid.amount && qt(r.minBid.amount)
            };
            return Object(Pe.jsxs)(Pe.Fragment, {
                children: [Object(Pe.jsx)(oe.a, {
                    type: "primary",
                    size: "small",
                    className: "btn-filled",
                    onClick: function() {
                        x(!0)
                    },
                    children: Ot[c].details
                }), Object(Pe.jsx)(Je.a, {
                    className: "moredetails-modal",
                    centered: !0,
                    closable: !0,
                    footer: null,
                    visible: p,
                    width: 380,
                    onCancel: function() {
                        x(!1)
                    },
                    onOk: D,
                    closeIcon: Object(Pe.jsx)($e, {
                        name: "close",
                        viewbox: "0 0 19 19"
                    }),
                    title: !1,
                    children: Object(Pe.jsxs)(Hn.a, {
                        layout: "vertical",
                        children: [Object(Pe.jsxs)(Ke, {
                            children: [Object(Pe.jsx)(We, {
                                children: Object(Pe.jsx)("label", {
                                    children: "Opening Bid"
                                })
                            }), Object(Pe.jsx)(We, {
                                children: Object(Pe.jsxs)("p", {
                                    children: [qt(null === r || void 0 === r || null === (t = r.minBid) || void 0 === t ? void 0 : t.amount), " ", Ut(null === r || void 0 === r || null === (n = r.bid) || void 0 === n ? void 0 : n.denom)]
                                })
                            })]
                        }), Object(Pe.jsxs)(Ke, {
                            children: [Object(Pe.jsx)(We, {
                                children: Object(Pe.jsx)("label", {
                                    children: "Max Bid"
                                })
                            }), Object(Pe.jsx)(We, {
                                children: Object(Pe.jsxs)("p", {
                                    children: [qt(null === r || void 0 === r || null === (a = r.maxBid) || void 0 === a ? void 0 : a.amount), " ", Ut(null === r || void 0 === r || null === (i = r.maxBid) || void 0 === i ? void 0 : i.denom)]
                                })
                            })]
                        }), Object(Pe.jsxs)(Ke, {
                            children: [Object(Pe.jsx)(We, {
                                children: Object(Pe.jsx)("label", {
                                    children: "Top Bid"
                                })
                            }), Object(Pe.jsx)(We, {
                                children: Object(Pe.jsxs)("p", {
                                    children: [A(), " ", Ut(null === r || void 0 === r || null === (s = r.bid) || void 0 === s ? void 0 : s.denom)]
                                })
                            })]
                        }), Object(Pe.jsxs)(Ke, {
                            children: [Object(Pe.jsx)(We, {
                                children: Object(Pe.jsx)("label", {
                                    children: "Your Bid"
                                })
                            }), Object(Pe.jsxs)(We, {
                                children: [Object(Pe.jsx)("div", {
                                    className: "detail-max-button-container",
                                    children: Object(Pe.jsx)("div", {
                                        className: "detail-max-button",
                                        onClick: function() {
                                            d(A())
                                        },
                                        children: "Max"
                                    })
                                }), Object(Pe.jsx)(Hn.a.Item, {
                                    children: Object(Pe.jsx)(hn, {
                                        value: u,
                                        onChange: function(e) {
                                            return function(e) {
                                                var t;
                                                e = kt(e).toString().trim(),
                                                _(On(Number(e), Vt(j, null === r || void 0 === r || null === (t = r.bid) || void 0 === t ? void 0 : t.denom) || 0)),
                                                d(e)
                                            }(e.target.value)
                                        },
                                        validationError: w
                                    })
                                })]
                            })]
                        }), Object(Pe.jsxs)(Ke, {
                            children: [Object(Pe.jsx)(We, {
                                children: Object(Pe.jsx)("label", {
                                    children: "Auction Discount"
                                })
                            }), Object(Pe.jsx)(We, {
                                children: Object(Pe.jsxs)("p", {
                                    children: [null === b || void 0 === b ? void 0 : b.low, "%"]
                                })
                            })]
                        }), Object(Pe.jsx)(Ke, {
                            className: "text-center mt-3",
                            children: Object(Pe.jsx)(We, {
                                children: Object(Pe.jsx)(oe.a, {
                                    type: "primary",
                                    size: "large",
                                    loading: g,
                                    disabled: g || !u || (null === w || void 0 === w ? void 0 : w.message) || u <= A(),
                                    className: "btn-filled px-5",
                                    onClick: D,
                                    children: "Place Bid"
                                })
                            })
                        })]
                    })
                })]
            })
        }
        );
        gi.propTypes = {
            refreshData: d.func.isRequired,
            lang: d.string.isRequired,
            address: d.string.isRequired,
            auction: d.shape({
                minBid: d.shape({
                    amount: d.string,
                    denom: d.string
                }),
                bid: d.shape({
                    amount: d.string,
                    denom: d.string
                }),
                id: d.shape({
                    high: d.number,
                    low: d.number,
                    unsigned: d.bool
                })
            }),
            balances: d.arrayOf(d.shape({
                denom: d.string.isRequired,
                amount: d.string
            })),
            bidAmount: d.oneOfType([d.number, d.string]),
            discount: d.shape({
                low: d.number
            })
        };
        var Ni = {
            setBidAmount: function(e) {
                return {
                    type: fi,
                    value: e
                }
            }
        }
          , yi = Object(i.b)((function(e) {
            return {
                lang: e.language,
                bidAmount: e.auction.bidAmount,
                auction: e.auction._,
                address: e.account.address,
                balances: e.account.balances.list
            }
        }
        ), Ni)(gi)
          , Ci = n(338)
          , wi = function(e) {
            var t = e.biddingList
              , n = [{
                title: Object(Pe.jsxs)(Pe.Fragment, {
                    children: ["Auctioned Asset ", Object(Pe.jsx)(ft, {
                        text: "Asset to be sold in the auction"
                    })]
                }),
                dataIndex: "auctionedasset",
                key: "auctionedasset",
                width: 250
            }, {
                title: Object(Pe.jsxs)(Pe.Fragment, {
                    children: ["Amount ", Object(Pe.jsx)(ft, {
                        text: "Auction amount"
                    })]
                }),
                dataIndex: "amount",
                key: "amount",
                align: "center",
                width: 150
            }, {
                title: Object(Pe.jsxs)(Pe.Fragment, {
                    children: ["Bidding Asset", " ", Object(Pe.jsx)(ft, {
                        text: "Asset used to buy the auctioned asset"
                    })]
                }),
                dataIndex: "biddingasset",
                key: "biddingasset",
                width: 200
            }, {
                title: Object(Pe.jsxs)(Pe.Fragment, {
                    children: ["Amount ", Object(Pe.jsx)(ft, {
                        text: "Bid amount"
                    })]
                }),
                dataIndex: "amount2",
                key: "amount2",
                align: "center",
                width: 200
            }, {
                title: Object(Pe.jsxs)(Pe.Fragment, {
                    children: ["Auction Status ", Object(Pe.jsx)(ft, {
                        text: "Auction status"
                    })]
                }),
                dataIndex: "auctionStatus",
                key: "auctionStatus",
                align: "center"
            }, {
                title: Object(Pe.jsxs)(Pe.Fragment, {
                    children: ["Bidding Status ", Object(Pe.jsx)(ft, {
                        text: "Bidding status"
                    })]
                }),
                dataIndex: "action",
                key: "action",
                align: "right"
            }];
            t.reverse();
            var a = t && t.length > 0 && t.map((function(e, t) {
                var n, a, i, s, c, o, l, r;
                return {
                    key: t,
                    id: e.id,
                    auctionedasset: Object(Pe.jsx)(Pe.Fragment, {
                        children: Object(Pe.jsxs)("div", {
                            className: "assets-withicon",
                            children: [Object(Pe.jsx)("div", {
                                className: "assets-icon",
                                children: Object(Pe.jsx)($e, {
                                    name: Dt(null === e || void 0 === e || null === (n = e.auctionedCollateral) || void 0 === n ? void 0 : n.denom)
                                })
                            }), Ut(null === e || void 0 === e || null === (a = e.auctionedCollateral) || void 0 === a ? void 0 : a.denom)]
                        })
                    }),
                    biddingasset: Object(Pe.jsx)(Pe.Fragment, {
                        children: Object(Pe.jsxs)("div", {
                            className: "assets-withicon",
                            children: [Object(Pe.jsx)("div", {
                                className: "assets-icon",
                                children: Object(Pe.jsx)($e, {
                                    name: Dt(null === e || void 0 === e || null === (i = e.bid) || void 0 === i ? void 0 : i.denom)
                                })
                            }), Ut(null === e || void 0 === e || null === (s = e.bid) || void 0 === s ? void 0 : s.denom)]
                        })
                    }),
                    amount: (null === e || void 0 === e || null === (c = e.auctionedCollateral) || void 0 === c ? void 0 : c.amount) && qt(null === e || void 0 === e || null === (o = e.auctionedCollateral) || void 0 === o ? void 0 : o.amount),
                    amount2: (null === e || void 0 === e || null === (l = e.bid) || void 0 === l ? void 0 : l.amount) && qt(null === e || void 0 === e || null === (r = e.bid) || void 0 === r ? void 0 : r.amount),
                    auctionStatus: Object(Pe.jsx)(oe.a, {
                        size: "small",
                        className: "active" === (null === e || void 0 === e ? void 0 : e.auctionStatus) ? "biddin-btn bid-btn-success" : "inactive" === (null === e || void 0 === e ? void 0 : e.auctionStatus) ? "biddin-btn bid-btn-rejected" : "",
                        children: null === e || void 0 === e ? void 0 : e.auctionStatus
                    }),
                    action: Object(Pe.jsx)(oe.a, {
                        size: "small",
                        className: "placed" === (null === e || void 0 === e ? void 0 : e.biddingStatus) ? "biddin-btn bid-btn-placed" : "success" === (null === e || void 0 === e ? void 0 : e.biddingStatus) ? "biddin-btn bid-btn-success" : "rejected" === (null === e || void 0 === e ? void 0 : e.biddingStatus) ? "biddin-btn bid-btn-rejected" : "",
                        children: null === e || void 0 === e ? void 0 : e.biddingStatus
                    })
                }
            }
            ));
            return Object(Pe.jsx)(Vn.a, {
                className: "custom-table more-table  bidding-bottom-table",
                dataSource: a,
                columns: n,
                pagination: !1,
                scroll: {
                    x: "100%"
                }
            })
        }
          , _i = function(e) {
            var t = e.address
              , n = e.auction
              , a = e.setAuctions
              , i = e.setCurrentAuction
              , s = e.setBiddings
              , c = e.biddingList
              , l = Object(o.useState)(1)
              , r = Object(re.a)(l, 2)
              , d = r[0]
              , u = r[1]
              , m = Object(o.useState)(Te)
              , b = Object(re.a)(m, 2)
              , j = b[0]
              , v = b[1]
              , h = Object(o.useState)(!1)
              , p = Object(re.a)(h, 2)
              , x = p[0]
              , f = p[1]
              , O = Object(o.useState)({})
              , g = Object(re.a)(O, 2)
              , N = g[0]
              , y = g[1];
            Object(o.useEffect)((function() {
                C(),
                w()
            }
            ), [t]);
            var C = function() {
                _((d - 1) * j, j, !0, !0),
                D(t)
            }
              , w = function() {
                var e;
                e = function(e, t) {
                    e ? k.b.error(e) : y(null === t || void 0 === t ? void 0 : t.params)
                }
                ,
                we((function(t, n) {
                    t ? e(t) : new Ci.QueryServiceClientImpl(n).QueryParams().then((function(t) {
                        e(null, t)
                    }
                    )).catch((function(t) {
                        return e(null === t || void 0 === t ? void 0 : t.message)
                    }
                    ))
                }
                ))
            }
              , _ = function(e, t, n, i) {
                f(!0),
                function(e, t, n, a, i) {
                    we((function(s, c) {
                        s ? i(s) : new Ci.QueryServiceClientImpl(c).QueryAuctions({
                            pagination: {
                                key: "",
                                offset: me.a.fromNumber(e),
                                limit: me.a.fromNumber(t),
                                countTotal: n,
                                reverse: a
                            }
                        }).then((function(e) {
                            i(null, e)
                        }
                        )).catch((function(e) {
                            i(null === e || void 0 === e ? void 0 : e.message)
                        }
                        ))
                    }
                    ))
                }(e, t, n, i, (function(e, t) {
                    f(!1),
                    e ? k.b.error(e) : a(t && t.auctions, t && t.pagination)
                }
                ))
            }
              , D = function(e) {
                var t, n;
                f(!0),
                t = e,
                n = function(t, n) {
                    f(!1),
                    t ? k.b.error(t) : e && s(n && n.biddings, n && n.pagination, n && n.bidder)
                }
                ,
                we((function(e, a) {
                    e ? n(e) : new Ci.QueryServiceClientImpl(a).QueryBiddings({
                        bidder: t
                    }).then((function(e) {
                        n(null, e)
                    }
                    )).catch((function(e) {
                        n(null === e || void 0 === e ? void 0 : e.message)
                    }
                    ))
                }
                ))
            }
              , A = [{
                title: Object(Pe.jsxs)(Pe.Fragment, {
                    children: ["Auctioned Asset ", Object(Pe.jsx)(ft, {
                        text: "Asset to be sold in the auction"
                    })]
                }),
                dataIndex: "auctionedasset",
                key: "auctionedasset"
            }, {
                title: Object(Pe.jsxs)(Pe.Fragment, {
                    children: ["Bidding Asset", " ", Object(Pe.jsx)(ft, {
                        text: "Asset used to buy the auctioned asset"
                    })]
                }),
                dataIndex: "biddingasset",
                key: "biddingasset"
            }, {
                title: Object(Pe.jsxs)(Pe.Fragment, {
                    children: ["Quantity", " ", Object(Pe.jsx)(ft, {
                        text: "Quantity of the auctioned asset to be sold"
                    })]
                }),
                dataIndex: "quantity",
                align: "center",
                key: "quantity"
            }, {
                title: Object(Pe.jsxs)(Pe.Fragment, {
                    children: ["End Time ", Object(Pe.jsx)(ft, {
                        text: "Time left for the auction to end"
                    })]
                }),
                dataIndex: "timer",
                key: "timer",
                align: "center",
                render: function(e) {
                    return Object(Pe.jsx)(Pe.Fragment, {
                        children: Object(Pe.jsx)("div", {
                            className: "tabletimer",
                            children: e
                        })
                    })
                }
            }, {
                title: Object(Pe.jsxs)(Pe.Fragment, {
                    children: ["Top Bid ", Object(Pe.jsx)(ft, {
                        text: "Current top bid of the auction"
                    })]
                }),
                dataIndex: "topbid",
                key: "topbid",
                align: "center"
            }, {
                title: "Action",
                dataIndex: "action",
                key: "action",
                align: "right",
                render: function(e) {
                    return Object(Pe.jsxs)("div", {
                        onClick: function() {
                            return i(e)
                        },
                        children: [" ", Object(Pe.jsx)(yi, {
                            auction: e,
                            refreshData: C,
                            discount: null === N || void 0 === N ? void 0 : N.auctionDiscountPercent
                        })]
                    })
                }
            }]
              , S = n.list && n.list.length > 0 && n.list.map((function(e, t) {
                var n, a, i, s, c, o;
                return {
                    key: t,
                    id: e.id,
                    auctionedasset: Object(Pe.jsx)(Pe.Fragment, {
                        children: Object(Pe.jsxs)("div", {
                            className: "assets-withicon",
                            children: [Object(Pe.jsx)("div", {
                                className: "assets-icon",
                                children: Object(Pe.jsx)($e, {
                                    name: Dt(null === e || void 0 === e || null === (n = e.auctionedCollateral) || void 0 === n ? void 0 : n.denom)
                                })
                            }), Ut(null === e || void 0 === e || null === (a = e.auctionedCollateral) || void 0 === a ? void 0 : a.denom)]
                        })
                    }),
                    biddingasset: Object(Pe.jsx)(Pe.Fragment, {
                        children: Object(Pe.jsxs)("div", {
                            className: "assets-withicon",
                            children: [Object(Pe.jsx)("div", {
                                className: "assets-icon",
                                children: Object(Pe.jsx)($e, {
                                    name: Dt(null === e || void 0 === e || null === (i = e.bid) || void 0 === i ? void 0 : i.denom)
                                })
                            }), Ut(null === e || void 0 === e || null === (s = e.bid) || void 0 === s ? void 0 : s.denom)]
                        })
                    }),
                    timer: J()(e && e.endTime).format("MMM DD, YYYY HH:mm"),
                    quantity: (null === e || void 0 === e || null === (c = e.auctionedCollateral) || void 0 === c ? void 0 : c.amount) && qt(null === e || void 0 === e || null === (o = e.auctionedCollateral) || void 0 === o ? void 0 : o.amount),
                    topbid: e && e.bid && Number(e.bid.amount) > 0 ? qt(e.bid.amount) : e && e.minBid && e.minBid.amount && qt(e.minBid.amount),
                    action: e
                }
            }
            ));
            return Object(Pe.jsx)("div", {
                className: "app-content-wrapper",
                children: Object(Pe.jsx)(Ke, {
                    children: Object(Pe.jsxs)(We, {
                        children: [Object(Pe.jsx)("div", {
                            className: "more-upper",
                            children: Object(Pe.jsx)("div", {
                                className: "more-upper-card",
                                children: Object(Pe.jsx)(Vn.a, {
                                    className: "custom-table more-table",
                                    dataSource: S,
                                    columns: A,
                                    loading: x,
                                    onChange: function(e) {
                                        return u((t = e).current - 1),
                                        v(t.pageSize),
                                        void _((d - 1) * j, j, !0, !0);
                                        var t
                                    },
                                    pagination: {
                                        total: n && n.pagination && n.pagination.total,
                                        pageSize: j
                                    },
                                    scroll: {
                                        x: "100%"
                                    }
                                })
                            })
                        }), Object(Pe.jsxs)("div", {
                            className: "more-bottom",
                            children: [Object(Pe.jsx)("h3", {
                                children: "Your Bidding"
                            }), Object(Pe.jsx)("div", {
                                className: "more-bottom-card",
                                children: Object(Pe.jsx)(wi, {
                                    biddingList: c
                                })
                            })]
                        })]
                    })
                })
            })
        };
        _i.propTypes = {
            lang: d.string.isRequired,
            setAuctions: d.func.isRequired,
            setBiddings: d.func.isRequired,
            setCurrentAuction: d.func.isRequired,
            address: d.string.isRequired,
            auction: d.shape({
                pagination: d.shape({
                    total: d.shape({
                        low: d.number
                    })
                }),
                list: d.arrayOf(d.shape({
                    auctionedCollateral: d.shape({
                        amount: d.string,
                        denom: d.string
                    }),
                    minBid: d.shape({
                        amount: d.string,
                        denom: d.string
                    }),
                    bid: d.shape({
                        amount: d.string,
                        denom: d.string
                    }),
                    id: d.shape({
                        high: d.number,
                        low: d.number,
                        unsigned: d.bool
                    }),
                    bidder: d.string,
                    endTime: d.instanceOf(Date)
                }))
            }),
            biddingList: d.arrayOf(d.shape({
                auctionedCollateral: d.shape({
                    amount: d.string,
                    denom: d.string
                }),
                auctionStatus: d.string.isRequired,
                biddingStatus: d.string.isRequired,
                id: d.shape({
                    high: d.number,
                    low: d.number,
                    unsigned: d.bool
                }),
                bid: d.shape({
                    amount: d.string,
                    denom: d.string
                }),
                bidder: d.string,
                biddingTimestamp: d.instanceOf(Date)
            }))
        };
        var Di = {
            setCurrentAuction: function(e) {
                return {
                    type: xi,
                    value: e
                }
            },
            setAuctions: function(e, t) {
                return {
                    type: pi,
                    list: e,
                    pagination: t
                }
            },
            setBiddings: function(e, t, n) {
                return {
                    type: Oi,
                    list: e,
                    pagination: t,
                    bidder: n
                }
            }
        }
          , Ai = Object(i.b)((function(e) {
            return {
                lang: e.language,
                auction: e.auction.data,
                biddingList: e.auction.bidding.list,
                address: e.account.address
            }
        }
        ), Di)(_i)
          , ki = (n(1591),
        n(436))
          , Si = (n(1593),
        n(749))
          , Ti = (n(1595),
        Si.a.Step,
        ki.a.Panel)
          , Ei = Object(i.b)((function(e) {
            return {
                lang: e.language,
                address: e.account.address
            }
        }
        ))((function(e) {
            var t = e.address
              , n = Object(o.useState)()
              , a = Object(re.a)(n, 2)
              , i = a[0]
              , s = a[1]
              , c = Object(o.useState)(!1)
              , l = Object(re.a)(c, 2)
              , r = l[0]
              , d = l[1];
            Object(o.useEffect)((function() {
                t && u()
            }
            ), [t]);
            var u = function() {
                d(!0),
                function(e, t) {
                    var n = "".concat(Y, "/stats/").concat(e);
                    ee.a.get(n, {
                        headers: {
                            "Content-Type": "application/json"
                        }
                    }).then((function(e) {
                        t(null, e.data)
                    }
                    )).catch((function(e) {
                        k.b.error(null === e || void 0 === e ? void 0 : e.message),
                        t(null === e || void 0 === e ? void 0 : e.message)
                    }
                    ))
                }(t, (function(e, t) {
                    d(!1),
                    e || s(null === t || void 0 === t ? void 0 : t.tracking_data)
                }
                ))
            }
              , m = function(e) {
                i[e] || (d(!0),
                function(e, t, n) {
                    var a = "".concat(Y, "/externals/");
                    ee.a.post(a, {
                        walletAddress: e,
                        flagType: t
                    }, {
                        headers: {
                            "Content-Type": "application/json"
                        }
                    }).then((function(e) {
                        n(null, e.data)
                    }
                    )).catch((function(e) {
                        k.b.error(null === e || void 0 === e ? void 0 : e.message),
                        n(null === e || void 0 === e ? void 0 : e.message)
                    }
                    ))
                }(t, e, (function(e) {
                    d(!1),
                    e || u()
                }
                )))
            }
              , b = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : i;
                return null !== e && void 0 !== e && e.academia ? null !== e && void 0 !== e && e.ibc_deposits ? null !== e && void 0 !== e && e.mint ? null !== e && void 0 !== e && e.swap ? null !== e && void 0 !== e && e.farm ? null !== e && void 0 !== e && e.tweet ? 6 : 5 : 4 : 3 : 2 : 1 : 0
            }
              , j = function() {
                return b() + 1
            };
            return Object(Pe.jsx)("div", {
                className: "app-content-wrapper",
                children: Object(Pe.jsx)(le.a, {
                    spinning: r,
                    children: Object(Pe.jsx)(Ke, {
                        children: Object(Pe.jsx)(We, {
                            lg: "12",
                            md: "12",
                            sm: "12",
                            className: "mb-3",
                            children: Object(Pe.jsx)("div", {
                                className: "campaign-card",
                                children: Object(Pe.jsx)("div", {
                                    className: "campaign-card-inner",
                                    children: t ? Object(Pe.jsxs)(Pe.Fragment, {
                                        children: [Object(Pe.jsx)("div", {
                                            className: "campaign-header",
                                            children: Object(Pe.jsx)("div", {
                                                className: "campaign-progress",
                                                children: Object(Pe.jsxs)("ul", {
                                                    children: [Object(Pe.jsx)("li", {
                                                        children: Object(Pe.jsx)("span", {
                                                            children: Object(Pe.jsxs)("span", {
                                                                "data-fill": b() >= 1,
                                                                children: [Object(Pe.jsx)("div", {
                                                                    className: "dot-icon",
                                                                    children: Object(Pe.jsx)($e, {
                                                                        name: "stepcmdx-icon",
                                                                        viewbox: "0 0 44.768 44.768"
                                                                    })
                                                                }), Object(Pe.jsx)("p", {
                                                                    children: "10CMDX"
                                                                })]
                                                            })
                                                        })
                                                    }), Object(Pe.jsx)("li", {
                                                        children: Object(Pe.jsx)("span", {
                                                            children: Object(Pe.jsxs)("span", {
                                                                "data-fill": b() >= 2,
                                                                children: [Object(Pe.jsx)("div", {
                                                                    className: "dot-icon",
                                                                    children: Object(Pe.jsx)($e, {
                                                                        name: "stepcmdx-icon",
                                                                        viewbox: "0 0 44.768 44.768"
                                                                    })
                                                                }), Object(Pe.jsx)("p", {
                                                                    children: "20CMDX"
                                                                })]
                                                            })
                                                        })
                                                    }), Object(Pe.jsx)("li", {
                                                        children: Object(Pe.jsx)("span", {
                                                            children: Object(Pe.jsxs)("span", {
                                                                "data-fill": b() >= 3,
                                                                children: [Object(Pe.jsx)("div", {
                                                                    className: "dot-icon",
                                                                    children: Object(Pe.jsx)($e, {
                                                                        name: "stepcmdx-icon",
                                                                        viewbox: "0 0 44.768 44.768"
                                                                    })
                                                                }), Object(Pe.jsx)("p", {
                                                                    children: "40CMDX"
                                                                })]
                                                            })
                                                        })
                                                    }), Object(Pe.jsx)("li", {
                                                        "data-fill-state": "",
                                                        children: Object(Pe.jsx)("span", {
                                                            children: Object(Pe.jsxs)("span", {
                                                                "data-fill": b() >= 4,
                                                                children: [Object(Pe.jsx)("div", {
                                                                    className: "dot-icon",
                                                                    children: Object(Pe.jsx)($e, {
                                                                        name: "stepcmdx-icon",
                                                                        viewbox: "0 0 44.768 44.768"
                                                                    })
                                                                }), Object(Pe.jsx)("p", {
                                                                    children: "60CMDX"
                                                                })]
                                                            })
                                                        })
                                                    }), Object(Pe.jsx)("li", {
                                                        "data-fill-state": "",
                                                        children: Object(Pe.jsx)("span", {
                                                            children: Object(Pe.jsxs)("span", {
                                                                "data-fill": b() >= 5,
                                                                children: [Object(Pe.jsx)("div", {
                                                                    className: "dot-icon",
                                                                    children: Object(Pe.jsx)($e, {
                                                                        name: "stepcmdx-icon",
                                                                        viewbox: "0 0 44.768 44.768"
                                                                    })
                                                                }), Object(Pe.jsx)("p", {
                                                                    children: "80CMDX"
                                                                })]
                                                            })
                                                        })
                                                    }), Object(Pe.jsx)("li", {
                                                        "data-fill-state": "",
                                                        children: Object(Pe.jsx)("span", {
                                                            children: Object(Pe.jsxs)("span", {
                                                                "data-fill": b() >= 6,
                                                                children: [Object(Pe.jsx)("div", {
                                                                    className: "dot-icon",
                                                                    children: Object(Pe.jsx)($e, {
                                                                        name: "stepcmdx-icon",
                                                                        viewbox: "0 0 44.768 44.768"
                                                                    })
                                                                }), Object(Pe.jsx)("p", {
                                                                    children: "100CMDX"
                                                                })]
                                                            })
                                                        })
                                                    })]
                                                })
                                            })
                                        }), Object(Pe.jsx)("div", {
                                            className: "campaign-body",
                                            children: Object(Pe.jsx)("div", {
                                                className: "campaign-list",
                                                children: Object(Pe.jsxs)(ki.a, {
                                                    accordion: !0,
                                                    children: [Object(Pe.jsx)(Ti, {
                                                        collapsible: j() < 1 ? "disabled" : "",
                                                        header: Object(Pe.jsxs)(Pe.Fragment, {
                                                            children: [Object(Pe.jsx)("h3", {
                                                                children: "Task 1: Educate yourself"
                                                            }), Object(Pe.jsxs)("div", {
                                                                className: null !== i && void 0 !== i && i.academia ? "campaign-status complete" : "campaign-status incomplete",
                                                                children: [Object(Pe.jsx)("span", {}), " ", null !== i && void 0 !== i && i.academia ? "Completed" : "Incomplete"]
                                                            })]
                                                        }),
                                                        children: Object(Pe.jsx)("div", {
                                                            className: "campaign-item",
                                                            children: Object(Pe.jsxs)("div", {
                                                                className: "campaign-item-inner",
                                                                children: [Object(Pe.jsx)("div", {
                                                                    className: "campaign-icons",
                                                                    children: Object(Pe.jsx)("div", {
                                                                        className: "campaign-icons-inner",
                                                                        children: Object(Pe.jsx)($e, {
                                                                            name: "task1-icon",
                                                                            viewbox: "0 0 53.013 38.993"
                                                                        })
                                                                    })
                                                                }), Object(Pe.jsx)("div", {
                                                                    className: "campaign-details",
                                                                    children: Object(Pe.jsxs)("p", {
                                                                        children: ["Visit", " ", Object(Pe.jsx)("a", {
                                                                            className: "links",
                                                                            onClick: function() {
                                                                                return m("academia")
                                                                            },
                                                                            "aria-label": "Academy",
                                                                            target: "_blank",
                                                                            rel: "noreferrer",
                                                                            href: "https://academy.comdex.one",
                                                                            children: "academy.comdex.one"
                                                                        }), " ", "and watch the complete course of our Decentralised Synthetics Exchange."]
                                                                    })
                                                                })]
                                                            })
                                                        })
                                                    }, "1"), Object(Pe.jsx)(Ti, {
                                                        collapsible: j() < 2 ? "disabled" : "",
                                                        header: Object(Pe.jsxs)(Pe.Fragment, {
                                                            children: [Object(Pe.jsx)("h3", {
                                                                children: "Task 2: Transfer IBC-Enabled tokens to the DEX"
                                                            }), " ", Object(Pe.jsxs)("div", {
                                                                className: null !== i && void 0 !== i && i.ibc_deposits ? "campaign-status complete" : "campaign-status incomplete",
                                                                children: [Object(Pe.jsx)("span", {}), " ", null !== i && void 0 !== i && i.ibc_deposits ? "Completed" : "Incomplete"]
                                                            })]
                                                        }),
                                                        children: Object(Pe.jsx)("div", {
                                                            className: "campaign-item",
                                                            children: Object(Pe.jsxs)("div", {
                                                                className: "campaign-item-inner",
                                                                children: [Object(Pe.jsx)("div", {
                                                                    className: "campaign-icons",
                                                                    children: Object(Pe.jsx)("div", {
                                                                        className: "campaign-icons-inner",
                                                                        children: Object(Pe.jsx)($e, {
                                                                            name: "task2-icon",
                                                                            viewbox: "0 0 46.055 55.559"
                                                                        })
                                                                    })
                                                                }), Object(Pe.jsx)("div", {
                                                                    className: "campaign-details",
                                                                    children: Object(Pe.jsx)("p", {
                                                                        children: "Transfer at least 3 different tokens. [$XPRT, $ATOM, $UST]"
                                                                    })
                                                                })]
                                                            })
                                                        })
                                                    }, "2"), Object(Pe.jsx)(Ti, {
                                                        collapsible: j() < 3 ? "disabled" : "",
                                                        header: Object(Pe.jsxs)(Pe.Fragment, {
                                                            children: [Object(Pe.jsx)("h3", {
                                                                children: "Task 3: Try to mint cAssets"
                                                            }), " ", Object(Pe.jsxs)("div", {
                                                                className: null !== i && void 0 !== i && i.mint ? "campaign-status complete" : "campaign-status incomplete",
                                                                children: [Object(Pe.jsx)("span", {}), " ", null !== i && void 0 !== i && i.mint ? "Completed" : "Incomplete"]
                                                            })]
                                                        }),
                                                        children: Object(Pe.jsx)("div", {
                                                            className: "campaign-item",
                                                            children: Object(Pe.jsxs)("div", {
                                                                className: "campaign-item-inner",
                                                                children: [Object(Pe.jsx)("div", {
                                                                    className: "campaign-icons",
                                                                    children: Object(Pe.jsx)("div", {
                                                                        className: "campaign-icons-inner",
                                                                        children: Object(Pe.jsx)($e, {
                                                                            name: "task3-icon",
                                                                            viewbox: "0 0 42 55.181"
                                                                        })
                                                                    })
                                                                }), Object(Pe.jsx)("div", {
                                                                    className: "campaign-details",
                                                                    children: Object(Pe.jsx)("p", {
                                                                        children: "Keeping 200% collateral ratio, Mint each of the cAssets using each token, that means total 9 times."
                                                                    })
                                                                })]
                                                            })
                                                        })
                                                    }, "3"), Object(Pe.jsx)(Ti, {
                                                        collapsible: j() < 4 ? "disabled" : "",
                                                        header: Object(Pe.jsxs)(Pe.Fragment, {
                                                            children: [Object(Pe.jsx)("h3", {
                                                                children: "Task 4: Try to swap cAssets"
                                                            }), " ", Object(Pe.jsxs)("div", {
                                                                className: null !== i && void 0 !== i && i.swap ? "campaign-status complete" : "campaign-status incomplete",
                                                                children: [Object(Pe.jsx)("span", {}), " ", null !== i && void 0 !== i && i.swap ? "Completed" : "Incomplete"]
                                                            })]
                                                        }),
                                                        children: Object(Pe.jsx)("div", {
                                                            className: "campaign-item",
                                                            children: Object(Pe.jsxs)("div", {
                                                                className: "campaign-item-inner",
                                                                children: [Object(Pe.jsx)("div", {
                                                                    className: "campaign-icons",
                                                                    children: Object(Pe.jsx)("div", {
                                                                        className: "campaign-icons-inner",
                                                                        children: Object(Pe.jsx)($e, {
                                                                            name: "task4-icon",
                                                                            viewbox: "0 0 38.997 38.997"
                                                                        })
                                                                    })
                                                                }), Object(Pe.jsx)("div", {
                                                                    className: "campaign-details",
                                                                    children: Object(Pe.jsx)("p", {
                                                                        children: "Swap each cAsset against each token, that means total 3 times."
                                                                    })
                                                                })]
                                                            })
                                                        })
                                                    }, "4"), Object(Pe.jsx)(Ti, {
                                                        collapsible: j() < 5 ? "disabled" : "",
                                                        header: Object(Pe.jsxs)(Pe.Fragment, {
                                                            children: [Object(Pe.jsx)("h3", {
                                                                children: "Task 5: Farm your cAssets"
                                                            }), " ", Object(Pe.jsxs)("div", {
                                                                className: null !== i && void 0 !== i && i.farm ? "campaign-status complete" : "campaign-status incomplete",
                                                                children: [Object(Pe.jsx)("span", {}), " ", null !== i && void 0 !== i && i.farm ? "Completed" : "Incomplete"]
                                                            })]
                                                        }),
                                                        children: Object(Pe.jsx)("div", {
                                                            className: "campaign-item",
                                                            children: Object(Pe.jsxs)("div", {
                                                                className: "campaign-item-inner",
                                                                children: [Object(Pe.jsx)("div", {
                                                                    className: "campaign-icons",
                                                                    children: Object(Pe.jsx)("div", {
                                                                        className: "campaign-icons-inner",
                                                                        children: Object(Pe.jsx)($e, {
                                                                            name: "task5-icon",
                                                                            viewbox: "0 0 48 45"
                                                                        })
                                                                    })
                                                                }), Object(Pe.jsx)("div", {
                                                                    className: "campaign-details",
                                                                    children: Object(Pe.jsx)("p", {
                                                                        children: "Provide liquidity in each of the cAsset pool."
                                                                    })
                                                                })]
                                                            })
                                                        })
                                                    }, "5"), Object(Pe.jsx)(Ti, {
                                                        collapsible: j() < 6 ? "disabled" : "",
                                                        header: Object(Pe.jsxs)(Pe.Fragment, {
                                                            children: [Object(Pe.jsx)("h3", {
                                                                children: "Task 6: Let us know"
                                                            }), " ", Object(Pe.jsxs)("div", {
                                                                className: null !== i && void 0 !== i && i.tweet ? "campaign-status complete" : "campaign-status incomplete",
                                                                children: [Object(Pe.jsx)("span", {}), " ", null !== i && void 0 !== i && i.tweet ? "Completed" : "Incomplete"]
                                                            })]
                                                        }),
                                                        children: Object(Pe.jsx)("div", {
                                                            className: "campaign-item",
                                                            children: Object(Pe.jsxs)("div", {
                                                                className: "campaign-item-inner",
                                                                children: [Object(Pe.jsx)("div", {
                                                                    className: "campaign-icons",
                                                                    children: Object(Pe.jsx)("div", {
                                                                        className: "campaign-icons-inner",
                                                                        children: Object(Pe.jsx)($e, {
                                                                            name: "task6-icon",
                                                                            viewbox: "0 0 47 43"
                                                                        })
                                                                    })
                                                                }), Object(Pe.jsx)("div", {
                                                                    className: "campaign-details",
                                                                    children: Object(Pe.jsxs)("p", {
                                                                        children: ["Once you are done with the 5 tasks,", " ", Object(Pe.jsx)("a", {
                                                                            onClick: function() {
                                                                                return m("tweet")
                                                                            },
                                                                            "aria-label": "Twitter",
                                                                            target: "_blank",
                                                                            rel: "noreferrer",
                                                                            className: "links",
                                                                            href: "https://twitter.com/intent/tweet?text=I%20recently%20participated%20in%20the%20%40ComdexOffcial%E2%80%99s%20incentivized%20%23testnet%20of%20Synthetics%20Exchange%20and%20received%2010%20%24CMDX%0A%0ANote%3A%20Only%20the%20first%201000%20people%20will%20receive%20%24CMDX%20rewards.%20Make%20it%20fast!%0A%0AParticipate%20Now%3A%0Ahttps%3A%2F%2Fdemo-app.comdex.one%2Fcampaign%0A%0A%23ComdexTestnet",
                                                                            children: "tweet"
                                                                        }), " ", "about it and use #ComdexTestnet so that we can see it."]
                                                                    })
                                                                })]
                                                            })
                                                        })
                                                    }, "6")]
                                                })
                                            })
                                        })]
                                    }) : Object(Pe.jsx)("center", {
                                        children: "Connect your wallet"
                                    })
                                })
                            })
                        })
                    })
                })
            })
        }
        ))
          , Ii = [{
            path: "/dashboard",
            element: Object(Pe.jsx)(an, {})
        }, {
            path: "/home",
            element: Object(Pe.jsx)(mi, {})
        }, {
            path: "/swap",
            element: Object(Pe.jsx)(Ta, {})
        }, {
            path: "/assets",
            element: Object(Pe.jsx)(ya, {})
        }, {
            path: "/farm",
            element: Object(Pe.jsx)(Un, {})
        }, {
            path: "/farm/:id",
            element: Object(Pe.jsx)(Un, {})
        }, {
            path: "/govern",
            element: Object(Pe.jsx)(Ba, {})
        }, {
            path: "/borrow",
            element: Object(Pe.jsx)(Ya, {})
        }, {
            path: "/more",
            element: Object(Pe.jsx)(hi, {})
        }, {
            path: "/auction",
            element: Object(Pe.jsx)(Ai, {})
        }, {
            path: "/campaign",
            element: Object(Pe.jsx)(Ei, {})
        }]
          , Fi = function() {
            return Object(Pe.jsx)("div", {
                className: "content scroll_bar",
                children: Object(Pe.jsxs)(r.c, {
                    children: [Ii.map((function(e) {
                        return Object(Pe.jsx)(r.a, {
                            exact: !0,
                            element: e.element,
                            path: e.path
                        }, e.path)
                    }
                    )), Object(Pe.jsx)(r.a, {
                        exact: !0,
                        element: Object(Pe.jsx)(an, {}),
                        path: "*"
                    })]
                })
            })
        }
          , Bi = function(e) {
            var t = Object(o.useState)({})
              , n = Object(re.a)(t, 2)
              , a = n[0]
              , i = n[1]
              , s = Object(o.useState)(!1)
              , c = Object(re.a)(s, 2)
              , l = c[0]
              , r = c[1]
              , d = Object(o.useState)(!1)
              , u = Object(re.a)(d, 2)
              , m = u[0]
              , b = u[1];
            return Object(o.useEffect)((function() {
                var t, n = "1.2.5", a = "localStorage"in window && null !== window.localStorage;
                a && localStorage.getItem("inlineSVGrev") === n ? (t = localStorage.getItem("inlineSVGdata"),
                i(t),
                r(!0)) : fetch(e.url).then((function(e) {
                    if (e.ok)
                        return e.text();
                    throw new Error("Network response was not ok.")
                }
                )).then((function(e) {
                    void 0 !== e && (a && (localStorage.setItem("inlineSVGdata", e),
                    localStorage.setItem("inlineSVGrev", n)),
                    i(e))
                }
                )).catch(b).then((function() {
                    return r(!0)
                }
                ))
            }
            ), [e.url]),
            Object(Pe.jsx)("div", {
                dangerouslySetInnerHTML: {
                    __html: a
                },
                className: "svgInline svgInline--".concat(l ? "loaded" : "loading", " ").concat(m ? "svgInline--errored" : "")
            })
        }
          , Ri = (n(1596),
        n(1597),
        n(388),
        n(163))
          , Mi = n(221)
          , Pi = {
            showAccountConnectModal: ba,
            setAccountAddress: ua
        }
          , qi = Object(i.b)((function(e) {
            return {
                lang: e.language,
                address: e.account.address,
                show: e.account.showModal,
                cAssetBalance: e.account.balances.cAsset,
                assetBalance: e.account.balances.asset,
                poolBalance: e.account.balances.pool,
                collateralBalance: e.account.balances.collateral,
                debtBalance: e.account.balances.debt,
                name: e.account.name
            }
        }
        ), Pi)((function(e) {
            var t = e.setAccountAddress
              , n = e.lang
              , a = e.address
              , i = e.cAssetBalance
              , s = e.assetBalance
              , c = e.poolBalance
              , l = e.collateralBalance
              , r = e.debtBalance
              , d = e.name
              , u = Object(o.useState)(!1)
              , m = Object(re.a)(u, 2)
              , b = m[0]
              , j = m[1]
              , v = function() {
                j(!1)
            }
              , h = Object(Pe.jsxs)("div", {
                className: "wallet-connect-dropdown",
                children: [Object(Pe.jsxs)("div", {
                    className: "wallet-connect-upper",
                    children: [Object(Pe.jsx)("span", {}), Object(Pe.jsx)("div", {
                        children: d
                    })]
                }), Object(Pe.jsxs)("div", {
                    className: "px-3",
                    children: [Object(Pe.jsxs)("div", {
                        children: [" ", Ot[n].balance_wallet]
                    }), Object(Pe.jsxs)("div", {
                        className: "balance__value__data",
                        children: [Pt(i + s + c + (l - r), 2), " ", Ot[n].USD]
                    })]
                }), Object(Pe.jsxs)("div", {
                    className: "mt-2 px-3",
                    children: [Object(Pe.jsxs)("div", {
                        children: [Ot[n].address_wallet, " "]
                    }), Object(Pe.jsx)("div", {
                        className: "wallet-address",
                        children: Object(Pe.jsxs)("div", {
                            className: "address-wallet-address d-flex",
                            children: [Object(Pe.jsxs)("span", {
                                className: "mr-3",
                                children: [" ", At(a, 6, 6), " "]
                            }), " ", Object(Pe.jsx)(xn, {
                                text: a
                            })]
                        })
                    })]
                }), Object(Pe.jsx)("div", {
                    className: "mb-2 mt-3",
                    children: Object(Pe.jsx)(oe.a, {
                        type: "primary",
                        onClick: function() {
                            j(!0)
                        },
                        className: "btn-filled",
                        block: !0,
                        size: "small",
                        children: Ot[n].disconnect
                    })
                })]
            });
            return Object(Pe.jsxs)(Pe.Fragment, {
                children: [Object(Pe.jsx)(Ri.a, {
                    overlay: h,
                    trigger: ["click"],
                    children: Object(Pe.jsxs)("div", {
                        className: "connected_button",
                        children: [" ", Object(Pe.jsx)($e, {
                            name: "user-icon"
                        }), " "]
                    })
                }), Object(Pe.jsx)(Je.a, {
                    centered: !0,
                    className: "connect-modal",
                    footer: null,
                    header: null,
                    visible: b,
                    width: 550,
                    onCancel: v,
                    onOk: function() {
                        j(!1)
                    },
                    closeIcon: Object(Pe.jsx)($e, {
                        name: "close",
                        viewbox: "0 0 19 19"
                    }),
                    children: Object(Pe.jsxs)("div", {
                        className: "d-flex flex-wrap flex-column",
                        children: [Object(Pe.jsxs)("h2", {
                            children: [" ", Ot[n].disconnect_wallet]
                        }), Object(Pe.jsxs)("div", {
                            className: "d-flex",
                            children: [Object(Pe.jsxs)(oe.a, {
                                type: "primary",
                                className: "btn-filled mx-3",
                                size: "large",
                                onClick: v,
                                block: !0,
                                children: [" ", Ot[n].no]
                            }), Object(Pe.jsxs)(oe.a, {
                                type: "primary",
                                className: "mx-3",
                                size: "large",
                                onClick: function() {
                                    t(""),
                                    localStorage.removeItem("ac")
                                },
                                block: !0,
                                children: [" ", Ot[n].yes]
                            })]
                        })]
                    })
                })]
            })
        }
        ))
          , Li = (n(1598),
        n(1599),
        {
            showAccountConnectModal: ba,
            setAccountAddress: ua,
            setAccountName: ma
        })
          , Ui = Object(i.b)((function(e) {
            return {
                show: e.account.showModal,
                lang: e.language
            }
        }
        ), Li)((function(e) {
            var t = e.setAccountAddress
              , n = e.setAccountName
              , a = e.lang
              , i = e.showAccountConnectModal
              , s = Object(o.useState)(!1)
              , c = Object(re.a)(s, 2)
              , l = c[0]
              , r = c[1];
            return Object(Pe.jsx)(le.a, {
                spinning: l,
                children: Object(Pe.jsxs)("div", {
                    className: "wallet-connect-dropdown",
                    children: [Object(Pe.jsx)("div", {
                        className: "wallet-connect-upper",
                        children: Object(Pe.jsx)("h3", {
                            className: "text-center",
                            children: Ot[a].connect_wallet
                        })
                    }), Object(Pe.jsx)("div", {
                        className: "mb-2 mt-3",
                        children: Object(Pe.jsxs)("div", {
                            className: "wallet-links",
                            onClick: function() {
                                r(!0),
                                Qn((function(e, a) {
                                    if (r(!1),
                                    e)
                                        k.b.error(e);
                                    else {
                                        t(a.address);
                                        var s = Kn();
                                        setTimeout((function() {
                                            n(null === s || void 0 === s ? void 0 : s.name)
                                        }
                                        ), 500),
                                        localStorage.setItem("ac", Object(Mi.b)(a.address)),
                                        i(!1)
                                    }
                                }
                                ))
                            },
                            children: [Object(Pe.jsx)("span", {
                                children: Ot[a].keplr_wallet
                            }), " "]
                        })
                    })]
                })
            })
        }
        ))
          , Vi = n(745)
          , Hi = "MARKET_LIST_SET"
          , Wi = {
            showAccountConnectModal: ba,
            setAccountAddress: ua,
            setAccountBalances: function(e, t) {
                return {
                    type: aa,
                    list: e,
                    pagination: t
                }
            },
            setPoolBalance: function(e) {
                return {
                    type: ca,
                    value: e
                }
            },
            setcAssetBalance: function(e) {
                return {
                    type: sa,
                    value: e
                }
            },
            setAssetBalance: function(e) {
                return {
                    type: ia,
                    value: e
                }
            },
            setAccountVaults: ja,
            setDebtBalance: function(e) {
                return {
                    type: la,
                    value: e
                }
            },
            setCollateralBalance: function(e) {
                return {
                    type: oa,
                    value: e
                }
            },
            setMarkets: function(e, t) {
                return {
                    type: Hi,
                    list: e,
                    pagination: t
                }
            },
            setAccountName: ma
        }
          , zi = Object(i.b)((function(e) {
            return {
                lang: e.language,
                address: e.account.address,
                show: e.account.showModal,
                markets: e.oracle.market.list,
                refreshBalance: e.account.refreshBalance,
                poolBalances: e.liquidity.poolBalances,
                pools: e.liquidity.pool.list
            }
        }
        ), Wi)((function(e) {
            var t = e.setAccountAddress
              , n = e.address
              , a = e.setAccountBalances
              , i = e.lang
              , s = e.setAssetBalance
              , c = e.setcAssetBalance
              , l = e.setPoolBalance
              , r = e.markets
              , d = e.setAccountVaults
              , u = e.setCollateralBalance
              , m = e.setDebtBalance
              , b = e.refreshBalance
              , j = e.setMarkets
              , v = e.poolBalances
              , h = e.setAccountName
              , p = e.pools;
            Object(o.useEffect)((function() {
                var e = localStorage.getItem("ac")
                  , a = e ? Object(Mi.a)(e) : n;
                if (f(),
                C(),
                a) {
                    t(a);
                    var i = Kn();
                    setTimeout((function() {
                        h(null === i || void 0 === i ? void 0 : i.name)
                    }
                    ), 500),
                    x(n, 0, Te, !0, !1)
                }
            }
            ), [n, b]),
            Object(o.useEffect)((function() {
                x(n, 0, Te, !0, !1)
            }
            ), [r]),
            Object(o.useEffect)((function() {
                C()
            }
            ), [p]);
            var x = function(e, t, n, i, s) {
                Wt(e, t, n, i, s, (function(e, t) {
                    e || (a(t.balances, t.pagination),
                    y(t.balances),
                    O(t.balances),
                    g(t.balances))
                }
                ))
            }
              , f = function(e, t, n, a) {
                !function(e, t, n, a, i) {
                    we((function(s, c) {
                        s ? i(s) : new Vi.QueryServiceClientImpl(c).QueryMarkets({
                            pagination: {
                                key: "",
                                offset: me.a.fromNumber(e),
                                limit: me.a.fromNumber(t),
                                countTotal: n,
                                reverse: a
                            }
                        }).then((function(e) {
                            i(null, e)
                        }
                        )).catch((function(e) {
                            i(null === e || void 0 === e ? void 0 : e.message)
                        }
                        ))
                    }
                    ))
                }(e, t, n, a, (function(e, t) {
                    e || j(t.markets, t.pagination)
                }
                ))
            }
              , O = function(e) {
                var t = e.filter((function(e) {
                    return "uc" === e.denom.substr(0, 2) && !("ucm" === e.denom.substr(0, 3))
                }
                )).map((function(e) {
                    return Rt(r, e.denom) * e.amount
                }
                ));
                c(rn.a.sum(t))
            }
              , g = function() {
                var e = rn.a.sumBy(v);
                l(Number(e * Math.pow(10, 6)))
            }
              , N = function(e) {
                return Rt(r, e) || 0
            }
              , y = function(e) {
                var t = e.filter((function(e) {
                    return "ibc/" === e.denom.substr(0, 4) || e.denom === pe.coinMinimalDenom
                }
                )).map((function(e) {
                    return N(e.denom) * e.amount
                }
                ));
                s(rn.a.sum(t))
            }
              , C = function() {
                w(n, 0, Te, !0, !1)
            }
              , w = function(e, t, n, a, i) {
                en(e, t, n, a, i, (function(e, t) {
                    e ? k.b.error(e) : (d(null === t || void 0 === t ? void 0 : t.vaultsInfo, null === t || void 0 === t ? void 0 : t.pagination),
                    _(null === t || void 0 === t ? void 0 : t.vaultsInfo))
                }
                ))
            }
              , _ = function(e) {
                var t = e.filter((function(e) {
                    return e.owner === n
                }
                ))
                  , a = t.map((function(e) {
                    var t, n;
                    return Rt(r, null === (t = e.debt) || void 0 === t ? void 0 : t.denom) * (null === (n = e.debt) || void 0 === n ? void 0 : n.amount)
                }
                ));
                m(rn.a.sum(a));
                var i = t.map((function(e) {
                    var t, n;
                    return N(null === (t = e.collateral) || void 0 === t ? void 0 : t.denom) * (null === (n = e.collateral) || void 0 === n ? void 0 : n.amount)
                }
                ));
                u(rn.a.sum(i))
            }
              , D = Object(Pe.jsx)(Ui, {});
            return Object(Pe.jsx)(Pe.Fragment, {
                children: n ? Object(Pe.jsxs)("div", {
                    className: "connected_div",
                    children: [Object(Pe.jsx)("div", {
                        className: "connected_left",
                        children: Object(Pe.jsxs)("div", {
                            className: "testnet-top",
                            children: [Object(Pe.jsx)($e, {
                                name: "testnet"
                            }), " ", Ot[i].testnet]
                        })
                    }), Object(Pe.jsx)(qi, {})]
                }) : Object(Pe.jsx)("div", {
                    children: Object(Pe.jsx)(Ri.a, {
                        overlay: D,
                        placement: "bottomRight",
                        trigger: ["click"],
                        children: Object(Pe.jsx)(oe.a, {
                            shape: "round",
                            type: "primary",
                            children: Ot[i].connect
                        })
                    })
                })
            })
        }
        ))
          , Gi = "TOGGLE_DARK_THEME"
          , Qi = {
            setDarkTheme: function(e) {
                return {
                    type: Gi,
                    value: e
                }
            }
        }
          , Xi = Object(i.b)((function(e) {
            return {
                lang: e.language,
                isDarkMode: e.theme.theme.darkThemeEnabled
            }
        }
        ), Qi)((function(e) {
            var t = e.isDarkMode
              , n = e.setDarkTheme;
            Object(o.useEffect)((function() {
                a()
            }
            ), []);
            var a = function() {
                "true" === localStorage.getItem("isDarkMode") ? (document.body.classList.add("dark-mode"),
                n(!0)) : (document.body.classList.remove("dark-mode"),
                n(!1))
            };
            return Object(Pe.jsx)("div", {
                className: "theme-toogle",
                children: Object(Pe.jsx)("div", {
                    onClick: function() {
                        t ? document.body.classList.remove("dark-mode") : document.body.classList.add("dark-mode"),
                        n(!t),
                        localStorage.setItem("isDarkMode", !t)
                    },
                    className: "theme-icons",
                    children: Object(Pe.jsx)($e, {
                        name: "true" === localStorage.getItem("isDarkMode") ? "light-theme" : "dark-theme"
                    })
                })
            })
        }
        ))
          , Ki = function() {
            var e = Object(o.useState)(!1)
              , t = Object(re.a)(e, 2)
              , n = t[0]
              , a = t[1];
            return Object(o.useEffect)((function() {
                var e = function() {
                    a(window.scrollY > 10)
                };
                return window.addEventListener("scroll", e),
                function() {
                    return window.removeEventListener("scroll", e)
                }
            }
            ), []),
            Object(Pe.jsxs)("nav", {
                className: n ? "top_bar fixedHeaderOnScroll" : "top_bar",
                children: [Object(Pe.jsx)(Xi, {}), Object(Pe.jsx)("div", {
                    className: "connect-button",
                    children: Object(Pe.jsx)(zi, {})
                })]
            })
        }
          , Yi = (n(1602),
        n(435))
          , $i = (n(1604),
        n(747))
          , Ji = (n(1605),
        function() {
            return Object(Pe.jsx)("div", {
                className: "footer",
                children: Object(Pe.jsxs)("div", {
                    className: "social-icons",
                    children: [Object(Pe.jsx)("a", {
                        "aria-label": "Discord",
                        target: "_blank",
                        rel: "noreferrer",
                        href: "https://discord.com/invite/7vjPvWKKMT",
                        children: Object(Pe.jsx)($e, {
                            name: "discord",
                            viewbox: "0 0 29.539 22.155"
                        })
                    }), Object(Pe.jsx)("a", {
                        "aria-label": "Github",
                        target: "_blank",
                        rel: "noreferrer",
                        href: "https://github.com/comdex-official",
                        children: Object(Pe.jsx)($e, {
                            name: "github",
                            viewbox: "0 0 22.154 21.607"
                        })
                    }), Object(Pe.jsx)("a", {
                        "aria-label": "Telegram",
                        target: "_blank",
                        rel: "noreferrer",
                        href: "https://t.me/ComdexChat",
                        children: Object(Pe.jsx)($e, {
                            name: "telegram",
                            viewbox: "0 0 24.635 20.66"
                        })
                    }), Object(Pe.jsx)("a", {
                        "aria-label": "Twitter",
                        target: "_blank",
                        rel: "noreferrer",
                        href: "https://twitter.com/ComdexOfficial",
                        children: Object(Pe.jsx)($e, {
                            name: "twitter",
                            viewbox: "0 0 25.617 20.825"
                        })
                    }), Object(Pe.jsx)("a", {
                        "aria-label": "Medium",
                        target: "_blank",
                        rel: "noreferrer",
                        href: "https://blog.comdex.one",
                        children: Object(Pe.jsx)($e, {
                            name: "medium",
                            viewbox: "0 0 25.825 20.66"
                        })
                    })]
                })
            })
        }
        )
          , Zi = [{
            name: "Dashboard",
            value: "dashboard",
            langKey: "dashboard",
            index: 0
        }, {
            name: "MyHome",
            value: "home",
            langKey: "MyHome",
            index: 1
        }, {
            name: "Assets",
            value: "assets",
            langKey: "assets",
            index: 2
        }, {
            name: "c Swap",
            value: "swap",
            langKey: "c_swap",
            index: 3
        }, {
            name: "Borrow",
            value: "borrow",
            langKey: "borrow",
            index: 4
        }, {
            name: "Farm",
            value: "farm",
            langKey: "farm",
            index: 5
        }, {
            name: "More",
            value: "more",
            langKey: "more",
            index: 6
        }]
          , es = {
            setAccountAddress: ua,
            setAccountName: ma
        }
          , ts = Object(i.b)((function(e) {
            return {
                lang: e.language
            }
        }
        ), es)((function(e) {
            var t = e.setAccountAddress
              , n = e.lang
              , a = e.setAccountName
              , i = Object(r.e)()
              , s = Object(r.f)()
              , c = i.pathname && i.pathname.split("/")[1];
            window.addEventListener("keplr_keystorechange", (function() {
                o()
            }
            ));
            var o = function() {
                Qn((function(e, n) {
                    if (e)
                        k.b.error(e);
                    else {
                        var i = Kn();
                        setTimeout((function() {
                            a(null === i || void 0 === i ? void 0 : i.name)
                        }
                        ), 500),
                        t(n.address),
                        localStorage.setItem("ac", Object(Mi.b)(n.address))
                    }
                }
                ))
            };
            return Object(Pe.jsx)("div", {
                className: "vertical_tabs",
                children: Object(Pe.jsx)("ul", {
                    className: "tabs_content",
                    children: Zi.map((function(e) {
                        return Object(Pe.jsx)("li", Object(Fe.a)(Object(Fe.a)({
                            className: "tab " + ("dashboard" !== e.value || c ? e.value === c ? "active_tab" : "" : "active_tab"),
                            value: e.value,
                            onClick: function() {
                                return s("/" + e.value)
                            }
                        }, {
                            id: "simple-tab-".concat(0)
                        }), {}, {
                            children: Object(Pe.jsxs)("div", {
                                className: "tab-inner",
                                children: [Object(Pe.jsx)($e, {
                                    name: e.value
                                }), Ot[n][e.langKey]]
                            })
                        }), e.index)
                    }
                    ))
                })
            })
        }
        ))
          , ns = n(746)
          , as = Yi.a.Sider
          , is = function() {
            var e = Object($i.useMediaQuery)({
                query: "(max-width: 991px)"
            })
              , t = Object(r.f)()
              , n = Object(o.useState)(!!e)
              , a = Object(re.a)(n, 2)
              , i = a[0]
              , s = a[1]
              , c = function() {
                s(!i),
                i && e ? document.body.classList.add("sidebar-open") : document.body.classList.remove("sidebar-open")
            };
            return Object(Pe.jsxs)(Pe.Fragment, {
                children: [Object(Pe.jsxs)(Yi.a, {
                    className: i ? "sidebar-wrapper" : "sidebar-open sidebar-wrapper",
                    children: [Object(Pe.jsx)("button", {
                        className: "sidebar-toggle",
                        title: "sidebar-toggle",
                        onClick: c,
                        children: e ? Object(Pe.jsx)($e, {
                            className: i ? "open" : "",
                            name: i ? "sidebar-menu" : "sidebar-close"
                        }) : Object(Pe.jsx)($e, {
                            className: i ? "open" : "",
                            name: i ? "sidebar-open" : "sidebar-close"
                        })
                    }), Object(Pe.jsx)(as, {
                        collapsible: !0,
                        breakpoint: "lg",
                        collapsed: i,
                        collapsedWidth: "0",
                        trigger: null,
                        children: Object(Pe.jsxs)("div", {
                            className: "side_bar",
                            children: [Object(Pe.jsxs)("div", {
                                className: "logo",
                                onClick: function() {
                                    return t({
                                        pathname: "/"
                                    })
                                },
                                children: [Object(Pe.jsx)($e, {
                                    className: "white",
                                    name: "logo-colored"
                                }), Object(Pe.jsx)($e, {
                                    className: "blue",
                                    name: "logo-colored-blue"
                                })]
                            }), Object(Pe.jsx)(ns.Scrollbars, {
                                children: Object(Pe.jsx)("div", {
                                    className: "side_bar_inner",
                                    children: Object(Pe.jsx)(ts, {})
                                })
                            }), Object(Pe.jsx)(Ji, {})]
                        })
                    })]
                }), Object(Pe.jsx)("div", {
                    onClick: c,
                    children: e && !i && Object(Pe.jsx)("div", {
                        className: "sidebar-overlay"
                    })
                })]
            })
        }
          , ss = n.p + "static/media/svg-sprite.683f6b30.svg"
          , cs = function() {
            return Object(Pe.jsxs)(Pe.Fragment, {
                children: [Object(Pe.jsx)(Bi, {
                    url: ss
                }), Object(Pe.jsxs)("div", {
                    className: "main_wrapper",
                    children: [Object(Pe.jsx)(is, {}), Object(Pe.jsxs)("div", {
                        className: "main-container",
                        children: [Object(Pe.jsx)(Ki, {}), Object(Pe.jsx)(Fi, {})]
                    })]
                })]
            })
        }
          , os = n(73)
          , ls = n.n(os)
          , rs = Object(s.combineReducers)({
            address: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ""
                  , t = arguments.length > 1 ? arguments[1] : void 0;
                return t.type === Yn ? t.value : e
            },
            showModal: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0]
                  , t = arguments.length > 1 ? arguments[1] : void 0;
                return t.type === $n ? t.value : e
            },
            vaults: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                    list: [],
                    pagination: {}
                }
                  , t = arguments.length > 1 ? arguments[1] : void 0;
                return t.type === Jn ? Object(Fe.a)(Object(Fe.a)({}, e), {}, {
                    list: t.list,
                    pagination: t.pagination
                }) : e
            },
            totalValue: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0
                  , t = arguments.length > 1 ? arguments[1] : void 0;
                return t.type === Zn ? t.value : e
            },
            history: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                    list: [],
                    count: 0
                }
                  , t = arguments.length > 1 ? arguments[1] : void 0;
                return t.type === ea ? Object(Fe.a)(Object(Fe.a)({}, e), {}, {
                    list: t.list,
                    count: t.count
                }) : e
            },
            showFormModal: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                    show: !1,
                    key: ""
                }
                  , t = arguments.length > 1 ? arguments[1] : void 0;
                return t.type === ta ? Object(Fe.a)(Object(Fe.a)({}, e), {}, {
                    key: t.key,
                    show: t.show
                }) : e
            },
            vault: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                  , t = arguments.length > 1 ? arguments[1] : void 0;
                return t.type === na ? t.value || {} : e
            },
            balances: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                    list: [],
                    pagination: {},
                    asset: 0,
                    cAsset: 0,
                    pool: 0,
                    debt: 0,
                    collateral: 0
                }
                  , t = arguments.length > 1 ? arguments[1] : void 0;
                switch (t.type) {
                case aa:
                    return Object(Fe.a)(Object(Fe.a)({}, e), {}, {
                        list: t.list,
                        pagination: t.pagination
                    });
                case ia:
                    return Object(Fe.a)(Object(Fe.a)({}, e), {}, {
                        asset: t.value
                    });
                case sa:
                    return Object(Fe.a)(Object(Fe.a)({}, e), {}, {
                        cAsset: t.value
                    });
                case ca:
                    return Object(Fe.a)(Object(Fe.a)({}, e), {}, {
                        pool: t.value
                    });
                case la:
                    return Object(Fe.a)(Object(Fe.a)({}, e), {}, {
                        debt: t.value
                    });
                case oa:
                    return Object(Fe.a)(Object(Fe.a)({}, e), {}, {
                        collateral: t.value
                    });
                default:
                    return e
                }
            },
            refreshBalance: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1
                  , t = arguments.length > 1 ? arguments[1] : void 0;
                return t.type === ra && t.value || e
            },
            name: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ""
                  , t = arguments.length > 1 ? arguments[1] : void 0;
                return t.type === da ? t.value : e
            }
        })
          , ds = Object(s.combineReducers)({
            pairs: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                    list: [],
                    pagination: {}
                }
                  , t = arguments.length > 1 ? arguments[1] : void 0;
                return t.type === S ? {
                    list: t.list,
                    pagination: t.pagination
                } : e
            },
            pairId: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null
                  , t = arguments.length > 1 ? arguments[1] : void 0;
                return t.type === T && t.value || e
            },
            pair: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                  , t = arguments.length > 1 ? arguments[1] : void 0;
                return t.type === E && t.value || e
            },
            _: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                    list: [],
                    pagination: {},
                    cAssets: [],
                    inProgress: !1
                }
                  , t = arguments.length > 1 ? arguments[1] : void 0;
                return t.type === I ? Object(Fe.a)(Object(Fe.a)({}, e), {}, {
                    list: t.list,
                    cAssets: t.cAssets,
                    pagination: t.pagination
                }) : e
            },
            outAsset: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ""
                  , t = arguments.length > 1 ? arguments[1] : void 0;
                return t.type === F ? t.value || "" : e
            },
            inAsset: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ""
                  , t = arguments.length > 1 ? arguments[1] : void 0;
                return t.type === B ? t.value || "" : e
            },
            inAmount: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0
                  , t = arguments.length > 1 ? arguments[1] : void 0;
                return t.type === M ? t.value || 0 : e
            },
            outAmount: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0
                  , t = arguments.length > 1 ? arguments[1] : void 0;
                return t.type === R ? t.value || 0 : e
            },
            collateralRatio: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 150
                  , t = arguments.length > 1 ? arguments[1] : void 0;
                return t.type === P ? t.value || 0 : e
            }
        })
          , us = Object(s.combineReducers)({
            statistics: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                  , t = arguments.length > 1 ? arguments[1] : void 0;
                return t.type === q ? t.value : e
            },
            volumeChart: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []
                  , t = arguments.length > 1 ? arguments[1] : void 0;
                return t.type === L ? t.data : e
            },
            priceChart: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []
                  , t = arguments.length > 1 ? arguments[1] : void 0;
                return t.type === V ? t.data : e
            },
            range: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "d"
                  , t = arguments.length > 1 ? arguments[1] : void 0;
                return t.type === W ? t.value : e
            },
            totalCollateralList: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []
                  , t = arguments.length > 1 ? arguments[1] : void 0;
                return t.type === z ? t.data : e
            },
            priceChartInProgress: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0]
                  , t = arguments.length > 1 ? arguments[1] : void 0;
                switch (t.type) {
                case G:
                    return t.value;
                case V:
                case H:
                    return !1;
                default:
                    return e
                }
            },
            volumeChartInProgress: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0]
                  , t = arguments.length > 1 ? arguments[1] : void 0;
                switch (t.type) {
                case Q:
                    return t.value;
                case L:
                case U:
                    return !1;
                default:
                    return e
                }
            }
        })
          , ms = Object(s.combineReducers)({
            complete: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0]
                  , t = arguments.length > 1 ? arguments[1] : void 0;
                return t.type === Tn ? t.value : e
            },
            caution: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                    show: !1,
                    isAccepted: !1
                }
                  , t = arguments.length > 1 ? arguments[1] : void 0;
                return t.type === En ? {
                    show: t.show,
                    isAccepted: t.isAccepted
                } : e
            }
        })
          , bs = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "en";
            return e
        }
          , js = Object(s.combineReducers)({
            cautionNotice: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                    show: !1,
                    isAccepted: !1
                }
                  , t = arguments.length > 1 ? arguments[1] : void 0;
                return t.type === et ? {
                    show: t.show,
                    isAccepted: t.isAccepted
                } : e
            },
            demandCoin: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                    amount: 0,
                    denom: ""
                }
                  , t = arguments.length > 1 ? arguments[1] : void 0;
                switch (t.type) {
                case tt:
                    return Object(Fe.a)(Object(Fe.a)({}, e), {}, {
                        denom: t.value
                    });
                case nt:
                    return Object(Fe.a)(Object(Fe.a)({}, e), {}, {
                        amount: t.value
                    });
                default:
                    return e
                }
            },
            offerCoin: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                    amount: 0,
                    denom: "",
                    fee: 0
                }
                  , t = arguments.length > 1 ? arguments[1] : void 0;
                switch (t.type) {
                case at:
                    return Object(Fe.a)(Object(Fe.a)({}, e), {}, {
                        denom: t.value
                    });
                case it:
                    return Object(Fe.a)(Object(Fe.a)({}, e), {}, {
                        amount: t.value,
                        fee: t.fee
                    });
                default:
                    return e
                }
            },
            reverse: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0]
                  , t = arguments.length > 1 ? arguments[1] : void 0;
                return t.type === st ? t.value || !1 : e
            },
            isComplete: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0]
                  , t = arguments.length > 1 ? arguments[1] : void 0;
                return t.type === ct ? t.value || !1 : e
            },
            slippage: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0
                  , t = arguments.length > 1 ? arguments[1] : void 0;
                return t.type === ot ? t.value || 0 : e
            },
            successData: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                  , t = arguments.length > 1 ? arguments[1] : void 0;
                return t.type === lt ? t.value : e
            },
            params: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                  , t = arguments.length > 1 ? arguments[1] : void 0;
                return t.type === rt ? t.value : e
            },
            slippageTolerance: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1
                  , t = arguments.length > 1 ? arguments[1] : void 0;
                return t.type === dt ? t.value : e
            }
        })
          , vs = Object(s.combineReducers)({
            pool: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                    _: {},
                    list: [],
                    pagination: {},
                    inProgress: !1
                }
                  , t = arguments.length > 1 ? arguments[1] : void 0;
                switch (t.type) {
                case u:
                    return Object(Fe.a)(Object(Fe.a)({}, e), {}, {
                        list: t.list,
                        pagination: t.pagination
                    });
                case m:
                    return Object(Fe.a)(Object(Fe.a)({}, e), {}, {
                        _: t.value
                    });
                default:
                    return e
                }
            },
            poolBalance: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []
                  , t = arguments.length > 1 ? arguments[1] : void 0;
                return t.type === b ? t.list : e
            },
            poolDeposit: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                    list: [],
                    pagination: {}
                }
                  , t = arguments.length > 1 ? arguments[1] : void 0;
                return t.type === j ? {
                    list: t.list,
                    pagination: t.pagination
                } : e
            },
            spotPrice: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0
                  , t = arguments.length > 1 ? arguments[1] : void 0;
                return t.type === v ? t.value : e
            },
            inProgress: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0]
                  , t = arguments.length > 1 ? arguments[1] : void 0;
                return t.type === h ? t.value : e
            },
            firstReserveCoinDenom: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ""
                  , t = arguments.length > 1 ? arguments[1] : void 0;
                return t.type === p ? t.value : e
            },
            secondReserveCoinDenom: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ""
                  , t = arguments.length > 1 ? arguments[1] : void 0;
                return t.type === x ? t.value : e
            },
            poolTokenSupply: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                  , t = arguments.length > 1 ? arguments[1] : void 0;
                return t.type === f ? t.value : e
            },
            poolBalances: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []
                  , t = arguments.length > 1 ? arguments[1] : void 0;
                if (t.type === O && t.value) {
                    var n = e;
                    return n[t.index - 1] = t.value,
                    n
                }
                return e
            },
            list: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []
                  , t = arguments.length > 1 ? arguments[1] : void 0;
                if (t.type === g && t.value) {
                    var n = e;
                    return n[t.index] = t.value,
                    n
                }
                return e
            }
        })
          , hs = Object(s.combineReducers)({
            data: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                    list: [],
                    pagination: {}
                }
                  , t = arguments.length > 1 ? arguments[1] : void 0;
                return t.type === pi ? Object(Fe.a)(Object(Fe.a)({}, e), {}, {
                    list: t.list,
                    pagination: t.pagination
                }) : e
            },
            _: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                  , t = arguments.length > 1 ? arguments[1] : void 0;
                return t.type === xi && t.value || e
            },
            bidAmount: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0
                  , t = arguments.length > 1 ? arguments[1] : void 0;
                return t.type === fi ? t.value : e
            },
            bidding: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                    list: [],
                    pagination: {},
                    bidder: ""
                }
                  , t = arguments.length > 1 ? arguments[1] : void 0;
                return t.type === Oi ? Object(Fe.a)(Object(Fe.a)({}, e), {}, {
                    list: t.list,
                    pagination: t.pagination,
                    bidder: t.bidder
                }) : e
            }
        })
          , ps = Object(s.combineReducers)({
            theme: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                    darkThemeEnabled: !1
                }
                  , t = arguments.length > 1 ? arguments[1] : void 0;
                return t.type === Gi ? Object(Fe.a)(Object(Fe.a)({}, e), {}, {
                    darkThemeEnabled: t.value
                }) : e
            }
        })
          , xs = Object(s.combineReducers)({
            market: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                    list: [],
                    pagination: {}
                }
                  , t = arguments.length > 1 ? arguments[1] : void 0;
                return t.type === Hi ? Object(Fe.a)(Object(Fe.a)({}, e), {}, {
                    list: t.list,
                    pagination: t.pagination
                }) : e
            }
        })
          , fs = Object(s.combineReducers)({
            language: bs,
            account: rs,
            asset: ds,
            dashboard: us,
            farm: ms,
            swap: js,
            liquidity: vs,
            auction: hs,
            theme: ps,
            oracle: xs
        })
          , Os = function(e, t) {
            return "ACCOUNT_ADDRESS_SET" === t.type && "" === t.value && (e.account = void 0),
            fs(e, t)
        }
          , gs = n(748)
          , Ns = Object(s.createStore)(Os, Object(c.composeWithDevTools)({
            trace: !0
        })(Object(s.applyMiddleware)(gs.a)))
          , ys = Object(Pe.jsx)(i.a, {
            store: Ns,
            children: Object(Pe.jsx)(a.a, {
                children: Object(Pe.jsx)(cs, {})
            })
        });
        ls.a.render(ys, document.getElementById("root")),
        "serviceWorker"in navigator && navigator.serviceWorker.ready.then((function(e) {
            e.unregister().then((function() {
                console.log("Service worker registration success.")
            }
            )).catch((function(e) {
                console.error("Error during service worker registration:", e)
            }
            ))
        }
        ))
    },
    304: function(e, t, n) {},
    305: function(e, t, n) {},
    518: function(e, t) {},
    574: function(e, t, n) {},
    732: function(e, t, n) {},
    767: function(e, t) {},
    769: function(e, t) {},
    802: function(e, t, n) {},
    812: function(e, t) {},
    838: function(e, t) {},
    840: function(e, t) {},
    850: function(e, t) {},
    852: function(e, t) {},
    877: function(e, t) {},
    879: function(e, t) {},
    880: function(e, t) {},
    886: function(e, t) {},
    905: function(e, t) {},
    917: function(e, t) {},
    920: function(e, t) {}
}, [[1621, 1, 2]]]);
