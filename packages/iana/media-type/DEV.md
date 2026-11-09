# IANA Media Types 数据包 — 开发笔记

本文件记录 `iana/media-type` 包在设计阶段的调研结论与待决策项。
不是最终文档，随进展更新。

## 数据来源

- 注册表：<https://www.iana.org/assignments/media-types/media-types.xml>
- 文档结构定义（RELAX NG）：
  <https://www.iana.org/assignments/media-types/media-types.rng>
- 抓取时的 `updated`（2026-11-09 实测）：`2026-11-05`
- 原始文档约 618 KB，转成 JSON 后约 919 KB

## 顶层结构

根元素 `<registry id="media-types">`，关键子元素：

| 元素                | 内容                                 |
| ------------------- | ------------------------------------ |
| `title`             | `Media Types`                        |
| `category`          | MIME 与 Media Types 分类             |
| `updated`           | 注册表最后更新日期                   |
| `registration_rule` | 注册规则说明                         |
| `expert`            | 专家评审人名单                       |
| `xref`              | 相关 RFC（rfc6838、rfc4855 等）      |
| `note`              | 说明段落                             |
| `registry`          | 11 个子注册表，每个对应一个顶层 type |
| `people`            | 人员表                               |

## 子注册表（顶层 type）与记录数

实测共 **2383 条**记录：

| `@_id`        | 记录数 |
| ------------- | ------ |
| `application` | 1823   |
| `audio`       | 166    |
| `text`        | 110    |
| `video`       | 97     |
| `image`       | 89     |
| `model`       | 45     |
| `message`     | 27     |
| `multipart`   | 17     |
| `font`        | 6      |
| `haptics`     | 3      |
| `example`     | 0      |

## 单条记录结构

```json
{
  "name": "3gpdash-qoe-report+xml",
  "xref": [
    { "@_type": "person", "@_data": "_3GPP" },
    { "@_type": "person", "@_data": "Ozgur_Oyman" }
  ],
  "file": {
    "#text": "application/3gpdash-qoe-report+xml",
    "@_type": "template"
  },
  "@_date": "2014-04-16"
}
```

字段出现频率（2383 条）：

| 字段        | 出现次数 | 说明                         |
| ----------- | -------- | ---------------------------- |
| `name`      | 2383     | subtype，不含斜杠            |
| `xref`      | 2383     | 单值或数组                   |
| `file`      | 2383     | 对象，`#text` 是完整 MIME 串 |
| `@_date`    | 946      | 注册日期                     |
| `@_updated` | 204      | 更新日期                     |

`xref` 类型分布：`person` 2032、`rfc` 693、`draft` 23、`uri` 21、
`note` 7、`rfc-errata` 3、`text` 1。`person` 是注册者，不是规范定义者。

## 与 charset 包的关键差异

1. **没有稳定数字主键**。charset 有 IANA 维护的 `mibEnum`；media type
   没有等价物，唯一标识是 `type + subtype` 两段字符串。
2. **命名空间形式的名字不可用**。
   - charset 的文件名与导出名可以用 `mib106`，天然是合法标识符。
   - media type 的 `application/json` 既不能直接作文件名（含 `/`），
     也不能直接作导入标识符（含 `/`、`+`）。
3. **记录字段稀疏**。`@_date` 只有 39% 有值，`@_updated` 只有 8.6%。
4. **`file.@_type` 目前只见 `template`**，需全量核对确认是否还有其他值。

## 待决策项

### 1. 文件名规则

已确认方向：`<type>` 作一级目录、`<subtype>` 作文件名。

```text
src/data/record/application/json.mjs
src/data/record/application/ld+json.mjs
src/data/record/text/html.mjs
```

依据：

- `type` 只有 11 个取值，都是 `[a-z]+`，作目录名安全
- `subtype` 实测字符集为 `a-z` `0-9` `-` `+` `.`，全部在
  Windows / POSIX 文件名合法字符内
- 保留 `+` 可保留 RFC 6839 结构化语法后缀语义（`+json`、`+xml`）
- 不做散列：32 位散列在 2383 条下的碰撞期望约 0.07%，一旦碰撞就要额外
  处理；64 位散列虽可忽略碰撞但完全丧失可读性

待核验：

- `type/subtype` 组合是否全局唯一
- `subtype` 是否存在大小写差异导致的潜在重名（当前数据全部小写）

### 2. 是否提供命名空间聚合入口

倾向：**不提供**。

charset 包提供 `export * as mibN`，因为 `mibEnum` 数字天然是合法标识符。
media type 若要聚合，必须把 `/`、`+`、`.` 映射成 `_` 之类，
这会引入人为规则与潜在重名（如 `a.b` 与 `a_b`），
而收益仅是「少写一行 import」。

### 3. 子路径导出形式

倾向：`"./application/json"` 这样的导出入库，只暴露精确路径。

待定：

- `exports` 条目数量为 2383，`package.json` 会显著变大，
  需确认是否可接受，或改用 `"./*"` 通配导出
- 类型声明是否共享一份（charset 已采用共享 `record.d.mts` 的方案）

## 已知风险

- IANA 会在空档新增注册，`exports` 需要随数据同步重新生成
- 部分 subtype 含 `+`，某些 shell / 工具有转义要求，但在 ESM 导入
  路径字符串里无需转义
- `example` 子注册表为空，生成的目录可能为空目录

## 参考

- RFC 6838：Media Type 注册规程
- RFC 2046：MIME 媒体类型总体框架
- RFC 4289：MIME 参数注册规程
- RFC 6657：`Content-Type` 头部处理
- RFC 4855：RTP 载荷格式的 media type 注册
- RFC 6839：结构化语法后缀（`+json`、`+xml` 等）
