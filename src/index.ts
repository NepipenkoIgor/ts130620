function sleep(ms: number) {
    return new Promise((res) => {
        setTimeout(res, ms)
    })
}

async function* getItemsReallySlowly<T>(items: Iterable<T>): AsyncIterableIterator<T> {
    for (const item of items) {
        await sleep(1000);
        yield  item;
    }
}


async function speakLikeSloth(items: string[]) {
    for await  (const item of getItemsReallySlowly(items)) {
        console.log(item);
    }
}

speakLikeSloth(['hi', 'all', 'TypeScript', 'is', 'awesome', '!']);
