export const requestStaticMap = (w: number, h: number) => {
  const lat = '36.9955289416683'
  const lng = '127.92593896573'
  const center = `${lng},${lat}`
  const markers = `pos:${lng} ${lat}`
  const config = {
    format: 'png',
    w: w + '',
    h: h + '',
    center,
    level: '16',
    scale: '2',
    markers,
    'X-NCP-APIGW-API-KEY-ID': '0d9nbomngk',
  }

  const query = new URLSearchParams(config).toString()
  return (
    'https://naveropenapi.apigw.ntruss.com/map-static/v2/raster-cors?' + query
  )
}
