import './style.css'
export function РекурсияКнопок(ARGS: { name: string, click: any, data?: any }[]) {
    if (ARGS == undefined) return {}
    return {
        html: Array.from(ARGS, (item: { name: string, click: any, data: any }) => {
            return {
                html: [
                    item.name,
                    РекурсияКнопок(item.data)
                ],
                css: 'btn-rec',
                event: {
                    click: item.click
                }
            }
        })
    }
}