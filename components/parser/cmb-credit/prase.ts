import { CMBCreditRawTxn } from "./model"

export function parseCMBCreditRawTxn(text: string): CMBCreditRawTxn[] {
    const result = [] as CMBCreditRawTxn[]

    const lines = [] as string[]

    for (const [_, line] of text.split('\n').entries()) {
        const item = line.trim()
        // drop the empty line
        if (item.trim() === "") {
            continue
        }

        // drop the the title line
        if (item.includes("交易日") && item.includes("记账日")) {
            continue
        }

        if (item.includes("SOLD") && item.includes("POSTED") && item.includes("RMB AMOUNT")) {
            continue
        }

        if (item.includes("人民币账户") && item.includes("RMB")) {
            continue
        }

        if (item.trim() === "费用" || item.trim() === ("消费")) {
            continue
        }


        // drop the repayment line
        if (item.includes("自动还款") || item.includes("还款")) {
            continue
        }

        // drop the 
        lines.push(item)
    }

    for (const [_, line] of lines.entries()) {
        result.push(praseOneLineCMBCreditCardTxn(line))
    }

    return result
}

export function praseOneLineCMBCreditCardTxn(text: string): CMBCreditRawTxn {
    const raw = text.trim()
    // separate the text with space
    const items = raw.split(/\s+/)
    // first element is sold date
    const soldDate = items[0]
    // second element is posted date
    const postedDate = items[1]
    // the last element is the original amount
    const originalAmount = items[items.length - 1]
    // the second last element is the card number
    const cardNo = items[items.length - 2]
    // the third last element is the RMB amount
    const rmbAmount = items[items.length - 3]
    // the rest is the description
    const description = items.slice(2, items.length - 3).join(" ")

    // compose the result
    return {
        cardNo,
        description,
        originalAmount,
        postedDate,
        rmbAmount,
        soldDate,
        raw
    }
}
