import { address, UserAgent } from '~/requests/client/config'

export interface WOWScanProps {
  homeRealmId: number
  newRealmId: number
  minHistoricPrice: number
  roi: number
  salePerDay: number
}

export interface WoWOutOfStock {
  historicPrice: number
  itemID: number
  name: string
  price: number
  salesPerDay: number
}

export interface WoWProfitableItems {
  historicPrice: number
  home_price: number
  itemID: number
  name: string
  new_price: number
  profit: number
  roi: number
  salesPerDay: number
}

export interface WoWScanResponse {
  out_of_stock: Array<WoWOutOfStock>
  out_w_sales: Array<WoWOutOfStock>
  profit_w_sales: Array<WoWProfitableItems>
  profitable_items: Array<WoWProfitableItems>
}

const WOWScan: ({
  homeRealmId,
  newRealmId,
  minHistoricPrice,
  roi,
  salePerDay
}: WOWScanProps) => Promise<Response> = async ({
  homeRealmId,
  newRealmId,
  minHistoricPrice,
  roi,
  salePerDay
}) => {
  return fetch(`${address}/api/wow/scan`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'User-Agent': UserAgent
    },
    body: JSON.stringify({
      homeRealmId: homeRealmId,
      newRealmId: newRealmId,
      min_historic_price: minHistoricPrice,
      desired_roi: roi,
      sale_per_day: salePerDay
    })
  })
}

export default WOWScan