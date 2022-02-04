
const items = [
    { id: "1", name: "ECOSPORT", price: "20395", brand: "Ford", image: "https://build.ford.com/dig/Ford/EcoSport/2021/HD-TILE/Image%5B%7CFord%7CEcoSport%7C2021%7C1%7C1.%7C200A.S2G..PN6..88N.89M.~3JN00_ABFAA.PMR.64K.T7F.DR--A.99E.SIR.58P.SYN.447.VS-CE.UCL.%5D/EXT/1/vehicle.png", model: 2021, category: 'SUV & Crossovers', stock: 15},
    { id: "2", name: "ESCAPE", price: "26010", brand: "Ford", image:"https://build.ford.com/dig/Ford/Escape/2022/HD-TILE/Image%5B%7CFord%7CEscape%7C2022%7C1%7C1.%7C200A.U0G..PB3..884.89H.16H.64U.TER.FWD.996.GAS.SRS.584.67C.448.SE.UCL.%5D/EXT/1/vehicle.png", model: 2022, category: 'SUV & Crossovers', stock: 15 },
    { id: "3", name: "EXPLORER", price: "33245", brand: "Ford", image:"https://build.ford.com/dig/Ford/Explorer/2022/HD-TILE/Image%5B%7CFord%7CExplorer%7C2022%7C1%7C1.%7C400A.K7G..PB3..88V.896.~5V700_VS-C9.87B.SRB.123.87P.52T.KEK.64W.TFV.18R.RWD.99C.76P.GAS.61H.BTC.58W.53L.LFL.44T.ST.LMM.%5D/EXT/1/vehicle.png", model: 2022, category: 'SUV & Crossovers', stock: 15 },
    { id: "4", name: "EDGE", price: "35395", brand: "Ford", image:"https://build.ford.com/dig/Ford/Edge/2022/HD-TILE/Image%5B%7CFord%7CEdge%7C2022%7C1%7C1.%7C400A.K4A..PM7..886.89E.~3DM00_BCMAG.61P.HFS.53G.85W.644.TDU.AWD.99P.ST.61B.76L.SSR.58B.SYC.SLR.44F.~VS-DK.LMI.STT.%5D/EXT/1/vehicle.png", model: 2022, category: 'SUV & Crossovers', stock: 15 },
    { id: "5", name: "MAVERICK", price: "32495", brand: "Ford", image:"https://build.ford.com/dig/Ford/Maverick/2022/HD-FULL/Image%5B%7CFord%7CMaverick%7C2022%7C1%7C1.%7C300A.W8F.121.PM7..887.89B.96G.54L.86B.55D.16B.SCC.52H.90K.53Q.61D.43L.51D.64T.T7R.AWD.999.58K.448.XLT.UCS.%5D/EXT/1/vehicle.png", model: 2022, category: 'Camionetas & Vans', stock: 15 },
    { id: "6", name: "RANGER", price: "42330", brand: "Ford", image:"https://build.ford.com/dig/Ford/Ranger/2022/HD-FULL/Image%5B%7CFord%7CRanger%7C2022%7C1%7C1.%7C500A.R4F..PYZ..88D.89H.17B.94E.574.43D.17C.16E.ADM.PFM.PDP.53R.CAB.55U.649.TFH.AWD.99H.LWS.52B.PAT.55K.~ICDAV.58M.SY3.LAR.44U.LEA.%5D/EXT/1/vehicle.png", model: 2022, category: 'Camionetas & Vans', stock: 15 },
    { id: "7", name: "WAGON", price: "32120", brand: "Ford", image:"https://build.ford.com/dig/Ford/Transit%20Connect%20Wagon/2022/HD-TILE/Image%5B%7CFord%7CTransit%20Connect%20Wagon%7C2022%7C1%7C1.%7C310A.E9G..HE..88L.21B.TIT.96F.87K.576.924.55A.43D.18G.68M.544.90H.67L.525.85D.76R.51C.51G.96B.52D.943.425.58Y.FWD.992.LEA.LHB.T55.RET.448.WGN.89K.64G.2022%20E9G%20FORD.%5D/EXT/1/vehicle.png", model: 2022, category: 'Camionetas & Vans', stock: 15 },
    { id: "8", name: "F-150 RAPTOR", price: "65375", brand: "Ford", image:"https://build.ford.com/dig/Ford/F-150%20F-150/2022/HD-TILE/Image%5B%7CFord%7CF-150%20F-150%7C2022%7C1%7C1.%7C800A.W1R.145.PCN.LSC.887.89B.A5GAA.66D.SS5.924.435.57Q.168.RCA.BLDAC.55D.SPP.61P.53B.55B.CCAB.CLFGP.CLMHN.64B.T7R.59R.AWD.998.655.43A.91B.76R.F150.471.SRS.582.524.59S.85P.77R.44G.XL4.85A.LEA.%5D/EXT/1/vehicle.png", model: 2022, category: 'Camionetas & Vans', stock: 15 }
  ];

  export const getMock = new Promise ((resolve)=> {
      setTimeout(()=> {
          resolve(items)
      },3000);
  })

  export const getItems = async () => {
      return items
  };