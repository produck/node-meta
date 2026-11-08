# @produck/node-meta-iana-charset

IANA Character Sets registry as static metadata for Node.js.

## Install

```bash
npm install @produck/node-meta-iana-charset
```

## Usage

```js
import {
  SOURCE,
  findByAlias,
  findByMibEnum,
  findAll,
  isAlias,
} from '@produck/node-meta-iana-charset';

isAlias('utf-8'); // true，大小写不敏感
findByAlias('latin1'); // → ISO_8859-1:1987 记录
findByMibEnum(106); // → UTF-8 记录
findAll(); // 全部记录，按 mibEnum 升序
```

## Data shape

```ts
interface Record {
  name: string; // IANA 注册名
  mibEnum: number; // 唯一 MIBenum
  preferredAlias: string | null; // IANA 声明的首选别名
  aliasList: string[]; // 含注册名与首选别名的全部别名
  description: string; // 注册表里的简述
  xrefList: Xref[]; // IANA 记录的交叉引用
  date: string | null; // 仅 1995 年后新增的记录才有
}

interface Xref {
  type: string; // rfc / person / uri / registry
  data: string;
}
```

所有查询都返回**深拷贝**：修改返回值不会影响内部数据。

## Provenance

`SOURCE` 记录快照的来源：

```js
SOURCE.url; // 抓取地址
SOURCE.updated; // 注册表 Last Updated
SOURCE.digest; // 下载内容的 SHA-256
```

## Update

```bash
npm run sync
```

脚本抓取 `character-sets.xml`，解析后写入 `src/Registry.json`。它有缓存：
已存在的 `tmp/character-sets.xml` 会被复用，删除该文件即重新下载。

差异审查时**只看 `src/Registry.json`**：新增/删除/改名的记录会直接体现。

## Notes

- 本包只提供**注册表事实**，不判断某媒体类型是否允许 `charset` 参数。
  `application/json` 不应带 `charset`、`application/xml` 可以带，这类约束
  由 RFC 决定，属于消费方的知识。
- 别名覆盖范围以 IANA 注册表为准。WHATWG Encoding Standard 的标签集
  （如 `x-user-defined`）不在其中，两者不可互换。
- 数据变化不视为 breaking change，只有 API 变化才升 major。

## License

MIT
