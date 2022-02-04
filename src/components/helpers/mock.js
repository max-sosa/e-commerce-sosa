const items = [
    { id: "1", name: "ECOSPORT", price: "20395", brand: "Ford", image: "https://build.ford.com/dig/Ford/EcoSport/2021/HD-TILE/Image%5B%7CFord%7CEcoSport%7C2021%7C1%7C1.%7C200A.S2G..PN6..88N.89M.~3JN00_ABFAA.PMR.64K.T7F.DR--A.99E.SIR.58P.SYN.447.VS-CE.UCL.%5D/EXT/1/vehicle.png", model: 2021, category: 'SUV & Crossovers', stock: 15},
    { id: "2", name: "ESCAPE", price: "26010", brand: "Ford", image:"https://build.ford.com/dig/Ford/Escape/2022/HD-TILE/Image%5B%7CFord%7CEscape%7C2022%7C1%7C1.%7C200A.U0G..PB3..884.89H.16H.64U.TER.FWD.996.GAS.SRS.584.67C.448.SE.UCL.%5D/EXT/1/vehicle.png", model: 2022, category: 'SUV & Crossovers', stock: 15 },
    { id: "3", name: "EXPLORER", price: "33245", brand: "Ford", image:"https://build.ford.com/dig/Ford/Explorer/2022/HD-TILE/Image%5B%7CFord%7CExplorer%7C2022%7C1%7C1.%7C400A.K7G..PB3..88V.896.~5V700_VS-C9.87B.SRB.123.87P.52T.KEK.64W.TFV.18R.RWD.99C.76P.GAS.61H.BTC.58W.53L.LFL.44T.ST.LMM.%5D/EXT/1/vehicle.png", model: 2022, category: 'SUV & Crossovers', stock: 15 },
    { id: "4", name: "EDGE", price: "35395", brand: "Ford", image:"https://build.ford.com/dig/Ford/Edge/2022/HD-TILE/Image%5B%7CFord%7CEdge%7C2022%7C1%7C1.%7C400A.K4A..PM7..886.89E.~3DM00_BCMAG.61P.HFS.53G.85W.644.TDU.AWD.99P.ST.61B.76L.SSR.58B.SYC.SLR.44F.~VS-DK.LMI.STT.%5D/EXT/1/vehicle.png", model: 2022, category: 'SUV & Crossovers', stock: 15 }
  ];

  export const getMock = new Promise ((resolve)=> {
      setTimeout(()=> {
          resolve(items)
      },3000);
  })

  export const getItems = async () => {
      return items
  };