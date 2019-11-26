export function escape (source: string, insideCQ = false) {
  const result = String(source)
    .replace(/&/g, '&amp;')
    .replace(/\[/g, '&#91;')
    .replace(/\]/g, '&#93;')
  return insideCQ
    ? result.replace(/,/g, '&#44;').replace(/(\ud83c[\udf00-\udfff])|(\ud83d[\udc00-\ude4f\ude80-\udeff])|[\u2600-\u2B55]/g, ' ')
    : result
}

export function unescape (source: string) {
  return String(source)
    .replace(/&amp;/g, '&')
    .replace(/&#91;/g, '[')
    .replace(/&#93;/g, ']')
}

export function cqCode (type: string, data: Record<string, any>) {
  return `[CQ:${type}${Object.keys(data).map(key => data[key] ? `,${key}=${escape(data[key], true)}` : '')}]`
}
