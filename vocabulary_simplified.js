// 考研单词词汇数据
const vocabulary = [
  {
    "word": "abandon",
    "meaning": "v 放弃"
  },
  {
    "word": "ability",
    "meaning": "n 能力;才能"
  },
  {
    "word": "able",
    "meaning": "adj 能够;有能力的"
  },
  {
    "word": "abnormal",
    "meaning": "adj 反常的，异常的"
  },
  {
    "word": "abolish",
    "meaning": "v 废除，取消"
  },
  {
    "word": "abound",
    "meaning": "v 大量存在;充满"
  },
  {
    "word": "about",
    "meaning": "adv 大约;四处;到处"
  },
  {
    "word": "above",
    "meaning": "prep 在…上面"
  },
  {
    "word": "abroad",
    "meaning": "adv 到国外;在国外"
  },
  {
    "word": "abrupt",
    "meaning": "adj 突然的，意外的"
  },
  {
    "word": "absence",
    "meaning": "n 缺席，不存在"
  },
  {
    "word": "absolute",
    "meaning": "adj 绝对的，完全的"
  },
  {
    "word": "absolutely",
    "meaning": "adv 完全地，绝对地"
  },
  {
    "word": "absorb",
    "meaning": "v 吸收;使全神贯注"
  },
  {
    "word": "abstract",
    "meaning": "adj 抽象的 n.摘要"
  },
  {
    "word": "absurd",
    "meaning": "adj 荒谬的，荒唐的"
  },
  {
    "word": "abundance",
    "meaning": "n 大量，丰富，充足"
  },
  {
    "word": "abundant",
    "meaning": "adj 大量的，丰富的"
  },
  {
    "word": "abuse",
    "meaning": "v /n.滥用;虐待"
  },
  {
    "word": "academic",
    "meaning": "adj 学院的;学术的"
  },
  {
    "word": "academy",
    "meaning": "n 学院，研究院"
  },
  {
    "word": "accelerate",
    "meaning": "v 加速，促进"
  },
  {
    "word": "accent",
    "meaning": "n 口音，音调"
  },
  {
    "word": "accept",
    "meaning": "v 接受，认可"
  },
  {
    "word": "acceptable",
    "meaning": "adj 可接受的"
  },
  {
    "word": "acceptance",
    "meaning": "n 接受，承认"
  },
  {
    "word": "access",
    "meaning": "n 接近;通道;入口"
  },
  {
    "word": "accessible",
    "meaning": "adj 易接近的，可进入的"
  },
  {
    "word": "accessory",
    "meaning": "n 附件，配件"
  },
  {
    "word": "accident",
    "meaning": "n 事故，意外"
  },
  {
    "word": "accommodate",
    "meaning": "v 容纳;提供住宿"
  },
  {
    "word": "accommodation",
    "meaning": "n 住处，膳宿"
  },
  {
    "word": "accompany",
    "meaning": "v 陪伴，伴随"
  },
  {
    "word": "accomplish",
    "meaning": "v 完成，实现"
  },
  {
    "word": "accomplishment",
    "meaning": "n 成就，成绩"
  },
  {
    "word": "accord",
    "meaning": "v 使一致;给予 n.一致;协议"
  },
  {
    "word": "accordance",
    "meaning": "n 一致，和谐"
  },
  {
    "word": "accordingly",
    "meaning": "adv 因此，所以"
  },
  {
    "word": "account",
    "meaning": "n 账目;叙述"
  },
  {
    "word": "accountant",
    "meaning": "n 会计"
  },
  {
    "word": "accumulate",
    "meaning": "v 积累，积聚"
  },
  {
    "word": "accuracy",
    "meaning": "n 精确，准确性"
  },
  {
    "word": "accurate",
    "meaning": "adj 精确的，准确的"
  },
  {
    "word": "accuse",
    "meaning": "v 指控，指责"
  },
  {
    "word": "accustomed",
    "meaning": "adj 习惯的，惯常的"
  },
  {
    "word": "ache",
    "meaning": "v /n.疼痛"
  },
  {
    "word": "achieve",
    "meaning": "v 达到，实现"
  },
  {
    "word": "achievement",
    "meaning": "n 成就，成绩"
  },
  {
    "word": "acid",
    "meaning": "n 酸"
  },
  {
    "word": "acknowledge",
    "meaning": "v 承认;告知收到"
  },
  {
    "word": "acquaint",
    "meaning": "v 使熟悉"
  },
  {
    "word": "acquaintance",
    "meaning": "n 认识，了解"
  },
  {
    "word": "acquire",
    "meaning": "v 获得，取得"
  },
  {
    "word": "acquisition",
    "meaning": "n 获得，取得"
  },
  {
    "word": "acre",
    "meaning": "n 英亩"
  },
  {
    "word": "across",
    "meaning": "prep 横过，穿过"
  },
  {
    "word": "act",
    "meaning": "v 行动;扮演 n.法令，条例"
  },
  {
    "word": "action",
    "meaning": "n 行动，动作"
  },
  {
    "word": "active",
    "meaning": "adj 积极的，主动的"
  },
  {
    "word": "activity",
    "meaning": "n 活动"
  },
  {
    "word": "actor",
    "meaning": "n 男演员"
  },
  {
    "word": "actress",
    "meaning": "n 女演员"
  },
  {
    "word": "actual",
    "meaning": "adj 实际的，现实的"
  },
  {
    "word": "actually",
    "meaning": "adv 实际上，事实上"
  },
  {
    "word": "acute",
    "meaning": "adj 敏锐的，剧烈的"
  },
  {
    "word": "adapt",
    "meaning": "v 使适应;改编"
  },
  {
    "word": "adaptation",
    "meaning": "n 适应，改编"
  },
  {
    "word": "add",
    "meaning": "v 加，增加"
  },
  {
    "word": "addition",
    "meaning": "n 加，加法"
  },
  {
    "word": "additional",
    "meaning": "adj 附加的，另外的"
  },
  {
    "word": "address",
    "meaning": "n 地址;演说"
  },
  {
    "word": "adequate",
    "meaning": "adj 足够的，适当的"
  },
  {
    "word": "adjust",
    "meaning": "v 调整，调节"
  },
  {
    "word": "adjustment",
    "meaning": "n 调整，调节"
  },
  {
    "word": "administer",
    "meaning": "v 管理，治理"
  },
  {
    "word": "administration",
    "meaning": "n 管理，行政"
  },
  {
    "word": "admirable",
    "meaning": "adj 令人钦佩的"
  },
  {
    "word": "admire",
    "meaning": "v 钦佩，羡慕"
  },
  {
    "word": "admission",
    "meaning": "n 准入，接纳"
  },
  {
    "word": "admit",
    "meaning": "v 承认，准许"
  },
  {
    "word": "adolescent",
    "meaning": "n 青少年 adj.青春期的"
  },
  {
    "word": "adopt",
    "meaning": "v 采用，采纳"
  },
  {
    "word": "adoption",
    "meaning": "n 采用，采纳"
  },
  {
    "word": "adult",
    "meaning": "n 成年人 adj.成年的"
  },
  {
    "word": "advance",
    "meaning": "v /n.前进;提高"
  },
  {
    "word": "advanced",
    "meaning": "adj 高级的;先进的"
  },
  {
    "word": "advantage",
    "meaning": "n 优点，优势"
  },
  {
    "word": "adventure",
    "meaning": "n 冒险;奇遇"
  },
  {
    "word": "adverb",
    "meaning": "n 副词"
  },
  {
    "word": "advertisement",
    "meaning": "n 广告"
  },
  {
    "word": "advice",
    "meaning": "n 建议，忠告"
  },
  {
    "word": "advisable",
    "meaning": "adj 明智的，可取的"
  },
  {
    "word": "advise",
    "meaning": "v 建议，劝告"
  },
  {
    "word": "aeroplane",
    "meaning": "n 飞机"
  },
  {
    "word": "affair",
    "meaning": "n 事情，事件;事务"
  },
  {
    "word": "affect",
    "meaning": "v 影响;感动"
  },
  {
    "word": "affection",
    "meaning": "n 喜爱，感情"
  },
  {
    "word": "afford",
    "meaning": "v 负担得起"
  },
  {
    "word": "afraid",
    "meaning": "adj 害怕的;担心的"
  },
  {
    "word": "after",
    "meaning": "prep 在...之后 adv.之后"
  },
  {
    "word": "afternoon",
    "meaning": "n 下午"
  },
  {
    "word": "afterward",
    "meaning": "adv 之后，后来"
  },
  {
    "word": "again",
    "meaning": "adv 再次，又"
  },
  {
    "word": "against",
    "meaning": "prep 反对;靠着"
  },
  {
    "word": "age",
    "meaning": "n 年龄;时代"
  },
  {
    "word": "agency",
    "meaning": "n 代理机构;代理处"
  },
  {
    "word": "agent",
    "meaning": "n 代理人;经纪人"
  },
  {
    "word": "ago",
    "meaning": "adv 以前"
  },
  {
    "word": "agree",
    "meaning": "v 同意;一致"
  },
  {
    "word": "agreement",
    "meaning": "n 同意;协定"
  },
  {
    "word": "agriculture",
    "meaning": "n 农业;农艺"
  },
  {
    "word": "ahead",
    "meaning": "adv 在前面"
  },
  {
    "word": "aid",
    "meaning": "n 帮助;援助 v.帮助"
  },
  {
    "word": "aim",
    "meaning": "n 目的;目标 v.瞄准"
  },
  {
    "word": "air",
    "meaning": "n 空气;气氛 v.通风"
  },
  {
    "word": "aircraft",
    "meaning": "n 飞机，飞行器"
  },
  {
    "word": "airline",
    "meaning": "n 航空公司"
  },
  {
    "word": "airport",
    "meaning": "n 机场"
  },
  {
    "word": "alarm",
    "meaning": "n 警报;闹钟 v.使惊恐"
  },
  {
    "word": "album",
    "meaning": "n 集邮本;相册"
  },
  {
    "word": "alcohol",
    "meaning": "n 酒精，含酒精的饮料"
  },
  {
    "word": "alive",
    "meaning": "adj 活着的;活跃的"
  },
  {
    "word": "all",
    "meaning": "adj 全部的 adv.全部地"
  },
  {
    "word": "allow",
    "meaning": "v 允许;给予"
  },
  {
    "word": "allowance",
    "meaning": "n 津贴，补助"
  },
  {
    "word": "almost",
    "meaning": "adv 几乎，差不多"
  },
  {
    "word": "alone",
    "meaning": "adj 单独的 adv.独自地"
  },
  {
    "word": "along",
    "meaning": "adv 沿着 prep.一起"
  },
  {
    "word": "alongside",
    "meaning": "adv /prep.沿着，并肩"
  },
  {
    "word": "already",
    "meaning": "adv 已经"
  },
  {
    "word": "also",
    "meaning": "adv 也，同样"
  },
  {
    "word": "alternative",
    "meaning": "n 可供选择的事物"
  },
  {
    "word": "although",
    "meaning": "conj 尽管，虽然"
  },
  {
    "word": "altitude",
    "meaning": "n 高度;海拔"
  },
  {
    "word": "altogether",
    "meaning": "adv 完全地"
  },
  {
    "word": "aluminum",
    "meaning": "n 铝"
  },
  {
    "word": "always",
    "meaning": "adv 总是，一直"
  },
  {
    "word": "ambassador",
    "meaning": "n 大使"
  },
  {
    "word": "ambiguous",
    "meaning": "adj 模糊不清的"
  },
  {
    "word": "ambition",
    "meaning": "n 雄心，抱负"
  },
  {
    "word": "ambulance",
    "meaning": "n 救护车"
  },
  {
    "word": "among",
    "meaning": "prep 在...之中"
  },
  {
    "word": "amount",
    "meaning": "n 数量;总额"
  },
  {
    "word": "ample",
    "meaning": "adj 足够的，宽敞的"
  },
  {
    "word": "amuse",
    "meaning": "v 娱乐;使发笑"
  },
  {
    "word": "amusement",
    "meaning": "n 娱乐"
  },
  {
    "word": "ancient",
    "meaning": "adj 古代的，古老的"
  },
  {
    "word": "and",
    "meaning": "conj 和，又"
  },
  {
    "word": "angle",
    "meaning": "n 角度;观点"
  },
  {
    "word": "anger",
    "meaning": "n 愤怒"
  },
  {
    "word": "angle",
    "meaning": "n 角度"
  },
  {
    "word": "angry",
    "meaning": "adj 生气的，愤怒的"
  },
  {
    "word": "animal",
    "meaning": "n 动物"
  },
  {
    "word": "ankle",
    "meaning": "n 踝，踝关节"
  },
  {
    "word": "announce",
    "meaning": "v 宣布，宣告"
  },
  {
    "word": "announcement",
    "meaning": "n 通告，布告"
  },
  {
    "word": "annoy",
    "meaning": "v 使烦恼;打搅"
  },
  {
    "word": "annual",
    "meaning": "adj 每年的 n.年刊"
  },
  {
    "word": "another",
    "meaning": "adj 另一个的"
  },
  {
    "word": "answer",
    "meaning": "n 回答;答案 v.回答"
  },
  {
    "word": "anticipate",
    "meaning": "v 预期，期待"
  },
  {
    "word": "anxiety",
    "meaning": "n 焦虑;渴望"
  },
  {
    "word": "anxious",
    "meaning": "adj 焦虑的;渴望的"
  },
  {
    "word": "any",
    "meaning": "adj 任何的 pron.任何"
  },
  {
    "word": "anybody",
    "meaning": "pron 任何人"
  },
  {
    "word": "anyhow",
    "meaning": "adv 无论如何"
  },
  {
    "word": "anyone",
    "meaning": "pron 任何人"
  },
  {
    "word": "anything",
    "meaning": "pron 任何事"
  },
  {
    "word": "anyway",
    "meaning": "adv 无论如何"
  },
  {
    "word": "anywhere",
    "meaning": "adv 任何地方"
  },
  {
    "word": "apart",
    "meaning": "adv 分离，分开"
  },
  {
    "word": "apartment",
    "meaning": "n 一套公寓房间"
  },
  {
    "word": "apologize",
    "meaning": "v 道歉"
  },
  {
    "word": "apology",
    "meaning": "n 道歉"
  },
  {
    "word": "apparatus",
    "meaning": "n 器械，仪器;器官"
  },
  {
    "word": "apparent",
    "meaning": "adj 显然的，表面上的"
  },
  {
    "word": "appeal",
    "meaning": "v /n.呼吁;吸引"
  },
  {
    "word": "appear",
    "meaning": "v 出现;似乎"
  },
  {
    "word": "appearance",
    "meaning": "n 出现;外貌"
  },
  {
    "word": "appendix",
    "meaning": "n 附录;阑尾"
  },
  {
    "word": "appetite",
    "meaning": "n 食欲;欲望"
  },
  {
    "word": "applaud",
    "meaning": "v 鼓掌"
  },
  {
    "word": "applause",
    "meaning": "n 鼓掌，喝彩"
  },
  {
    "word": "apply",
    "meaning": "v 申请;应用"
  },
  {
    "word": "appoint",
    "meaning": "v 任命;约定"
  },
  {
    "word": "appointment",
    "meaning": "n 任命;约定"
  },
  {
    "word": "appreciate",
    "meaning": "v 欣赏;感激"
  },
  {
    "word": "appreciation",
    "meaning": "n 欣赏;感激"
  },
  {
    "word": "approach",
    "meaning": "v 接近 n.途径"
  },
  {
    "word": "appropriate",
    "meaning": "adj 适当的;合适的"
  },
  {
    "word": "approval",
    "meaning": "n 赞成;批准"
  },
  {
    "word": "approve",
    "meaning": "v 赞成;批准"
  },
  {
    "word": "approximately",
    "meaning": "adv 大约，近似"
  },
  {
    "word": "arbitrary",
    "meaning": "adj 任意的;武断的"
  },
  {
    "word": "architecture",
    "meaning": "n 建筑学;建筑式样"
  },
  {
    "word": "area",
    "meaning": "n 面积;地区"
  },
  {
    "word": "argue",
    "meaning": "v 争论，争辩"
  },
  {
    "word": "argument",
    "meaning": "n 争论，辩论"
  },
  {
    "word": "arise",
    "meaning": "v 出现;由...引起"
  },
  {
    "word": "arithmetic",
    "meaning": "n 算术"
  },
  {
    "word": "arm",
    "meaning": "n 手臂;武器 v.武装"
  },
  {
    "word": "armed",
    "meaning": "adj 武装的"
  },
  {
    "word": "army",
    "meaning": "n 军队"
  },
  {
    "word": "around",
    "meaning": "adv 在周围;大约"
  },
  {
    "word": "arouse",
    "meaning": "v 唤醒;激起"
  },
  {
    "word": "arrange",
    "meaning": "v 安排;排列"
  },
  {
    "word": "arrangement",
    "meaning": "n 安排;排列"
  },
  {
    "word": "array",
    "meaning": "n 大批;排列"
  },
  {
    "word": "arrest",
    "meaning": "v 逮捕;阻止"
  },
  {
    "word": "arrival",
    "meaning": "n 到达;到来"
  },
  {
    "word": "arrive",
    "meaning": "v 到达;达到"
  },
  {
    "word": "arrow",
    "meaning": "n 箭;箭头"
  },
  {
    "word": "art",
    "meaning": "n 艺术;美术"
  },
  {
    "word": "article",
    "meaning": "n 文章;物品"
  },
  {
    "word": "artificial",
    "meaning": "adj 人造的;假的"
  },
  {
    "word": "artist",
    "meaning": "n 艺术家;画家"
  },
  {
    "word": "artistic",
    "meaning": "adj 艺术的;艺术家的"
  },
  {
    "word": "as",
    "meaning": "adv 像...一样 prep.作为"
  },
  {
    "word": "ascertain",
    "meaning": "v 确定;查明"
  },
  {
    "word": "ashamed",
    "meaning": "adj 羞愧的;惭愧的"
  },
  {
    "word": "ashore",
    "meaning": "adv 上岸;到岸"
  },
  {
    "word": "aside",
    "meaning": "adv 在旁边;此外"
  },
  {
    "word": "ask",
    "meaning": "v 问;要求"
  },
  {
    "word": "asleep",
    "meaning": "adj 睡着的"
  },
  {
    "word": "aspect",
    "meaning": "n 方面;面貌"
  },
  {
    "word": "assemble",
    "meaning": "v 集合;装配"
  },
  {
    "word": "assembly",
    "meaning": "n 集合;装配"
  },
  {
    "word": "assess",
    "meaning": "v 对...进行评估"
  },
  {
    "word": "assessment",
    "meaning": "n 评估;评价"
  },
  {
    "word": "assign",
    "meaning": "v 分配;指派"
  },
  {
    "word": "assignment",
    "meaning": "n 分配;任务"
  },
  {
    "word": "assist",
    "meaning": "v 帮助;协助"
  },
  {
    "word": "assistance",
    "meaning": "n 帮助;援助"
  },
  {
    "word": "assistant",
    "meaning": "n 助手;助教"
  },
  {
    "word": "associate",
    "meaning": "v 联想;联合"
  },
  {
    "word": "association",
    "meaning": "n 协会;联合"
  },
  {
    "word": "assume",
    "meaning": "v 假定;承担"
  },
  {
    "word": "assumption",
    "meaning": "n 假定;承担"
  },
  {
    "word": "assure",
    "meaning": "v 保证;使确信"
  },
  {
    "word": "astonish",
    "meaning": "v 使惊讶;使吃惊"
  },
  {
    "word": "astronomy",
    "meaning": "n 天文学"
  },
  {
    "word": "athlete",
    "meaning": "n 运动员"
  },
  {
    "word": "athletic",
    "meaning": "adj 运动的;竞技的"
  },
  {
    "word": "atom",
    "meaning": "n 原子"
  },
  {
    "word": "atomic",
    "meaning": "adj 原子的"
  },
  {
    "word": "attach",
    "meaning": "v 附加;依恋"
  },
  {
    "word": "attachment",
    "meaning": "n 附加;依恋"
  },
  {
    "word": "attack",
    "meaning": "v /n.攻击;抨击"
  },
  {
    "word": "attempt",
    "meaning": "v 尝试 n.企图"
  },
  {
    "word": "attend",
    "meaning": "v 出席;照顾"
  },
  {
    "word": "attendance",
    "meaning": "n 出席;参加"
  },
  {
    "word": "attention",
    "meaning": "n 注意;关心"
  },
  {
    "word": "attitude",
    "meaning": "n 态度;看法"
  },
  {
    "word": "attorney",
    "meaning": "n 律师"
  },
  {
    "word": "attract",
    "meaning": "v 吸引;引起"
  },
  {
    "word": "attraction",
    "meaning": "n 吸引;吸引力"
  },
  {
    "word": "attractive",
    "meaning": "adj 吸引人的"
  },
  {
    "word": "audience",
    "meaning": "n 观众;听众"
  },
  {
    "word": "author",
    "meaning": "n 作者;作家"
  },
  {
    "word": "authority",
    "meaning": "n 权威;官方"
  },
  {
    "word": "auto",
    "meaning": "n 汽车"
  },
  {
    "word": "autumn",
    "meaning": "n 秋天，秋季"
  },
  {
    "word": "available",
    "meaning": "adj 可用的;有空的"
  },
  {
    "word": "avenue",
    "meaning": "n 林荫道;途径"
  },
  {
    "word": "average",
    "meaning": "n 平均数 adj.平均的"
  },
  {
    "word": "avoid",
    "meaning": "v 避免;避开"
  },
  {
    "word": "await",
    "meaning": "v 等候;期待"
  },
  {
    "word": "awake",
    "meaning": "adj 醒着的 v.唤醒"
  },
  {
    "word": "award",
    "meaning": "n 奖 v.授予"
  },
  {
    "word": "aware",
    "meaning": "adj 意识到的;知道的"
  },
  {
    "word": "away",
    "meaning": "adv 离开;远离"
  },
  {
    "word": "awful",
    "meaning": "adj 可怕的;糟糕的"
  },
  {
    "word": "awkward",
    "meaning": "adj 尴尬的;笨拙的"
  },
  {
    "word": "axe",
    "meaning": "n 斧子"
  },
  {
    "word": "axis",
    "meaning": "n 轴;轴线"
  },
  {
    "word": "bachelor",
    "meaning": "n 单身汉;学士"
  },
  {
    "word": "back",
    "meaning": "adv 回原处;向后 n.背"
  },
  {
    "word": "background",
    "meaning": "n 背景;出身"
  },
  {
    "word": "backward",
    "meaning": "adv 向后地 adj.发展迟缓的"
  },
  {
    "word": "bacon",
    "meaning": "n 咸肉;腊肉"
  },
  {
    "word": "bacterium",
    "meaning": "n 细菌"
  },
  {
    "word": "bad",
    "meaning": "adj 坏的;低劣的"
  },
  {
    "word": "badly",
    "meaning": "adv 非常;坏"
  },
  {
    "word": "badminton",
    "meaning": "n 羽毛球"
  },
  {
    "word": "bag",
    "meaning": "n 袋;包"
  },
  {
    "word": "baggage",
    "meaning": "n 行李"
  },
  {
    "word": "bake",
    "meaning": "v 烤，烘;烧硬"
  },
  {
    "word": "balance",
    "meaning": "n 天平;平衡 v.权衡"
  },
  {
    "word": "balcony",
    "meaning": "n 阳台;包厢"
  },
  {
    "word": "ball",
    "meaning": "n 球;舞会"
  },
  {
    "word": "balloon",
    "meaning": "n 气球;飞船"
  },
  {
    "word": "ballot",
    "meaning": "n 投票;抽签 v.投票"
  },
  {
    "word": "bamboo",
    "meaning": "n 竹"
  },
  {
    "word": "ban",
    "meaning": "n 禁令 v.禁止;取缔"
  },
  {
    "word": "banana",
    "meaning": "n 香蕉"
  },
  {
    "word": "band",
    "meaning": "n 乐队;带;帮"
  },
  {
    "word": "bandage",
    "meaning": "n 绷带 v.用绷带包扎"
  },
  {
    "word": "bang",
    "meaning": "n 巨响;猛击"
  },
  {
    "word": "bank",
    "meaning": "n 银行;岸"
  },
  {
    "word": "banner",
    "meaning": "n 旗帜;横幅"
  },
  {
    "word": "bar",
    "meaning": "n 条;酒吧;条形"
  },
  {
    "word": "barbecue",
    "meaning": "n 烤肉;烤肉架"
  },
  {
    "word": "barber",
    "meaning": "n 理发师"
  },
  {
    "word": "bare",
    "meaning": "adj 赤裸的;无遮蔽的"
  },
  {
    "word": "bargain",
    "meaning": "n 便宜货 v.讨价还价"
  },
  {
    "word": "bark",
    "meaning": "n 树皮;狗叫 v.叫"
  },
  {
    "word": "barn",
    "meaning": "n 谷仓;畜棚"
  },
  {
    "word": "barrel",
    "meaning": "n 桶;枪管"
  },
  {
    "word": "barren",
    "meaning": "adj 贫瘠的;不育的"
  },
  {
    "word": "barrier",
    "meaning": "n 障碍;屏障"
  },
  {
    "word": "base",
    "meaning": "n 基础;基地 v.基于"
  },
  {
    "word": "baseball",
    "meaning": "n 棒球"
  },
  {
    "word": "basement",
    "meaning": "n 地下室;地窖"
  },
  {
    "word": "basic",
    "meaning": "adj 基本的;基础的"
  },
  {
    "word": "basically",
    "meaning": "adv 基本上"
  },
  {
    "word": "basin",
    "meaning": "n 盆;流域"
  },
  {
    "word": "basis",
    "meaning": "n 基础;根据"
  },
  {
    "word": "basket",
    "meaning": "n 篮子"
  },
  {
    "word": "basketball",
    "meaning": "n 篮球"
  },
  {
    "word": "bat",
    "meaning": "n 球拍;短棍;蝙蝠"
  },
  {
    "word": "bath",
    "meaning": "n 洗澡;浴室"
  },
  {
    "word": "bathe",
    "meaning": "v 洗澡;弄湿"
  },
  {
    "word": "bathroom",
    "meaning": "n 浴室;盥洗室"
  },
  {
    "word": "battery",
    "meaning": "n 电池;排炮"
  },
  {
    "word": "battle",
    "meaning": "n 战斗;战役 v.战斗"
  },
  {
    "word": "bay",
    "meaning": "n 海湾;狗吠声"
  },
  {
    "word": "be",
    "meaning": "v 是;成为"
  },
  {
    "word": "beach",
    "meaning": "n 海滩;沙滩"
  },
  {
    "word": "beam",
    "meaning": "n 梁;笑容 v.发光"
  },
  {
    "word": "bean",
    "meaning": "n 豆;豆科植物"
  },
  {
    "word": "bear",
    "meaning": "n 熊 v.忍受;支撑"
  },
  {
    "word": "beard",
    "meaning": "n 胡须"
  },
  {
    "word": "bearing",
    "meaning": "n 支承;忍受"
  },
  {
    "word": "beat",
    "meaning": "v 打;打败 n.节拍"
  },
  {
    "word": "beautiful",
    "meaning": "adj 美丽的;出色的"
  },
  {
    "word": "beauty",
    "meaning": "n 美;美人"
  },
  {
    "word": "because",
    "meaning": "conj 因为"
  },
  {
    "word": "become",
    "meaning": "v 变成;适合"
  },
  {
    "word": "bed",
    "meaning": "n 床;圃"
  },
  {
    "word": "bee",
    "meaning": "n 蜜蜂"
  },
  {
    "word": "beef",
    "meaning": "n 牛肉"
  },
  {
    "word": "beer",
    "meaning": "n 啤酒"
  },
  {
    "word": "before",
    "meaning": "prep 在...之前 adv.以前"
  },
  {
    "word": "beg",
    "meaning": "v 乞求;恳求"
  },
  {
    "word": "begin",
    "meaning": "v 开始"
  },
  {
    "word": "beginning",
    "meaning": "n 开始;开端"
  },
  {
    "word": "behalf",
    "meaning": "n 代表某人"
  },
  {
    "word": "behave",
    "meaning": "v 表现;（使）守规矩"
  },
  {
    "word": "behavior",
    "meaning": "n 行为;举止"
  },
  {
    "word": "behind",
    "meaning": "prep 在...后面 adv.在后面"
  },
  {
    "word": "being",
    "meaning": "n 存在;生物"
  },
  {
    "word": "belief",
    "meaning": "n 信任;信念"
  },
  {
    "word": "believe",
    "meaning": "v 相信;认为"
  },
  {
    "word": "bell",
    "meaning": "n 钟;铃"
  },
  {
    "word": "belong",
    "meaning": "v 属于;附属"
  },
  {
    "word": "beloved",
    "meaning": "adj 亲爱的 n.爱人"
  },
  {
    "word": "below",
    "meaning": "prep 在...下面 adv.在下面"
  },
  {
    "word": "belt",
    "meaning": "n 带;腰带;地带"
  },
  {
    "word": "bench",
    "meaning": "n 长凳;工作台"
  },
  {
    "word": "bend",
    "meaning": "v 弯曲;屈服 n.弯曲"
  },
  {
    "word": "beneath",
    "meaning": "prep 在...下方"
  },
  {
    "word": "benefit",
    "meaning": "n 利益;恩惠 v.有益于"
  },
  {
    "word": "beside",
    "meaning": "prep 在...旁边"
  },
  {
    "word": "besides",
    "meaning": "adv 此外;而且"
  },
  {
    "word": "best",
    "meaning": "adj 最好的 n.最好"
  },
  {
    "word": "bet",
    "meaning": "v 赌;打赌 n.赌注"
  },
  {
    "word": "betray",
    "meaning": "v 背叛;泄露"
  },
  {
    "word": "better",
    "meaning": "adj 较好的 adv.更好地"
  },
  {
    "word": "between",
    "meaning": "prep 在...之间"
  },
  {
    "word": "beyond",
    "meaning": "prep 在...的那边"
  },
  {
    "word": "bias",
    "meaning": "n 偏见;偏袒"
  },
  {
    "word": "bicycle",
    "meaning": "n 自行车;脚踏车"
  },
  {
    "word": "bid",
    "meaning": "v 出价;投标 n.出价"
  },
  {
    "word": "big",
    "meaning": "adj 大的"
  },
  {
    "word": "bike",
    "meaning": "n 自行车"
  },
  {
    "word": "bind",
    "meaning": "v 捆绑;装订"
  },
  {
    "word": "biology",
    "meaning": "n 生物学"
  },
  {
    "word": "bird",
    "meaning": "n 鸟;禽"
  },
  {
    "word": "birth",
    "meaning": "n 出生;出身"
  },
  {
    "word": "birthday",
    "meaning": "n 生日"
  },
  {
    "word": "biscuit",
    "meaning": "n 饼干"
  },
  {
    "word": "bit",
    "meaning": "n 一点;少量"
  },
  {
    "word": "bite",
    "meaning": "v 咬;剌痛 n.咬;一口"
  },
  {
    "word": "bitter",
    "meaning": "adj 痛苦的;严寒的"
  },
  {
    "word": "black",
    "meaning": "adj 黑色的 n.黑色"
  },
  {
    "word": "blackboard",
    "meaning": "n 黑板"
  },
  {
    "word": "blade",
    "meaning": "n 刀刃;叶片"
  },
  {
    "word": "blame",
    "meaning": "v 责备;归咎于"
  },
  {
    "word": "blank",
    "meaning": "adj 空白的 n.空白"
  },
  {
    "word": "blanket",
    "meaning": "n 毯子;羊毛毯"
  },
  {
    "word": "blast",
    "meaning": "n 爆炸;一阵风 v.爆炸"
  },
  {
    "word": "blaze",
    "meaning": "n 火焰;光辉 v.燃烧"
  },
  {
    "word": "bleed",
    "meaning": "v 出血;流血"
  },
  {
    "word": "blend",
    "meaning": "v 混和;调配"
  },
  {
    "word": "bless",
    "meaning": "v 祝福;保佑"
  },
  {
    "word": "blind",
    "meaning": "adj 瞎的;盲目的"
  },
  {
    "word": "block",
    "meaning": "n 街区;块 v.阻塞"
  },
  {
    "word": "blood",
    "meaning": "n 血;血液"
  },
  {
    "word": "bloom",
    "meaning": "n 花;开花 v.开花"
  },
  {
    "word": "blow",
    "meaning": "v 吹;爆炸 n.打击"
  },
  {
    "word": "blue",
    "meaning": "adj 蓝色的 n.蓝色"
  },
  {
    "word": "board",
    "meaning": "n 木板;委员会"
  },
  {
    "word": "boast",
    "meaning": "v 自夸;夸耀"
  },
  {
    "word": "boat",
    "meaning": "n 船;小船"
  },
  {
    "word": "body",
    "meaning": "n 身体;主体"
  },
  {
    "word": "boil",
    "meaning": "v 沸腾;汽化 n.沸腾"
  },
  {
    "word": "bomb",
    "meaning": "n 炸弹 v.轰炸"
  },
  {
    "word": "bond",
    "meaning": "n 债券;结合 v.结合"
  },
  {
    "word": "bone",
    "meaning": "n 骨头;骨骼"
  },
  {
    "word": "bonus",
    "meaning": "n 奖金;红利"
  },
  {
    "word": "book",
    "meaning": "n 书;本子 v.预定"
  },
  {
    "word": "boom",
    "meaning": "n 繁荣;低沉的声音 v.急速发展"
  },
  {
    "word": "boost",
    "meaning": "v 促进;增加 n.推动"
  },
  {
    "word": "boot",
    "meaning": "n 靴;靴子"
  },
  {
    "word": "booth",
    "meaning": "n 货摊;公用电话亭"
  },
  {
    "word": "border",
    "meaning": "n 边界;国界"
  },
  {
    "word": "bore",
    "meaning": "v 使厌烦;钻孔"
  },
  {
    "word": "born",
    "meaning": "adj 出生的;天生的"
  },
  {
    "word": "borrow",
    "meaning": "v 借;借用"
  },
  {
    "word": "bosom",
    "meaning": "n 胸;胸怀"
  },
  {
    "word": "boss",
    "meaning": "n 老板;领班"
  },
  {
    "word": "both",
    "meaning": "adj 两个...(都) pron.两者"
  },
  {
    "word": "bother",
    "meaning": "v 烦扰;打扰"
  },
  {
    "word": "bottle",
    "meaning": "n 瓶子;一瓶的容量"
  },
  {
    "word": "bottom",
    "meaning": "n 底部;底"
  },
  {
    "word": "bounce",
    "meaning": "v 弹跳;弹起"
  },
  {
    "word": "bound",
    "meaning": "adj 有义务的;受约束的"
  },
  {
    "word": "boundary",
    "meaning": "n 分界线;界限"
  },
  {
    "word": "bow",
    "meaning": "v 鞠躬;弯腰 n.弓"
  },
  {
    "word": "bowl",
    "meaning": "n 碗;一碗的容量"
  },
  {
    "word": "box",
    "meaning": "n 盒子;箱子"
  },
  {
    "word": "boy",
    "meaning": "n 男孩;小伙子"
  },
  {
    "word": "brain",
    "meaning": "n 大脑;头脑"
  },
  {
    "word": "brake",
    "meaning": "v 刹车;减速 n.刹车"
  },
  {
    "word": "branch",
    "meaning": "n 树枝;分部"
  },
  {
    "word": "brand",
    "meaning": "n 商标;牌子 v.打烙印"
  },
  {
    "word": "brass",
    "meaning": "n 黄铜;铜器"
  },
  {
    "word": "brave",
    "meaning": "adj 勇敢的;华丽的"
  },
  {
    "word": "bread",
    "meaning": "n 面包"
  },
  {
    "word": "break",
    "meaning": "v 打破;中断 n.休息"
  },
  {
    "word": "breakfast",
    "meaning": "n 早餐"
  },
  {
    "word": "breast",
    "meaning": "n 胸;乳房"
  },
  {
    "word": "breath",
    "meaning": "n 呼吸;气息"
  },
  {
    "word": "breathe",
    "meaning": "v 呼吸"
  },
  {
    "word": "breed",
    "meaning": "v 繁殖;饲养 n.品种"
  },
  {
    "word": "breeze",
    "meaning": "n 微风;和风"
  },
  {
    "word": "brick",
    "meaning": "n 砖;砖块"
  },
  {
    "word": "bride",
    "meaning": "n 新娘"
  },
  {
    "word": "bridge",
    "meaning": "n 桥;桥牌"
  },
  {
    "word": "brief",
    "meaning": "adj 简短的 v.简短介绍"
  },
  {
    "word": "bright",
    "meaning": "adj 明亮的;聪明的"
  },
  {
    "word": "brilliant",
    "meaning": "adj 光辉的;杰出的"
  },
  {
    "word": "brim",
    "meaning": "n 边缘;帽沿"
  },
  {
    "word": "bring",
    "meaning": "v 拿来;带来"
  },
  {
    "word": "brisk",
    "meaning": "adj 活泼的;清新的"
  },
  {
    "word": "broaden",
    "meaning": "v 放宽;变宽"
  },
  {
    "word": "broadly",
    "meaning": "adv 宽广地;概括地"
  },
  {
    "word": "broadcast",
    "meaning": "v /n.广播;播放"
  },
  {
    "word": "broken",
    "meaning": "adj 破碎的;坏掉的"
  },
  {
    "word": "bronze",
    "meaning": "n 青铜;青铜色"
  },
  {
    "word": "brook",
    "meaning": "n 小溪;小河"
  },
  {
    "word": "broom",
    "meaning": "n 扫帚"
  },
  {
    "word": "brother",
    "meaning": "n 兄弟;同胞"
  },
  {
    "word": "brow",
    "meaning": "n 眉毛;额"
  },
  {
    "word": "brown",
    "meaning": "n /adj.棕色（的）"
  },
  {
    "word": "brush",
    "meaning": "n 刷子;画笔 v.刷;擦过"
  },
  {
    "word": "bubble",
    "meaning": "n 气泡;泡沫 v.起泡"
  },
  {
    "word": "bucket",
    "meaning": "n 水桶;吊桶"
  },
  {
    "word": "bud",
    "meaning": "n 芽;花蕾"
  },
  {
    "word": "budget",
    "meaning": "n 预算;开支"
  },
  {
    "word": "buffalo",
    "meaning": "n 水牛;布法罗"
  },
  {
    "word": "build",
    "meaning": "v 建造;建设"
  },
  {
    "word": "builder",
    "meaning": "n 建筑者;建造师"
  },
  {
    "word": "building",
    "meaning": "n 建筑;建筑物"
  },
  {
    "word": "bulb",
    "meaning": "n 电灯泡;球状物"
  },
  {
    "word": "bulk",
    "meaning": "n 体积;大批"
  },
  {
    "word": "bull",
    "meaning": "n 公牛;雄的"
  },
  {
    "word": "bullet",
    "meaning": "n 子弹;弹丸"
  },
  {
    "word": "bunch",
    "meaning": "n 一串;一束"
  },
  {
    "word": "bundle",
    "meaning": "n 捆;包袱 v.收集"
  },
  {
    "word": "burden",
    "meaning": "n 负担;责任"
  },
  {
    "word": "bureau",
    "meaning": "n 局;司;处"
  },
  {
    "word": "burn",
    "meaning": "v 燃烧;烧毁"
  },
  {
    "word": "burning",
    "meaning": "adj 燃烧的;热烈的"
  },
  {
    "word": "burst",
    "meaning": "v 爆炸;突然破裂"
  },
  {
    "word": "bury",
    "meaning": "v 埋葬;埋藏"
  },
  {
    "word": "bus",
    "meaning": "n 公共汽车;总线"
  },
  {
    "word": "bush",
    "meaning": "n 灌木;灌木丛"
  },
  {
    "word": "business",
    "meaning": "n 商业;事务"
  },
  {
    "word": "busy",
    "meaning": "adj 忙的;繁忙的"
  },
  {
    "word": "but",
    "meaning": "conj 但是 prep.除了"
  },
  {
    "word": "butcher",
    "meaning": "n 屠夫;肉店"
  },
  {
    "word": "butter",
    "meaning": "n 黄油;奶油"
  },
  {
    "word": "butterfly",
    "meaning": "n 蝴蝶"
  },
  {
    "word": "button",
    "meaning": "n 纽扣;按钮 v.扣紧"
  },
  {
    "word": "buy",
    "meaning": "v 买;购买"
  },
  {
    "word": "buzz",
    "meaning": "v 发嗡嗡声;嗡嗡叫"
  },
  {
    "word": "cabbage",
    "meaning": "n 卷心菜;白菜"
  },
  {
    "word": "cabin",
    "meaning": "n 小屋;船舱"
  },
  {
    "word": "cabinet",
    "meaning": "n 橱柜;内阁"
  },
  {
    "word": "cable",
    "meaning": "n 电缆;电报 v.打电报"
  },
  {
    "word": "cache",
    "meaning": "n 缓存;隐藏的贮藏所"
  },
  {
    "word": "cactus",
    "meaning": "n 仙人掌"
  },
  {
    "word": "cadre",
    "meaning": "n 干部;骨架"
  },
  {
    "word": "cage",
    "meaning": "n 笼子"
  },
  {
    "word": "caress",
    "meaning": "n /v.爱抚;轻抚"
  },
  {
    "word": "cargo",
    "meaning": "n （船、飞机等的）货物"
  },
  {
    "word": "carol",
    "meaning": "n 颂歌;欢乐的歌"
  },
  {
    "word": "carpet",
    "meaning": "n 地毯"
  },
  {
    "word": "carriage",
    "meaning": "n 四轮马车;运输"
  },
  {
    "word": "carrier",
    "meaning": "n 搬运人;带菌者"
  },
  {
    "word": "carrot",
    "meaning": "n 胡萝卜"
  },
  {
    "word": "cart",
    "meaning": "n 二轮运货马车"
  },
  {
    "word": "cartoon",
    "meaning": "n 卡通;动画片"
  },
  {
    "word": "carve",
    "meaning": "v 雕刻;切"
  },
  {
    "word": "case",
    "meaning": "n 情况;病例"
  },
  {
    "word": "cash",
    "meaning": "n 现金 v.兑现"
  },
  {
    "word": "cashier",
    "meaning": "n 出纳员"
  },
  {
    "word": "casino",
    "meaning": "n 赌场"
  },
  {
    "word": "cast",
    "meaning": "v 投掷;铸造"
  },
  {
    "word": "castle",
    "meaning": "n 城堡;象棋中的车"
  },
  {
    "word": "casual",
    "meaning": "adj 偶然的;非正式的"
  },
  {
    "word": "casualty",
    "meaning": "n 伤亡人员;事故"
  },
  {
    "word": "cat",
    "meaning": "n 猫"
  },
  {
    "word": "catalog",
    "meaning": "n 目录"
  },
  {
    "word": "catastrophe",
    "meaning": "n 灾难;灾祸"
  },
  {
    "word": "catch",
    "meaning": "v 捕捉;赶上"
  },
  {
    "word": "category",
    "meaning": "n 种类;范畴"
  },
  {
    "word": "cater",
    "meaning": "v 迎合;满足"
  },
  {
    "word": "cathedral",
    "meaning": "n 大教堂"
  },
  {
    "word": "Catholic",
    "meaning": "adj 天主教的 n.天主教徒"
  },
  {
    "word": "cattle",
    "meaning": "n 牛;牲畜"
  },
  {
    "word": "cause",
    "meaning": "n 原因;事业 v.引起"
  },
  {
    "word": "caution",
    "meaning": "n 小心;警告"
  },
  {
    "word": "cautious",
    "meaning": "adj 谨慎的"
  },
  {
    "word": "cave",
    "meaning": "n 洞穴"
  },
  {
    "word": "cease",
    "meaning": "v 停止;结束"
  },
  {
    "word": "ceiling",
    "meaning": "n 天花板;上限"
  },
  {
    "word": "celebrate",
    "meaning": "v 庆祝;颂扬"
  },
  {
    "word": "celebration",
    "meaning": "n 庆祝;庆典"
  },
  {
    "word": "celebrity",
    "meaning": "n 名人;名望"
  },
  {
    "word": "cell",
    "meaning": "n 细胞;电池;牢房"
  },
  {
    "word": "cellar",
    "meaning": "n 地下室;酒窖"
  },
  {
    "word": "cement",
    "meaning": "n 水泥;胶合剂"
  },
  {
    "word": "cemetery",
    "meaning": "n 墓地"
  },
  {
    "word": "censor",
    "meaning": "n 检查员 v.审查"
  },
  {
    "word": "census",
    "meaning": "n 人口普查"
  },
  {
    "word": "cent",
    "meaning": "n 百;分"
  },
  {
    "word": "centigrade",
    "meaning": "n /adj.摄氏温度计（的）"
  },
  {
    "word": "central",
    "meaning": "adj 中央的;主要的"
  },
  {
    "word": "centre",
    "meaning": "n 中心 v.集中"
  },
  {
    "word": "century",
    "meaning": "n 世纪;百年"
  },
  {
    "word": "ceremony",
    "meaning": "n 典礼;仪式"
  },
  {
    "word": "certain",
    "meaning": "adj 确定的;某"
  },
  {
    "word": "certainly",
    "meaning": "adv 一定;当然"
  },
  {
    "word": "certainty",
    "meaning": "n 确定;肯定"
  },
  {
    "word": "certificate",
    "meaning": "n 证书;证件"
  },
  {
    "word": "certify",
    "meaning": "v 证明;证实"
  },
  {
    "word": "chain",
    "meaning": "n 链;一连串"
  },
  {
    "word": "chair",
    "meaning": "n 椅子;主席"
  },
  {
    "word": "chairman",
    "meaning": "n 主席"
  },
  {
    "word": "chalk",
    "meaning": "n 粉笔"
  },
  {
    "word": "challenge",
    "meaning": "n 挑战;挑战书"
  },
  {
    "word": "chamber",
    "meaning": "n 房间;腔"
  },
  {
    "word": "champion",
    "meaning": "n 冠军;拥护者"
  },
  {
    "word": "chance",
    "meaning": "n 机会;可能性"
  },
  {
    "word": "chancellor",
    "meaning": "n 总理;校长"
  },
  {
    "word": "change",
    "meaning": "n 变化;零钱 v.改变"
  },
  {
    "word": "channel",
    "meaning": "n 频道;海峡"
  },
  {
    "word": "chaos",
    "meaning": "n 混乱;混沌"
  },
  {
    "word": "chap",
    "meaning": "n /v.使劈开;鞭打"
  },
  {
    "word": "chapter",
    "meaning": "n 章;回"
  },
  {
    "word": "character",
    "meaning": "n 性格;字符"
  },
  {
    "word": "characteristic",
    "meaning": "adj 特有的 n.特性"
  },
  {
    "word": "characterize",
    "meaning": "v 描述;成为...的特征"
  },
  {
    "word": "charge",
    "meaning": "n 费用;控告 v.充电;指控"
  },
  {
    "word": "charity",
    "meaning": "n 慈善;施舍"
  },
  {
    "word": "charm",
    "meaning": "n 魅力;魔法"
  },
  {
    "word": "chart",
    "meaning": "n 图表;海图"
  },
  {
    "word": "charter",
    "meaning": "n 宪章;特许证"
  },
  {
    "word": "chase",
    "meaning": "v 追逐;追捕"
  },
  {
    "word": "chat",
    "meaning": "v 聊天;闲谈"
  },
  {
    "word": "cheap",
    "meaning": "adj 便宜的;低劣的"
  },
  {
    "word": "cheat",
    "meaning": "v 欺骗;作弊"
  },
  {
    "word": "check",
    "meaning": "n 检查;支票 v.检查;托运"
  },
  {
    "word": "cheek",
    "meaning": "n 脸颊;面颊"
  },
  {
    "word": "cheer",
    "meaning": "v 欢呼;鼓舞"
  },
  {
    "word": "cheese",
    "meaning": "n 奶酪"
  },
  {
    "word": "chef",
    "meaning": "n 厨师;大厨"
  },
  {
    "word": "chemical",
    "meaning": "adj 化学的 n.化学品"
  },
  {
    "word": "chemist",
    "meaning": "n 化学家;药剂师"
  },
  {
    "word": "chemistry",
    "meaning": "n 化学"
  },
  {
    "word": "cheque",
    "meaning": "n 支票"
  },
  {
    "word": "cherry",
    "meaning": "n 樱桃;樱桃树"
  },
  {
    "word": "chess",
    "meaning": "n 国际象棋"
  },
  {
    "word": "chest",
    "meaning": "n 胸部;箱子"
  },
  {
    "word": "chicken",
    "meaning": "n 鸡;鸡肉"
  },
  {
    "word": "chief",
    "meaning": "adj 主要的 n.首领"
  },
  {
    "word": "child",
    "meaning": "n 儿童;孩子"
  },
  {
    "word": "childhood",
    "meaning": "n 童年;幼年"
  },
  {
    "word": "chimney",
    "meaning": "n 烟囱;烟筒"
  },
  {
    "word": "chin",
    "meaning": "n 下巴"
  },
  {
    "word": "china",
    "meaning": "n 瓷器;中国"
  },
  {
    "word": "chocolate",
    "meaning": "n 巧克力"
  },
  {
    "word": "choice",
    "meaning": "n 选择;选择权"
  },
  {
    "word": "choir",
    "meaning": "n 唱诗班;合唱团"
  },
  {
    "word": "choke",
    "meaning": "v 窒息;阻塞"
  },
  {
    "word": "choose",
    "meaning": "v 选择;挑选"
  },
  {
    "word": "chop",
    "meaning": "v 砍;切细"
  },
  {
    "word": "chord",
    "meaning": "n 弦;和弦"
  },
  {
    "word": "chorus",
    "meaning": "n 合唱;合唱曲"
  },
  {
    "word": "Christ",
    "meaning": "n 基督;耶稣"
  },
  {
    "word": "Christian",
    "meaning": "n 基督徒 adj.基督教的"
  },
  {
    "word": "Christmas",
    "meaning": "n 圣诞节"
  },
  {
    "word": "chronic",
    "meaning": "adj 慢性的;长期的"
  },
  {
    "word": "church",
    "meaning": "n 教堂;教会"
  },
  {
    "word": "cigarette",
    "meaning": "n 香烟;纸烟"
  },
  {
    "word": "cinema",
    "meaning": "n 电影院;电影"
  },
  {
    "word": "circle",
    "meaning": "n 圆;周期 v.环绕"
  },
  {
    "word": "circulate",
    "meaning": "v 循环;流通"
  },
  {
    "word": "circumference",
    "meaning": "n 圆周;周长"
  },
  {
    "word": "circumstance",
    "meaning": "n 环境;情况"
  },
  {
    "word": "citizen",
    "meaning": "n 公民;居民"
  },
  {
    "word": "city",
    "meaning": "n 城市;都市"
  },
  {
    "word": "civil",
    "meaning": "adj 公民的;民间的"
  },
  {
    "word": "civilization",
    "meaning": "n 文明;教化"
  },
  {
    "word": "civilize",
    "meaning": "v 使文明;教育"
  },
  {
    "word": "claim",
    "meaning": "v 声称;要求 n.索赔"
  },
  {
    "word": "clap",
    "meaning": "v 拍手;鼓掌"
  },
  {
    "word": "clarify",
    "meaning": "v 澄清;阐明"
  },
  {
    "word": "clarity",
    "meaning": "n 清晰;明确"
  },
  {
    "word": "clash",
    "meaning": "n 冲突;撞击声"
  },
  {
    "word": "clasp",
    "meaning": "n 扣子;紧握"
  },
  {
    "word": "class",
    "meaning": "n 阶级;班级"
  },
  {
    "word": "classic",
    "meaning": "adj 经典的 n.经典著作"
  },
  {
    "word": "classical",
    "meaning": "adj 古典的;经典的"
  },
  {
    "word": "classification",
    "meaning": "n 分类;分级"
  },
  {
    "word": "classify",
    "meaning": "v 分类;归类"
  },
  {
    "word": "classroom",
    "meaning": "n 教室"
  },
  {
    "word": "claw",
    "meaning": "n 爪;钳子"
  },
  {
    "word": "clay",
    "meaning": "n 粘土;泥土"
  },
  {
    "word": "clean",
    "meaning": "adj 清洁的 v.打扫"
  },
  {
    "word": "clear",
    "meaning": "adj 清晰的 v.清除"
  },
  {
    "word": "clearance",
    "meaning": "n 清除;批准"
  },
  {
    "word": "clergy",
    "meaning": "n 牧师;神职人员"
  },
  {
    "word": "clerk",
    "meaning": "n 职员;店员"
  },
  {
    "word": "clever",
    "meaning": "adj 聪明的;机敏的"
  },
  {
    "word": "click",
    "meaning": "v 点击 n.点击声"
  },
  {
    "word": "client",
    "meaning": "n 客户;顾客"
  },
  {
    "word": "climate",
    "meaning": "n 气候;风气"
  },
  {
    "word": "climax",
    "meaning": "n 高潮;顶点"
  },
  {
    "word": "climb",
    "meaning": "v 攀登;爬升"
  },
  {
    "word": "clinic",
    "meaning": "n 诊所;门诊部"
  },
  {
    "word": "clinical",
    "meaning": "adj 临床的"
  },
  {
    "word": "clip",
    "meaning": "n 夹子;回形针"
  },
  {
    "word": "clock",
    "meaning": "n 钟;时钟"
  },
  {
    "word": "clockwise",
    "meaning": "adj /adv.顺时针方向（的）"
  },
  {
    "word": "clone",
    "meaning": "n 克隆;复制品"
  },
  {
    "word": "close",
    "meaning": "adj 亲密的;近的 v.关闭"
  },
  {
    "word": "closed",
    "meaning": "adj 关闭的;有限的"
  },
  {
    "word": "closet",
    "meaning": "n 壁橱;小房间"
  },
  {
    "word": "cloth",
    "meaning": "n 布;衣料"
  },
  {
    "word": "clothes",
    "meaning": "n 衣服;服装"
  },
  {
    "word": "clothing",
    "meaning": "n 衣物;服装"
  },
  {
    "word": "cloud",
    "meaning": "n 云;云朵"
  },
  {
    "word": "cloudy",
    "meaning": "adj 多云的;模糊的"
  },
  {
    "word": "club",
    "meaning": "n 俱乐部;球棒"
  },
  {
    "word": "clue",
    "meaning": "n 线索;提示"
  },
  {
    "word": "clumsy",
    "meaning": "adj 笨拙的;愚笨的"
  },
  {
    "word": "cluster",
    "meaning": "n 串;丛 v.群聚"
  },
  {
    "word": "clutch",
    "meaning": "v 抓住;握紧"
  },
  {
    "word": "coach",
    "meaning": "n 教练;长途汽车"
  },
  {
    "word": "coal",
    "meaning": "n 煤;煤块"
  },
  {
    "word": "coast",
    "meaning": "n 海岸;海滨"
  },
  {
    "word": "coastal",
    "meaning": "adj 海岸的;沿海的"
  },
  {
    "word": "coat",
    "meaning": "n 外套;涂层"
  },
  {
    "word": "cocaine",
    "meaning": "n 可卡因"
  },
  {
    "word": "cock",
    "meaning": "n 公鸡;雄鸡"
  },
  {
    "word": "code",
    "meaning": "n 代码;编码 v.编码"
  },
  {
    "word": "coffee",
    "meaning": "n 咖啡;咖啡豆"
  },
  {
    "word": "coffin",
    "meaning": "n 棺材;柩"
  },
  {
    "word": "coil",
    "meaning": "n 线圈 v.卷"
  },
  {
    "word": "coin",
    "meaning": "n 硬币;货币"
  },
  {
    "word": "coincide",
    "meaning": "v 巧合;一致"
  },
  {
    "word": "coincidence",
    "meaning": "n 巧合;巧事"
  },
  {
    "word": "cold",
    "meaning": "adj 冷的 n.寒冷"
  },
  {
    "word": "coleslaw",
    "meaning": "n 凉拌卷心菜丝"
  },
  {
    "word": "collapse",
    "meaning": "v 倒塌;崩溃"
  },
  {
    "word": "collar",
    "meaning": "n 衣领;颈圈"
  },
  {
    "word": "colleague",
    "meaning": "n 同事;同僚"
  },
  {
    "word": "collect",
    "meaning": "v 收集;聚集"
  },
  {
    "word": "collection",
    "meaning": "n 收集;收藏"
  },
  {
    "word": "collective",
    "meaning": "adj 集体的;共同的"
  },
  {
    "word": "college",
    "meaning": "n 学院;大学"
  },
  {
    "word": "collision",
    "meaning": "n 碰撞;冲突"
  },
  {
    "word": "colonel",
    "meaning": "n 陆军上校"
  },
  {
    "word": "colonial",
    "meaning": "adj 殖民地的;殖民的"
  },
  {
    "word": "colony",
    "meaning": "n 殖民地;群体"
  },
  {
    "word": "color",
    "meaning": "n 颜色 v.给...着色"
  },
  {
    "word": "column",
    "meaning": "n 柱;列"
  },
  {
    "word": "comb",
    "meaning": "n 梳子 v.梳头"
  },
  {
    "word": "combat",
    "meaning": "n 战斗 v.战斗"
  },
  {
    "word": "combination",
    "meaning": "n 结合;组合"
  },
  {
    "word": "combine",
    "meaning": "v 结合;联合"
  },
  {
    "word": "come",
    "meaning": "v 来;成为"
  },
  {
    "word": "comedy",
    "meaning": "n 喜剧;喜剧性"
  },
  {
    "word": "comfort",
    "meaning": "n 安慰;舒适 v.安慰"
  },
  {
    "word": "comfortable",
    "meaning": "adj 舒适的;安逸的"
  },
  {
    "word": "comic",
    "meaning": "adj 喜剧的;有趣的"
  },
  {
    "word": "command",
    "meaning": "n 命令;指挥 v.命令"
  },
  {
    "word": "commander",
    "meaning": "n 司令官;指挥者"
  },
  {
    "word": "comment",
    "meaning": "n 评论;注释 v.评论"
  },
  {
    "word": "commerce",
    "meaning": "n 商业;贸易"
  },
  {
    "word": "commercial",
    "meaning": "adj 商业的;商品的"
  },
  {
    "word": "commission",
    "meaning": "n 委员会;佣金"
  },
  {
    "word": "commit",
    "meaning": "v 犯（错误）;承诺"
  },
  {
    "word": "commitment",
    "meaning": "n 承诺;承担"
  },
  {
    "word": "committee",
    "meaning": "n 委员会;全体委员"
  },
  {
    "word": "common",
    "meaning": "adj 普通的;共同的"
  },
  {
    "word": "commonwealth",
    "meaning": "n 联邦;共和国"
  },
  {
    "word": "communicate",
    "meaning": "v 交流;传达"
  },
  {
    "word": "communication",
    "meaning": "n 交流;通信"
  },
  {
    "word": "community",
    "meaning": "n 社区;共同体"
  },
  {
    "word": "commute",
    "meaning": "v 通勤;往返"
  },
  {
    "word": "compact",
    "meaning": "adj 紧凑的 n.协定"
  },
  {
    "word": "companion",
    "meaning": "n 同伴;伴侣"
  },
  {
    "word": "company",
    "meaning": "n 公司;陪伴"
  },
  {
    "word": "comparable",
    "meaning": "adj 可比较的;类似的"
  },
  {
    "word": "comparative",
    "meaning": "adj 比较的;相对的"
  },
  {
    "word": "compare",
    "meaning": "v 比较;比喻"
  },
  {
    "word": "comparison",
    "meaning": "n 比较;比喻"
  },
  {
    "word": "compass",
    "meaning": "n 罗盘;指南针"
  },
  {
    "word": "compassion",
    "meaning": "n 同情;怜悯"
  },
  {
    "word": "compatible",
    "meaning": "adj 兼容的;适合的"
  },
  {
    "word": "compel",
    "meaning": "v 强迫;迫使"
  },
  {
    "word": "compensate",
    "meaning": "v 补偿;赔偿"
  },
  {
    "word": "compensation",
    "meaning": "n 补偿;报酬"
  },
  {
    "word": "compete",
    "meaning": "v 竞争;对抗"
  },
  {
    "word": "competence",
    "meaning": "n 能力;胜任"
  },
  {
    "word": "competition",
    "meaning": "n 竞争;比赛"
  },
  {
    "word": "competitive",
    "meaning": "adj 竞争的;有竞争力的"
  },
  {
    "word": "competitor",
    "meaning": "n 竞争者;对手"
  },
  {
    "word": "compile",
    "meaning": "v 编译;编纂"
  },
  {
    "word": "complain",
    "meaning": "v 抱怨;投诉"
  },
  {
    "word": "complaint",
    "meaning": "n 抱怨;控诉"
  },
  {
    "word": "complete",
    "meaning": "adj 完整的 v.完成"
  },
  {
    "word": "completion",
    "meaning": "n 完成;结束"
  },
  {
    "word": "complex",
    "meaning": "adj 复杂的;复合的"
  },
  {
    "word": "complexity",
    "meaning": "n 复杂;复杂性"
  },
  {
    "word": "compliance",
    "meaning": "n 遵从;服从"
  },
  {
    "word": "complicate",
    "meaning": "v 使复杂;使难解"
  },
  {
    "word": "complicated",
    "meaning": "adj 复杂的;难解的"
  },
  {
    "word": "component",
    "meaning": "n 组成部分;组件"
  },
  {
    "word": "compose",
    "meaning": "v 组成;创作"
  },
  {
    "word": "composer",
    "meaning": "n 作曲家;作家"
  },
  {
    "word": "composition",
    "meaning": "n 作品;成分"
  },
  {
    "word": "compound",
    "meaning": "n 复合物;化合物"
  },
  {
    "word": "comprehend",
    "meaning": "v 理解;领会"
  },
  {
    "word": "comprehension",
    "meaning": "n 理解;领悟"
  },
  {
    "word": "comprehensive",
    "meaning": "adj 全面的;广泛的"
  },
  {
    "word": "compress",
    "meaning": "v 压缩;紧迫"
  },
  {
    "word": "comprise",
    "meaning": "v 包含;构成"
  },
  {
    "word": "compromise",
    "meaning": "n 妥协 v.妥协"
  },
  {
    "word": "compute",
    "meaning": "v 计算;估算"
  },
  {
    "word": "computer",
    "meaning": "n 计算机;电脑"
  },
  {
    "word": "comrade",
    "meaning": "n 同志;同伴"
  },
  {
    "word": "conceal",
    "meaning": "v 隐藏;隐瞒"
  },
  {
    "word": "concentrate",
    "meaning": "v 集中;聚集"
  },
  {
    "word": "concentration",
    "meaning": "n 集中;浓度"
  },
  {
    "word": "concept",
    "meaning": "n 概念;观念"
  },
  {
    "word": "conception",
    "meaning": "n 概念;构想"
  },
  {
    "word": "concern",
    "meaning": "n 关心;关注 v.涉及"
  },
  {
    "word": "concerned",
    "meaning": "adj 有关的;关注的"
  },
  {
    "word": "concert",
    "meaning": "n 音乐会;一致"
  },
  {
    "word": "concession",
    "meaning": "n 让步;特许权"
  },
  {
    "word": "conciliation",
    "meaning": "n 和解;调解"
  },
  {
    "word": "conclude",
    "meaning": "v 结束;推断"
  },
  {
    "word": "conclusion",
    "meaning": "n 结论;结束"
  },
  {
    "word": "concrete",
    "meaning": "adj 具体的 n.混凝土"
  },
  {
    "word": "condemn",
    "meaning": "v 谴责;判刑"
  },
  {
    "word": "condense",
    "meaning": "v 压缩;使简洁"
  },
  {
    "word": "condition",
    "meaning": "n 条件;状况"
  },
  {
    "word": "conduct",
    "meaning": "n 行为 v.指挥"
  },
  {
    "word": "conductor",
    "meaning": "n 指挥;导体"
  },
  {
    "word": "conference",
    "meaning": "n 会议;协商"
  },
  {
    "word": "confess",
    "meaning": "v 承认;忏悔"
  },
  {
    "word": "confidence",
    "meaning": "n 信心;信任"
  },
  {
    "word": "confident",
    "meaning": "adj 自信的;确信的"
  },
  {
    "word": "configuration",
    "meaning": "n 结构;配置"
  },
  {
    "word": "confine",
    "meaning": "v 限制;禁闭"
  },
  {
    "word": "confined",
    "meaning": "adj 有限的;狭窄的"
  },
  {
    "word": "confirmation",
    "meaning": "n 确认;证实"
  },
  {
    "word": "confirmatory",
    "meaning": "adj 证实的;确认的"
  },
  {
    "word": "conflict",
    "meaning": "n 冲突;争执"
  },
  {
    "word": "confuse",
    "meaning": "v 混淆;使困惑"
  },
  {
    "word": "confusion",
    "meaning": "n 混淆;迷惑"
  },
  {
    "word": "congratulate",
    "meaning": "v 祝贺;恭喜"
  },
  {
    "word": "congratulation",
    "meaning": "n 祝贺;恭喜"
  },
  {
    "word": "congress",
    "meaning": "n 国会;代表大会"
  },
  {
    "word": "conjunction",
    "meaning": "n 结合;连词"
  },
  {
    "word": "connect",
    "meaning": "v 连接;联系"
  },
  {
    "word": "connection",
    "meaning": "n 连接;关系"
  },
  {
    "word": "conquer",
    "meaning": "v 征服;克服"
  },
  {
    "word": "conquest",
    "meaning": "n 征服;征服地"
  },
  {
    "word": "conscience",
    "meaning": "n 良心;道德心"
  },
  {
    "word": "conscious",
    "meaning": "adj 意识到的;神志清醒的"
  },
  {
    "word": "consciousness",
    "meaning": "n 意识;知觉"
  },
  {
    "word": "consecutive",
    "meaning": "adj 连续的;连贯的"
  },
  {
    "word": "consensus",
    "meaning": "n 一致;共识"
  },
  {
    "word": "consent",
    "meaning": "n 同意;准许"
  },
  {
    "word": "consequence",
    "meaning": "n 结果;后果"
  },
  {
    "word": "consequent",
    "meaning": "adj 随之发生的;必然的"
  },
  {
    "word": "consequently",
    "meaning": "adv 因此;所以"
  },
  {
    "word": "conservation",
    "meaning": "n 保存;保护"
  },
  {
    "word": "conservative",
    "meaning": "adj 保守的 n.保守派"
  },
  {
    "word": "conservatory",
    "meaning": "n 温室;音乐学院"
  },
  {
    "word": "consider",
    "meaning": "v 考虑;认为"
  },
  {
    "word": "considerable",
    "meaning": "adj 相当大的;重要的"
  },
  {
    "word": "considerate",
    "meaning": "adj 体贴的;考虑周到的"
  },
  {
    "word": "consideration",
    "meaning": "n 考虑;体贴"
  },
  {
    "word": "consist",
    "meaning": "v 由...组成;在于"
  },
  {
    "word": "consistent",
    "meaning": "adj 一致的;连贯的"
  },
  {
    "word": "console",
    "meaning": "n 控制台;操纵板"
  },
  {
    "word": "consolidate",
    "meaning": "v 巩固;合并"
  },
  {
    "word": "consonant",
    "meaning": "n 辅音;辅音字母"
  },
  {
    "word": "conspicuous",
    "meaning": "adj 显著的;显眼的"
  },
  {
    "word": "conspiracy",
    "meaning": "n 阴谋;密谋"
  },
  {
    "word": "constant",
    "meaning": "adj 不变的;恒定的"
  },
  {
    "word": "constellation",
    "meaning": "n 星座;星群"
  },
  {
    "word": "constitution",
    "meaning": "n 宪法;体质"
  },
  {
    "word": "constitutional",
    "meaning": "adj 宪法的;体质的"
  },
  {
    "word": "constrain",
    "meaning": "v 强迫;限制"
  },
  {
    "word": "constraint",
    "meaning": "n 强迫;限制"
  },
  {
    "word": "construct",
    "meaning": "v 建造;构造"
  },
  {
    "word": "construction",
    "meaning": "n 建造;建筑物"
  },
  {
    "word": "consul",
    "meaning": "n 领事"
  },
  {
    "word": "consulate",
    "meaning": "n 领事馆"
  },
  {
    "word": "consult",
    "meaning": "v 咨询;商量"
  },
  {
    "word": "consultant",
    "meaning": "n 顾问;咨询者"
  },
  {
    "word": "consume",
    "meaning": "v 消耗;消费"
  },
  {
    "word": "consumer",
    "meaning": "n 消费者"
  },
  {
    "word": "consumption",
    "meaning": "n 消耗;消费"
  },
  {
    "word": "contact",
    "meaning": "n 接触;联系 v.接触"
  },
  {
    "word": "contain",
    "meaning": "v 包含;容纳"
  },
  {
    "word": "container",
    "meaning": "n 容器;集装箱"
  },
  {
    "word": "contaminate",
    "meaning": "v 污染;弄脏"
  },
  {
    "word": "contamination",
    "meaning": "n 污染;玷污"
  },
  {
    "word": "contemplate",
    "meaning": "v 沉思;注视"
  },
  {
    "word": "contemplation",
    "meaning": "n 沉思;注视"
  },
  {
    "word": "contemporary",
    "meaning": "adj 当代的;同时代的"
  },
  {
    "word": "contempt",
    "meaning": "n 轻视;蔑视"
  },
  {
    "word": "contend",
    "meaning": "v 竞争;主张"
  },
  {
    "word": "content",
    "meaning": "n 内容;满足 adj.满足的"
  },
  {
    "word": "contention",
    "meaning": "n 争论;争夺"
  },
  {
    "word": "contest",
    "meaning": "n 竞赛;争论"
  },
  {
    "word": "context",
    "meaning": "n 上下文;环境"
  },
  {
    "word": "continent",
    "meaning": "n 大陆;洲"
  },
  {
    "word": "continental",
    "meaning": "adj 大陆的;大陆性的"
  },
  {
    "word": "continual",
    "meaning": "adj 不断的;频繁的"
  },
  {
    "word": "continue",
    "meaning": "v 继续;连续"
  },
  {
    "word": "continuity",
    "meaning": "n 连续;连贯性"
  },
  {
    "word": "continuous",
    "meaning": "adj 连续的;持续的"
  },
  {
    "word": "contract",
    "meaning": "n 合同 v.收缩"
  },
  {
    "word": "contradict",
    "meaning": "v 反驳;相矛盾"
  },
  {
    "word": "contradiction",
    "meaning": "n 反驳;矛盾"
  },
  {
    "word": "contrary",
    "meaning": "adj 相反的 n.相反"
  },
  {
    "word": "contrast",
    "meaning": "n 对比;对照 v.对比"
  },
  {
    "word": "contribute",
    "meaning": "v 贡献;投稿"
  },
  {
    "word": "contribution",
    "meaning": "n 贡献;捐款"
  },
  {
    "word": "control",
    "meaning": "n 控制;管制 v.控制"
  },
  {
    "word": "controversial",
    "meaning": "adj 引起争议的;有争议的"
  },
  {
    "word": "controversy",
    "meaning": "n 争论;论战"
  },
  {
    "word": "convenience",
    "meaning": "n 便利;方便"
  },
  {
    "word": "convenient",
    "meaning": "adj 方便的;近便的"
  },
  {
    "word": "convention",
    "meaning": "n 大会;惯例"
  },
  {
    "word": "conventional",
    "meaning": "adj 惯例的;普通的"
  },
  {
    "word": "conversation",
    "meaning": "n 谈话;会话"
  },
  {
    "word": "convert",
    "meaning": "v 转换;改变"
  },
  {
    "word": "convey",
    "meaning": "v 传达;运输"
  },
  {
    "word": "convict",
    "meaning": "v 定罪 n.囚犯"
  },
  {
    "word": "conviction",
    "meaning": "n 定罪;坚信"
  },
  {
    "word": "convince",
    "meaning": "v 使确信;说服"
  },
  {
    "word": "convinced",
    "meaning": "adj 确信的;信服的"
  },
  {
    "word": "convincing",
    "meaning": "adj 令人信服的"
  },
  {
    "word": "conviction",
    "meaning": "n 定罪;坚信"
  },
  {
    "word": "cook",
    "meaning": "v 烹饪;煮"
  },
  {
    "word": "cookie",
    "meaning": "n 饼干"
  },
  {
    "word": "cool",
    "meaning": "adj 凉爽的;冷静的"
  },
  {
    "word": "cope",
    "meaning": "v 处理;对付"
  },
  {
    "word": "copier",
    "meaning": "n 复印机;复制机"
  },
  {
    "word": "copper",
    "meaning": "n 铜;铜币"
  },
  {
    "word": "copy",
    "meaning": "n 副本;摹仿 v.复制"
  },
  {
    "word": "copying",
    "meaning": "n 复制;复印"
  },
  {
    "word": "copyright",
    "meaning": "n 版权;著作权"
  },
  {
    "word": "coral",
    "meaning": "n 珊瑚;珊瑚虫"
  },
  {
    "word": "cord",
    "meaning": "n 绳;索"
  },
  {
    "word": "cordial",
    "meaning": "adj 诚恳的;热忱的"
  },
  {
    "word": "core",
    "meaning": "n 核心;果心"
  },
  {
    "word": "corn",
    "meaning": "n 玉米;谷类"
  },
  {
    "word": "corner",
    "meaning": "n 角;角落"
  },
  {
    "word": "corporation",
    "meaning": "n 公司;法人"
  },
  {
    "word": "corps",
    "meaning": "n 军团;兵种"
  },
  {
    "word": "corpse",
    "meaning": "n 尸体;尸首"
  },
  {
    "word": "correct",
    "meaning": "adj 正确的 v.改正"
  },
  {
    "word": "correction",
    "meaning": "n 改正;纠正"
  },
  {
    "word": "correspond",
    "meaning": "v 通信;符合"
  },
  {
    "word": "correspondence",
    "meaning": "n 通信;符合"
  },
  {
    "word": "correspondent",
    "meaning": "n 记者;通讯员"
  },
  {
    "word": "corresponding",
    "meaning": "adj 相应的;通信的"
  },
  {
    "word": "corridor",
    "meaning": "n 走廊;过道"
  },
  {
    "word": "corrupt",
    "meaning": "adj 腐败的 v.贿赂"
  },
  {
    "word": "corruption",
    "meaning": "n 腐败;贪污"
  },
  {
    "word": "cosmic",
    "meaning": "adj 宇宙的;广大无边的"
  },
  {
    "word": "cost",
    "meaning": "n 费用;成本 v.花费"
  },
  {
    "word": "costly",
    "meaning": "adj 昂贵的;价值高的"
  },
  {
    "word": "costume",
    "meaning": "n 服装;剧装"
  },
  {
    "word": "cosy",
    "meaning": "adj 舒适的;安逸的"
  },
  {
    "word": "cottage",
    "meaning": "n 小屋;村舍"
  },
  {
    "word": "cotton",
    "meaning": "n 棉花;棉布"
  },
  {
    "word": "couch",
    "meaning": "n 睡椅;长沙发"
  },
  {
    "word": "cough",
    "meaning": "n /v.咳嗽"
  },
  {
    "word": "could",
    "meaning": "modal v 可以;可能"
  },
  {
    "word": "council",
    "meaning": "n 委员会;会议"
  },
  {
    "word": "counsel",
    "meaning": "n 忠告;律师 v.忠告"
  },
  {
    "word": "count",
    "meaning": "v 数数;计算"
  },
  {
    "word": "countess",
    "meaning": "n 女伯爵"
  },
  {
    "word": "counter",
    "meaning": "n 柜台;计数器"
  },
  {
    "word": "counterfeit",
    "meaning": "adj 假冒的 v.伪造"
  },
  {
    "word": "country",
    "meaning": "n 国家;农村"
  },
  {
    "word": "countryside",
    "meaning": "n 乡下;农村"
  },
  {
    "word": "county",
    "meaning": "n 郡;县"
  },
  {
    "word": "coup",
    "meaning": "n 政变;意外之举"
  },
  {
    "word": "couple",
    "meaning": "n 对;夫妇 v.结合"
  },
  {
    "word": "coupon",
    "meaning": "n 票券;赠券"
  },
  {
    "word": "courage",
    "meaning": "n 勇气;胆量"
  },
  {
    "word": "course",
    "meaning": "n 课程;过程"
  },
  {
    "word": "court",
    "meaning": "n 法院;球场"
  },
  {
    "word": "cousin",
    "meaning": "n 堂兄弟姐妹"
  },
  {
    "word": "cove",
    "meaning": "n 小湾;小港"
  },
  {
    "word": "cover",
    "meaning": "v 覆盖;包括 n.封面"
  },
  {
    "word": "coverage",
    "meaning": "n 覆盖;保险"
  },
  {
    "word": "cow",
    "meaning": "n 母牛;奶牛"
  },
  {
    "word": "coward",
    "meaning": "n 懦夫;胆小鬼"
  },
  {
    "word": "crab",
    "meaning": "n 螃蟹;蟹肉"
  },
  {
    "word": "crack",
    "meaning": "n 裂缝;爆裂声"
  },
  {
    "word": "crackdown",
    "meaning": "n 镇压;打击"
  },
  {
    "word": "craft",
    "meaning": "n 工艺;飞船"
  },
  {
    "word": "cram",
    "meaning": "v 填塞;塞满"
  },
  {
    "word": "crash",
    "meaning": "n 碰撞;坠毁 v.碰撞"
  },
  {
    "word": "crater",
    "meaning": "n 火山口;弹坑"
  },
  {
    "word": "crawl",
    "meaning": "v 爬行;蠕动"
  },
  {
    "word": "crazy",
    "meaning": "adj 疯狂的;荒唐的"
  },
  {
    "word": "cream",
    "meaning": "n 奶油;乳脂"
  },
  {
    "word": "create",
    "meaning": "v 创造;造成"
  },
  {
    "word": "creation",
    "meaning": "n 创造;创作物"
  },
  {
    "word": "creative",
    "meaning": "adj 创造的;创造性的"
  },
  {
    "word": "creator",
    "meaning": "n 创造者;创立者"
  },
  {
    "word": "creature",
    "meaning": "n 生物;动物"
  },
  {
    "word": "credit",
    "meaning": "n 信用;信任"
  },
  {
    "word": "creek",
    "meaning": "n 小溪;小湾"
  },
  {
    "word": "crew",
    "meaning": "n 船员;全体工作人员"
  },
  {
    "word": "cricket",
    "meaning": "n 板球;蟋蟀"
  },
  {
    "word": "crime",
    "meaning": "n 罪行;犯罪"
  },
  {
    "word": "criminal",
    "meaning": "n 罪犯 adj.犯罪的"
  },
  {
    "word": "crisis",
    "meaning": "n 危机;危险期"
  },
  {
    "word": "crisp",
    "meaning": "adj 脆的;新鲜的"
  },
  {
    "word": "criterion",
    "meaning": "n 标准;准则"
  },
  {
    "word": "critic",
    "meaning": "n 批评家;评论家"
  },
  {
    "word": "critical",
    "meaning": "adj 批评的;危险的"
  },
  {
    "word": "criticism",
    "meaning": "n 批评;评论"
  },
  {
    "word": "criticize",
    "meaning": "v 批评;评论"
  },
  {
    "word": "crop",
    "meaning": "n 作物;产量"
  },
  {
    "word": "cross",
    "meaning": "n 十字形物 v.交叉"
  },
  {
    "word": "crossing",
    "meaning": "n 交叉;十字路口"
  },
  {
    "word": "crow",
    "meaning": "n 乌鸦;鸡冠"
  },
  {
    "word": "crowd",
    "meaning": "n 群众;一群人"
  },
  {
    "word": "crowded",
    "meaning": "adj 拥挤的;塞满的"
  },
  {
    "word": "crown",
    "meaning": "n 王冠;花冠"
  },
  {
    "word": "crucial",
    "meaning": "adj 决定性的;重要的"
  },
  {
    "word": "crude",
    "meaning": "adj 粗糙的;未加工的"
  },
  {
    "word": "cruel",
    "meaning": "adj 残忍的;残酷的"
  },
  {
    "word": "cruise",
    "meaning": "n 巡航;巡游"
  },
  {
    "word": "crumble",
    "meaning": "v 粉碎;崩溃"
  },
  {
    "word": "crush",
    "meaning": "v 压碎;拥挤"
  },
  {
    "word": "crust",
    "meaning": "n 外壳;地壳"
  },
  {
    "word": "cry",
    "meaning": "n 叫喊;哭声 v.哭"
  },
  {
    "word": "crystal",
    "meaning": "n 水晶;晶体"
  },
  {
    "word": "cube",
    "meaning": "n 立方体;立方"
  },
  {
    "word": "cubic",
    "meaning": "adj 立方的;立方体的"
  },
  {
    "word": "cuisine",
    "meaning": "n 烹饪;菜肴"
  },
  {
    "word": "cultivate",
    "meaning": "v 培养;耕作"
  },
  {
    "word": "cultural",
    "meaning": "adj 文化的;教养的"
  },
  {
    "word": "culture",
    "meaning": "n 文化;教养"
  },
  {
    "word": "cup",
    "meaning": "n 杯子;一杯的容量"
  },
  {
    "word": "cupboard",
    "meaning": "n 碗柜;食橱"
  },
  {
    "word": "curb",
    "meaning": "n 路边;抑制 v.抑制"
  },
  {
    "word": "cure",
    "meaning": "v 治疗;治愈"
  },
  {
    "word": "curious",
    "meaning": "adj 好奇的;稀奇的"
  },
  {
    "word": "curl",
    "meaning": "n 卷曲;卷发 v.卷曲"
  },
  {
    "word": "currency",
    "meaning": "n 货币;通货"
  },
  {
    "word": "current",
    "meaning": "adj 当前的 n.电流"
  },
  {
    "word": "curse",
    "meaning": "n 诅咒;咒骂 v.诅咒"
  },
  {
    "word": "curtain",
    "meaning": "n 帘;窗帘"
  },
  {
    "word": "curve",
    "meaning": "n 曲线;弯曲 v.弯曲"
  },
  {
    "word": "cushion",
    "meaning": "n 垫子;坐垫"
  },
  {
    "word": "custody",
    "meaning": "n 保管;监护"
  },
  {
    "word": "custom",
    "meaning": "n 习惯;风俗"
  },
  {
    "word": "customary",
    "meaning": "adj 习惯的;通常的"
  },
  {
    "word": "customer",
    "meaning": "n 顾客;主顾"
  },
  {
    "word": "cut",
    "meaning": "v 切;削减 n.切口"
  },
  {
    "word": "cute",
    "meaning": "adj 可爱的;聪明的"
  },
  {
    "word": "cycle",
    "meaning": "n 自行车;周期 v.循环"
  },
  {
    "word": "cylinder",
    "meaning": "n 圆筒;圆柱体"
  },
  {
    "word": "daily",
    "meaning": "adj 每日的 n.日报"
  },
  {
    "word": "dam",
    "meaning": "n 水坝;堰堤"
  },
  {
    "word": "damage",
    "meaning": "n /v.损害;损伤"
  },
  {
    "word": "damp",
    "meaning": "adj 潮湿的 n.潮湿"
  },
  {
    "word": "dance",
    "meaning": "n 舞;舞蹈 v.跳舞"
  },
  {
    "word": "danger",
    "meaning": "n 危险;风险"
  },
  {
    "word": "dangerous",
    "meaning": "adj 危险的;不安全的"
  },
  {
    "word": "dare",
    "meaning": "modal v 敢;敢于"
  },
  {
    "word": "dark",
    "meaning": "adj 黑暗的;深色的"
  },
  {
    "word": "darkness",
    "meaning": "n 黑暗;无知"
  },
  {
    "word": "dash",
    "meaning": "v 猛冲;急奔"
  },
  {
    "word": "data",
    "meaning": "n 数据;资料"
  },
  {
    "word": "database",
    "meaning": "n 数据库"
  },
  {
    "word": "date",
    "meaning": "n 日期;约会 v.约会"
  },
  {
    "word": "daughter",
    "meaning": "n 女儿"
  },
  {
    "word": "dawn",
    "meaning": "n 黎明;开端 v.破晓"
  },
  {
    "word": "day",
    "meaning": "n 白天;日子"
  },
  {
    "word": "daylight",
    "meaning": "n 白天;日光"
  },
  {
    "word": "dead",
    "meaning": "adj 死的;无生命的"
  },
  {
    "word": "deadline",
    "meaning": "n 最终期限"
  },
  {
    "word": "deadly",
    "meaning": "adj 致命的;非常的"
  },
  {
    "word": "deaf",
    "meaning": "adj 聋的;不愿听的"
  },
  {
    "word": "deal",
    "meaning": "n 交易;待遇 v.处理"
  },
  {
    "word": "dealer",
    "meaning": "n 商人;分销商"
  },
  {
    "word": "dear",
    "meaning": "adj 亲爱的;昂贵的"
  },
  {
    "word": "death",
    "meaning": "n 死;死亡"
  },
  {
    "word": "debate",
    "meaning": "n 辩论;争论 v.辩论"
  },
  {
    "word": "debt",
    "meaning": "n 债务;欠债"
  },
  {
    "word": "debtor",
    "meaning": "n 债务人"
  },
  {
    "word": "decade",
    "meaning": "n 十年;十年期"
  },
  {
    "word": "decay",
    "meaning": "v /n.衰退;衰减"
  },
  {
    "word": "deceit",
    "meaning": "n 欺骗;欺诈"
  },
  {
    "word": "deceive",
    "meaning": "v 欺骗;蒙蔽"
  },
  {
    "word": "December",
    "meaning": "n 十二月"
  },
  {
    "word": "decent",
    "meaning": "adj 适宜的;体面的"
  },
  {
    "word": "decide",
    "meaning": "v 决定;下决心"
  },
  {
    "word": "decimal",
    "meaning": "adj 小数的;十进制的"
  },
  {
    "word": "decision",
    "meaning": "n 决定;决心"
  },
  {
    "word": "decisive",
    "meaning": "adj 决定性的;果断的"
  },
  {
    "word": "deck",
    "meaning": "n 甲板;牌组"
  },
  {
    "word": "declare",
    "meaning": "v 声明;断言"
  },
  {
    "word": "decline",
    "meaning": "v 下降;拒绝 n.衰退"
  },
  {
    "word": "decorate",
    "meaning": "v 装饰;装潢"
  },
  {
    "word": "decoration",
    "meaning": "n 装饰;装饰品"
  },
  {
    "word": "decrease",
    "meaning": "v 减少;降低"
  },
  {
    "word": "dedicate",
    "meaning": "v 奉献;致力"
  },
  {
    "word": "deed",
    "meaning": "n 行为;事迹"
  },
  {
    "word": "deem",
    "meaning": "v 认为;视为"
  },
  {
    "word": "deep",
    "meaning": "adj 深的 adv.深地"
  },
  {
    "word": "deepen",
    "meaning": "v 深化;加深"
  },
  {
    "word": "deer",
    "meaning": "n 鹿"
  },
  {
    "word": "default",
    "meaning": "n 违约;缺席"
  },
  {
    "word": "defeat",
    "meaning": "n 失败 v.击败"
  },
  {
    "word": "defect",
    "meaning": "n 缺点;缺陷 v.叛变"
  },
  {
    "word": "defective",
    "meaning": "adj 有缺陷的;不完美的"
  },
  {
    "word": "defend",
    "meaning": "v 防守;保卫"
  },
  {
    "word": "defendant",
    "meaning": "n 被告"
  },
  {
    "word": "defense",
    "meaning": "n 防御;辩护"
  },
  {
    "word": "defensive",
    "meaning": "adj 防御的;自卫的"
  },
  {
    "word": "deficit",
    "meaning": "n 赤字;不足额"
  },
  {
    "word": "define",
    "meaning": "v 定义;使明确"
  },
  {
    "word": "definite",
    "meaning": "adj 明确的;一定的"
  },
  {
    "word": "definition",
    "meaning": "n 定义;清晰度"
  },
  {
    "word": "definitely",
    "meaning": "adv 一定地;肯定地"
  },
  {
    "word": "defy",
    "meaning": "v 违抗;藐视"
  },
  {
    "word": "degree",
    "meaning": "n 度;程度;学位"
  },
  {
    "word": "delay",
    "meaning": "n /v.延迟;延期"
  },
  {
    "word": "delete",
    "meaning": "v 删除;擦掉"
  },
  {
    "word": "delegation",
    "meaning": "n 代表团;授权"
  },
  {
    "word": "delete",
    "meaning": "v 删除;擦掉"
  },
  {
    "word": "delegation",
    "meaning": "n 代表团;授权"
  },
  {
    "word": "delicate",
    "meaning": "adj 精美的;脆弱的"
  },
  {
    "word": "delight",
    "meaning": "n 高兴 v.使高兴"
  },
  {
    "word": "delighted",
    "meaning": "adj 高兴的;快乐的"
  },
  {
    "word": "deliver",
    "meaning": "v 交付;发表"
  },
  {
    "word": "delivery",
    "meaning": "n 交付;分娩"
  },
  {
    "word": "demand",
    "meaning": "n 要求;需求 v.要求"
  },
  {
    "word": "democracy",
    "meaning": "n 民主;民主政治"
  },
  {
    "word": "democratic",
    "meaning": "adj 民主的;民主政治的"
  },
  {
    "word": "demonstrate",
    "meaning": "v 演示;证明"
  },
  {
    "word": "demonstration",
    "meaning": "n 证明;表"
  },
  {
    "word": "denote",
    "meaning": "v 表示;指示"
  },
  {
    "word": "denounce",
    "meaning": "v 谴责;告发"
  },
  {
    "word": "dense",
    "meaning": "adj 密集的;浓厚的"
  },
  {
    "word": "density",
    "meaning": "n 密度;浓度"
  },
  {
    "word": "dentist",
    "meaning": "n 牙科医生"
  },
  {
    "word": "deny",
    "meaning": "v 否认;拒绝"
  },
  {
    "word": "depart",
    "meaning": "v 离开;出发"
  },
  {
    "word": "department",
    "meaning": "n 部;部门"
  },
  {
    "word": "departure",
    "meaning": "n 离开;出发"
  },
  {
    "word": "depend",
    "meaning": "v 依赖;依靠"
  },
  {
    "word": "dependent",
    "meaning": "adj 依赖的 n.受抚养者"
  },
  {
    "word": "depict",
    "meaning": "v 描述;描绘"
  },
  {
    "word": "deportation",
    "meaning": "n 驱逐出境"
  },
  {
    "word": "deposit",
    "meaning": "n 存款;押金 v.存放"
  },
  {
    "word": "deposition",
    "meaning": "n 沉积;作证"
  },
  {
    "word": "deprive",
    "meaning": "v 剥夺;使丧失"
  },
  {
    "word": "depth",
    "meaning": "n 深度;深奥"
  },
  {
    "word": "deputy",
    "meaning": "n 副手;代表"
  },
  {
    "word": "derive",
    "meaning": "v 得到;源于"
  },
  {
    "word": "descend",
    "meaning": "v 下降;下去"
  },
  {
    "word": "descendant",
    "meaning": "n 后代;后裔"
  },
  {
    "word": "descent",
    "meaning": "n 下降;血统"
  },
  {
    "word": "describe",
    "meaning": "v 描述;描绘"
  },
  {
    "word": "description",
    "meaning": "n 描述;形容"
  },
  {
    "word": "desert",
    "meaning": "n 沙漠 v.遗弃"
  },
  {
    "word": "deserve",
    "meaning": "v 应受;值得"
  },
  {
    "word": "design",
    "meaning": "n 设计;图案 v.设计"
  },
  {
    "word": "designer",
    "meaning": "n 设计师;策划者"
  },
  {
    "word": "desirable",
    "meaning": "adj 值得要的;可取的"
  },
  {
    "word": "desire",
    "meaning": "v 愿望;要求 n.愿望"
  },
  {
    "word": "desk",
    "meaning": "n 桌子;办公桌"
  },
  {
    "word": "desolate",
    "meaning": "adj 荒凉的;孤独的"
  },
  {
    "word": "despair",
    "meaning": "n 绝望;失望 v.绝望"
  },
  {
    "word": "desperate",
    "meaning": "adj 绝望的;拼命的"
  },
  {
    "word": "despise",
    "meaning": "v 鄙视;轻视"
  },
  {
    "word": "despite",
    "meaning": "prep 尽管;不管"
  },
  {
    "word": "dessert",
    "meaning": "n 甜点;甜食"
  },
  {
    "word": "destination",
    "meaning": "n 目的地;终点"
  },
  {
    "word": "destiny",
    "meaning": "n 命运;天数"
  },
  {
    "word": "destroy",
    "meaning": "v 破坏;消灭"
  },
  {
    "word": "destruction",
    "meaning": "n 破坏;毁灭"
  },
  {
    "word": "destructive",
    "meaning": "adj 破坏性的;毁灭的"
  },
  {
    "word": "detach",
    "meaning": "v 分离;分开"
  },
  {
    "word": "detail",
    "meaning": "n 细节;详情 v.详述"
  },
  {
    "word": "detailed",
    "meaning": "adj 详细的;精细的"
  },
  {
    "word": "detain",
    "meaning": "v 拘留;留住"
  },
  {
    "word": "detect",
    "meaning": "v 侦查;发现"
  },
  {
    "word": "detection",
    "meaning": "n 侦查;发觉"
  },
  {
    "word": "determine",
    "meaning": "v 决定;确定"
  },
  {
    "word": "determined",
    "meaning": "adj 坚决的;果断的"
  },
  {
    "word": "determination",
    "meaning": "n 决心;决定"
  },
  {
    "word": "deviate",
    "meaning": "v 偏离;违背"
  },
  {
    "word": "device",
    "meaning": "n 装置;设备"
  },
  {
    "word": "devil",
    "meaning": "n 魔鬼;家伙"
  },
  {
    "word": "devise",
    "meaning": "v 设计;发明"
  },
  {
    "word": "devote",
    "meaning": "v 奉献;致力"
  },
  {
    "word": "devoted",
    "meaning": "adj 投入的;热爱的"
  },
  {
    "word": "devotion",
    "meaning": "n 献身;忠诚"
  },
  {
    "word": "dew",
    "meaning": "n 露水;甘露"
  },
  {
    "word": "diabetes",
    "meaning": "n 糖尿病"
  },
  {
    "word": "diagnosis",
    "meaning": "n 诊断;判断"
  },
  {
    "word": "diagram",
    "meaning": "n 图表;图解"
  },
  {
    "word": "dial",
    "meaning": "n 拨号盘 v.拨号"
  },
  {
    "word": "dialect",
    "meaning": "n 方言;土语"
  },
  {
    "word": "dialogue",
    "meaning": "n 对话;对白"
  },
  {
    "word": "diameter",
    "meaning": "n 直径"
  },
  {
    "word": "diamond",
    "meaning": "n 钻石;菱形"
  },
  {
    "word": "diary",
    "meaning": "n 日记;日记簿"
  },
  {
    "word": "dictate",
    "meaning": "v 口述;命令"
  },
  {
    "word": "dictation",
    "meaning": "n 听写;口述"
  },
  {
    "word": "dictionary",
    "meaning": "n 字典;词典"
  },
  {
    "word": "die",
    "meaning": "v 死亡;灭亡"
  },
  {
    "word": "diet",
    "meaning": "n 饮食;节食"
  },
  {
    "word": "differ",
    "meaning": "v 差异;不同"
  },
  {
    "word": "difference",
    "meaning": "n 差异;不同"
  },
  {
    "word": "different",
    "meaning": "adj 不同的;差异的"
  },
  {
    "word": "differently",
    "meaning": "adv 不同地;差异地"
  },
  {
    "word": "difficult",
    "meaning": "adj 困难的;艰难的"
  },
  {
    "word": "difficulty",
    "meaning": "n 困难;难题"
  },
  {
    "word": "dig",
    "meaning": "v 挖;掘"
  },
  {
    "word": "digest",
    "meaning": "v 消化 n.文摘"
  },
  {
    "word": "digital",
    "meaning": "adj 数字的;数码的"
  },
  {
    "word": "dignity",
    "meaning": "n 尊严;尊贵"
  },
  {
    "word": "dilemma",
    "meaning": "n 困境;进退两难"
  },
  {
    "word": "dimension",
    "meaning": "n 尺寸;维"
  },
  {
    "word": "diminish",
    "meaning": "v 减少;降低"
  },
  {
    "word": "dine",
    "meaning": "v 吃饭;用餐"
  },
  {
    "word": "dinner",
    "meaning": "n 晚餐;宴会"
  },
  {
    "word": "dioxide",
    "meaning": "n 二氧化物"
  },
  {
    "word": "dip",
    "meaning": "v 浸;蘸"
  },
  {
    "word": "diploma",
    "meaning": "n 毕业文凭;文凭"
  },
  {
    "word": "diplomat",
    "meaning": "n 外交官;外交家"
  },
  {
    "word": "diplomatic",
    "meaning": "adj 外交的;有策略的"
  },
  {
    "word": "direct",
    "meaning": "adj 直接的 v.指挥"
  },
  {
    "word": "direction",
    "meaning": "n 方向;指导"
  },
  {
    "word": "directly",
    "meaning": "adv 直接地;立即"
  },
  {
    "word": "director",
    "meaning": "n 导演;主任"
  },
  {
    "word": "directory",
    "meaning": "n 姓名地址录;目录"
  },
  {
    "word": "dirt",
    "meaning": "n 污垢;泥土"
  },
  {
    "word": "dirty",
    "meaning": "adj 脏的;下流的"
  },
  {
    "word": "disable",
    "meaning": "v 使无能;使残废"
  },
  {
    "word": "disadvantage",
    "meaning": "n 不利条件;弱点"
  },
  {
    "word": "disagree",
    "meaning": "v 不同意;不一致"
  },
  {
    "word": "disagreement",
    "meaning": "n 不一致;争论"
  },
  {
    "word": "disappear",
    "meaning": "v 消失;失踪"
  },
  {
    "word": "disappoint",
    "meaning": "v 使失望;使破灭"
  },
  {
    "word": "disappointed",
    "meaning": "adj 失望的;受挫折的"
  },
  {
    "word": "disappointing",
    "meaning": "adj 令人失望的"
  },
  {
    "word": "disappointment",
    "meaning": "n 失望;沮丧"
  },
  {
    "word": "disaster",
    "meaning": "n 灾难;灾祸"
  },
  {
    "word": "disastrous",
    "meaning": "adj 灾难性的;悲惨的"
  },
  {
    "word": "discard",
    "meaning": "v 丢弃;抛弃"
  },
  {
    "word": "discharge",
    "meaning": "v 释放;排出 n.放电"
  },
  {
    "word": "disciplinary",
    "meaning": "adj 纪律的;训练的"
  },
  {
    "word": "discipline",
    "meaning": "n 纪律;训练"
  },
  {
    "word": "disclose",
    "meaning": "v 揭露;暴露"
  },
  {
    "word": "discourse",
    "meaning": "n 演讲;论述 v.讲道"
  },
  {
    "word": "discourteous",
    "meaning": "adj 不礼貌的;无礼的"
  },
  {
    "word": "discover",
    "meaning": "v 发现;暴露"
  },
  {
    "word": "discovery",
    "meaning": "n 发现;发觉"
  },
  {
    "word": "discreet",
    "meaning": "adj 谨慎的;小心的"
  },
  {
    "word": "discrepancy",
    "meaning": "n 差异;矛盾"
  },
  {
    "word": "discrete",
    "meaning": "adj 离散的;分立的"
  },
  {
    "word": "discretion",
    "meaning": "n 谨慎;选择"
  },
  {
    "word": "discrimination",
    "meaning": "n 歧视;辨别力"
  },
  {
    "word": "discuss",
    "meaning": "v 讨论;论述"
  },
  {
    "word": "discussion",
    "meaning": "n 讨论;论述"
  },
  {
    "word": "disease",
    "meaning": "n 疾病;病害"
  },
  {
    "word": "disgust",
    "meaning": "n 厌恶;憎恶 v.厌恶"
  },
  {
    "word": "disgusted",
    "meaning": "adj 厌恶的;憎恶的"
  },
  {
    "word": "dish",
    "meaning": "n 盘;菜肴"
  },
  {
    "word": "dishearten",
    "meaning": "v 使沮丧;使失去勇气"
  },
  {
    "word": "dishonest",
    "meaning": "adj 不诚实的;欺诈的"
  },
  {
    "word": "dishonor",
    "meaning": "n 不光彩;丢脸 v.丢脸"
  },
  {
    "word": "dislike",
    "meaning": "v /n.不喜欢;厌恶"
  },
  {
    "word": "dismay",
    "meaning": "n 惊慌;失望 v.使惊慌"
  },
  {
    "word": "dismiss",
    "meaning": "v 解散;开除"
  },
  {
    "word": "disorder",
    "meaning": "n 混乱;失调"
  },
  {
    "word": "display",
    "meaning": "v /n.陈列;显示"
  },
  {
    "word": "displease",
    "meaning": "v 使不愉快;使生气"
  },
  {
    "word": "disposal",
    "meaning": "n 处理;安排"
  },
  {
    "word": "dispose",
    "meaning": "v 安排;处理"
  },
  {
    "word": "disposition",
    "meaning": "n 安排;倾向"
  },
  {
    "word": "dispute",
    "meaning": "n 争论;争端 v.争论"
  },
  {
    "word": "disregard",
    "meaning": "v /n.漠视;忽略"
  },
  {
    "word": "disrupt",
    "meaning": "v 使混乱;打乱"
  },
  {
    "word": "disruption",
    "meaning": "n 混乱;中断"
  },
  {
    "word": "dissatisfaction",
    "meaning": "n 不满;不满意"
  },
  {
    "word": "dissatisfy",
    "meaning": "v 使不满;使失望"
  },
  {
    "word": "dissolve",
    "meaning": "v 溶解;解散"
  },
  {
    "word": "distance",
    "meaning": "n 距离;远处"
  },
  {
    "word": "distant",
    "meaning": "adj 远的;疏远的"
  },
  {
    "word": "distinct",
    "meaning": "adj 明显的;不同的"
  },
  {
    "word": "distinction",
    "meaning": "n 区别;卓越"
  },
  {
    "word": "distinguish",
    "meaning": "v 区分;辨别"
  },
  {
    "word": "distinguished",
    "meaning": "adj 卓越的;著名的"
  },
  {
    "word": "distort",
    "meaning": "v 扭曲;曲解"
  },
  {
    "word": "distortion",
    "meaning": "n 扭曲;变形"
  },
  {
    "word": "distract",
    "meaning": "v 使分心;打扰"
  },
  {
    "word": "distraction",
    "meaning": "n 分心;娱乐"
  },
  {
    "word": "distribute",
    "meaning": "v 分配;分发"
  },
  {
    "word": "distribution",
    "meaning": "n 分配;分发"
  },
  {
    "word": "district",
    "meaning": "n 区域;行政区"
  },
  {
    "word": "disturb",
    "meaning": "v 打扰;扰乱"
  },
  {
    "word": "disturbance",
    "meaning": "n 打扰;扰乱"
  },
  {
    "word": "ditch",
    "meaning": "n 沟;沟渠"
  },
  {
    "word": "dive",
    "meaning": "v 跳水;潜水"
  },
  {
    "word": "diver",
    "meaning": "n 潜水员;跳水者"
  },
  {
    "word": "diverge",
    "meaning": "v 分歧;分开"
  },
  {
    "word": "divergence",
    "meaning": "n 分歧;差异"
  },
  {
    "word": "diverse",
    "meaning": "adj 不同的;多样的"
  },
  {
    "word": "diversify",
    "meaning": "v 多样化;变化"
  },
  {
    "word": "diversion",
    "meaning": "n 转移;改道"
  },
  {
    "word": "divert",
    "meaning": "v 转移;娱乐"
  },
  {
    "word": "divide",
    "meaning": "v 分割;分歧"
  },
  {
    "word": "dividend",
    "meaning": "n 红利;股息"
  },
  {
    "word": "divine",
    "meaning": "adj 神的;绝妙的"
  },
  {
    "word": "division",
    "meaning": "n 分割;除法"
  },
  {
    "word": "divorce",
    "meaning": "n 离婚;分离 v.离婚"
  },
  {
    "word": "divorcee",
    "meaning": "n 离婚者"
  },
  {
    "word": "do",
    "meaning": "v 做;干"
  },
  {
    "word": "document",
    "meaning": "n 文件;证件"
  },
  {
    "word": "dog",
    "meaning": "n 狗;狗项圈"
  },
  {
    "word": "dollar",
    "meaning": "n 美元;元"
  },
  {
    "word": "domestic",
    "meaning": "adj 国内的;家庭的"
  },
  {
    "word": "dominance",
    "meaning": "n 优势;统治"
  },
  {
    "word": "dominant",
    "meaning": "adj 统治的;显著的"
  },
  {
    "word": "dominate",
    "meaning": "v 统治;支配"
  },
  {
    "word": "donate",
    "meaning": "v 捐赠;赠送"
  },
  {
    "word": "donation",
    "meaning": "n 捐赠;捐款"
  },
  {
    "word": "donor",
    "meaning": "n 捐赠者;赠与者"
  },
  {
    "word": "door",
    "meaning": "n 门;入口"
  },
  {
    "word": "dorm",
    "meaning": "n 宿舍;睡眠"
  },
  {
    "word": "dormant",
    "meaning": "adj 休眠的;静止的"
  },
  {
    "word": "dose",
    "meaning": "n 剂量;一剂"
  },
  {
    "word": "dot",
    "meaning": "n 点;小点 v.打点"
  },
  {
    "word": "double",
    "meaning": "adj 双的 n.两个"
  },
  {
    "word": "doubt",
    "meaning": "n /v.怀疑;疑虑"
  },
  {
    "word": "doubtful",
    "meaning": "adj 怀疑的;可疑的"
  },
  {
    "word": "doubtless",
    "meaning": "adv 无疑的;必定的"
  },
  {
    "word": "down",
    "meaning": "adv 向下"
  },
  {
    "word": "down",
    "meaning": "adv 向下;沿着"
  },
  {
    "word": "downstairs",
    "meaning": "adv 在楼下;往楼下"
  },
  {
    "word": "downtown",
    "meaning": "adv 在市区;往市区"
  },
  {
    "word": "dozen",
    "meaning": "n 一打;十二个"
  },
  {
    "word": "draft",
    "meaning": "n 草稿;汇票 v.起草"
  },
  {
    "word": "drag",
    "meaning": "v 拖;拉"
  },
  {
    "word": "dragon",
    "meaning": "n 龙;凶暴的人"
  },
  {
    "word": "drain",
    "meaning": "v 排去;放水 n.排水"
  },
  {
    "word": "drama",
    "meaning": "n 戏剧;戏剧性事件"
  },
  {
    "word": "dramatic",
    "meaning": "adj 戏剧的;戏剧性的"
  },
  {
    "word": "drastic",
    "meaning": "adj 激烈的;猛烈的"
  },
  {
    "word": "draw",
    "meaning": "v 画;拉"
  },
  {
    "word": "drawback",
    "meaning": "n 缺点;不利条件"
  },
  {
    "word": "drawer",
    "meaning": "n 抽屉"
  },
  {
    "word": "drawing",
    "meaning": "n 绘画;绘图"
  },
  {
    "word": "dream",
    "meaning": "n 梦;梦想 v.做梦"
  },
  {
    "word": "dress",
    "meaning": "n 服装 v.穿衣"
  },
  {
    "word": "drift",
    "meaning": "v 漂流;飘浮"
  },
  {
    "word": "drill",
    "meaning": "v 钻孔;训练 n.钻;训练"
  },
  {
    "word": "drink",
    "meaning": "v 喝;饮 n.饮料"
  },
  {
    "word": "drip",
    "meaning": "v 滴下;漏水 n.滴"
  },
  {
    "word": "drive",
    "meaning": "v 开车;驱动 n.驱动"
  },
  {
    "word": "driver",
    "meaning": "n 司机;驾驶员"
  },
  {
    "word": "drop",
    "meaning": "n 滴;下降 v.掉落"
  },
  {
    "word": "drought",
    "meaning": "n 干旱;旱灾"
  },
  {
    "word": "drown",
    "meaning": "v 淹没;溺死"
  },
  {
    "word": "drug",
    "meaning": "n 药;毒品"
  },
  {
    "word": "drum",
    "meaning": "n 鼓;桶"
  },
  {
    "word": "drunk",
    "meaning": "adj 醉的;陶醉的"
  },
  {
    "word": "dry",
    "meaning": "adj 干的;枯燥的 v.干"
  },
  {
    "word": "duck",
    "meaning": "n 鸭;鸭肉 v.躲避"
  },
  {
    "word": "due",
    "meaning": "adj 预期的;应支付的"
  },
  {
    "word": "dull",
    "meaning": "adj 枯燥的;不鲜明的"
  },
  {
    "word": "dumb",
    "meaning": "adj 哑的;无言的"
  },
  {
    "word": "dump",
    "meaning": "v 倾倒;倾卸"
  },
  {
    "word": "duplicate",
    "meaning": "n 副本 v.复制"
  },
  {
    "word": "durable",
    "meaning": "adj 耐用的;持久的"
  },
  {
    "word": "duration",
    "meaning": "n 持续;期间"
  },
  {
    "word": "dusk",
    "meaning": "n 黄昏;薄暮"
  },
  {
    "word": "dust",
    "meaning": "n 灰尘;尘土 v.掸灰"
  },
  {
    "word": "duty",
    "meaning": "n 责任;税"
  },
  {
    "word": "dwarf",
    "meaning": "n 矮子;矮星 v.使显得矮小"
  },
  {
    "word": "dwell",
    "meaning": "v 居住;细想"
  },
  {
    "word": "dweller",
    "meaning": "n 居民;居住者"
  },
  {
    "word": "dwelling",
    "meaning": "n 住宅;寓所"
  },
  {
    "word": "dying",
    "meaning": "adj 垂死的;临终的"
  },
  {
    "word": "dynamic",
    "meaning": "adj 动态的;有活力的"
  },
  {
    "word": "dynasty",
    "meaning": "n 王朝;朝代"
  },
  {
    "word": "each",
    "meaning": "adj 每一的 pron.每个"
  },
  {
    "word": "eager",
    "meaning": "adj 渴望的;热切的"
  },
  {
    "word": "eagle",
    "meaning": "n 鹰"
  },
  {
    "word": "ear",
    "meaning": "n 耳朵;听力"
  },
  {
    "word": "early",
    "meaning": "adj 早的 adv.早地"
  },
  {
    "word": "earn",
    "meaning": "v 赚得;赢得"
  },
  {
    "word": "earnest",
    "meaning": "adj 认真的;热心的"
  },
  {
    "word": "earnings",
    "meaning": "n 收入;收益"
  },
  {
    "word": "earth",
    "meaning": "n 地球;土地"
  },
  {
    "word": "earthenware",
    "meaning": "n 陶器"
  },
  {
    "word": "earthquake",
    "meaning": "n 地震"
  },
  {
    "word": "ease",
    "meaning": "n 容易;舒适 v.减轻"
  },
  {
    "word": "east",
    "meaning": "n 东;东方 adj.东方的"
  },
  {
    "word": "eastern",
    "meaning": "adj 东方的;东部的"
  },
  {
    "word": "easy",
    "meaning": "adj 容易的;舒适的"
  },
  {
    "word": "eat",
    "meaning": "v 吃;吃饭"
  },
  {
    "word": "eccentric",
    "meaning": "adj 古怪的;异乎寻常的"
  },
  {
    "word": "echo",
    "meaning": "n 回声;反响 v.发回声"
  },
  {
    "word": "eclipse",
    "meaning": "n 日蚀;月蚀"
  },
  {
    "word": "economic",
    "meaning": "adj 经济的;合算的"
  },
  {
    "word": "economical",
    "meaning": "adj 经济的;节约的"
  },
  {
    "word": "economics",
    "meaning": "n 经济学"
  },
  {
    "word": "economy",
    "meaning": "n 经济;节约"
  },
  {
    "word": "edge",
    "meaning": "n 边缘;刀口 v.使锐利"
  },
  {
    "word": "edible",
    "meaning": "adj 可食的;适宜食用的"
  },
  {
    "word": "edit",
    "meaning": "v 编辑;校订"
  },
  {
    "word": "edition",
    "meaning": "n 版;版本"
  },
  {
    "word": "editor",
    "meaning": "n 编辑;编者"
  },
  {
    "word": "educate",
    "meaning": "v 教育;培养"
  },
  {
    "word": "educated",
    "meaning": "adj 受过教育的;有教养的"
  },
  {
    "word": "education",
    "meaning": "n 教育;培养"
  },
  {
    "word": "educational",
    "meaning": "adj 教育的;有教育意义的"
  },
  {
    "word": "effect",
    "meaning": "n 效果;作用"
  },
  {
    "word": "effective",
    "meaning": "adj 有效的;实在的"
  },
  {
    "word": "effectively",
    "meaning": "adv 有效地;实际上"
  },
  {
    "word": "effects",
    "meaning": "n 个人财物;影响"
  },
  {
    "word": "efficiency",
    "meaning": "n 效率;效能"
  },
  {
    "word": "efficient",
    "meaning": "adj 高效的;能干的"
  },
  {
    "word": "effort",
    "meaning": "n 努力;尝试"
  },
  {
    "word": "effortless",
    "meaning": "adj 不费力的;不紧张的"
  },
  {
    "word": "ego",
    "meaning": "n 自我;自尊心"
  },
  {
    "word": "either",
    "meaning": "adj 任一的 adv.也"
  },
  {
    "word": "elaborate",
    "meaning": "v 详细说明 adj.详细的"
  },
  {
    "word": "elaborately",
    "meaning": "adv 精细地;复杂地"
  },
  {
    "word": "elaboration",
    "meaning": "n 详细说明;精心制作"
  },
  {
    "word": "elapse",
    "meaning": "v 流逝;过去"
  },
  {
    "word": "elastic",
    "meaning": "adj 弹性的 n.松紧带"
  },
  {
    "word": "elbow",
    "meaning": "n 肘;弯管"
  },
  {
    "word": "elder",
    "meaning": "adj 年龄较大的 n.长者"
  },
  {
    "word": "elderly",
    "meaning": "adj 较老的;老年的"
  },
  {
    "word": "elect",
    "meaning": "v 选举;选择"
  },
  {
    "word": "election",
    "meaning": "n 选举;选择权"
  },
  {
    "word": "electric",
    "meaning": "adj 电的;电动的"
  },
  {
    "word": "electrical",
    "meaning": "adj 电的;电器的"
  },
  {
    "word": "electricity",
    "meaning": "n 电;电能"
  },
  {
    "word": "electron",
    "meaning": "n 电子"
  },
  {
    "word": "electronic",
    "meaning": "adj 电子的"
  },
  {
    "word": "electronics",
    "meaning": "n 电子学"
  },
  {
    "word": "elegant",
    "meaning": "adj 优雅的;优美的"
  },
  {
    "word": "element",
    "meaning": "n 元素;成分"
  },
  {
    "word": "elementary",
    "meaning": "adj 基本的;初级的"
  },
  {
    "word": "elephant",
    "meaning": "n 象;大象"
  },
  {
    "word": "elevator",
    "meaning": "n 电梯;升降机"
  },
  {
    "word": "eleven",
    "meaning": "num 十一"
  },
  {
    "word": "eligible",
    "meaning": "adj 合格的;有资格的"
  },
  {
    "word": "eliminate",
    "meaning": "v 消除;排除"
  },
  {
    "word": "elite",
    "meaning": "n 精华;中坚分子"
  },
  {
    "word": "else",
    "meaning": "adv 别的;其他的"
  },
  {
    "word": "elsewhere",
    "meaning": "adv 在别处;向别处"
  },
  {
    "word": "e-mail",
    "meaning": "n 电子邮件"
  },
  {
    "word": "emanate",
    "meaning": "v 发出;散发"
  },
  {
    "word": "emancipate",
    "meaning": "v 解放;释放"
  },
  {
    "word": "emancipation",
    "meaning": "n 解放;释放"
  },
  {
    "word": "embankment",
    "meaning": "n 路堤;堤岸"
  },
  {
    "word": "embargo",
    "meaning": "n 禁运;禁令"
  },
  {
    "word": "embark",
    "meaning": "v 着手;登船"
  },
  {
    "word": "embarrass",
    "meaning": "v 使尴尬;使为难"
  },
  {
    "word": "embarrassment",
    "meaning": "n 尴尬;窘迫"
  },
  {
    "word": "embed",
    "meaning": "v 嵌入;深植"
  },
  {
    "word": "embody",
    "meaning": "v 体现;包含"
  },
  {
    "word": "embrace",
    "meaning": "v 拥抱;包含"
  },
  {
    "word": "emerge",
    "meaning": "v 出现;露头"
  },
  {
    "word": "emergency",
    "meaning": "n 紧急情况;紧急状态"
  },
  {
    "word": "emigrate",
    "meaning": "v 移民;移居"
  },
  {
    "word": "emigration",
    "meaning": "n 移民;移居"
  },
  {
    "word": "emission",
    "meaning": "n 发射;散发"
  },
  {
    "word": "emit",
    "meaning": "v 发出;散发"
  },
  {
    "word": "emperor",
    "meaning": "n 皇帝"
  },
  {
    "word": "emphasis",
    "meaning": "n 重点;强调"
  },
  {
    "word": "emphasize",
    "meaning": "v 强调;着重"
  },
  {
    "word": "empire",
    "meaning": "n 帝国;帝王统治的国家"
  },
  {
    "word": "empirical",
    "meaning": "adj 经验主义的;以观察或实验为基础的"
  },
  {
    "word": "employ",
    "meaning": "v 雇用;使用"
  },
  {
    "word": "employee",
    "meaning": "n 雇工;雇员"
  },
  {
    "word": "employer",
    "meaning": "n 雇主"
  },
  {
    "word": "employment",
    "meaning": "n 雇用;使用"
  },
  {
    "word": "empty",
    "meaning": "adj 空的 v.倒空"
  },
  {
    "word": "enable",
    "meaning": "v 使能够;使成为可能"
  },
  {
    "word": "enact",
    "meaning": "v 制定;扮演"
  },
  {
    "word": "enclosure",
    "meaning": "n 围住;围栏"
  },
  {
    "word": "encounter",
    "meaning": "v /n.遭遇;遇到"
  },
  {
    "word": "encourage",
    "meaning": "v 鼓励;激励"
  },
  {
    "word": "encouragement",
    "meaning": "n 鼓励;激励"
  },
  {
    "word": "encouraging",
    "meaning": "adj 鼓励的;激励的"
  },
  {
    "word": "end",
    "meaning": "n 末端;结束 v.结束"
  },
  {
    "word": "endanger",
    "meaning": "v 危及;危害"
  },
  {
    "word": "endeavor",
    "meaning": "n 努力;尽力 v.尽力"
  },
  {
    "word": "ending",
    "meaning": "n 结束;结尾"
  },
  {
    "word": "endless",
    "meaning": "adj 无止境的;无限的"
  },
  {
    "word": "endorse",
    "meaning": "v 背书;赞同"
  },
  {
    "word": "endorsement",
    "meaning": "n 背书;赞同"
  },
  {
    "word": "endure",
    "meaning": "v 忍受;持久"
  },
  {
    "word": "enemies",
    "meaning": "n 敌人;仇敌"
  },
  {
    "word": "enemy",
    "meaning": "n 敌人;仇敌"
  },
  {
    "word": "energetic",
    "meaning": "adj 精力旺盛的;积极的"
  },
  {
    "word": "energy",
    "meaning": "n 能量;精力"
  },
  {
    "word": "enforce",
    "meaning": "v 实施;强制"
  },
  {
    "word": "engage",
    "meaning": "v 雇;忙于"
  },
  {
    "word": "engaged",
    "meaning": "adj 忙碌的;订婚的"
  },
  {
    "word": "engagement",
    "meaning": "n 订婚;约定"
  },
  {
    "word": "engine",
    "meaning": "n 引擎;发动机"
  },
  {
    "word": "engineer",
    "meaning": "n 工程师;设计者"
  },
  {
    "word": "engineering",
    "meaning": "n 工程;工程学"
  },
  {
    "word": "enhance",
    "meaning": "v 提高;增加"
  },
  {
    "word": "enjoy",
    "meaning": "v 欣赏;享受"
  },
  {
    "word": "enjoyable",
    "meaning": "adj 愉快的;有趣的"
  },
  {
    "word": "enjoyment",
    "meaning": "n 享受;欣赏"
  },
  {
    "word": "enlarge",
    "meaning": "v 扩大;放大"
  },
  {
    "word": "enlargement",
    "meaning": "n 扩大;放大"
  },
  {
    "word": "enlighten",
    "meaning": "v 启发;启蒙"
  },
  {
    "word": "enormous",
    "meaning": "adj 巨大的;庞大的"
  },
  {
    "word": "enough",
    "meaning": "adj 足够的 adv.足够地"
  },
  {
    "word": "enquire",
    "meaning": "v 询问;调查"
  },
  {
    "word": "enrollment",
    "meaning": "n 登记;注册"
  },
  {
    "word": "ensure",
    "meaning": "v 保证;确保"
  },
  {
    "word": "entail",
    "meaning": "v 使成为必需;遗传"
  },
  {
    "word": "enter",
    "meaning": "v 进入;参加"
  },
  {
    "word": "enterprise",
    "meaning": "n 企业;事业心"
  },
  {
    "word": "entertainment",
    "meaning": "n 娱乐;款待"
  },
  {
    "word": "enthusiasm",
    "meaning": "n 热情;热心"
  },
  {
    "word": "enthusiastic",
    "meaning": "adj 热情的;热心的"
  },
  {
    "word": "entire",
    "meaning": "adj 整个的;全部的"
  },
  {
    "word": "entitle",
    "meaning": "v 给...权利;给...称号"
  },
  {
    "word": "entity",
    "meaning": "n 实体;存在"
  },
  {
    "word": "entrance",
    "meaning": "n 入口;进入"
  },
  {
    "word": "entrepreneur",
    "meaning": "n 企业家;中间商"
  },
  {
    "word": "entry",
    "meaning": "n 进入;入口"
  },
  {
    "word": "envelope",
    "meaning": "n 信封;封套"
  },
  {
    "word": "environment",
    "meaning": "n 环境;外界"
  },
  {
    "word": "environmental",
    "meaning": "adj 环境的"
  },
  {
    "word": "environmental",
    "meaning": "adj 环境的;有关环境的"
  },
  {
    "word": "envisage",
    "meaning": "v 正视;想象"
  },
  {
    "word": "enzyme",
    "meaning": "n 酶"
  },
  {
    "word": "epidemic",
    "meaning": "n 流行病;传染病"
  },
  {
    "word": "episode",
    "meaning": "n 事件;插曲"
  },
  {
    "word": "epoch",
    "meaning": "n 纪元;时期"
  },
  {
    "word": "equal",
    "meaning": "adj 相等的;平等的 n.同等的人 v.等于"
  },
  {
    "word": "equality",
    "meaning": "n 平等;同等"
  },
  {
    "word": "equation",
    "meaning": "n 方程式;等式"
  },
  {
    "word": "equator",
    "meaning": "n 赤道"
  },
  {
    "word": "equip",
    "meaning": "v 装备;配备"
  },
  {
    "word": "equipment",
    "meaning": "n 装备;设备"
  },
  {
    "word": "equivalent",
    "meaning": "adj 相等的 n.等价物"
  },
  {
    "word": "era",
    "meaning": "n 时代;纪元"
  },
  {
    "word": "erase",
    "meaning": "v 擦掉;抹去"
  },
  {
    "word": "erode",
    "meaning": "v 腐蚀;侵蚀"
  },
  {
    "word": "erosion",
    "meaning": "n 腐蚀;侵蚀"
  },
  {
    "word": "erroneous",
    "meaning": "adj 错误的;不正确的"
  },
  {
    "word": "error",
    "meaning": "n 错误;误差"
  },
  {
    "word": "erupt",
    "meaning": "v 爆发;喷发"
  },
  {
    "word": "escalate",
    "meaning": "v 使升级;扩大"
  },
  {
    "word": "escape",
    "meaning": "v 逃跑;逸出 n.逃跑"
  },
  {
    "word": "especially",
    "meaning": "adv 特别;尤其"
  },
  {
    "word": "essay",
    "meaning": "n 文章;散文"
  },
  {
    "word": "essence",
    "meaning": "n 本质;实质"
  },
  {
    "word": "essential",
    "meaning": "adj 必要的;本质的"
  },
  {
    "word": "essentially",
    "meaning": "adv 本质上;基本上"
  },
  {
    "word": "establish",
    "meaning": "v 建立;设立"
  },
  {
    "word": "establishment",
    "meaning": "n 建立;公司"
  },
  {
    "word": "estate",
    "meaning": "n 财产;庄园"
  },
  {
    "word": "esteem",
    "meaning": "n 尊重;敬重 v.尊敬"
  },
  {
    "word": "estimate",
    "meaning": "n 估计 v.估计"
  },
  {
    "word": "eternal",
    "meaning": "adj 永恒的;永世的"
  },
  {
    "word": "ethics",
    "meaning": "n 伦理学;道德标准"
  },
  {
    "word": "ethnic",
    "meaning": "adj 种族的;民族的"
  },
  {
    "word": "evidence",
    "meaning": "n 证据;迹象"
  },
  {
    "word": "evident",
    "meaning": "adj 明显的;明白的"
  },
  {
    "word": "evidently",
    "meaning": "adv 显然;明显地"
  },
  {
    "word": "evil",
    "meaning": "adj 邪恶的 n.邪恶;坏事"
  },
  {
    "word": "evolution",
    "meaning": "n 演变;进化"
  },
  {
    "word": "evolve",
    "meaning": "v 发展;进化"
  },
  {
    "word": "exact",
    "meaning": "adj 精确的;确切的"
  },
  {
    "word": "exactly",
    "meaning": "adv 恰好;精确地"
  },
  {
    "word": "exaggerate",
    "meaning": "v 夸大;夸张"
  },
  {
    "word": "exam",
    "meaning": "n 考试;测试"
  },
  {
    "word": "examination",
    "meaning": "n 检查;考试"
  },
  {
    "word": "examine",
    "meaning": "v 检查;考试"
  },
  {
    "word": "example",
    "meaning": "n 例子;榜样"
  },
  {
    "word": "exceed",
    "meaning": "v 超过;超越"
  },
  {
    "word": "exceedingly",
    "meaning": "adv 非常;极其"
  },
  {
    "word": "excel",
    "meaning": "v 擅长;胜过"
  },
  {
    "word": "excellence",
    "meaning": "n 优秀;卓越"
  },
  {
    "word": "excellent",
    "meaning": "adj 优秀的;卓越的"
  },
  {
    "word": "except",
    "meaning": "prep 除...之外"
  },
  {
    "word": "exception",
    "meaning": "n 例外;异议"
  },
  {
    "word": "exceptional",
    "meaning": "adj 异常的;例外的"
  },
  {
    "word": "excess",
    "meaning": "n 超过;过量 adj.过量的"
  },
  {
    "word": "excessive",
    "meaning": "adj 过多的;过分的"
  },
  {
    "word": "exchange",
    "meaning": "n /v.交换;交流"
  },
  {
    "word": "excite",
    "meaning": "v 使兴奋;激发"
  },
  {
    "word": "excited",
    "meaning": "adj 兴奋的;激动的"
  },
  {
    "word": "excitement",
    "meaning": "n 兴奋;刺激"
  },
  {
    "word": "exciting",
    "meaning": "adj 令人兴奋的"
  },
  {
    "word": "exclaim",
    "meaning": "v 呼喊;惊叫"
  },
  {
    "word": "exclude",
    "meaning": "v 排除;排斥"
  },
  {
    "word": "exclusion",
    "meaning": "n 排除;排斥"
  },
  {
    "word": "exclusive",
    "meaning": "adj 独有的;排他的"
  },
  {
    "word": "exclusively",
    "meaning": "adv 专门地;独占地"
  },
  {
    "word": "excursion",
    "meaning": "n 远足;短途旅行"
  },
  {
    "word": "excuse",
    "meaning": "n 借口 v.原谅"
  },
  {
    "word": "execute",
    "meaning": "v 执行;处决"
  },
  {
    "word": "execution",
    "meaning": "n 实行;执行"
  },
  {
    "word": "executive",
    "meaning": "n 行政官;经理 adj.行政的"
  },
  {
    "word": "exemplify",
    "meaning": "v 是...的典型"
  },
  {
    "word": "exempt",
    "meaning": "adj 免除的 v.免除"
  },
  {
    "word": "exemption",
    "meaning": "n 免除;豁免"
  },
  {
    "word": "exercise",
    "meaning": "n 练习;运动 v.练习"
  },
  {
    "word": "exert",
    "meaning": "v 运用;施加"
  },
  {
    "word": "exhale",
    "meaning": "v 呼气;发出"
  },
  {
    "word": "exhaust",
    "meaning": "v 使筋疲力尽 n.排气"
  },
  {
    "word": "exhibition",
    "meaning": "n 展览;展览会"
  },
  {
    "word": "exile",
    "meaning": "n 流放;被流放者"
  },
  {
    "word": "exist",
    "meaning": "v 存在;生存"
  },
  {
    "word": "existence",
    "meaning": "n 存在;生存"
  },
  {
    "word": "exit",
    "meaning": "n 出口;退出 v.退出"
  },
  {
    "word": "exotic",
    "meaning": "adj 异国的;外来的"
  },
  {
    "word": "expand",
    "meaning": "v 扩大;扩张"
  },
  {
    "word": "expansion",
    "meaning": "n 扩大;扩张"
  },
  {
    "word": "expect",
    "meaning": "v 预料;预期"
  },
  {
    "word": "expectation",
    "meaning": "n 预期;期望"
  },
  {
    "word": "expected",
    "meaning": "adj 预期的;预料的"
  },
  {
    "word": "expedition",
    "meaning": "n 远征;探险队"
  },
  {
    "word": "expeditious",
    "meaning": "adj 迅速的;敏捷的"
  },
  {
    "word": "expel",
    "meaning": "v 驱逐;开除"
  },
  {
    "word": "expenditure",
    "meaning": "n 支出;消费"
  },
  {
    "word": "expense",
    "meaning": "n 损失;代价"
  },
  {
    "word": "expenses",
    "meaning": "n 开支;花费"
  },
  {
    "word": "expensive",
    "meaning": "adj 昂贵的"
  },
  {
    "word": "experience",
    "meaning": "n 经验;经历 v.经历"
  },
  {
    "word": "experiment",
    "meaning": "n 实验 v.尝试"
  },
  {
    "word": "experimental",
    "meaning": "adj 实验的;尝试的"
  },
  {
    "word": "expert",
    "meaning": "n 专家;行家 adj.熟练的"
  },
  {
    "word": "expertise",
    "meaning": "n 专家知识;专门技能"
  },
  {
    "word": "expiration",
    "meaning": "n 期满;呼气"
  },
  {
    "word": "expire",
    "meaning": "v 期满;终止"
  },
  {
    "word": "explain",
    "meaning": "v 解释;说明"
  },
  {
    "word": "explanation",
    "meaning": "n 解释;说明"
  },
  {
    "word": "explicit",
    "meaning": "adj 明确的;直率的"
  },
  {
    "word": "explode",
    "meaning": "v 爆炸;爆发"
  },
  {
    "word": "exploit",
    "meaning": "v 开发;剥削"
  },
  {
    "word": "exploration",
    "meaning": "n 探索;探测"
  },
  {
    "word": "explore",
    "meaning": "v 探索;探测"
  },
  {
    "word": "explosion",
    "meaning": "n 爆炸;爆发"
  },
  {
    "word": "explosive",
    "meaning": "adj 爆炸的 n.爆炸物"
  },
  {
    "word": "export",
    "meaning": "n 输出;出口 v.输出"
  },
  {
    "word": "exporter",
    "meaning": "n 出口商"
  },
  {
    "word": "expose",
    "meaning": "v 暴露;曝光"
  },
  {
    "word": "exposition",
    "meaning": "n 展览会;解释"
  },
  {
    "word": "exposure",
    "meaning": "n 暴露;曝光"
  },
  {
    "word": "express",
    "meaning": "v 表达;快递 adj.特快的"
  },
  {
    "word": "expression",
    "meaning": "n 表达;表情"
  },
  {
    "word": "extend",
    "meaning": "v 延长;扩展"
  },
  {
    "word": "extension",
    "meaning": "n 延长;扩展"
  },
  {
    "word": "extensive",
    "meaning": "adj 广泛的;广阔的"
  },
  {
    "word": "extent",
    "meaning": "n 程度;范围"
  },
  {
    "word": "exterior",
    "meaning": "n 外部;外表 adj.外部的"
  },
  {
    "word": "external",
    "meaning": "adj 外部的;外面的"
  },
  {
    "word": "extinct",
    "meaning": "adj 灭绝的;熄灭的"
  },
  {
    "word": "extinction",
    "meaning": "n 灭绝;消失"
  },
  {
    "word": "extra",
    "meaning": "adj 额外的 adv.额外"
  },
  {
    "word": "extract",
    "meaning": "v 提取;提炼 n.提取物"
  },
  {
    "word": "extraction",
    "meaning": "n 提取;提炼"
  },
  {
    "word": "extraordinary",
    "meaning": "adj 非凡的;特别的"
  },
  {
    "word": "extreme",
    "meaning": "adj 极端的 n.极端"
  },
  {
    "word": "eye",
    "meaning": "n 眼睛;眼光"
  },
  {
    "word": "eyebrow",
    "meaning": "n 眉毛"
  },
  {
    "word": "eyesight",
    "meaning": "n 视力;视觉"
  },
  {
    "word": "fabric",
    "meaning": "n 织物;布"
  },
  {
    "word": "fabricate",
    "meaning": "v 制造;伪造"
  },
  {
    "word": "fabrication",
    "meaning": "n 制造;伪造"
  },
  {
    "word": "fabulous",
    "meaning": "adj 难以置信的;传说中的"
  },
  {
    "word": "face",
    "meaning": "n 脸;表面 v.面对"
  },
  {
    "word": "face-to-face",
    "meaning": "adj 面对面的 adv.面对面地"
  },
  {
    "word": "facility",
    "meaning": "n 设备;容易"
  },
  {
    "word": "fact",
    "meaning": "n 事实;实际"
  },
  {
    "word": "factor",
    "meaning": "n 因素;要素"
  },
  {
    "word": "factory",
    "meaning": "n 工厂;制造厂"
  },
  {
    "word": "faculty",
    "meaning": "n 能力;系;全体教员"
  },
  {
    "word": "fade",
    "meaning": "v 褪色;凋谢"
  },
  {
    "word": "fail",
    "meaning": "v 失败;不及格"
  },
  {
    "word": "failure",
    "meaning": "n 失败;失败的人"
  },
  {
    "word": "faint",
    "meaning": "adj 微弱的;不清楚的"
  },
  {
    "word": "fair",
    "meaning": "adj 公平的;白皙的"
  },
  {
    "word": "fairly",
    "meaning": "adv 公平地;相当地"
  },
  {
    "word": "fairy",
    "meaning": "n 小仙女;小精灵"
  },
  {
    "word": "faith",
    "meaning": "n 信任;信仰"
  },
  {
    "word": "faithful",
    "meaning": "adj 忠实的;如实的"
  },
  {
    "word": "faithfully",
    "meaning": "adv 忠实地;如实地"
  },
  {
    "word": "fake",
    "meaning": "n 假货;赝品 adj.假的"
  },
  {
    "word": "fall",
    "meaning": "v 落下;跌倒 n.秋天"
  },
  {
    "word": "fallen",
    "meaning": "adj 倒下的;堕落的"
  },
  {
    "word": "fame",
    "meaning": "n 名声;名望"
  },
  {
    "word": "familiar",
    "meaning": "adj 熟悉的;亲近的"
  },
  {
    "word": "family",
    "meaning": "n 家庭;家族"
  },
  {
    "word": "famine",
    "meaning": "n 饥荒;饥饿"
  },
  {
    "word": "famous",
    "meaning": "adj 著名的;出名的"
  },
  {
    "word": "fan",
    "meaning": "n 扇子;风扇;狂热爱好者"
  },
  {
    "word": "fancy",
    "meaning": "n 爱好;幻想 v.幻想"
  },
  {
    "word": "fantastic",
    "meaning": "adj 奇异的;极好的"
  },
  {
    "word": "far",
    "meaning": "adj 远的 adv.远地"
  },
  {
    "word": "fare",
    "meaning": "n 费用;进展"
  },
  {
    "word": "farm",
    "meaning": "n 农场;农庄"
  },
  {
    "word": "farmer",
    "meaning": "n 农民"
  },
  {
    "word": "fascinate",
    "meaning": "v 使着迷;使神魂颠倒"
  },
  {
    "word": "fashion",
    "meaning": "n 流行式样;风尚"
  },
  {
    "word": "fashionable",
    "meaning": "adj 流行的;时髦的"
  },
  {
    "word": "fast",
    "meaning": "adj 快的 adv.快地"
  },
  {
    "word": "fasten",
    "meaning": "v 扎牢;扣紧"
  },
  {
    "word": "fat",
    "meaning": "n 脂肪;肥肉 adj.胖的"
  },
  {
    "word": "fatal",
    "meaning": "adj 致命的;重大的"
  },
  {
    "word": "fate",
    "meaning": "n 命运;天数"
  },
  {
    "word": "father",
    "meaning": "n 父亲;神父"
  },
  {
    "word": "fatigue",
    "meaning": "n 疲劳;劳累"
  },
  {
    "word": "fault",
    "meaning": "n 错误;缺点"
  },
  {
    "word": "faulty",
    "meaning": "adj 有错误的;不完美的"
  },
  {
    "word": "favor",
    "meaning": "n 恩惠;喜爱 v.赞成"
  },
  {
    "word": "favorable",
    "meaning": "adj 有利的;赞成的"
  },
  {
    "word": "favorite",
    "meaning": "adj 特别受喜爱的 n.最喜爱的人或物"
  },
  {
    "word": "favorably",
    "meaning": "adv 顺利地;有利地"
  },
  {
    "word": "fawn",
    "meaning": "n 未满周岁的小鹿 v.奉承"
  },
  {
    "word": "fax",
    "meaning": "n 传真 v.传真"
  },
  {
    "word": "fear",
    "meaning": "n 害怕;恐惧 v.害怕"
  },
  {
    "word": "fearful",
    "meaning": "adj 可怕的;害怕的"
  },
  {
    "word": "feasible",
    "meaning": "adj 可行的;可能的"
  },
  {
    "word": "feast",
    "meaning": "n 宴会;节日"
  },
  {
    "word": "feat",
    "meaning": "n 功绩;壮举"
  },
  {
    "word": "feather",
    "meaning": "n 羽毛;翎毛"
  },
  {
    "word": "feature",
    "meaning": "n 特征;特色 v.以...为特色"
  },
  {
    "word": "February",
    "meaning": "n 二月"
  },
  {
    "word": "federal",
    "meaning": "adj 联邦的;联盟的"
  },
  {
    "word": "federation",
    "meaning": "n 联盟;联合"
  },
  {
    "word": "fee",
    "meaning": "n 费;赏金"
  },
  {
    "word": "feed",
    "meaning": "v 喂;喂养"
  },
  {
    "word": "feedback",
    "meaning": "n 反馈;反响"
  },
  {
    "word": "feel",
    "meaning": "v 感觉;认为"
  },
  {
    "word": "feeling",
    "meaning": "n 感情;感觉"
  },
  {
    "word": "fellow",
    "meaning": "n 男子;同伴"
  },
  {
    "word": "fellowship",
    "meaning": "n 友情;奖学金"
  },
  {
    "word": "female",
    "meaning": "adj 女性的;雌性的 n.女性"
  },
  {
    "word": "feminine",
    "meaning": "adj 女性的;女子的"
  },
  {
    "word": "fence",
    "meaning": "n 栅栏;围栏"
  },
  {
    "word": "fertile",
    "meaning": "adj 肥沃的;多产的"
  },
  {
    "word": "fertilizer",
    "meaning": "n 肥料"
  },
  {
    "word": "festival",
    "meaning": "n 节日;音乐节"
  },
  {
    "word": "fetch",
    "meaning": "v 取来;带来"
  },
  {
    "word": "fever",
    "meaning": "n 发烧;狂热"
  },
  {
    "word": "few",
    "meaning": "adj 不多的;少数的"
  },
  {
    "word": "fewer",
    "meaning": "adj 较少的"
  },
  {
    "word": "fiber",
    "meaning": "n 纤维;纤维质"
  },
  {
    "word": "fiction",
    "meaning": "n 小说;虚构"
  },
  {
    "word": "field",
    "meaning": "n 田地;领域"
  },
  {
    "word": "fierce",
    "meaning": "adj 猛烈的;凶猛的"
  },
  {
    "word": "fight",
    "meaning": "v /n.打斗;争论"
  },
  {
    "word": "figure",
    "meaning": "n 数字;人物 v.计算;出现"
  },
  {
    "word": "file",
    "meaning": "n 文件;档案 v.归档"
  },
  {
    "word": "fill",
    "meaning": "v 填满;充满"
  },
  {
    "word": "film",
    "meaning": "n 电影;胶卷 v.拍摄"
  },
  {
    "word": "filter",
    "meaning": "n 过滤器;滤纸 v.过滤"
  },
  {
    "word": "final",
    "meaning": "adj 最终的;决定性的 n.决赛"
  },
  {
    "word": "finally",
    "meaning": "adv 最后;终于"
  },
  {
    "word": "finance",
    "meaning": "n 财政;金融 v.资助"
  },
  {
    "word": "financial",
    "meaning": "adj 财政的;金融的"
  },
  {
    "word": "find",
    "meaning": "v 找到;发现"
  },
  {
    "word": "finding",
    "meaning": "n 发现;调查结果"
  },
  {
    "word": "fine",
    "meaning": "adj 细的;美好的 n.罚款"
  },
  {
    "word": "finger",
    "meaning": "n 手指;指针"
  },
  {
    "word": "finish",
    "meaning": "v 完成;结束 n.结束"
  },
  {
    "word": "finite",
    "meaning": "adj 有限的;限定的"
  },
  {
    "word": "fire",
    "meaning": "n 火;火灾 v.开火;解雇"
  },
  {
    "word": "fireman",
    "meaning": "n 消防员"
  },
  {
    "word": "firm",
    "meaning": "adj 坚定的 n.商行;公司"
  },
  {
    "word": "firmly",
    "meaning": "adv 牢牢地;坚定地"
  },
  {
    "word": "first",
    "meaning": "adj 第一的 adv.首先 n.第一"
  },
  {
    "word": "fish",
    "meaning": "n 鱼;鱼肉 v.钓鱼"
  },
  {
    "word": "fisherman",
    "meaning": "n 渔夫;捕鱼人"
  },
  {
    "word": "fist",
    "meaning": "n 拳;拳头"
  },
  {
    "word": "fit",
    "meaning": "adj 合适的 v.适合;安装"
  },
  {
    "word": "fitness",
    "meaning": "n 健康;适合"
  },
  {
    "word": "fix",
    "meaning": "v 固定;修理"
  },
  {
    "word": "fixed",
    "meaning": "adj 固定的;不变的"
  },
  {
    "word": "fixture",
    "meaning": "n 固定装置;设备"
  },
  {
    "word": "flag",
    "meaning": "n 旗;标志 v.衰退;枯萎"
  },
  {
    "word": "flame",
    "meaning": "n 火焰;光辉"
  },
  {
    "word": "flap",
    "meaning": "n 垂下物;振翼"
  },
  {
    "word": "flare",
    "meaning": "n 闪光;火焰 v.闪光"
  },
  {
    "word": "flash",
    "meaning": "n 闪光 v.闪;反射"
  },
  {
    "word": "flat",
    "meaning": "adj 平坦的 n.一套房间"
  },
  {
    "word": "flatten",
    "meaning": "v 使平坦;压平"
  },
  {
    "word": "flavor",
    "meaning": "n 味;风味"
  },
  {
    "word": "fleet",
    "meaning": "n 舰队;一群"
  },
  {
    "word": "flesh",
    "meaning": "n 肉;肉体"
  },
  {
    "word": "flexibility",
    "meaning": "n 灵活性;柔韧性"
  },
  {
    "word": "flexible",
    "meaning": "adj 灵活的;可弯曲的"
  },
  {
    "word": "flick",
    "meaning": "n 轻打 v.轻弹;轻击"
  },
  {
    "word": "flight",
    "meaning": "n 飞行;航班"
  },
  {
    "word": "fling",
    "meaning": "v 扔;抛"
  },
  {
    "word": "float",
    "meaning": "v 浮动;漂浮"
  },
  {
    "word": "flock",
    "meaning": "n 羊群;鸟群"
  },
  {
    "word": "flood",
    "meaning": "n 洪水 v.淹没"
  },
  {
    "word": "floor",
    "meaning": "n 地板;楼层"
  },
  {
    "word": "flour",
    "meaning": "n 面粉;粉状物质"
  },
  {
    "word": "flow",
    "meaning": "v 流动;流淌"
  },
  {
    "word": "flower",
    "meaning": "n 花;开花"
  },
  {
    "word": "flu",
    "meaning": "n 流感"
  },
  {
    "word": "fluctuate",
    "meaning": "v 波动;变化"
  },
  {
    "word": "fluent",
    "meaning": "adj 流利的;流畅的"
  },
  {
    "word": "fluid",
    "meaning": "n 流体;液体 adj.流动的"
  },
  {
    "word": "flush",
    "meaning": "v 冲洗 n.脸红"
  },
  {
    "word": "flutter",
    "meaning": "v /n.振翼;飘动"
  },
  {
    "word": "fly",
    "meaning": "n 苍蝇 v.飞;飞行"
  },
  {
    "word": "focus",
    "meaning": "v /n.集中;焦点"
  },
  {
    "word": "fog",
    "meaning": "n 雾;雾状物"
  },
  {
    "word": "fold",
    "meaning": "v 折叠;合抱"
  },
  {
    "word": "folder",
    "meaning": "n 文件夹;纸夹"
  },
  {
    "word": "folk",
    "meaning": "n 人们;家属"
  },
  {
    "word": "follow",
    "meaning": "v 跟随;遵循"
  },
  {
    "word": "following",
    "meaning": "adj 接着的 n.追随者"
  },
  {
    "word": "fond",
    "meaning": "adj 喜爱的;温柔的"
  },
  {
    "word": "food",
    "meaning": "n 食物;食品"
  },
  {
    "word": "fool",
    "meaning": "n 傻瓜 v.欺骗"
  },
  {
    "word": "foolish",
    "meaning": "adj 愚蠢的;荒谬的"
  },
  {
    "word": "foot",
    "meaning": "n 足;英尺"
  },
  {
    "word": "football",
    "meaning": "n 足球;橄榄球"
  },
  {
    "word": "footstep",
    "meaning": "n 脚步;足迹"
  },
  {
    "word": "for",
    "meaning": "prep 为了;因为 conj.因为"
  },
  {
    "word": "forbid",
    "meaning": "v 禁止;不许"
  },
  {
    "word": "force",
    "meaning": "n 力量 v.强迫"
  },
  {
    "word": "forecast",
    "meaning": "v /n.预测;预报"
  },
  {
    "word": "forehead",
    "meaning": "n 前额;头的前部分"
  },
  {
    "word": "foreign",
    "meaning": "adj 外国的;外来的"
  },
  {
    "word": "foreigner",
    "meaning": "n 外国人"
  },
  {
    "word": "forest",
    "meaning": "n 森林;森林地带"
  },
  {
    "word": "forever",
    "meaning": "adv 永远;长久地"
  },
  {
    "word": "forge",
    "meaning": "v 锻造;伪造"
  },
  {
    "word": "forget",
    "meaning": "v 忘记;遗忘"
  },
  {
    "word": "forgive",
    "meaning": "v 原谅;宽恕"
  },
  {
    "word": "fork",
    "meaning": "n 叉;餐叉"
  },
  {
    "word": "form",
    "meaning": "n 形式 v.形成"
  },
  {
    "word": "formal",
    "meaning": "adj 正式的;形式上的"
  },
  {
    "word": "format",
    "meaning": "n 格式 v.格式化"
  },
  {
    "word": "formation",
    "meaning": "n 形成;构造"
  },
  {
    "word": "former",
    "meaning": "adj 以前的 n.前者"
  },
  {
    "word": "formula",
    "meaning": "n 公式;规则"
  },
  {
    "word": "formulate",
    "meaning": "v 制定;规划"
  },
  {
    "word": "fort",
    "meaning": "n 要塞;堡垒"
  },
  {
    "word": "fortnight",
    "meaning": "n 两星期;十四天"
  },
  {
    "word": "fortunate",
    "meaning": "adj 幸运的;吉祥的"
  },
  {
    "word": "fortunately",
    "meaning": "adv 幸运地;幸亏"
  },
  {
    "word": "fortune",
    "meaning": "n 财产;运气"
  },
  {
    "word": "forty",
    "meaning": "num 四十"
  },
  {
    "word": "forum",
    "meaning": "n 论坛;讨论会"
  },
  {
    "word": "forward",
    "meaning": "adv 向前 v.转递"
  },
  {
    "word": "fossil",
    "meaning": "n 化石;僵化的事物"
  },
  {
    "word": "foster",
    "meaning": "v 促进;培养"
  },
  {
    "word": "foul",
    "meaning": "adj 肮脏的;邪恶的"
  },
  {
    "word": "found",
    "meaning": "v 创立;建立"
  },
  {
    "word": "foundation",
    "meaning": "n 基础;基金会"
  },
  {
    "word": "fountain",
    "meaning": "n 喷泉;源泉"
  },
  {
    "word": "four",
    "meaning": "num 四"
  },
  {
    "word": "fourteen",
    "meaning": "num 十四"
  },
  {
    "word": "fourth",
    "meaning": "num 第四"
  },
  {
    "word": "fox",
    "meaning": "n 狐狸;狡猾的人"
  },
  {
    "word": "fraction",
    "meaning": "n 分数;部分"
  },
  {
    "word": "fracture",
    "meaning": "n 骨折 v.破裂"
  },
  {
    "word": "fragile",
    "meaning": "adj 易碎的;脆弱的"
  },
  {
    "word": "fragment",
    "meaning": "n 碎片;片段"
  },
  {
    "word": "fragrance",
    "meaning": "n 香味;芬芳"
  },
  {
    "word": "frame",
    "meaning": "n 框架;体格 v.给...镶框"
  },
  {
    "word": "framework",
    "meaning": "n 构架;框架"
  },
  {
    "word": "franchise",
    "meaning": "n 特权;公民权"
  },
  {
    "word": "frank",
    "meaning": "adj 坦率的;直率的"
  },
  {
    "word": "frankly",
    "meaning": "adv 坦率地;真诚地"
  },
  {
    "word": "fraud",
    "meaning": "n 欺诈;骗子"
  },
  {
    "word": "free",
    "meaning": "adj 自由的 v.释放"
  },
  {
    "word": "freedom",
    "meaning": "n 自由;自主"
  },
  {
    "word": "freely",
    "meaning": "adv 自由地;慷慨地"
  },
  {
    "word": "freeze",
    "meaning": "v 结冰;冷冻"
  },
  {
    "word": "freezing",
    "meaning": "adj 冻结的;冷冻的"
  },
  {
    "word": "freight",
    "meaning": "n 货物;货运"
  },
  {
    "word": "frequency",
    "meaning": "n 频率;频繁"
  },
  {
    "word": "frequent",
    "meaning": "adj 频繁的 v.常往"
  },
  {
    "word": "frequently",
    "meaning": "adv 频繁地;经常"
  },
  {
    "word": "fresh",
    "meaning": "adj 新鲜的;无经验的"
  },
  {
    "word": "friction",
    "meaning": "n 摩擦;摩擦力"
  },
  {
    "word": "fridge",
    "meaning": "n 电冰箱"
  },
  {
    "word": "friend",
    "meaning": "n 朋友;友人"
  },
  {
    "word": "friendly",
    "meaning": "adj 友好的;友谊的"
  },
  {
    "word": "friendship",
    "meaning": "n 友情;友谊"
  },
  {
    "word": "frighten",
    "meaning": "v 使惊恐;吓唬"
  },
  {
    "word": "frightened",
    "meaning": "adj 受惊的;害怕的"
  },
  {
    "word": "frightening",
    "meaning": "adj 令人恐惧的"
  },
  {
    "word": "frog",
    "meaning": "n 青蛙"
  },
  {
    "word": "from",
    "meaning": "prep 从;来自"
  },
  {
    "word": "front",
    "meaning": "adj 前面的 n.前面"
  },
  {
    "word": "frontier",
    "meaning": "n 前沿;边境"
  },
  {
    "word": "frost",
    "meaning": "n 霜;霜冻"
  },
  {
    "word": "frown",
    "meaning": "v 皱眉;蹙额"
  },
  {
    "word": "fruit",
    "meaning": "n 水果;果实"
  },
  {
    "word": "fruitful",
    "meaning": "adj 多产的;有成果的"
  },
  {
    "word": "frustrate",
    "meaning": "v 挫败;使沮丧"
  },
  {
    "word": "frustration",
    "meaning": "n 挫折;挫败"
  },
  {
    "word": "fuel",
    "meaning": "n 燃料 v.供燃料"
  },
  {
    "word": "fulfill",
    "meaning": "v 履行;满足"
  },
  {
    "word": "fulfillment",
    "meaning": "n 履行;满足"
  },
  {
    "word": "full",
    "meaning": "adj 满的;完全的"
  },
  {
    "word": "fully",
    "meaning": "adv 完全地;充分地"
  },
  {
    "word": "fume",
    "meaning": "n 烟雾;气味 v.冒烟"
  },
  {
    "word": "fun",
    "meaning": "n 乐趣;娱乐"
  },
  {
    "word": "function",
    "meaning": "n 功能;职务 v.运行"
  },
  {
    "word": "functional",
    "meaning": "adj 功能的;实用的"
  },
  {
    "word": "fund",
    "meaning": "n 基金;资金 v.投资"
  },
  {
    "word": "fundamental",
    "meaning": "adj 基本的;重要的"
  },
  {
    "word": "fundamentally",
    "meaning": "adv 根本上;基本上"
  },
  {
    "word": "funeral",
    "meaning": "n 葬礼;出殡"
  },
  {
    "word": "funny",
    "meaning": "adj 有趣的;滑稽的"
  },
  {
    "word": "fur",
    "meaning": "n 软毛;毛皮"
  },
  {
    "word": "furious",
    "meaning": "adj 狂怒的;狂暴的"
  },
  {
    "word": "furnace",
    "meaning": "n 炉子;熔炉"
  },
  {
    "word": "furnish",
    "meaning": "v 供应;装备"
  },
  {
    "word": "furniture",
    "meaning": "n 家具;装置"
  },
  {
    "word": "further",
    "meaning": "adv 更远地 adj.更远的"
  },
  {
    "word": "furthermore",
    "meaning": "adv 而且;此外"
  },
  {
    "word": "fuse",
    "meaning": "n 保险丝 v.熔化"
  },
  {
    "word": "fusion",
    "meaning": "n 熔合;结合"
  },
  {
    "word": "futile",
    "meaning": "adj 无效的;无用的"
  },
  {
    "word": "future",
    "meaning": "n 将来;前途"
  },
  {
    "word": "fuzzy",
    "meaning": "adj 模糊的;不清楚的"
  },
  {
    "word": "gadget",
    "meaning": "n 小工具;小机械"
  },
  {
    "word": "gain",
    "meaning": "v 获得;增加 n.增加;利润"
  },
  {
    "word": "gal",
    "meaning": "n 女孩;少女"
  },
  {
    "word": "galaxy",
    "meaning": "n 银河;星系;一群杰出的人"
  },
  {
    "word": "gale",
    "meaning": "n 强风;狂风"
  },
  {
    "word": "gallon",
    "meaning": "n 加仑"
  },
  {
    "word": "gallop",
    "meaning": "v /n.奔驰;飞驰"
  },
  {
    "word": "gamble",
    "meaning": "v 赌博;冒险 n.赌博"
  },
  {
    "word": "game",
    "meaning": "n 游戏;比赛"
  },
  {
    "word": "gang",
    "meaning": "n 一帮;一群"
  },
  {
    "word": "gap",
    "meaning": "n 缺口;差距"
  },
  {
    "word": "garage",
    "meaning": "n 车库;汽车修理厂"
  },
  {
    "word": "garbage",
    "meaning": "n 垃圾;废物"
  },
  {
    "word": "garden",
    "meaning": "n 花园;园林"
  },
  {
    "word": "garlic",
    "meaning": "n 大蒜"
  },
  {
    "word": "garment",
    "meaning": "n 衣服;服装"
  },
  {
    "word": "gas",
    "meaning": "n 煤气;气体"
  },
  {
    "word": "gaseous",
    "meaning": "adj 气体的;气态的"
  },
  {
    "word": "gasoline",
    "meaning": "n 汽油"
  },
  {
    "word": "gasp",
    "meaning": "v 喘气;气喘"
  },
  {
    "word": "gate",
    "meaning": "n 大门;闸门"
  },
  {
    "word": "gather",
    "meaning": "v 收集;聚集"
  },
  {
    "word": "gathering",
    "meaning": "n 聚集;集会"
  },
  {
    "word": "gauge",
    "meaning": "n 标准;测量仪 v.测量"
  },
  {
    "word": "gaunt",
    "meaning": "adj 憔悴的;荒凉的"
  },
  {
    "word": "gaze",
    "meaning": "v /n.凝视;注视"
  },
  {
    "word": "gear",
    "meaning": "n 齿轮;工具 v.调整"
  },
  {
    "word": "gender",
    "meaning": "n 性别;种类"
  },
  {
    "word": "gene",
    "meaning": "n 基因;因子"
  },
  {
    "word": "general",
    "meaning": "adj 一般的 n.将军"
  },
  {
    "word": "generalize",
    "meaning": "v 概括;推广"
  },
  {
    "word": "generally",
    "meaning": "adv 一般地;通常地"
  },
  {
    "word": "generate",
    "meaning": "v 产生;生成"
  },
  {
    "word": "generation",
    "meaning": "n 一代;产生"
  },
  {
    "word": "generator",
    "meaning": "n 发电机;发电机"
  },
  {
    "word": "generous",
    "meaning": "adj 慷慨的;丰富的"
  },
  {
    "word": "genius",
    "meaning": "n 天才;天赋"
  },
  {
    "word": "genre",
    "meaning": "n 类型;种类"
  },
  {
    "word": "genteel",
    "meaning": "adj 有教养的;优雅的"
  },
  {
    "word": "gently",
    "meaning": "adv 温和地;文雅地"
  },
  {
    "word": "genuine",
    "meaning": "adj 真正的;真诚的"
  },
  {
    "word": "geography",
    "meaning": "n 地理学;地形"
  },
  {
    "word": "geometry",
    "meaning": "n 几何学"
  },
  {
    "word": "germ",
    "meaning": "n 微生物;细菌"
  },
  {
    "word": "gesture",
    "meaning": "n 姿势;手势 v.作手势"
  },
  {
    "word": "get",
    "meaning": "v 得到;变得"
  },
  {
    "word": "ghost",
    "meaning": "n 鬼魂;幽灵"
  },
  {
    "word": "giant",
    "meaning": "n 巨人;巨物"
  },
  {
    "word": "gift",
    "meaning": "n 礼物;天赋 v.赠送"
  },
  {
    "word": "gifted",
    "meaning": "adj 有天赋的;有才华的"
  },
  {
    "word": "giggle",
    "meaning": "v /n.咯咯笑"
  },
  {
    "word": "ginger",
    "meaning": "n 姜;姜黄色"
  },
  {
    "word": "girl",
    "meaning": "n 女孩;女儿"
  },
  {
    "word": "give",
    "meaning": "v 给;提供"
  },
  {
    "word": "glad",
    "meaning": "adj 高兴的;乐意的"
  },
  {
    "word": "glance",
    "meaning": "v 看一眼;扫视"
  },
  {
    "word": "glare",
    "meaning": "v 怒视;眩光 n.眩光;耀眼"
  },
  {
    "word": "glass",
    "meaning": "n 玻璃;玻璃杯"
  },
  {
    "word": "glimpse",
    "meaning": "n 一瞥 v.瞥见"
  },
  {
    "word": "gloomy",
    "meaning": "adj 阴暗的;忧郁的"
  },
  {
    "word": "glorious",
    "meaning": "adj 光荣的;壮丽的"
  },
  {
    "word": "glory",
    "meaning": "n 光荣;壮丽"
  },
  {
    "word": "gloss",
    "meaning": "n 光泽;注释"
  },
  {
    "word": "glossy",
    "meaning": "adj 发光的;光滑的"
  },
  {
    "word": "glove",
    "meaning": "n 手套"
  },
  {
    "word": "glow",
    "meaning": "n 炽热;脸红 v.发热"
  },
  {
    "word": "glue",
    "meaning": "n 胶 v.粘合"
  },
  {
    "word": "go",
    "meaning": "v 去;进行 n.尝试"
  },
  {
    "word": "goal",
    "meaning": "n 目标;得分"
  },
  {
    "word": "goat",
    "meaning": "n 山羊;山羊皮"
  },
  {
    "word": "god",
    "meaning": "n 上帝;神"
  },
  {
    "word": "gold",
    "meaning": "n 黄金;金色 adj.金制的"
  },
  {
    "word": "golden",
    "meaning": "adj 金色的;极好的"
  },
  {
    "word": "golf",
    "meaning": "n 高尔夫球"
  },
  {
    "word": "good",
    "meaning": "adj 好的 n.好处"
  },
  {
    "word": "goodbye",
    "meaning": "interj 再见"
  },
  {
    "word": "goodness",
    "meaning": "n 善良;美德"
  },
  {
    "word": "goods",
    "meaning": "n 商品;货物"
  },
  {
    "word": "goose",
    "meaning": "n 鹅;鹅肉"
  },
  {
    "word": "govern",
    "meaning": "v 管理;支配"
  },
  {
    "word": "government",
    "meaning": "n 政府;治理"
  },
  {
    "word": "governor",
    "meaning": "n 州长;主管"
  },
  {
    "word": "gown",
    "meaning": "n 长袍;礼服"
  },
  {
    "word": "grab",
    "meaning": "v /n.攫取;抓取"
  },
  {
    "word": "grace",
    "meaning": "n 优美;宽限"
  },
  {
    "word": "graceful",
    "meaning": "adj 优美的;优雅的"
  },
  {
    "word": "gracious",
    "meaning": "adj 仁慈的;优美的"
  },
  {
    "word": "grade",
    "meaning": "n 等级 v.分级"
  },
  {
    "word": "gradient",
    "meaning": "n 梯度;斜率"
  },
  {
    "word": "gradual",
    "meaning": "adj 逐渐的;逐步的"
  },
  {
    "word": "graduate",
    "meaning": "v 毕业 n.毕业生"
  },
  {
    "word": "graft",
    "meaning": "v 嫁接;移植"
  },
  {
    "word": "grain",
    "meaning": "n 谷物;颗粒"
  },
  {
    "word": "gram",
    "meaning": "n 克"
  },
  {
    "word": "grammar",
    "meaning": "n 语法;语法学"
  },
  {
    "word": "grammatical",
    "meaning": "adj 语法的"
  },
  {
    "word": "grand",
    "meaning": "adj 宏伟的;重大的"
  },
  {
    "word": "grandfather",
    "meaning": "n 祖父;外祖父"
  },
  {
    "word": "grandmother",
    "meaning": "n 祖母;外祖母"
  },
  {
    "word": "grant",
    "meaning": "v 授予 n.授予物"
  },
  {
    "word": "grasp",
    "meaning": "v 抓住;掌握"
  },
  {
    "word": "grass",
    "meaning": "n 草;草地"
  },
  {
    "word": "grateful",
    "meaning": "adj 感激的;感谢的"
  },
  {
    "word": "gratitude",
    "meaning": "n 感激;感谢"
  },
  {
    "word": "grave",
    "meaning": "n 坟墓;死亡 adj.严重的"
  },
  {
    "word": "gravity",
    "meaning": "n 重力;严肃"
  },
  {
    "word": "graze",
    "meaning": "v 放牧;擦伤"
  },
  {
    "word": "grease",
    "meaning": "n 油脂;润滑油"
  },
  {
    "word": "great",
    "meaning": "adj 伟大的;重要的"
  },
  {
    "word": "green",
    "meaning": "adj 绿色的;生的 n.绿色"
  },
  {
    "word": "greenhouse",
    "meaning": "n 温室;花房"
  },
  {
    "word": "greet",
    "meaning": "v 问候;招呼"
  },
  {
    "word": "greeting",
    "meaning": "n 问候;招呼"
  },
  {
    "word": "grey",
    "meaning": "n /adj.灰色（的）"
  },
  {
    "word": "grid",
    "meaning": "n 网格;栅格"
  },
  {
    "word": "grief",
    "meaning": "n 悲痛;悲伤"
  },
  {
    "word": "grieve",
    "meaning": "v 使悲伤;悲伤"
  },
  {
    "word": "grill",
    "meaning": "n 烤架;格栅 v.烤"
  },
  {
    "word": "grim",
    "meaning": "adj 冷酷的;严峻的"
  },
  {
    "word": "grin",
    "meaning": "n 露齿笑 v.露齿笑"
  },
  {
    "word": "grind",
    "meaning": "v 磨碎;磨快"
  },
  {
    "word": "grip",
    "meaning": "v /n.紧握;掌握"
  },
  {
    "word": "grit",
    "meaning": "n 沙粒;勇气"
  },
  {
    "word": "groan",
    "meaning": "n 呻吟声 v.呻吟"
  },
  {
    "word": "grocer",
    "meaning": "n 杂货商"
  },
  {
    "word": "grocery",
    "meaning": "n 杂货店;食品"
  },
  {
    "word": "gross",
    "meaning": "adj 总的;粗野的"
  },
  {
    "word": "ground",
    "meaning": "n 地面;理由"
  },
  {
    "word": "group",
    "meaning": "n 组;团体 v.成群"
  },
  {
    "word": "grow",
    "meaning": "v 生长;种植"
  },
  {
    "word": "growth",
    "meaning": "n 生长;增长"
  },
  {
    "word": "grumble",
    "meaning": "v 抱怨;嘟囔"
  },
  {
    "word": "guarantee",
    "meaning": "n 保证 v.保证"
  },
  {
    "word": "guard",
    "meaning": "n 警卫;守卫 v.守卫"
  },
  {
    "word": "guess",
    "meaning": "v 猜测;推测"
  },
  {
    "word": "guest",
    "meaning": "n 客人;旅客"
  },
  {
    "word": "guide",
    "meaning": "n 向导;指南 v.引导"
  },
  {
    "word": "guideline",
    "meaning": "n 指导原则;方针"
  },
  {
    "word": "guilt",
    "meaning": "n 罪行;内疚"
  },
  {
    "word": "guilty",
    "meaning": "adj 内疚的;有罪的"
  },
  {
    "word": "guitar",
    "meaning": "n 吉他;六弦琴"
  },
  {
    "word": "gun",
    "meaning": "n 枪;炮"
  },
  {
    "word": "gym",
    "meaning": "n 体育馆;健身房"
  },
  {
    "word": "gymnasium",
    "meaning": "n 体育馆;健身房"
  },
  {
    "word": "habit",
    "meaning": "n 习惯;习性"
  },
  {
    "word": "habitat",
    "meaning": "n 栖息地;生长地"
  },
  {
    "word": "hair",
    "meaning": "n 头发;毛发"
  },
  {
    "word": "half",
    "meaning": "n /adj.一半（的）"
  },
  {
    "word": "hall",
    "meaning": "n 大厅;过道"
  },
  {
    "word": "halt",
    "meaning": "n 停止;休息 v.停止"
  },
  {
    "word": "ham",
    "meaning": "n 火腿;猪后腿肉"
  },
  {
    "word": "hamburger",
    "meaning": "n 汉堡包"
  },
  {
    "word": "hammer",
    "meaning": "n 锤子 v.锤击"
  },
  {
    "word": "hamper",
    "meaning": "v 妨碍;阻碍"
  },
  {
    "word": "hand",
    "meaning": "n 手;指针 v.传递"
  },
  {
    "word": "handful",
    "meaning": "n 一把;少数"
  },
  {
    "word": "handicap",
    "meaning": "n 障碍;不利条件 v.妨碍"
  },
  {
    "word": "handle",
    "meaning": "n 把手;柄 v.处理"
  },
  {
    "word": "handsome",
    "meaning": "adj 英俊的;可观的"
  },
  {
    "word": "handwriting",
    "meaning": "n 书法;笔迹"
  },
  {
    "word": "handy",
    "meaning": "adj 便利的; handy"
  },
  {
    "word": "hang",
    "meaning": "v 悬挂;绞死"
  },
  {
    "word": "happen",
    "meaning": "v 发生;碰巧"
  },
  {
    "word": "happiness",
    "meaning": "n 幸福;快乐"
  },
  {
    "word": "happy",
    "meaning": "adj 快乐的;幸福的"
  },
  {
    "word": "harassment",
    "meaning": "n 骚扰;烦恼"
  },
  {
    "word": "harbor",
    "meaning": "n 港口;避难所 v.庇护"
  },
  {
    "word": "hard",
    "meaning": "adj 硬的;困难的 adv.努力地"
  },
  {
    "word": "hardly",
    "meaning": "adv 几乎不;仅仅"
  },
  {
    "word": "hardship",
    "meaning": "n 困苦;苦难"
  },
  {
    "word": "hardware",
    "meaning": "n 硬件;五金器具"
  },
  {
    "word": "harm",
    "meaning": "n 伤害;损害 v.损害"
  },
  {
    "word": "harmful",
    "meaning": "adj 有害的;伤害的"
  },
  {
    "word": "harmony",
    "meaning": "n 和谐;一致"
  },
  {
    "word": "harsh",
    "meaning": "adj 严厉的;粗糙的"
  },
  {
    "word": "harvest",
    "meaning": "n 收获;产量 v.收割"
  },
  {
    "word": "haste",
    "meaning": "n 匆忙;急忙 v.匆忙"
  },
  {
    "word": "hasten",
    "meaning": "v 加速;赶快"
  },
  {
    "word": "hat",
    "meaning": "n 帽子"
  },
  {
    "word": "hatch",
    "meaning": "n 孵化;舱口 v.孵蛋;策划"
  },
  {
    "word": "hate",
    "meaning": "v 恨;憎恨"
  },
  {
    "word": "hatred",
    "meaning": "n 憎恨;敌意"
  },
  {
    "word": "haul",
    "meaning": "v 拖拉;拖运"
  },
  {
    "word": "haunt",
    "meaning": "v 常去;萦绕"
  },
  {
    "word": "have",
    "meaning": "v 有;让"
  },
  {
    "word": "hawk",
    "meaning": "n 鹰;鹰派成员"
  },
  {
    "word": "hay",
    "meaning": "n 干草"
  },
  {
    "word": "hazard",
    "meaning": "n 危险;冒险 v.冒险"
  },
  {
    "word": "hazardous",
    "meaning": "adj 危险的;冒险的"
  },
  {
    "word": "head",
    "meaning": "n 头;领导 v.朝向"
  },
  {
    "word": "headache",
    "meaning": "n 头痛"
  },
  {
    "word": "heading",
    "meaning": "n 标题;方向"
  },
  {
    "word": "headline",
    "meaning": "n 大标题;头条新闻"
  },
  {
    "word": "headquarters",
    "meaning": "n 总部;司令部"
  },
  {
    "word": "heal",
    "meaning": "v 治愈;愈合"
  },
  {
    "word": "health",
    "meaning": "n 健康;卫生"
  },
  {
    "word": "healthy",
    "meaning": "adj 健康的;健壮的"
  },
  {
    "word": "heap",
    "meaning": "n 堆;大量 v.堆"
  },
  {
    "word": "hear",
    "meaning": "v 听见;听说"
  },
  {
    "word": "hearing",
    "meaning": "n 听力;审讯"
  },
  {
    "word": "heart",
    "meaning": "n 心;中心"
  },
  {
    "word": "heat",
    "meaning": "n 热;热度 v.加热"
  },
  {
    "word": "heating",
    "meaning": "n 加热;供暖"
  },
  {
    "word": "heaven",
    "meaning": "n 天堂;天空"
  },
  {
    "word": "heavily",
    "meaning": "adv 沉重地;大量地"
  },
  {
    "word": "heavy",
    "meaning": "adj 重的;繁重的"
  },
  {
    "word": "hedge",
    "meaning": "n 树篱;障碍物"
  },
  {
    "word": "heel",
    "meaning": "n 脚后跟;鞋跟"
  },
  {
    "word": "height",
    "meaning": "n 高度;高度"
  },
  {
    "word": "heighten",
    "meaning": "v 提高;增加"
  },
  {
    "word": "heir",
    "meaning": "n 继承人;继承人"
  },
  {
    "word": "helicopter",
    "meaning": "n 直升飞机"
  },
  {
    "word": "hell",
    "meaning": "n 地狱;苦境"
  },
  {
    "word": "hello",
    "meaning": "interj 喂;你好"
  },
  {
    "word": "helmet",
    "meaning": "n 头盔;帽状物"
  },
  {
    "word": "help",
    "meaning": "v 帮助;援助 n.帮助"
  },
  {
    "word": "helpful",
    "meaning": "adj 有帮助的;有益的"
  },
  {
    "word": "hemisphere",
    "meaning": "n 半球"
  },
  {
    "word": "hen",
    "meaning": "n 母鸡"
  },
  {
    "word": "hence",
    "meaning": "adv 因此;从此"
  },
  {
    "word": "henceforth",
    "meaning": "adv 今后;从此"
  },
  {
    "word": "her",
    "meaning": "pron 她的;她的"
  },
  {
    "word": "herb",
    "meaning": "n 草药;药草"
  },
  {
    "word": "herd",
    "meaning": "n 兽群;牧群 v.放牧"
  },
  {
    "word": "here",
    "meaning": "adv 这里;在这里"
  },
  {
    "word": "heritage",
    "meaning": "n 遗产;传统"
  },
  {
    "word": "hero",
    "meaning": "n 英雄;男主角"
  },
  {
    "word": "heroic",
    "meaning": "adj 英雄的;英勇的"
  },
  {
    "word": "heroine",
    "meaning": "n 女英雄;女主角"
  },
  {
    "word": "hers",
    "meaning": "pron 她的"
  },
  {
    "word": "herself",
    "meaning": "pron 她自己"
  },
  {
    "word": "hesitate",
    "meaning": "v 犹豫;踌躇"
  },
  {
    "word": "hey",
    "meaning": "interj 嗨;喂"
  },
  {
    "word": "hi",
    "meaning": "interj 嗨"
  },
  {
    "word": "hide",
    "meaning": "v 隐藏;隐瞒 n.皮革"
  },
  {
    "word": "hierarchy",
    "meaning": "n 等级制度;统治集团"
  },
  {
    "word": "high",
    "meaning": "adj 高的 adv.高地"
  },
  {
    "word": "highly",
    "meaning": "adv 高度地;非常"
  },
  {
    "word": "highway",
    "meaning": "n 公路;大路"
  },
  {
    "word": "hike",
    "meaning": "v 徒步旅行;增加"
  },
  {
    "word": "hill",
    "meaning": "n 小山;丘陵"
  },
  {
    "word": "him",
    "meaning": "pron 他"
  },
  {
    "word": "himself",
    "meaning": "pron 他自己"
  },
  {
    "word": "hint",
    "meaning": "n 暗示;提示 v.暗示"
  },
  {
    "word": "hip",
    "meaning": "n 臀部;屋脊"
  },
  {
    "word": "hire",
    "meaning": "v 雇佣;租用"
  },
  {
    "word": "his",
    "meaning": "pron 他的"
  },
  {
    "word": "historian",
    "meaning": "n 历史学家"
  },
  {
    "word": "historic",
    "meaning": "adj 历史上的;有历史意义的"
  },
  {
    "word": "historical",
    "meaning": "adj 历史的;有关历史的"
  },
  {
    "word": "history",
    "meaning": "n 历史;历史学"
  },
  {
    "word": "hit",
    "meaning": "v 打;打击 n.击中"
  },
  {
    "word": "hitherto",
    "meaning": "adv 到目前为止;迄今"
  },
  {
    "word": "hoax",
    "meaning": "n 骗局;恶作剧"
  },
  {
    "word": "hobby",
    "meaning": "n 爱好;嗜好"
  },
  {
    "word": "hockey",
    "meaning": "n 曲棍球;冰上曲棍球"
  },
  {
    "word": "hold",
    "meaning": "v 拿;保持"
  },
  {
    "word": "holder",
    "meaning": "n 持有者;容器"
  },
  {
    "word": "hole",
    "meaning": "n 洞;孔"
  },
  {
    "word": "holiday",
    "meaning": "n 假日;节日"
  },
  {
    "word": "hollow",
    "meaning": "adj 空的;空洞的"
  },
  {
    "word": "holy",
    "meaning": "adj 神圣的;圣洁的"
  },
  {
    "word": "home",
    "meaning": "n 家;家乡 adv.回家"
  },
  {
    "word": "homeless",
    "meaning": "adj 无家的;无栖身之所的"
  },
  {
    "word": "homework",
    "meaning": "n 家庭作业;预习"
  },
  {
    "word": "hone",
    "meaning": "n 磨刀石 v.磨锐"
  },
  {
    "word": "honey",
    "meaning": "n 蜜;蜂蜜"
  },
  {
    "word": "honor",
    "meaning": "n 荣誉;尊敬 v.尊敬"
  },
  {
    "word": "honorable",
    "meaning": "adj 荣誉的;值得尊敬的"
  },
  {
    "word": "hood",
    "meaning": "n 头巾;罩"
  },
  {
    "word": "hook",
    "meaning": "n 钩;挂钩 v.钩住"
  },
  {
    "word": "hope",
    "meaning": "n 希望 v.希望"
  },
  {
    "word": "hopeful",
    "meaning": "adj 有希望的;有前途的"
  },
  {
    "word": "hopefully",
    "meaning": "adv 有希望地;乐观地"
  },
  {
    "word": "hopeless",
    "meaning": "adj 绝望的;无希望的"
  },
  {
    "word": "horizon",
    "meaning": "n 地平线;视野"
  },
  {
    "word": "horizontal",
    "meaning": "adj 水平的;横向的"
  },
  {
    "word": "hormone",
    "meaning": "n 激素;荷尔蒙"
  },
  {
    "word": "horn",
    "meaning": "n 角;号角"
  },
  {
    "word": "horror",
    "meaning": "n 恐怖;战栗"
  },
  {
    "word": "horse",
    "meaning": "n 马;马科动物"
  },
  {
    "word": "horsepower",
    "meaning": "n 马力"
  },
  {
    "word": "hospital",
    "meaning": "n 医院"
  },
  {
    "word": "hospitality",
    "meaning": "n 好客;款待"
  },
  {
    "word": "host",
    "meaning": "n 主人;主持人 v.主持"
  },
  {
    "word": "hostage",
    "meaning": "n 人质;抵押品"
  },
  {
    "word": "hostile",
    "meaning": "adj 敌对的;不友好的"
  },
  {
    "word": "hot",
    "meaning": "adj 热的;热情的"
  },
  {
    "word": "hotel",
    "meaning": "n 旅馆;酒店"
  },
  {
    "word": "hound",
    "meaning": "n 猎狗;卑鄙的人"
  },
  {
    "word": "hour",
    "meaning": "n 小时;时间"
  },
  {
    "word": "house",
    "meaning": "n 房子;家庭"
  },
  {
    "word": "household",
    "meaning": "n 家庭;一家人 adj.家庭的"
  },
  {
    "word": "housewife",
    "meaning": "n 家庭主妇"
  },
  {
    "word": "housing",
    "meaning": "n 住房;住房供给"
  },
  {
    "word": "hovel",
    "meaning": "n 茅屋;小屋"
  },
  {
    "word": "hover",
    "meaning": "v 盘旋;徘徊"
  },
  {
    "word": "how",
    "meaning": "adv 如何;怎样"
  },
  {
    "word": "however",
    "meaning": "adv 然而;无论如何"
  },
  {
    "word": "huddle",
    "meaning": "v 挤成一堆;蜷缩"
  },
  {
    "word": "hug",
    "meaning": "v /n.拥抱;紧抱"
  },
  {
    "word": "huge",
    "meaning": "adj 巨大的;庞大的"
  },
  {
    "word": "huh",
    "meaning": "interj 哼;哈"
  },
  {
    "word": "human",
    "meaning": "adj 人的;人类的 n.人"
  },
  {
    "word": "humane",
    "meaning": "adj 人道的;仁慈的"
  },
  {
    "word": "humanity",
    "meaning": "n 人类;人性"
  },
  {
    "word": "humble",
    "meaning": "adj 谦逊的;低下的"
  },
  {
    "word": "humid",
    "meaning": "adj 潮湿的;湿润的"
  },
  {
    "word": "humidity",
    "meaning": "n 湿度;湿气"
  },
  {
    "word": "humiliate",
    "meaning": "v 使羞辱;使丢脸"
  },
  {
    "word": "humor",
    "meaning": "n 幽默;心情 v.迎合"
  },
  {
    "word": "hundred",
    "meaning": "num 一百"
  },
  {
    "word": "hunger",
    "meaning": "n 饿;渴望 v.渴望"
  },
  {
    "word": "hungry",
    "meaning": "adj 饿的;渴望的"
  },
  {
    "word": "hunt",
    "meaning": "v 打猎;搜寻"
  },
  {
    "word": "hunter",
    "meaning": "n 猎人;猎犬"
  },
  {
    "word": "hurricane",
    "meaning": "n 飓风;狂风"
  },
  {
    "word": "hurry",
    "meaning": "v 匆忙;赶紧 n.急忙"
  },
  {
    "word": "hurt",
    "meaning": "v 伤害;受伤"
  },
  {
    "word": "husband",
    "meaning": "n 丈夫"
  },
  {
    "word": "husbandry",
    "meaning": "n 农艺;耕作"
  },
  {
    "word": "hush",
    "meaning": "v 使...安静;肃静"
  },
  {
    "word": "hut",
    "meaning": "n 小屋;棚屋"
  },
  {
    "word": "hygiene",
    "meaning": "n 卫生;卫生学"
  },
  {
    "word": "hypothesis",
    "meaning": "n 假设;前提"
  },
  {
    "word": "hypothetical",
    "meaning": "adj 假设的;假定的"
  },
  {
    "word": "hysteria",
    "meaning": "n 歇斯底里;狂热"
  },
  {
    "word": "I",
    "meaning": "pron 我"
  },
  {
    "word": "ice",
    "meaning": "n 冰;冰淇淋"
  },
  {
    "word": "icon",
    "meaning": "n 图标;偶像"
  },
  {
    "word": "idea",
    "meaning": "n 思想;想法"
  },
  {
    "word": "ideal",
    "meaning": "adj 理想的;完美的 n.理想"
  },
  {
    "word": "idealism",
    "meaning": "n 唯心主义;理想主义"
  },
  {
    "word": "idealist",
    "meaning": "n 理想主义者"
  },
  {
    "word": "ideally",
    "meaning": "adv 理想地;最好地"
  },
  {
    "word": "identical",
    "meaning": "adj 相同的;一致的"
  },
  {
    "word": "identification",
    "meaning": "n 识别;身份证明"
  },
  {
    "word": "identify",
    "meaning": "v 识别;认同"
  },
  {
    "word": "identity",
    "meaning": "n 身份;特性"
  },
  {
    "word": "ideological",
    "meaning": "adj 思想的;意识形态的"
  },
  {
    "word": "ideology",
    "meaning": "n 意识形态;思想体系"
  },
  {
    "word": "idiom",
    "meaning": "n 成语;习语"
  },
  {
    "word": "idiot",
    "meaning": "n 白痴;笨蛋"
  },
  {
    "word": "idle",
    "meaning": "adj 闲置的;懒散的 v.虚度"
  },
  {
    "word": "idleness",
    "meaning": "n 懒惰;闲置"
  },
  {
    "word": "ignore",
    "meaning": "v 忽视;不顾"
  },
  {
    "word": "ignorance",
    "meaning": "n 无知;不知"
  },
  {
    "word": "ignorant",
    "meaning": "adj 无知的;愚昧的"
  },
  {
    "word": "ignore",
    "meaning": "v 忽视;不顾"
  },
  {
    "word": "ill",
    "meaning": "adj 坏的;生病的 adv.坏地"
  },
  {
    "word": "illegal",
    "meaning": "adj 非法的;违法的"
  },
  {
    "word": "illiterate",
    "meaning": "adj 文盲的;未受教育的"
  },
  {
    "word": "illness",
    "meaning": "n 病;疾病"
  },
  {
    "word": "illuminate",
    "meaning": "v 照亮;照明"
  },
  {
    "word": "illusion",
    "meaning": "n 幻觉;错觉"
  },
  {
    "word": "illustrate",
    "meaning": "v 说明;阐明"
  },
  {
    "word": "illustration",
    "meaning": "n 例证;插图"
  },
  {
    "word": "image",
    "meaning": "n 形象;图像 v.想象"
  },
  {
    "word": "imaginary",
    "meaning": "adj 想象的;虚构的"
  },
  {
    "word": "imagination",
    "meaning": "n 想象;想象力"
  },
  {
    "word": "imaginative",
    "meaning": "adj 想象的;有创造力的"
  },
  {
    "word": "imagine",
    "meaning": "v 想象;设想"
  },
  {
    "word": "imitate",
    "meaning": "v 模仿;仿效"
  },
  {
    "word": "imitation",
    "meaning": "n 模仿;仿制品"
  },
  {
    "word": "immediate",
    "meaning": "adj 立即的;直接的"
  },
  {
    "word": "immediately",
    "meaning": "adv 立即;直接地"
  },
  {
    "word": "immense",
    "meaning": "adj 巨大的;广大的"
  },
  {
    "word": "immerse",
    "meaning": "v 沉浸;使深陷"
  },
  {
    "word": "immigrant",
    "meaning": "n 移民;侨民"
  },
  {
    "word": "immigrate",
    "meaning": "v 移民;迁入"
  },
  {
    "word": "immigration",
    "meaning": "n 移民;移民局"
  },
  {
    "word": "immune",
    "meaning": "adj 免疫的;不受影响的"
  },
  {
    "word": "impact",
    "meaning": "n 冲击;影响 v.冲击"
  },
  {
    "word": "impair",
    "meaning": "v 损害;削弱"
  },
  {
    "word": "impart",
    "meaning": "v 传授;告知"
  },
  {
    "word": "impartial",
    "meaning": "adj 公正的;无偏见的"
  },
  {
    "word": "impartiality",
    "meaning": "n 公正;公平"
  },
  {
    "word": "impassioned",
    "meaning": "adj 热情的;激昂的"
  },
  {
    "word": "impatient",
    "meaning": "adj 不耐烦的;急躁的"
  },
  {
    "word": "implement",
    "meaning": "v 执行;实施 n.工具"
  },
  {
    "word": "implementation",
    "meaning": "n 实施;执行"
  },
  {
    "word": "implication",
    "meaning": "n 含义;暗示"
  },
  {
    "word": "implicit",
    "meaning": "adj 含蓄的;不直接表达的"
  },
  {
    "word": "implies",
    "meaning": "v 暗示;意味着"
  },
  {
    "word": "imply",
    "meaning": "v 暗示;意味"
  },
  {
    "word": "import",
    "meaning": "n 进口;重要性 v.进口"
  },
  {
    "word": "importance",
    "meaning": "n 重要性;重要"
  },
  {
    "word": "important",
    "meaning": "adj 重要的;重大的"
  },
  {
    "word": "impose",
    "meaning": "v 强加;征税"
  },
  {
    "word": "impossible",
    "meaning": "adj 不可能的;难以忍受的"
  },
  {
    "word": "impress",
    "meaning": "v 给...深刻印象"
  },
  {
    "word": "impression",
    "meaning": "n 印象;印记"
  },
  {
    "word": "impressive",
    "meaning": "adj 给人深刻印象的"
  },
  {
    "word": "improve",
    "meaning": "v 改善;提高"
  },
  {
    "word": "improvement",
    "meaning": "n 改善;提高"
  },
  {
    "word": "impulse",
    "meaning": "n 冲动;推动力"
  },
  {
    "word": "in",
    "meaning": "prep 在...里 adv.进入"
  },
  {
    "word": "inch",
    "meaning": "n 英寸"
  },
  {
    "word": "incidence",
    "meaning": "n 发生;影响"
  },
  {
    "word": "incident",
    "meaning": "n 事件;事变"
  },
  {
    "word": "incidentally",
    "meaning": "adv 顺便提一句;偶然地"
  },
  {
    "word": "incline",
    "meaning": "v 使倾斜;倾向于 n.斜坡"
  },
  {
    "word": "include",
    "meaning": "v 包括;包含"
  },
  {
    "word": "including",
    "meaning": "prep 包括;包含"
  },
  {
    "word": "income",
    "meaning": "n 收入;收益"
  },
  {
    "word": "incorporate",
    "meaning": "v 结合;合并"
  },
  {
    "word": "increase",
    "meaning": "n 增加;增长 v.增加"
  },
  {
    "word": "increasingly",
    "meaning": "adv 越来越多地;渐增地"
  },
  {
    "word": "incredible",
    "meaning": "adj 难以置信的;极好的"
  },
  {
    "word": "incredibly",
    "meaning": "adv 难以置信地;极端地"
  },
  {
    "word": "incur",
    "meaning": "v 招致;遭受"
  },
  {
    "word": "indeed",
    "meaning": "adv 的确;实在"
  },
  {
    "word": "indefinitely",
    "meaning": "adv 无限期地;不明确地"
  },
  {
    "word": "indifferent",
    "meaning": "adj 漠不关心的;中立的"
  },
  {
    "word": "indignant",
    "meaning": "adj 愤慨的;义愤的"
  },
  {
    "word": "indignation",
    "meaning": "n 愤慨;义愤"
  },
  {
    "word": "indirect",
    "meaning": "adj 间接的;迂回的"
  },
  {
    "word": "individual",
    "meaning": "adj 个别的;独特的 n.个人"
  },
  {
    "word": "indoor",
    "meaning": "adj 室内的;室内使用的"
  },
  {
    "word": "indoors",
    "meaning": "adv 在室内"
  },
  {
    "word": "induce",
    "meaning": "v 诱导;引起"
  },
  {
    "word": "induction",
    "meaning": "n 就职;归纳"
  },
  {
    "word": "industrial",
    "meaning": "adj 工业的;产业的"
  },
  {
    "word": "industry",
    "meaning": "n 工业;行业"
  },
  {
    "word": "inefficient",
    "meaning": "adj 无效率的;低能的"
  },
  {
    "word": "inevitable",
    "meaning": "adj 不可避免的;必然的"
  },
  {
    "word": "inevitably",
    "meaning": "adv 不可避免地;必然地"
  },
  {
    "word": "inexpensive",
    "meaning": "adj 不昂贵的;便宜的"
  },
  {
    "word": "infant",
    "meaning": "n 婴儿;幼儿"
  },
  {
    "word": "infect",
    "meaning": "v 传染;感染"
  },
  {
    "word": "infection",
    "meaning": "n 感染;传染病"
  },
  {
    "word": "infectious",
    "meaning": "adj 传染的;有感染力的"
  },
  {
    "word": "infer",
    "meaning": "v 推断;推论"
  },
  {
    "word": "inference",
    "meaning": "n 推断;推论"
  },
  {
    "word": "inferior",
    "meaning": "adj 劣等的;下级的"
  },
  {
    "word": "inferiority",
    "meaning": "n 低等;自卑感"
  },
  {
    "word": "infinite",
    "meaning": "adj 无限的;无穷的"
  },
  {
    "word": "infinitely",
    "meaning": "adv 无限地;极大地"
  },
  {
    "word": "inflation",
    "meaning": "n 通货膨胀;膨胀"
  },
  {
    "word": "influence",
    "meaning": "n 影响;势力 v.影响"
  },
  {
    "word": "influential",
    "meaning": "adj 有影响的;有权势的"
  },
  {
    "word": "inform",
    "meaning": "v 通知;告知"
  },
  {
    "word": "information",
    "meaning": "n 信息;情报"
  },
  {
    "word": "informed",
    "meaning": "adj 有知识的;了解情况的"
  },
  {
    "word": "informer",
    "meaning": "n 告密者;通报者"
  },
  {
    "word": "infraction",
    "meaning": "n 违反;犯规"
  },
  {
    "word": "infrastructure",
    "meaning": "n 基础设施;基础结构"
  },
  {
    "word": "infringe",
    "meaning": "v 侵犯;违反"
  },
  {
    "word": "infringement",
    "meaning": "n 侵犯;侵害"
  },
  {
    "word": "ingenious",
    "meaning": "adj 精巧的;有发明天才的"
  },
  {
    "word": "ingredient",
    "meaning": "n 成分;原料"
  },
  {
    "word": "inhabitant",
    "meaning": "n 居民;居住者"
  },
  {
    "word": "inhale",
    "meaning": "v 吸入;吸气"
  },
  {
    "word": "inherent",
    "meaning": "adj 固有的;天生的"
  },
  {
    "word": "inherit",
    "meaning": "v 继承;遗传得"
  },
  {
    "word": "inheritance",
    "meaning": "n 继承;遗传"
  },
  {
    "word": "initial",
    "meaning": "adj 最初的;词首的"
  },
  {
    "word": "initially",
    "meaning": "adv 最初;起先"
  },
  {
    "word": "initiate",
    "meaning": "v 开始;发起"
  },
  {
    "word": "initiative",
    "meaning": "n 主动;主动权"
  },
  {
    "word": "injection",
    "meaning": "n 注射;注射剂"
  },
  {
    "word": "injunction",
    "meaning": "n 命令;禁令"
  },
  {
    "word": "injure",
    "meaning": "v 伤害;损害"
  },
  {
    "word": "injury",
    "meaning": "n 伤害;损伤"
  },
  {
    "word": "inmate",
    "meaning": "n 同住者;居民"
  },
  {
    "word": "innocent",
    "meaning": "adj 无辜的;无害的"
  },
  {
    "word": "innocence",
    "meaning": "n 清白;无害"
  },
  {
    "word": "innovation",
    "meaning": "n 创新;改革"
  },
  {
    "word": "innovative",
    "meaning": "adj 创新的;革新的"
  },
  {
    "word": "innumerable",
    "meaning": "adj 无数的;数不清的"
  },
  {
    "word": "input",
    "meaning": "n 输入;投入"
  },
  {
    "word": "inquire",
    "meaning": "v 询问;调查"
  },
  {
    "word": "inquiry",
    "meaning": "n 询问;调查"
  },
  {
    "word": "insects",
    "meaning": "n 昆虫;虫子"
  },
  {
    "word": "insert",
    "meaning": "v 插入;嵌入"
  },
  {
    "word": "insertion",
    "meaning": "n 插入;嵌入"
  },
  {
    "word": "inside",
    "meaning": "adv 在里面 n.内部"
  },
  {
    "word": "insider",
    "meaning": "n 内部的人;内部消息"
  },
  {
    "word": "insight",
    "meaning": "n 洞察力;洞悉"
  },
  {
    "word": "insist",
    "meaning": "v 坚持;坚决认为"
  },
  {
    "word": "inspect",
    "meaning": "v 检查;视察"
  },
  {
    "word": "inspection",
    "meaning": "n 检查;视察"
  },
  {
    "word": "inspector",
    "meaning": "n 检查员;巡视员"
  },
  {
    "word": "inspiration",
    "meaning": "n 灵感;鼓舞"
  },
  {
    "word": "inspire",
    "meaning": "v 鼓舞;激励"
  },
  {
    "word": "install",
    "meaning": "v 安装;任命"
  },
  {
    "word": "installation",
    "meaning": "n 安装;装置"
  },
  {
    "word": "installment",
    "meaning": "n 安装;分期付款"
  },
  {
    "word": "instance",
    "meaning": "n 实例;情况"
  },
  {
    "word": "instant",
    "meaning": "adj 立即的 n.瞬间"
  },
  {
    "word": "instantaneous",
    "meaning": "adj 瞬间的;即刻的"
  },
  {
    "word": "instead",
    "meaning": "adv 代替;反而"
  },
  {
    "word": "instinct",
    "meaning": "n 本能;直觉"
  },
  {
    "word": "institute",
    "meaning": "n 学院;研究所 v.建立"
  },
  {
    "word": "institution",
    "meaning": "n 机构;建立"
  },
  {
    "word": "institutional",
    "meaning": "adj 机构的;慈善机构的"
  },
  {
    "word": "instruct",
    "meaning": "v 指导;通知"
  },
  {
    "word": "instruction",
    "meaning": "n 指令;教育"
  },
  {
    "word": "instructor",
    "meaning": "n 教师;指导者"
  },
  {
    "word": "instrument",
    "meaning": "n 工具;乐器"
  },
  {
    "word": "instrumental",
    "meaning": "adj 仪器的;有帮助的"
  },
  {
    "word": "insufficient",
    "meaning": "adj 不充分的;不足的"
  },
  {
    "word": "insult",
    "meaning": "v 侮辱;冒犯"
  },
  {
    "word": "insurance",
    "meaning": "n 保险;保险费"
  },
  {
    "word": "insure",
    "meaning": "v 保险;确保"
  },
  {
    "word": "intact",
    "meaning": "adj 完整的;未受损伤的"
  },
  {
    "word": "integrate",
    "meaning": "v 整合;使成整体"
  },
  {
    "word": "integrated",
    "meaning": "adj 整合的;集成的"
  },
  {
    "word": "integration",
    "meaning": "n 整合;一体化"
  },
  {
    "word": "integrity",
    "meaning": "n 正直;完整"
  },
  {
    "word": "intellectual",
    "meaning": "adj 智力的;理性的 n.知识分子"
  },
  {
    "word": "intelligence",
    "meaning": "n 智力;理解力"
  },
  {
    "word": "intelligent",
    "meaning": "adj 聪明的;智能的"
  },
  {
    "word": "intelligible",
    "meaning": "adj 可理解的;明了的"
  },
  {
    "word": "intend",
    "meaning": "v 想要;打算"
  },
  {
    "word": "intention",
    "meaning": "n 意图;目的"
  },
  {
    "word": "interact",
    "meaning": "v 互相作用;交流"
  },
  {
    "word": "interaction",
    "meaning": "n 相互作用;互动"
  },
  {
    "word": "intercourse",
    "meaning": "n 交流;性交"
  },
  {
    "word": "interest",
    "meaning": "n 兴趣;利益"
  },
  {
    "word": "interested",
    "meaning": "adj 感兴趣的;有利益的"
  },
  {
    "word": "interesting",
    "meaning": "adj 有趣的;引人入胜的"
  },
  {
    "word": "interface",
    "meaning": "n 界面;接合点"
  },
  {
    "word": "interfere",
    "meaning": "v 干涉;干预"
  },
  {
    "word": "interference",
    "meaning": "n 干涉;干扰"
  },
  {
    "word": "interim",
    "meaning": "adj 临时的;中间的"
  },
  {
    "word": "interior",
    "meaning": "adj 内部的 n.内部"
  },
  {
    "word": "intermediate",
    "meaning": "adj 中间的;中级的"
  },
  {
    "word": "intermediates",
    "meaning": "n 中间产物;中间商"
  },
  {
    "word": "intermittent",
    "meaning": "adj 间歇的;断断续续的"
  },
  {
    "word": "internal",
    "meaning": "adj 内部的;内在的"
  },
  {
    "word": "international",
    "meaning": "adj 国际的;世界的"
  },
  {
    "word": "internationally",
    "meaning": "adv 国际地;世界性地"
  },
  {
    "word": "interpersonal",
    "meaning": "adj 人与人之间的;人际的"
  },
  {
    "word": "interpret",
    "meaning": "v 解释;翻译"
  },
  {
    "word": "interpretation",
    "meaning": "n 解释;口译"
  },
  {
    "word": "interpreter",
    "meaning": "n 解释者;口译者"
  },
  {
    "word": "interrupt",
    "meaning": "v 中断;打扰"
  },
  {
    "word": "interruption",
    "meaning": "n 中断;干扰"
  },
  {
    "word": "intersect",
    "meaning": "v 横截;相交"
  },
  {
    "word": "intersection",
    "meaning": "n 横截;交叉"
  },
  {
    "word": "interval",
    "meaning": "n 间隔;间歇"
  },
  {
    "word": "intervene",
    "meaning": "v 干涉;介入"
  },
  {
    "word": "intervention",
    "meaning": "n 干涉;介入"
  },
  {
    "word": "interview",
    "meaning": "n /v.面试;面谈"
  },
  {
    "word": "intimate",
    "meaning": "adj 亲密的;个人的"
  },
  {
    "word": "into",
    "meaning": "prep 到...里;进入"
  },
  {
    "word": "intricate",
    "meaning": "adj 复杂的;错综的"
  },
  {
    "word": "intriguing",
    "meaning": "adj 引起兴趣的;迷人的"
  },
  {
    "word": "intrinsic",
    "meaning": "adj 固有的;内在的"
  },
  {
    "word": "introduce",
    "meaning": "v 介绍;引入"
  },
  {
    "word": "introduction",
    "meaning": "n 介绍;引入"
  },
  {
    "word": "intrude",
    "meaning": "v 闯入;强挤进去"
  },
  {
    "word": "intuition",
    "meaning": "n 直觉;直觉力"
  },
  {
    "word": "intuitive",
    "meaning": "adj 直觉的;直观的"
  },
  {
    "word": "invade",
    "meaning": "v 侵入;侵略"
  },
  {
    "word": "invasion",
    "meaning": "n 侵入;侵略"
  },
  {
    "word": "invent",
    "meaning": "v 发明;捏造"
  },
  {
    "word": "invention",
    "meaning": "n 发明;发明物"
  },
  {
    "word": "inventive",
    "meaning": "adj 发明的;有创造力的"
  },
  {
    "word": "inventory",
    "meaning": "n 存货;清单"
  },
  {
    "word": "inverse",
    "meaning": "adj 相反的;倒转的"
  },
  {
    "word": "inversely",
    "meaning": "adv 相反地;倒转地"
  },
  {
    "word": "inversion",
    "meaning": "n 倒置;逆转"
  },
  {
    "word": "invest",
    "meaning": "v 投资;投入"
  },
  {
    "word": "investigate",
    "meaning": "v 调查;研究"
  },
  {
    "word": "investigation",
    "meaning": "n 调查;研究"
  },
  {
    "word": "investigator",
    "meaning": "n 调查员;研究员"
  },
  {
    "word": "investment",
    "meaning": "n 投资;投资额"
  },
  {
    "word": "invisible",
    "meaning": "adj 看不见的;无形的"
  },
  {
    "word": "invitation",
    "meaning": "n 邀请;邀请书"
  },
  {
    "word": "invite",
    "meaning": "v 邀请;招致"
  },
  {
    "word": "invoice",
    "meaning": "n 发票;发货单"
  },
  {
    "word": "involvement",
    "meaning": "n 参与;涉及"
  },
  {
    "word": "involve",
    "meaning": "v 包含;牵涉"
  },
  {
    "word": "inward",
    "meaning": "adj 向内的;内部的 adv.向内"
  },
  {
    "word": "iodine",
    "meaning": "n 碘"
  },
  {
    "word": "ion",
    "meaning": "n 离子"
  },
  {
    "word": "iris",
    "meaning": "n 虹膜;鸢尾花"
  },
  {
    "word": "iron",
    "meaning": "n 铁;熨斗 v.熨烫"
  },
  {
    "word": "ironic",
    "meaning": "adj 讽刺的;反讽的"
  },
  {
    "word": "irony",
    "meaning": "n 讽刺;反讽"
  },
  {
    "word": "irradiation",
    "meaning": "n 照射;辐射"
  },
  {
    "word": "irrational",
    "meaning": "adj 无理性的;不合理的"
  },
  {
    "word": "irregular",
    "meaning": "adj 不规则的;不整齐的"
  },
  {
    "word": "irrelevant",
    "meaning": "adj 不相关的;不切题的"
  },
  {
    "word": "irrespective",
    "meaning": "adj 不考虑的;不顾的"
  },
  {
    "word": "irrigate",
    "meaning": "v 灌溉;冲洗"
  },
  {
    "word": "irrigation",
    "meaning": "n 灌溉;灌溉工程"
  },
  {
    "word": "island",
    "meaning": "n 岛;岛屿"
  },
  {
    "word": "isolate",
    "meaning": "v 隔离;孤立"
  },
  {
    "word": "isolated",
    "meaning": "adj 隔离的;孤立的"
  },
  {
    "word": "isolation",
    "meaning": "n 隔离;孤立"
  },
  {
    "word": "issue",
    "meaning": "n 问题 v.发行;发布"
  },
  {
    "word": "it",
    "meaning": "pron 它"
  },
  {
    "word": "item",
    "meaning": "n 项目;条款"
  },
  {
    "word": "ivory",
    "meaning": "n 象牙;牙白色"
  },
  {
    "word": "jab",
    "meaning": "v 戳;刺 n.刺;戳"
  },
  {
    "word": "jack",
    "meaning": "n 千斤顶;男人"
  },
  {
    "word": "jacket",
    "meaning": "n 夹克;短上衣"
  },
  {
    "word": "jail",
    "meaning": "n 监狱;监禁"
  },
  {
    "word": "jam",
    "meaning": "n 果酱;拥挤 v.挤;卡住"
  },
  {
    "word": "January",
    "meaning": "n 一月"
  },
  {
    "word": "jar",
    "meaning": "n 罐子;广口瓶 v.震动;冲突"
  },
  {
    "word": "jargon",
    "meaning": "n 行话;术语"
  },
  {
    "word": "jaw",
    "meaning": "n 下巴;颌"
  },
  {
    "word": "jazz",
    "meaning": "n 爵士乐;爵士舞"
  },
  {
    "word": "jealous",
    "meaning": "adj 妒忌的;猜疑的"
  },
  {
    "word": "jeans",
    "meaning": "n 牛仔裤"
  },
  {
    "word": "jeep",
    "meaning": "n 吉普车"
  },
  {
    "word": "jelly",
    "meaning": "n 果冻;胶状物"
  },
  {
    "word": "jewel",
    "meaning": "n 宝石;宝石饰物"
  },
  {
    "word": "jewelry",
    "meaning": "n 珠宝;珠宝业"
  },
  {
    "word": "job",
    "meaning": "n 工作;任务"
  },
  {
    "word": "jog",
    "meaning": "v 慢跑;轻推"
  },
  {
    "word": "join",
    "meaning": "v 连接;加入"
  },
  {
    "word": "joint",
    "meaning": "adj 联合的;共同的 n.关节"
  },
  {
    "word": "joke",
    "meaning": "n 笑话;玩笑 v.说笑话"
  },
  {
    "word": "jolly",
    "meaning": "adj 欢乐的;愉快的"
  },
  {
    "word": "journal",
    "meaning": "n 日记;杂志"
  },
  {
    "word": "journalism",
    "meaning": "n 新闻业;报业"
  },
  {
    "word": "journalist",
    "meaning": "n 新闻记者;新闻工作者"
  },
  {
    "word": "journey",
    "meaning": "n 旅行;行程"
  },
  {
    "word": "joy",
    "meaning": "n 欢乐;喜悦"
  },
  {
    "word": "joyful",
    "meaning": "adj 欢乐的;令人愉快的"
  },
  {
    "word": "judge",
    "meaning": "v 判断;审判 n.法官"
  },
  {
    "word": "judgment",
    "meaning": "n 判断;判决"
  },
  {
    "word": "judicial",
    "meaning": "adj 司法的;法庭的"
  },
  {
    "word": "juice",
    "meaning": "n 汁;液;果汁"
  },
  {
    "word": "July",
    "meaning": "n 七月"
  },
  {
    "word": "jump",
    "meaning": "v 跳;跳跃 n.跳跃"
  },
  {
    "word": "June",
    "meaning": "n 六月"
  },
  {
    "word": "jungle",
    "meaning": "n 丛林;密林"
  },
  {
    "word": "junior",
    "meaning": "adj 年少的 n.年少者"
  },
  {
    "word": "jurisdiction",
    "meaning": "n 司法权;审判权"
  },
  {
    "word": "jury",
    "meaning": "n 陪审团;评判团"
  },
  {
    "word": "justice",
    "meaning": "n 正义;公正"
  },
  {
    "word": "justification",
    "meaning": "n 辩护;正当理由"
  },
  {
    "word": "justify",
    "meaning": "v 证明...正当;为...辩护"
  },
  {
    "word": "juvenile",
    "meaning": "adj 少年的;似少年的 n.少年"
  },
  {
    "word": "keen",
    "meaning": "adj 热心的;激烈的"
  },
  {
    "word": "keep",
    "meaning": "v 保持;保留"
  },
  {
    "word": "kettle",
    "meaning": "n 水壶;罐"
  },
  {
    "word": "key",
    "meaning": "n 钥匙;关键 adj.主要的"
  },
  {
    "word": "keyboard",
    "meaning": "n 键盘"
  },
  {
    "word": "kick",
    "meaning": "v 踢 n.踢"
  },
  {
    "word": "kid",
    "meaning": "n 小孩;山羊 v.开玩笑"
  },
  {
    "word": "kidnap",
    "meaning": "v 绑架;诱拐"
  },
  {
    "word": "kidney",
    "meaning": "n 肾;腰子"
  },
  {
    "word": "kill",
    "meaning": "v 杀死;消磨"
  },
  {
    "word": "killer",
    "meaning": "n 杀手;杀人犯"
  },
  {
    "word": "killing",
    "meaning": "n 杀戮;谋杀"
  },
  {
    "word": "kilogram",
    "meaning": "n 千克;公斤"
  },
  {
    "word": "kilometer",
    "meaning": "n 公里;千米"
  },
  {
    "word": "kind",
    "meaning": "adj 善良的 n.种类"
  },
  {
    "word": "kindergarten",
    "meaning": "n 幼儿园"
  },
  {
    "word": "kindness",
    "meaning": "n 仁慈;善良"
  },
  {
    "word": "king",
    "meaning": "n 国王;君主"
  },
  {
    "word": "kingdom",
    "meaning": "n 王国;领域"
  },
  {
    "word": "kiss",
    "meaning": "n /v.吻;轻触"
  },
  {
    "word": "kitchen",
    "meaning": "n 厨房;灶间"
  },
  {
    "word": "knee",
    "meaning": "n 膝;膝盖"
  },
  {
    "word": "kneel",
    "meaning": "v 跪下;跪着"
  },
  {
    "word": "knife",
    "meaning": "n 小刀;匕首"
  },
  {
    "word": "knight",
    "meaning": "n 骑士;爵士"
  },
  {
    "word": "knock",
    "meaning": "v 敲;打"
  },
  {
    "word": "knot",
    "meaning": "n 结;节 v.打结"
  },
  {
    "word": "know",
    "meaning": "v 知道;认识"
  },
  {
    "word": "knowledge",
    "meaning": "n 知识;了解"
  },
  {
    "word": "label",
    "meaning": "n 标签;标记 v.贴标签"
  },
  {
    "word": "labor",
    "meaning": "n 劳动;工作"
  },
  {
    "word": "laboratory",
    "meaning": "n 实验室;研究室"
  },
  {
    "word": "laborer",
    "meaning": "n 劳动者;工人"
  },
  {
    "word": "lack",
    "meaning": "n 缺乏;不足 v.缺乏"
  },
  {
    "word": "lacking",
    "meaning": "adj 缺乏的;不足的"
  },
  {
    "word": "ladder",
    "meaning": "n 梯子;阶梯"
  },
  {
    "word": "lady",
    "meaning": "n 女士;夫人"
  },
  {
    "word": "lag",
    "meaning": "v 落后;滞后 n.落后"
  },
  {
    "word": "lake",
    "meaning": "n 湖;湖泊"
  },
  {
    "word": "lamp",
    "meaning": "n 灯;油灯"
  },
  {
    "word": "land",
    "meaning": "n 土地;国土 v.登陆"
  },
  {
    "word": "landing",
    "meaning": "n 登陆;着陆"
  },
  {
    "word": "landlord",
    "meaning": "n 地主;房东"
  },
  {
    "word": "lane",
    "meaning": "n 小路;巷"
  },
  {
    "word": "language",
    "meaning": "n 语言;表达能力"
  },
  {
    "word": "lap",
    "meaning": "n 膝;一圈 v.重叠"
  },
  {
    "word": "laptop",
    "meaning": "n 笔记本电脑"
  },
  {
    "word": "large",
    "meaning": "adj 大的;巨大的"
  },
  {
    "word": "largely",
    "meaning": "adv 大部分;主要地"
  },
  {
    "word": "laser",
    "meaning": "n 激光"
  },
  {
    "word": "last",
    "meaning": "adj 最后的 v.持续"
  },
  {
    "word": "lasting",
    "meaning": "adj 持久的;持久的"
  },
  {
    "word": "late",
    "meaning": "adj 迟的 adv.迟地"
  },
  {
    "word": "lately",
    "meaning": "adv 最近;不久前"
  },
  {
    "word": "latent",
    "meaning": "adj 潜在的;潜伏的"
  },
  {
    "word": "later",
    "meaning": "adv 后来 adj.后来的"
  },
  {
    "word": "latest",
    "meaning": "adj 最新的;最近的"
  },
  {
    "word": "latter",
    "meaning": "adj 后者的 n.后者"
  },
  {
    "word": "laugh",
    "meaning": "v 笑;嘲笑 n.笑"
  },
  {
    "word": "laughter",
    "meaning": "n 笑;笑声"
  },
  {
    "word": "launch",
    "meaning": "v 发动;发射"
  },
  {
    "word": "laundry",
    "meaning": "n 洗衣;洗衣房"
  },
  {
    "word": "lava",
    "meaning": "n 熔岩;岩浆"
  },
  {
    "word": "law",
    "meaning": "n 法律;定律"
  },
  {
    "word": "lawful",
    "meaning": "adj 合法的;法律的"
  },
  {
    "word": "lawyer",
    "meaning": "n 律师;法律顾问"
  },
  {
    "word": "lay",
    "meaning": "v 放;产卵 adj.世俗的"
  },
  {
    "word": "layer",
    "meaning": "n 层;层次"
  },
  {
    "word": "layoff",
    "meaning": "n 解雇;失业"
  },
  {
    "word": "lazy",
    "meaning": "adj 懒惰的;懒散的"
  },
  {
    "word": "lead",
    "meaning": "v 领导;导致 n.铅"
  },
  {
    "word": "leader",
    "meaning": "n 领袖;领导者"
  },
  {
    "word": "leadership",
    "meaning": "n 领导;领导能力"
  },
  {
    "word": "leading",
    "meaning": "adj 领导的;最主要的"
  },
  {
    "word": "leaf",
    "meaning": "n 叶子;一页"
  },
  {
    "word": "league",
    "meaning": "n 联盟;联合会"
  },
  {
    "word": "leak",
    "meaning": "v 漏;泄露 n.漏洞"
  },
  {
    "word": "lean",
    "meaning": "v 倾斜;倚 adj.瘦的"
  },
  {
    "word": "leap",
    "meaning": "v 跳跃;剧增 n.跳跃"
  },
  {
    "word": "learn",
    "meaning": "v 学习;得知"
  },
  {
    "word": "learned",
    "meaning": "adj 有学问的;学术的"
  },
  {
    "word": "learning",
    "meaning": "n 学习;学问"
  },
  {
    "word": "lease",
    "meaning": "n 租约;租赁 v.出租"
  },
  {
    "word": "least",
    "meaning": "adj 最小的 adv.最少"
  },
  {
    "word": "leather",
    "meaning": "n 皮革;皮革制品"
  },
  {
    "word": "leave",
    "meaning": "v 离开;留下 n.许可"
  },
  {
    "word": "lecture",
    "meaning": "n 演讲;讲课 v.演讲"
  },
  {
    "word": "left",
    "meaning": "adj 左边的 n.左;左边"
  },
  {
    "word": "leg",
    "meaning": "n 腿;腿部"
  },
  {
    "word": "legacy",
    "meaning": "n 遗产;遗留物"
  },
  {
    "word": "legal",
    "meaning": "adj 法律的;合法的"
  },
  {
    "word": "legend",
    "meaning": "n 传说;传奇"
  },
  {
    "word": "legislation",
    "meaning": "n 立法;法规"
  },
  {
    "word": "legislative",
    "meaning": "adj 立法的;有立法权的"
  },
  {
    "word": "legislator",
    "meaning": "n 立法者;议员"
  },
  {
    "word": "legislature",
    "meaning": "n 立法机关;立法机构"
  },
  {
    "word": "legitimate",
    "meaning": "adj 合法的;正当的"
  },
  {
    "word": "leisure",
    "meaning": "n 空闲;闲暇"
  },
  {
    "word": "lemon",
    "meaning": "n 柠檬;柠檬树"
  },
  {
    "word": "lend",
    "meaning": "v 借出;提供"
  },
  {
    "word": "length",
    "meaning": "n 长度;距离"
  },
  {
    "word": "lengthy",
    "meaning": "adj 长的;漫长的"
  },
  {
    "word": "lens",
    "meaning": "n 透镜;镜头"
  },
  {
    "word": "less",
    "meaning": "adj /adv.较少的（地） n.较少"
  },
  {
    "word": "lessen",
    "meaning": "v 减少;减轻"
  },
  {
    "word": "lesson",
    "meaning": "n 课;教训"
  },
  {
    "word": "let",
    "meaning": "v 让;允许"
  },
  {
    "word": "letter",
    "meaning": "n 信;字母"
  },
  {
    "word": "level",
    "meaning": "n 水平 adj.水平的"
  },
  {
    "word": "lever",
    "meaning": "n 杠杆;操纵杆"
  },
  {
    "word": "levy",
    "meaning": "v /n.征税;征兵"
  },
  {
    "word": "lewd",
    "meaning": "adj 淫荡的;好色的"
  },
  {
    "word": "liability",
    "meaning": "n 责任;债务"
  },
  {
    "word": "liable",
    "meaning": "adj 有责任的;易...的"
  },
  {
    "word": "liberal",
    "meaning": "adj 自由的;慷慨的"
  },
  {
    "word": "liberate",
    "meaning": "v 解放;释放"
  },
  {
    "word": "liberation",
    "meaning": "n 解放;释放"
  },
  {
    "word": "liberty",
    "meaning": "n 自由;释放"
  },
  {
    "word": "liberty",
    "meaning": "n 自由;释放"
  },
  {
    "word": "librarian",
    "meaning": "n 图书管理员;图书馆馆长"
  },
  {
    "word": "library",
    "meaning": "n 图书馆;藏书"
  },
  {
    "word": "license",
    "meaning": "n 许可证;执照 v.许可"
  },
  {
    "word": "lichen",
    "meaning": "n 青苔;苔藓"
  },
  {
    "word": "lick",
    "meaning": "v 舔;卷过"
  },
  {
    "word": "lid",
    "meaning": "n 盖子;眼睑"
  },
  {
    "word": "lie",
    "meaning": "v 躺;说谎 n.谎言"
  },
  {
    "word": "life",
    "meaning": "n 生命;生活"
  },
  {
    "word": "lifeboat",
    "meaning": "n 生命救生艇"
  },
  {
    "word": "lifetime",
    "meaning": "n 一生;寿命"
  },
  {
    "word": "lift",
    "meaning": "v 举起;提升 n.电梯"
  },
  {
    "word": "light",
    "meaning": "n 光;灯 v.点燃"
  },
  {
    "word": "lightning",
    "meaning": "n 闪电"
  },
  {
    "word": "like",
    "meaning": "v 喜欢 prep.像;如同"
  },
  {
    "word": "likelihood",
    "meaning": "n 可能性;可能"
  },
  {
    "word": "likely",
    "meaning": "adj 可能的 adv.可能地"
  },
  {
    "word": "likewise",
    "meaning": "adv 同样地;也"
  },
  {
    "word": "limb",
    "meaning": "n 肢;树枝"
  },
  {
    "word": "limit",
    "meaning": "n 限制 v.限制"
  },
  {
    "word": "limitation",
    "meaning": "n 限制;限度"
  },
  {
    "word": "limited",
    "meaning": "adj 有限的;受限的"
  },
  {
    "word": "line",
    "meaning": "n 线;排 v.排队"
  },
  {
    "word": "linear",
    "meaning": "adj 线的;直线的"
  },
  {
    "word": "linen",
    "meaning": "n 亚麻布;亚麻制品"
  },
  {
    "word": "liner",
    "meaning": "n 班机;班船"
  },
  {
    "word": "linguistic",
    "meaning": "adj 语言的;语言学的"
  },
  {
    "word": "link",
    "meaning": "v 连接 n.环节;链环"
  },
  {
    "word": "lion",
    "meaning": "n 狮子;勇猛的人"
  },
  {
    "word": "lip",
    "meaning": "n 嘴唇;唇缘"
  },
  {
    "word": "liquid",
    "meaning": "n 液体 adj.液体的"
  },
  {
    "word": "liquor",
    "meaning": "n 酒;烈性酒"
  },
  {
    "word": "list",
    "meaning": "n 列表 v.列出"
  },
  {
    "word": "listen",
    "meaning": "v 听;倾听"
  },
  {
    "word": "literacy",
    "meaning": "n 识字;有文化"
  },
  {
    "word": "literal",
    "meaning": "adj 文字的;字面的"
  },
  {
    "word": "literally",
    "meaning": "adv 照字面地;确实地"
  },
  {
    "word": "literature",
    "meaning": "n 文学;文献"
  },
  {
    "word": "litre",
    "meaning": "n 升;公升"
  },
  {
    "word": "litter",
    "meaning": "n 垃圾;杂乱 v.乱扔"
  },
  {
    "word": "little",
    "meaning": "adj 小的 adv.很少地"
  },
  {
    "word": "little",
    "meaning": "n 小;少许"
  },
  {
    "word": "live",
    "meaning": "v 居住 adj.活的"
  },
  {
    "word": "livestock",
    "meaning": "n 家畜;牲畜"
  },
  {
    "word": "living",
    "meaning": "adj 活的 n.生计"
  },
  {
    "word": "load",
    "meaning": "n 负载 v.装载"
  },
  {
    "word": "loan",
    "meaning": "n 贷款;借款"
  },
  {
    "word": "lobby",
    "meaning": "n 大厅;休息室"
  },
  {
    "word": "local",
    "meaning": "adj 地方的;当地的"
  },
  {
    "word": "locality",
    "meaning": "n 地点;位置"
  },
  {
    "word": "locate",
    "meaning": "v 位于;定位"
  },
  {
    "word": "location",
    "meaning": "n 位置;场所"
  },
  {
    "word": "lock",
    "meaning": "n 锁 v.锁上"
  },
  {
    "word": "locker",
    "meaning": "n 锁柜;更衣室"
  },
  {
    "word": "log",
    "meaning": "n 原木;日志 v.记录"
  },
  {
    "word": "logic",
    "meaning": "n 逻辑;逻辑学"
  },
  {
    "word": "logical",
    "meaning": "adj 逻辑的;合理的"
  },
  {
    "word": "logistics",
    "meaning": "n 物流;后勤"
  },
  {
    "word": "loose",
    "meaning": "adj 松的;宽松的"
  },
  {
    "word": "loosen",
    "meaning": "v 放松;松开"
  },
  {
    "word": "lord",
    "meaning": "n 领主;上帝"
  },
  {
    "word": "lorry",
    "meaning": "n 卡车;运货汽车"
  },
  {
    "word": "lose",
    "meaning": "v 丢失;失败"
  },
  {
    "word": "loss",
    "meaning": "n 损失;失败"
  },
  {
    "word": "lot",
    "meaning": "n 许多;批量"
  },
  {
    "word": "lots",
    "meaning": "adv 很;非常"
  },
  {
    "word": "loud",
    "meaning": "adj 大声的;响亮的"
  },
  {
    "word": "loudly",
    "meaning": "adv 大声地;响亮地"
  },
  {
    "word": "love",
    "meaning": "n 爱;热爱 v.爱"
  },
  {
    "word": "lovely",
    "meaning": "adj 美好的;可爱的"
  },
  {
    "word": "lover",
    "meaning": "n 爱好者;情人"
  },
  {
    "word": "low",
    "meaning": "adj 低的;矮的 adv.低地"
  },
  {
    "word": "lower",
    "meaning": "adj 较低的 v.降低"
  },
  {
    "word": "loyal",
    "meaning": "adj 忠诚的;忠心的"
  },
  {
    "word": "loyalty",
    "meaning": "n 忠诚;忠心"
  },
  {
    "word": "lubricate",
    "meaning": "v 润滑;涂油"
  },
  {
    "word": "lubrication",
    "meaning": "n 润滑;润滑油"
  },
  {
    "word": "lump",
    "meaning": "n 块;肿块 v.形成块"
  },
  {
    "word": "lunch",
    "meaning": "n 午餐;午饭"
  },
  {
    "word": "lung",
    "meaning": "n 肺;肺部"
  },
  {
    "word": "machine",
    "meaning": "n 机器;机械"
  },
  {
    "word": "machinery",
    "meaning": "n 机械;机器"
  },
  {
    "word": "mad",
    "meaning": "adj 发疯的;狂热的"
  },
  {
    "word": "madame",
    "meaning": "n 夫人;女士"
  },
  {
    "word": "mademoiselle",
    "meaning": "n 女士;小姐（法语）"
  },
  {
    "word": "magazine",
    "meaning": "n 杂志;期刊"
  },
  {
    "word": "magic",
    "meaning": "n 魔法;巫术"
  },
  {
    "word": "magistrate",
    "meaning": "n 地方官;法官"
  },
  {
    "word": "magnet",
    "meaning": "n 磁铁;磁体"
  },
  {
    "word": "magnetic",
    "meaning": "adj 磁的;有吸引力的"
  },
  {
    "word": "magnificent",
    "meaning": "adj 壮丽的;宏伟的"
  },
  {
    "word": "magnitude",
    "meaning": "n 重要性;大小"
  },
  {
    "word": "maid",
    "meaning": "n 女仆;少女"
  },
  {
    "word": "mail",
    "meaning": "n 邮件 v.邮寄"
  },
  {
    "word": "main",
    "meaning": "adj 主要的 adv.主要地"
  },
  {
    "word": "mainland",
    "meaning": "n 大陆;本土"
  },
  {
    "word": "maintain",
    "meaning": "v 维持;维修"
  },
  {
    "word": "maintenance",
    "meaning": "n 维护;保持"
  },
  {
    "word": "major",
    "meaning": "adj 较大的 n.专业 v.专修"
  },
  {
    "word": "majority",
    "meaning": "n 多数;大多数"
  },
  {
    "word": "make",
    "meaning": "v 制造;使得"
  },
  {
    "word": "male",
    "meaning": "adj 男性的 n.男性"
  },
  {
    "word": "malfunction",
    "meaning": "n 故障;障碍"
  },
  {
    "word": "malice",
    "meaning": "n 恶意;蓄意"
  },
  {
    "word": "malicious",
    "meaning": "adj 恶意的;恶毒的"
  },
  {
    "word": "mammal",
    "meaning": "n 哺乳动物"
  },
  {
    "word": "man",
    "meaning": "n 人;男人"
  },
  {
    "word": "manage",
    "meaning": "v 管理;设法"
  },
  {
    "word": "management",
    "meaning": "n 管理;经营"
  },
  {
    "word": "manager",
    "meaning": "n 经理;管理者"
  },
  {
    "word": "managing",
    "meaning": "adj 管理的;经营的"
  },
  {
    "word": "manipulate",
    "meaning": "v 操纵;操作"
  },
  {
    "word": "manipulation",
    "meaning": "n 操纵;操作"
  },
  {
    "word": "mankind",
    "meaning": "n 人类"
  },
  {
    "word": "manner",
    "meaning": "n 方式;礼貌"
  },
  {
    "word": "manual",
    "meaning": "adj 手的 n.手册"
  },
  {
    "word": "manufacture",
    "meaning": "v /n.制造;加工"
  },
  {
    "word": "manufacturer",
    "meaning": "n 制造商;制造厂"
  },
  {
    "word": "many",
    "meaning": "adj 许多的 pron.许多"
  },
  {
    "word": "map",
    "meaning": "n 地图;图"
  },
  {
    "word": "marble",
    "meaning": "n 大理石;弹珠"
  },
  {
    "word": "march",
    "meaning": "n 行进 v.行进"
  },
  {
    "word": "margin",
    "meaning": "n 边缘;利润"
  },
  {
    "word": "marginal",
    "meaning": "adj 边缘的;微小的"
  },
  {
    "word": "marine",
    "meaning": "adj 海的;海生的"
  },
  {
    "word": "mariner",
    "meaning": "n 海员;水手"
  },
  {
    "word": "marital",
    "meaning": "adj 婚姻的;夫妻的"
  },
  {
    "word": "maritime",
    "meaning": "adj 海的;海事的"
  },
  {
    "word": "mark",
    "meaning": "n 标记 v.标记"
  },
  {
    "word": "marked",
    "meaning": "adj 显著的;有记号的"
  },
  {
    "word": "market",
    "meaning": "n 市场;行情 v.销售"
  },
  {
    "word": "marriage",
    "meaning": "n 婚姻;结婚"
  },
  {
    "word": "married",
    "meaning": "adj 已婚的;婚姻的"
  },
  {
    "word": "marrow",
    "meaning": "n 骨髓;精髓"
  },
  {
    "word": "marry",
    "meaning": "v 结婚;娶"
  },
  {
    "word": "mask",
    "meaning": "n 面具;口罩 v.掩饰"
  },
  {
    "word": "mass",
    "meaning": "n 团;群众 adj.大量的"
  },
  {
    "word": "massive",
    "meaning": "adj 大规模的;巨大的"
  },
  {
    "word": "master",
    "meaning": "n 主人;硕士 v.掌握"
  },
  {
    "word": "masterpiece",
    "meaning": "n 杰作;名著"
  },
  {
    "word": "mat",
    "meaning": "n 垫子;垫物"
  },
  {
    "word": "match",
    "meaning": "n 比赛 v.相配"
  },
  {
    "word": "mate",
    "meaning": "n 伙伴;配偶 v.配对"
  },
  {
    "word": "material",
    "meaning": "n 材料 adj.物质的"
  },
  {
    "word": "mathematical",
    "meaning": "adj 数学的;精确的"
  },
  {
    "word": "mathematics",
    "meaning": "n 数学;数学运算"
  },
  {
    "word": "matter",
    "meaning": "n 事情;物质 v.要紧"
  },
  {
    "word": "mature",
    "meaning": "adj 成熟的 v.成熟"
  },
  {
    "word": "maximum",
    "meaning": "adj 最高的 n.最大值"
  },
  {
    "word": "may",
    "meaning": "modal v 可以;可能"
  },
  {
    "word": "maybe",
    "meaning": "adv 可能;大概"
  },
  {
    "word": "mayor",
    "meaning": "n 市长"
  },
  {
    "word": "me",
    "meaning": "pron 我"
  },
  {
    "word": "meal",
    "meaning": "n 餐;膳食"
  },
  {
    "word": "mean",
    "meaning": "v 意味着 adj.吝啬的"
  },
  {
    "word": "meaning",
    "meaning": "n 意义;含义"
  },
  {
    "word": "means",
    "meaning": "n 方法;手段"
  },
  {
    "word": "meantime",
    "meaning": "n 其间;同时"
  },
  {
    "word": "meanwhile",
    "meaning": "adv 同时;其间"
  },
  {
    "word": "measure",
    "meaning": "n 测量 v.测量"
  },
  {
    "word": "measurement",
    "meaning": "n 测量;尺寸"
  },
  {
    "word": "meat",
    "meaning": "n 肉;肌肉"
  },
  {
    "word": "mechanic",
    "meaning": "n 技工;机械"
  },
  {
    "word": "mechanical",
    "meaning": "adj 机械的;力学的"
  },
  {
    "word": "mechanism",
    "meaning": "n 机械装置;机制"
  },
  {
    "word": "medal",
    "meaning": "n 奖章;勋章"
  },
  {
    "word": "medical",
    "meaning": "adj 医学的;医疗的"
  },
  {
    "word": "medication",
    "meaning": "n 药物;药物治疗"
  },
  {
    "word": "medicine",
    "meaning": "n 药;医学"
  },
  {
    "word": "medieval",
    "meaning": "adj 中古的;中古时代的"
  },
  {
    "word": "mediocre",
    "meaning": "adj 平庸的;普通的"
  },
  {
    "word": "meditate",
    "meaning": "v 冥想;沉思"
  },
  {
    "word": "meditation",
    "meaning": "n 冥想;沉思"
  },
  {
    "word": "medium",
    "meaning": "n 媒体 adj.中等的"
  },
  {
    "word": "meet",
    "meaning": "v 遇见;满足"
  },
  {
    "word": "meeting",
    "meaning": "n 会议;会面"
  },
  {
    "word": "melancholy",
    "meaning": "n 忧郁;悲哀"
  },
  {
    "word": "melody",
    "meaning": "n 旋律;曲调"
  },
  {
    "word": "melon",
    "meaning": "n 瓜;甜瓜"
  },
  {
    "word": "melt",
    "meaning": "v 融化;熔化"
  },
  {
    "word": "member",
    "meaning": "n 成员;会员"
  },
  {
    "word": "membership",
    "meaning": "n 会员身份;会员资格"
  },
  {
    "word": "membrane",
    "meaning": "n 膜;薄膜"
  },
  {
    "word": "memo",
    "meaning": "n 备忘录;便签"
  },
  {
    "word": "memorise",
    "meaning": "v 记忆;记住"
  },
  {
    "word": "memory",
    "meaning": "n 记忆;记忆力"
  },
  {
    "word": "menace",
    "meaning": "n 威胁 v.威胁"
  },
  {
    "word": "mend",
    "meaning": "v 修理;缝补"
  },
  {
    "word": "mental",
    "meaning": "adj 精神的;脑力的"
  },
  {
    "word": "mention",
    "meaning": "v 提及;说起"
  },
  {
    "word": "menu",
    "meaning": "n 菜单;菜谱"
  },
  {
    "word": "merchandise",
    "meaning": "n 商品;货物"
  },
  {
    "word": "merchant",
    "meaning": "n 商人;零售商"
  },
  {
    "word": "merciful",
    "meaning": "adj 仁慈的;宽大的"
  },
  {
    "word": "mercy",
    "meaning": "n 仁慈;宽恕"
  },
  {
    "word": "merge",
    "meaning": "v 合并;融合"
  },
  {
    "word": "merger",
    "meaning": "n 合并;并购"
  },
  {
    "word": "merit",
    "meaning": "n 优点;价值"
  },
  {
    "word": "meritorious",
    "meaning": "adj 有功的;值得赞赏的"
  },
  {
    "word": "merry",
    "meaning": "adj 欢乐的;愉快的"
  },
  {
    "word": "mess",
    "meaning": "n 混乱;困境"
  },
  {
    "word": "message",
    "meaning": "n 消息;信息"
  },
  {
    "word": "messenger",
    "meaning": "n 使者;信使"
  },
  {
    "word": "metal",
    "meaning": "n 金属;金属制品"
  },
  {
    "word": "meteorology",
    "meaning": "n 气象学;气象"
  },
  {
    "word": "meter",
    "meaning": "n 米;计量器"
  },
  {
    "word": "method",
    "meaning": "n 方法;条理"
  },
  {
    "word": "methodology",
    "meaning": "n 方法论;方法学"
  },
  {
    "word": "meticulous",
    "meaning": "adj 细心的;小心翼翼的"
  },
  {
    "word": "metric",
    "meaning": "adj 公制的;米制的"
  },
  {
    "word": "microbiology",
    "meaning": "n 微生物学"
  },
  {
    "word": "microscope",
    "meaning": "n 显微镜"
  },
  {
    "word": "microscopic",
    "meaning": "adj 显微镜的;微观的"
  },
  {
    "word": "mid",
    "meaning": "adj 中间的 adv.在中间"
  },
  {
    "word": "midday",
    "meaning": "n 中午;正午"
  },
  {
    "word": "middle",
    "meaning": "n 中间 adj.中间的"
  },
  {
    "word": "midnight",
    "meaning": "n 午夜;子夜"
  },
  {
    "word": "midst",
    "meaning": "n 在中间;当中"
  },
  {
    "word": "might",
    "meaning": "modal v 可以;可能"
  },
  {
    "word": "mighty",
    "meaning": "adj 强的;有力的"
  },
  {
    "word": "mild",
    "meaning": "adj 温和的;轻微的"
  },
  {
    "word": "mile",
    "meaning": "n 英里"
  },
  {
    "word": "military",
    "meaning": "adj 军事的;军用的"
  },
  {
    "word": "milk",
    "meaning": "n 牛奶 v.挤奶"
  },
  {
    "word": "mill",
    "meaning": "n 磨坊;工厂"
  },
  {
    "word": "millennium",
    "meaning": "n 千年;千禧年"
  },
  {
    "word": "million",
    "meaning": "num 百万"
  },
  {
    "word": "millionaire",
    "meaning": "n 百万富翁"
  },
  {
    "word": "mind",
    "meaning": "n 思想 v.介意"
  },
  {
    "word": "mine",
    "meaning": "pron 我的 n.矿"
  },
  {
    "word": "mineral",
    "meaning": "n 矿物 adj.矿物的"
  },
  {
    "word": "mingle",
    "meaning": "v 混合;交往"
  },
  {
    "word": "miniature",
    "meaning": "adj 微型的 n.缩影"
  },
  {
    "word": "minimize",
    "meaning": "v 最小化;贬低"
  },
  {
    "word": "minimum",
    "meaning": "adj 最小的 n.最小值"
  },
  {
    "word": "minister",
    "meaning": "n 部长;牧师"
  },
  {
    "word": "ministry",
    "meaning": "n 部门;部长职位"
  },
  {
    "word": "mineral",
    "meaning": "n 矿物;矿石"
  },
  {
    "word": "mink",
    "meaning": "n 貂;貂皮"
  },
  {
    "word": "minor",
    "meaning": "adj 较小的;次要的"
  },
  {
    "word": "minority",
    "meaning": "n 少数;少数民族"
  },
  {
    "word": "minus",
    "meaning": "adj 负的 prep.减去"
  },
  {
    "word": "minute",
    "meaning": "n 分钟;瞬间 adj.微小的"
  },
  {
    "word": "miracle",
    "meaning": "n 奇迹;非凡的事"
  },
  {
    "word": "mirror",
    "meaning": "n 镜子;反映"
  },
  {
    "word": "mischief",
    "meaning": "n 恶作剧;伤害"
  },
  {
    "word": "miserable",
    "meaning": "adj 痛苦的;悲惨的"
  },
  {
    "word": "misery",
    "meaning": "n 痛苦;悲惨"
  },
  {
    "word": "mislead",
    "meaning": "v 误导;带错"
  },
  {
    "word": "miss",
    "meaning": "v 想念;错过"
  },
  {
    "word": "missile",
    "meaning": "n 导弹;火箭"
  },
  {
    "word": "missing",
    "meaning": "adj 失踪的;缺少的"
  },
  {
    "word": "mission",
    "meaning": "n 使命;任务"
  },
  {
    "word": "missionary",
    "meaning": "adj 传教的 n.传教士"
  },
  {
    "word": "mist",
    "meaning": "n 雾;薄雾"
  },
  {
    "word": "mistake",
    "meaning": "n 错误 v.弄错"
  },
  {
    "word": "mistaken",
    "meaning": "adj 错误的;弄错的"
  },
  {
    "word": "misunderstand",
    "meaning": "v 误解;误会"
  },
  {
    "word": "misunderstanding",
    "meaning": "n 误解;误会"
  },
  {
    "word": "mix",
    "meaning": "v 混合;混淆"
  },
  {
    "word": "mixed",
    "meaning": "adj 混合的;杂种的"
  },
  {
    "word": "mixture",
    "meaning": "n 混合;混合物"
  },
  {
    "word": "moan",
    "meaning": "n 呻吟声 v.呻吟"
  },
  {
    "word": "mobile",
    "meaning": "adj 可移动的 n.移动电话"
  },
  {
    "word": "mobility",
    "meaning": "n 可动性;流动性"
  },
  {
    "word": "mock",
    "meaning": "adj 仿制的;模拟的"
  },
  {
    "word": "mode",
    "meaning": "n 方式;模式"
  },
  {
    "word": "model",
    "meaning": "n 模型;典型 v.模拟"
  },
  {
    "word": "moderate",
    "meaning": "adj 温和的 v.节制"
  },
  {
    "word": "modern",
    "meaning": "adj 现代的;新式的"
  },
  {
    "word": "modest",
    "meaning": "adj 谦虚的;适度的"
  },
  {
    "word": "modify",
    "meaning": "v 修改;改变"
  },
  {
    "word": "module",
    "meaning": "n 模块;模数"
  },
  {
    "word": "moist",
    "meaning": "adj 潮湿的;湿润的"
  },
  {
    "word": "moisture",
    "meaning": "n 潮湿;湿气"
  },
  {
    "word": "mold",
    "meaning": "n 模具;霉菌 v.形成"
  },
  {
    "word": "molecule",
    "meaning": "n 分子"
  },
  {
    "word": "molecular",
    "meaning": "adj 分子的"
  },
  {
    "word": "molecule",
    "meaning": "n 分子"
  },
  {
    "word": "molten",
    "meaning": "adj 熔化的;熔融的"
  },
  {
    "word": "moment",
    "meaning": "n 时刻;瞬间"
  },
  {
    "word": "momentous",
    "meaning": "adj 重大的;重要的"
  },
  {
    "word": "momentum",
    "meaning": "n 势头;动量"
  },
  {
    "word": "monarch",
    "meaning": "n 君主;帝王"
  },
  {
    "word": "monetary",
    "meaning": "adj 货币的"
  },
  {
    "word": "money",
    "meaning": "n 钱;货币"
  },
  {
    "word": "monitor",
    "meaning": "n 监视器 v.监视"
  },
  {
    "word": "monk",
    "meaning": "n 修道士;僧侣"
  },
  {
    "word": "monkey",
    "meaning": "n 猴子"
  },
  {
    "word": "monopoly",
    "meaning": "n 垄断;专利权"
  },
  {
    "word": "monotonous",
    "meaning": "adj 单调的;无变化的"
  },
  {
    "word": "monster",
    "meaning": "n 怪物;巨兽"
  },
  {
    "word": "monthly",
    "meaning": "adj 每月的 adv.每月"
  },
  {
    "word": "monument",
    "meaning": "n 纪念碑;古迹"
  },
  {
    "word": "mood",
    "meaning": "n 心情;情绪"
  },
  {
    "word": "moon",
    "meaning": "n 月亮;月光"
  },
  {
    "word": "moral",
    "meaning": "adj 道德的 n.道德"
  },
  {
    "word": "morale",
    "meaning": "n 士气;斗志"
  },
  {
    "word": "morality",
    "meaning": "n 道德;德行"
  },
  {
    "word": "more",
    "meaning": "adj 更多的 adv.更多地"
  },
  {
    "word": "moreover",
    "meaning": "adv 而且;此外"
  },
  {
    "word": "morning",
    "meaning": "n 早晨;上午"
  },
  {
    "word": "mortal",
    "meaning": "adj 终有一死的;致命的"
  },
  {
    "word": "mortgage",
    "meaning": "n 抵押 v.抵押"
  },
  {
    "word": "mosquito",
    "meaning": "n 蚊子"
  },
  {
    "word": "most",
    "meaning": "adj 大部分的 adv.最"
  },
  {
    "word": "mostly",
    "meaning": "adv 大部分;主要地"
  },
  {
    "word": "motel",
    "meaning": "n 汽车旅馆"
  },
  {
    "word": "mother",
    "meaning": "n 母亲;妈妈"
  },
  {
    "word": "motion",
    "meaning": "n 运动;动作"
  },
  {
    "word": "motivate",
    "meaning": "v 激励;激发"
  },
  {
    "word": "motivation",
    "meaning": "n 动机;激励"
  },
  {
    "word": "motive",
    "meaning": "n 动机;目的"
  },
  {
    "word": "motor",
    "meaning": "n 发动机;汽车"
  },
  {
    "word": "mould",
    "meaning": "n 模具;土霉菌 v.塑造"
  },
  {
    "word": "mount",
    "meaning": "n 坐骑 v.爬上;安装"
  },
  {
    "word": "mountain",
    "meaning": "n 山;山脉"
  },
  {
    "word": "mountainous",
    "meaning": "adj 多山的;巨大的"
  },
  {
    "word": "mourn",
    "meaning": "v 哀悼;忧伤"
  },
  {
    "word": "mourning",
    "meaning": "n 哀悼;悲伤"
  },
  {
    "word": "mouse",
    "meaning": "n 老鼠;鼠标"
  },
  {
    "word": "mouth",
    "meaning": "n 口;嘴巴"
  },
  {
    "word": "move",
    "meaning": "v 移动;搬家"
  },
  {
    "word": "movement",
    "meaning": "n 移动;运动"
  },
  {
    "word": "movie",
    "meaning": "n 电影;影片"
  },
  {
    "word": "much",
    "meaning": "adj 许多的 adv.非常"
  },
  {
    "word": "mud",
    "meaning": "n 泥;泥浆"
  },
  {
    "word": "muddy",
    "meaning": "adj 泥泞的 v.使泥泞"
  },
  {
    "word": "mug",
    "meaning": "n 大杯;咖啡杯"
  },
  {
    "word": "multiple",
    "meaning": "adj 多重的;多样的"
  },
  {
    "word": "multiply",
    "meaning": "v 乘;繁殖"
  },
  {
    "word": "mum",
    "meaning": "n 妈妈;沉默"
  },
  {
    "word": "mumble",
    "meaning": "v 喃喃而语;口齿不清地说"
  },
  {
    "word": "mummy",
    "meaning": "n 木乃伊;干瘪的尸体"
  },
  {
    "word": "murder",
    "meaning": "n 谋杀 v.谋杀"
  },
  {
    "word": "murderer",
    "meaning": "n 凶手;谋杀犯"
  },
  {
    "word": "murmur",
    "meaning": "v 低语;低声抱怨 n.低语"
  },
  {
    "word": "muscle",
    "meaning": "n 肌肉;力量"
  },
  {
    "word": "muscular",
    "meaning": "adj 肌肉的;强健的"
  },
  {
    "word": "museum",
    "meaning": "n 博物馆;展览馆"
  },
  {
    "word": "mushroom",
    "meaning": "n 蘑菇;伞菌"
  },
  {
    "word": "music",
    "meaning": "n 音乐;乐曲"
  },
  {
    "word": "musical",
    "meaning": "adj 音乐的;和谐的"
  },
  {
    "word": "musician",
    "meaning": "n 音乐家;作曲家"
  },
  {
    "word": "must",
    "meaning": "modal v 必须;一定"
  },
  {
    "word": "mutual",
    "meaning": "adj 相互的;共同的"
  },
  {
    "word": "mutter",
    "meaning": "v 轻声低语;抱怨"
  },
  {
    "word": "my",
    "meaning": "pron 我的"
  },
  {
    "word": "myself",
    "meaning": "pron 我自己"
  },
  {
    "word": "mystery",
    "meaning": "n 神秘;神秘的事物"
  },
  {
    "word": "mystical",
    "meaning": "adj 神秘的;难以理解的"
  },
  {
    "word": "myth",
    "meaning": "n 神话;虚构的故事"
  },
  {
    "word": "nail",
    "meaning": "n 钉子;指甲 v.钉"
  },
  {
    "word": "naive",
    "meaning": "adj 天真的;纯朴的"
  },
  {
    "word": "naked",
    "meaning": "adj 裸体的;无遮盖的"
  },
  {
    "word": "name",
    "meaning": "n 名字;名称 v.命名"
  },
  {
    "word": "naming",
    "meaning": "n 命名"
  },
  {
    "word": "nap",
    "meaning": "n 小睡;打盹"
  },
  {
    "word": "napkin",
    "meaning": "n 餐巾;尿布"
  },
  {
    "word": "narrative",
    "meaning": "n 叙述;故事"
  },
  {
    "word": "narrow",
    "meaning": "adj 狭窄的 v.变窄"
  },
  {
    "word": "nasty",
    "meaning": "adj 肮脏的;下流的"
  },
  {
    "word": "nation",
    "meaning": "n 国家;民族"
  },
  {
    "word": "national",
    "meaning": "adj 国家的;民族的"
  },
  {
    "word": "nationality",
    "meaning": "n 国籍;民族"
  },
  {
    "word": "native",
    "meaning": "adj 本土的 n.本地人"
  },
  {
    "word": "natural",
    "meaning": "adj 自然的;天生的"
  },
  {
    "word": "nature",
    "meaning": "n 自然;本性"
  },
  {
    "word": "naval",
    "meaning": "adj 海军的;军舰的"
  },
  {
    "word": "navigation",
    "meaning": "n 航行;航海"
  },
  {
    "word": "navigator",
    "meaning": "n 航海家;领航员"
  },
  {
    "word": "navy",
    "meaning": "n 海军;舰队"
  },
  {
    "word": "near",
    "meaning": "adj 近的 adv.近地 prep.靠近"
  },
  {
    "word": "nearby",
    "meaning": "adj 附近的 adv.在附近"
  },
  {
    "word": "nearly",
    "meaning": "adv 几乎;将近"
  },
  {
    "word": "neat",
    "meaning": "adj 整洁的;灵巧的"
  },
  {
    "word": "necessary",
    "meaning": "adj 必要的;必然的"
  },
  {
    "word": "necessitate",
    "meaning": "v 使成为必要"
  },
  {
    "word": "necessity",
    "meaning": "n 必要性;需要"
  },
  {
    "word": "neck",
    "meaning": "n 颈;脖子"
  },
  {
    "word": "necklace",
    "meaning": "n 项链;项圈"
  },
  {
    "word": "need",
    "meaning": "n 需要 v.需要"
  },
  {
    "word": "needle",
    "meaning": "n 针;指针"
  },
  {
    "word": "needless",
    "meaning": "adj 不必要的;无用的"
  },
  {
    "word": "needy",
    "meaning": "adj 贫穷的;贫困的"
  },
  {
    "word": "neglect",
    "meaning": "v 忽视;忽略 n.疏忽"
  },
  {
    "word": "negligible",
    "meaning": "adj 可以忽略的;微不足道的"
  },
  {
    "word": "negotiate",
    "meaning": "v 谈判;商议"
  },
  {
    "word": "negotiation",
    "meaning": "n 谈判;协商"
  },
  {
    "word": "negro",
    "meaning": "n 黑人 adj.黑色的"
  },
  {
    "word": "neighbor",
    "meaning": "n 邻居;邻国"
  },
  {
    "word": "neighborhood",
    "meaning": "n 邻区;邻近"
  },
  {
    "word": "neither",
    "meaning": "adj 两者都不的 conj.两者都不"
  },
  {
    "word": "nephew",
    "meaning": "n 侄子;外甥"
  },
  {
    "word": "nerve",
    "meaning": "n 神经;勇气"
  },
  {
    "word": "nervous",
    "meaning": "adj 神经的;紧张的"
  },
  {
    "word": "nest",
    "meaning": "n 巢;窝 v.筑巢"
  },
  {
    "word": "net",
    "meaning": "adj 净的 n.网"
  },
  {
    "word": "network",
    "meaning": "n 网络;网状物"
  },
  {
    "word": "neutral",
    "meaning": "adj 中立的;中性的"
  },
  {
    "word": "never",
    "meaning": "adv 从不;永不"
  },
  {
    "word": "nevertheless",
    "meaning": "adv 然而;尽管如此"
  },
  {
    "word": "new",
    "meaning": "adj 新的;新鲜的"
  },
  {
    "word": "newly",
    "meaning": "adv 最近;新近"
  },
  {
    "word": "news",
    "meaning": "n 新闻;消息"
  },
  {
    "word": "newspaper",
    "meaning": "n 报纸"
  },
  {
    "word": "next",
    "meaning": "adj 最近的;接下来的"
  },
  {
    "word": "nice",
    "meaning": "adj 令人愉快的;好的"
  },
  {
    "word": "niche",
    "meaning": "n 壁龛;合适的职业"
  },
  {
    "word": "nickel",
    "meaning": "n 镍;五分硬币"
  },
  {
    "word": "nickname",
    "meaning": "n 绰号;浑名"
  },
  {
    "word": "night",
    "meaning": "n 夜;夜间"
  },
  {
    "word": "nightmare",
    "meaning": "n 恶梦;可怕的事情"
  },
  {
    "word": "nil",
    "meaning": "n 无;零"
  },
  {
    "word": "no",
    "meaning": "adv 不 adj.没有的"
  },
  {
    "word": "noble",
    "meaning": "adj 高贵的;贵族的 n.贵族"
  },
  {
    "word": "nobody",
    "meaning": "pron 没有人 n.小人物"
  },
  {
    "word": "nod",
    "meaning": "v 点头;打盹"
  },
  {
    "word": "noise",
    "meaning": "n 噪音;喧闹声"
  },
  {
    "word": "noisy",
    "meaning": "adj 嘈杂的;喧闹的"
  },
  {
    "word": "nominal",
    "meaning": "adj 名义上的;有名无实的"
  },
  {
    "word": "nominate",
    "meaning": "v 提名;推荐"
  },
  {
    "word": "nomination",
    "meaning": "n 提名;任命"
  },
  {
    "word": "nonexistent",
    "meaning": "adj 不存在的;非现存的"
  },
  {
    "word": "nonsense",
    "meaning": "n 胡说;废话"
  },
  {
    "word": "noodle",
    "meaning": "n 面条;笨蛋"
  },
  {
    "word": "normal",
    "meaning": "adj 正常的;标准的"
  },
  {
    "word": "normally",
    "meaning": "adv 正常地;通常地"
  },
  {
    "word": "north",
    "meaning": "n 北方 adj.北的"
  },
  {
    "word": "northeast",
    "meaning": "n 东北 adv.在东北"
  },
  {
    "word": "northwest",
    "meaning": "n 西北 adv.在西北"
  },
  {
    "word": "nose",
    "meaning": "n 鼻子;嗅觉 v.嗅"
  },
  {
    "word": "not",
    "meaning": "adv 不"
  },
  {
    "word": "note",
    "meaning": "n 笔记;便条 v.记下"
  },
  {
    "word": "notebook",
    "meaning": "n 笔记本;练习簿"
  },
  {
    "word": "nothing",
    "meaning": "n 无;没有什么"
  },
  {
    "word": "notice",
    "meaning": "n 通知;注意 v.注意"
  },
  {
    "word": "notification",
    "meaning": "n 通知;通告"
  },
  {
    "word": "notify",
    "meaning": "v 通知;告知"
  },
  {
    "word": "notion",
    "meaning": "n 概念;意图"
  },
  {
    "word": "notorious",
    "meaning": "adj 臭名昭著的;著名的"
  },
  {
    "word": "notwithstanding",
    "meaning": "prep /adv.尽管;不论"
  },
  {
    "word": "noun",
    "meaning": "n 名词;名字"
  },
  {
    "word": "novel",
    "meaning": "adj 新奇的 n.小说"
  },
  {
    "word": "novelist",
    "meaning": "n 小说家"
  },
  {
    "word": "november",
    "meaning": "n 十一月"
  },
  {
    "word": "now",
    "meaning": "adv 现在;目前"
  },
  {
    "word": "nowadays",
    "meaning": "adv 现今;时下"
  },
  {
    "word": "nowhere",
    "meaning": "adv 无处;哪里都不"
  },
  {
    "word": "nuclear",
    "meaning": "adj 原子核的;核心的"
  },
  {
    "word": "nucleus",
    "meaning": "n 核心;原子核"
  },
  {
    "word": "nuisance",
    "meaning": "n 讨厌的东西;麻烦事"
  },
  {
    "word": "number",
    "meaning": "n 数字;号码 v.编号"
  },
  {
    "word": "numerous",
    "meaning": "adj 众多的;许多的"
  },
  {
    "word": "nurse",
    "meaning": "n 护士 v.护理;哺育"
  },
  {
    "word": "nursery",
    "meaning": "n 托儿所;苗圃"
  },
  {
    "word": "nurture",
    "meaning": "n /v.养育;培育"
  },
  {
    "word": "nut",
    "meaning": "n 坚果;螺母"
  },
  {
    "word": "nutrition",
    "meaning": "n 营养;营养学"
  },
  {
    "word": "oak",
    "meaning": "n 橡树;橡木"
  },
  {
    "word": "oar",
    "meaning": "n 桨;橹"
  },
  {
    "word": "oasis",
    "meaning": "n 绿洲;休息场所"
  },
  {
    "word": "oath",
    "meaning": "n 誓言;宣誓"
  },
  {
    "word": "obedience",
    "meaning": "n 服从;顺从"
  },
  {
    "word": "obedient",
    "meaning": "adj 服从的;顺从的"
  },
  {
    "word": "obeisance",
    "meaning": "n 鞠躬;尊敬"
  },
  {
    "word": "obese",
    "meaning": "adj 肥胖的"
  },
  {
    "word": "obey",
    "meaning": "v 服从;遵守"
  },
  {
    "word": "object",
    "meaning": "n 物体;目标 v.反对"
  },
  {
    "word": "objection",
    "meaning": "n 反对;异议"
  },
  {
    "word": "objective",
    "meaning": "adj 客观的 n.目标"
  },
  {
    "word": "obligation",
    "meaning": "n 责任;义务"
  },
  {
    "word": "oblige",
    "meaning": "v 迫使;赐给"
  },
  {
    "word": "obscure",
    "meaning": "adj 模糊的 v.隐藏"
  },
  {
    "word": "observation",
    "meaning": "n 观察;评论"
  },
  {
    "word": "observe",
    "meaning": "v 观察;注意到"
  },
  {
    "word": "observer",
    "meaning": "n 观察者;观察员"
  },
  {
    "word": "obsess",
    "meaning": "v 使着迷;困扰"
  },
  {
    "word": "obsession",
    "meaning": "n 着迷;固执"
  },
  {
    "word": "obsolete",
    "meaning": "adj 过时的;废弃的"
  },
  {
    "word": "obstacle",
    "meaning": "n 障碍;干扰"
  },
  {
    "word": "obstruct",
    "meaning": "v 阻塞;阻挡"
  },
  {
    "word": "obstruction",
    "meaning": "n 障碍;妨碍"
  },
  {
    "word": "obtain",
    "meaning": "v 获得;得到"
  },
  {
    "word": "obvious",
    "meaning": "adj 明显的;显而易见的"
  },
  {
    "word": "occasion",
    "meaning": "n 场合;时机"
  },
  {
    "word": "occasional",
    "meaning": "adj 偶尔的;临时的"
  },
  {
    "word": "occupation",
    "meaning": "n 职业;占领"
  },
  {
    "word": "occupy",
    "meaning": "v 占领;占据"
  },
  {
    "word": "occur",
    "meaning": "v 发生;出现"
  },
  {
    "word": "occurrence",
    "meaning": "n 发生;出现"
  },
  {
    "word": "ocean",
    "meaning": "n 海洋;大量"
  },
  {
    "word": "o'clock",
    "meaning": "adv 点钟（用于时间）"
  },
  {
    "word": "October",
    "meaning": "n 十月"
  },
  {
    "word": "odd",
    "meaning": "adj 奇数的;奇怪的"
  },
  {
    "word": "odds",
    "meaning": "n 不同;可能性"
  },
  {
    "word": "odor",
    "meaning": "n 气味;香味"
  },
  {
    "word": "of",
    "meaning": "prep ...的;关于"
  },
  {
    "word": "off",
    "meaning": "adv 离开 prep.从"
  },
  {
    "word": "offend",
    "meaning": "v 冒犯;得罪"
  },
  {
    "word": "offense",
    "meaning": "n 进攻;冒犯"
  },
  {
    "word": "offer",
    "meaning": "v 提供;出价 n.提议"
  },
  {
    "word": "offering",
    "meaning": "n 提供;祭品"
  },
  {
    "word": "office",
    "meaning": "n 办公室;职务"
  },
  {
    "word": "officer",
    "meaning": "n 官员;军官"
  },
  {
    "word": "official",
    "meaning": "adj 官方的;正式的"
  },
  {
    "word": "offset",
    "meaning": "v 抵消;补偿"
  },
  {
    "word": "offspring",
    "meaning": "n 后代;子女"
  },
  {
    "word": "often",
    "meaning": "adv 经常;常常"
  },
  {
    "word": "oil",
    "meaning": "n 油;石油 v.给...加润滑油"
  },
  {
    "word": "ointment",
    "meaning": "n 药膏;油膏"
  },
  {
    "word": "okay",
    "meaning": "adj 好的 adv.行"
  },
  {
    "word": "old",
    "meaning": "adj 老的;旧的"
  },
  {
    "word": "olive",
    "meaning": "n 橄榄;橄榄树"
  },
  {
    "word": "olympic",
    "meaning": "adj 奥林匹克的"
  },
  {
    "word": "omit",
    "meaning": "v 省略;遗漏"
  },
  {
    "word": "on",
    "meaning": "adv 在上 prep.在...之上"
  },
  {
    "word": "once",
    "meaning": "adv 一次;曾经"
  },
  {
    "word": "one",
    "meaning": "num 一;一个"
  },
  {
    "word": "oneself",
    "meaning": "pron 自己;自身"
  },
  {
    "word": "onion",
    "meaning": "n 洋葱;洋葱头"
  },
  {
    "word": "online",
    "meaning": "adj 在线的 adv.在线地"
  },
  {
    "word": "only",
    "meaning": "adj 唯一的 adv.只"
  },
  {
    "word": "onto",
    "meaning": "prep 到...上"
  },
  {
    "word": "onus",
    "meaning": "n 责任;负担"
  },
  {
    "word": "onward",
    "meaning": "adv 向前;前进"
  },
  {
    "word": "open",
    "meaning": "adj 开着的 v.打开"
  },
  {
    "word": "opener",
    "meaning": "n 开罐刀;开瓶器"
  },
  {
    "word": "opening",
    "meaning": "n 开始;空缺"
  },
  {
    "word": "opera",
    "meaning": "n 歌剧;歌剧艺术"
  },
  {
    "word": "operate",
    "meaning": "v 操作;动手术"
  },
  {
    "word": "operation",
    "meaning": "n 操作;手术"
  },
  {
    "word": "operational",
    "meaning": "adj 操作的;运作的"
  },
  {
    "word": "operator",
    "meaning": "n 操作员;接线员"
  },
  {
    "word": "opinion",
    "meaning": "n 意见;看法"
  },
  {
    "word": "opponent",
    "meaning": "n 敌手;对手"
  },
  {
    "word": "opportunity",
    "meaning": "n 机会;时机"
  },
  {
    "word": "oppose",
    "meaning": "v 反对;对抗"
  },
  {
    "word": "opposite",
    "meaning": "adj 对面的 n.对立面"
  },
  {
    "word": "opposition",
    "meaning": "n 反对;敌对"
  },
  {
    "word": "option",
    "meaning": "n 选择;选择权"
  },
  {
    "word": "optional",
    "meaning": "adj 可选择的;随意的"
  },
  {
    "word": "opulent",
    "meaning": "adj 富裕的;丰富的"
  },
  {
    "word": "or",
    "meaning": "conj 或;就是"
  },
  {
    "word": "oracle",
    "meaning": "n 神谕;预言者"
  },
  {
    "word": "oral",
    "meaning": "adj 口头的;口的"
  },
  {
    "word": "orange",
    "meaning": "n 橙子;橙色 adj.橙色的"
  },
  {
    "word": "oration",
    "meaning": "n 演讲;讲话"
  },
  {
    "word": "orchestra",
    "meaning": "n 管弦乐队"
  },
  {
    "word": "ordained",
    "meaning": "adj 命中注定的;神授的"
  },
  {
    "word": "order",
    "meaning": "n 顺序 v.命令"
  },
  {
    "word": "orderly",
    "meaning": "adj 有秩序的;整齐的"
  },
  {
    "word": "ordinance",
    "meaning": "n 条例;法令"
  },
  {
    "word": "ordinary",
    "meaning": "adj 普通的;平凡的"
  },
  {
    "word": "ore",
    "meaning": "n 矿石;矿"
  },
  {
    "word": "organ",
    "meaning": "n 器官;风琴"
  },
  {
    "word": "organic",
    "meaning": "adj 器官的;有机的"
  },
  {
    "word": "organism",
    "meaning": "n 生物体;有机体"
  },
  {
    "word": "organization",
    "meaning": "n 组织;机构"
  },
  {
    "word": "organize",
    "meaning": "v 组织;安排"
  },
  {
    "word": "orient",
    "meaning": "v 定位;定方向"
  },
  {
    "word": "oriental",
    "meaning": "adj 东方的;东方人的"
  },
  {
    "word": "orientation",
    "meaning": "n 方向;定位"
  },
  {
    "word": "origin",
    "meaning": "n 起源;出身"
  },
  {
    "word": "original",
    "meaning": "adj 原始的 n.原件"
  },
  {
    "word": "originality",
    "meaning": "n 创造性;独特性"
  },
  {
    "word": "ornament",
    "meaning": "n 装饰物 v.装饰"
  },
  {
    "word": "orphaned",
    "meaning": "adj 孤儿的;无依无靠的"
  },
  {
    "word": "orthodox",
    "meaning": "adj 正统的;惯常的"
  },
  {
    "word": "other",
    "meaning": "adj 其他的;另外的"
  },
  {
    "word": "otherwise",
    "meaning": "adv 否则;另外"
  },
  {
    "word": "ought",
    "meaning": "modal v 应该;应当"
  },
  {
    "word": "ounce",
    "meaning": "n 盎司;少量"
  },
  {
    "word": "our",
    "meaning": "pron 我们的"
  },
  {
    "word": "ours",
    "meaning": "pron 我们的"
  },
  {
    "word": "ourselves",
    "meaning": "pron 我们自己"
  },
  {
    "word": "out",
    "meaning": "adv 出;在外 prep.从...出来"
  },
  {
    "word": "outcome",
    "meaning": "n 结果;效果"
  },
  {
    "word": "outdoor",
    "meaning": "adj 室外的;户外的"
  },
  {
    "word": "outer",
    "meaning": "adj 外部的;外面的"
  },
  {
    "word": "outfit",
    "meaning": "n 一套装备 v.配备"
  },
  {
    "word": "outing",
    "meaning": "n 外出;远足"
  },
  {
    "word": "outlet",
    "meaning": "n 出口;发泄"
  },
  {
    "word": "outline",
    "meaning": "n 轮廓 v.概述"
  },
  {
    "word": "outlook",
    "meaning": "n 观点;展望"
  },
  {
    "word": "output",
    "meaning": "n 输出;产量 v.输出"
  },
  {
    "word": "outrage",
    "meaning": "n 暴行;愤怒"
  },
  {
    "word": "outright",
    "meaning": "adj 完全的;直率的"
  },
  {
    "word": "outset",
    "meaning": "n 开始;起始"
  },
  {
    "word": "outside",
    "meaning": "adv 在外面 n.外部"
  },
  {
    "word": "outsider",
    "meaning": "n 局外人;外来者"
  },
  {
    "word": "outskirts",
    "meaning": "n 郊区;市郊"
  },
  {
    "word": "outstanding",
    "meaning": "adj 杰出的;突出的"
  },
  {
    "word": "outward",
    "meaning": "adj 向外的 adv.向外"
  },
  {
    "word": "oval",
    "meaning": "adj 椭圆形的 n.椭圆形"
  },
  {
    "word": "oven",
    "meaning": "n 炉;灶"
  },
  {
    "word": "over",
    "meaning": "adv 结束 prep.在...之上"
  },
  {
    "word": "overcoat",
    "meaning": "n 大衣;外套"
  },
  {
    "word": "overcome",
    "meaning": "v 克服;征服"
  },
  {
    "word": "overflow",
    "meaning": "v 溢出;充满"
  },
  {
    "word": "overhead",
    "meaning": "adj 高架的;在头顶上的"
  },
  {
    "word": "overlook",
    "meaning": "v 忽略;俯瞰"
  },
  {
    "word": "overnight",
    "meaning": "adj 通宵的 adv.一夜之间"
  },
  {
    "word": "overpass",
    "meaning": "n 过街天桥 v.走过"
  },
  {
    "word": "overpopulation",
    "meaning": "n 人口过密;过剩"
  },
  {
    "word": "overseas",
    "meaning": "adv 海外 adj.海外的"
  },
  {
    "word": "oversight",
    "meaning": "n 疏忽;管理"
  },
  {
    "word": "overtake",
    "meaning": "v 超过;突然袭击"
  },
  {
    "word": "overthrow",
    "meaning": "v 推翻;废黜"
  },
  {
    "word": "overtime",
    "meaning": "adj 超时的 adv.加班"
  },
  {
    "word": "overturn",
    "meaning": "v 推翻;倾覆"
  },
  {
    "word": "overwhelm",
    "meaning": "v 压倒;使不知所措"
  },
  {
    "word": "overwhelming",
    "meaning": "adj 压倒性的;巨大的"
  },
  {
    "word": "owe",
    "meaning": "v 欠;归功于"
  },
  {
    "word": "owing",
    "meaning": "adj 欠的;未付的"
  },
  {
    "word": "owl",
    "meaning": "n 猫头鹰"
  },
  {
    "word": "own",
    "meaning": "adj 自己的 v.拥有"
  },
  {
    "word": "owner",
    "meaning": "n 所有者;物主"
  },
  {
    "word": "ownership",
    "meaning": "n 所有权;所有制"
  },
  {
    "word": "ox",
    "meaning": "n 牛;公牛"
  },
  {
    "word": "oxide",
    "meaning": "n 氧化物"
  },
  {
    "word": "oxygen",
    "meaning": "n 氧;氧气"
  },
  {
    "word": "oyster",
    "meaning": "n 牡蛎;蚝"
  },
  {
    "word": "pace",
    "meaning": "n 步;速度 v.踱步"
  },
  {
    "word": "pacific",
    "meaning": "adj 和平的 n.太平洋"
  },
  {
    "word": "pack",
    "meaning": "n 包装 v.打包"
  },
  {
    "word": "package",
    "meaning": "n 包裹;套装 v.包装"
  },
  {
    "word": "packet",
    "meaning": "n 小包;数据包"
  },
  {
    "word": "paddle",
    "meaning": "n 桨 v.用桨划"
  },
  {
    "word": "paddock",
    "meaning": "n 围场;马厩"
  },
  {
    "word": "pagan",
    "meaning": "n 异教徒 adj.异教的"
  },
  {
    "word": "page",
    "meaning": "n 页;页码"
  },
  {
    "word": "pagination",
    "meaning": "n 分页;编号"
  },
  {
    "word": "paid",
    "meaning": "adj 付费的"
  },
  {
    "word": "pain",
    "meaning": "n 痛苦;疼痛"
  },
  {
    "word": "painful",
    "meaning": "adj 痛苦的;困难的"
  },
  {
    "word": "paint",
    "meaning": "n 油漆 v.画;涂漆"
  },
  {
    "word": "painter",
    "meaning": "n 画家;油漆工"
  },
  {
    "word": "painting",
    "meaning": "n 绘画;油画"
  },
  {
    "word": "pair",
    "meaning": "n 一对;双 v.配对"
  },
  {
    "word": "palace",
    "meaning": "n 宫殿;宏伟的住宅"
  },
  {
    "word": "pale",
    "meaning": "adj 苍白的;浅的 v.失色"
  },
  {
    "word": "paleontology",
    "meaning": "n 古生物学"
  },
  {
    "word": "pan",
    "meaning": "n 平底锅;盘"
  },
  {
    "word": "pancake",
    "meaning": "n 薄煎饼;烤饼"
  },
  {
    "word": "panda",
    "meaning": "n 熊猫"
  },
  {
    "word": "panel",
    "meaning": "n 面板;专家咨询组"
  },
  {
    "word": "panic",
    "meaning": "n 恐慌 v.使恐慌"
  },
  {
    "word": "panorama",
    "meaning": "n 全景;全景画"
  },
  {
    "word": "pant",
    "meaning": "n 气喘 v.喘息"
  },
  {
    "word": "panting",
    "meaning": "adj 喘息的;气喘吁吁的"
  },
  {
    "word": "pants",
    "meaning": "n 裤子;长裤"
  },
  {
    "word": "paper",
    "meaning": "n 纸;报纸"
  },
  {
    "word": "paperback",
    "meaning": "n 平装书;简装书"
  },
  {
    "word": "parachute",
    "meaning": "n 降落伞 v.跳伞"
  },
  {
    "word": "parade",
    "meaning": "n 游行 v.游行"
  },
  {
    "word": "paradigm",
    "meaning": "n 范例;范式"
  },
  {
    "word": "paradise",
    "meaning": "n 天堂;乐土"
  },
  {
    "word": "paragraph",
    "meaning": "n 段落;文章"
  },
  {
    "word": "parallel",
    "meaning": "adj 平行的 n.平行线"
  },
  {
    "word": "paralyse",
    "meaning": "v 使瘫痪;使麻痹"
  },
  {
    "word": "parameter",
    "meaning": "n 参数;界限"
  },
  {
    "word": "parcel",
    "meaning": "n 包裹;邮包"
  },
  {
    "word": "pardon",
    "meaning": "n 原谅 v.原谅"
  },
  {
    "word": "parent",
    "meaning": "n 父母;母亲"
  },
  {
    "word": "parental",
    "meaning": "adj 父母的;亲本的"
  },
  {
    "word": "parenthesis",
    "meaning": "n 括号;附加说明"
  },
  {
    "word": "park",
    "meaning": "n 公园;停车场 v.停车"
  },
  {
    "word": "parliament",
    "meaning": "n 议会;国会"
  },
  {
    "word": "part",
    "meaning": "n 部分;角色 v.分离"
  },
  {
    "word": "partial",
    "meaning": "adj 部分的;偏袒的"
  },
  {
    "word": "participant",
    "meaning": "n 参与者;分享者"
  },
  {
    "word": "participate",
    "meaning": "v 参与;分享"
  },
  {
    "word": "participation",
    "meaning": "n 参与;分享"
  },
  {
    "word": "particle",
    "meaning": "n 粒子;微粒"
  },
  {
    "word": "particular",
    "meaning": "adj 特别的;具体的"
  },
  {
    "word": "particularly",
    "meaning": "adv 特别地;尤其"
  },
  {
    "word": "partition",
    "meaning": "n 分割;划分"
  },
  {
    "word": "partly",
    "meaning": "adv 部分地;不完全地"
  },
  {
    "word": "partner",
    "meaning": "n 伙伴;合伙人"
  },
  {
    "word": "partnership",
    "meaning": "n 合伙;合作关系"
  },
  {
    "word": "part-time",
    "meaning": "adj 兼职的;部分时间的"
  },
  {
    "word": "party",
    "meaning": "n 党;聚会"
  },
  {
    "word": "pass",
    "meaning": "v 通过;传递"
  },
  {
    "word": "passage",
    "meaning": "n 通道;段落"
  },
  {
    "word": "passenger",
    "meaning": "n 乘客;旅客"
  },
  {
    "word": "passion",
    "meaning": "n 激情;热情"
  },
  {
    "word": "passionate",
    "meaning": "adj 热情的;热烈的"
  },
  {
    "word": "passive",
    "meaning": "adj 被动的;消极的"
  },
  {
    "word": "passport",
    "meaning": "n 护照;通行证"
  },
  {
    "word": "password",
    "meaning": "n 密码;口令"
  },
  {
    "word": "past",
    "meaning": "adj 过去的 n.过去"
  },
  {
    "word": "paste",
    "meaning": "n 浆糊 v.粘贴"
  },
  {
    "word": "pastime",
    "meaning": "n 消遣;娱乐"
  },
  {
    "word": "pasture",
    "meaning": "n 牧场;草地"
  },
  {
    "word": "pat",
    "meaning": "n 轻拍 v.轻拍"
  },
  {
    "word": "patch",
    "meaning": "n 补丁;补片 v.修补"
  },
  {
    "word": "patent",
    "meaning": "n 专利权 adj.专利的"
  },
  {
    "word": "path",
    "meaning": "n 小路;路径"
  },
  {
    "word": "pathetic",
    "meaning": "adj 引起怜悯的;可怜的"
  },
  {
    "word": "patience",
    "meaning": "n 耐性;忍耐"
  },
  {
    "word": "patient",
    "meaning": "adj 有耐心的 n.病人"
  },
  {
    "word": "patriot",
    "meaning": "n 爱国者;爱国主义者"
  },
  {
    "word": "patriotic",
    "meaning": "adj 爱国的"
  },
  {
    "word": "patriotism",
    "meaning": "n 爱国主义;爱国心"
  },
  {
    "word": "patrol",
    "meaning": "v /n.巡逻;巡查"
  },
  {
    "word": "patron",
    "meaning": "n 赞助人;顾客"
  },
  {
    "word": "pattern",
    "meaning": "n 图案;模式 v.模仿"
  },
  {
    "word": "pause",
    "meaning": "n 暂停;中止 v.暂停"
  },
  {
    "word": "pave",
    "meaning": "v 铺路;准备"
  },
  {
    "word": "pavement",
    "meaning": "n 人行道;路面"
  },
  {
    "word": "paw",
    "meaning": "n 爪子"
  },
  {
    "word": "pay",
    "meaning": "v 支付;报酬 n.工资"
  },
  {
    "word": "payment",
    "meaning": "n 支付;报酬"
  },
  {
    "word": "pea",
    "meaning": "n 豌豆;豌豆属"
  },
  {
    "word": "peace",
    "meaning": "n 和平;宁静"
  },
  {
    "word": "peaceful",
    "meaning": "adj 和平的;安静的"
  },
  {
    "word": "peach",
    "meaning": "n 桃子;桃树"
  },
  {
    "word": "peak",
    "meaning": "n 山峰;尖端 adj.最高的"
  },
  {
    "word": "peanut",
    "meaning": "n 花生;花生豆"
  },
  {
    "word": "pear",
    "meaning": "n 梨;梨树"
  },
  {
    "word": "pearl",
    "meaning": "n 珍珠;珍珠色"
  },
  {
    "word": "peasant",
    "meaning": "n 农民;佃农"
  },
  {
    "word": "pebble",
    "meaning": "n 小圆石;卵石"
  },
  {
    "word": "peck",
    "meaning": "v 啄;轻啄 n.啄"
  },
  {
    "word": "peculiar",
    "meaning": "adj 奇怪的;特有的"
  },
  {
    "word": "peculiarity",
    "meaning": "n 特性;怪癖"
  },
  {
    "word": "pedal",
    "meaning": "n 踏板 v.骑自行车"
  },
  {
    "word": "pedestrian",
    "meaning": "n 行人 adj.徒步的"
  },
  {
    "word": "pediatrician",
    "meaning": "n 小儿医生"
  },
  {
    "word": "pedestrian",
    "meaning": "n 行人;步行者"
  },
  {
    "word": "pee",
    "meaning": "v 撒尿;小便"
  },
  {
    "word": "peer",
    "meaning": "n 同等的人 v.凝视"
  },
  {
    "word": "pelican",
    "meaning": "n 鹈鹕"
  },
  {
    "word": "pen",
    "meaning": "n 钢笔;作家"
  },
  {
    "word": "penalty",
    "meaning": "n 罚款;处罚"
  },
  {
    "word": "pencil",
    "meaning": "n 铅笔 v.用铅笔写"
  },
  {
    "word": "pendulum",
    "meaning": "n 钟摆;摆动"
  },
  {
    "word": "penetrate",
    "meaning": "v 穿透;洞察"
  },
  {
    "word": "peninsula",
    "meaning": "n 半岛"
  },
  {
    "word": "pension",
    "meaning": "n 退休金;抚恤金"
  },
  {
    "word": "people",
    "meaning": "n 人们;民族"
  },
  {
    "word": "pepper",
    "meaning": "n 胡椒;辣椒粉"
  },
  {
    "word": "per",
    "meaning": "prep 每;每一"
  },
  {
    "word": "perceive",
    "meaning": "v 感知;认为"
  },
  {
    "word": "perception",
    "meaning": "n 感知;洞察力"
  },
  {
    "word": "perch",
    "meaning": "n 鲈鱼;栖息处"
  },
  {
    "word": "percussion",
    "meaning": "n 敲击;打击乐器"
  },
  {
    "word": "perfect",
    "meaning": "adj 完美的 v.使完美"
  },
  {
    "word": "perfection",
    "meaning": "n 完美;完成"
  },
  {
    "word": "perform",
    "meaning": "v 执行;表演"
  },
  {
    "word": "performance",
    "meaning": "n 表演;表现"
  },
  {
    "word": "perfume",
    "meaning": "n 香水;香味"
  },
  {
    "word": "perhaps",
    "meaning": "adv 也许;大概"
  },
  {
    "word": "peril",
    "meaning": "n 危险;冒险"
  },
  {
    "word": "perimeter",
    "meaning": "n 周长;边界"
  },
  {
    "word": "period",
    "meaning": "n 时期;学时"
  },
  {
    "word": "periodic",
    "meaning": "adj 周期的;定期的"
  },
  {
    "word": "peripheral",
    "meaning": "adj 外围的;次要的"
  },
  {
    "word": "periphery",
    "meaning": "n 外围;边缘"
  },
  {
    "word": "perish",
    "meaning": "v 死亡;毁灭"
  },
  {
    "word": "permanent",
    "meaning": "adj 永久的;持久的"
  },
  {
    "word": "permission",
    "meaning": "n 允许;同意"
  },
  {
    "word": "permit",
    "meaning": "v 允许 n.许可证"
  },
  {
    "word": "perpendicular",
    "meaning": "adj 垂直的 n.垂线"
  },
  {
    "word": "perpetual",
    "meaning": "adj 永久的;长期的"
  },
  {
    "word": "perplex",
    "meaning": "v 使困惑;使迷惑"
  },
  {
    "word": "perplexity",
    "meaning": "n 困惑;迷惑"
  },
  {
    "word": "persecute",
    "meaning": "v 迫害;困扰"
  },
  {
    "word": "persecution",
    "meaning": "n 迫害;困扰"
  },
  {
    "word": "persevere",
    "meaning": "v 坚持;不屈不挠"
  },
  {
    "word": "persistent",
    "meaning": "adj 坚持不懈的;持久的"
  },
  {
    "word": "person",
    "meaning": "n 人;个人"
  },
  {
    "word": "personal",
    "meaning": "adj 个人的;私人的"
  },
  {
    "word": "personality",
    "meaning": "n 个性;人物"
  },
  {
    "word": "personnel",
    "meaning": "n 人员;员工"
  },
  {
    "word": "perspective",
    "meaning": "n 透视;观点"
  },
  {
    "word": "persuade",
    "meaning": "v 说服;劝说"
  },
  {
    "word": "persuasion",
    "meaning": "n 说服;信念"
  },
  {
    "word": "pertinent",
    "meaning": "adj 相关的;恰当的"
  },
  {
    "word": "perturb",
    "meaning": "v 扰乱;使不安"
  },
  {
    "word": "perusal",
    "meaning": "n 精读;细读"
  },
  {
    "word": "peruse",
    "meaning": "v 细读;研读"
  },
  {
    "word": "pessimistic",
    "meaning": "adj 悲观的"
  },
  {
    "word": "pest",
    "meaning": "n 害虫;害人虫"
  },
  {
    "word": "pesticide",
    "meaning": "n 杀虫剂"
  },
  {
    "word": "pet",
    "meaning": "n 宠物;宠爱的人"
  },
  {
    "word": "petition",
    "meaning": "n 请愿;请求 v.请愿"
  },
  {
    "word": "petitioner",
    "meaning": "n 请愿人;请求者"
  },
  {
    "word": "petty",
    "meaning": "adj 细小的;不重要的"
  },
  {
    "word": "phase",
    "meaning": "n 阶段;相位"
  },
  {
    "word": "phenomenon",
    "meaning": "n 现象;非凡的人"
  },
  {
    "word": "philosopher",
    "meaning": "n 哲学家;哲人"
  },
  {
    "word": "philosophy",
    "meaning": "n 哲学;人生观"
  },
  {
    "word": "phone",
    "meaning": "n 电话 v.打电话"
  },
  {
    "word": "phonetic",
    "meaning": "adj 语音的;音标的"
  },
  {
    "word": "photo",
    "meaning": "n 照片;相片"
  },
  {
    "word": "photograph",
    "meaning": "n 照片 v.拍照"
  },
  {
    "word": "photographer",
    "meaning": "n 摄影师;拍照者"
  },
  {
    "word": "photographic",
    "meaning": "adj 摄影的;照片的"
  },
  {
    "word": "phrase",
    "meaning": "n 短语;习惯用语"
  },
  {
    "word": "physical",
    "meaning": "adj 物理的;身体的"
  },
  {
    "word": "physician",
    "meaning": "n 内科医生;医生"
  },
  {
    "word": "physicist",
    "meaning": "n 物理学家"
  },
  {
    "word": "physics",
    "meaning": "n 物理;物理学"
  },
  {
    "word": "physiology",
    "meaning": "n 生理学;生理机能"
  },
  {
    "word": "pianist",
    "meaning": "n 钢琴家;钢琴师"
  },
  {
    "word": "piano",
    "meaning": "n 钢琴"
  },
  {
    "word": "pick",
    "meaning": "v 挑选;采摘"
  },
  {
    "word": "pickup",
    "meaning": "n 皮卡车 v.捡起"
  },
  {
    "word": "picture",
    "meaning": "n 图片;画"
  },
  {
    "word": "picturesque",
    "meaning": "adj 独特的;生动的"
  },
  {
    "word": "pie",
    "meaning": "n 馅饼;派"
  },
  {
    "word": "piece",
    "meaning": "n 块;件;作品"
  },
  {
    "word": "pierce",
    "meaning": "v 刺穿;穿透"
  },
  {
    "word": "pig",
    "meaning": "n 猪"
  },
  {
    "word": "pigeon",
    "meaning": "n 鸽子;传书鸽"
  },
  {
    "word": "pike",
    "meaning": "n 长矛;梭子鱼"
  },
  {
    "word": "pile",
    "meaning": "n 堆;桩 v.堆叠"
  },
  {
    "word": "pilgrim",
    "meaning": "n 朝圣者;旅客"
  },
  {
    "word": "pilgrimage",
    "meaning": "n 朝圣;朝拜之旅"
  },
  {
    "word": "pill",
    "meaning": "n 药丸;小丸"
  },
  {
    "word": "pillar",
    "meaning": "n 柱子;柱形物"
  },
  {
    "word": "pillow",
    "meaning": "n 枕头"
  },
  {
    "word": "pilot",
    "meaning": "n 飞行员;领航员 v.领航"
  },
  {
    "word": "pin",
    "meaning": "n 钉;别针 v.钉住"
  },
  {
    "word": "pinch",
    "meaning": "v 掐;捏 n.匮乏"
  },
  {
    "word": "pine",
    "meaning": "n 松树;松木"
  },
  {
    "word": "pineapple",
    "meaning": "n 菠萝"
  },
  {
    "word": "ping",
    "meaning": "n 乒乓声 v.乒乓响"
  },
  {
    "word": "pink",
    "meaning": "n /adj.粉红色（的） v.扎"
  },
  {
    "word": "pint",
    "meaning": "n 品脱"
  },
  {
    "word": "pioneer",
    "meaning": "n 先锋;开拓者"
  },
  {
    "word": "pious",
    "meaning": "adj 虔诚的;尽责的"
  },
  {
    "word": "pipe",
    "meaning": "n 管;烟斗 v.用管道输送"
  },
  {
    "word": "pirate",
    "meaning": "n 海盗;剽窃者"
  },
  {
    "word": "pistol",
    "meaning": "n 手枪;左轮手枪"
  },
  {
    "word": "pit",
    "meaning": "n 坑;陷阱 v.使入陷井"
  },
  {
    "word": "pitch",
    "meaning": "n 沥青;音高 v.投掷"
  },
  {
    "word": "pitcher",
    "meaning": "n 投手;水壶"
  },
  {
    "word": "pity",
    "meaning": "n 怜悯;遗憾"
  },
  {
    "word": "pivot",
    "meaning": "n 枢轴;中心 v.旋转"
  },
  {
    "word": "pivotal",
    "meaning": "adj 中心的;关键的"
  },
  {
    "word": "place",
    "meaning": "n 地方;位置 v.放置"
  },
  {
    "word": "placid",
    "meaning": "adj 平静的;温和的"
  },
  {
    "word": "plague",
    "meaning": "n 瘟疫;灾祸 v.折磨"
  },
  {
    "word": "plain",
    "meaning": "adj 简单的 n.平原"
  },
  {
    "word": "plains",
    "meaning": "n 平原;旷野"
  },
  {
    "word": "plan",
    "meaning": "n 计划;平面图 v.计划"
  },
  {
    "word": "plane",
    "meaning": "n 平面;飞机"
  },
  {
    "word": "planet",
    "meaning": "n 行星"
  },
  {
    "word": "plank",
    "meaning": "n 厚木板;板条"
  },
  {
    "word": "planner",
    "meaning": "n 计划者;规划者"
  },
  {
    "word": "plant",
    "meaning": "n 植物;工厂 v.种植"
  },
  {
    "word": "plantation",
    "meaning": "n 种植园;大农场"
  },
  {
    "word": "plasma",
    "meaning": "n 血浆;等离子体"
  },
  {
    "word": "plaster",
    "meaning": "n 石膏;灰泥 v.抹泥"
  },
  {
    "word": "plastic",
    "meaning": "adj 可塑的 n.塑料"
  },
  {
    "word": "plate",
    "meaning": "n 盘子;金属板"
  },
  {
    "word": "plateau",
    "meaning": "n 高原;平稳状态"
  },
  {
    "word": "platform",
    "meaning": "n 平台;讲台"
  },
  {
    "word": "plausible",
    "meaning": "adj 似乎合理的;花言巧语的"
  },
  {
    "word": "play",
    "meaning": "v 玩;播放 n.戏剧"
  },
  {
    "word": "playground",
    "meaning": "n 操场;运动场"
  },
  {
    "word": "playwright",
    "meaning": "n 剧作家"
  },
  {
    "word": "plentiful",
    "meaning": "adj 丰富的;富裕的"
  },
  {
    "word": "plenty",
    "meaning": "n 丰富;大量"
  },
  {
    "word": "plight",
    "meaning": "n 困境;境况"
  },
  {
    "word": "plot",
    "meaning": "n 情节;图谋 v.密谋"
  },
  {
    "word": "plough",
    "meaning": "n 犁 v.犁田"
  },
  {
    "word": "plow",
    "meaning": "n 犁 v.犁耕"
  },
  {
    "word": "pluck",
    "meaning": "v 拔;摘 n.勇气"
  },
  {
    "word": "plug",
    "meaning": "n 塞子;插头 v.塞住"
  },
  {
    "word": "plumber",
    "meaning": "n 水管工人"
  },
  {
    "word": "plume",
    "meaning": "n 羽毛;羽饰"
  },
  {
    "word": "plump",
    "meaning": "adj 丰满的 v.使丰满"
  },
  {
    "word": "plunder",
    "meaning": "v /n.抢劫;掠夺"
  },
  {
    "word": "plunge",
    "meaning": "v 投入;跳入 n.投入"
  },
  {
    "word": "poach",
    "meaning": "v 偷猎;潜入"
  },
  {
    "word": "pocket",
    "meaning": "n 口袋;钱"
  },
  {
    "word": "pod",
    "meaning": "n 豆荚;舱"
  },
  {
    "word": "poem",
    "meaning": "n 诗;韵文"
  },
  {
    "word": "poet",
    "meaning": "n 诗人"
  },
  {
    "word": "poetic",
    "meaning": "adj 诗的;诗意的"
  },
  {
    "word": "poetry",
    "meaning": "n 诗歌;诗集"
  },
  {
    "word": "point",
    "meaning": "n 点;要点 v.指向"
  },
  {
    "word": "pointer",
    "meaning": "n 指针;指示器"
  },
  {
    "word": "poison",
    "meaning": "n 毒药 v.放毒"
  },
  {
    "word": "poke",
    "meaning": "v 刺;捅;伸"
  },
  {
    "word": "polar",
    "meaning": "adj 极地的;极性的"
  },
  {
    "word": "polarity",
    "meaning": "n 极性;极端"
  },
  {
    "word": "pole",
    "meaning": "n 杆;极点"
  },
  {
    "word": "police",
    "meaning": "n 警察;警方 v.管辖"
  },
  {
    "word": "policeman",
    "meaning": "n 警察;警员"
  },
  {
    "word": "policewoman",
    "meaning": "n 女警察"
  },
  {
    "word": "policy",
    "meaning": "n 政策;保险单"
  },
  {
    "word": "polish",
    "meaning": "n 磨光;亮光 v.磨光"
  },
  {
    "word": "polite",
    "meaning": "adj 有礼貌的;客气的"
  },
  {
    "word": "political",
    "meaning": "adj 政治的;政治上的"
  },
  {
    "word": "politician",
    "meaning": "n 政治家;政客"
  },
  {
    "word": "politics",
    "meaning": "n 政治;政治学"
  },
  {
    "word": "poll",
    "meaning": "n 民意测验;投票"
  },
  {
    "word": "pollen",
    "meaning": "n 花粉;粉状物"
  },
  {
    "word": "pollinate",
    "meaning": "v 授粉;传粉"
  },
  {
    "word": "pollution",
    "meaning": "n 污染;污染物"
  },
  {
    "word": "polo",
    "meaning": "n 马球;水球"
  },
  {
    "word": "pond",
    "meaning": "n 池塘;水池"
  },
  {
    "word": "pony",
    "meaning": "n 小马;矮种马"
  },
  {
    "word": "pool",
    "meaning": "n 水池;共用物 v.共享"
  },
  {
    "word": "poor",
    "meaning": "adj 贫穷的;可怜的"
  },
  {
    "word": "pop",
    "meaning": "adj 流行的;通俗的"
  },
  {
    "word": "pope",
    "meaning": "n 天主教皇;教皇"
  },
  {
    "word": "popular",
    "meaning": "adj 流行的;受欢迎的"
  },
  {
    "word": "popularity",
    "meaning": "n 普及;受欢迎"
  },
  {
    "word": "population",
    "meaning": "n 人口;全体居民"
  },
  {
    "word": "populous",
    "meaning": "adj 人口稠密的;人口多的"
  },
  {
    "word": "porcelain",
    "meaning": "n 瓷器;瓷"
  },
  {
    "word": "porch",
    "meaning": "n 门廊;入口处"
  },
  {
    "word": "pork",
    "meaning": "n 猪肉"
  },
  {
    "word": "port",
    "meaning": "n 港口;左舷"
  },
  {
    "word": "portable",
    "meaning": "adj 轻便的;手提式的"
  },
  {
    "word": "porter",
    "meaning": "n 搬运工;门房"
  },
  {
    "word": "portion",
    "meaning": "n 一部分;一分"
  },
  {
    "word": "portrait",
    "meaning": "n 肖像;描写"
  },
  {
    "word": "portray",
    "meaning": "v 描绘;扮演"
  },
  {
    "word": "pose",
    "meaning": "v 造成;摆姿势"
  },
  {
    "word": "position",
    "meaning": "n 位置;职位"
  },
  {
    "word": "positive",
    "meaning": "adj 肯定的;积极的"
  },
  {
    "word": "possess",
    "meaning": "v 拥有;占有"
  },
  {
    "word": "possession",
    "meaning": "n 拥有;所有物"
  },
  {
    "word": "possibility",
    "meaning": "n 可能性;潜在性"
  },
  {
    "word": "possible",
    "meaning": "adj 可能的;可能存在的"
  },
  {
    "word": "possibly",
    "meaning": "adv 可能地;也许"
  },
  {
    "word": "post",
    "meaning": "n 邮政;邮件 v.邮寄"
  },
  {
    "word": "postage",
    "meaning": "n 邮费;邮资"
  },
  {
    "word": "postcard",
    "meaning": "n 明信片"
  },
  {
    "word": "poster",
    "meaning": "n 海报;招贴"
  },
  {
    "word": "posterior",
    "meaning": "adj 较后的;后部的"
  },
  {
    "word": "posterity",
    "meaning": "n 后代;子孙"
  },
  {
    "word": "postman",
    "meaning": "n 邮递员;邮差"
  },
  {
    "word": "postpone",
    "meaning": "v 推迟;延期"
  },
  {
    "word": "posture",
    "meaning": "n 姿势;态度"
  },
  {
    "word": "pot",
    "meaning": "n 壶;盆"
  },
  {
    "word": "potato",
    "meaning": "n 马铃薯;土豆"
  },
  {
    "word": "potential",
    "meaning": "adj 潜在的 n.潜能"
  },
  {
    "word": "poultry",
    "meaning": "n 家禽;禽肉"
  },
  {
    "word": "pound",
    "meaning": "n 磅;英镑 v.重击"
  },
  {
    "word": "pour",
    "meaning": "v 倒;倾泻"
  },
  {
    "word": "poverty",
    "meaning": "n 贫穷;贫困"
  },
  {
    "word": "powder",
    "meaning": "n 粉末;药粉"
  },
  {
    "word": "power",
    "meaning": "n 力量;幂 v.激励"
  },
  {
    "word": "powerful",
    "meaning": "adj 强大的;有力的"
  },
  {
    "word": "powerless",
    "meaning": "adj 无力的;无权力的"
  },
  {
    "word": "practical",
    "meaning": "adj 实际的;实用的"
  },
  {
    "word": "practice",
    "meaning": "n 练习;实践 v.练习"
  },
  {
    "word": "practise",
    "meaning": "v 练习;实践"
  },
  {
    "word": "practitioner",
    "meaning": "n 开业者;从业者"
  },
  {
    "word": "pragmatic",
    "meaning": "adj 实际的;实用主义的"
  },
  {
    "word": "prairie",
    "meaning": "n 大草原;牧场"
  },
  {
    "word": "praise",
    "meaning": "n 赞扬;称赞 v.赞扬"
  },
  {
    "word": "prayer",
    "meaning": "n 祈祷;祈求"
  },
  {
    "word": "preach",
    "meaning": "v 宣讲;布道"
  },
  {
    "word": "precaution",
    "meaning": "n 预防;警惕"
  },
  {
    "word": "precede",
    "meaning": "v 在...之前;先于"
  },
  {
    "word": "precedent",
    "meaning": "n 先例;前例"
  },
  {
    "word": "precious",
    "meaning": "adj 宝贵的;珍贵的"
  },
  {
    "word": "precipice",
    "meaning": "n 悬崖;绝境"
  },
  {
    "word": "precipitate",
    "meaning": "v 促成;加速"
  },
  {
    "word": "precipitation",
    "meaning": "n 降水;急躁"
  },
  {
    "word": "precise",
    "meaning": "adj 精确的;明确的"
  },
  {
    "word": "precision",
    "meaning": "n 精确;精密"
  },
  {
    "word": "preclude",
    "meaning": "v 排除;妨碍"
  },
  {
    "word": "precocious",
    "meaning": "adj 早熟的;过早的"
  },
  {
    "word": "predict",
    "meaning": "v 预言;预测"
  },
  {
    "word": "prediction",
    "meaning": "n 预言;预测"
  },
  {
    "word": "predominant",
    "meaning": "adj 占优势的;主要的"
  },
  {
    "word": "preface",
    "meaning": "n 序言;前言"
  },
  {
    "word": "prefect",
    "meaning": "n 地方长官;校长"
  },
  {
    "word": "prefer",
    "meaning": "v 宁愿;更喜欢"
  },
  {
    "word": "preference",
    "meaning": "n 偏爱;优先"
  },
  {
    "word": "prefix",
    "meaning": "n 前缀 v.放在前面"
  },
  {
    "word": "pregnant",
    "meaning": "adj 怀孕的;充满的"
  },
  {
    "word": "prejudice",
    "meaning": "n 偏见;损害"
  },
  {
    "word": "preliminary",
    "meaning": "adj 预备的;初步的"
  },
  {
    "word": "prelude",
    "meaning": "n 前奏;序幕"
  },
  {
    "word": "premier",
    "meaning": "n 总理;首相"
  },
  {
    "word": "premise",
    "meaning": "n 前提;假定"
  },
  {
    "word": "premium",
    "meaning": "n 保险费;奖金"
  },
  {
    "word": "preoccupation",
    "meaning": "n 忧虑;全神贯注"
  },
  {
    "word": "preoccupy",
    "meaning": "v 使全神贯注"
  },
  {
    "word": "preparation",
    "meaning": "n 准备;配置"
  },
  {
    "word": "prepare",
    "meaning": "v 准备;使适合"
  },
  {
    "word": "prepared",
    "meaning": "adj 准备好的;有准备的"
  },
  {
    "word": "preposition",
    "meaning": "n 介词"
  },
  {
    "word": "prescribe",
    "meaning": "v 开药;规定"
  },
  {
    "word": "prescription",
    "meaning": "n 药方;处方"
  },
  {
    "word": "presence",
    "meaning": "n 存在;出席"
  },
  {
    "word": "present",
    "meaning": "adj 出现的 v.提供"
  },
  {
    "word": "presentation",
    "meaning": "n 呈现;介绍"
  },
  {
    "word": "presenter",
    "meaning": "n 展示者;主持人"
  },
  {
    "word": "preserve",
    "meaning": "v 保护;保存"
  },
  {
    "word": "president",
    "meaning": "n 总统;校长"
  },
  {
    "word": "presidential",
    "meaning": "adj 总统的;首长的"
  },
  {
    "word": "press",
    "meaning": "v 压;逼迫 n.出版社"
  },
  {
    "word": "pressure",
    "meaning": "n 压力;压迫"
  },
  {
    "word": "prestige",
    "meaning": "n 声望;威信"
  },
  {
    "word": "presto",
    "meaning": "adj 迅速的;熟练的"
  },
  {
    "word": "presumably",
    "meaning": "adv 大概;可能"
  },
  {
    "word": "presume",
    "meaning": "v 假定;推测"
  },
  {
    "word": "pretence",
    "meaning": "n 伪装;借口"
  },
  {
    "word": "pretend",
    "meaning": "v 假装;装扮"
  },
  {
    "word": "pretext",
    "meaning": "n 借口;托辞"
  },
  {
    "word": "pretty",
    "meaning": "adj 漂亮的;可爱的"
  },
  {
    "word": "prevail",
    "meaning": "v 盛行;获胜"
  },
  {
    "word": "prevailing",
    "meaning": "adj 流行的;盛行的"
  },
  {
    "word": "prevalence",
    "meaning": "n 普遍;盛行"
  },
  {
    "word": "prevent",
    "meaning": "v 预防;阻止"
  },
  {
    "word": "prevention",
    "meaning": "n 预防;阻止"
  },
  {
    "word": "previous",
    "meaning": "adj 以前的;早先的"
  },
  {
    "word": "prey",
    "meaning": "n 猎物;牺牲品 v.捕食"
  },
  {
    "word": "price",
    "meaning": "n 价格;代价"
  },
  {
    "word": "pricing",
    "meaning": "n 定价;价格确定"
  },
  {
    "word": "pride",
    "meaning": "n 自豪;骄傲"
  },
  {
    "word": "priest",
    "meaning": "n 教士;神父"
  },
  {
    "word": "priestess",
    "meaning": "n 女祭司;女法师"
  },
  {
    "word": "primary",
    "meaning": "adj 主要的;初级的"
  },
  {
    "word": "prime",
    "meaning": "adj 主要的 n.质数"
  },
  {
    "word": "primitive",
    "meaning": "adj 原始的;简单的"
  },
  {
    "word": "prince",
    "meaning": "n 王子;王孙"
  },
  {
    "word": "princess",
    "meaning": "n 公主;王妃"
  },
  {
    "word": "principal",
    "meaning": "adj 主要的 n.校长"
  },
  {
    "word": "principle",
    "meaning": "n 原则;原理"
  },
  {
    "word": "print",
    "meaning": "n 印刷品;字体 v.印刷"
  },
  {
    "word": "printer",
    "meaning": "n 印刷工;打印机"
  },
  {
    "word": "prior",
    "meaning": "adj 优先的;在前的"
  },
  {
    "word": "priority",
    "meaning": "n 优先;重点"
  },
  {
    "word": "prism",
    "meaning": "n 棱镜;晶体"
  },
  {
    "word": "prison",
    "meaning": "n 监狱;牢狱"
  },
  {
    "word": "prisoner",
    "meaning": "n 囚犯;犯人"
  },
  {
    "word": "privacy",
    "meaning": "n 隐私;隐居"
  },
  {
    "word": "private",
    "meaning": "adj 私人的;私下的"
  },
  {
    "word": "privilege",
    "meaning": "n 特权;特殊利益"
  },
  {
    "word": "prize",
    "meaning": "n 奖;奖品 v.珍视"
  },
  {
    "word": "pro",
    "meaning": "n 专业人士;前缀"
  },
  {
    "word": "probability",
    "meaning": "n 可能性;概率"
  },
  {
    "word": "probable",
    "meaning": "adj 可能的;大概的"
  },
  {
    "word": "probe",
    "meaning": "n 探针 v.探索"
  },
  {
    "word": "problem",
    "meaning": "n 问题;难题"
  },
  {
    "word": "procedure",
    "meaning": "n 程序;手续"
  },
  {
    "word": "proceed",
    "meaning": "v 进行;继续"
  },
  {
    "word": "process",
    "meaning": "n 过程;方法 v.加工"
  },
  {
    "word": "procession",
    "meaning": "n 队伍;行列"
  },
  {
    "word": "proclaim",
    "meaning": "v 宣告;宣布"
  },
  {
    "word": "proclamation",
    "meaning": "n 宣告;公布"
  },
  {
    "word": "produce",
    "meaning": "v 生产;产生"
  },
  {
    "word": "producer",
    "meaning": "n 生产者;制片人"
  },
  {
    "word": "product",
    "meaning": "n 产品;结果"
  },
  {
    "word": "production",
    "meaning": "n 生产;制造"
  },
  {
    "word": "productive",
    "meaning": "adj 多产的;有成效的"
  },
  {
    "word": "productivity",
    "meaning": "n 生产力;生产率"
  },
  {
    "word": "profession",
    "meaning": "n 职业;声明"
  },
  {
    "word": "professional",
    "meaning": "adj 专业的;职业的"
  },
  {
    "word": "professor",
    "meaning": "n 教授;教师"
  },
  {
    "word": "proficiency",
    "meaning": "n 熟练;精通"
  },
  {
    "word": "proficient",
    "meaning": "adj 熟练的;精通的"
  },
  {
    "word": "profile",
    "meaning": "n 轮廓;外形 v.扼要介绍"
  },
  {
    "word": "profit",
    "meaning": "n 利润;利益 v.有益于"
  },
  {
    "word": "profitable",
    "meaning": "adj 有利的;有益的"
  },
  {
    "word": "profound",
    "meaning": "adj 深刻的;渊博的"
  },
  {
    "word": "program",
    "meaning": "n 程序;计划 v.安排"
  },
  {
    "word": "programme",
    "meaning": "n 节目;计划 v.规划"
  },
  {
    "word": "progress",
    "meaning": "n 进步;发展 v.进展"
  },
  {
    "word": "progressive",
    "meaning": "adj 进步的;向前进的"
  },
  {
    "word": "prohibit",
    "meaning": "v 禁止;阻止"
  },
  {
    "word": "prohibition",
    "meaning": "n 禁止;禁令"
  },
  {
    "word": "project",
    "meaning": "n 项目;工程 v.投射"
  },
  {
    "word": "projectile",
    "meaning": "n 抛射物;弹丸"
  },
  {
    "word": "projection",
    "meaning": "n 投影;突出部分"
  },
  {
    "word": "projector",
    "meaning": "n 放映机;投影仪"
  },
  {
    "word": "prolong",
    "meaning": "v 延长;拖延"
  },
  {
    "word": "prolonged",
    "meaning": "adj 延长的;拖延的"
  },
  {
    "word": "promenade",
    "meaning": "n /v.散步;漫步"
  },
  {
    "word": "promote",
    "meaning": "v 促进;提升"
  },
  {
    "word": "promoter",
    "meaning": "n 促进者;发起人"
  },
  {
    "word": "promotion",
    "meaning": "n 提升;促销"
  },
  {
    "word": "prompt",
    "meaning": "v 促使 adj.敏捷的"
  },
  {
    "word": "prompting",
    "meaning": "n 促使;激励"
  },
  {
    "word": "prone",
    "meaning": "adj 倾向于;俯卧的"
  },
  {
    "word": "pronoun",
    "meaning": "n 代名词"
  },
  {
    "word": "pronounce",
    "meaning": "v 发音;宣布"
  },
  {
    "word": "pronunciation",
    "meaning": "n 发音;发音方法"
  },
  {
    "word": "proof",
    "meaning": "n 证据;证明 v.试验"
  },
  {
    "word": "prop",
    "meaning": "n 支柱;道具 v.支撑"
  },
  {
    "word": "propaganda",
    "meaning": "n 宣传;宣传资料"
  },
  {
    "word": "propagate",
    "meaning": "v 传播;繁殖"
  },
  {
    "word": "propagation",
    "meaning": "n 传播;繁殖"
  },
  {
    "word": "propel",
    "meaning": "v 推进;激励"
  },
  {
    "word": "propeller",
    "meaning": "n 推进器;螺旋桨"
  },
  {
    "word": "proper",
    "meaning": "adj 适合的;恰当的"
  },
  {
    "word": "property",
    "meaning": "n 财产;属性"
  },
  {
    "word": "prophecy",
    "meaning": "n 预言;预言能力"
  },
  {
    "word": "prophet",
    "meaning": "n 先知;预言者"
  },
  {
    "word": "proponent",
    "meaning": "n 支持者;建议者"
  },
  {
    "word": "proportion",
    "meaning": "n 比例;部分"
  },
  {
    "word": "proportional",
    "meaning": "adj 成比例的;相称的"
  },
  {
    "word": "proportionate",
    "meaning": "adj 相应的;成比例的"
  },
  {
    "word": "proposal",
    "meaning": "n 提议;建议"
  },
  {
    "word": "propose",
    "meaning": "v 建议;求婚"
  },
  {
    "word": "proposition",
    "meaning": "n 主张;命题"
  },
  {
    "word": "proprietor",
    "meaning": "n 所有者;业主"
  },
  {
    "word": "propriety",
    "meaning": "n 适当;礼节"
  },
  {
    "word": "propulsion",
    "meaning": "n 推进力;推进"
  },
  {
    "word": "prosaic",
    "meaning": "adj 散文的;平凡的"
  },
  {
    "word": "prose",
    "meaning": "n 散文;白话文"
  },
  {
    "word": "prosecute",
    "meaning": "v 检举;告发"
  },
  {
    "word": "prosecution",
    "meaning": "n 起诉;检举"
  },
  {
    "word": "prosecutor",
    "meaning": "n 检察官;公诉人"
  },
  {
    "word": "prospect",
    "meaning": "n 前途;景象"
  },
  {
    "word": "prospective",
    "meaning": "adj 未来的;预期的"
  },
  {
    "word": "prosper",
    "meaning": "v 繁荣;成功"
  },
  {
    "word": "prosperity",
    "meaning": "n 繁荣;成功"
  },
  {
    "word": "prosperous",
    "meaning": "adj 繁荣的;成功的"
  },
  {
    "word": "prostitute",
    "meaning": "n 妓女 v.使沦为妓女"
  },
  {
    "word": "prostitution",
    "meaning": "n 卖淫;堕落"
  },
  {
    "word": "prostrate",
    "meaning": "adj 俯卧的;沮丧的"
  },
  {
    "word": "protagonist",
    "meaning": "n 主角;主要人物"
  },
  {
    "word": "protect",
    "meaning": "v 保护;警戒"
  },
  {
    "word": "protection",
    "meaning": "n 保护;防卫"
  },
  {
    "word": "protective",
    "meaning": "adj 保护的;防护的"
  },
  {
    "word": "protein",
    "meaning": "n 蛋白质;朊"
  },
  {
    "word": "protest",
    "meaning": "n 抗议;反对 v.抗议"
  },
  {
    "word": "protester",
    "meaning": "n 抗议者;反对者"
  },
  {
    "word": "protocol",
    "meaning": "n 协议;草案"
  },
  {
    "word": "prototype",
    "meaning": "n 原型;典型"
  },
  {
    "word": "protract",
    "meaning": "v 延长;拖长"
  },
  {
    "word": "protrude",
    "meaning": "v 突出;伸出"
  },
  {
    "word": "proud",
    "meaning": "adj 自豪的;骄傲的"
  },
  {
    "word": "prove",
    "meaning": "v 证明;展现"
  },
  {
    "word": "proverb",
    "meaning": "n 谚语;格言"
  },
  {
    "word": "proverbial",
    "meaning": "adj 谚语的;众所周知的"
  },
  {
    "word": "provide",
    "meaning": "v 提供;供应"
  },
  {
    "word": "provided",
    "meaning": "adj 假如;倘若"
  },
  {
    "word": "provider",
    "meaning": "n 提供者;供应者"
  },
  {
    "word": "province",
    "meaning": "n 省;领域"
  },
  {
    "word": "provincial",
    "meaning": "adj 省的;地方性的"
  },
  {
    "word": "provision",
    "meaning": "n 供应;条款"
  },
  {
    "word": "provisional",
    "meaning": "adj 暂时的;临时的"
  },
  {
    "word": "provoke",
    "meaning": "v 激怒;挑起"
  },
  {
    "word": "provoked",
    "meaning": "adj 被激怒的;被挑衅的"
  },
  {
    "word": "provocation",
    "meaning": "n 激怒;挑衅"
  },
  {
    "word": "provocative",
    "meaning": "adj 挑衅的;挑逗的"
  },
  {
    "word": "provoke",
    "meaning": "v 激怒;挑起"
  },
  {
    "word": "prowess",
    "meaning": "n 英勇;技能"
  },
  {
    "word": "prowl",
    "meaning": "v 潜行;徘徊"
  },
  {
    "word": "proximate",
    "meaning": "adj 接近的;最接近的"
  },
  {
    "word": "proximity",
    "meaning": "n 接近;亲近"
  },
  {
    "word": "proxy",
    "meaning": "n 代理人;代理权"
  },
  {
    "word": "prude",
    "meaning": "n 假正经的人;过分拘谨的人"
  },
  {
    "word": "prudence",
    "meaning": "n 谨慎;审慎"
  },
  {
    "word": "prudent",
    "meaning": "adj 谨慎的;精明的"
  },
  {
    "word": "prune",
    "meaning": "v 修剪;削减"
  },
  {
    "word": "psyche",
    "meaning": "n 心智;心灵"
  },
  {
    "word": "psychiatrist",
    "meaning": "n 精神病学家;精神病医生"
  },
  {
    "word": "psychiatry",
    "meaning": "n 精神病学;精神病治疗"
  },
  {
    "word": "psychic",
    "meaning": "adj 心灵的;超自然的"
  },
  {
    "word": "psychology",
    "meaning": "n 心理学;心理状态"
  },
  {
    "word": "pub",
    "meaning": "n 酒馆;客栈"
  },
  {
    "word": "public",
    "meaning": "adj 公共的 n.公众"
  },
  {
    "word": "publication",
    "meaning": "n 出版;出版物"
  },
  {
    "word": "publicity",
    "meaning": "n 公开;宣传"
  },
  {
    "word": "publish",
    "meaning": "v 出版;发布"
  },
  {
    "word": "publisher",
    "meaning": "n 出版者;发布者"
  },
  {
    "word": "puck",
    "meaning": "n 冰球;小精灵"
  },
  {
    "word": "pucker",
    "meaning": "v 起皱;收缩"
  },
  {
    "word": "pudding",
    "meaning": "n 布丁;甜点"
  },
  {
    "word": "puddle",
    "meaning": "n 水坑;洼"
  },
  {
    "word": "puff",
    "meaning": "n 一阵;吹嘘 v.喘息"
  },
  {
    "word": "puffin",
    "meaning": "n 海雀;海鹦鹉"
  },
  {
    "word": "pull",
    "meaning": "v 拉;拖"
  },
  {
    "word": "pulley",
    "meaning": "n 滑轮;滑车"
  },
  {
    "word": "pulse",
    "meaning": "n 脉搏;脉冲"
  },
  {
    "word": "pump",
    "meaning": "n 泵 v.打气"
  },
  {
    "word": "pumpkin",
    "meaning": "n 南瓜"
  },
  {
    "word": "punch",
    "meaning": "v 冲压;穿孔 n.冲压机"
  },
  {
    "word": "punctual",
    "meaning": "adj 准时的;守时的"
  },
  {
    "word": "punctuality",
    "meaning": "n 准时;守时"
  },
  {
    "word": "punish",
    "meaning": "v 惩罚;处罚"
  },
  {
    "word": "punishment",
    "meaning": "n 惩罚;处罚"
  },
  {
    "word": "puny",
    "meaning": "adj 弱小的;微小的"
  },
  {
    "word": "pup",
    "meaning": "n 小狗;幼犬"
  },
  {
    "word": "pupil",
    "meaning": "n 瞳孔;学生"
  },
  {
    "word": "puppet",
    "meaning": "n 木偶;傀儡"
  },
  {
    "word": "purchase",
    "meaning": "n 购买 v.购买"
  },
  {
    "word": "pure",
    "meaning": "adj 纯的;纯洁的"
  },
  {
    "word": "purity",
    "meaning": "n 纯净;纯洁"
  },
  {
    "word": "purple",
    "meaning": "adj 紫色的 n.紫色"
  },
  {
    "word": "purpose",
    "meaning": "n 目的;意图"
  },
  {
    "word": "purse",
    "meaning": "n 钱包;小包"
  },
  {
    "word": "pursue",
    "meaning": "v 追求;追赶"
  },
  {
    "word": "pursuit",
    "meaning": "n 追求;追赶"
  },
  {
    "word": "pus",
    "meaning": "n 脓;脓汁"
  },
  {
    "word": "push",
    "meaning": "v 推;推动"
  },
  {
    "word": "pushy",
    "meaning": "adj 强迫的;过分自信的"
  },
  {
    "word": "pussy",
    "meaning": "n 小猫;懦夫"
  },
  {
    "word": "put",
    "meaning": "v 放;表达"
  },
  {
    "word": "puzzle",
    "meaning": "n 谜;难题 v.迷惑"
  },
  {
    "word": "puzzling",
    "meaning": "adj 使迷惑的;令人费解的"
  },
  {
    "word": "pyramid",
    "meaning": "n 金字塔;角锥形"
  },
  {
    "word": "quack",
    "meaning": "n 庸医;鸭子叫声 v.发出嘎嘎声"
  },
  {
    "word": "quadrant",
    "meaning": "n 象限;四分之一圆"
  },
  {
    "word": "quaint",
    "meaning": "adj 古雅的;有趣的"
  },
  {
    "word": "quake",
    "meaning": "n 地震;颤抖 v.震动"
  },
  {
    "word": "qualification",
    "meaning": "n 资格;限制条件"
  },
  {
    "word": "qualified",
    "meaning": "adj 有资格的;合格的"
  },
  {
    "word": "qualify",
    "meaning": "v 使有资格;限定"
  },
  {
    "word": "qualitative",
    "meaning": "adj 质的;定性的"
  },
  {
    "word": "quality",
    "meaning": "n 质量;品质"
  },
  {
    "word": "quantify",
    "meaning": "v 量化;确定数量"
  },
  {
    "word": "quantitative",
    "meaning": "adj 数量的;定量的"
  },
  {
    "word": "quantum",
    "meaning": "n 量子;数量"
  },
  {
    "word": "quarrel",
    "meaning": "n 争吵 v.争吵"
  },
  {
    "word": "quarry",
    "meaning": "n 采石场;猎物"
  },
  {
    "word": "quarter",
    "meaning": "n 四分之一;地区"
  },
  {
    "word": "quarterly",
    "meaning": "adj 季度的 adv.季度地"
  },
  {
    "word": "quartet",
    "meaning": "n 四重奏;四重唱"
  },
  {
    "word": "quartz",
    "meaning": "n 石英;水晶"
  },
  {
    "word": "quay",
    "meaning": "n 码头;停泊处"
  },
  {
    "word": "queen",
    "meaning": "n 女王;王后"
  },
  {
    "word": "queer",
    "meaning": "adj 奇怪的;不适的"
  },
  {
    "word": "quench",
    "meaning": "v 熄灭;压制"
  },
  {
    "word": "quest",
    "meaning": "n 寻找;追求"
  },
  {
    "word": "question",
    "meaning": "n 问题 v.询问"
  },
  {
    "word": "questionnaire",
    "meaning": "n 调查表;问卷"
  },
  {
    "word": "queue",
    "meaning": "n 队列;长队 v.排队"
  },
  {
    "word": "quicken",
    "meaning": "v 加速;使活跃"
  },
  {
    "word": "quicksilver",
    "meaning": "adj 水银的 n.水银"
  },
  {
    "word": "quiet",
    "meaning": "adj 安静的 v.使安静"
  },
  {
    "word": "quietly",
    "meaning": "adv 安静地;悄悄地"
  },
  {
    "word": "quilt",
    "meaning": "n 被子;棉被"
  },
  {
    "word": "quiver",
    "meaning": "n 颤抖;箭袋 v.颤抖"
  },
  {
    "word": "quiz",
    "meaning": "n 小测验;问答比赛"
  },
  {
    "word": "quota",
    "meaning": "n 配额;限额"
  },
  {
    "word": "quotation",
    "meaning": "n 引用;报价"
  },
  {
    "word": "quote",
    "meaning": "v 引用 n.引用"
  },
  {
    "word": "quotient",
    "meaning": "n 商;比率"
  },
  {
    "word": "rabbi",
    "meaning": "n 犹太教教士"
  },
  {
    "word": "rabbit",
    "meaning": "n 兔子;野兔"
  },
  {
    "word": "race",
    "meaning": "n 种族;赛跑 v.赛跑"
  },
  {
    "word": "racial",
    "meaning": "adj 种族的;人种的"
  },
  {
    "word": "racism",
    "meaning": "n 种族主义;种族歧视"
  },
  {
    "word": "rack",
    "meaning": "n 架;行李架 v.折磨"
  },
  {
    "word": "racket",
    "meaning": "n 球拍;喧闹声"
  },
  {
    "word": "radar",
    "meaning": "n 雷达;无线电探测器"
  },
  {
    "word": "radiant",
    "meaning": "adj 发光的;容光焕发的"
  },
  {
    "word": "radiate",
    "meaning": "v 辐射;发射"
  },
  {
    "word": "radiation",
    "meaning": "n 辐射;放射线"
  },
  {
    "word": "radical",
    "meaning": "adj 根本的;激进的"
  },
  {
    "word": "radio",
    "meaning": "n 收音机;无线电"
  },
  {
    "word": "radioactive",
    "meaning": "adj 放射性的"
  },
  {
    "word": "radius",
    "meaning": "n 半径;范围"
  },
  {
    "word": "rag",
    "meaning": "n 破布;碎布"
  },
  {
    "word": "rage",
    "meaning": "n 愤怒;狂暴"
  },
  {
    "word": "raid",
    "meaning": "n /v.袭击;搜捕"
  },
  {
    "word": "rail",
    "meaning": "n 铁路;栏杆 v.抱怨"
  },
  {
    "word": "railway",
    "meaning": "n 铁路;铁道"
  },
  {
    "word": "rain",
    "meaning": "n 雨;下雨 v.下雨"
  },
  {
    "word": "rainbow",
    "meaning": "n 彩虹"
  },
  {
    "word": "raincoat",
    "meaning": "n 雨衣"
  },
  {
    "word": "raise",
    "meaning": "v 举起;增加;养育"
  },
  {
    "word": "raisin",
    "meaning": "n 葡萄干"
  },
  {
    "word": "rally",
    "meaning": "n 集会;拉力赛 v.集合"
  },
  {
    "word": "ram",
    "meaning": "n 公羊;撞击 v.撞击"
  },
  {
    "word": "ramp",
    "meaning": "n 斜坡;坡道"
  },
  {
    "word": "rampage",
    "meaning": "n 暴怒;狂暴行为 v.狂暴"
  },
  {
    "word": "ranch",
    "meaning": "n 大农场;牧场"
  },
  {
    "word": "rancher",
    "meaning": "n 牧场主;农场主"
  },
  {
    "word": "random",
    "meaning": "adj 随机的;任意的"
  },
  {
    "word": "range",
    "meaning": "n 范围 v.排列"
  },
  {
    "word": "rank",
    "meaning": "n 等级;军衔 v.排列"
  },
  {
    "word": "rap",
    "meaning": "n 轻敲;责骂 v.轻敲"
  },
  {
    "word": "rape",
    "meaning": "n 强奸;油菜 v.强奸"
  },
  {
    "word": "rapid",
    "meaning": "adj 快的 n.急流"
  },
  {
    "word": "rapport",
    "meaning": "n 默契;和睦"
  },
  {
    "word": "rascal",
    "meaning": "n 流氓;无赖"
  },
  {
    "word": "rash",
    "meaning": "adj 轻率的 n.疹子"
  },
  {
    "word": "rat",
    "meaning": "n 老鼠;叛徒"
  },
  {
    "word": "rate",
    "meaning": "n 比率;速度 v.评价"
  },
  {
    "word": "rather",
    "meaning": "adv 宁可;相当"
  },
  {
    "word": "ratio",
    "meaning": "n 比率;比例"
  },
  {
    "word": "rational",
    "meaning": "adj 合理的;有理的"
  },
  {
    "word": "rationalize",
    "meaning": "v 使合理;合理化"
  },
  {
    "word": "rattle",
    "meaning": "n 嘎嘎声 v.使发出嘎嘎声"
  },
  {
    "word": "ravage",
    "meaning": "n 破坏 v.毁坏"
  },
  {
    "word": "raven",
    "meaning": "n 乌鸦;掠夺者"
  },
  {
    "word": "raw",
    "meaning": "adj 生的;未加工的"
  },
  {
    "word": "rawhide",
    "meaning": "n 生皮;生牛皮"
  },
  {
    "word": "ray",
    "meaning": "n 光线;射线"
  },
  {
    "word": "razor",
    "meaning": "n 剃刀;刮胡刀"
  },
  {
    "word": "reach",
    "meaning": "v 到达;伸手"
  },
  {
    "word": "react",
    "meaning": "v 反应;起作用"
  },
  {
    "word": "reaction",
    "meaning": "n 反应;反作用"
  },
  {
    "word": "read",
    "meaning": "v 读;理解"
  },
  {
    "word": "reader",
    "meaning": "n 读者;读物"
  },
  {
    "word": "readily",
    "meaning": "adv 容易地;乐意地"
  },
  {
    "word": "reading",
    "meaning": "n 阅读;读数"
  },
  {
    "word": "ready",
    "meaning": "adj 准备好的 adv.准备好地"
  },
  {
    "word": "real",
    "meaning": "adj 真的;实的"
  },
  {
    "word": "realism",
    "meaning": "n 现实主义;实在性"
  },
  {
    "word": "realistic",
    "meaning": "adj 现实的;实际的"
  },
  {
    "word": "reality",
    "meaning": "n 现实;实在"
  },
  {
    "word": "realize",
    "meaning": "v 实现;认识到"
  },
  {
    "word": "realm",
    "meaning": "n 领域;王国"
  },
  {
    "word": "ream",
    "meaning": "n 令箭花;纸堆"
  },
  {
    "word": "reap",
    "meaning": "v 收割;获得"
  },
  {
    "word": "rear",
    "meaning": "n 后部;背面"
  },
  {
    "word": "rearrange",
    "meaning": "v 重新安排"
  },
  {
    "word": "reason",
    "meaning": "n 理由 v.推理"
  },
  {
    "word": "reasonable",
    "meaning": "adj 合理的;公道的"
  },
  {
    "word": "reasoning",
    "meaning": "n 推理;理由"
  },
  {
    "word": "reassure",
    "meaning": "v 使安心;再保证"
  },
  {
    "word": "rebel",
    "meaning": "n 反叛者 v.反叛"
  },
  {
    "word": "rebellion",
    "meaning": "n 反叛;叛乱"
  },
  {
    "word": "rebellious",
    "meaning": "adj 反叛的;难控制的"
  },
  {
    "word": "rebirth",
    "meaning": "n 再生;复兴"
  },
  {
    "word": "reborn",
    "meaning": "adj 再生的;重生的"
  },
  {
    "word": "rebound",
    "meaning": "v 反弹 n.反弹"
  },
  {
    "word": "rebuff",
    "meaning": "n 断然拒绝;冷落"
  },
  {
    "word": "rebuild",
    "meaning": "v 重建;改造"
  },
  {
    "word": "rebut",
    "meaning": "v 反驳;反抗"
  },
  {
    "word": "rebuttal",
    "meaning": "adj 可反驳的;可驳斥的"
  },
  {
    "word": "recalcitrant",
    "meaning": "adj 反抗的;难以控制的"
  },
  {
    "word": "recall",
    "meaning": "v 回忆;召回"
  },
  {
    "word": "recapitulate",
    "meaning": "v 重述;概括"
  },
  {
    "word": "recapture",
    "meaning": "v 重新捕获;再次获得"
  },
  {
    "word": "recast",
    "meaning": "v 重铸;改变"
  },
  {
    "word": "recede",
    "meaning": "v 后退;收回"
  },
  {
    "word": "receipt",
    "meaning": "n 收据;收到"
  },
  {
    "word": "receive",
    "meaning": "v 收到;接纳"
  },
  {
    "word": "received",
    "meaning": "adj 被一般承认的"
  },
  {
    "word": "receiver",
    "meaning": "n 接收器;收款员"
  },
  {
    "word": "recent",
    "meaning": "adj 新近的;近来的"
  },
  {
    "word": "receptacle",
    "meaning": "n 容器;插座"
  },
  {
    "word": "reception",
    "meaning": "n 接待;接收"
  },
  {
    "word": "receptive",
    "meaning": "adj 善于接受的;接受的"
  },
  {
    "word": "recess",
    "meaning": "n 休息时间;凹处"
  },
  {
    "word": "recession",
    "meaning": "n 衰退;后退"
  },
  {
    "word": "recipe",
    "meaning": "n 食谱;处方"
  },
  {
    "word": "recipient",
    "meaning": "n 接受者;收受人"
  },
  {
    "word": "reciprocal",
    "meaning": "adj 相互的;互惠的"
  },
  {
    "word": "reciprocate",
    "meaning": "v 回报;相互作用"
  },
  {
    "word": "reciprocity",
    "meaning": "n 互惠;相互性"
  },
  {
    "word": "recital",
    "meaning": "n 独奏;朗诵"
  },
  {
    "word": "recitation",
    "meaning": "n 朗诵;背诵"
  },
  {
    "word": "recite",
    "meaning": "v 背诵;叙述"
  },
  {
    "word": "reckless",
    "meaning": "adj 粗心的;鲁莽的"
  },
  {
    "word": "reckon",
    "meaning": "v 计算;认为"
  },
  {
    "word": "reclaim",
    "meaning": "v 开垦;回收"
  },
  {
    "word": "reclamation",
    "meaning": "n 开垦;回收"
  },
  {
    "word": "recline",
    "meaning": "v 使后仰;倚靠"
  },
  {
    "word": "recluse",
    "meaning": "n 隐士;遁世者"
  },
  {
    "word": "recognition",
    "meaning": "n 认出;识别"
  },
  {
    "word": "recognize",
    "meaning": "v 认出;认可"
  },
  {
    "word": "recoil",
    "meaning": "v 退缩;弹回"
  },
  {
    "word": "recollect",
    "meaning": "v 回忆;记起"
  },
  {
    "word": "recollection",
    "meaning": "n 回忆;记忆"
  },
  {
    "word": "recommend",
    "meaning": "v 推荐;建议"
  },
  {
    "word": "recommendation",
    "meaning": "n 推荐;建议"
  },
  {
    "word": "recompense",
    "meaning": "n 报酬;赔偿金"
  },
  {
    "word": "reconcile",
    "meaning": "v 和解;使一致"
  },
  {
    "word": "reconciliation",
    "meaning": "n 和解;调和"
  },
  {
    "word": "recondite",
    "meaning": "adj 深奥的;难懂的"
  },
  {
    "word": "recondition",
    "meaning": "v 重新调整;再训练"
  },
  {
    "word": "reconnaissance",
    "meaning": "n 侦察;预先探索"
  },
  {
    "word": "reconsider",
    "meaning": "v 重新考虑"
  },
  {
    "word": "reconstruct",
    "meaning": "v 重建;重构"
  },
  {
    "word": "reconstruction",
    "meaning": "n 重建;复兴"
  },
  {
    "word": "record",
    "meaning": "n 记录 v.记录"
  },
  {
    "word": "recorder",
    "meaning": "n 记录员;录音机"
  },
  {
    "word": "recourse",
    "meaning": "n 求助;依赖"
  },
  {
    "word": "recover",
    "meaning": "v 恢复;痊愈"
  },
  {
    "word": "recovery",
    "meaning": "n 恢复;痊愈"
  },
  {
    "word": "recreate",
    "meaning": "v 再创造;娱乐"
  },
  {
    "word": "recreation",
    "meaning": "n 娱乐;消遣"
  },
  {
    "word": "recreational",
    "meaning": "adj 娱乐的;消遣的"
  },
  {
    "word": "recruit",
    "meaning": "n 新兵;新成员 v.招募"
  },
  {
    "word": "rectangular",
    "meaning": "adj 矩形的;长方形的"
  },
  {
    "word": "rectify",
    "meaning": "v 纠正;整流"
  },
  {
    "word": "rectilinear",
    "meaning": "adj 直线的;直角的"
  },
  {
    "word": "rectitude",
    "meaning": "n 正直;正当"
  },
  {
    "word": "rectory",
    "meaning": "n 教区牧师的住宅"
  },
  {
    "word": "recumbent",
    "meaning": "adj 躺着的;倚靠的"
  },
  {
    "word": "recuperate",
    "meaning": "v 恢复;复原"
  },
  {
    "word": "recur",
    "meaning": "v 再发生;重现"
  },
  {
    "word": "recurrence",
    "meaning": "n 重现;再发生"
  },
  {
    "word": "recycling",
    "meaning": "n 回收利用;再利用"
  },
  {
    "word": "red",
    "meaning": "n /adj.红色（的）"
  },
  {
    "word": "redound",
    "meaning": "v 产生有利的结果"
  },
  {
    "word": "redress",
    "meaning": "v /n.改正;赔偿"
  },
  {
    "word": "reduce",
    "meaning": "v 减少;降低"
  },
  {
    "word": "reduction",
    "meaning": "n 减少;降低"
  },
  {
    "word": "redundant",
    "meaning": "adj 多余的;失业的"
  },
  {
    "word": "reed",
    "meaning": "n 芦苇;簧片"
  },
  {
    "word": "reeds",
    "meaning": "n 芦苇丛;苇丛"
  },
  {
    "word": "reek",
    "meaning": "n 小湾;气味 v.发出气味"
  },
  {
    "word": "reel",
    "meaning": "n 卷轴 v.卷;蹒跚"
  },
  {
    "word": "referee",
    "meaning": "n 裁判员;仲裁人"
  },
  {
    "word": "reference",
    "meaning": "n 参考;提及"
  },
  {
    "word": "referendum",
    "meaning": "n 公民投票;公投"
  },
  {
    "word": "refine",
    "meaning": "v 精炼;提纯"
  },
  {
    "word": "refined",
    "meaning": "adj 精炼的;有教养的"
  },
  {
    "word": "refinement",
    "meaning": "n 精炼;文雅"
  },
  {
    "word": "reflect",
    "meaning": "v 反映;思考"
  },
  {
    "word": "reflection",
    "meaning": "n 反射;思考"
  },
  {
    "word": "reflective",
    "meaning": "adj 反射的;深思的"
  },
  {
    "word": "reflex",
    "meaning": "n 反射;反映"
  },
  {
    "word": "reflexes",
    "meaning": "n 反射;本能反应"
  },
  {
    "word": "reflexive",
    "meaning": "adj 反射的;反身的"
  },
  {
    "word": "reform",
    "meaning": "v /n.改革;重组"
  },
  {
    "word": "refrain",
    "meaning": "v 抑制 n.重复句"
  },
  {
    "word": "refresh",
    "meaning": "v 刷新;使恢复"
  },
  {
    "word": "refreshing",
    "meaning": "adj 提神的;使人精神焕发的"
  },
  {
    "word": "refreshment",
    "meaning": "n 刷新;点心"
  },
  {
    "word": "refrigerator",
    "meaning": "n 冰箱;冷藏库"
  },
  {
    "word": "refuge",
    "meaning": "n 避难所;庇护"
  },
  {
    "word": "refugee",
    "meaning": "n 难民;流亡者"
  },
  {
    "word": "refund",
    "meaning": "n 退款 v.退还"
  },
  {
    "word": "refurbish",
    "meaning": "v 刷新;再磨光"
  },
  {
    "word": "refusal",
    "meaning": "n 拒绝;拒绝权"
  },
  {
    "word": "refuse",
    "meaning": "v 拒绝;不接受"
  },
  {
    "word": "refutation",
    "meaning": "n 反驳;驳斥"
  },
  {
    "word": "refute",
    "meaning": "v 反驳;驳斥"
  },
  {
    "word": "regain",
    "meaning": "v 恢复;重新获得"
  },
  {
    "word": "regal",
    "meaning": "adj 帝王的;庄严的"
  },
  {
    "word": "regard",
    "meaning": "v 看待;尊重"
  },
  {
    "word": "regarding",
    "meaning": "prep 关于"
  },
  {
    "word": "regardless",
    "meaning": "adv 不顾;不顾一切"
  },
  {
    "word": "regenerate",
    "meaning": "v 再生;更新"
  },
  {
    "word": "regime",
    "meaning": "n 政权;制度"
  },
  {
    "word": "regiment",
    "meaning": "n 团;大量"
  },
  {
    "word": "region",
    "meaning": "n 地区;范围"
  },
  {
    "word": "register",
    "meaning": "n 登记 v.登记"
  },
  {
    "word": "registrar",
    "meaning": "n 注册员;登记员"
  },
  {
    "word": "registration",
    "meaning": "n 注册;登记"
  },
  {
    "word": "registry",
    "meaning": "n 登记;注册处"
  },
  {
    "word": "regress",
    "meaning": "v 倒退;退化"
  },
  {
    "word": "regression",
    "meaning": "n 退化;退步"
  },
  {
    "word": "regret",
    "meaning": "n 遗憾 v.后悔"
  },
  {
    "word": "regretful",
    "meaning": "adj 后悔的;惋惜的"
  },
  {
    "word": "regrettable",
    "meaning": "adj 遗憾的;可惜的"
  },
  {
    "word": "regulate",
    "meaning": "v 调节;规定"
  },
  {
    "word": "regulation",
    "meaning": "n 规则;调节"
  },
  {
    "word": "regulatory",
    "meaning": "adj 调节的;规定的"
  },
  {
    "word": "regurgitate",
    "meaning": "v 反胃;涌回"
  },
  {
    "word": "rehabilitate",
    "meaning": "v 修复;康复"
  },
  {
    "word": "rehabilitation",
    "meaning": "n 修复;康复"
  },
  {
    "word": "rehearse",
    "meaning": "v 排练;预演"
  },
  {
    "word": "reign",
    "meaning": "n 统治;统治时期 v.统治"
  },
  {
    "word": "rein",
    "meaning": "n 缰绳 v.控制"
  },
  {
    "word": "reincarnate",
    "meaning": "v 转世;化身"
  },
  {
    "word": "reincarnation",
    "meaning": "n 转世;化身"
  },
  {
    "word": "reinforce",
    "meaning": "v 加强;加固"
  },
  {
    "word": "reinforcement",
    "meaning": "n 加强;加固"
  },
  {
    "word": "reins",
    "meaning": "n 缰绳;控制"
  },
  {
    "word": "reiterate",
    "meaning": "v 重申;反复"
  },
  {
    "word": "reject",
    "meaning": "v 拒绝;排斥"
  },
  {
    "word": "rejected",
    "meaning": "adj 被拒绝的;被抛弃的"
  },
  {
    "word": "rejection",
    "meaning": "n 拒绝;排斥"
  },
  {
    "word": "rejoice",
    "meaning": "v 高兴;庆祝"
  },
  {
    "word": "rejoicing",
    "meaning": "n 欢乐;庆祝"
  },
  {
    "word": "rejoin",
    "meaning": "v 重新加入;回答"
  },
  {
    "word": "rejoinder",
    "meaning": "n 反驳;回答"
  },
  {
    "word": "relate",
    "meaning": "v 使关联;叙述"
  },
  {
    "word": "relation",
    "meaning": "n 关系;叙述"
  },
  {
    "word": "relationship",
    "meaning": "n 关系;关联"
  },
  {
    "word": "relative",
    "meaning": "adj 相对的 n.亲戚"
  },
  {
    "word": "relativity",
    "meaning": "n 相对性;相对论"
  },
  {
    "word": "relax",
    "meaning": "v 放松;放宽"
  },
  {
    "word": "relaxation",
    "meaning": "n 放松;休息"
  },
  {
    "word": "relay",
    "meaning": "n 中继;接力 v.转送"
  },
  {
    "word": "release",
    "meaning": "v 释放;发布"
  },
  {
    "word": "reliability",
    "meaning": "n 可靠性;可信赖"
  },
  {
    "word": "reliable",
    "meaning": "adj 可靠的;可信赖的"
  },
  {
    "word": "reliance",
    "meaning": "n 信赖;信任"
  },
  {
    "word": "reliant",
    "meaning": "adj 依赖的;信任的"
  },
  {
    "word": "relief",
    "meaning": "n 减轻;浮雕"
  },
  {
    "word": "relieve",
    "meaning": "v 减轻;解除"
  },
  {
    "word": "religion",
    "meaning": "n 宗教;宗教信仰"
  },
  {
    "word": "religious",
    "meaning": "adj 宗教的;虔诚的"
  },
  {
    "word": "reluctance",
    "meaning": "n 不愿;犹豫"
  },
  {
    "word": "reluctant",
    "meaning": "adj 不愿的;勉强的"
  },
  {
    "word": "rely",
    "meaning": "v 依赖;依靠"
  },
  {
    "word": "remain",
    "meaning": "v 保持;留下"
  },
  {
    "word": "remainder",
    "meaning": "n 剩余物;余数"
  },
  {
    "word": "remaining",
    "meaning": "adj 剩下的;其余的"
  },
  {
    "word": "remains",
    "meaning": "n 遗址;遗骸"
  },
  {
    "word": "remake",
    "meaning": "v 改造;重做"
  },
  {
    "word": "remand",
    "meaning": "n 还押候审"
  },
  {
    "word": "remark",
    "meaning": "n 评论 v.评论"
  },
  {
    "word": "remarkable",
    "meaning": "adj 显著的;异常的"
  },
  {
    "word": "remedy",
    "meaning": "n 补救;药品 v.补救"
  },
  {
    "word": "remember",
    "meaning": "v 记得;记住"
  },
  {
    "word": "remembrance",
    "meaning": "n 记忆;回忆"
  },
  {
    "word": "remind",
    "meaning": "v 提醒;使想起"
  },
  {
    "word": "reminder",
    "meaning": "n 提醒者;提醒物"
  },
  {
    "word": "reminisce",
    "meaning": "v 回忆;怀旧"
  },
  {
    "word": "reminiscent",
    "meaning": "adj 回忆的;怀旧的"
  },
  {
    "word": "remission",
    "meaning": "n 宽恕;赦免"
  },
  {
    "word": "remit",
    "meaning": "v 汇款;免除"
  },
  {
    "word": "remittance",
    "meaning": "n 汇款;汇付"
  },
  {
    "word": "remnant",
    "meaning": "n 残余;剩余"
  },
  {
    "word": "remodel",
    "meaning": "v 改造;改型"
  },
  {
    "word": "remorse",
    "meaning": "n 懊悔;同情"
  },
  {
    "word": "remorseful",
    "meaning": "adj 后悔的;悔恨的"
  },
  {
    "word": "remote",
    "meaning": "adj 遥远的;疏远的"
  },
  {
    "word": "remoteness",
    "meaning": "n 遥远;偏僻"
  },
  {
    "word": "removal",
    "meaning": "n 移开;移除"
  },
  {
    "word": "remove",
    "meaning": "v 移开;脱掉"
  },
  {
    "word": "removes",
    "meaning": "n 距离;移除"
  },
  {
    "word": "renaissance",
    "meaning": "n 复兴;文艺复兴"
  },
  {
    "word": "render",
    "meaning": "v 使成为;提供"
  },
  {
    "word": "rendering",
    "meaning": "n 表演;翻译"
  },
  {
    "word": "rendezvous",
    "meaning": "n 约会;集合点"
  },
  {
    "word": "rendition",
    "meaning": "n 表演;翻译"
  },
  {
    "word": "renegade",
    "meaning": "n 叛徒;背教者"
  },
  {
    "word": "renege",
    "meaning": "v 背信;违约"
  },
  {
    "word": "renew",
    "meaning": "v 使更新;续期"
  },
  {
    "word": "renewal",
    "meaning": "n 更新;续新"
  },
  {
    "word": "renovate",
    "meaning": "v 翻新;更新"
  },
  {
    "word": "renovation",
    "meaning": "n 翻新;更新"
  },
  {
    "word": "renovator",
    "meaning": "n 革新者;修复者"
  },
  {
    "word": "rent",
    "meaning": "n 租金 v.出租"
  },
  {
    "word": "rental",
    "meaning": "n 租赁;出租"
  },
  {
    "word": "reopen",
    "meaning": "v 重开;再打开"
  },
  {
    "word": "reorganization",
    "meaning": "n 重组;重建"
  },
  {
    "word": "reorganize",
    "meaning": "v 重组;重建"
  },
  {
    "word": "rep",
    "meaning": "n 代表;代理人"
  },
  {
    "word": "repair",
    "meaning": "n 修理 v.修理"
  },
  {
    "word": "repairman",
    "meaning": "n 修理工;技工"
  },
  {
    "word": "reparation",
    "meaning": "n 赔偿;修理"
  },
  {
    "word": "repay",
    "meaning": "v 偿还;报答"
  },
  {
    "word": "repayment",
    "meaning": "n 偿还;报答"
  },
  {
    "word": "repeal",
    "meaning": "v 撤销;废除"
  },
  {
    "word": "repeat",
    "meaning": "v 重复;重做"
  },
  {
    "word": "repeated",
    "meaning": "adj 重复的;再发生的"
  },
  {
    "word": "repel",
    "meaning": "v 击退;排斥"
  },
  {
    "word": "repellent",
    "meaning": "n 驱虫剂;排斥者"
  },
  {
    "word": "repent",
    "meaning": "v 悔改;后悔"
  },
  {
    "word": "repentance",
    "meaning": "n 悔改;后悔"
  },
  {
    "word": "repentant",
    "meaning": "adj 悔改的;后悔的"
  },
  {
    "word": "repercussion",
    "meaning": "n 反响;影响"
  },
  {
    "word": "repertoire",
    "meaning": "n 全部剧目;节目单"
  },
  {
    "word": "repertory",
    "meaning": "n 仓库;剧目"
  },
  {
    "word": "repetition",
    "meaning": "n 重复;反复"
  },
  {
    "word": "replace",
    "meaning": "v 替换;代替"
  },
  {
    "word": "replacement",
    "meaning": "n 替换;代替"
  },
  {
    "word": "replenish",
    "meaning": "v 补充;重新装满"
  },
  {
    "word": "replenishment",
    "meaning": "n 补充;重新装满"
  },
  {
    "word": "replete",
    "meaning": "adj 充满的;装满的"
  },
  {
    "word": "replica",
    "meaning": "n 复制品;仿制品"
  },
  {
    "word": "replicate",
    "meaning": "v 复制;重复"
  },
  {
    "word": "replication",
    "meaning": "n 复制;重复"
  },
  {
    "word": "reply",
    "meaning": "v /n.回答;答复"
  },
  {
    "word": "report",
    "meaning": "n 报告;报道 v.报告"
  },
  {
    "word": "reportedly",
    "meaning": "adv 据报道;据传闻"
  },
  {
    "word": "reporter",
    "meaning": "n 报告人;记者"
  },
  {
    "word": "repose",
    "meaning": "v 休息;放置"
  },
  {
    "word": "reposition",
    "meaning": "v 重新定位"
  },
  {
    "word": "repository",
    "meaning": "n 仓库;存放处"
  },
  {
    "word": "represent",
    "meaning": "v 代表;象征"
  },
  {
    "word": "representation",
    "meaning": "n 代表;表示"
  },
  {
    "word": "representative",
    "meaning": "adj 代表性的 n.代表"
  },
  {
    "word": "repress",
    "meaning": "v 镇压;抑制"
  },
  {
    "word": "repression",
    "meaning": "n 镇压;抑制"
  },
  {
    "word": "repressive",
    "meaning": "adj 压制的;抑制的"
  },
  {
    "word": "reprisal",
    "meaning": "n 报复;回击"
  },
  {
    "word": "reproach",
    "meaning": "n 责备;耻辱"
  },
  {
    "word": "reproachful",
    "meaning": "adj 感到耻辱的;责难的"
  },
  {
    "word": "reproduce",
    "meaning": "v 繁殖;复制"
  },
  {
    "word": "reproduction",
    "meaning": "n 繁殖;复制"
  },
  {
    "word": "reptile",
    "meaning": "n 爬行动物;爬虫"
  },
  {
    "word": "republic",
    "meaning": "n 共和国;共和政体"
  },
  {
    "word": "republican",
    "meaning": "adj 共和的 n.共和党人"
  },
  {
    "word": "repudiate",
    "meaning": "v 抛弃;拒绝接受"
  },
  {
    "word": "repudiation",
    "meaning": "n 抛弃;拒绝接受"
  },
  {
    "word": "repugnant",
    "meaning": "adj 令人厌恶的;矛盾的"
  },
  {
    "word": "repulse",
    "meaning": "v 击退;使厌恶"
  },
  {
    "word": "repulsion",
    "meaning": "n 击退;厌恶"
  },
  {
    "word": "repulsive",
    "meaning": "adj 令人厌恶的;排斥的"
  },
  {
    "word": "repurchase",
    "meaning": "v 重新购买;买回"
  },
  {
    "word": "reputable",
    "meaning": "adj 有名的;值得尊敬的"
  },
  {
    "word": "reputation",
    "meaning": "n 名誉;名声"
  },
  {
    "word": "repute",
    "meaning": "n 名气;声誉"
  },
  {
    "word": "request",
    "meaning": "n /v.请求;需要"
  },
  {
    "word": "requested",
    "meaning": "adj 被请求的;要求的"
  },
  {
    "word": "require",
    "meaning": "v 需要;要求"
  },
  {
    "word": "requirement",
    "meaning": "n 要求;必要条件"
  },
  {
    "word": "requisite",
    "meaning": "adj 必要的 n.必需品"
  },
  {
    "word": "requisition",
    "meaning": "n 征用;要求"
  },
  {
    "word": "reread",
    "meaning": "v 再读;重读"
  },
  {
    "word": "rescue",
    "meaning": "n /v.营救;救援"
  },
  {
    "word": "research",
    "meaning": "n 研究 v.研究"
  },
  {
    "word": "researcher",
    "meaning": "n 研究者;调查员"
  },
  {
    "word": "resemblance",
    "meaning": "n 相似;相似之处"
  },
  {
    "word": "resemble",
    "meaning": "v 类似;像"
  },
  {
    "word": "resent",
    "meaning": "v 怨恨;愤恨"
  },
  {
    "word": "resentful",
    "meaning": "adj 怨恨的;愤慨的"
  },
  {
    "word": "resentment",
    "meaning": "n 怨恨;愤恨"
  },
  {
    "word": "reservation",
    "meaning": "n 保留;预约"
  },
  {
    "word": "reserve",
    "meaning": "n 储备 v.保留"
  },
  {
    "word": "reserved",
    "meaning": "adj 保留的;缄默的"
  },
  {
    "word": "reservist",
    "meaning": "n 后备役军人"
  },
  {
    "word": "reservoir",
    "meaning": "n 蓄水池;水库"
  },
  {
    "word": "reset",
    "meaning": "v 重新设定"
  },
  {
    "word": "reside",
    "meaning": "v 居住;属于"
  },
  {
    "word": "residence",
    "meaning": "n 居住;驻扎"
  },
  {
    "word": "residency",
    "meaning": "n 居住;居住期"
  },
  {
    "word": "resident",
    "meaning": "n 居民 adj.居住的"
  },
  {
    "word": "residential",
    "meaning": "adj 居住的;住宅的"
  },
  {
    "word": "residual",
    "meaning": "adj 剩余的;残留的"
  },
  {
    "word": "residue",
    "meaning": "n 残渣;剩余"
  },
  {
    "word": "resign",
    "meaning": "v 辞职;顺从"
  },
  {
    "word": "resignation",
    "meaning": "n 辞职;放弃"
  },
  {
    "word": "resigned",
    "meaning": "adj 逆来顺受的;已辞职的"
  },
  {
    "word": "resilience",
    "meaning": "n 弹性;恢复力"
  },
  {
    "word": "resilient",
    "meaning": "adj 有弹性的;能恢复的"
  },
  {
    "word": "resin",
    "meaning": "n 树脂;松香"
  },
  {
    "word": "resist",
    "meaning": "v 抵抗;反对"
  },
  {
    "word": "resistance",
    "meaning": "n 抵抗;抵抗力"
  },
  {
    "word": "resistant",
    "meaning": "adj 抵抗的;有抵抗力的"
  },
  {
    "word": "resolute",
    "meaning": "adj 坚决的;果断的"
  },
  {
    "word": "resolution",
    "meaning": "n 坚决;决议"
  },
  {
    "word": "resolve",
    "meaning": "v 解决;决心"
  },
  {
    "word": "resonance",
    "meaning": "n 共振;共鸣"
  },
  {
    "word": "resonant",
    "meaning": "adj 共振的;回响的"
  },
  {
    "word": "resort",
    "meaning": "n 度假胜地 v.求助"
  },
  {
    "word": "resound",
    "meaning": "v 回响;回荡"
  },
  {
    "word": "resounding",
    "meaning": "adj 响亮的;深刻的"
  },
  {
    "word": "resource",
    "meaning": "n 资源;手段"
  },
  {
    "word": "resourceful",
    "meaning": "adj 资源丰富的;足智多谋的"
  },
  {
    "word": "respect",
    "meaning": "n /v.尊敬;尊重"
  },
  {
    "word": "respectable",
    "meaning": "adj 值得尊敬的;体面的"
  },
  {
    "word": "respectful",
    "meaning": "adj 恭敬的;尊重的"
  },
  {
    "word": "respective",
    "meaning": "adj 分别的;各自的"
  },
  {
    "word": "respectively",
    "meaning": "adv 分别地;各自地"
  },
  {
    "word": "respiration",
    "meaning": "n 呼吸;呼气"
  },
  {
    "word": "respirator",
    "meaning": "n 呼吸器;防毒面具"
  },
  {
    "word": "respite",
    "meaning": "n 休息;暂缓"
  },
  {
    "word": "respond",
    "meaning": "v 回答;反应"
  },
  {
    "word": "response",
    "meaning": "n 回答;反应"
  },
  {
    "word": "responsibility",
    "meaning": "n 责任;职责"
  },
  {
    "word": "responsible",
    "meaning": "adj 有责任的;负责的"
  },
  {
    "word": "rest",
    "meaning": "n 休息 v.休息"
  },
  {
    "word": "restless",
    "meaning": "adj 不安的;不静止的"
  },
  {
    "word": "restoration",
    "meaning": "n 恢复;修复"
  },
  {
    "word": "restore",
    "meaning": "v 恢复;修复"
  },
  {
    "word": "restrain",
    "meaning": "v 抑制;限制"
  },
  {
    "word": "restrained",
    "meaning": "adj 抑制的;克制的"
  },
  {
    "word": "restraint",
    "meaning": "n 抑制;限制"
  },
  {
    "word": "restrict",
    "meaning": "v 限制;束缚"
  },
  {
    "word": "restriction",
    "meaning": "n 限制;束缚"
  },
  {
    "word": "restrictive",
    "meaning": "adj 限制的;限制性的"
  },
  {
    "word": "result",
    "meaning": "n 结果 v.结果"
  },
  {
    "word": "resultant",
    "meaning": "adj 作为结果的;产生的"
  },
  {
    "word": "resume",
    "meaning": "v 继续;重新开始"
  },
  {
    "word": "resumption",
    "meaning": "n 继续;重新开始"
  },
  {
    "word": "resurrect",
    "meaning": "v 复活;复兴"
  },
  {
    "word": "resurrection",
    "meaning": "n 复活;复兴"
  },
  {
    "word": "resuscitate",
    "meaning": "v 使复活;复苏"
  },
  {
    "word": "retail",
    "meaning": "n 零售 v.零售"
  },
  {
    "word": "retailer",
    "meaning": "n 零售商"
  },
  {
    "word": "retain",
    "meaning": "v 保持;保留"
  },
  {
    "word": "retainer",
    "meaning": "n 保持者;雇员"
  },
  {
    "word": "retaliate",
    "meaning": "v 报复;反击"
  },
  {
    "word": "retaliation",
    "meaning": "n 报复;反击"
  },
  {
    "word": "retard",
    "meaning": "v 延迟;阻碍"
  },
  {
    "word": "retarded",
    "meaning": "adj 被延迟的;智力迟钝的"
  },
  {
    "word": "retch",
    "meaning": "n 哽咽;恶心 v.哽咽"
  },
  {
    "word": "retention",
    "meaning": "n 保留;保持"
  },
  {
    "word": "retentive",
    "meaning": "adj 保持的;有记忆力的"
  },
  {
    "word": "reticent",
    "meaning": "adj 沉默的;有保留的"
  },
  {
    "word": "retinue",
    "meaning": "n 随从;侍从"
  },
  {
    "word": "retract",
    "meaning": "v 缩回;收回"
  },
  {
    "word": "retraction",
    "meaning": "n 缩回;收回"
  },
  {
    "word": "retreat",
    "meaning": "n 撤退 v.撤退"
  },
  {
    "word": "retrench",
    "meaning": "v 削减;紧缩"
  },
  {
    "word": "retrenchment",
    "meaning": "n 削减;紧缩"
  },
  {
    "word": "retrial",
    "meaning": "n 再审;复审"
  },
  {
    "word": "retribution",
    "meaning": "n 报应;惩罚"
  },
  {
    "word": "retrieval",
    "meaning": "n 取回;检索"
  },
  {
    "word": "retrieve",
    "meaning": "v 取回;检索"
  },
  {
    "word": "retrospect",
    "meaning": "n 回顾"
  },
  {
    "word": "retrospective",
    "meaning": "adj 回顾的;怀旧的"
  },
  {
    "word": "return",
    "meaning": "n 归还 v.返回"
  },
  {
    "word": "reunion",
    "meaning": "n 团聚;再联合"
  },
  {
    "word": "reveal",
    "meaning": "v 显示;揭露"
  },
  {
    "word": "revealing",
    "meaning": "adj 揭示的;暴露的"
  },
  {
    "word": "revelation",
    "meaning": "n 揭露;启示"
  },
  {
    "word": "revenge",
    "meaning": "n 报仇;复仇"
  },
  {
    "word": "revenue",
    "meaning": "n 收入;税收"
  },
  {
    "word": "reverberate",
    "meaning": "v 回响;反响"
  },
  {
    "word": "reverberation",
    "meaning": "n 回响;反响"
  },
  {
    "word": "revere",
    "meaning": "v 尊敬;崇敬"
  },
  {
    "word": "reverence",
    "meaning": "n 尊敬;崇敬"
  },
  {
    "word": "reverend",
    "meaning": "n 尊敬的;教区牧师"
  },
  {
    "word": "reverent",
    "meaning": "adj 尊敬的;崇敬的"
  },
  {
    "word": "reverie",
    "meaning": "n 幻想;梦想"
  },
  {
    "word": "reversal",
    "meaning": "n 颠倒;反转"
  },
  {
    "word": "reverse",
    "meaning": "n 反面 v.反转"
  },
  {
    "word": "reversion",
    "meaning": "n 恢复;转回"
  },
  {
    "word": "revert",
    "meaning": "v 恢复原状;重新考虑"
  },
  {
    "word": "review",
    "meaning": "n 复习 v.复习"
  },
  {
    "word": "reviewer",
    "meaning": "n 评论者;审查者"
  },
  {
    "word": "revise",
    "meaning": "v 修订;修改"
  },
  {
    "word": "revision",
    "meaning": "n 修订;修改"
  },
  {
    "word": "revival",
    "meaning": "n 复兴;复活"
  },
  {
    "word": "revive",
    "meaning": "v 苏醒;复兴"
  },
  {
    "word": "revoke",
    "meaning": "v 撤销;废除"
  },
  {
    "word": "revolt",
    "meaning": "n /v.叛乱;反抗"
  },
  {
    "word": "revolting",
    "meaning": "adj 令人厌恶的;叛乱的"
  },
  {
    "word": "revolution",
    "meaning": "n 革命;旋转"
  },
  {
    "word": "revolutionary",
    "meaning": "adj 革命的 n.革命者"
  },
  {
    "word": "revolutionize",
    "meaning": "v 革命化;彻底改革"
  },
  {
    "word": "revolve",
    "meaning": "v 旋转;演变"
  },
  {
    "word": "revolver",
    "meaning": "n 左轮手枪;旋转者"
  },
  {
    "word": "revulsion",
    "meaning": "n 强烈反感;厌恶"
  },
  {
    "word": "reward",
    "meaning": "n 报酬 v.奖励"
  },
  {
    "word": "rewarding",
    "meaning": "adj 有益的;值得的"
  },
  {
    "word": "reword",
    "meaning": "v 重述;改写"
  },
  {
    "word": "rework",
    "meaning": "v 重做;重新加工"
  },
  {
    "word": "rhetoric",
    "meaning": "n 修辞;修辞学"
  },
  {
    "word": "rhetorical",
    "meaning": "adj 修辞的;修辞学的"
  },
  {
    "word": "rhyme",
    "meaning": "n 韵;押韵 v.押韵"
  },
  {
    "word": "rhythm",
    "meaning": "n 节奏;韵律"
  },
  {
    "word": "rib",
    "meaning": "n 肋骨;肋状物"
  },
  {
    "word": "ribbon",
    "meaning": "n 丝带;带"
  },
  {
    "word": "rice",
    "meaning": "n 稻米;米饭"
  },
  {
    "word": "rich",
    "meaning": "adj 富有的;肥沃的"
  },
  {
    "word": "rid",
    "meaning": "v 使摆脱;消除"
  },
  {
    "word": "riddance",
    "meaning": "n 摆脱;消除"
  },
  {
    "word": "riddle",
    "meaning": "n 谜;谜语 v.使困惑"
  },
  {
    "word": "ride",
    "meaning": "v 骑;乘车 n.乘车"
  },
  {
    "word": "rider",
    "meaning": "n 骑手;驾驭者"
  },
  {
    "word": "ridge",
    "meaning": "n 岭;脊"
  },
  {
    "word": "ridicule",
    "meaning": "n 嘲笑 v.嘲笑"
  },
  {
    "word": "ridiculous",
    "meaning": "adj 荒谬的;可笑的"
  },
  {
    "word": "rife",
    "meaning": "adj 流行的;普遍的"
  },
  {
    "word": "riff",
    "meaning": "n 裂缝;冲突"
  },
  {
    "word": "rifle",
    "meaning": "n 步枪;来复枪 v.搜查"
  },
  {
    "word": "rift",
    "meaning": "n 裂缝;冲突"
  },
  {
    "word": "rig",
    "meaning": "n 钻井平台;装备"
  },
  {
    "word": "rigged",
    "meaning": "adj 有装备的;被操纵的"
  },
  {
    "word": "right",
    "meaning": "adj 正确的 n.权利"
  },
  {
    "word": "righteous",
    "meaning": "adj 正直的;正当的"
  },
  {
    "word": "rightful",
    "meaning": "adj 合法的;正当的"
  },
  {
    "word": "rigid",
    "meaning": "adj 刚硬的;僵硬的"
  },
  {
    "word": "rigidity",
    "meaning": "n 刚硬;僵硬"
  },
  {
    "word": "rigor",
    "meaning": "n 严格;严厉"
  },
  {
    "word": "rigorous",
    "meaning": "adj 严格的;彻底的"
  },
  {
    "word": "rim",
    "meaning": "n 边缘;边"
  },
  {
    "word": "ring",
    "meaning": "n 戒指 v.打电话"
  },
  {
    "word": "riot",
    "meaning": "n 暴乱;骚动"
  },
  {
    "word": "rip",
    "meaning": "v 撕破 n.裂口"
  },
  {
    "word": "ripe",
    "meaning": "adj 熟的;成熟的"
  },
  {
    "word": "ripen",
    "meaning": "v 成熟;变熟"
  },
  {
    "word": "ripple",
    "meaning": "n 波纹;涟漪 v.起涟漪"
  },
  {
    "word": "rise",
    "meaning": "n 上升 v.上升"
  },
  {
    "word": "risk",
    "meaning": "n 风险 v.冒...的危险"
  },
  {
    "word": "risky",
    "meaning": "adj 冒险的;危险的"
  },
  {
    "word": "rite",
    "meaning": "n 仪式;礼节"
  },
  {
    "word": "ritual",
    "meaning": "adj 仪式的 n.仪式"
  },
  {
    "word": "rival",
    "meaning": "n 对手;竞争者"
  },
  {
    "word": "rivalry",
    "meaning": "n 竞争;对抗"
  },
  {
    "word": "river",
    "meaning": "n 河;江"
  },
  {
    "word": "rivulet",
    "meaning": "n 小河;小溪"
  },
  {
    "word": "road",
    "meaning": "n 路;道路"
  },
  {
    "word": "roam",
    "meaning": "v 漫游;流浪"
  },
  {
    "word": "roar",
    "meaning": "v 吼叫;轰鸣"
  },
  {
    "word": "roast",
    "meaning": "v 烤 n.烤肉"
  },
  {
    "word": "rob",
    "meaning": "v 抢劫;剥夺"
  },
  {
    "word": "robbery",
    "meaning": "n 抢劫;盗窃"
  },
  {
    "word": "robe",
    "meaning": "n 长袍;礼服"
  },
  {
    "word": "robot",
    "meaning": "n 机器人;自动机"
  },
  {
    "word": "robust",
    "meaning": "adj 强健的;健康的"
  },
  {
    "word": "rock",
    "meaning": "n 岩石;摇滚乐 v.摇动"
  },
  {
    "word": "rocket",
    "meaning": "n 火箭 v.急升"
  },
  {
    "word": "rod",
    "meaning": "n 杆;棍"
  },
  {
    "word": "role",
    "meaning": "n 角色;任务"
  },
  {
    "word": "roll",
    "meaning": "n 卷;名单 v.滚动"
  },
  {
    "word": "roller",
    "meaning": "n 滚筒;滚轴"
  },
  {
    "word": "romance",
    "meaning": "n 传奇;浪漫"
  },
  {
    "word": "romantic",
    "meaning": "adj 浪漫的;传奇的"
  },
  {
    "word": "romp",
    "meaning": "v 奔跑;嬉戏"
  },
  {
    "word": "roof",
    "meaning": "n 屋顶;顶部"
  },
  {
    "word": "rooster",
    "meaning": "n 公鸡"
  },
  {
    "word": "root",
    "meaning": "n 根;根源 v.生根"
  },
  {
    "word": "rope",
    "meaning": "n 绳;绳索"
  },
  {
    "word": "rose",
    "meaning": "n 玫瑰;粉红色"
  },
  {
    "word": "rotate",
    "meaning": "v 旋转;轮流"
  },
  {
    "word": "rotten",
    "meaning": "adj 腐烂的;糟糕的"
  },
  {
    "word": "rotund",
    "meaning": "adj 圆润的;洪亮的"
  },
  {
    "word": "rough",
    "meaning": "adj 粗糙的;大致的"
  },
  {
    "word": "round",
    "meaning": "adj 圆的 adv.周围"
  },
  {
    "word": "roundabout",
    "meaning": "adj 间接的 n.旋转木马"
  },
  {
    "word": "rouse",
    "meaning": "v 唤醒;激起"
  },
  {
    "word": "royalty",
    "meaning": "n 王族;版税"
  },
  {
    "word": "rub",
    "meaning": "v 擦;摩擦"
  },
  {
    "word": "rubber",
    "meaning": "n 橡皮;橡胶"
  },
  {
    "word": "rubbish",
    "meaning": "n 垃圾;废话"
  },
  {
    "word": "rubble",
    "meaning": "n 碎石;瓦砾"
  },
  {
    "word": "ruby",
    "meaning": "n 红宝石;红宝石色"
  },
  {
    "word": "rudder",
    "meaning": "n 舵;方向舵"
  },
  {
    "word": "rude",
    "meaning": "adj 粗鲁的;无理的"
  },
  {
    "word": "rue",
    "meaning": "n 芸香;后悔 v.后悔"
  },
  {
    "word": "ruffle",
    "meaning": "v 弄皱;激怒"
  },
  {
    "word": "rug",
    "meaning": "n 小地毯;垫子"
  },
  {
    "word": "ruin",
    "meaning": "n 废墟 v.毁灭"
  },
  {
    "word": "ruination",
    "meaning": "n 毁灭;破产"
  },
  {
    "word": "rule",
    "meaning": "n 规则 v.统治"
  },
  {
    "word": "ruler",
    "meaning": "n 统治者;尺"
  },
  {
    "word": "rum",
    "meaning": "n 朗姆酒;传闻"
  },
  {
    "word": "rumor",
    "meaning": "n 谣言;传闻"
  },
  {
    "word": "rumour",
    "meaning": "n 谣言;传闻"
  },
  {
    "word": "rump",
    "meaning": "n 臀部;后部"
  },
  {
    "word": "rung",
    "meaning": "n 横档;梯级"
  },
  {
    "word": "rupture",
    "meaning": "n 破裂;疝气 v.破裂"
  },
  {
    "word": "rural",
    "meaning": "adj 农村的;田园的"
  },
  {
    "word": "ruse",
    "meaning": "n 诡计;欺骗"
  },
  {
    "word": "rush",
    "meaning": "v 冲;匆忙 n.冲"
  },
  {
    "word": "rust",
    "meaning": "n 锈 v.生锈"
  },
  {
    "word": "rustic",
    "meaning": "adj 乡村的;质朴的"
  },
  {
    "word": "rustle",
    "meaning": "n 沙沙声 v.发出沙沙声"
  },
  {
    "word": "rut",
    "meaning": "n 车辙;常规"
  },
  {
    "word": "ruthless",
    "meaning": "adj 无情的;冷酷的"
  },
  {
    "word": "sabotage",
    "meaning": "n 破坏;颠覆活动"
  },
  {
    "word": "sack",
    "meaning": "n 麻袋;解雇 v.解雇"
  },
  {
    "word": "sacrifice",
    "meaning": "n 牺牲 v.牺牲"
  },
  {
    "word": "sacred",
    "meaning": "adj 神圣的;宗教的"
  },
  {
    "word": "sacrifice",
    "meaning": "v 牺牲;献祭"
  },
  {
    "word": "sad",
    "meaning": "adj 悲哀的;难过的"
  },
  {
    "word": "sadden",
    "meaning": "v 使悲伤;使悲哀"
  },
  {
    "word": "saddle",
    "meaning": "n 鞍;马鞍"
  },
  {
    "word": "safe",
    "meaning": "adj 安全的 n.保险箱"
  },
  {
    "word": "safety",
    "meaning": "n 安全;保险"
  },
  {
    "word": "sail",
    "meaning": "n 帆 v.航行"
  },
  {
    "word": "sailor",
    "meaning": "n 水手;海员"
  },
  {
    "word": "saint",
    "meaning": "n 圣人;道德崇高的人"
  },
  {
    "word": "sake",
    "meaning": "n 缘故;目的"
  },
  {
    "word": "salad",
    "meaning": "n 色拉;沙拉"
  },
  {
    "word": "salmon",
    "meaning": "n 鲑鱼;鲑鱼肉"
  },
  {
    "word": "salon",
    "meaning": "n 沙龙;客厅"
  },
  {
    "word": "salt",
    "meaning": "n 盐 v.腌制"
  },
  {
    "word": "salty",
    "meaning": "adj 咸的;含盐的"
  },
  {
    "word": "salute",
    "meaning": "n / v.敬礼;赞扬"
  },
  {
    "word": "salvation",
    "meaning": "n 拯救;救助"
  },
  {
    "word": "same",
    "meaning": "adj 相同的 pron.相同的"
  },
  {
    "word": "sample",
    "meaning": "n 样品;样本 v.尝试"
  },
  {
    "word": "sand",
    "meaning": "n 沙;沙子"
  },
  {
    "word": "sandwich",
    "meaning": "n 三明治 v.夹入"
  },
  {
    "word": "sandy",
    "meaning": "adj 含沙的;沙的"
  },
  {
    "word": "sane",
    "meaning": "adj 神智健全的;明智的"
  },
  {
    "word": "sanguine",
    "meaning": "adj 乐观的;血红色的"
  },
  {
    "word": "sanitary",
    "meaning": "adj 卫生的;清洁的"
  },
  {
    "word": "sanitation",
    "meaning": "n 卫生;下水道系统"
  },
  {
    "word": "sap",
    "meaning": "n 树液;活力 v.消耗"
  },
  {
    "word": "sapiens",
    "meaning": "n 智人;现代人"
  },
  {
    "word": "sarcasm",
    "meaning": "n 讽刺;嘲笑"
  },
  {
    "word": "sardonic",
    "meaning": "adj 讽刺的;嘲笑的"
  },
  {
    "word": "sash",
    "meaning": "n 腰带;腰包"
  },
  {
    "word": "sat",
    "meaning": "n 酢;丰富 adj.丰富的"
  },
  {
    "word": "satan",
    "meaning": "n 撒旦;魔鬼"
  },
  {
    "word": "sate",
    "meaning": "v 使饱;使厌腻"
  },
  {
    "word": "satellite",
    "meaning": "n 卫星;人造卫星"
  },
  {
    "word": "satire",
    "meaning": "n 讽刺;讽刺文学"
  },
  {
    "word": "satisfaction",
    "meaning": "n 满足;满意"
  },
  {
    "word": "satisfactory",
    "meaning": "adj 满意的;合意的"
  },
  {
    "word": "saturate",
    "meaning": "v 浸透;使饱和"
  },
  {
    "word": "saturation",
    "meaning": "n 饱和;饱和度"
  },
  {
    "word": "sauce",
    "meaning": "n 酱油;调味汁"
  },
  {
    "word": "saucepan",
    "meaning": "n 煮菜锅;深锅"
  },
  {
    "word": "saucer",
    "meaning": "n 茶托;圆盘"
  },
  {
    "word": "saucy",
    "meaning": "adj 俏皮的;无礼的"
  },
  {
    "word": "sauerkraut",
    "meaning": "n 泡菜;德国泡菜"
  },
  {
    "word": "sausage",
    "meaning": "n 香肠;腊肠"
  },
  {
    "word": "savage",
    "meaning": "adj 野蛮的 n.野蛮人"
  },
  {
    "word": "savannah",
    "meaning": "n 大草原;热带草原"
  },
  {
    "word": "save",
    "meaning": "v 救;节省"
  },
  {
    "word": "savings",
    "meaning": "n 存款;储蓄"
  },
  {
    "word": "savor",
    "meaning": "n 风味;味道 v.品尝"
  },
  {
    "word": "savory",
    "meaning": "adj 风味的;可口的"
  },
  {
    "word": "savour",
    "meaning": "n 风味;味道 v.品尝"
  },
  {
    "word": "saw",
    "meaning": "n 锯子 v.锯"
  },
  {
    "word": "saxophone",
    "meaning": "n 萨克斯管"
  },
  {
    "word": "say",
    "meaning": "v 说;表示"
  },
  {
    "word": "sayings",
    "meaning": "n 言论;格言"
  },
  {
    "word": "scab",
    "meaning": "n 痂;疤"
  },
  {
    "word": "scaffold",
    "meaning": "n 脚手架;绞刑台"
  },
  {
    "word": "scale",
    "meaning": "n 鳞;天平 v.攀登"
  },
  {
    "word": "scallop",
    "meaning": "n 扇贝;干贝"
  },
  {
    "word": "scalpel",
    "meaning": "n 外科手术刀"
  },
  {
    "word": "scamp",
    "meaning": "n 露营;简陋的小屋"
  },
  {
    "word": "scan",
    "meaning": "v 扫描;浏览"
  },
  {
    "word": "scandal",
    "meaning": "n 丑闻;诽谤"
  },
  {
    "word": "scandalize",
    "meaning": "v 使愤慨;使震惊"
  },
  {
    "word": "scant",
    "meaning": "adj 不足的 v.节省"
  },
  {
    "word": "scar",
    "meaning": "n 疤;创伤 v.留下伤痕"
  },
  {
    "word": "scarce",
    "meaning": "adj 缺乏的;稀有的"
  },
  {
    "word": "scarcely",
    "meaning": "adv 几乎不;简直不"
  },
  {
    "word": "scare",
    "meaning": "n 惊恐 v.使害怕"
  },
  {
    "word": "scarf",
    "meaning": "n 围巾;头巾"
  },
  {
    "word": "scarlet",
    "meaning": "adj 猩红的 n.猩红色"
  },
  {
    "word": "scatter",
    "meaning": "v 分散;散播"
  },
  {
    "word": "scene",
    "meaning": "n 场景;景色"
  },
  {
    "word": "scenery",
    "meaning": "n 风景;舞台布景"
  },
  {
    "word": "scent",
    "meaning": "n 气味;嗅觉"
  },
  {
    "word": "schedule",
    "meaning": "n 时间表 v.安排"
  },
  {
    "word": "schema",
    "meaning": "n 计划;模式"
  },
  {
    "word": "schematic",
    "meaning": "adj 计划的;图表的"
  },
  {
    "word": "scheme",
    "meaning": "n 计划;阴谋"
  },
  {
    "word": "scholar",
    "meaning": "n 学者;奖学金获得者"
  },
  {
    "word": "scholarship",
    "meaning": "n 奖学金;学问"
  },
  {
    "word": "school",
    "meaning": "n 学校;学科"
  },
  {
    "word": "science",
    "meaning": "n 科学;学科"
  },
  {
    "word": "scientific",
    "meaning": "adj 科学的"
  },
  {
    "word": "scientist",
    "meaning": "n 科学家"
  },
  {
    "word": "scissors",
    "meaning": "n 剪刀;剪子"
  },
  {
    "word": "scoff",
    "meaning": "v 嘲笑;蔑视"
  },
  {
    "word": "scold",
    "meaning": "v 责骂;训斥"
  },
  {
    "word": "scorch",
    "meaning": "v 烧焦;烤焦"
  },
  {
    "word": "scorn",
    "meaning": "n 轻蔑;鄙视"
  },
  {
    "word": "scorpion",
    "meaning": "n 蝎子;蝎"
  },
  {
    "word": "scotch",
    "meaning": "n /adj.苏格兰（人）的"
  },
  {
    "word": "scoundrel",
    "meaning": "n 恶棍;无赖"
  },
  {
    "word": "scour",
    "meaning": "v 擦洗;搜索"
  },
  {
    "word": "scourge",
    "meaning": "n 灾难;鞭子"
  },
  {
    "word": "scout",
    "meaning": "n 侦察员;侦察"
  },
  {
    "word": "scowl",
    "meaning": "v 皱眉;愁眉苦脸"
  },
  {
    "word": "scramble",
    "meaning": "v 攀登;争夺"
  },
  {
    "word": "scrap",
    "meaning": "n 碎片;废料"
  },
  {
    "word": "scratch",
    "meaning": "v 抓;刮擦"
  },
  {
    "word": "scream",
    "meaning": "n 尖叫声 v.尖叫"
  },
  {
    "word": "screech",
    "meaning": "v 尖叫;发出尖锐声"
  },
  {
    "word": "screen",
    "meaning": "n 屏幕;屏风 v.掩蔽"
  },
  {
    "word": "screw",
    "meaning": "n 螺旋;螺丝 v.拧紧"
  },
  {
    "word": "screwdriver",
    "meaning": "n 螺丝刀;改锥"
  },
  {
    "word": "scribble",
    "meaning": "v 乱写;涂鸦"
  },
  {
    "word": "script",
    "meaning": "n 脚本;手稿"
  },
  {
    "word": "scroll",
    "meaning": "n 卷轴;卷形物"
  },
  {
    "word": "scrub",
    "meaning": "v 擦洗;灌木丛"
  },
  {
    "word": "scruffy",
    "meaning": "adj 肮脏的;不整洁的"
  },
  {
    "word": "scruple",
    "meaning": "n 顾忌;犹豫"
  },
  {
    "word": "scrupulous",
    "meaning": "adj 细心的;谨慎的"
  },
  {
    "word": "scrutinize",
    "meaning": "v 仔细检查;细读"
  },
  {
    "word": "scrutiny",
    "meaning": "n 详细审查;仔细"
  },
  {
    "word": "sculpture",
    "meaning": "n 雕塑;雕刻 v.雕塑"
  },
  {
    "word": "sculptural",
    "meaning": "adj 雕刻的;雕塑的"
  },
  {
    "word": "sculptured",
    "meaning": "adj 雕刻的;雕塑的"
  },
  {
    "word": "scurry",
    "meaning": "v 急跑;疾走"
  },
  {
    "word": "scurvy",
    "meaning": "adj 坏血的;不礼貌的"
  },
  {
    "word": "scuttle",
    "meaning": "v 急走;急跑"
  },
  {
    "word": "seabed",
    "meaning": "n 海床;海底"
  },
  {
    "word": "seafood",
    "meaning": "n 海鲜;海产食品"
  },
  {
    "word": "seagull",
    "meaning": "n 海鸥"
  },
  {
    "word": "seal",
    "meaning": "n 海豹 v.封上"
  },
  {
    "word": "seam",
    "meaning": "n 缝;接缝"
  },
  {
    "word": "seaman",
    "meaning": "n 水手;海员"
  },
  {
    "word": "seamless",
    "meaning": "adj 无缝的;无接缝的"
  },
  {
    "word": "seaport",
    "meaning": "n 港口;海港"
  },
  {
    "word": "sear",
    "meaning": "n 烧灼;焦土 v.烧灼"
  },
  {
    "word": "search",
    "meaning": "n /v.搜索;搜寻"
  },
  {
    "word": "searchlight",
    "meaning": "n 探照灯;搜索灯"
  },
  {
    "word": "seaside",
    "meaning": "n 海滨;海边"
  },
  {
    "word": "season",
    "meaning": "n 季节 v.加味"
  },
  {
    "word": "seasoning",
    "meaning": "n 调味品;佐料"
  },
  {
    "word": "seat",
    "meaning": "n 座位;席位 v.使坐下"
  },
  {
    "word": "secede",
    "meaning": "v 脱离;退出"
  },
  {
    "word": "secession",
    "meaning": "n 脱离;退出"
  },
  {
    "word": "second",
    "meaning": "n 第二;秒"
  },
  {
    "word": "secondary",
    "meaning": "adj 第二的;次要的"
  },
  {
    "word": "secondhand",
    "meaning": "adj 二手的"
  },
  {
    "word": "secret",
    "meaning": "adj 秘密的 n.秘密"
  },
  {
    "word": "secretariat",
    "meaning": "n 秘书处;书记处"
  },
  {
    "word": "secrete",
    "meaning": "v 分泌;隐藏"
  },
  {
    "word": "secretion",
    "meaning": "n 分泌;分泌物"
  },
  {
    "word": "secretly",
    "meaning": "adv 秘密地;背地里"
  },
  {
    "word": "sect",
    "meaning": "n 教派;部门"
  },
  {
    "word": "section",
    "meaning": "n 段;部分"
  },
  {
    "word": "sector",
    "meaning": "n 扇形;部门"
  },
  {
    "word": "secular",
    "meaning": "adj 世俗的;长期的"
  },
  {
    "word": "secure",
    "meaning": "adj 安全的 v.保护"
  },
  {
    "word": "security",
    "meaning": "n 安全;保障"
  },
  {
    "word": "sedate",
    "meaning": "adj 安静的;稳重的"
  },
  {
    "word": "sedative",
    "meaning": "adj 镇静的 n.镇静剂"
  },
  {
    "word": "sediment",
    "meaning": "n 沉淀物;沉积"
  },
  {
    "word": "sedition",
    "meaning": "n 煽动;暴乱"
  },
  {
    "word": "seditious",
    "meaning": "adj 煽动性的;叛逆的"
  },
  {
    "word": "seduce",
    "meaning": "v 勾引;诱惑"
  },
  {
    "word": "seduction",
    "meaning": "n 勾引;诱惑"
  },
  {
    "word": "seductive",
    "meaning": "adj 诱惑的;有魅力的"
  },
  {
    "word": "see",
    "meaning": "v 看见;理解"
  },
  {
    "word": "seed",
    "meaning": "n 种子 v.播种"
  },
  {
    "word": "seedling",
    "meaning": "n 幼苗;秧苗"
  },
  {
    "word": "seek",
    "meaning": "v 寻找;寻求"
  },
  {
    "word": "seem",
    "meaning": "v 似乎;好像"
  },
  {
    "word": "seemingly",
    "meaning": "adv 看来;看来是"
  },
  {
    "word": "seen",
    "meaning": "v 被看见"
  },
  {
    "word": "segment",
    "meaning": "n 段;部分"
  },
  {
    "word": "segregate",
    "meaning": "v 隔离;分离"
  },
  {
    "word": "segregated",
    "meaning": "adj 隔离的"
  },
  {
    "word": "segregation",
    "meaning": "n 隔离;分离"
  },
  {
    "word": "seismic",
    "meaning": "adj 地震的;地震引起的"
  },
  {
    "word": "seldom",
    "meaning": "adv 很少;难得"
  },
  {
    "word": "select",
    "meaning": "v 选择 adj.精选的"
  },
  {
    "word": "selection",
    "meaning": "n 选择;挑选"
  },
  {
    "word": "selective",
    "meaning": "adj 选择的;挑剔的"
  },
  {
    "word": "selector",
    "meaning": "n 选择器;选择者"
  },
  {
    "word": "selenium",
    "meaning": "n 硒"
  },
  {
    "word": "self",
    "meaning": "n 自己;自我"
  },
  {
    "word": "selfish",
    "meaning": "adj 自私的"
  },
  {
    "word": "selfishness",
    "meaning": "n 自私"
  },
  {
    "word": "sell",
    "meaning": "v 卖;销售"
  },
  {
    "word": "semantic",
    "meaning": "adj 语义的;语义学的"
  },
  {
    "word": "semblance",
    "meaning": "n 相似;外观"
  },
  {
    "word": "semen",
    "meaning": "n 精液;精子"
  },
  {
    "word": "semiconductor",
    "meaning": "n 半导体"
  },
  {
    "word": "seminal",
    "meaning": "adj 种子的;重大的"
  },
  {
    "word": "seminar",
    "meaning": "n 研讨会;讨论会"
  },
  {
    "word": "seminary",
    "meaning": "n 神学院;学院"
  },
  {
    "word": "senate",
    "meaning": "n 参议院;上院"
  },
  {
    "word": "senator",
    "meaning": "n 参议员"
  },
  {
    "word": "send",
    "meaning": "v 送;派遣"
  },
  {
    "word": "senile",
    "meaning": "adj 年老的;衰老的"
  },
  {
    "word": "senility",
    "meaning": "n 衰老;老迈"
  },
  {
    "word": "senior",
    "meaning": "adj 年长的 n.上司"
  },
  {
    "word": "sensation",
    "meaning": "n 感觉;轰动"
  },
  {
    "word": "sensational",
    "meaning": "adj 轰动的;耸人听闻的"
  },
  {
    "word": "sense",
    "meaning": "n 感觉 v.理解"
  },
  {
    "word": "senseless",
    "meaning": "adj 无感觉的;无意识的"
  },
  {
    "word": "sensible",
    "meaning": "adj 明智的;可感觉到的"
  },
  {
    "word": "sensitive",
    "meaning": "adj 敏感的;易受伤害的"
  },
  {
    "word": "sensitivity",
    "meaning": "n 敏感性;灵敏性"
  },
  {
    "word": "sensor",
    "meaning": "n 传感器;感应器"
  },
  {
    "word": "sensory",
    "meaning": "adj 感官的;感觉的"
  },
  {
    "word": "sensual",
    "meaning": "adj 感官的;肉欲的"
  },
  {
    "word": "sentiment",
    "meaning": "n 感情;情绪"
  },
  {
    "word": "sentimental",
    "meaning": "adj 感情的;多愁善感的"
  },
  {
    "word": "sentinel",
    "meaning": "n 哨兵;警戒者"
  },
  {
    "word": "separable",
    "meaning": "adj 可分离的"
  },
  {
    "word": "separate",
    "meaning": "adj 单独的 v.分开"
  },
  {
    "word": "separation",
    "meaning": "n 分离;分开"
  },
  {
    "word": "separatist",
    "meaning": "n 分离主义者"
  },
  {
    "word": "September",
    "meaning": "n 九月"
  },
  {
    "word": "sequel",
    "meaning": "n 结局;续集"
  },
  {
    "word": "sequence",
    "meaning": "n 顺序;连续"
  },
  {
    "word": "sequent",
    "meaning": "adj 随后的;后来的"
  },
  {
    "word": "sequential",
    "meaning": "adj 连续的;一连串的"
  },
  {
    "word": "sequester",
    "meaning": "v 隐退;使隐退"
  },
  {
    "word": "sequestration",
    "meaning": "n 隐退;没收"
  },
  {
    "word": "serene",
    "meaning": "adj 宁静的;安详的"
  },
  {
    "word": "serenity",
    "meaning": "n 宁静;安详"
  },
  {
    "word": "sergeant",
    "meaning": "n 军士;警官"
  },
  {
    "word": "serial",
    "meaning": "adj 连续的 n.连载"
  },
  {
    "word": "series",
    "meaning": "n 系列;级数"
  },
  {
    "word": "serif",
    "meaning": "n 衬线;印刷字体"
  },
  {
    "word": "serifed",
    "meaning": "adj 有衬线的"
  },
  {
    "word": "serious",
    "meaning": "adj 严肃的;严重的"
  },
  {
    "word": "seriousness",
    "meaning": "n 严肃;严重性"
  },
  {
    "word": "sermon",
    "meaning": "n 布道;讲道"
  },
  {
    "word": "serpent",
    "meaning": "n 蛇;狡猾的人"
  },
  {
    "word": "serrate",
    "meaning": "adj 锯齿状的"
  },
  {
    "word": "servant",
    "meaning": "n 仆人;雇员"
  },
  {
    "word": "serve",
    "meaning": "v 服务;服役"
  },
  {
    "word": "service",
    "meaning": "n 服务;服役"
  },
  {
    "word": "serviceable",
    "meaning": "adj 有用的;耐用的"
  },
  {
    "word": "servile",
    "meaning": "adj 奴隶的;谄媚的"
  },
  {
    "word": "servitude",
    "meaning": "n 奴役;奴役状态"
  },
  {
    "word": "session",
    "meaning": "n 会议;开庭期"
  },
  {
    "word": "set",
    "meaning": "n 集合 v.放置"
  },
  {
    "word": "setback",
    "meaning": "n 挫折;倒退"
  },
  {
    "word": "setting",
    "meaning": "n 环境;安装"
  },
  {
    "word": "settle",
    "meaning": "v 安置;解决"
  },
  {
    "word": "settlement",
    "meaning": "n 解决;殖民"
  },
  {
    "word": "settler",
    "meaning": "n 移民;殖民者"
  },
  {
    "word": "sever",
    "meaning": "v 切断;脱离"
  },
  {
    "word": "several",
    "meaning": "adj 几个;各自的"
  },
  {
    "word": "severe",
    "meaning": "adj 严重的;严厉的"
  },
  {
    "word": "severity",
    "meaning": "n 严肃;严重性"
  },
  {
    "word": "sew",
    "meaning": "v 缝制;缝"
  },
  {
    "word": "sewage",
    "meaning": "n 污水;下水道"
  },
  {
    "word": "sewer",
    "meaning": "n 下水道;阴沟"
  },
  {
    "word": "sex",
    "meaning": "n 性别;性"
  },
  {
    "word": "sexual",
    "meaning": "adj 性的;性别的"
  },
  {
    "word": "shabby",
    "meaning": "adj 破旧的;卑鄙的"
  },
  {
    "word": "shack",
    "meaning": "n 简陋的小屋"
  },
  {
    "word": "shackle",
    "meaning": "n 枷锁;束缚"
  },
  {
    "word": "shade",
    "meaning": "n 荫;阴影"
  },
  {
    "word": "shading",
    "meaning": "n 遮蔽;阴影"
  },
  {
    "word": "shadow",
    "meaning": "n 阴影;影子 v.跟踪"
  },
  {
    "word": "shadowy",
    "meaning": "adj 阴暗的;多阴影的"
  },
  {
    "word": "shady",
    "meaning": "adj 成荫的;可疑的"
  },
  {
    "word": "shaft",
    "meaning": "n 轴;矛"
  },
  {
    "word": "shag",
    "meaning": "n 粗糙的毛发"
  },
  {
    "word": "shaggy",
    "meaning": "adj 毛发粗浓的;蓬松的"
  },
  {
    "word": "shake",
    "meaning": "v 摇动;震动"
  },
  {
    "word": "shaky",
    "meaning": "adj 不稳定的;不可靠的"
  },
  {
    "word": "shall",
    "meaning": "aux 将要;必须"
  },
  {
    "word": "shallow",
    "meaning": "adj 浅的;浅薄的"
  },
  {
    "word": "sham",
    "meaning": "n 假冒;虚假"
  },
  {
    "word": "shambles",
    "meaning": "n 混乱;废墟"
  },
  {
    "word": "shame",
    "meaning": "n 羞耻;羞愧"
  },
  {
    "word": "shameful",
    "meaning": "adj 可耻的;羞耻的"
  },
  {
    "word": "shampoo",
    "meaning": "n 洗发剂 v.洗发"
  },
  {
    "word": "shanghai",
    "meaning": "v 欺骗;诱拐"
  },
  {
    "word": "shape",
    "meaning": "n 形状 v.形成"
  },
  {
    "word": "shapeless",
    "meaning": "adj 无形状的;无定形的"
  },
  {
    "word": "share",
    "meaning": "n 份额 v.分享"
  },
  {
    "word": "shareholder",
    "meaning": "n 股东"
  },
  {
    "word": "shark",
    "meaning": "n 鲨鱼"
  },
  {
    "word": "sharp",
    "meaning": "adj 锋利的;敏锐的"
  },
  {
    "word": "sharpen",
    "meaning": "v 削尖;变锋利"
  },
  {
    "word": "shatter",
    "meaning": "v 打碎;破坏"
  },
  {
    "word": "shattered",
    "meaning": "adj 破碎的;被破坏的"
  },
  {
    "word": "shave",
    "meaning": "v 剃须;剃毛"
  },
  {
    "word": "shaven",
    "meaning": "n 避难所 v.避难"
  },
  {
    "word": "shawl",
    "meaning": "n 披肩;围巾"
  },
  {
    "word": "she",
    "meaning": "pron 她"
  },
  {
    "word": "shear",
    "meaning": "v 剪;剪切"
  },
  {
    "word": "shears",
    "meaning": "n 大剪刀"
  },
  {
    "word": "sheath",
    "meaning": "n 鞘;套"
  },
  {
    "word": "shed",
    "meaning": "n 棚;脱落 v.脱落"
  },
  {
    "word": "sheen",
    "meaning": "n 光辉;光泽"
  },
  {
    "word": "sheep",
    "meaning": "n 羊;绵羊"
  },
  {
    "word": "sheer",
    "meaning": "adj 纯粹的;绝对的"
  },
  {
    "word": "sheet",
    "meaning": "n 被单;薄片"
  },
  {
    "word": "shelf",
    "meaning": "n 架子;搁板"
  },
  {
    "word": "shell",
    "meaning": "n 壳;贝壳"
  },
  {
    "word": "shelter",
    "meaning": "n 掩蔽;避难所 v.掩蔽"
  },
  {
    "word": "sheltered",
    "meaning": "adj 掩蔽的;受保护的"
  },
  {
    "word": "shelve",
    "meaning": "v 搁置;放置"
  },
  {
    "word": "shelf",
    "meaning": "n 架子;搁板"
  },
  {
    "word": "shelves",
    "meaning": "n 架子;搁板"
  },
  {
    "word": "shelter",
    "meaning": "n 掩蔽;避难所 v.掩蔽"
  },
  {
    "word": "shepherd",
    "meaning": "n 牧羊人;牧羊者"
  },
  {
    "word": "sheriff",
    "meaning": "n 郡长;治安官"
  },
  {
    "word": "shied",
    "meaning": "v 躲避;遮避"
  },
  {
    "word": "shift",
    "meaning": "v 转移;变换"
  },
  {
    "word": "shifty",
    "meaning": "adj 变幻的;狡猾的"
  },
  {
    "word": "shilling",
    "meaning": "n 先令（旧时英国货币）"
  },
  {
    "word": "shimmer",
    "meaning": "v 发微光;闪烁"
  },
  {
    "word": "shimmering",
    "meaning": "adj 闪烁的;闪亮的"
  },
  {
    "word": "shine",
    "meaning": "v 发光;擦亮"
  },
  {
    "word": "shiny",
    "meaning": "adj 发亮的;有光泽的"
  },
  {
    "word": "ship",
    "meaning": "n 船 v.装运"
  },
  {
    "word": "shipment",
    "meaning": "n 装运;装载"
  },
  {
    "word": "shipping",
    "meaning": "n 装货;船运"
  },
  {
    "word": "shipwreck",
    "meaning": "n 船只失事"
  },
  {
    "word": "shipyard",
    "meaning": "n 造船厂;船坞"
  },
  {
    "word": "shire",
    "meaning": "n 郡"
  },
  {
    "word": "shirk",
    "meaning": "v 逃避;规避"
  },
  {
    "word": "shirt",
    "meaning": "n 衬衫"
  },
  {
    "word": "shiver",
    "meaning": "n 颤抖;碎片 v.颤抖"
  },
  {
    "word": "shock",
    "meaning": "n 冲击;震惊 v.使休克"
  },
  {
    "word": "shocked",
    "meaning": "adj 震惊的;吃惊的"
  },
  {
    "word": "shocking",
    "meaning": "adj 令人震惊的"
  },
  {
    "word": "shod",
    "meaning": "v 给...穿上鞋"
  },
  {
    "word": "shoe",
    "meaning": "n 鞋"
  },
  {
    "word": "shoemaker",
    "meaning": "n 鞋匠;鞋制造者"
  },
  {
    "word": "shoot",
    "meaning": "v 射击;发芽"
  },
  {
    "word": "shop",
    "meaning": "n 商店 v.逛商店"
  },
  {
    "word": "shopkeeper",
    "meaning": "n 店主;店主人"
  },
  {
    "word": "shopping",
    "meaning": "n 购物"
  },
  {
    "word": "shore",
    "meaning": "n 岸;滨"
  },
  {
    "word": "short",
    "meaning": "adj 短的;缺乏的"
  },
  {
    "word": "shortage",
    "meaning": "n 不足;缺少"
  },
  {
    "word": "shortcoming",
    "meaning": "n 缺点;短处"
  },
  {
    "word": "shortcut",
    "meaning": "n 近路;捷径"
  },
  {
    "word": "shorten",
    "meaning": "v 缩短;变短"
  },
  {
    "word": "shortly",
    "meaning": "adv 不久;立刻"
  },
  {
    "word": "shot",
    "meaning": "n 射击;射门"
  },
  {
    "word": "should",
    "meaning": "aux 应该;将要"
  },
  {
    "word": "shoulder",
    "meaning": "n 肩;肩部"
  },
  {
    "word": "shout",
    "meaning": "v 呼喊;喊叫"
  },
  {
    "word": "shove",
    "meaning": "v 推;挤"
  },
  {
    "word": "shovel",
    "meaning": "n 铲;铁铲"
  },
  {
    "word": "show",
    "meaning": "n 显示 v.展示"
  },
  {
    "word": "shower",
    "meaning": "n 阵雨;淋浴"
  },
  {
    "word": "showing",
    "meaning": "n 显示;展示"
  },
  {
    "word": "shred",
    "meaning": "n 碎片;少量"
  },
  {
    "word": "shrewd",
    "meaning": "adj 精明的;狡猾的"
  },
  {
    "word": "shriek",
    "meaning": "n 尖叫声 v.尖叫"
  },
  {
    "word": "shrill",
    "meaning": "adj 尖锐的;刺耳的"
  },
  {
    "word": "shrimp",
    "meaning": "n 虾;小虾"
  },
  {
    "word": "shrine",
    "meaning": "n 神龛;圣地"
  },
  {
    "word": "shrink",
    "meaning": "v 收缩;缩小"
  },
  {
    "word": "shrinkage",
    "meaning": "n 收缩;减少"
  },
  {
    "word": "shrivel",
    "meaning": "v 萎缩;枯萎"
  },
  {
    "word": "shrub",
    "meaning": "n 灌木;灌木丛"
  },
  {
    "word": "shrug",
    "meaning": "v /n.耸肩"
  },
  {
    "word": "shudder",
    "meaning": "n 战栗;发抖"
  },
  {
    "word": "shuffle",
    "meaning": "v 拖步走;洗牌"
  },
  {
    "word": "shun",
    "meaning": "v 避开;避免"
  },
  {
    "word": "shut",
    "meaning": "v 关闭;停业"
  },
  {
    "word": "shutdown",
    "meaning": "n 关闭;停工"
  },
  {
    "word": "shutter",
    "meaning": "n 百叶窗;快门"
  },
  {
    "word": "shuttle",
    "meaning": "n 梭子;航天飞机 v.穿梭"
  },
  {
    "word": "shy",
    "meaning": "adj 害羞的;羞怯的"
  },
  {
    "word": "shyness",
    "meaning": "n 害羞;羞怯"
  },
  {
    "word": "sibyl",
    "meaning": "n 女预言家;女先知"
  },
  {
    "word": "sick",
    "meaning": "adj 有病的;恶心的"
  },
  {
    "word": "sicken",
    "meaning": "v 使生病;使厌恶"
  },
  {
    "word": "sickening",
    "meaning": "adj 令人厌恶的;令人恶心的"
  },
  {
    "word": "sickle",
    "meaning": "n 镰刀;新月形"
  },
  {
    "word": "sickness",
    "meaning": "n 疾病;恶心"
  },
  {
    "word": "side",
    "meaning": "n 边;方面"
  },
  {
    "word": "sidewalk",
    "meaning": "n 人行道"
  },
  {
    "word": "sideways",
    "meaning": "adv 斜着;向一边"
  },
  {
    "word": "siege",
    "meaning": "n 围攻;包围"
  },
  {
    "word": "sieve",
    "meaning": "n 筛子;筛"
  },
  {
    "word": "sift",
    "meaning": "v 筛;过滤"
  },
  {
    "word": "sigh",
    "meaning": "n 叹息;叹气 v.叹息"
  },
  {
    "word": "sight",
    "meaning": "n 视力;景象"
  },
  {
    "word": "sightseeing",
    "meaning": "n 观光;游览"
  },
  {
    "word": "sign",
    "meaning": "n 符号 v.签字"
  },
  {
    "word": "signal",
    "meaning": "n 信号 v.发信号"
  },
  {
    "word": "signature",
    "meaning": "n 签名;署名"
  },
  {
    "word": "significance",
    "meaning": "n 意义;重要性"
  },
  {
    "word": "significant",
    "meaning": "adj 重要的;显著的"
  },
  {
    "word": "signify",
    "meaning": "v 表示;意味"
  },
  {
    "word": "silence",
    "meaning": "n 沉默;寂静"
  },
  {
    "word": "silent",
    "meaning": "adj 沉默的;无声的"
  },
  {
    "word": "silently",
    "meaning": "adv 沉默地;安静地"
  },
  {
    "word": "silhouette",
    "meaning": "n 轮廓;剪影"
  },
  {
    "word": "silicon",
    "meaning": "n 硅;硅元素"
  },
  {
    "word": "silk",
    "meaning": "n 丝绸;丝"
  },
  {
    "word": "silken",
    "meaning": "adj 丝的;柔软的"
  },
  {
    "word": "silly",
    "meaning": "adj 愚蠢的;荒谬的"
  },
  {
    "word": "silver",
    "meaning": "n 银;银子"
  },
  {
    "word": "silverware",
    "meaning": "n 银器;餐具"
  },
  {
    "word": "similar",
    "meaning": "adj 类似的;相同的"
  },
  {
    "word": "similarity",
    "meaning": "n 相似;类似"
  },
  {
    "word": "simile",
    "meaning": "n 明喻;比拟"
  },
  {
    "word": "simmer",
    "meaning": "v 炖;煨"
  },
  {
    "word": "simple",
    "meaning": "adj 简单的;朴素的"
  },
  {
    "word": "simplicity",
    "meaning": "n 简单;朴素"
  },
  {
    "word": "simplify",
    "meaning": "v 简化;简化"
  },
  {
    "word": "simply",
    "meaning": "adv 简单地;仅仅"
  },
  {
    "word": "simulate",
    "meaning": "v 模仿;模拟"
  },
  {
    "word": "simulated",
    "meaning": "adj 模拟的;假装的"
  },
  {
    "word": "simulation",
    "meaning": "n 模拟;模仿"
  },
  {
    "word": "simultaneous",
    "meaning": "adj 同时的;联立的"
  },
  {
    "word": "sin",
    "meaning": "n 罪;罪恶"
  },
  {
    "word": "since",
    "meaning": "adv 从那时以来 prep.从"
  },
  {
    "word": "sincere",
    "meaning": "adj 真诚的;真挚的"
  },
  {
    "word": "sincerely",
    "meaning": "adv 真诚地;真挚地"
  },
  {
    "word": "sincerity",
    "meaning": "n 真诚;真挚"
  },
  {
    "word": "sinful",
    "meaning": "adj 有罪的;罪恶的"
  },
  {
    "word": "sing",
    "meaning": "v 唱;歌唱"
  },
  {
    "word": "singer",
    "meaning": "n 歌手;歌唱家"
  },
  {
    "word": "single",
    "meaning": "adj 单一的 n.一个"
  },
  {
    "word": "singly",
    "meaning": "adv 单独地;各自地"
  },
  {
    "word": "singsong",
    "meaning": "n 轻快地唱歌;悦耳的声音"
  },
  {
    "word": "singular",
    "meaning": "adj 单一的;非凡的"
  },
  {
    "word": "sinister",
    "meaning": "adj 邪恶的;不祥的"
  },
  {
    "word": "sinuous",
    "meaning": "adj 蜿蜒的;迂回的"
  },
  {
    "word": "sip",
    "meaning": "v 啜饮;尝 n.一小口"
  },
  {
    "word": "sir",
    "meaning": "n 先生;阁下"
  },
  {
    "word": "sire",
    "meaning": "n 君主;统治者"
  },
  {
    "word": "siren",
    "meaning": "n 汽笛;妖妇"
  },
  {
    "word": "sister",
    "meaning": "n 姐妹"
  },
  {
    "word": "sit",
    "meaning": "v 坐;位于"
  },
  {
    "word": "site",
    "meaning": "n 地点;位置"
  },
  {
    "word": "sitting",
    "meaning": "n 会议;座位"
  },
  {
    "word": "sitter",
    "meaning": "n 临时保姆;模特儿"
  },
  {
    "word": "situated",
    "meaning": "adj 位于...的"
  },
  {
    "word": "situation",
    "meaning": "n 情况;位置"
  },
  {
    "word": "six",
    "meaning": "num 六"
  },
  {
    "word": "sixteen",
    "meaning": "num 十六"
  },
  {
    "word": "sixth",
    "meaning": "num 第六"
  },
  {
    "word": "size",
    "meaning": "n 尺寸;大小"
  },
  {
    "word": "skate",
    "meaning": "n 冰鞋 v.滑冰"
  },
  {
    "word": "sketch",
    "meaning": "n 素描;草图 v.素描"
  },
  {
    "word": "skew",
    "meaning": "adj 斜的 v.使偏斜"
  },
  {
    "word": "skewer",
    "meaning": "n 串肉扦 v.串肉"
  },
  {
    "word": "ski",
    "meaning": "n 滑雪 v.滑雪"
  },
  {
    "word": "skid",
    "meaning": "v 滑倒 n.滑倒"
  },
  {
    "word": "skill",
    "meaning": "n 技能;技巧"
  },
  {
    "word": "skilled",
    "meaning": "adj 熟练的;有技能的"
  },
  {
    "word": "skillful",
    "meaning": "adj 熟练的;灵巧的"
  },
  {
    "word": "skim",
    "meaning": "v 撇去;掠过"
  },
  {
    "word": "skimp",
    "meaning": "v 节省;吝啬"
  },
  {
    "word": "skin",
    "meaning": "n 皮;皮肤 v.剥皮"
  },
  {
    "word": "skinny",
    "meaning": "adj 皮包骨的;瘦的"
  },
  {
    "word": "skip",
    "meaning": "v 跳;跳绳"
  },
  {
    "word": "skirmish",
    "meaning": "n 小战;小争吵"
  },
  {
    "word": "skirt",
    "meaning": "n 裙子 v.绕过"
  },
  {
    "word": "skullduggery",
    "meaning": "n 欺骗;不正当手段"
  },
  {
    "word": "skull",
    "meaning": "n 头盖骨;骷髅"
  },
  {
    "word": "skunk",
    "meaning": "n 臭鼬;黄鼠狼"
  },
  {
    "word": "sky",
    "meaning": "n 天;天空"
  },
  {
    "word": "skyscraper",
    "meaning": "n 摩天楼"
  },
  {
    "word": "slab",
    "meaning": "n 石板;厚板"
  },
  {
    "word": "slack",
    "meaning": "adj 松弛的;萧条的"
  },
  {
    "word": "slag",
    "meaning": "n 渣;矿渣"
  },
  {
    "word": "slam",
    "meaning": "v 砰地关上;猛然抨击"
  },
  {
    "word": "slander",
    "meaning": "n 诽谤;诋毁"
  },
  {
    "word": "slanderous",
    "meaning": "adj 诽谤的;诋毁的"
  },
  {
    "word": "slang",
    "meaning": "n 俚语;行话"
  },
  {
    "word": "slant",
    "meaning": "n 倾斜;斜面 v.倾斜"
  },
  {
    "word": "slap",
    "meaning": "v 拍;掌击 n.拍"
  },
  {
    "word": "slapdash",
    "meaning": "adj 马虎的;草率的"
  },
  {
    "word": "slapstick",
    "meaning": "n 闹剧;打闹喜剧"
  },
  {
    "word": "slash",
    "meaning": "n 砍;削减 v.砍"
  },
  {
    "word": "slat",
    "meaning": "n 板条;狭长条"
  },
  {
    "word": "slaughter",
    "meaning": "n 屠杀;杀戮 v.屠杀"
  },
  {
    "word": "slave",
    "meaning": "n 奴隶 v.苦干"
  },
  {
    "word": "slavery",
    "meaning": "n 奴隶制度;奴隶身分"
  },
  {
    "word": "slay",
    "meaning": "v 杀死;杀害"
  },
  {
    "word": "sledge",
    "meaning": "n 雪橇"
  },
  {
    "word": "sledgehammer",
    "meaning": "n 大锤"
  },
  {
    "word": "sleek",
    "meaning": "adj 光滑的;时髦的"
  },
  {
    "word": "sleep",
    "meaning": "n 睡眠 v.睡觉"
  },
  {
    "word": "sleepy",
    "meaning": "adj 困倦的;不活跃的"
  },
  {
    "word": "sleet",
    "meaning": "n 雨夹雪;冰雹"
  },
  {
    "word": "sleeve",
    "meaning": "n 袖子;护套"
  },
  {
    "word": "sleigh",
    "meaning": "n 雪橇"
  },
  {
    "word": "sleight",
    "meaning": "n 巧妙;技巧"
  },
  {
    "word": "slender",
    "meaning": "adj 苗条的;纤细的"
  },
  {
    "word": "slice",
    "meaning": "n 薄片;部分 v.切成片"
  },
  {
    "word": "slick",
    "meaning": "adj 光滑的;巧妙的"
  },
  {
    "word": "slide",
    "meaning": "n 滑动;滑梯 v.滑动"
  },
  {
    "word": "slight",
    "meaning": "adj 轻微的;纤细的"
  },
  {
    "word": "slightly",
    "meaning": "adv 轻微地;纤细地"
  },
  {
    "word": "slim",
    "meaning": "adj 苗条的;微小的"
  },
  {
    "word": "slime",
    "meaning": "n 粘液;泥浆"
  },
  {
    "word": "sling",
    "meaning": "v 投掷;吊运"
  },
  {
    "word": "slip",
    "meaning": "n 滑倒;纸条 v.滑动"
  },
  {
    "word": "slipper",
    "meaning": "n 拖鞋;便鞋"
  },
  {
    "word": "slippery",
    "meaning": "adj 滑的;不稳定的"
  },
  {
    "word": "slit",
    "meaning": "n 裂缝;狭缝"
  },
  {
    "word": "sliver",
    "meaning": "n 裂片;细长条"
  },
  {
    "word": "slob",
    "meaning": "n 懒散的人;笨拙的人"
  },
  {
    "word": "sloe",
    "meaning": "n 黑刺李;黑刺李树"
  },
  {
    "word": "slog",
    "meaning": "n 沉重的步伐 v.沉重地走"
  },
  {
    "word": "slogan",
    "meaning": "n 标语;口号"
  },
  {
    "word": "sloop",
    "meaning": "n 小帆船"
  },
  {
    "word": "slope",
    "meaning": "n 斜坡;倾斜 v.倾斜"
  },
  {
    "word": "sloping",
    "meaning": "adj 倾斜的"
  },
  {
    "word": "slosh",
    "meaning": "v 溅泼;泥泞地走"
  },
  {
    "word": "slot",
    "meaning": "n 狭缝;空位"
  },
  {
    "word": "slouch",
    "meaning": "v 懒散地坐或站"
  },
  {
    "word": "slough",
    "meaning": "n 泥潭;沟"
  },
  {
    "word": "slow",
    "meaning": "adj 慢的 v.放慢"
  },
  {
    "word": "slowly",
    "meaning": "adv 慢慢地"
  },
  {
    "word": "sludge",
    "meaning": "n 烂泥;淤泥"
  },
  {
    "word": "slug",
    "meaning": "n 蛞蝓;缓慢的人"
  },
  {
    "word": "sluggish",
    "meaning": "adj 行动迟缓的;懒惰的"
  },
  {
    "word": "slum",
    "meaning": "n 贫民窟;棚户区"
  },
  {
    "word": "slumber",
    "meaning": "n 睡眠;沉睡"
  },
  {
    "word": "slump",
    "meaning": "n 暴跌;低潮期"
  },
  {
    "word": "slung",
    "meaning": "v 吊;抛"
  },
  {
    "word": "slur",
    "meaning": "n 诽谤;忽视 v.忽视"
  },
  {
    "word": "slush",
    "meaning": "n 雪泥;软泥"
  },
  {
    "word": "sly",
    "meaning": "adj 狡猾的;偷偷的"
  },
  {
    "word": "smack",
    "meaning": "v 拍;重击 n.少量"
  },
  {
    "word": "small",
    "meaning": "adj 小的;少的"
  },
  {
    "word": "smart",
    "meaning": "adj 聪明的;巧妙的"
  },
  {
    "word": "smash",
    "meaning": "v 打碎;撞击"
  },
  {
    "word": "smattering",
    "meaning": "n 少量;一知半解"
  },
  {
    "word": "smear",
    "meaning": "n 涂;诽谤 v.涂"
  },
  {
    "word": "smell",
    "meaning": "n 气味 v.嗅"
  },
  {
    "word": "smelt",
    "meaning": "v 冶炼;提炼"
  },
  {
    "word": "smirk",
    "meaning": "v 假笑;得意地笑"
  },
  {
    "word": "smith",
    "meaning": "n 铁匠;金属匠"
  },
  {
    "word": "smithereens",
    "meaning": "adv 粉碎地"
  },
  {
    "word": "smog",
    "meaning": "n 烟雾;空气污染"
  },
  {
    "word": "smoke",
    "meaning": "n 烟 v.吸烟"
  },
  {
    "word": "smooth",
    "meaning": "adj 平滑的 v.弄平"
  },
  {
    "word": "smoothly",
    "meaning": "adv 平稳地;顺利地"
  },
  {
    "word": "smoothness",
    "meaning": "n 平滑;平坦"
  },
  {
    "word": "smother",
    "meaning": "v 窒息;闷死"
  },
  {
    "word": "smudge",
    "meaning": "n 污迹;弄脏 v.弄脏"
  },
  {
    "word": "smug",
    "meaning": "adj 自满的;自鸣得意的"
  },
  {
    "word": "smuggle",
    "meaning": "v 走私;偷运"
  },
  {
    "word": "smut",
    "meaning": "n 污点;诽谤"
  },
  {
    "word": "snack",
    "meaning": "n 小吃;快餐"
  },
  {
    "word": "snag",
    "meaning": "n 障碍;意外"
  },
  {
    "word": "snail",
    "meaning": "n 蜗牛 v.缓慢移动"
  },
  {
    "word": "snake",
    "meaning": "n 蛇"
  },
  {
    "word": "snap",
    "meaning": "v 猛咬;突然折断"
  },
  {
    "word": "snapshot",
    "meaning": "n 快照;快相"
  },
  {
    "word": "snare",
    "meaning": "n 陷阱;罗网 v.诱捕"
  },
  {
    "word": "snarl",
    "meaning": "n 纠缠;缠结 v.纠缠"
  },
  {
    "word": "sneak",
    "meaning": "v 潜行;偷走"
  },
  {
    "word": "sneaker",
    "meaning": "n 运动鞋;潜行者"
  },
  {
    "word": "sneer",
    "meaning": "v 嘲笑;嗤之以鼻"
  },
  {
    "word": "sneeze",
    "meaning": "v 打喷嚏 n.喷嚏"
  },
  {
    "word": "snick",
    "meaning": "v 剪;修剪"
  },
  {
    "word": "sniff",
    "meaning": "v 嗅;闻"
  },
  {
    "word": "sniffle",
    "meaning": "v 抽噎;抽鼻子"
  },
  {
    "word": "snob",
    "meaning": "n 势利小人;攀高枝"
  },
  {
    "word": "snobbish",
    "meaning": "adj 势利的;势利眼的"
  },
  {
    "word": "snobbery",
    "meaning": "n 势利;谄上欺下"
  },
  {
    "word": "snoop",
    "meaning": "v 窥探;侦察"
  },
  {
    "word": "snore",
    "meaning": "v 打鼾 n.鼾声"
  },
  {
    "word": "snorkel",
    "meaning": "n 通气管 v.用通气管潜泳"
  },
  {
    "word": "snort",
    "meaning": "v 用鼻子吸气;轻蔑"
  },
  {
    "word": "snout",
    "meaning": "n 鼻子;猪嘴"
  },
  {
    "word": "snow",
    "meaning": "n 雪 v.下雪"
  },
  {
    "word": "snowdrift",
    "meaning": "n 雪堆;雪崩"
  },
  {
    "word": "snowflake",
    "meaning": "n 雪花;雪片"
  },
  {
    "word": "snowstorm",
    "meaning": "n 暴风雪"
  },
  {
    "word": "snowy",
    "meaning": "adj 雪的;下雪的"
  },
  {
    "word": "snub",
    "meaning": "v 冷落;不理睬"
  },
  {
    "word": "snuff",
    "meaning": "n 鼻烟;熄灭 v.熄灭"
  },
  {
    "word": "snug",
    "meaning": "adj 温暖的;舒适的"
  },
  {
    "word": "so",
    "meaning": "adv 如此;那么"
  },
  {
    "word": "soak",
    "meaning": "v 浸泡;渗透"
  },
  {
    "word": "soaked",
    "meaning": "adj 湿透的;浸湿的"
  },
  {
    "word": "soaking",
    "meaning": "n 浸泡;渗透"
  },
  {
    "word": "soap",
    "meaning": "n 肥皂 v.涂肥皂"
  },
  {
    "word": "sob",
    "meaning": "v /n.哭泣;呜咽"
  },
  {
    "word": "sober",
    "meaning": "adj 清醒的;素淡的"
  },
  {
    "word": "sobriety",
    "meaning": "n 清醒;节制"
  },
  {
    "word": "sobriquet",
    "meaning": "n 别名;绰号"
  },
  {
    "word": "social",
    "meaning": "adj 社会的;社交的"
  },
  {
    "word": "socialism",
    "meaning": "n 社会主义"
  },
  {
    "word": "socialist",
    "meaning": "adj 社会主义的 n.社会主义者"
  },
  {
    "word": "society",
    "meaning": "n 社会;协会"
  },
  {
    "word": "sock",
    "meaning": "n 短袜;袜子"
  },
  {
    "word": "soda",
    "meaning": "n 苏打;汽水"
  },
  {
    "word": "sodden",
    "meaning": "adj 浸透的;湿透的"
  },
  {
    "word": "sodium",
    "meaning": "n 钠"
  },
  {
    "word": "soever",
    "meaning": "adv 丝毫;一点儿"
  },
  {
    "word": "sofa",
    "meaning": "n 沙发"
  },
  {
    "word": "soft",
    "meaning": "adj 软的;柔和的"
  },
  {
    "word": "soften",
    "meaning": "v 变软;变柔和"
  },
  {
    "word": "softness",
    "meaning": "n 柔软;柔和"
  },
  {
    "word": "soil",
    "meaning": "n 土壤;土地"
  },
  {
    "word": "sojourn",
    "meaning": "n 逗留;短暂停留"
  },
  {
    "word": "solace",
    "meaning": "n 安慰;慰藉"
  },
  {
    "word": "solar",
    "meaning": "adj 太阳的;日光的"
  },
  {
    "word": "solder",
    "meaning": "v /n.焊接;焊料"
  },
  {
    "word": "soldier",
    "meaning": "n 士兵;军人"
  },
  {
    "word": "sole",
    "meaning": "adj 唯一的 n.脚底"
  },
  {
    "word": "solely",
    "meaning": "adv 单独地;仅仅"
  },
  {
    "word": "solemn",
    "meaning": "adj 庄严的;隆重的"
  },
  {
    "word": "solicitor",
    "meaning": "n 律师;请求者"
  },
  {
    "word": "solicit",
    "meaning": "v 请求;征求"
  },
  {
    "word": "solicitation",
    "meaning": "n 请求;征求"
  },
  {
    "word": "solicitor",
    "meaning": "n 律师;请求者"
  },
  {
    "word": "solid",
    "meaning": "adj 固体的 n.固体"
  },
  {
    "word": "solidarity",
    "meaning": "n 团结;一致"
  },
  {
    "word": "solidify",
    "meaning": "v 凝固;使团结"
  },
  {
    "word": "solitary",
    "meaning": "adj 孤独的 n.隐士"
  },
  {
    "word": "solitude",
    "meaning": "n 孤独;隐居"
  },
  {
    "word": "solo",
    "meaning": "adj 单独的 n.独奏"
  },
  {
    "word": "soluble",
    "meaning": "adj 可溶的;可溶解的"
  },
  {
    "word": "solution",
    "meaning": "n 溶解;解决"
  },
  {
    "word": "solve",
    "meaning": "v 解决;解答"
  },
  {
    "word": "solvency",
    "meaning": "n 溶解能力;偿债能力"
  },
  {
    "word": "solvent",
    "meaning": "adj 溶解的 n.溶剂"
  },
  {
    "word": "somber",
    "meaning": "adj 忧郁的;阴暗的"
  },
  {
    "word": "some",
    "meaning": "adj 一些的;几个"
  },
  {
    "word": "somebody",
    "meaning": "pron 某人;有人"
  },
  {
    "word": "somehow",
    "meaning": "adv 以某种方式"
  },
  {
    "word": "someone",
    "meaning": "pron 某人;有人"
  },
  {
    "word": "sometime",
    "meaning": "adv 在某时"
  },
  {
    "word": "sometimes",
    "meaning": "adv 有时;时而"
  },
  {
    "word": "somewhat",
    "meaning": "adv 稍微;有点"
  },
  {
    "word": "somewhere",
    "meaning": "adv 在某处"
  },
  {
    "word": "son",
    "meaning": "n 儿子"
  },
  {
    "word": "sonar",
    "meaning": "n 声纳;超声波"
  },
  {
    "word": "sonata",
    "meaning": "n 奏鸣曲"
  },
  {
    "word": "song",
    "meaning": "n 歌唱;歌曲"
  },
  {
    "word": "sonnet",
    "meaning": "n 十四行诗"
  },
  {
    "word": "soon",
    "meaning": "adv 很快;不久"
  },
  {
    "word": "sooner",
    "meaning": "adv 更早地;宁愿"
  },
  {
    "word": "soot",
    "meaning": "n 煤烟;烟灰"
  },
  {
    "word": "sophisticated",
    "meaning": "adj 老于世故的;复杂的"
  },
  {
    "word": "sophistication",
    "meaning": "n 诡辩;复杂"
  },
  {
    "word": "soporific",
    "meaning": "adj 催眠的 n.安眠药"
  },
  {
    "word": "sordid",
    "meaning": "adj 肮脏的;利欲熏心的"
  },
  {
    "word": "sore",
    "meaning": "adj 疼痛的 n.痛处"
  },
  {
    "word": "sorely",
    "meaning": "adv 非常;厉害地"
  },
  {
    "word": "sorghum",
    "meaning": "n 高粱"
  },
  {
    "word": "sorrow",
    "meaning": "n 悲伤;懊悔"
  },
  {
    "word": "sorry",
    "meaning": "adj 抱歉的;难过的"
  },
  {
    "word": "sort",
    "meaning": "n 种类 v.分类"
  },
  {
    "word": "sos",
    "meaning": "n 紧急求救信号"
  },
  {
    "word": "sottish",
    "meaning": "adj 酗酒的;精神不振的"
  },
  {
    "word": "sough",
    "meaning": "v /n.呻吟;悲叹"
  },
  {
    "word": "soul",
    "meaning": "n 灵魂;心灵"
  },
  {
    "word": "sound",
    "meaning": "adj 健康的 v.听起来"
  },
  {
    "word": "sounding",
    "meaning": "n 探针;声音"
  },
  {
    "word": "soup",
    "meaning": "n 汤"
  },
  {
    "word": "sour",
    "meaning": "adj 酸的;脾气坏的"
  },
  {
    "word": "source",
    "meaning": "n 来源;水源"
  },
  {
    "word": "sourness",
    "meaning": "n 酸味;痛苦"
  },
  {
    "word": "south",
    "meaning": "n 南方 adj.南的"
  },
  {
    "word": "southeast",
    "meaning": "n 东南 adv.在东南"
  },
  {
    "word": "southern",
    "meaning": "adj 南方的"
  },
  {
    "word": "southward",
    "meaning": "adv 向南方"
  },
  {
    "word": "souvenir",
    "meaning": "n 纪念品;纪念物"
  },
  {
    "word": "sovereign",
    "meaning": "adj 至高无上的 n.君主"
  },
  {
    "word": "sovereignty",
    "meaning": "n 主权;主权国家"
  },
  {
    "word": "soviet",
    "meaning": "n 苏维埃;苏联"
  },
  {
    "word": "sow",
    "meaning": "v 播种;散布"
  },
  {
    "word": "sown",
    "meaning": "v 播种;散布"
  },
  {
    "word": "soybean",
    "meaning": "n 大豆"
  },
  {
    "word": "spa",
    "meaning": "n 矿泉疗养地"
  },
  {
    "word": "space",
    "meaning": "n 空间;空白"
  },
  {
    "word": "spacecraft",
    "meaning": "n 宇宙飞船"
  },
  {
    "word": "spacing",
    "meaning": "n 间隔;间距"
  },
  {
    "word": "spacious",
    "meaning": "adj 宽敞的;广阔的"
  },
  {
    "word": "spade",
    "meaning": "n 铲子;铁锹"
  },
  {
    "word": "span",
    "meaning": "n 跨度;范围"
  },
  {
    "word": "sparrow",
    "meaning": "n 麻雀"
  },
  {
    "word": "sparse",
    "meaning": "adj 稀疏的;稀少的"
  },
  {
    "word": "spartan",
    "meaning": "adj 斯巴达的;简朴的"
  },
  {
    "word": "spasm",
    "meaning": "n 痉挛;抽筋"
  },
  {
    "word": "spasmodic",
    "meaning": "adj 痉挛的;间歇的"
  },
  {
    "word": "spat",
    "meaning": "v 吐痰;争吵"
  },
  {
    "word": "spatial",
    "meaning": "adj 空间的;有关空间的"
  },
  {
    "word": "spatter",
    "meaning": "v 溅污 n.溅污"
  },
  {
    "word": "spear",
    "meaning": "n 矛;枪"
  },
  {
    "word": "spec",
    "meaning": "n 试印;试验"
  },
  {
    "word": "special",
    "meaning": "adj 特别的 n.特派员"
  },
  {
    "word": "specialist",
    "meaning": "n 专家;专家"
  },
  {
    "word": "specialize",
    "meaning": "v 专门研究"
  },
  {
    "word": "specialty",
    "meaning": "n 专业;特色菜"
  },
  {
    "word": "specie",
    "meaning": "n 种类;硬币"
  },
  {
    "word": "species",
    "meaning": "n 种;物种"
  },
  {
    "word": "specific",
    "meaning": "adj 明确的 n.细节"
  },
  {
    "word": "specification",
    "meaning": "n 详述;规格"
  },
  {
    "word": "specify",
    "meaning": "v 指定;详述"
  },
  {
    "word": "specimen",
    "meaning": "n 样本;标本"
  },
  {
    "word": "speck",
    "meaning": "n 斑点;微粒"
  },
  {
    "word": "spectacle",
    "meaning": "n 奇观;眼镜"
  },
  {
    "word": "spectacular",
    "meaning": "adj 壮观的;引人入胜的"
  },
  {
    "word": "spectator",
    "meaning": "n 观众;旁观者"
  },
  {
    "word": "specter",
    "meaning": "n 幽灵;妖怪"
  },
  {
    "word": "spectral",
    "meaning": "adj 光谱的;鬼魂的"
  },
  {
    "word": "spectrum",
    "meaning": "n 光谱;范围"
  },
  {
    "word": "speculate",
    "meaning": "v 推测;投机"
  },
  {
    "word": "speculation",
    "meaning": "n 推测;投机"
  },
  {
    "word": "speech",
    "meaning": "n 演讲;讲话"
  },
  {
    "word": "speed",
    "meaning": "n 速度 v.加速"
  },
  {
    "word": "speedy",
    "meaning": "adj 快的;迅速的"
  },
  {
    "word": "spell",
    "meaning": "n 符咒 v.拼写"
  },
  {
    "word": "spelling",
    "meaning": "n 拼写"
  },
  {
    "word": "spend",
    "meaning": "v 花费;度过"
  },
  {
    "word": "sphere",
    "meaning": "n 球;领域"
  },
  {
    "word": "spherical",
    "meaning": "adj 球形的;球面的"
  },
  {
    "word": "spice",
    "meaning": "n 香料;调味品"
  },
  {
    "word": "spicy",
    "meaning": "adj 有香料的;加香料的"
  },
  {
    "word": "spider",
    "meaning": "n 蜘蛛"
  },
  {
    "word": "spike",
    "meaning": "n 长钉;钉鞋"
  },
  {
    "word": "spill",
    "meaning": "v 溢出;溅出"
  },
  {
    "word": "spin",
    "meaning": "v 旋转;纺纱"
  },
  {
    "word": "spine",
    "meaning": "n 脊柱;刺"
  },
  {
    "word": "spiral",
    "meaning": "adj 螺旋形的 n.螺旋"
  },
  {
    "word": "spirit",
    "meaning": "n 精神;烈酒"
  },
  {
    "word": "spiritual",
    "meaning": "adj 精神的;心灵的"
  },
  {
    "word": "spit",
    "meaning": "v 吐出 n.唾液"
  },
  {
    "word": "spite",
    "meaning": "n 恶意;怨恨"
  },
  {
    "word": "spiteful",
    "meaning": "adj 怀恨的;恶意的"
  },
  {
    "word": "splash",
    "meaning": "n 溅泼声 v.溅湿"
  },
  {
    "word": "splendid",
    "meaning": "adj 壮丽的;极好的"
  },
  {
    "word": "splendor",
    "meaning": "n 壮丽;光辉"
  },
  {
    "word": "splice",
    "meaning": "v 接合;嫁接"
  },
  {
    "word": "splinter",
    "meaning": "n 碎片;刺"
  },
  {
    "word": "split",
    "meaning": "v 劈开;分裂"
  },
  {
    "word": "spoil",
    "meaning": "v 破坏;溺爱"
  },
  {
    "word": "spoke",
    "meaning": "n 轮辐;辐条"
  },
  {
    "word": "spoken",
    "meaning": "adj 口语的"
  },
  {
    "word": "spokesman",
    "meaning": "n 代言人;发言人"
  },
  {
    "word": "sponge",
    "meaning": "n 海绵 v.擦拭"
  },
  {
    "word": "sponsor",
    "meaning": "n 赞助者 v.赞助"
  },
  {
    "word": "spontaneous",
    "meaning": "adj 自发的;本能的"
  },
  {
    "word": "spoon",
    "meaning": "n 匙;调羹"
  },
  {
    "word": "sport",
    "meaning": "n 运动;游戏"
  },
  {
    "word": "sporting",
    "meaning": "adj 运动的;爽快的"
  },
  {
    "word": "spot",
    "meaning": "n 地点;斑点 v.发现"
  },
  {
    "word": "spotted",
    "meaning": "adj 有斑点的;发现的"
  },
  {
    "word": "spotless",
    "meaning": "adj 无瑕疵的;清洁的"
  },
  {
    "word": "spouse",
    "meaning": "n 配偶 v.和...结婚"
  },
  {
    "word": "sprawl",
    "meaning": "v 伸开四肢坐卧"
  },
  {
    "word": "spray",
    "meaning": "n 喷雾;喷雾剂 v.喷射"
  },
  {
    "word": "spread",
    "meaning": "v 展开;传播 n.传播"
  },
  {
    "word": "spree",
    "meaning": "n 狂欢;泛滥"
  },
  {
    "word": "spring",
    "meaning": "n 春天;弹簧 v.跳起"
  },
  {
    "word": "sprinkle",
    "meaning": "v 洒;点缀"
  },
  {
    "word": "sprite",
    "meaning": "n 精灵;鬼魂"
  },
  {
    "word": "spur",
    "meaning": "n 刺激;马刺 v.刺激"
  },
  {
    "word": "spurious",
    "meaning": "adj 假的;伪造的"
  },
  {
    "word": "spurn",
    "meaning": "v 蔑视;拒绝"
  },
  {
    "word": "spurt",
    "meaning": "n 喷出;涌出 v.喷出"
  },
  {
    "word": "squabble",
    "meaning": "n 争吵;口角"
  },
  {
    "word": "squad",
    "meaning": "n 小队;班"
  },
  {
    "word": "squadron",
    "meaning": "n 中队"
  },
  {
    "word": "squalid",
    "meaning": "adj 肮脏的;令人不快的"
  },
  {
    "word": "squalor",
    "meaning": "n 污秽;肮脏"
  },
  {
    "word": "squander",
    "meaning": "v 浪费;挥霍"
  },
  {
    "word": "square",
    "meaning": "n 正方形;广场"
  },
  {
    "word": "squash",
    "meaning": "n 挤压;南瓜 v.压碎"
  },
  {
    "word": "squat",
    "meaning": "v 蹲下;蹲坐"
  },
  {
    "word": "squatter",
    "meaning": "n 擅自占地者;擅自占地者"
  },
  {
    "word": "squeak",
    "meaning": "v 吱吱响 n.吱吱声"
  },
  {
    "word": "squeaky",
    "meaning": "adj 吱吱响的;不稳定的"
  },
  {
    "word": "squeal",
    "meaning": "v 尖叫;告密"
  },
  {
    "word": "squeeze",
    "meaning": "n 挤压 v.压榨"
  },
  {
    "word": "squelch",
    "meaning": "v 压制;镇压"
  },
  {
    "word": "squint",
    "meaning": "v 眯着眼看 n.眯眼"
  },
  {
    "word": "squirrel",
    "meaning": "n 松鼠 v.贮藏"
  },
  {
    "word": "stab",
    "meaning": "v 刺;戳"
  },
  {
    "word": "stability",
    "meaning": "n 稳定;稳定性"
  },
  {
    "word": "stable",
    "meaning": "adj 稳定的 n.马厩"
  },
  {
    "word": "stack",
    "meaning": "n 堆;堆叠 v.堆积"
  },
  {
    "word": "stadium",
    "meaning": "n 体育场;运动场"
  },
  {
    "word": "staff",
    "meaning": "n 职员;棒"
  },
  {
    "word": "stag",
    "meaning": "n 雄鹿;停滞"
  },
  {
    "word": "stage",
    "meaning": "n 舞台;阶段"
  },
  {
    "word": "stagnant",
    "meaning": "adj 停滞的;不景气的"
  },
  {
    "word": "stain",
    "meaning": "n 污点 v.染色"
  },
  {
    "word": "stake",
    "meaning": "n 桩;赌注 v.打桩"
  },
  {
    "word": "stakeholder",
    "meaning": "n 利益相关者"
  },
  {
    "word": "stale",
    "meaning": "adj 不新鲜的;陈旧的"
  },
  {
    "word": "stalk",
    "meaning": "n 茎;高视阔步 v.潜行"
  },
  {
    "word": "stall",
    "meaning": "n 货摊 v.故意拖延"
  },
  {
    "word": "stamina",
    "meaning": "n 耐力;毅力"
  },
  {
    "word": "stamp",
    "meaning": "n 邮票;印记 v.盖章"
  },
  {
    "word": "stampede",
    "meaning": "n 奔跑;蜂拥"
  },
  {
    "word": "stance",
    "meaning": "n 立场;位置"
  },
  {
    "word": "stand",
    "meaning": "v 站立;经受 n.立场"
  },
  {
    "word": "standard",
    "meaning": "n 标准 adj.标准的"
  },
  {
    "word": "standpoint",
    "meaning": "n 立场;观点"
  },
  {
    "word": "staple",
    "meaning": "n 主要成分;钉书钉"
  },
  {
    "word": "star",
    "meaning": "n 星;明星 v.表演出色"
  },
  {
    "word": "starvation",
    "meaning": "n 饥饿;饿死"
  },
  {
    "word": "starve",
    "meaning": "v 饿死;渴望"
  },
  {
    "word": "stash",
    "meaning": "v 藏匿;塞满"
  },
  {
    "word": "state",
    "meaning": "n 状态 v.陈述"
  },
  {
    "word": "statement",
    "meaning": "n 声明;陈述"
  },
  {
    "word": "stateside",
    "meaning": "adv 在国内的"
  },
  {
    "word": "static",
    "meaning": "adj 静态的;不变的"
  },
  {
    "word": "station",
    "meaning": "n 站;驻地"
  },
  {
    "word": "stationery",
    "meaning": "n 信纸;文具"
  },
  {
    "word": "stationmaster",
    "meaning": "n 站长"
  },
  {
    "word": "statistic",
    "meaning": "n 统计;统计资料"
  },
  {
    "word": "statue",
    "meaning": "n 雕像;塑像"
  },
  {
    "word": "stature",
    "meaning": "n 身高;身材"
  },
  {
    "word": "status",
    "meaning": "n 地位;状态"
  },
  {
    "word": "statute",
    "meaning": "n 法令;法规"
  },
  {
    "word": "statutory",
    "meaning": "adj 法定的;法令的"
  },
  {
    "word": "stay",
    "meaning": "v 停留;坚持 n.逗留"
  },
  {
    "word": "stead",
    "meaning": "n 代替人;立场"
  },
  {
    "word": "steadfast",
    "meaning": "adj 坚定的;忠实的"
  },
  {
    "word": "steady",
    "meaning": "adj 稳定的 v.使稳定"
  },
  {
    "word": "steak",
    "meaning": "n 牛排;肉排"
  },
  {
    "word": "steal",
    "meaning": "v 偷;窃取"
  },
  {
    "word": "stealth",
    "meaning": "n 秘密;潜行"
  },
  {
    "word": "stealthy",
    "meaning": "adj 秘密的;鬼鬼祟祟的"
  },
  {
    "word": "steam",
    "meaning": "n 蒸汽 v.蒸煮"
  },
  {
    "word": "steamer",
    "meaning": "n 蒸汽机;轮船"
  },
  {
    "word": "steel",
    "meaning": "n 钢;钢铁"
  },
  {
    "word": "steep",
    "meaning": "adj 陡峭的 v.浸泡"
  },
  {
    "word": "steeple",
    "meaning": "n 尖塔;塔楼"
  },
  {
    "word": "steer",
    "meaning": "v 驾驶;控制"
  },
  {
    "word": "stellar",
    "meaning": "adj 星的;星星的"
  },
  {
    "word": "stem",
    "meaning": "n 茎;词干 v.起源于"
  },
  {
    "word": "stencil",
    "meaning": "n 蜡纸;模版 v.用蜡纸印刷"
  },
  {
    "word": "stenographer",
    "meaning": "n 速记员;打字员"
  },
  {
    "word": "step",
    "meaning": "n 步;步骤 v.行走"
  },
  {
    "word": "steppe",
    "meaning": "n 草原;干草原"
  },
  {
    "word": "sterile",
    "meaning": "adj 不育的;无菌的"
  },
  {
    "word": "sterility",
    "meaning": "n 不育;不育症"
  },
  {
    "word": "sterilize",
    "meaning": "v 使不育;消毒"
  },
  {
    "word": "stern",
    "meaning": "adj 严厉的;坚决的"
  },
  {
    "word": "sternum",
    "meaning": "n 胸骨;胸膛"
  },
  {
    "word": "stethoscope",
    "meaning": "n 听诊器"
  },
  {
    "word": "stew",
    "meaning": "n 炖肉;困境 v.炖"
  },
  {
    "word": "steward",
    "meaning": "n 乘务员;看管人"
  },
  {
    "word": "stewardess",
    "meaning": "n 女乘务员;空姐"
  },
  {
    "word": "stick",
    "meaning": "n 棍;棒 v.粘贴"
  },
  {
    "word": "stickler",
    "meaning": "n 坚持细节者;顽固者"
  },
  {
    "word": "sticky",
    "meaning": "adj 粘的;粘性的"
  },
  {
    "word": "stiff",
    "meaning": "adj 硬的;僵硬的"
  },
  {
    "word": "stiffen",
    "meaning": "v 变硬;变僵"
  },
  {
    "word": "stifle",
    "meaning": "v 窒息;扼杀"
  },
  {
    "word": "stifling",
    "meaning": "adj 令人窒息的"
  },
  {
    "word": "stigma",
    "meaning": "n 耻辱;污名"
  },
  {
    "word": "stigmatize",
    "meaning": "v 污名化;标记"
  },
  {
    "word": "still",
    "meaning": "adj 静止的 adv.仍然"
  },
  {
    "word": "stillness",
    "meaning": "n 静止;寂静"
  },
  {
    "word": "stilt",
    "meaning": "n 高跷;支柱"
  },
  {
    "word": "stimulant",
    "meaning": "n 刺激物;兴奋剂"
  },
  {
    "word": "stimulate",
    "meaning": "v 刺激;激励"
  },
  {
    "word": "stimulating",
    "meaning": "adj 令人兴奋的"
  },
  {
    "word": "stimulation",
    "meaning": "n 刺激;激励"
  },
  {
    "word": "stimulus",
    "meaning": "n 刺激;激励因素"
  },
  {
    "word": "sting",
    "meaning": "n 刺;刺痛 v.刺"
  },
  {
    "word": "stinging",
    "meaning": "adj 刺骨的;尖锐的"
  },
  {
    "word": "stingy",
    "meaning": "adj 吝啬的;小气的"
  },
  {
    "word": "stink",
    "meaning": "v 发臭;令人厌恶"
  },
  {
    "word": "stint",
    "meaning": "n 份额;阶段"
  },
  {
    "word": "stipend",
    "meaning": "n 津贴;奖学金"
  },
  {
    "word": "stipulate",
    "meaning": "v 规定;要求"
  },
  {
    "word": "stipulation",
    "meaning": "n 规定;要求"
  },
  {
    "word": "stir",
    "meaning": "v 搅拌;激发"
  },
  {
    "word": "stirring",
    "meaning": "adj 激动人心的;动人的"
  },
  {
    "word": "stitch",
    "meaning": "n 一针;缝线 v.缝合"
  },
  {
    "word": "stock",
    "meaning": "n 存货;股票"
  },
  {
    "word": "stockade",
    "meaning": "n 栅栏;围栏"
  },
  {
    "word": "stockbroker",
    "meaning": "n 股票经纪人"
  },
  {
    "word": "stockholder",
    "meaning": "n 股东"
  },
  {
    "word": "stockpile",
    "meaning": "n 囤积;库存"
  },
  {
    "word": "stocky",
    "meaning": "adj 矮胖的;健壮的"
  },
  {
    "word": "stodgy",
    "meaning": "adj 笨重的;缺乏想象力的"
  },
  {
    "word": "stoic",
    "meaning": "n 斯多葛;坚忍的人"
  },
  {
    "word": "stoical",
    "meaning": "adj 无感情的;坚忍的"
  },
  {
    "word": "stoke",
    "meaning": "v 添煤;激发"
  },
  {
    "word": "stolen",
    "meaning": "adj 偷来的;窃取的"
  },
  {
    "word": "stomach",
    "meaning": "n 胃;腹部"
  },
  {
    "word": "stone",
    "meaning": "n 石头;果实核"
  },
  {
    "word": "stoneware",
    "meaning": "n 石器;炻器"
  },
  {
    "word": "stony",
    "meaning": "adj 石头的;无情的"
  },
  {
    "word": "stoop",
    "meaning": "v 弯腰;屈服"
  },
  {
    "word": "stop",
    "meaning": "v 停止;堵塞"
  },
  {
    "word": "stoppage",
    "meaning": "n 停止;阻塞"
  },
  {
    "word": "storage",
    "meaning": "n 存储;仓库"
  },
  {
    "word": "store",
    "meaning": "n 商店 v.存储"
  },
  {
    "word": "storehouse",
    "meaning": "n 仓库;货仓"
  },
  {
    "word": "storey",
    "meaning": "n 层;楼层"
  },
  {
    "word": "storm",
    "meaning": "n 暴风雨 v.袭击"
  },
  {
    "word": "stormy",
    "meaning": "adj 暴风雨的;激烈的"
  },
  {
    "word": "story",
    "meaning": "n 故事;传说"
  },
  {
    "word": "stout",
    "meaning": "adj 肥胖的;勇敢的"
  },
  {
    "word": "stove",
    "meaning": "n 火炉;炉子"
  },
  {
    "word": "stow",
    "meaning": "v 贮藏;装载"
  },
  {
    "word": "straddle",
    "meaning": "v 跨坐;跨越"
  },
  {
    "word": "straggle",
    "meaning": "v 挣扎;散漫地走"
  },
  {
    "word": "straight",
    "meaning": "adj 直的 adv.直地"
  },
  {
    "word": "straightforward",
    "meaning": "adj 直接的;简单的"
  },
  {
    "word": "strain",
    "meaning": "n 紧张 v.拉紧"
  },
  {
    "word": "strained",
    "meaning": "adj 紧张的;不自然的"
  },
  {
    "word": "strait",
    "meaning": "n 海峡;困境"
  },
  {
    "word": "strand",
    "meaning": "n 线;串 v.使滞留"
  },
  {
    "word": "strange",
    "meaning": "adj 陌生的;奇怪的"
  },
  {
    "word": "stranger",
    "meaning": "n 陌生人;新来者"
  },
  {
    "word": "strangle",
    "meaning": "v 勒死;压制"
  },
  {
    "word": "strangulation",
    "meaning": "n 勒死;扼杀"
  },
  {
    "word": "strap",
    "meaning": "n 带子 v.用带子系紧"
  },
  {
    "word": "strata",
    "meaning": "n 地层;阶层"
  },
  {
    "word": "strategic",
    "meaning": "adj 战略的;重要的"
  },
  {
    "word": "strategist",
    "meaning": "n 战略家;策划者"
  },
  {
    "word": "strategy",
    "meaning": "n 战略;策略"
  },
  {
    "word": "straw",
    "meaning": "n 稻草;吸管"
  },
  {
    "word": "stray",
    "meaning": "v 迷路;偏离"
  },
  {
    "word": "streak",
    "meaning": "n 条纹;线条 v.加条纹"
  },
  {
    "word": "stream",
    "meaning": "n 溪流 v.流动"
  },
  {
    "word": "streamline",
    "meaning": "v 使成流线型"
  },
  {
    "word": "street",
    "meaning": "n 街道;马路"
  },
  {
    "word": "strength",
    "meaning": "n 力量;强度"
  },
  {
    "word": "strengthen",
    "meaning": "v 加强;巩固"
  },
  {
    "word": "strenuous",
    "meaning": "adj 费力的;奋发的"
  },
  {
    "word": "stress",
    "meaning": "n 压力 v.强调"
  },
  {
    "word": "stressful",
    "meaning": "adj 紧张的;压力重的"
  },
  {
    "word": "stretch",
    "meaning": "v 伸展 n.伸展"
  },
  {
    "word": "strewn",
    "meaning": "adj 散布的;分散的"
  },
  {
    "word": "stricken",
    "meaning": "adj 受困的;受打击的"
  },
  {
    "word": "strict",
    "meaning": "adj 严格的;绝对的"
  },
  {
    "word": "strictly",
    "meaning": "adv 严格地;绝对地"
  },
  {
    "word": "stride",
    "meaning": "v 大步走 n.大步"
  },
  {
    "word": "strife",
    "meaning": "n 冲突;竞争"
  },
  {
    "word": "strike",
    "meaning": "v 打;罢工"
  },
  {
    "word": "striking",
    "meaning": "adj 引人注目的;显著的"
  },
  {
    "word": "string",
    "meaning": "n 线;一串 v.系"
  },
  {
    "word": "strip",
    "meaning": "n 条;带 v.剥去"
  },
  {
    "word": "stripe",
    "meaning": "n 条纹;条纹 v.加条纹"
  },
  {
    "word": "striped",
    "meaning": "adj 有条纹的;有斑纹的"
  },
  {
    "word": "strive",
    "meaning": "v 努力;奋斗"
  },
  {
    "word": "stroke",
    "meaning": "n 打;中风"
  },
  {
    "word": "stroll",
    "meaning": "v 闲逛 n.闲逛"
  },
  {
    "word": "strong",
    "meaning": "adj 强壮的;强的"
  },
  {
    "word": "stronghold",
    "meaning": "n 要塞;据点"
  },
  {
    "word": "structural",
    "meaning": "adj 结构的;建筑的"
  },
  {
    "word": "structure",
    "meaning": "n 结构;建筑物"
  },
  {
    "word": "struggle",
    "meaning": "n 斗争 v.斗争"
  },
  {
    "word": "strut",
    "meaning": "v 昂首阔步 n.支柱"
  },
  {
    "word": "stubborn",
    "meaning": "adj 顽固的;固执的"
  },
  {
    "word": "stubbornly",
    "meaning": "adv 顽固地;固执地"
  },
  {
    "word": "stubbornness",
    "meaning": "n 顽固;固执"
  },
  {
    "word": "stucco",
    "meaning": "n 灰泥;泥浆"
  },
  {
    "word": "stuck",
    "meaning": "adj 被卡住的;被粘住的"
  },
  {
    "word": "stud",
    "meaning": "n 种马;饰钉"
  },
  {
    "word": "studded",
    "meaning": "adj 有饰钉的;散布的"
  },
  {
    "word": "student",
    "meaning": "n 学生;学者"
  },
  {
    "word": "studio",
    "meaning": "n 工作室;摄影室"
  },
  {
    "word": "study",
    "meaning": "n 学习 v.学习"
  },
  {
    "word": "stuff",
    "meaning": "n 材料;东西 v.填满"
  },
  {
    "word": "stuffy",
    "meaning": "adj 闷热的;古板的"
  },
  {
    "word": "stumble",
    "meaning": "v 绊倒;结巴"
  },
  {
    "word": "stump",
    "meaning": "n 树桩;残余 v.砍伐"
  },
  {
    "word": "stun",
    "meaning": "v 使昏迷;打昏"
  },
  {
    "word": "stunning",
    "meaning": "adj 令人晕倒的;极好的"
  },
  {
    "word": "stunt",
    "meaning": "n 特技;噱头 v.表演特技"
  },
  {
    "word": "stupefy",
    "meaning": "v 使惊呆;使茫然"
  },
  {
    "word": "stupendous",
    "meaning": "adj 巨大的;惊人的"
  },
  {
    "word": "stupid",
    "meaning": "adj 愚蠢的;感觉迟钝的"
  },
  {
    "word": "stupidity",
    "meaning": "n 愚蠢;愚昧"
  },
  {
    "word": "stupor",
    "meaning": "n 昏迷;昏迷状态"
  },
  {
    "word": "sturdy",
    "meaning": "adj 结实的;健康的"
  },
  {
    "word": "stutter",
    "meaning": "v 口吃 n.口吃"
  },
  {
    "word": "sty",
    "meaning": "n 猪圈;猪舍"
  },
  {
    "word": "style",
    "meaning": "n 风格;样式"
  },
  {
    "word": "stylish",
    "meaning": "adj 时髦的;潇洒的"
  },
  {
    "word": "stylist",
    "meaning": "n 美学家;文体家"
  },
  {
    "word": "stylized",
    "meaning": "adj 风格化的;程式化的"
  },
  {
    "word": "suave",
    "meaning": "adj 温文尔雅的;圆滑的"
  },
  {
    "word": "subdivide",
    "meaning": "v 再分;细分"
  },
  {
    "word": "subdue",
    "meaning": "v 征服;减弱"
  },
  {
    "word": "subdued",
    "meaning": "adj 被抑制的;柔和的"
  },
  {
    "word": "subdue",
    "meaning": "v 征服;减弱"
  },
  {
    "word": "subject",
    "meaning": "n 主题 adj.服从的"
  },
  {
    "word": "subjective",
    "meaning": "adj 主观的;个人的"
  },
  {
    "word": "subjugate",
    "meaning": "v 征服;镇压"
  },
  {
    "word": "subjunctive",
    "meaning": "n 虚拟语气 adj.虚拟的"
  },
  {
    "word": "sublimate",
    "meaning": "v 升华;提炼"
  },
  {
    "word": "sublime",
    "meaning": "adj 崇高的;极好的"
  },
  {
    "word": "submarine",
    "meaning": "adj 海下的 n.潜水艇"
  },
  {
    "word": "submerge",
    "meaning": "v 浸没;淹没"
  },
  {
    "word": "submerged",
    "meaning": "adj 潜水的;淹没的"
  },
  {
    "word": "submission",
    "meaning": "n 服从;提交"
  },
  {
    "word": "submissive",
    "meaning": "adj 服从的;顺从的"
  },
  {
    "word": "submit",
    "meaning": "v 提交;服从"
  },
  {
    "word": "subordinate",
    "meaning": "adj 从属的 n.部属"
  },
  {
    "word": "subpoena",
    "meaning": "n 传票 v.传讯"
  },
  {
    "word": "subscribe",
    "meaning": "v 订阅;捐助"
  },
  {
    "word": "subscriber",
    "meaning": "n 订阅者;捐助者"
  },
  {
    "word": "subscription",
    "meaning": "n 订阅;捐助"
  },
  {
    "word": "subsequent",
    "meaning": "adj 随后的;后来的"
  },
  {
    "word": "subsidiary",
    "meaning": "adj 辅助的;次要的"
  },
  {
    "word": "subsidy",
    "meaning": "n 补助金;津贴"
  },
  {
    "word": "subsist",
    "meaning": "v 存在;维持生活"
  },
  {
    "word": "subsistence",
    "meaning": "n 生存;生活"
  },
  {
    "word": "subsoil",
    "meaning": "n 底土;下层土壤"
  },
  {
    "word": "substance",
    "meaning": "n 物质;实质"
  },
  {
    "word": "substantial",
    "meaning": "adj 大量的;实质的"
  },
  {
    "word": "substantiate",
    "meaning": "v 证实;确定"
  },
  {
    "word": "substantive",
    "meaning": "adj 实质的;有实质的"
  },
  {
    "word": "substitute",
    "meaning": "n 代替者 v.代替"
  },
  {
    "word": "substitution",
    "meaning": "n 代替;替换"
  },
  {
    "word": "subterranean",
    "meaning": "adj 地下的;秘密的"
  },
  {
    "word": "subtitle",
    "meaning": "n 副标题;字幕"
  },
  {
    "word": "subtle",
    "meaning": "adj 微妙的;敏感的"
  },
  {
    "word": "subtract",
    "meaning": "v 减去;减法"
  },
  {
    "word": "suburb",
    "meaning": "n 郊区;城外"
  },
  {
    "word": "suburban",
    "meaning": "adj 郊区的;田园的"
  },
  {
    "word": "suburbia",
    "meaning": "n 郊区;郊区生活"
  },
  {
    "word": "subversive",
    "meaning": "adj 颠覆性的;破坏性的"
  },
  {
    "word": "subvert",
    "meaning": "v 颠覆;推翻"
  },
  {
    "word": "subway",
    "meaning": "n 地铁;地道"
  },
  {
    "word": "succeed",
    "meaning": "v 成功;继承"
  },
  {
    "word": "success",
    "meaning": "n 成功;成就"
  },
  {
    "word": "successful",
    "meaning": "adj 成功的;有成效的"
  },
  {
    "word": "succession",
    "meaning": "n 连续;继承"
  },
  {
    "word": "successive",
    "meaning": "adj 连续的;继承的"
  },
  {
    "word": "successor",
    "meaning": "n 继承人;后继者"
  },
  {
    "word": "succinct",
    "meaning": "adj 简洁的;简明的"
  },
  {
    "word": "succumb",
    "meaning": "v 屈服;死亡"
  },
  {
    "word": "such",
    "meaning": "adj 这样的;这样的"
  },
  {
    "word": "suchlike",
    "meaning": "adj 这样的;这种类型的"
  },
  {
    "word": "suck",
    "meaning": "v 吸吮;吸取"
  },
  {
    "word": "sucker",
    "meaning": "n 吸盘;易受骗的人"
  },
  {
    "word": "sudden",
    "meaning": "adj 突然的;意外的"
  },
  {
    "word": "suddenly",
    "meaning": "adv 突然地"
  },
  {
    "word": "sue",
    "meaning": "v 控告;提出请求"
  },
  {
    "word": "suffer",
    "meaning": "v 受苦;遭受"
  },
  {
    "word": "sufferance",
    "meaning": "n 忍受;容忍"
  },
  {
    "word": "suffering",
    "meaning": "n 痛苦;苦难"
  },
  {
    "word": "suffice",
    "meaning": "v 足够;胜任"
  },
  {
    "word": "sufficient",
    "meaning": "adj 足够的;充分的"
  },
  {
    "word": "sufficiently",
    "meaning": "adv 足够地;充分地"
  },
  {
    "word": "suffix",
    "meaning": "n 后缀;后缀词"
  },
  {
    "word": "suffocate",
    "meaning": "v 窒息;闷死"
  },
  {
    "word": "suffrage",
    "meaning": "n 选举权;投票"
  },
  {
    "word": "suffragist",
    "meaning": "n 争取参政权者"
  },
  {
    "word": "sugar",
    "meaning": "n 糖;食糖"
  },
  {
    "word": "suggest",
    "meaning": "v 建议;暗示"
  },
  {
    "word": "suggestion",
    "meaning": "n 建议;暗示"
  },
  {
    "word": "suggestive",
    "meaning": "adj 暗示的;提示的"
  },
  {
    "word": "suicidal",
    "meaning": "adj 自杀的;导致自杀的"
  },
  {
    "word": "suicide",
    "meaning": "n 自杀;自杀行为"
  },
  {
    "word": "suit",
    "meaning": "n 套装 v.适合"
  },
  {
    "word": "suitable",
    "meaning": "adj 合适的;适宜的"
  },
  {
    "word": "suitcase",
    "meaning": "n 手提箱;衣箱"
  },
  {
    "word": "suite",
    "meaning": "n 套房;套间"
  },
  {
    "word": "suitor",
    "meaning": "n 求婚者;原告"
  },
  {
    "word": "sulfur",
    "meaning": "n 硫;硫磺"
  },
  {
    "word": "sulk",
    "meaning": "v 生气;愠怒"
  },
  {
    "word": "sullen",
    "meaning": "adj 闷闷不乐的;阴沉的"
  },
  {
    "word": "sully",
    "meaning": "v 玷污;诽谤"
  },
  {
    "word": "sulphur",
    "meaning": "n 硫磺;硫磺（英式拼写）"
  },
  {
    "word": "sum",
    "meaning": "n 总和 v.总结"
  },
  {
    "word": "summarize",
    "meaning": "v 概括;总结"
  },
  {
    "word": "summary",
    "meaning": "n 摘要;概要"
  },
  {
    "word": "summer",
    "meaning": "n 夏天;夏季"
  },
  {
    "word": "summit",
    "meaning": "n 顶点;最高级会议"
  },
  {
    "word": "summon",
    "meaning": "v 召唤;召集"
  },
  {
    "word": "summons",
    "meaning": "n 传票;召集"
  },
  {
    "word": "sun",
    "meaning": "n 太阳;阳光"
  },
  {
    "word": "sunburn",
    "meaning": "n 晒伤 v.晒伤"
  },
  {
    "word": "sunder",
    "meaning": "n 断裂;分裂 v.使分离"
  },
  {
    "word": "sundry",
    "meaning": "adj 各种的;若干"
  },
  {
    "word": "sunk",
    "meaning": "adj 沉没的;被沉没的"
  },
  {
    "word": "sunken",
    "meaning": "adj 沉没的;塌陷的"
  },
  {
    "word": "sunlight",
    "meaning": "n 日光;阳光"
  },
  {
    "word": "sunny",
    "meaning": "adj 阳光的;晴朗的"
  },
  {
    "word": "sunrise",
    "meaning": "n 日出;黎明"
  },
  {
    "word": "sunset",
    "meaning": "n 日落;傍晚"
  },
  {
    "word": "sunshine",
    "meaning": "n 阳光"
  },
  {
    "word": "super",
    "meaning": "adj 超级的;极好的"
  },
  {
    "word": "superannuate",
    "meaning": "v 使过时"
  },
  {
    "word": "superb",
    "meaning": "adj 高级的;极好的"
  },
  {
    "word": "superficial",
    "meaning": "adj 表面的;肤浅的"
  },
  {
    "word": "superfluous",
    "meaning": "adj 多余的;不必要的"
  },
  {
    "word": "superintendent",
    "meaning": "n 监督者;主管"
  },
  {
    "word": "superior",
    "meaning": "adj 上级的 n.上级"
  },
  {
    "word": "superiority",
    "meaning": "n 优越;优越感"
  },
  {
    "word": "superlative",
    "meaning": "adj 最高级的;最佳的"
  },
  {
    "word": "supernatural",
    "meaning": "adj 超自然的"
  },
  {
    "word": "superscript",
    "meaning": "n 上标;上标号"
  },
  {
    "word": "supersonic",
    "meaning": "adj 超音速的"
  },
  {
    "word": "superstition",
    "meaning": "n 迷信;迷信行为"
  },
  {
    "word": "superstitious",
    "meaning": "adj 超级的;迷信的"
  },
  {
    "word": "supervise",
    "meaning": "v 监督;管理"
  },
  {
    "word": "supervision",
    "meaning": "n 监督;管理"
  },
  {
    "word": "supervisor",
    "meaning": "n 监督者;监工"
  },
  {
    "word": "supper",
    "meaning": "n 晚餐;晚饭"
  },
  {
    "word": "supplant",
    "meaning": "v 排挤;取代"
  },
  {
    "word": "supple",
    "meaning": "adj 柔软的;灵活的"
  },
  {
    "word": "supplement",
    "meaning": "n 补遗;补充"
  },
  {
    "word": "supplementary",
    "meaning": "adj 补遗的;补充的"
  },
  {
    "word": "suppliant",
    "meaning": "adj 恳求的;哀求的"
  },
  {
    "word": "supplicant",
    "meaning": "n 恳求者;请求者"
  },
  {
    "word": "supplicate",
    "meaning": "v 恳求;祈求"
  },
  {
    "word": "supplication",
    "meaning": "n 恳求;祈求"
  },
  {
    "word": "supplier",
    "meaning": "n 供应者;供应厂商"
  },
  {
    "word": "supplies",
    "meaning": "n 供应品;补给品"
  },
  {
    "word": "supply",
    "meaning": "n 供应 v.供给"
  },
  {
    "word": "support",
    "meaning": "n 支持 v.支持"
  },
  {
    "word": "supporter",
    "meaning": "n 支持者;支撑者"
  },
  {
    "word": "supportive",
    "meaning": "adj 支持的;支持性的"
  },
  {
    "word": "suppose",
    "meaning": "v 假设;认为"
  },
  {
    "word": "supposed",
    "meaning": "adj 假定的;被认为的"
  },
  {
    "word": "supposition",
    "meaning": "n 假设;前提"
  },
  {
    "word": "suppress",
    "meaning": "v 镇压;压制"
  },
  {
    "word": "suppression",
    "meaning": "n 镇压;压制"
  },
  {
    "word": "supremacy",
    "meaning": "n 至高无上;霸权"
  },
  {
    "word": "supreme",
    "meaning": "adj 至高的;最高的"
  },
  {
    "word": "surcharge",
    "meaning": "n 附加费;额外收费"
  },
  {
    "word": "sure",
    "meaning": "adj 确信的;可靠的"
  },
  {
    "word": "surely",
    "meaning": "adv 无疑地;一定"
  },
  {
    "word": "surf",
    "meaning": "n 冲浪 v.冲浪"
  },
  {
    "word": "surface",
    "meaning": "n 表面;表层"
  },
  {
    "word": "surge",
    "meaning": "n 浪涌;激增 v.涌上"
  },
  {
    "word": "surgeon",
    "meaning": "n 外科医生;军医"
  },
  {
    "word": "surgery",
    "meaning": "n 外科;外科手术"
  },
  {
    "word": "surly",
    "meaning": "adj 粗暴的;脾气坏的"
  },
  {
    "word": "surmise",
    "meaning": "v 猜测;推测"
  },
  {
    "word": "surmount",
    "meaning": "v 克服;战胜"
  },
  {
    "word": "surname",
    "meaning": "n 姓;姓氏"
  },
  {
    "word": "surpass",
    "meaning": "v 超过;超越"
  },
  {
    "word": "surplus",
    "meaning": "n 过剩;剩余"
  },
  {
    "word": "surprise",
    "meaning": "n 惊奇 v.使惊奇"
  },
  {
    "word": "surprised",
    "meaning": "adj 感到惊讶的"
  },
  {
    "word": "surprising",
    "meaning": "adj 令人惊讶的"
  },
  {
    "word": "surprisingly",
    "meaning": "adv 令人惊讶地"
  },
  {
    "word": "surrender",
    "meaning": "v 投降;交出"
  },
  {
    "word": "surrender",
    "meaning": "n 投降;交出"
  },
  {
    "word": "surrogate",
    "meaning": "n 代理人;代替者"
  },
  {
    "word": "surround",
    "meaning": "v 围绕;环绕"
  },
  {
    "word": "surrounding",
    "meaning": "adj 周围的;附近的"
  },
  {
    "word": "surroundings",
    "meaning": "n 环境;周围的事物"
  },
  {
    "word": "surveillance",
    "meaning": "n 监视;监控"
  },
  {
    "word": "survey",
    "meaning": "n 调查;测量 v.调查"
  },
  {
    "word": "survive",
    "meaning": "v 生存;幸免于难"
  },
  {
    "word": "survival",
    "meaning": "n 生存;幸存"
  },
  {
    "word": "survivor",
    "meaning": "n 幸存者;生还者"
  },
  {
    "word": "susceptibility",
    "meaning": "n 易受影响;敏感性"
  },
  {
    "word": "susceptible",
    "meaning": "adj 易受影响的;敏感的"
  },
  {
    "word": "suspect",
    "meaning": "v 怀疑;不信任"
  },
  {
    "word": "suspend",
    "meaning": "v 暂停;悬挂"
  },
  {
    "word": "suspender",
    "meaning": "n 吊索;吊带"
  },
  {
    "word": "suspense",
    "meaning": "n 悬念;怀疑"
  },
  {
    "word": "suspension",
    "meaning": "n 暂停;悬挂"
  },
  {
    "word": "suspicion",
    "meaning": "n 怀疑;嫌疑"
  },
  {
    "word": "suspicious",
    "meaning": "adj 怀疑的;可疑的"
  },
  {
    "word": "sustain",
    "meaning": "v 支撑;维持"
  },
  {
    "word": "sustained",
    "meaning": "adj 持久的;持续的"
  },
  {
    "word": "sustenance",
    "meaning": "n 维持;食物"
  },
  {
    "word": "swab",
    "meaning": "n 拖把;药棉球 v.擦洗"
  },
  {
    "word": "swag",
    "meaning": "n 赃物;赃物"
  },
  {
    "word": "swagger",
    "meaning": "v 夸耀;大摇大摆地走"
  },
  {
    "word": "swallow",
    "meaning": "n 燕子 v.吞下"
  },
  {
    "word": "swamp",
    "meaning": "n 沼泽;湿地 v.淹没"
  },
  {
    "word": "swampy",
    "meaning": "adj 沼泽的;湿地的"
  },
  {
    "word": "swan",
    "meaning": "n 天鹅 v.闲逛"
  },
  {
    "word": "swap",
    "meaning": "v 交换;交换"
  },
  {
    "word": "swarm",
    "meaning": "n 一群;一大群 v.蜂拥"
  },
  {
    "word": "sway",
    "meaning": "n 摇摆;摇动"
  },
  {
    "word": "swear",
    "meaning": "v 宣誓;咒骂"
  },
  {
    "word": "sweat",
    "meaning": "n 汗 v.出汗"
  },
  {
    "word": "sweater",
    "meaning": "n 毛线衣;运动衫"
  },
  {
    "word": "sweaty",
    "meaning": "adj 出汗的;导致出汗的"
  },
  {
    "word": "sweep",
    "meaning": "v 扫;席卷"
  },
  {
    "word": "sweet",
    "meaning": "adj 甜的 n.糖果"
  },
  {
    "word": "swell",
    "meaning": "v 肿胀;膨胀"
  },
  {
    "word": "swelling",
    "meaning": "n 肿胀;增大"
  },
  {
    "word": "swerve",
    "meaning": "v 转向;突然改变"
  },
  {
    "word": "swift",
    "meaning": "adj 快的;迅速的"
  },
  {
    "word": "swim",
    "meaning": "v 游泳 n.游泳"
  },
  {
    "word": "swimming",
    "meaning": "n 游泳;游泳"
  },
  {
    "word": "swindle",
    "meaning": "v 诈骗;骗取"
  },
  {
    "word": "swipe",
    "meaning": "v 擦;刷"
  },
  {
    "word": "swirl",
    "meaning": "n 漩涡;螺旋形 v.旋转"
  },
  {
    "word": "swish",
    "meaning": "v 挥动;发嗖嗖声"
  },
  {
    "word": "switch",
    "meaning": "n 开关 v.转换"
  },
  {
    "word": "swivel",
    "meaning": "n 转椅;旋转"
  },
  {
    "word": "sword",
    "meaning": "n 剑;刀"
  },
  {
    "word": "swore",
    "meaning": "v 宣誓;保证"
  },
  {
    "word": "sworn",
    "meaning": "adj 宣誓的;发誓的"
  },
  {
    "word": "swung",
    "meaning": "v 摇摆;悬挂"
  },
  {
    "word": "syllabus",
    "meaning": "n 教学大纲;纲要"
  },
  {
    "word": "symbol",
    "meaning": "n 符号;象征"
  },
  {
    "word": "symbolic",
    "meaning": "adj 符号的;象征的"
  },
  {
    "word": "symbolize",
    "meaning": "v 象征;代表"
  },
  {
    "word": "symmetric",
    "meaning": "adj 对称的;均齐的"
  },
  {
    "word": "symmetry",
    "meaning": "n 对称;均衡"
  },
  {
    "word": "sympathetic",
    "meaning": "adj 同情的;共鸣的"
  },
  {
    "word": "sympathize",
    "meaning": "v 同情;共鸣"
  },
  {
    "word": "sympathy",
    "meaning": "n 同情;共鸣"
  },
  {
    "word": "symphony",
    "meaning": "n 交响乐;和谐"
  },
  {
    "word": "symptom",
    "meaning": "n 症状;征候"
  },
  {
    "word": "synchronize",
    "meaning": "v 同步;合拍"
  },
  {
    "word": "synchronous",
    "meaning": "adj 同步的;同时发生的"
  },
  {
    "word": "syndrome",
    "meaning": "n 综合症状;并发症"
  },
  {
    "word": "synthesis",
    "meaning": "n 合成;综合"
  },
  {
    "word": "synthetic",
    "meaning": "adj 合成的;人造的"
  },
  {
    "word": "syringe",
    "meaning": "n 注射器;洗胃器"
  },
  {
    "word": "system",
    "meaning": "n 系统;体系"
  },
  {
    "word": "systematic",
    "meaning": "adj 系统的;有计划的"
  },
  {
    "word": "tab",
    "meaning": "n 标签;制表"
  },
  {
    "word": "table",
    "meaning": "n 桌子;表格"
  },
  {
    "word": "tableau",
    "meaning": "n 活人画;场景"
  },
  {
    "word": "tabloid",
    "meaning": "n 药片;小报"
  },
  {
    "word": "taboo",
    "meaning": "adj 忌讳的 n.禁忌"
  },
  {
    "word": "tabular",
    "meaning": "adj 桌子的;表格的"
  },
  {
    "word": "tacit",
    "meaning": "adj 默契的;心照不宣的"
  },
  {
    "word": "tacitness",
    "meaning": "n 默契;默许"
  },
  {
    "word": "tack",
    "meaning": "n 大头钉;方针"
  },
  {
    "word": "tackle",
    "meaning": "v 对付;处理"
  },
  {
    "word": "tact",
    "meaning": "n 机智;圆滑"
  },
  {
    "word": "tactic",
    "meaning": "n 策略;战术"
  },
  {
    "word": "tactical",
    "meaning": "adj 战术的;策略的"
  },
  {
    "word": "tactics",
    "meaning": "n 战术;策略"
  },
  {
    "word": "tactile",
    "meaning": "adj 触觉的;有感觉的"
  },
  {
    "word": "tad",
    "meaning": "n 一点儿;少量"
  },
  {
    "word": "taint",
    "meaning": "n 污点;玷污 v.玷污"
  },
  {
    "word": "take",
    "meaning": "v 拿;取"
  },
  {
    "word": "takeover",
    "meaning": "n 接管;接收"
  },
  {
    "word": "talent",
    "meaning": "n 才能;天资"
  },
  {
    "word": "talented",
    "meaning": "adj 有才能的;有才华的"
  },
  {
    "word": "talk",
    "meaning": "n 谈话 v.谈话"
  },
  {
    "word": "talkative",
    "meaning": "adj 多话的;健谈的"
  },
  {
    "word": "tall",
    "meaning": "adj 高的 adv.高地"
  },
  {
    "word": "tally",
    "meaning": "n 计数器;得分 v.合计"
  },
  {
    "word": "talon",
    "meaning": "n 爪;猛禽的利爪"
  },
  {
    "word": "tambourine",
    "meaning": "n 手鼓"
  },
  {
    "word": "tame",
    "meaning": "adj 驯服的;顺从的"
  },
  {
    "word": "tamper",
    "meaning": "v 窜改;破坏"
  },
  {
    "word": "tan",
    "meaning": "n 鞣料 adj.棕黄色的"
  },
  {
    "word": "tangent",
    "meaning": "n 正切;切线"
  },
  {
    "word": "tangle",
    "meaning": "n 纠缠;缠结 v.纠缠"
  },
  {
    "word": "tangled",
    "meaning": "adj 纠缠的;复杂的"
  },
  {
    "word": "tank",
    "meaning": "n 坦克;大容器"
  },
  {
    "word": "tanker",
    "meaning": "n 油船;大型飞机"
  },
  {
    "word": "tap",
    "meaning": "n 龙头;轻拍 v.轻拍"
  },
  {
    "word": "tape",
    "meaning": "n 带子;录音 v.录音"
  },
  {
    "word": "taper",
    "meaning": "n 逐渐变细 v.逐渐变细"
  },
  {
    "word": "tapestry",
    "meaning": "n 挂毯;织锦"
  },
  {
    "word": "tar",
    "meaning": "n 焦油;柏油"
  },
  {
    "word": "target",
    "meaning": "n 目标 v.瞄准"
  },
  {
    "word": "tariff",
    "meaning": "n 关税;价目表"
  },
  {
    "word": "tarpaulin",
    "meaning": "n 油布;防水布"
  },
  {
    "word": "tarragon",
    "meaning": "n 龙蒿;龙蒿属植物"
  },
  {
    "word": "tarry",
    "meaning": "v 耽搁;延迟"
  },
  {
    "word": "tart",
    "meaning": "adj 酸的;尖酸的"
  },
  {
    "word": "tartan",
    "meaning": "n 塔特恩（苏格兰）"
  },
  {
    "word": "tartar",
    "meaning": "n 酒石;塔塔尔人"
  },
  {
    "word": "task",
    "meaning": "n 任务;工作"
  },
  {
    "word": "tassel",
    "meaning": "n 流苏;穗"
  },
  {
    "word": "taste",
    "meaning": "n 味道 v.尝"
  },
  {
    "word": "tasteful",
    "meaning": "adj 有味道的;审美的"
  },
  {
    "word": "tasteless",
    "meaning": "adj 无味道的;乏味的"
  },
  {
    "word": "tasty",
    "meaning": "adj 美味的;可口的"
  },
  {
    "word": "tatter",
    "meaning": "n 破烂;碎布"
  },
  {
    "word": "tattered",
    "meaning": "adj 破旧的;衣衫褴褛的"
  },
  {
    "word": "taunt",
    "meaning": "v 逗弄;挑逗"
  },
  {
    "word": "taut",
    "meaning": "adj 绷紧的;拉紧的"
  },
  {
    "word": "tavern",
    "meaning": "n 小酒馆;客栈"
  },
  {
    "word": "tawdry",
    "meaning": "adj 华而不实的;廉价的"
  },
  {
    "word": "tax",
    "meaning": "n 税 v.征税"
  },
  {
    "word": "taxation",
    "meaning": "n 征税;税金"
  },
  {
    "word": "taxi",
    "meaning": "n 出租汽车;的士"
  },
  {
    "word": "taxonomic",
    "meaning": "adj 分类的;分类学的"
  },
  {
    "word": "taxonomy",
    "meaning": "n 分类学;分类法"
  },
  {
    "word": "tea",
    "meaning": "n 茶;茶叶"
  },
  {
    "word": "teach",
    "meaning": "v 教;教授"
  },
  {
    "word": "teacher",
    "meaning": "n 教师;教师"
  },
  {
    "word": "teaching",
    "meaning": "n 教学;教导"
  },
  {
    "word": "team",
    "meaning": "n 队 v.结合"
  },
  {
    "word": "teamwork",
    "meaning": "n 合作;协作"
  },
  {
    "word": "tear",
    "meaning": "n 眼泪 v.撕破"
  },
  {
    "word": "tearful",
    "meaning": "adj 含泪的;感伤的"
  },
  {
    "word": "tease",
    "meaning": "v 取笑;戏弄"
  },
  {
    "word": "teaspoon",
    "meaning": "n 茶匙"
  },
  {
    "word": "technical",
    "meaning": "adj 技术的;专门的"
  },
  {
    "word": "technicality",
    "meaning": "n 技术性;细节"
  },
  {
    "word": "technique",
    "meaning": "n 技巧;方法"
  },
  {
    "word": "technology",
    "meaning": "n 技术;工艺"
  },
  {
    "word": "tedious",
    "meaning": "adj 乏味的;冗长的"
  },
  {
    "word": "tedium",
    "meaning": "n 厌倦;厌倦感"
  },
  {
    "word": "teem",
    "meaning": "v 充满;到处都是"
  },
  {
    "word": "teeming",
    "meaning": "adj 充满的;拥挤的"
  },
  {
    "word": "teeth",
    "meaning": "n 牙齿"
  },
  {
    "word": "teethe",
    "meaning": "v 出牙;使烦躁"
  },
  {
    "word": "telegram",
    "meaning": "n 电报"
  },
  {
    "word": "telegraph",
    "meaning": "n 电报机 v.电报"
  },
  {
    "word": "telephone",
    "meaning": "n 电话 v.打电话"
  },
  {
    "word": "telescope",
    "meaning": "n 望远镜 v.缩短"
  },
  {
    "word": "televise",
    "meaning": "v 电视播放;播送"
  },
  {
    "word": "television",
    "meaning": "n 电视;电视机"
  },
  {
    "word": "tell",
    "meaning": "v 告诉;分辨"
  },
  {
    "word": "teller",
    "meaning": "n 银行出纳员;讲述者"
  },
  {
    "word": "temper",
    "meaning": "n 脾气;性情"
  },
  {
    "word": "tempera",
    "meaning": "n 蛋彩画;气质"
  },
  {
    "word": "temperament",
    "meaning": "n 气质;性情"
  },
  {
    "word": "temperamental",
    "meaning": "adj 喜怒无常的;易变的"
  },
  {
    "word": "temperature",
    "meaning": "n 温度;体温"
  },
  {
    "word": "temperate",
    "meaning": "adj 温和的;适度的"
  },
  {
    "word": "tempest",
    "meaning": "n 暴风雨;骚动"
  },
  {
    "word": "tempestuous",
    "meaning": "adj 暴风雨的;激烈的"
  },
  {
    "word": "template",
    "meaning": "n 模板;样板"
  },
  {
    "word": "temple",
    "meaning": "n 庙宇;太阳穴"
  },
  {
    "word": "temporal",
    "meaning": "adj 世俗的;时间的"
  },
  {
    "word": "temporary",
    "meaning": "adj 临时的;暂时的"
  },
  {
    "word": "tempt",
    "meaning": "v 引诱;诱惑"
  },
  {
    "word": "temptation",
    "meaning": "n 引诱;诱惑"
  },
  {
    "word": "tempting",
    "meaning": "adj 吸引人的;诱人的"
  },
  {
    "word": "ten",
    "meaning": "num 十"
  },
  {
    "word": "tenable",
    "meaning": "adj 站得住脚的;合理的"
  },
  {
    "word": "tenacious",
    "meaning": "adj 坚韧的;固执的"
  },
  {
    "word": "tenacity",
    "meaning": "n 坚韧;固执"
  },
  {
    "word": "tenancy",
    "meaning": "n 租赁;占有"
  },
  {
    "word": "tenant",
    "meaning": "n 房客;佃户"
  },
  {
    "word": "tend",
    "meaning": "v 倾向于;照料"
  },
  {
    "word": "tendency",
    "meaning": "n 倾向;趋势"
  },
  {
    "word": "tender",
    "meaning": "adj 温柔的 n.投标"
  },
  {
    "word": "tenderness",
    "meaning": "n 温柔;嫩度"
  },
  {
    "word": "tendon",
    "meaning": "n 腱;筋"
  },
  {
    "word": "tenement",
    "meaning": "n 租赁房屋;住宅"
  },
  {
    "word": "tenet",
    "meaning": "n 信条;原则"
  },
  {
    "word": "tenor",
    "meaning": "n 男高音;要点"
  },
  {
    "word": "tense",
    "meaning": "adj 拉紧的;紧张的"
  },
  {
    "word": "tensile",
    "meaning": "adj 拉伸的;拉力的"
  },
  {
    "word": "tension",
    "meaning": "n 拉力;张力"
  },
  {
    "word": "tent",
    "meaning": "n 帐篷 v.搭建帐篷"
  },
  {
    "word": "tentacle",
    "meaning": "n 触手;触须"
  },
  {
    "word": "tentative",
    "meaning": "adj 试探性的;不确定的"
  },
  {
    "word": "tenterhooks",
    "meaning": "n 焦虑不安"
  },
  {
    "word": "term",
    "meaning": "n 学期;术语"
  },
  {
    "word": "terminal",
    "meaning": "adj 末期的 n.终端"
  },
  {
    "word": "terminate",
    "meaning": "v 终止;结束"
  },
  {
    "word": "termination",
    "meaning": "n 结束;终止"
  },
  {
    "word": "terminology",
    "meaning": "n 术语;术语学"
  },
  {
    "word": "terminus",
    "meaning": "n 终点;终点车站"
  },
  {
    "word": "termite",
    "meaning": "n 白蚁"
  },
  {
    "word": "terrace",
    "meaning": "n 阳台;平台"
  },
  {
    "word": "terrain",
    "meaning": "n 地形;地带"
  },
  {
    "word": "terrestrial",
    "meaning": "adj 地球的;陆地的"
  },
  {
    "word": "terrible",
    "meaning": "adj 可怕的;糟糕的"
  },
  {
    "word": "terribly",
    "meaning": "adv 可怕地;非常"
  },
  {
    "word": "terrific",
    "meaning": "adj 极大的;极好的"
  },
  {
    "word": "terrify",
    "meaning": "v 使恐怖;恐吓"
  },
  {
    "word": "territory",
    "meaning": "n 领土;领域"
  },
  {
    "word": "terror",
    "meaning": "n 恐怖;惊恐"
  },
  {
    "word": "terrorist",
    "meaning": "n 恐怖分子"
  },
  {
    "word": "terse",
    "meaning": "adj 简洁的;简明的"
  },
  {
    "word": "tertiary",
    "meaning": "adj 第三的;第三位的"
  },
  {
    "word": "test",
    "meaning": "n 测试 v.测试"
  },
  {
    "word": "testament",
    "meaning": "n 遗嘱;证据"
  },
  {
    "word": "testify",
    "meaning": "v 作证;证明"
  },
  {
    "word": "testimony",
    "meaning": "n 证词;证明"
  },
  {
    "word": "testy",
    "meaning": "adj 性急的;易怒的"
  },
  {
    "word": "tether",
    "meaning": "n 绳索;束缚 v.束缚"
  },
  {
    "word": "text",
    "meaning": "n 文本;课文"
  },
  {
    "word": "textbook",
    "meaning": "n 教科书"
  },
  {
    "word": "textile",
    "meaning": "n 纺织品;织物"
  },
  {
    "word": "texture",
    "meaning": "n 质地;结构"
  },
  {
    "word": "than",
    "meaning": "conj 比"
  },
  {
    "word": "thank",
    "meaning": "v 感谢 n.感谢"
  },
  {
    "word": "thankful",
    "meaning": "adj 感激的;感谢的"
  },
  {
    "word": "thankfully",
    "meaning": "adv 感激地;感谢地"
  },
  {
    "word": "thankless",
    "meaning": "adj 不领情的;不感谢的"
  },
  {
    "word": "that",
    "meaning": "adj 那个 pron.那个"
  },
  {
    "word": "thaw",
    "meaning": "v 解冻 n.解冻"
  },
  {
    "word": "theatre",
    "meaning": "n 剧场;戏剧"
  },
  {
    "word": "theatrical",
    "meaning": "adj 戏剧的;戏剧性的"
  },
  {
    "word": "thee",
    "meaning": "pron 你（古英语）"
  },
  {
    "word": "theft",
    "meaning": "n 盗窃;偷窃"
  },
  {
    "word": "their",
    "meaning": "pron 他们的"
  },
  {
    "word": "theirs",
    "meaning": "pron 他们的"
  },
  {
    "word": "them",
    "meaning": "pron 他们"
  },
  {
    "word": "theme",
    "meaning": "n 主题;题目"
  },
  {
    "word": "themselves",
    "meaning": "pron 他们自己"
  },
  {
    "word": "then",
    "meaning": "adv 那么;当时"
  },
  {
    "word": "thence",
    "meaning": "adv 从那里"
  },
  {
    "word": "theologian",
    "meaning": "n 神学家"
  },
  {
    "word": "theology",
    "meaning": "n 神学;宗教"
  },
  {
    "word": "theorem",
    "meaning": "n 定理;原理"
  },
  {
    "word": "theoretical",
    "meaning": "adj 理论的"
  },
  {
    "word": "theorist",
    "meaning": "n 理论家;理论者"
  },
  {
    "word": "theory",
    "meaning": "n 理论;学说"
  },
  {
    "word": "therapeutic",
    "meaning": "adj 治疗的;治疗的"
  },
  {
    "word": "therapist",
    "meaning": "n 治疗专家;临床医生"
  },
  {
    "word": "therapy",
    "meaning": "n 治疗;疗法"
  },
  {
    "word": "there",
    "meaning": "adv 在那里"
  },
  {
    "word": "thereafter",
    "meaning": "adv 之后;后来"
  },
  {
    "word": "thereby",
    "meaning": "adv 因此;在那附近"
  },
  {
    "word": "therefore",
    "meaning": "adv 因此;所以"
  },
  {
    "word": "therein",
    "meaning": "adv 在其中"
  },
  {
    "word": "thereof",
    "meaning": "adv 在其中;在那方面"
  },
  {
    "word": "thermal",
    "meaning": "adj 热的;热量的"
  },
  {
    "word": "thermometer",
    "meaning": "n 温度计;寒暑表"
  },
  {
    "word": "thesis",
    "meaning": "n 论文;论点"
  },
  {
    "word": "they",
    "meaning": "pron 他们"
  },
  {
    "word": "thick",
    "meaning": "adj 厚的;浓的"
  },
  {
    "word": "thicken",
    "meaning": "v 变厚;变浓"
  },
  {
    "word": "thicket",
    "meaning": "n 灌木丛;丛林"
  },
  {
    "word": "thickness",
    "meaning": "n 厚度;浓密"
  },
  {
    "word": "thief",
    "meaning": "n 贼;小偷"
  },
  {
    "word": "thieve",
    "meaning": "v 偷;盗窃"
  },
  {
    "word": "thigh",
    "meaning": "n 大腿;股"
  },
  {
    "word": "thin",
    "meaning": "adj 薄的;瘦的"
  },
  {
    "word": "thine",
    "meaning": "pron 你的（古英语）"
  },
  {
    "word": "thing",
    "meaning": "n 东西;事情"
  },
  {
    "word": "think",
    "meaning": "v 想;认为"
  },
  {
    "word": "thinkable",
    "meaning": "adj 可想象的;可能的"
  },
  {
    "word": "third",
    "meaning": "adj 第三的 n.三分之一"
  },
  {
    "word": "thirdly",
    "meaning": "adv 第三地;第三方面"
  },
  {
    "word": "thirst",
    "meaning": "n 渴;渴望"
  },
  {
    "word": "thirsty",
    "meaning": "adj 渴的;渴望的"
  },
  {
    "word": "thirteen",
    "meaning": "num 十三"
  },
  {
    "word": "thirty",
    "meaning": "num 三十"
  },
  {
    "word": "this",
    "meaning": "adj 这 pron.这个"
  },
  {
    "word": "thorn",
    "meaning": "n 刺;荆棘"
  },
  {
    "word": "thorny",
    "meaning": "adj 多刺的;困难的"
  },
  {
    "word": "thorough",
    "meaning": "adj 彻底的;详尽的"
  },
  {
    "word": "thoroughly",
    "meaning": "adv 彻底地;完全地"
  },
  {
    "word": "though",
    "meaning": "conj 虽然 adv.可是"
  },
  {
    "word": "thought",
    "meaning": "n 思考;思想"
  },
  {
    "word": "thoughtful",
    "meaning": "adj 深思的;体贴的"
  },
  {
    "word": "thoughtless",
    "meaning": "adj 无思考的;轻率的"
  },
  {
    "word": "thousand",
    "meaning": "num 一千"
  },
  {
    "word": "thrash",
    "meaning": "v 鞭打;打败"
  },
  {
    "word": "thread",
    "meaning": "n 线;线索 v.穿线"
  },
  {
    "word": "threadbare",
    "meaning": "adj 磨破的;陈腐的"
  },
  {
    "word": "threat",
    "meaning": "n 威胁;凶兆"
  },
  {
    "word": "threaten",
    "meaning": "v 威胁;预示"
  },
  {
    "word": "three",
    "meaning": "num 三"
  },
  {
    "word": "threshold",
    "meaning": "n 阈值;门槛"
  },
  {
    "word": "thrift",
    "meaning": "n 节俭;节约"
  },
  {
    "word": "thrifty",
    "meaning": "adj 节俭的;节约的"
  },
  {
    "word": "thrill",
    "meaning": "n 兴奋;震颤 v.使兴奋"
  },
  {
    "word": "thrilling",
    "meaning": "adj 令人兴奋的"
  },
  {
    "word": "thrive",
    "meaning": "v 繁荣;兴旺"
  },
  {
    "word": "throat",
    "meaning": "n 喉咙;嗓子"
  },
  {
    "word": "throes",
    "meaning": "n 嗓音"
  },
  {
    "word": "throne",
    "meaning": "n 宝座;王位"
  },
  {
    "word": "throng",
    "meaning": "n 人群 v.拥挤"
  },
  {
    "word": "through",
    "meaning": "adv 通过 prep.通过"
  },
  {
    "word": "throughout",
    "meaning": "adv 贯穿;到处"
  },
  {
    "word": "throughput",
    "meaning": "n 吞吐量;产量"
  },
  {
    "word": "throw",
    "meaning": "v 投;抛"
  },
  {
    "word": "thrust",
    "meaning": "v 推;刺 n.推力"
  },
  {
    "word": "thud",
    "meaning": "n 重击声;砰"
  },
  {
    "word": "thumb",
    "meaning": "n 拇指 v.用拇指拨弄"
  },
  {
    "word": "thump",
    "meaning": "v 重击;敲击"
  },
  {
    "word": "thumping",
    "meaning": "adj 重的;砰砰响的"
  },
  {
    "word": "thunder",
    "meaning": "n 雷声 v.打雷"
  },
  {
    "word": "thunderous",
    "meaning": "adj 雷鸣般的;巨大的"
  },
  {
    "word": "thunderstorm",
    "meaning": "n 雷雨;雷电交加"
  },
  {
    "word": "thwart",
    "meaning": "v 阻碍;阻挠"
  },
  {
    "word": "thyme",
    "meaning": "n 百里香"
  },
  {
    "word": "tiara",
    "meaning": "n 头饰;小型王冠"
  },
  {
    "word": "tibia",
    "meaning": "n 胫骨;小腿骨"
  },
  {
    "word": "tick",
    "meaning": "n 滴答声;勾号"
  },
  {
    "word": "ticket",
    "meaning": "n 票;标签"
  },
  {
    "word": "tickle",
    "meaning": "v 痒;胳肢"
  },
  {
    "word": "tid",
    "meaning": "n 潮流;潮水"
  },
  {
    "word": "tide",
    "meaning": "n 潮汐;潮流"
  },
  {
    "word": "tidy",
    "meaning": "adj 整洁的 v.整理"
  },
  {
    "word": "tie",
    "meaning": "n 领带 v.系;束缚"
  },
  {
    "word": "tier",
    "meaning": "n 层;行"
  },
  {
    "word": "tiger",
    "meaning": "n 老虎;凶暴的人"
  },
  {
    "word": "tight",
    "meaning": "adj 紧的 adv.紧地"
  },
  {
    "word": "tighten",
    "meaning": "v 变紧;勒紧"
  },
  {
    "word": "tile",
    "meaning": "n 瓦片;瓷砖"
  },
  {
    "word": "till",
    "meaning": "conj 直到 prep.直到"
  },
  {
    "word": "tilt",
    "meaning": "v 倾斜;倾倒"
  },
  {
    "word": "timber",
    "meaning": "n 木材;木料"
  },
  {
    "word": "time",
    "meaning": "n 时间;次"
  },
  {
    "word": "timely",
    "meaning": "adj 及时的;适时的"
  },
  {
    "word": "timid",
    "meaning": "adj 胆小的;羞怯的"
  },
  {
    "word": "timidity",
    "meaning": "n 胆小;缺乏自信"
  },
  {
    "word": "tin",
    "meaning": "n 锡;罐头"
  },
  {
    "word": "tinge",
    "meaning": "n 色彩;气味 v.染色"
  },
  {
    "word": "tingle",
    "meaning": "v 刺痛;感到刺痛"
  },
  {
    "word": "tinker",
    "meaning": "v 修补;胡乱修补"
  },
  {
    "word": "tinkle",
    "meaning": "n 叮当声 v.发出叮当声"
  },
  {
    "word": "tint",
    "meaning": "n 色彩;色泽 v.染色"
  },
  {
    "word": "tiny",
    "meaning": "adj 微小的;极小的"
  },
  {
    "word": "tip",
    "meaning": "n 尖端;小费 v.倾斜"
  },
  {
    "word": "tire",
    "meaning": "v 疲劳 n.轮胎"
  },
  {
    "word": "tired",
    "meaning": "adj 疲劳的;厌倦的"
  },
  {
    "word": "tiresome",
    "meaning": "adj 累人的;令人厌烦的"
  },
  {
    "word": "tissue",
    "meaning": "n 组织;薄纱"
  },
  {
    "word": "titanic",
    "meaning": "adj 巨大的;了不起的"
  },
  {
    "word": "title",
    "meaning": "n 标题;头衔"
  },
  {
    "word": "to",
    "meaning": "adv 向;到"
  },
  {
    "word": "toad",
    "meaning": "n 蟾蜍;癞蛤蟆"
  },
  {
    "word": "toast",
    "meaning": "n 烤面包 v.敬酒"
  },
  {
    "word": "tobacco",
    "meaning": "n 烟草;烟"
  },
  {
    "word": "toe",
    "meaning": "n 脚趾"
  },
  {
    "word": "toenail",
    "meaning": "n 脚趾甲"
  },
  {
    "word": "toffee",
    "meaning": "n 奶糖;太妃糖"
  },
  {
    "word": "together",
    "meaning": "adv 一起;共同"
  },
  {
    "word": "toggle",
    "meaning": "n 切换 v.切换"
  },
  {
    "word": "toil",
    "meaning": "n 辛苦;辛勤工作 v.辛苦工作"
  },
  {
    "word": "toilet",
    "meaning": "n 厕所;洗手间"
  },
  {
    "word": "token",
    "meaning": "n 表示;标志"
  },
  {
    "word": "tolerable",
    "meaning": "adj 可容忍的"
  },
  {
    "word": "tolerance",
    "meaning": "n 容忍;公差"
  },
  {
    "word": "tolerant",
    "meaning": "adj 容忍的;有耐性的"
  },
  {
    "word": "tolerate",
    "meaning": "v 容忍;容许"
  },
  {
    "word": "toll",
    "meaning": "n 通行费;钟声"
  },
  {
    "word": "tomahawk",
    "meaning": "n 战斧;印第安战斧"
  },
  {
    "word": "tomato",
    "meaning": "n 番茄"
  },
  {
    "word": "tomb",
    "meaning": "n 坟墓;墓穴"
  },
  {
    "word": "tomorrow",
    "meaning": "n 明天"
  },
  {
    "word": "ton",
    "meaning": "n 吨"
  },
  {
    "word": "tone",
    "meaning": "n 语气;音调"
  },
  {
    "word": "tongue",
    "meaning": "n 舌头;语言"
  },
  {
    "word": "tonic",
    "meaning": "n 补药;补品"
  },
  {
    "word": "tonnage",
    "meaning": "n 吨数;排水量"
  },
  {
    "word": "too",
    "meaning": "adv 也;太"
  },
  {
    "word": "tool",
    "meaning": "n 工具;器具"
  },
  {
    "word": "tooth",
    "meaning": "n 牙齿;齿"
  },
  {
    "word": "top",
    "meaning": "n 顶部 adj.最高的"
  },
  {
    "word": "topic",
    "meaning": "n 题目;话题"
  },
  {
    "word": "topple",
    "meaning": "v 推翻;倾覆"
  },
  {
    "word": "torment",
    "meaning": "n 痛苦;苦恼"
  },
  {
    "word": "tormentor",
    "meaning": "n 折磨者;迫害者"
  },
  {
    "word": "torn",
    "meaning": "adj 撕破的;分裂的"
  },
  {
    "word": "tornado",
    "meaning": "n 龙卷风"
  },
  {
    "word": "torpedo",
    "meaning": "n 鱼雷 v.用鱼雷攻击"
  },
  {
    "word": "torrent",
    "meaning": "n 奔流;洪流"
  },
  {
    "word": "torture",
    "meaning": "n 折磨 v.折磨"
  },
  {
    "word": "toss",
    "meaning": "v 投掷;摇摆"
  },
  {
    "word": "total",
    "meaning": "adj 总的 n.总数"
  },
  {
    "word": "totalitarian",
    "meaning": "adj 极权主义的"
  },
  {
    "word": "totter",
    "meaning": "v 摇摇欲坠;蹒跚"
  },
  {
    "word": "touch",
    "meaning": "n 触觉 v.接触"
  },
  {
    "word": "touching",
    "meaning": "adj 动人的;动人的"
  },
  {
    "word": "touchy",
    "meaning": "adj 敏感的;易生气的"
  },
  {
    "word": "tough",
    "meaning": "adj 坚硬的;棘手的"
  },
  {
    "word": "tour",
    "meaning": "n 旅游;巡回"
  },
  {
    "word": "tourism",
    "meaning": "n 旅游;旅游业"
  },
  {
    "word": "tourist",
    "meaning": "n 旅行者;游客"
  },
  {
    "word": "tousle",
    "meaning": "v 弄乱;斗争"
  },
  {
    "word": "tout",
    "meaning": "v 招揽;兜售"
  },
  {
    "word": "tow",
    "meaning": "v 拖;牵引"
  },
  {
    "word": "towards",
    "meaning": "prep 向;朝"
  },
  {
    "word": "toxic",
    "meaning": "adj 有毒的;中毒的"
  },
  {
    "word": "toxin",
    "meaning": "n 毒素;毒质"
  },
  {
    "word": "toy",
    "meaning": "n 玩具 v.玩弄"
  },
  {
    "word": "trace",
    "meaning": "n 痕迹 v.追溯"
  },
  {
    "word": "traceable",
    "meaning": "adj 可追踪的;可归因的"
  },
  {
    "word": "track",
    "meaning": "n 轨道 v.追踪"
  },
  {
    "word": "tract",
    "meaning": "n 地区;大片土地"
  },
  {
    "word": "tractor",
    "meaning": "n 拖拉机;牵引机"
  },
  {
    "word": "trade",
    "meaning": "n 贸易 v.交易"
  },
  {
    "word": "trademark",
    "meaning": "n 商标 v.打商标"
  },
  {
    "word": "tradition",
    "meaning": "n 传统;风俗"
  },
  {
    "word": "traditional",
    "meaning": "adj 传统的;风俗的"
  },
  {
    "word": "traffic",
    "meaning": "n 交通;贸易"
  },
  {
    "word": "tragedy",
    "meaning": "n 悲剧;灾难"
  },
  {
    "word": "tragic",
    "meaning": "adj 悲剧的;悲惨的"
  },
  {
    "word": "trail",
    "meaning": "n 痕迹;小径 v.拖"
  },
  {
    "word": "trailer",
    "meaning": "n 拖车;预告片"
  },
  {
    "word": "train",
    "meaning": "n 火车 v.训练"
  },
  {
    "word": "trained",
    "meaning": "adj 受过训练的"
  },
  {
    "word": "trainer",
    "meaning": "n 训练员;教练"
  },
  {
    "word": "training",
    "meaning": "n 训练;培养"
  },
  {
    "word": "trait",
    "meaning": "n 特征;特性"
  },
  {
    "word": "traitor",
    "meaning": "n 叛徒;卖国贼"
  },
  {
    "word": "tram",
    "meaning": "n 电车;有轨电车"
  },
  {
    "word": "tramp",
    "meaning": "v 重步走 n.长途跋涉"
  },
  {
    "word": "trample",
    "meaning": "v 踩踏;践踏"
  },
  {
    "word": "trance",
    "meaning": "n 出神;恍惚"
  },
  {
    "word": "tranquil",
    "meaning": "adj 平静的;宁静的"
  },
  {
    "word": "tranquility",
    "meaning": "n 平静;宁静"
  },
  {
    "word": "transaction",
    "meaning": "n 交易;办理"
  },
  {
    "word": "transcend",
    "meaning": "v 超越;胜过"
  },
  {
    "word": "transcendent",
    "meaning": "adj 超卓越的"
  },
  {
    "word": "transcribe",
    "meaning": "v 转录;抄写"
  },
  {
    "word": "transcript",
    "meaning": "n 抄本;副本"
  },
  {
    "word": "transfer",
    "meaning": "v 转移;调动"
  },
  {
    "word": "transference",
    "meaning": "n 转移;转让"
  },
  {
    "word": "transform",
    "meaning": "v 改变;变换"
  },
  {
    "word": "transformation",
    "meaning": "n 变化;改造"
  },
  {
    "word": "transient",
    "meaning": "adj 短暂的;瞬时的"
  },
  {
    "word": "transit",
    "meaning": "n 运输;经过"
  },
  {
    "word": "transition",
    "meaning": "n 转变;过渡"
  },
  {
    "word": "transitory",
    "meaning": "adj 短暂的;临时的"
  },
  {
    "word": "translate",
    "meaning": "v 翻译;解释"
  },
  {
    "word": "translation",
    "meaning": "n 翻译;译文"
  },
  {
    "word": "transmission",
    "meaning": "n 传动;传送"
  },
  {
    "word": "transmit",
    "meaning": "v 传输;传播"
  },
  {
    "word": "transparency",
    "meaning": "n 透明;透明度"
  },
  {
    "word": "transparent",
    "meaning": "adj 透明的;显然的"
  },
  {
    "word": "transplant",
    "meaning": "v 移植;移居"
  },
  {
    "word": "transport",
    "meaning": "v 运输 n.运输"
  },
  {
    "word": "transportation",
    "meaning": "n 运输;运输系统"
  },
  {
    "word": "transverse",
    "meaning": "adj 横的;横贯的"
  },
  {
    "word": "trap",
    "meaning": "n 陷阱 v.诱捕"
  },
  {
    "word": "trapeze",
    "meaning": "n 空中秋千"
  },
  {
    "word": "trapezoid",
    "meaning": "n 梯形;陷井"
  },
  {
    "word": "trauma",
    "meaning": "n 创伤;外伤"
  },
  {
    "word": "travail",
    "meaning": "n 辛苦;痛苦"
  },
  {
    "word": "travel",
    "meaning": "n 旅行 v.旅行"
  },
  {
    "word": "traveler",
    "meaning": "n 旅行者;游客"
  },
  {
    "word": "traverse",
    "meaning": "v 横贯;穿过"
  },
  {
    "word": "travesty",
    "meaning": "n 男扮女装;装扮"
  },
  {
    "word": "trawl",
    "meaning": "v 拖网;搜索"
  },
  {
    "word": "tray",
    "meaning": "n 托盘;盘"
  },
  {
    "word": "treacherous",
    "meaning": "adj 背叛的;危险的"
  },
  {
    "word": "tread",
    "meaning": "n 步;脚步 v.踩"
  },
  {
    "word": "treadmill",
    "meaning": "n 踏车;跑步机"
  },
  {
    "word": "treason",
    "meaning": "n 叛国;背叛"
  },
  {
    "word": "treasure",
    "meaning": "n 财宝 v.珍视"
  },
  {
    "word": "treasurer",
    "meaning": "n 财务主管;出纳员"
  },
  {
    "word": "treasury",
    "meaning": "n 国库;宝库"
  },
  {
    "word": "treat",
    "meaning": "v 对待;款待"
  },
  {
    "word": "treatment",
    "meaning": "n 治疗;处理"
  },
  {
    "word": "treaty",
    "meaning": "n 条约;协定"
  },
  {
    "word": "treble",
    "meaning": "adj 三重的 n.三重唱"
  },
  {
    "word": "tree",
    "meaning": "n 树"
  },
  {
    "word": "tremble",
    "meaning": "v 颤抖;震动"
  },
  {
    "word": "tremendous",
    "meaning": "adj 巨大的;极好的"
  },
  {
    "word": "trench",
    "meaning": "n 沟;壕沟"
  },
  {
    "word": "trend",
    "meaning": "n 趋势;倾向"
  },
  {
    "word": "trendy",
    "meaning": "adj 流行的;时髦的"
  },
  {
    "word": "trepidation",
    "meaning": "n 恐惧;忧虑"
  },
  {
    "word": "trespass",
    "meaning": "n 侵入;侵权 v.侵入"
  },
  {
    "word": "triad",
    "meaning": "n 三个一组;三重奏"
  },
  {
    "word": "trial",
    "meaning": "n 试验;审判"
  },
  {
    "word": "triangle",
    "meaning": "n 三角形"
  },
  {
    "word": "triangular",
    "meaning": "adj 三角形的"
  },
  {
    "word": "tribe",
    "meaning": "n 部落;族"
  },
  {
    "word": "tribulation",
    "meaning": "n 苦难;磨难"
  },
  {
    "word": "tribute",
    "meaning": "n 贡品;称赞"
  },
  {
    "word": "trick",
    "meaning": "n 诡计;把戏"
  },
  {
    "word": "trickle",
    "meaning": "v 滴下 n.小溪"
  },
  {
    "word": "trifle",
    "meaning": "n 小事;琐事"
  },
  {
    "word": "trifling",
    "meaning": "adj 微不足道的;不重要的"
  },
  {
    "word": "trigger",
    "meaning": "n 扳机 v.引发"
  },
  {
    "word": "trillion",
    "meaning": "num 万亿"
  },
  {
    "word": "trim",
    "meaning": "adj 整齐的 v.修剪"
  },
  {
    "word": "trinket",
    "meaning": "n 小饰品;小玩意儿"
  },
  {
    "word": "triple",
    "meaning": "adj 三倍的 n.三个一组"
  },
  {
    "word": "triumph",
    "meaning": "n 胜利 v.获胜"
  },
  {
    "word": "triumphant",
    "meaning": "adj 胜利的;得意的"
  },
  {
    "word": "trivial",
    "meaning": "adj 微不足道的;琐细的"
  },
  {
    "word": "trolley",
    "meaning": "n 手推车;电车"
  },
  {
    "word": "troop",
    "meaning": "n 军队;一群"
  },
  {
    "word": "trooper",
    "meaning": "n 骑兵;警察"
  },
  {
    "word": "trophy",
    "meaning": "n 奖品;战利品"
  },
  {
    "word": "tropical",
    "meaning": "adj 热带的;热情的"
  },
  {
    "word": "trot",
    "meaning": "v /n.小跑;快步"
  },
  {
    "word": "trouble",
    "meaning": "n 麻烦 v.麻烦"
  },
  {
    "word": "troublesome",
    "meaning": "adj 麻烦的;讨厌的"
  },
  {
    "word": "trough",
    "meaning": "n 饲料槽;低谷"
  },
  {
    "word": "trounce",
    "meaning": "v 重击;痛打"
  },
  {
    "word": "troupe",
    "meaning": "n 剧团;演员阵容"
  },
  {
    "word": "trousers",
    "meaning": "n 裤子;长裤"
  },
  {
    "word": "trout",
    "meaning": "n 鳟鱼"
  },
  {
    "word": "truce",
    "meaning": "n 停战;休战"
  },
  {
    "word": "truck",
    "meaning": "n 卡车;货车"
  },
  {
    "word": "truculent",
    "meaning": "adj 好战的;凶狠的"
  },
  {
    "word": "trumpet",
    "meaning": "n 小号;喇叭"
  },
  {
    "word": "trumpeter",
    "meaning": "n 吹小号者;传令官"
  },
  {
    "word": "truncate",
    "meaning": "v 截断;缩短"
  },
  {
    "word": "trunk",
    "meaning": "n 树干;躯干"
  },
  {
    "word": "truss",
    "meaning": "n 支撑;桁架"
  },
  {
    "word": "trust",
    "meaning": "n 信任 v.信任"
  },
  {
    "word": "trustee",
    "meaning": "n 受托人;托管人"
  },
  {
    "word": "truth",
    "meaning": "n 真理;真相"
  },
  {
    "word": "try",
    "meaning": "v 尝试;审判"
  },
  {
    "word": "tsar",
    "meaning": "n 沙皇（俄国皇帝）"
  },
  {
    "word": "tub",
    "meaning": "n 桶;浴盆"
  },
  {
    "word": "tube",
    "meaning": "n 管;管子"
  },
  {
    "word": "tuck",
    "meaning": "v 夹住;卷起"
  },
  {
    "word": "tuesday",
    "meaning": "n 星期二"
  },
  {
    "word": "tuft",
    "meaning": "n 一簇;一丛"
  },
  {
    "word": "tug",
    "meaning": "v 拖;拉"
  },
  {
    "word": "tuition",
    "meaning": "n 学费;教学"
  },
  {
    "word": "tulip",
    "meaning": "n 郁金香"
  },
  {
    "word": "tumble",
    "meaning": "v 跌倒;滚落"
  },
  {
    "word": "tumult",
    "meaning": "n 骚动;混乱"
  },
  {
    "word": "tumultuous",
    "meaning": "adj 骚乱的;剧烈的"
  },
  {
    "word": "tuna",
    "meaning": "n 金枪鱼"
  },
  {
    "word": "tune",
    "meaning": "n 调子;和谐 v.调音"
  },
  {
    "word": "tunnel",
    "meaning": "n 隧道;地道"
  },
  {
    "word": "turbulent",
    "meaning": "adj 骚乱的;动荡的"
  },
  {
    "word": "turf",
    "meaning": "n 草皮;赛马场"
  },
  {
    "word": "turmoil",
    "meaning": "n 混乱;骚动"
  },
  {
    "word": "turn",
    "meaning": "v 转动 n.轮流"
  },
  {
    "word": "turning",
    "meaning": "n 转弯;转变"
  },
  {
    "word": "turnip",
    "meaning": "n 萝卜"
  },
  {
    "word": "turret",
    "meaning": "n 塔楼;炮塔"
  },
  {
    "word": "tutor",
    "meaning": "n 家庭教师 v.辅导"
  },
  {
    "word": "tutorial",
    "meaning": "adj 辅导的;教学的"
  },
  {
    "word": "twilight",
    "meaning": "n 黎明;黄昏"
  },
  {
    "word": "twin",
    "meaning": "adj 双胞胎的 n.双胞胎"
  },
  {
    "word": "twinkle",
    "meaning": "v 闪烁;闪亮"
  },
  {
    "word": "twist",
    "meaning": "v 扭曲 n.扭曲"
  },
  {
    "word": "twisted",
    "meaning": "adj 扭曲的;蜿蜒的"
  },
  {
    "word": "twit",
    "meaning": "n 傻瓜;笨蛋"
  },
  {
    "word": "two",
    "meaning": "num 二;两个"
  },
  {
    "word": "twofold",
    "meaning": "adj 双重的;两倍的"
  },
  {
    "word": "type",
    "meaning": "n 类型 v.打字"
  },
  {
    "word": "typewriter",
    "meaning": "n 打字机"
  },
  {
    "word": "typhoid",
    "meaning": "n 伤寒;斑疹伤寒"
  },
  {
    "word": "typhoon",
    "meaning": "n 台风;飓风"
  },
  {
    "word": "tyranny",
    "meaning": "n 暴政;专横"
  },
  {
    "word": "tyrant",
    "meaning": "n 暴君;专横的人"
  },
  {
    "word": "ubiquitous",
    "meaning": "adj 普遍存在的;无所不在的"
  },
  {
    "word": "ugly",
    "meaning": "adj 丑陋的;难看的"
  },
  {
    "word": "ulcer",
    "meaning": "n 溃疡;腐烂物"
  },
  {
    "word": "ultimate",
    "meaning": "adj 最终的;极限的"
  },
  {
    "word": "ultimatum",
    "meaning": "n 最后通牒"
  },
  {
    "word": "ultraviolet",
    "meaning": "adj 紫外线的"
  },
  {
    "word": "ultrasound",
    "meaning": "n 超声波"
  },
  {
    "word": "ultraviolet",
    "meaning": "adj 紫外线的"
  },
  {
    "word": "umbilical",
    "meaning": "adj 脐带的;中心的"
  },
  {
    "word": "umbrella",
    "meaning": "n 伞;保护物"
  },
  {
    "word": "umpire",
    "meaning": "n 裁判员;仲裁人"
  },
  {
    "word": "umpteen",
    "meaning": "adj 无数的;许多的"
  },
  {
    "word": "umpteenth",
    "meaning": "adj 第n次的;第n个的"
  },
  {
    "word": "unabashed",
    "meaning": "adj 不害羞的;不畏惧的"
  },
  {
    "word": "unable",
    "meaning": "adj 不能的;无能力的"
  },
  {
    "word": "unacceptable",
    "meaning": "adj 无法接受的"
  },
  {
    "word": "unaccounted",
    "meaning": "adj 未解释的;未说明的"
  },
  {
    "word": "unanimous",
    "meaning": "adj 意见一致的"
  },
  {
    "word": "unarmed",
    "meaning": "adj 未武装的;空手的"
  },
  {
    "word": "unassuming",
    "meaning": "adj 谦逊的;不装腔作势的"
  },
  {
    "word": "unattached",
    "meaning": "adj 未附加的;未婚的"
  },
  {
    "word": "unattainable",
    "meaning": "adj 达不到的;无法获得的"
  },
  {
    "word": "unauthorized",
    "meaning": "adj 未授权的;非法的"
  },
  {
    "word": "unavoidable",
    "meaning": "adj 不能避免的"
  },
  {
    "word": "unbalance",
    "meaning": "v 使失去平衡"
  },
  {
    "word": "unbalanced",
    "meaning": "adj 不平衡的;不稳定的"
  },
  {
    "word": "unbearable",
    "meaning": "adj 难以忍受的;承受不了的"
  },
  {
    "word": "unbelievable",
    "meaning": "adj 难以置信的;不可信的"
  },
  {
    "word": "unbosom",
    "meaning": "v 吐露心事;倾诉"
  },
  {
    "word": "unbridled",
    "meaning": "adj 无拘无束的;放纵的"
  },
  {
    "word": "unburden",
    "meaning": "v 减轻负担;卸下负担"
  },
  {
    "word": "unbutton",
    "meaning": "v 解开纽扣;放松"
  },
  {
    "word": "uncannier",
    "meaning": "adj 更古怪的;更离奇的"
  },
  {
    "word": "uncanny",
    "meaning": "adj 神秘的;不可思议的"
  },
  {
    "word": "unceasing",
    "meaning": "adj 不断的;不停的"
  },
  {
    "word": "uncertain",
    "meaning": "adj 不确定的;无常的"
  },
  {
    "word": "uncertainty",
    "meaning": "n 不确定;疑惑"
  },
  {
    "word": "unchallenged",
    "meaning": "adj 未受挑战的;无争议的"
  },
  {
    "word": "unchangeable",
    "meaning": "adj 不变的;不可改变的"
  },
  {
    "word": "uncheck",
    "meaning": "v 检查;不受限制"
  },
  {
    "word": "unchecked",
    "meaning": "adj 未受限制的;未被抑制的"
  },
  {
    "word": "uncivil",
    "meaning": "adj 不文明的;粗野的"
  },
  {
    "word": "uncivilized",
    "meaning": "adj 未开化的;野蛮的"
  },
  {
    "word": "unclaimed",
    "meaning": "adj 未被认领的;无人认领的"
  },
  {
    "word": "uncle",
    "meaning": "n 叔叔;伯伯"
  },
  {
    "word": "uncommon",
    "meaning": "adj 不寻常的;罕见的"
  },
  {
    "word": "uncompromising",
    "meaning": "adj 不妥协的;坚定的"
  },
  {
    "word": "unconventional",
    "meaning": "adj 非传统的;不寻常的"
  },
  {
    "word": "uncouth",
    "meaning": "adj 粗俗的;无教养的"
  },
  {
    "word": "uncover",
    "meaning": "v 发现;揭开"
  },
  {
    "word": "uncovered",
    "meaning": "adj 无遮盖的;暴露的"
  },
  {
    "word": "unction",
    "meaning": "n unction;油脂"
  },
  {
    "word": "unctuous",
    "meaning": "adj 谄媚的;过分殷勤的"
  },
  {
    "word": "undaunted",
    "meaning": "adj 无畏的;勇敢的"
  },
  {
    "word": "under",
    "meaning": "prep 在...之下 adv.在下面"
  },
  {
    "word": "undercurrent",
    "meaning": "n 暗流;潜流"
  },
  {
    "word": "underdog",
    "meaning": "n 失败者;弱者"
  },
  {
    "word": "underline",
    "meaning": "v 强调;在...下划线"
  },
  {
    "word": "underlying",
    "meaning": "adj 潜在的;根本的"
  },
  {
    "word": "undermine",
    "meaning": "v 破坏;侵蚀"
  },
  {
    "word": "underneath",
    "meaning": "prep 在...下面 adv.在下面"
  },
  {
    "word": "underpants",
    "meaning": "n 内裤;内衣"
  },
  {
    "word": "underscore",
    "meaning": "v 强调;在...下划线"
  },
  {
    "word": "undershirt",
    "meaning": "n 汗衫;内衣"
  },
  {
    "word": "understand",
    "meaning": "v 理解;懂得"
  },
  {
    "word": "understanding",
    "meaning": "n 理解;理解力"
  },
  {
    "word": "understate",
    "meaning": "v 轻描淡写;低估"
  },
  {
    "word": "understatement",
    "meaning": "n 轻描淡写;保守的陈述"
  },
  {
    "word": "understood",
    "meaning": "adj 被理解的;被听说的"
  },
  {
    "word": "undertake",
    "meaning": "v 承担;从事"
  },
  {
    "word": "undertaking",
    "meaning": "n 承担;任务"
  },
  {
    "word": "underwood",
    "meaning": "n 灌木林;下层林"
  },
  {
    "word": "underworld",
    "meaning": "n 阴间;犯罪集团"
  },
  {
    "word": "undesirable",
    "meaning": "adj 不受欢迎的 n.不受欢迎的人"
  },
  {
    "word": "undo",
    "meaning": "v 取消;解开"
  },
  {
    "word": "undoing",
    "meaning": "n 取消;解体"
  },
  {
    "word": "undoubted",
    "meaning": "adj 无疑问的;确定的"
  },
  {
    "word": "undress",
    "meaning": "v 脱衣 n.女装;服装"
  },
  {
    "word": "undue",
    "meaning": "adj 不适当的;过分的"
  },
  {
    "word": "undying",
    "meaning": "adj 不死的;不朽的"
  },
  {
    "word": "unearth",
    "meaning": "v 发掘;发现"
  },
  {
    "word": "unearthly",
    "meaning": "adj 超自然的;非尘世的"
  },
  {
    "word": "unemployment",
    "meaning": "n 失业;失业率"
  },
  {
    "word": "uneven",
    "meaning": "adj 不平坦的;不均匀的"
  },
  {
    "word": "uneventful",
    "meaning": "adj 平静的;无重大事件的"
  },
  {
    "word": "unfair",
    "meaning": "adj 不公平的;不公正的"
  },
  {
    "word": "unfaithful",
    "meaning": "adj 不忠实的;不忠诚的"
  },
  {
    "word": "unfamiliar",
    "meaning": "adj 不熟悉的;陌生的"
  },
  {
    "word": "unfavorable",
    "meaning": "adj 不利的;不赞成的"
  },
  {
    "word": "unfold",
    "meaning": "v 展开;发展"
  },
  {
    "word": "unforeseen",
    "meaning": "adj 未预见到的;意外的"
  },
  {
    "word": "unfriendly",
    "meaning": "adj 不友好的;敌对的"
  },
  {
    "word": "unfrock",
    "meaning": "v 脱去法衣;剥夺圣职"
  },
  {
    "word": "unfurl",
    "meaning": "v 展开;打开"
  },
  {
    "word": "ungovernable",
    "meaning": "adj 难驾驭的;难控制的"
  },
  {
    "word": "ungrateful",
    "meaning": "adj 忘恩负义的;不领情的"
  },
  {
    "word": "unguarded",
    "meaning": "adj 无防备的;不小心的"
  },
  {
    "word": "unguent",
    "meaning": "n 药膏;油膏"
  },
  {
    "word": "unhinge",
    "meaning": "v 使铰链松脱"
  },
  {
    "word": "unholy",
    "meaning": "adj 邪恶的;不神圣的"
  },
  {
    "word": "unicorn",
    "meaning": "n 独角兽;麒麟"
  },
  {
    "word": "unification",
    "meaning": "n 统一;一致"
  },
  {
    "word": "uniform",
    "meaning": "adj 一致的 n.制服"
  },
  {
    "word": "uniformity",
    "meaning": "n 一致;均匀"
  },
  {
    "word": "unify",
    "meaning": "v 统一;使相同"
  },
  {
    "word": "unilateral",
    "meaning": "adj 单方面的;单边的"
  },
  {
    "word": "unimpeachable",
    "meaning": "adj 无可指责的;无瑕疵的"
  },
  {
    "word": "uninhibited",
    "meaning": "adj 无拘无束的;放荡的"
  },
  {
    "word": "uninspired",
    "meaning": "adj 无灵感的;缺乏创造力的"
  },
  {
    "word": "unintelligible",
    "meaning": "adj 难以理解的;不清楚的"
  },
  {
    "word": "unintended",
    "meaning": "adj 非故意的;无意的"
  },
  {
    "word": "uninterrupted",
    "meaning": "adj 不断的;连续的"
  },
  {
    "word": "union",
    "meaning": "n 联合;联盟"
  },
  {
    "word": "unique",
    "meaning": "adj 独特的;独一无二的"
  },
  {
    "word": "unison",
    "meaning": "n 一致;和谐"
  },
  {
    "word": "unit",
    "meaning": "n 单位;单元"
  },
  {
    "word": "unite",
    "meaning": "v 联合;团结"
  },
  {
    "word": "united",
    "meaning": "adj 团结的;统一的"
  },
  {
    "word": "unity",
    "meaning": "n 统一;一致"
  },
  {
    "word": "universal",
    "meaning": "adj 普遍的;通用的"
  },
  {
    "word": "universe",
    "meaning": "n 宇宙;世界"
  },
  {
    "word": "university",
    "meaning": "n 大学;高等学府"
  },
  {
    "word": "unjust",
    "meaning": "adj 不公平的;不公正的"
  },
  {
    "word": "unkempt",
    "meaning": "adj 未修剪的;蓬乱的"
  },
  {
    "word": "unkind",
    "meaning": "adj 不仁慈的;不友好的"
  },
  {
    "word": "unleash",
    "meaning": "v 释放;解开"
  },
  {
    "word": "unlettered",
    "meaning": "adj 未受教育的;文盲的"
  },
  {
    "word": "unlike",
    "meaning": "adj 不同的 prep.和...不同"
  },
  {
    "word": "unlikely",
    "meaning": "adj 不太可能的;不合适的"
  },
  {
    "word": "unlimited",
    "meaning": "adj 无限的;无限制的"
  },
  {
    "word": "unload",
    "meaning": "v 卸货;摆脱"
  },
  {
    "word": "unlucky",
    "meaning": "adj 不幸的;倒霉的"
  },
  {
    "word": "unmake",
    "meaning": "v 取消;撤销"
  },
  {
    "word": "unman",
    "meaning": "v 剥夺男子气概;使成为懦夫"
  },
  {
    "word": "unmarked",
    "meaning": "adj 无标记的;无特色的"
  },
  {
    "word": "unmask",
    "meaning": "v 揭露;暴露"
  },
  {
    "word": "unmatched",
    "meaning": "adj 无敌的;无双的"
  },
  {
    "word": "unnatural",
    "meaning": "adj 不自然的;不近人情的"
  },
  {
    "word": "unnerve",
    "meaning": "v 使失去勇气;使不安"
  },
  {
    "word": "unpack",
    "meaning": "v 打开包裹;卸下"
  },
  {
    "word": "unparalleled",
    "meaning": "adj 无比的;空前的"
  },
  {
    "word": "unpleasant",
    "meaning": "adj 使人不愉快的;讨厌的"
  },
  {
    "word": "unpopular",
    "meaning": "adj 不受欢迎的;不流行的"
  },
  {
    "word": "unprecedented",
    "meaning": "adj 空前的;无前例的"
  },
  {
    "word": "unpredictable",
    "meaning": "adj 无法预测的;不可预料的"
  },
  {
    "word": "unprejudiced",
    "meaning": "adj 无偏见的;公平的"
  },
  {
    "word": "unpretentious",
    "meaning": "adj 不炫耀的;不矫揉造作的"
  },
  {
    "word": "unprincipled",
    "meaning": "adj 无原则的;不道德的"
  },
  {
    "word": "unprofitable",
    "meaning": "adj 无利可图的;无益处的"
  },
  {
    "word": "unprotected",
    "meaning": "adj 无保护的;未受保护的"
  },
  {
    "word": "unravel",
    "meaning": "v 解开;解决"
  },
  {
    "word": "unreal",
    "meaning": "adj 不真实的;不现实的"
  },
  {
    "word": "unrealistic",
    "meaning": "adj 不切实际的;不实在的"
  },
  {
    "word": "unreason",
    "meaning": "n 无理性;失去理智"
  },
  {
    "word": "unreasonable",
    "meaning": "adj 不合理的;过度的"
  },
  {
    "word": "unrelenting",
    "meaning": "adj 不懈的;不屈不挠的"
  },
  {
    "word": "unreliable",
    "meaning": "adj 不可靠的;不可信赖的"
  },
  {
    "word": "unrest",
    "meaning": "n 不安;动荡"
  },
  {
    "word": "unrestrained",
    "meaning": "adj 无节制的;无限制的"
  },
  {
    "word": "unripe",
    "meaning": "adj 未成熟的;未煮过的"
  },
  {
    "word": "unrivaled",
    "meaning": "adj 无敌的;无双的"
  },
  {
    "word": "unroll",
    "meaning": "v 展开;滚动"
  },
  {
    "word": "unruly",
    "meaning": "adj 难驾驭的;不守规矩的"
  },
  {
    "word": "unsaddle",
    "meaning": "v 卸下马鞍;使下马"
  },
  {
    "word": "unscathed",
    "meaning": "adj 未受伤的;未受损害的"
  },
  {
    "word": "unscrupulous",
    "meaning": "adj 无道德的;不择手段的"
  },
  {
    "word": "unseat",
    "meaning": "v 推翻;使下台"
  },
  {
    "word": "unseemly",
    "meaning": "adj 不适当的;不适宜的"
  },
  {
    "word": "unset",
    "meaning": "n 日落 v.日落"
  },
  {
    "word": "unset",
    "meaning": "n 日落;傍晚"
  },
  {
    "word": "unshakable",
    "meaning": "adj 坚定不移的;不可动摇的"
  },
  {
    "word": "unsocial",
    "meaning": "adj 不好社交的;不友好的"
  },
  {
    "word": "unsophisticated",
    "meaning": "adj 未开化的;单纯的"
  },
  {
    "word": "unsought",
    "meaning": "adj 未被寻求的;未被要求的"
  },
  {
    "word": "unsound",
    "meaning": "adj 不健康的;不稳固的"
  },
  {
    "word": "unspeakable",
    "meaning": "adj 难以言表的;说不出口的"
  },
  {
    "word": "unspecific",
    "meaning": "adj 不具体的;不明确的"
  },
  {
    "word": "unstable",
    "meaning": "adj 不稳定的;不稳固的"
  },
  {
    "word": "unstated",
    "meaning": "adj 未声明的;未说明的"
  },
  {
    "word": "unsteady",
    "meaning": "adj 不稳定的;不稳固的"
  },
  {
    "word": "unstop",
    "meaning": "v 停止;阻止"
  },
  {
    "word": "unstoppable",
    "meaning": "adj 无法停止的;不可遏止的"
  },
  {
    "word": "unsubstantial",
    "meaning": "adj 无实质的;不实在的"
  },
  {
    "word": "unsuitable",
    "meaning": "adj 不适当的;不适宜的"
  },
  {
    "word": "unsung",
    "meaning": "adj 未被歌颂的;未被赞扬的"
  },
  {
    "word": "unswerving",
    "meaning": "adj 坚定不移的;不动摇的"
  },
  {
    "word": "untamed",
    "meaning": "adj 未被驯服的;野生的"
  },
  {
    "word": "untenable",
    "meaning": "adj 站不住脚的;守不住的"
  },
  {
    "word": "unthinkable",
    "meaning": "adj 难以想象的;不可思议的"
  },
  {
    "word": "untidy",
    "meaning": "adj 凌乱的;不整洁的"
  },
  {
    "word": "untimely",
    "meaning": "adj 不合时宜的;过早的"
  },
  {
    "word": "untiring",
    "meaning": "adj 不疲倦的;不懈怠的"
  },
  {
    "word": "unto",
    "meaning": "prep 直到;直到"
  },
  {
    "word": "untold",
    "meaning": "adj 未被讲述的;未说出的"
  },
  {
    "word": "untouchable",
    "meaning": "adj 碰不得的;不可接触的"
  },
  {
    "word": "untouched",
    "meaning": "adj 未被触及的;未受影响的"
  },
  {
    "word": "untoward",
    "meaning": "adj 不易控制的;不听话的"
  },
  {
    "word": "untrained",
    "meaning": "adj 未经训练的;未经培养的"
  },
  {
    "word": "untreated",
    "meaning": "adj 未处理的;未治疗的"
  },
  {
    "word": "untried",
    "meaning": "adj 未经试验的;未经审理的"
  },
  {
    "word": "untrue",
    "meaning": "adj 不真实的;不忠实的"
  },
  {
    "word": "untruth",
    "meaning": "n 谎言;不真实"
  },
  {
    "word": "unused",
    "meaning": "adj 未使用的;不习惯的"
  },
  {
    "word": "unusual",
    "meaning": "adj 不寻常的;与众不同的"
  },
  {
    "word": "unveil",
    "meaning": "v 揭开;揭示"
  },
  {
    "word": "unvoiced",
    "meaning": "adj 未发表的;未表达的"
  },
  {
    "word": "unwarranted",
    "meaning": "adj 无根据的;无理由的"
  },
  {
    "word": "unwed",
    "meaning": "adj 未婚的;未结婚的"
  },
  {
    "word": "unwelcome",
    "meaning": "adj 不受欢迎的;不想要的"
  },
  {
    "word": "unwell",
    "meaning": "adj 不舒服的;生病的"
  },
  {
    "word": "unwieldy",
    "meaning": "adj 笨重的;难处理的"
  },
  {
    "word": "unwilling",
    "meaning": "adj 不愿意的;不情愿的"
  },
  {
    "word": "unwind",
    "meaning": "v 放松;解开"
  },
  {
    "word": "unwise",
    "meaning": "adj 不明智的;不聪明的"
  },
  {
    "word": "unwitting",
    "meaning": "adj 不知情的;非故意的"
  },
  {
    "word": "unwonted",
    "meaning": "adj 不寻常的;不习惯的"
  },
  {
    "word": "unworldly",
    "meaning": "adj 非世俗的;超脱的"
  },
  {
    "word": "unworthy",
    "meaning": "adj 不值得的;不配的"
  },
  {
    "word": "unwrap",
    "meaning": "v 解开包装;拆封"
  },
  {
    "word": "up",
    "meaning": "adv 向上;在上"
  },
  {
    "word": "upbringing",
    "meaning": "n 养育;教育"
  },
  {
    "word": "update",
    "meaning": "v 更新;使现代化"
  },
  {
    "word": "upgrade",
    "meaning": "n 升级 v.升级"
  },
  {
    "word": "uphold",
    "meaning": "v 支持;维护"
  },
  {
    "word": "upland",
    "meaning": "n 高地;山区"
  },
  {
    "word": "uplift",
    "meaning": "v 抬起;鼓舞"
  },
  {
    "word": "upon",
    "meaning": "prep 在...上面"
  },
  {
    "word": "upper",
    "meaning": "adj 上部的;较高的"
  },
  {
    "word": "upright",
    "meaning": "adj 直立的;正直的"
  },
  {
    "word": "uprising",
    "meaning": "n 起义;暴动"
  },
  {
    "word": "upset",
    "meaning": "v 扰乱;使心烦"
  },
  {
    "word": "upshot",
    "meaning": "n 结果;要点"
  },
  {
    "word": "upstairs",
    "meaning": "adv 楼上;在上"
  },
  {
    "word": "upstream",
    "meaning": "adv 逆流地;向上游"
  },
  {
    "word": "uptake",
    "meaning": "n 摄取量;接受"
  },
  {
    "word": "up-to-date",
    "meaning": "adj 最新的;现代的"
  },
  {
    "word": "upturn",
    "meaning": "n 好转;上升趋势"
  },
  {
    "word": "upward",
    "meaning": "adj 向上的 adv.向上地"
  },
  {
    "word": "urban",
    "meaning": "adj 城市的;都市的"
  },
  {
    "word": "urge",
    "meaning": "v 敦促;强烈欲望"
  },
  {
    "word": "urgency",
    "meaning": "n 紧急;催促"
  },
  {
    "word": "urgent",
    "meaning": "adj 紧急的;紧迫的"
  },
  {
    "word": "urine",
    "meaning": "n 尿;尿液"
  },
  {
    "word": "urn",
    "meaning": "n 瓮;骨灰瓮"
  },
  {
    "word": "usable",
    "meaning": "adj 可用的;合用的"
  },
  {
    "word": "use",
    "meaning": "n 利用 v.利用"
  },
  {
    "word": "used",
    "meaning": "adj 用过的;二手的"
  },
  {
    "word": "useful",
    "meaning": "adj 有用的;有益的"
  },
  {
    "word": "useless",
    "meaning": "adj 无用的;无效的"
  },
  {
    "word": "usher",
    "meaning": "n 引座员;招待员"
  },
  {
    "word": "usual",
    "meaning": "adj 通常的;平常的"
  },
  {
    "word": "usurp",
    "meaning": "v 篡夺;霸占"
  },
  {
    "word": "usury",
    "meaning": "n 高利贷;放债"
  },
  {
    "word": "utensil",
    "meaning": "n 用具;器具"
  },
  {
    "word": "utilize",
    "meaning": "v 利用;使用"
  },
  {
    "word": "utmost",
    "meaning": "adj 最极度的 n.极限"
  },
  {
    "word": "utter",
    "meaning": "adj 完全的 v.发出"
  },
  {
    "word": "utterance",
    "meaning": "n 发言;说话"
  },
  {
    "word": "vacant",
    "meaning": "adj 空的;未被占用的"
  },
  {
    "word": "vacate",
    "meaning": "v 腾出;撤离"
  },
  {
    "word": "vacation",
    "meaning": "n 假期;休假"
  },
  {
    "word": "vaccination",
    "meaning": "n 接种疫苗"
  },
  {
    "word": "vaccine",
    "meaning": "n 疫苗;菌苗"
  },
  {
    "word": "vacillate",
    "meaning": "v 犹豫;摇摆"
  },
  {
    "word": "vacuum",
    "meaning": "n 真空;空虚"
  },
  {
    "word": "vagabond",
    "meaning": "n 流浪者;游手好闲者"
  },
  {
    "word": "vagrant",
    "meaning": "adj 流浪的 n.流浪者"
  },
  {
    "word": "vague",
    "meaning": "adj 含糊的;不明确的"
  },
  {
    "word": "vain",
    "meaning": "adj 徒劳的;自负的"
  },
  {
    "word": "vainly",
    "meaning": "adv 徒劳地;无效地"
  },
  {
    "word": "valet",
    "meaning": "n 贴身男仆;服务员"
  },
  {
    "word": "valiant",
    "meaning": "adj 勇敢的;英勇的"
  },
  {
    "word": "valiantly",
    "meaning": "adv 勇敢地;英勇地"
  },
  {
    "word": "valley",
    "meaning": "n 谷;流域"
  },
  {
    "word": "valor",
    "meaning": "n 英勇;勇气"
  },
  {
    "word": "valuable",
    "meaning": "adj 贵重的;有价值的"
  },
  {
    "word": "valuation",
    "meaning": "n 评价;估价"
  },
  {
    "word": "value",
    "meaning": "n 价值;估价 v.估价"
  },
  {
    "word": "vampire",
    "meaning": "n 吸血鬼;吸血者"
  },
  {
    "word": "van",
    "meaning": "n 货车;篷车"
  },
  {
    "word": "vandalism",
    "meaning": "n 恣意破坏"
  },
  {
    "word": "vane",
    "meaning": "n 风向标;指示器"
  },
  {
    "word": "vanish",
    "meaning": "v 消失;消散"
  },
  {
    "word": "vanity",
    "meaning": "n 虚荣心;虚荣"
  },
  {
    "word": "vanquish",
    "meaning": "v 征服;克服"
  },
  {
    "word": "vantage",
    "meaning": "n 优势;有利条件"
  },
  {
    "word": "vapid",
    "meaning": "adj 无味的;不感兴趣的"
  },
  {
    "word": "vapor",
    "meaning": "n 水蒸气;烟雾"
  },
  {
    "word": "variable",
    "meaning": "adj 可变的 n.变量"
  },
  {
    "word": "variation",
    "meaning": "n 变化;变体"
  },
  {
    "word": "varied",
    "meaning": "adj 不同的;变化的"
  },
  {
    "word": "variegate",
    "meaning": "v 使多样化;使斑斓"
  },
  {
    "word": "variety",
    "meaning": "n 多样性;种类"
  },
  {
    "word": "various",
    "meaning": "adj 各种各样的;不同的"
  },
  {
    "word": "varnish",
    "meaning": "n 清漆;光泽 v.上清漆"
  },
  {
    "word": "vary",
    "meaning": "v 变化;改变"
  },
  {
    "word": "vascular",
    "meaning": "adj 血管的;含血管的"
  },
  {
    "word": "vase",
    "meaning": "n 花瓶;装饰瓶"
  },
  {
    "word": "vassal",
    "meaning": "n 附庸;封臣"
  },
  {
    "word": "vast",
    "meaning": "adj 广阔的;巨大的"
  },
  {
    "word": "vastly",
    "meaning": "adv 极大地;非常地"
  },
  {
    "word": "vastness",
    "meaning": "n 广阔;广大"
  },
  {
    "word": "vat",
    "meaning": "n 大桶;瓮"
  },
  {
    "word": "vault",
    "meaning": "n 拱顶;地下室"
  },
  {
    "word": "vaulting",
    "meaning": "n 穹顶;跳跃"
  },
  {
    "word": "veal",
    "meaning": "v 揭露;展现"
  },
  {
    "word": "vector",
    "meaning": "n 向量;矢量"
  },
  {
    "word": "veer",
    "meaning": "v 转向;改变方向"
  },
  {
    "word": "vegetable",
    "meaning": "n 蔬菜;植物"
  },
  {
    "word": "vegetarian",
    "meaning": "n 素食者 adj.素食的"
  },
  {
    "word": "vegetation",
    "meaning": "n 植被;植物"
  },
  {
    "word": "vehement",
    "meaning": "adj 激烈的;热烈的"
  },
  {
    "word": "vehicle",
    "meaning": "n 车辆;工具"
  },
  {
    "word": "veil",
    "meaning": "n 面纱;遮蔽物 v.遮蔽"
  },
  {
    "word": "vein",
    "meaning": "n 静脉;纹理"
  },
  {
    "word": "veined",
    "meaning": "adj 有纹理的;有脉络的"
  },
  {
    "word": "vellum",
    "meaning": "n 小牛皮纸;精制犊皮纸"
  },
  {
    "word": "velocity",
    "meaning": "n 速度;速率"
  },
  {
    "word": "velvet",
    "meaning": "n 天鹅绒;天鹅绒"
  },
  {
    "word": "velvety",
    "meaning": "adj 天鹅绒的;柔软的"
  },
  {
    "word": "venal",
    "meaning": "adj 贪污的;受贿的"
  },
  {
    "word": "vendetta",
    "meaning": "n 深仇;宿怨"
  },
  {
    "word": "vendor",
    "meaning": "n 卖主;商人"
  },
  {
    "word": "veneer",
    "meaning": "n 饰面;外表 v.贴面"
  },
  {
    "word": "venerable",
    "meaning": "adj 可敬的;值得尊敬的"
  },
  {
    "word": "veneration",
    "meaning": "n 尊敬;崇敬"
  },
  {
    "word": "venereal",
    "meaning": "adj 性病的;性交的"
  },
  {
    "word": "vengeful",
    "meaning": "adj 复仇心重的;报复的"
  },
  {
    "word": "venom",
    "meaning": "n 毒液;恶意"
  },
  {
    "word": "venomous",
    "meaning": "adj 有毒的;恶意的"
  },
  {
    "word": "vent",
    "meaning": "n 通风口;排放"
  },
  {
    "word": "ventilate",
    "meaning": "v 通风;使空气流通"
  },
  {
    "word": "ventilation",
    "meaning": "n 通风;通气"
  },
  {
    "word": "venturous",
    "meaning": "adj 冒险的;大胆的"
  },
  {
    "word": "venture",
    "meaning": "n 冒险 v.冒险"
  },
  {
    "word": "venue",
    "meaning": "n 地点;发生地"
  },
  {
    "word": "veranda",
    "meaning": "n 阳台;游廊"
  },
  {
    "word": "verb",
    "meaning": "n 动词"
  },
  {
    "word": "verbal",
    "meaning": "adj 口头的;文字的"
  },
  {
    "word": "verbatim",
    "meaning": "adj 逐字的;照字面的"
  },
  {
    "word": "verbiage",
    "meaning": "n 冗长而无聊的话"
  },
  {
    "word": "verbose",
    "meaning": "adj 冗长的;啰嗦的"
  },
  {
    "word": "verbosity",
    "meaning": "n 啰嗦;冗长"
  },
  {
    "word": "verdant",
    "meaning": "adj 青翠的;新鲜的"
  },
  {
    "word": "verdict",
    "meaning": "n 裁决;定论"
  },
  {
    "word": "verge",
    "meaning": "n 边缘 v.接近"
  },
  {
    "word": "verifiable",
    "meaning": "adj 可验证的;确实的"
  },
  {
    "word": "verification",
    "meaning": "n 验证;核实"
  },
  {
    "word": "verify",
    "meaning": "v 证实;证明"
  },
  {
    "word": "veritable",
    "meaning": "adj 真正的;确实的"
  },
  {
    "word": "verity",
    "meaning": "n 真实;真理"
  },
  {
    "word": "vermin",
    "meaning": "n 害虫;寄生虫"
  },
  {
    "word": "vernacular",
    "meaning": "n 本地话;行话"
  },
  {
    "word": "vernal",
    "meaning": "adj 春季的;温暖的"
  },
  {
    "word": "versatile",
    "meaning": "adj 多才多艺的;多功能的"
  },
  {
    "word": "verse",
    "meaning": "n 诗;韵文"
  },
  {
    "word": "versed",
    "meaning": "adj 熟练的;精通的"
  },
  {
    "word": "version",
    "meaning": "n 版本;译文"
  },
  {
    "word": "versus",
    "meaning": "prep 对着;对抗"
  },
  {
    "word": "vertigo",
    "meaning": "n 眩晕;头晕"
  },
  {
    "word": "verve",
    "meaning": "n 热情;精神"
  },
  {
    "word": "vessel",
    "meaning": "n 船;容器"
  },
  {
    "word": "vest",
    "meaning": "n 背心;汗衫"
  },
  {
    "word": "vestige",
    "meaning": "n 遗迹;痕迹"
  },
  {
    "word": "vestige",
    "meaning": "n 遗迹;痕迹"
  },
  {
    "word": "vestment",
    "meaning": "n 官服;法衣"
  },
  {
    "word": "vet",
    "meaning": "n 退伍军人 v.审查"
  },
  {
    "word": "veteran",
    "meaning": "n 老兵;老手"
  },
  {
    "word": "veterinary",
    "meaning": "adj 兽医的 n.兽医"
  },
  {
    "word": "veto",
    "meaning": "n 否决;禁止 v.否决"
  },
  {
    "word": "via",
    "meaning": "prep 通过;经由"
  },
  {
    "word": "viable",
    "meaning": "adj 可行的;能生存的"
  },
  {
    "word": "vibrant",
    "meaning": "adj 振动的;充满生机的"
  },
  {
    "word": "vibrate",
    "meaning": "v 振动;摇摆"
  },
  {
    "word": "vibration",
    "meaning": "n 振动;摆动"
  },
  {
    "word": "vicar",
    "meaning": "n 教区牧师;副牧师"
  },
  {
    "word": "vicarious",
    "meaning": "adj 代理的;间接的"
  },
  {
    "word": "vice",
    "meaning": "n 恶习;缺点"
  },
  {
    "word": "vicinity",
    "meaning": "n 附近;邻近"
  },
  {
    "word": "vicious",
    "meaning": "adj 邪恶的;恶意的"
  },
  {
    "word": "victim",
    "meaning": "n 受害者;牺牲品"
  },
  {
    "word": "victorious",
    "meaning": "adj 胜利的;凯旋的"
  },
  {
    "word": "victory",
    "meaning": "n 胜利;成功"
  },
  {
    "word": "video",
    "meaning": "n 视频;录像"
  },
  {
    "word": "vie",
    "meaning": "v 竞争;争夺"
  },
  {
    "word": "vigil",
    "meaning": "n 守夜;警戒"
  },
  {
    "word": "vigilant",
    "meaning": "adj 警惕的;警醒的"
  },
  {
    "word": "vigor",
    "meaning": "n 活力;力量"
  },
  {
    "word": "vigorous",
    "meaning": "adj 有力的;精力充沛的"
  },
  {
    "word": "vile",
    "meaning": "adj 卑鄙的;下贱的"
  },
  {
    "word": "vilify",
    "meaning": "v 诽谤;诋毁"
  },
  {
    "word": "villa",
    "meaning": "n 别墅;大厦"
  },
  {
    "word": "village",
    "meaning": "n 村庄;乡村"
  },
  {
    "word": "villager",
    "meaning": "n 村民;乡下人"
  },
  {
    "word": "vindicate",
    "meaning": "v 辩护;证明...正确"
  },
  {
    "word": "vindication",
    "meaning": "n 辩护;证明"
  },
  {
    "word": "vindictive",
    "meaning": "adj 报复性的;怀恨的"
  },
  {
    "word": "vine",
    "meaning": "n 葡萄树;藤"
  },
  {
    "word": "vinegar",
    "meaning": "n 醋;酸味"
  },
  {
    "word": "vintage",
    "meaning": "n 葡萄收获期;葡萄酒酿造年份"
  },
  {
    "word": "violate",
    "meaning": "v 违反;亵渎"
  },
  {
    "word": "violation",
    "meaning": "n 违反;侵犯"
  },
  {
    "word": "violent",
    "meaning": "adj 暴力的;猛烈的"
  },
  {
    "word": "violet",
    "meaning": "n 紫罗兰;紫色"
  },
  {
    "word": "violin",
    "meaning": "n 小提琴"
  },
  {
    "word": "virgin",
    "meaning": "n 处女;未婚女子"
  },
  {
    "word": "virginal",
    "meaning": "adj 处女的;纯洁的"
  },
  {
    "word": "virility",
    "meaning": "n 男子气概;生殖力"
  },
  {
    "word": "virtue",
    "meaning": "n 美德;优点"
  },
  {
    "word": "virtuosity",
    "meaning": "n 高超技巧;精湛技艺"
  },
  {
    "word": "virtuoso",
    "meaning": "n 艺术大师;专家"
  },
  {
    "word": "virtuous",
    "meaning": "adj 有美德的;贞洁的"
  },
  {
    "word": "virulence",
    "meaning": "n 恶意;毒力"
  },
  {
    "word": "virulent",
    "meaning": "adj 恶意的;剧毒的"
  },
  {
    "word": "virus",
    "meaning": "n 病毒;病毒性疾病"
  },
  {
    "word": "visa",
    "meaning": "n 签证;许可证"
  },
  {
    "word": "visage",
    "meaning": "n 面貌;面孔"
  },
  {
    "word": "viscosity",
    "meaning": "n 粘度;粘性"
  },
  {
    "word": "viscous",
    "meaning": "adj 粘性的;粘的"
  },
  {
    "word": "vise",
    "meaning": "n 钳子;老虎钳"
  },
  {
    "word": "visibility",
    "meaning": "n 可见性;能见度"
  },
  {
    "word": "visible",
    "meaning": "adj 可见的;看得见的"
  },
  {
    "word": "vision",
    "meaning": "n 视觉;幻想"
  },
  {
    "word": "visionary",
    "meaning": "adj 空想的;有远见的"
  },
  {
    "word": "visit",
    "meaning": "v 访问;参观"
  },
  {
    "word": "visitation",
    "meaning": "n 访问;探望"
  },
  {
    "word": "visitor",
    "meaning": "n 访问者;游客"
  },
  {
    "word": "visor",
    "meaning": "n 帽舌;遮阳板"
  },
  {
    "word": "vista",
    "meaning": "n 远景;展望"
  },
  {
    "word": "vitality",
    "meaning": "n 活力;生命力"
  },
  {
    "word": "vitalization",
    "meaning": "n 激活;刺激"
  },
  {
    "word": "vitalize",
    "meaning": "v 激发;赋予生命"
  },
  {
    "word": "vitally",
    "meaning": "adv 生死攸关地;根本地"
  },
  {
    "word": "vitamin",
    "meaning": "n 维生素;维他命"
  },
  {
    "word": "vitiate",
    "meaning": "v 恶化;腐败"
  },
  {
    "word": "vitriolic",
    "meaning": "adj 刻薄的;腐蚀性的"
  },
  {
    "word": "vituperation",
    "meaning": "n 痛骂;非难"
  },
  {
    "word": "vivacious",
    "meaning": "adj 活泼的;生动的"
  },
  {
    "word": "vivacity",
    "meaning": "n 活泼;生动"
  },
  {
    "word": "vivid",
    "meaning": "adj 生动的;鲜明的"
  },
  {
    "word": "vocabulary",
    "meaning": "n 词汇;词汇量"
  },
  {
    "word": "vocal",
    "meaning": "adj 声音的;歌唱的"
  },
  {
    "word": "vocalist",
    "meaning": "n 声乐家;歌手"
  },
  {
    "word": "vocation",
    "meaning": "n 职业;天职"
  },
  {
    "word": "vociferous",
    "meaning": "adj 大声疾呼的;喧哗的"
  },
  {
    "word": "vogue",
    "meaning": "n 流行;时尚"
  },
  {
    "word": "voice",
    "meaning": "n 声音;发言权"
  },
  {
    "word": "voiceless",
    "meaning": "adj 无声的;无发言权的"
  },
  {
    "word": "void",
    "meaning": "adj 空的 n.空间"
  },
  {
    "word": "volatile",
    "meaning": "adj 挥发性的;不稳定的"
  },
  {
    "word": "volatility",
    "meaning": "n 挥发性;不稳定性"
  },
  {
    "word": "volcanic",
    "meaning": "adj 火山的;猛烈的"
  },
  {
    "word": "volcano",
    "meaning": "n 火山"
  },
  {
    "word": "volition",
    "meaning": "n 意志力;决断力"
  },
  {
    "word": "voluble",
    "meaning": "adj 健谈的;流利的"
  },
  {
    "word": "volley",
    "meaning": "n 齐射;排炮"
  },
  {
    "word": "volt",
    "meaning": "n 伏特（电压单位）"
  },
  {
    "word": "voltage",
    "meaning": "n 电压"
  },
  {
    "word": "volume",
    "meaning": "n 体积;卷"
  },
  {
    "word": "voluminous",
    "meaning": "adj 卷数多的;大量的"
  },
  {
    "word": "voluntarily",
    "meaning": "adv 自愿地;自动地"
  },
  {
    "word": "voluntary",
    "meaning": "adj 自愿的;自发的"
  },
  {
    "word": "volunteer",
    "meaning": "n 志愿者 v.自愿"
  },
  {
    "word": "voluptuous",
    "meaning": "adj 沉溺的;奢侈的"
  },
  {
    "word": "vomit",
    "meaning": "v 呕吐 n.呕吐物"
  },
  {
    "word": "voodoo",
    "meaning": "n 伏都教;巫术"
  },
  {
    "word": "voter",
    "meaning": "n 投票人;选举人"
  },
  {
    "word": "vouch",
    "meaning": "v 保证;担保"
  },
  {
    "word": "voucher",
    "meaning": "n 保证人;凭证"
  },
  {
    "word": "vow",
    "meaning": "n 誓约;誓言 v.发誓"
  },
  {
    "word": "vowel",
    "meaning": "n 元音;元音字母"
  },
  {
    "word": "voyage",
    "meaning": "n 航行;旅行"
  },
  {
    "word": "vulgar",
    "meaning": "adj 粗俗的;通俗的"
  },
  {
    "word": "vulnerable",
    "meaning": "adj 易受伤害的;脆弱的"
  },
  {
    "word": "vulpine",
    "meaning": "adj 狐狸的;狡猾的"
  },
  {
    "word": "wade",
    "meaning": "v 涉水;跋涉"
  },
  {
    "word": "wage",
    "meaning": "n 工资;报酬 v.进行"
  },
  {
    "word": "wager",
    "meaning": "n 赌注;赌物 v.打赌"
  },
  {
    "word": "wages",
    "meaning": "n 工资;报酬"
  },
  {
    "word": "wagon",
    "meaning": "n 四轮马车;运货汽车"
  },
  {
    "word": "wail",
    "meaning": "n 哀号;悲叹声"
  },
  {
    "word": "waist",
    "meaning": "n 腰;腰部"
  },
  {
    "word": "waive",
    "meaning": "v 放弃;让渡"
  },
  {
    "word": "waiver",
    "meaning": "n 放弃;弃权证书"
  },
  {
    "word": "wake",
    "meaning": "v 醒来;唤醒 n.守夜"
  },
  {
    "word": "waken",
    "meaning": "v 醒来;唤醒"
  },
  {
    "word": "walnut",
    "meaning": "n 胡桃;胡桃木"
  },
  {
    "word": "wander",
    "meaning": "v 漫游;偏离"
  },
  {
    "word": "wane",
    "meaning": "v 减少;衰微"
  },
  {
    "word": "waning",
    "meaning": "adj 衰弱的;临终的"
  },
  {
    "word": "wanton",
    "meaning": "adj 放纵的;不拘的"
  },
  {
    "word": "war",
    "meaning": "n 战争;斗争"
  },
  {
    "word": "warble",
    "meaning": "v 用柔和的声音唱歌"
  },
  {
    "word": "ward",
    "meaning": "n 病房;监护"
  },
  {
    "word": "warden",
    "meaning": "n 看守人;管理员"
  },
  {
    "word": "wardrobe",
    "meaning": "n 衣橱;全部服装"
  },
  {
    "word": "warehouse",
    "meaning": "n 仓库;货栈"
  },
  {
    "word": "warfare",
    "meaning": "n 战争;斗争"
  },
  {
    "word": "warlike",
    "meaning": "adj 好战的;战争的"
  },
  {
    "word": "warm",
    "meaning": "adj 温暖的;热情的"
  },
  {
    "word": "warmth",
    "meaning": "n 温暖;热情"
  },
  {
    "word": "warn",
    "meaning": "v 警告;提醒"
  },
  {
    "word": "warning",
    "meaning": "n 警告;预兆"
  },
  {
    "word": "warp",
    "meaning": "v 扭曲;弄歪 n.变形"
  },
  {
    "word": "warpath",
    "meaning": "n 战争"
  },
  {
    "word": "warrant",
    "meaning": "n 保证;根据 v.保证"
  },
  {
    "word": "warranty",
    "meaning": "n 保证;担保"
  },
  {
    "word": "warren",
    "meaning": "n 养兔场;兽穴"
  },
  {
    "word": "warrior",
    "meaning": "n 战士;勇士"
  },
  {
    "word": "wartime",
    "meaning": "n 战争时期"
  },
  {
    "word": "wary",
    "meaning": "adj 谨慎的;小心翼翼的"
  },
  {
    "word": "was",
    "meaning": "v 是（be的过去式）"
  },
  {
    "word": "wash",
    "meaning": "v 洗涤;冲刷"
  },
  {
    "word": "washout",
    "meaning": "n 冲刷;冲垮"
  },
  {
    "word": "wasp",
    "meaning": "n 黄蜂;胡蜂"
  },
  {
    "word": "waste",
    "meaning": "n 浪费 v.浪费"
  },
  {
    "word": "wasteful",
    "meaning": "adj 浪费的;无益的"
  },
  {
    "word": "wasteland",
    "meaning": "n 荒地;荒原"
  },
  {
    "word": "watch",
    "meaning": "v 观看;警戒 n.手表"
  },
  {
    "word": "watchdog",
    "meaning": "n 看门狗;监察人"
  },
  {
    "word": "watchful",
    "meaning": "adj 警惕的;注意的"
  },
  {
    "word": "watchmaker",
    "meaning": "n 钟表制造者"
  },
  {
    "word": "water",
    "meaning": "n 水 v.浇水"
  },
  {
    "word": "waterfront",
    "meaning": "n 码头;海滨"
  },
  {
    "word": "waterproof",
    "meaning": "adj 不透水的;防水的"
  },
  {
    "word": "watt",
    "meaning": "n 瓦特（电功率单位）"
  },
  {
    "word": "wave",
    "meaning": "n 波;波浪 v.挥手"
  },
  {
    "word": "wavelength",
    "meaning": "n 波长;波长"
  },
  {
    "word": "wavy",
    "meaning": "adj 波浪的;波动的"
  },
  {
    "word": "wax",
    "meaning": "n 蜡 v.增大"
  },
  {
    "word": "way",
    "meaning": "n 道路;方法"
  },
  {
    "word": "wayside",
    "meaning": "n 路边;路旁"
  },
  {
    "word": "weak",
    "meaning": "adj 弱的;淡的"
  },
  {
    "word": "weaken",
    "meaning": "v 削弱;变弱"
  },
  {
    "word": "weakness",
    "meaning": "n 弱点;软弱"
  },
  {
    "word": "wealth",
    "meaning": "n 财富;丰富"
  },
  {
    "word": "wealthy",
    "meaning": "adj 富有的 n.财富"
  },
  {
    "word": "weapon",
    "meaning": "n 武器;兵器"
  },
  {
    "word": "wear",
    "meaning": "v 穿着;磨损"
  },
  {
    "word": "weary",
    "meaning": "adj 疲倦的 v.使疲倦"
  },
  {
    "word": "weasel",
    "meaning": "n 黄鼠狼;鼬"
  },
  {
    "word": "weather",
    "meaning": "n 天气 v.风化"
  },
  {
    "word": "weave",
    "meaning": "v 织;编织"
  },
  {
    "word": "weaving",
    "meaning": "n 编织;织品"
  },
  {
    "word": "web",
    "meaning": "n 网;网状物"
  },
  {
    "word": "wed",
    "meaning": "v 结婚;娶"
  },
  {
    "word": "wedding",
    "meaning": "n 婚礼;结合"
  },
  {
    "word": "wedge",
    "meaning": "n 楔子;三角木"
  },
  {
    "word": "Wednesday",
    "meaning": "n 星期三"
  },
  {
    "word": "weed",
    "meaning": "n 杂草 v.除草"
  },
  {
    "word": "weeds",
    "meaning": "n 杂草;乱草"
  },
  {
    "word": "week",
    "meaning": "n 星期;周"
  },
  {
    "word": "weekday",
    "meaning": "n 平日;工作日"
  },
  {
    "word": "weekend",
    "meaning": "n 周末"
  },
  {
    "word": "weekly",
    "meaning": "adj 每周的"
  },
  {
    "word": "weep",
    "meaning": "v 哭泣;流泪"
  },
  {
    "word": "weigh",
    "meaning": "v 称...的重量"
  },
  {
    "word": "weight",
    "meaning": "n 重量;重压"
  },
  {
    "word": "weird",
    "meaning": "adj 古怪的;不寻常的"
  },
  {
    "word": "welcome",
    "meaning": "v 欢迎 n.欢迎"
  },
  {
    "word": "weld",
    "meaning": "v 焊接;使结合"
  },
  {
    "word": "welfare",
    "meaning": "n 福利;幸福"
  },
  {
    "word": "well",
    "meaning": "n 井;源泉"
  },
  {
    "word": "well-advised",
    "meaning": "adj 明智的;考虑周到的"
  },
  {
    "word": "went",
    "meaning": "v 去（go的过去式）"
  },
  {
    "word": "were",
    "meaning": "v 是（are的过去式）"
  },
  {
    "word": "west",
    "meaning": "n 西方 adj.西的"
  },
  {
    "word": "western",
    "meaning": "adj 西方的;西部的"
  },
  {
    "word": "wet",
    "meaning": "adj 湿的;下雨的"
  },
  {
    "word": "whack",
    "meaning": "n 重击;尝试"
  },
  {
    "word": "whale",
    "meaning": "n 鲸鱼"
  },
  {
    "word": "wharf",
    "meaning": "n 码头;停泊所"
  },
  {
    "word": "what",
    "meaning": "pron 什么;多么"
  },
  {
    "word": "whatever",
    "meaning": "pron 无论什么"
  },
  {
    "word": "whatsoever",
    "meaning": "adv 一点儿也不忘"
  },
  {
    "word": "wheat",
    "meaning": "n 小麦;小麦色"
  },
  {
    "word": "wheel",
    "meaning": "n 轮;车轮"
  },
  {
    "word": "where",
    "meaning": "adv 在哪里"
  },
  {
    "word": "whereabouts",
    "meaning": "adv 在哪里;大约"
  },
  {
    "word": "whereas",
    "meaning": "conj 然而;但是"
  },
  {
    "word": "whereby",
    "meaning": "adv 借以;靠哪个"
  },
  {
    "word": "wherefore",
    "meaning": "adv 为什么"
  },
  {
    "word": "wherein",
    "meaning": "adv 在哪里"
  },
  {
    "word": "whereupon",
    "meaning": "conj 于是;鉴于"
  },
  {
    "word": "wherever",
    "meaning": "conj 无论在哪里"
  },
  {
    "word": "wherewith",
    "meaning": "adv 用什么东西"
  },
  {
    "word": "wherewithal",
    "meaning": "n 手段;工具"
  },
  {
    "word": "whet",
    "meaning": "v 刺激;磨快"
  },
  {
    "word": "whether",
    "meaning": "conj 是否"
  },
  {
    "word": "which",
    "meaning": "pron 哪一个;哪一些"
  },
  {
    "word": "whichever",
    "meaning": "pron 无论哪一个"
  },
  {
    "word": "while",
    "meaning": "conj 当...的时候"
  },
  {
    "word": "whilst",
    "meaning": "conj 在...的时候"
  },
  {
    "word": "whip",
    "meaning": "n 鞭子 v.鞭打"
  },
  {
    "word": "whirl",
    "meaning": "v 旋转;急转"
  },
  {
    "word": "whisk",
    "meaning": "v 搅打;拂"
  },
  {
    "word": "whisper",
    "meaning": "v 耳语;低语"
  },
  {
    "word": "whistle",
    "meaning": "n 口哨;汽笛"
  },
  {
    "word": "white",
    "meaning": "n 白色 adj.白的"
  },
  {
    "word": "whiten",
    "meaning": "v 漂白;变白"
  },
  {
    "word": "whitewash",
    "meaning": "v 粉刷;掩饰"
  },
  {
    "word": "whittle",
    "meaning": "v 削;削减"
  },
  {
    "word": "whiz",
    "meaning": "v 呼呼声;疾驰而过"
  },
  {
    "word": "who",
    "meaning": "pron 谁"
  },
  {
    "word": "whoever",
    "meaning": "pron 无论谁"
  },
  {
    "word": "whole",
    "meaning": "adj 整个的 n.整体"
  },
  {
    "word": "wholesome",
    "meaning": "adj 有益健康的;有益的"
  },
  {
    "word": "wholly",
    "meaning": "adv 完全地;全部"
  },
  {
    "word": "whom",
    "meaning": "pron 谁（宾格）"
  },
  {
    "word": "whomever",
    "meaning": "pron 无论谁"
  },
  {
    "word": "whoop",
    "meaning": "v 大叫;欢呼"
  },
  {
    "word": "whose",
    "meaning": "adj 谁的;哪个人的"
  },
  {
    "word": "why",
    "meaning": "adv /conj.为什么"
  },
  {
    "word": "wick",
    "meaning": "n 灯芯;烛芯"
  },
  {
    "word": "wicked",
    "meaning": "adj 邪恶的;恶作剧的"
  },
  {
    "word": "wicker",
    "meaning": "n 柳条;编织篮"
  },
  {
    "word": "wide",
    "meaning": "adj 宽的;广泛的"
  },
  {
    "word": "widen",
    "meaning": "v 变宽;加宽"
  },
  {
    "word": "widespread",
    "meaning": "adj 广泛的;普遍的"
  },
  {
    "word": "widow",
    "meaning": "n 寡妇;孀妇"
  },
  {
    "word": "width",
    "meaning": "n 宽度;宽度"
  },
  {
    "word": "wield",
    "meaning": "v 挥动;行使"
  },
  {
    "word": "wife",
    "meaning": "n 妻子;太太"
  },
  {
    "word": "wig",
    "meaning": "n 假发;卷发"
  },
  {
    "word": "wild",
    "meaning": "adj 野生的;野蛮的"
  },
  {
    "word": "wilderness",
    "meaning": "n 荒野;荒地"
  },
  {
    "word": "wildly",
    "meaning": "adv 疯狂地;野蛮地"
  },
  {
    "word": "will",
    "meaning": "aux 将;会"
  },
  {
    "word": "willful",
    "meaning": "adj 故意的;任性的"
  },
  {
    "word": "willingly",
    "meaning": "adv 愿意地;自动地"
  },
  {
    "word": "willingness",
    "meaning": "n 愿意;意志"
  },
  {
    "word": "wilt",
    "meaning": "v 枯萎;凋谢"
  },
  {
    "word": "wily",
    "meaning": "adj 精明的;诡计多端的"
  },
  {
    "word": "win",
    "meaning": "v 赢得;获胜"
  },
  {
    "word": "wince",
    "meaning": "v 畏缩;皱眉"
  },
  {
    "word": "winch",
    "meaning": "v 绞车;绞痛"
  },
  {
    "word": "wind",
    "meaning": "n 风 v.缠绕"
  },
  {
    "word": "window",
    "meaning": "n 窗户;窗口"
  },
  {
    "word": "windy",
    "meaning": "adj 有风的;多风的"
  },
  {
    "word": "wine",
    "meaning": "n 葡萄酒;酒"
  },
  {
    "word": "wing",
    "meaning": "n 翅膀;翼"
  },
  {
    "word": "wink",
    "meaning": "v 眨眼;闪烁"
  },
  {
    "word": "winner",
    "meaning": "n 获胜者;成功者"
  },
  {
    "word": "winter",
    "meaning": "n 冬天;冬季"
  },
  {
    "word": "wipe",
    "meaning": "v 擦;擦净"
  },
  {
    "word": "wire",
    "meaning": "n 电线;金属线"
  },
  {
    "word": "wireless",
    "meaning": "adj 无线的"
  },
  {
    "word": "wisdom",
    "meaning": "n 智慧;明智"
  },
  {
    "word": "wise",
    "meaning": "adj 明智的;聪明的"
  },
  {
    "word": "wish",
    "meaning": "v 希望;祝愿"
  },
  {
    "word": "wishful",
    "meaning": "adj 希望的;渴望的"
  },
  {
    "word": "wit",
    "meaning": "n 智慧;才智"
  },
  {
    "word": "witch",
    "meaning": "n 女巫;巫术"
  },
  {
    "word": "with",
    "meaning": "prep 和...一起"
  },
  {
    "word": "withal",
    "meaning": "adv 和...一起"
  },
  {
    "word": "withdraw",
    "meaning": "v 撤退;提取"
  },
  {
    "word": "withdrawal",
    "meaning": "n 撤退;提款"
  },
  {
    "word": "withdrew",
    "meaning": "v 撤退（withdraw的过去式）"
  },
  {
    "word": "wither",
    "meaning": "v 枯萎;凋谢"
  },
  {
    "word": "withheld",
    "meaning": "v 保留;不给"
  },
  {
    "word": "withhold",
    "meaning": "v 保留;抑制"
  },
  {
    "word": "within",
    "meaning": "prep 在...之内"
  },
  {
    "word": "without",
    "meaning": "prep 没有"
  },
  {
    "word": "withstand",
    "meaning": "v 抵挡;经受"
  },
  {
    "word": "witness",
    "meaning": "n 证人;目击者"
  },
  {
    "word": "witty",
    "meaning": "adj 机智的;风趣的"
  },
  {
    "word": "wizened",
    "meaning": "adj 干瘪的;枯萎的"
  },
  {
    "word": "woe",
    "meaning": "n 悲哀;痛苦"
  },
  {
    "word": "wield",
    "meaning": "v 挥动;行使"
  },
  {
    "word": "wok",
    "meaning": "n 炒菜锅;铁锅"
  },
  {
    "word": "woke",
    "meaning": "v 唤醒（wake的过去式）"
  },
  {
    "word": "wolf",
    "meaning": "n 狼"
  },
  {
    "word": "woman",
    "meaning": "n 妇女;成年女子"
  },
  {
    "word": "womanhood",
    "meaning": "n 女性;妇女"
  },
  {
    "word": "wonder",
    "meaning": "n 惊奇;奇迹 v.想知道"
  },
  {
    "word": "wonderful",
    "meaning": "adj 极好的;极妙的"
  },
  {
    "word": "wont",
    "meaning": "n 习惯;嗜好"
  },
  {
    "word": "wood",
    "meaning": "n 木材;树林"
  },
  {
    "word": "wooden",
    "meaning": "adj 木制的;呆板的"
  },
  {
    "word": "woodland",
    "meaning": "n 林地;森林"
  },
  {
    "word": "woodwork",
    "meaning": "n 木工;木制品"
  },
  {
    "word": "wool",
    "meaning": "n 羊毛;毛线"
  },
  {
    "word": "woolen",
    "meaning": "adj 羊毛制的"
  },
  {
    "word": "woolen",
    "meaning": "n 羊毛衣服"
  },
  {
    "word": "word",
    "meaning": "n 词;话"
  },
  {
    "word": "wording",
    "meaning": "n 措辞;用字"
  },
  {
    "word": "work",
    "meaning": "n 工作 v.工作"
  },
  {
    "word": "worker",
    "meaning": "n 工人;工作者"
  },
  {
    "word": "workforce",
    "meaning": "n 劳动力;劳动大军"
  },
  {
    "word": "workhouse",
    "meaning": "n 感化院;工场"
  },
  {
    "word": "working",
    "meaning": "adj 工作的 n.工作"
  },
  {
    "word": "workman",
    "meaning": "n 工人;工匠"
  },
  {
    "word": "workmanship",
    "meaning": "n 手艺;工艺"
  },
  {
    "word": "world",
    "meaning": "n 世界;地球"
  },
  {
    "word": "worldly",
    "meaning": "adj 世俗的;世间的"
  },
  {
    "word": "worldwide",
    "meaning": "adj 全世界的"
  },
  {
    "word": "worm",
    "meaning": "n 虫;蠕虫"
  },
  {
    "word": "worn",
    "meaning": "adj 疲倦的;用旧的"
  },
  {
    "word": "worried",
    "meaning": "adj 担心的;焦虑的"
  },
  {
    "word": "worries",
    "meaning": "n 忧虑;烦恼"
  },
  {
    "word": "worry",
    "meaning": "v 担心;烦恼"
  },
  {
    "word": "worse",
    "meaning": "adj 更坏的 adv.更坏地"
  },
  {
    "word": "worship",
    "meaning": "n 崇拜 v.崇拜"
  },
  {
    "word": "worst",
    "meaning": "adj 最坏的 adv.最坏地"
  },
  {
    "word": "worth",
    "meaning": "adj 值得的 n.价值"
  },
  {
    "word": "worthless",
    "meaning": "adj 无价值的;无用的"
  },
  {
    "word": "worthwhile",
    "meaning": "adj 值得的;有益的"
  },
  {
    "word": "worthy",
    "meaning": "adj 值得的;可敬的"
  },
  {
    "word": "would",
    "meaning": "aux 将;愿意"
  },
  {
    "word": "wound",
    "meaning": "n 创伤 v.使受伤"
  },
  {
    "word": "wrap",
    "meaning": "v 包;裹"
  },
  {
    "word": "wrath",
    "meaning": "n 愤怒;激怒"
  },
  {
    "word": "wreak",
    "meaning": "v 发泄;报仇"
  },
  {
    "word": "wreath",
    "meaning": "n 花圈;圈状物"
  },
  {
    "word": "wreck",
    "meaning": "n 失事 v.破坏"
  },
  {
    "word": "wrench",
    "meaning": "v 拧;拧紧"
  },
  {
    "word": "wrest",
    "meaning": "v 扭伤;歪曲"
  },
  {
    "word": "wrestle",
    "meaning": "v 摔跤;斗争"
  },
  {
    "word": "wretched",
    "meaning": "adj 可怜的;不幸的"
  },
  {
    "word": "wrinkle",
    "meaning": "n 皱纹 v.起皱"
  },
  {
    "word": "wrist",
    "meaning": "n 腕;腕关节"
  },
  {
    "word": "writ",
    "meaning": "n 命令;令状"
  },
  {
    "word": "write",
    "meaning": "v 写;写作"
  },
  {
    "word": "writer",
    "meaning": "n 作家;作者"
  },
  {
    "word": "writing",
    "meaning": "n 写作;著作"
  },
  {
    "word": "written",
    "meaning": "adj 书面的;写的"
  },
  {
    "word": "wrong",
    "meaning": "adj 错误的 adv.错误地"
  },
  {
    "word": "wrought",
    "meaning": "v 使工作;锻造（work的过去式和过去分词）"
  },
  {
    "word": "wry",
    "meaning": "adj 干燥的;讽刺的"
  },
  {
    "word": "xenon",
    "meaning": "n 氙"
  },
  {
    "word": "yacht",
    "meaning": "n 游艇"
  },
  {
    "word": "yawn",
    "meaning": "v 打哈欠;裂开"
  },
  {
    "word": "year",
    "meaning": "n 年"
  },
  {
    "word": "yearbook",
    "meaning": "n 年鉴;年报"
  },
  {
    "word": "yearling",
    "meaning": "n 一年生动物"
  },
  {
    "word": "yearly",
    "meaning": "adj 每年的 adv.每年"
  },
  {
    "word": "yearn",
    "meaning": "v 渴望;向往"
  },
  {
    "word": "yeast",
    "meaning": "n 酵母;酵母菌"
  },
  {
    "word": "yell",
    "meaning": "v 大叫 n.大喊"
  },
  {
    "word": "yellow",
    "meaning": "adj 黄色的 n.黄色"
  },
  {
    "word": "yen",
    "meaning": "n 渴望;嗜好"
  },
  {
    "word": "yield",
    "meaning": "v 出产;屈服"
  },
  {
    "word": "yoke",
    "meaning": "n 轭;牛轭"
  },
  {
    "word": "yolk",
    "meaning": "n 蛋黄;核心"
  },
  {
    "word": "yonder",
    "meaning": "adv 那边;在远处"
  },
  {
    "word": "you",
    "meaning": "pron 你;你们"
  },
  {
    "word": "young",
    "meaning": "adj 年轻的 n.年轻人"
  },
  {
    "word": "your",
    "meaning": "pron 你的;你们的"
  },
  {
    "word": "yours",
    "meaning": "pron 你的;你们的"
  },
  {
    "word": "yourself",
    "meaning": "pron 你自己"
  },
  {
    "word": "yourselves",
    "meaning": "pron 你们自己"
  },
  {
    "word": "youth",
    "meaning": "n 青春;年轻人"
  },
  {
    "word": "youthful",
    "meaning": "adj 年轻的;青年的"
  },
  {
    "word": "zany",
    "meaning": "adj 滑稽的;古怪的"
  },
  {
    "word": "zeal",
    "meaning": "n 热情;热忱"
  },
  {
    "word": "zealous",
    "meaning": "adj 热心的;热情的"
  },
  {
    "word": "zebra",
    "meaning": "n 斑马"
  },
  {
    "word": "zenith",
    "meaning": "n 顶点;天顶"
  },
  {
    "word": "zest",
    "meaning": "n 风味;热心"
  },
  {
    "word": "zigzag",
    "meaning": "n 之字形;之字形图案"
  },
  {
    "word": "zip",
    "meaning": "n 拉链 v.压缩"
  },
  {
    "word": "zipper",
    "meaning": "n 拉链"
  },
  {
    "word": "zone",
    "meaning": "n 区域;地带"
  },
  {
    "word": "zoom",
    "meaning": "v 快速移动 n.急速上升"
  },
  {
    "word": "zigzag",
    "meaning": "n 之字形;之字形图案"
  }
];
