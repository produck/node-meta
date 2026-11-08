# @produck/node-meta-iana-charset

IANA Character Sets registry as static metadata for Node.js.

## Install

```bash
npm install @produck/node-meta-iana-charset
```

## Usage

```js
import { RECORD_LIST } from '@produck/node-meta-iana-charset';

const record = RECORD_LIST.find((item) => item.mibEnum === 106);

record.name; // UTF-8
```

## Data shape

```ts
interface Record {
  name: string; // IANA 注册名
  mibEnum: number; // 唯一 MIBenum
  preferredAlias: string | null; // IANA 声明的首选别名
  aliasList: string[]; // 含注册名与首选别名的全部别名
  date: string | null; // 仅 1995 年后新增的记录才有
}

interface Xref {
  type: string; // rfc / person / uri / registry
  data: string;
}
```

每个 `data/<mibEnum>.mjs` 导出三项：默认导出上面的 `Record`，以及两个
具名导出 `description`（注册表里的简述）与 `xrefList`（`Xref[]`）。

本包只导出静态数据表，不提供查询方法；`RECORD_LIST` 按 `mibEnum` 升序。
每条记录单独存放于 `data/<mibEnum>.mjs`（默认导出），`src/index.mjs` 只是
把这些模块聚合起来，`sideEffects: false` 下可被下游充分 tree-shake。

## Update

```bash
npm run sync
```

脚本抓取 `character-sets.xml`，解析后重写 `data/<mibEnum>.mjs` 与
`src/index.mjs`。它有缓存：
已存在的 `tmp/character-sets.xml` 会被复用，删除该文件即重新下载。

## Notes

- 本包只提供**注册表事实**，不判断某媒体类型是否允许 `charset` 参数。
  `application/json` 不应带 `charset`、`application/xml` 可以带，这类约束
  由 RFC 决定，属于消费方的知识。
- 别名覆盖范围以 IANA 注册表为准。WHATWG Encoding Standard 的标签集
  （如 `x-user-defined`）不在其中，两者不可互换。

## License

MIT
