import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { BookOpen, Target, ListChecks, Scale, Map, ScrollText, ChevronRight, Menu, X, Landmark, ArrowUpRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const sections = [
  { id: "hero", label: "Главная" },
  { id: "intro", label: "Введение" },
  { id: "goal", label: "Цель и задачи" },
  { id: "reasons", label: "Причины введения" },
  { id: "stages", label: "Этапы НЭПа" },
  { id: "effects", label: "Последствия" },
  { id: "territories", label: "Территориальные особенности" },
  { id: "sources", label: "Источники" },
];

const tasks = [
  "Прочитать документы, связанные с введением НЭПа.",
  "Выявить проблемные участки советской экономики, которые сделали переход к новой экономической политике необходимым.",
  "Изучить особенности советской экономики в период 1920-х годов.",
  "Сформировать перечень позитивных и негативных последствий введения элементов рыночных отношений.",
  "Рассмотреть территориальные особенности проведения НЭПа на территории социалистических республик.",
];

const reasons = [
  {
    title: "Хозяйственный кризис после Гражданской войны",
    text:
      "К началу 1920-х годов советское государство столкнулось с разрушением промышленности, транспортными проблемами, нехваткой товаров и общим падением уровня производства. В этих условиях политика военного коммунизма перестала обеспечивать восстановление экономики.",
  },
  {
    title: "Кризис продовольственного снабжения",
    text:
      "Продразвёрстка вызывала недовольство крестьянства и снижала заинтересованность в расширении производства. Переход к продналогу рассматривался как способ стабилизировать отношения между государством и деревней.",
  },
  {
    title: "Социальная и политическая напряжённость",
    text:
      "Экономические трудности усиливали протестные настроения. Введение НЭПа стало попыткой снизить напряжённость и создать более устойчивую модель хозяйственной жизни при сохранении политического контроля со стороны советской власти.",
  },
];

const stages = [
  {
    year: "1921",
    title: "Начало новой экономической политики",
    text:
      "На первом этапе государство отказывается от продразвёрстки и переходит к продналогу. Допускаются ограниченные рыночные механизмы, оживляется частная торговля и создаются условия для постепенного восстановления хозяйства.",
  },
  {
    year: "1922–1925",
    title: "Стабилизация и восстановление",
    text:
      "Происходит укрепление денежного обращения, частично восстанавливаются промышленность и торговля, расширяется хозяйственная инициатива на местном уровне. Этот этап часто рассматривается как период наибольшей результативности НЭПа.",
  },
  {
    year: "1926–1928",
    title: "Усиление противоречий",
    text:
      "К концу 1920-х годов начинают проявляться ограничения смешанной модели. Усиливаются дискуссии о границах рынка, роли государства и перспективах дальнейшего развития экономики.",
  },
  {
    year: "Конец 1920-х",
    title: "Свёртывание НЭПа",
    text:
      "Переход к форсированной индустриализации и коллективизации означал отказ от многих нэповских механизмов. В результате НЭП был свёрнут как временная политика, уступив место более жёсткой централизованной модели.",
  },
];

const positives = [
  "Снижение остроты хозяйственного кризиса и постепенное восстановление экономической жизни.",
  "Рост заинтересованности производителей в результатах своего труда.",
  "Оживление внутренней торговли и денежного обращения.",
  "Расширение возможностей для более гибкого управления экономикой на переходном этапе.",
];

const negatives = [
  "Сосуществование плановых и рыночных элементов порождало внутренние противоречия системы.",
  "Неравномерность восстановления различных отраслей и регионов.",
  "Социальная дифференциация и настороженное отношение власти к частной инициативе.",
  "Политическая ограниченность реформ: экономические уступки не сопровождались политической либерализацией.",
];

const territories = [
  {
    title: "РСФСР и центральные районы",
    text:
      "В крупнейших хозяйственных центрах НЭП проявлялся через восстановление торговли, развитие кооперации и постепенную нормализацию отношений между городом и деревней.",
  },
  {
    title: "Национальные республики",
    text:
      "На территориях социалистических республик проведение НЭПа зависело от местной хозяйственной структуры, уровня разрушений, аграрной специфики и степени включённости в общесоюзные экономические связи.",
  },
  {
    title: "Локальные различия",
    text:
      "Темпы и формы реализации новой экономической политики были неравномерными. На практике значение имели транспортная доступность, специализация региона, состояние рынка и административные возможности местной власти.",
  },
];

const sources = [
  "Декреты и решения советской власти, связанные с переходом к новой экономической политике.",
  "Материалы партийных съездов и официальные документы начала 1920-х годов.",
  "Статистические сборники по промышленности, сельскому хозяйству и торговле периода НЭПа.",
  "Научные статьи и учебные исследования по истории советской экономики 1920-х годов.",
];

function Section({ id, title, eyebrow, children }) {
  return (
    <section id={id} className="scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.45 }}
        className="space-y-4"
      >
        <div className="space-y-2">
          {eyebrow ? (
            <div className="text-sm font-medium uppercase tracking-[0.18em] text-slate-500">
              {eyebrow}
            </div>
          ) : null}
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">{title}</h2>
        </div>
        {children}
      </motion.div>
    </section>
  );
}

function NavLink({ item, active, onClick }) {
  return (
    <a
      href={`#${item.id}`}
      onClick={onClick}
      className={`group flex items-center justify-between rounded-2xl px-4 py-3 text-sm transition ${
        active
          ? "bg-slate-900 text-white"
          : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
      }`}
    >
      <span>{item.label}</span>
      <ChevronRight className={`h-4 w-4 transition ${active ? "opacity-100" : "opacity-40 group-hover:opacity-80"}`} />
    </a>
  );
}

export default function NepHistorySite() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("hero");

  const observerIds = useMemo(() => sections.map((s) => s.id), []);

  React.useEffect(() => {
    const nodes = observerIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]?.target?.id) {
          setActive(visible[0].target.id);
        }
      },
      { threshold: [0.2, 0.35, 0.5, 0.7] }
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, [observerIds]);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-slate-50/90 backdrop-blur">
          <div className="mx-auto flex h-16 max-w-7xl items-center justify-between">
            <a href="#hero" className="flex items-center gap-3 font-semibold tracking-tight text-slate-900">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-900 text-white shadow-sm">
                <Landmark className="h-5 w-5" />
              </div>
              <div className="leading-tight">
                <div>История России</div>
                <div className="text-xs font-normal text-slate-500">Проект о НЭП 1920-х годов</div>
              </div>
            </a>

            <div className="hidden items-center gap-2 lg:flex">
              {sections.slice(0, 5).map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="rounded-xl px-3 py-2 text-sm text-slate-600 transition hover:bg-slate-100 hover:text-slate-900"
                >
                  {item.label}
                </a>
              ))}
            </div>

            <Button
              variant="ghost"
              className="lg:hidden"
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>

          {open ? (
            <div className="pb-4 lg:hidden">
              <div className="grid gap-2 rounded-2xl border border-slate-200 bg-white p-3 shadow-sm">
                {sections.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={() => setOpen(false)}
                    className="rounded-xl px-3 py-2 text-sm text-slate-700 hover:bg-slate-100"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          ) : null}
        </header>

        <div className="grid gap-8 py-8 lg:grid-cols-[280px_minmax(0,1fr)] lg:py-12">
          <aside className="hidden lg:block">
            <div className="sticky top-24 space-y-4">
              <Card className="rounded-3xl border-slate-200 shadow-sm">
                <CardHeader>
                  <CardTitle className="text-base">Структура проекта</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  {sections.map((item) => (
                    <NavLink key={item.id} item={item} active={active === item.id} />
                  ))}
                </CardContent>
              </Card>

              <Card className="rounded-3xl border-slate-200 shadow-sm">
                <CardContent className="p-5">
                  <div className="mb-2 text-sm font-medium uppercase tracking-[0.18em] text-slate-500">
                    Формат
                  </div>
                  <p className="text-sm leading-6 text-slate-600">
                    Академический одностраничный сайт для школьного или университетского проекта: с чёткой структурой, навигацией и блоками для анализа источников.
                  </p>
                </CardContent>
              </Card>
            </div>
          </aside>

          <main className="space-y-16 lg:space-y-24">
            <section id="hero" className="scroll-mt-24">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm"
              >
                <div className="grid gap-8 p-8 md:p-10 xl:grid-cols-[1.2fr_0.8fr] xl:p-12">
                  <div className="space-y-6">
                    <div className="inline-flex items-center rounded-full border border-slate-200 bg-slate-100 px-4 py-2 text-sm text-slate-600">
                      Учебный проект по истории России
                    </div>
                    <div className="space-y-4">
                      <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
                        НЭП в 1920-е годы: причины введения, этапы развития и причины свёртывания
                      </h1>
                      <p className="max-w-3xl text-lg leading-8 text-slate-600">
                        Сайт посвящён анализу новой экономической политики как одного из ключевых этапов истории советской экономики. В центре внимания — источниковая база, логика перехода к НЭПу, особенности развития системы и её внутренние противоречия.
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-3">
                      <a href="#goal">
                        <Button className="rounded-2xl px-5">Перейти к задачам</Button>
                      </a>
                      <a href="#sources">
                        <Button variant="outline" className="rounded-2xl px-5">
                          Посмотреть источники
                        </Button>
                      </a>
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-1">
                    <Card className="rounded-3xl border-slate-200 bg-slate-50 shadow-none">
                      <CardContent className="p-6">
                        <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-sm">
                          <Target className="h-5 w-5" />
                        </div>
                        <div className="text-sm uppercase tracking-[0.18em] text-slate-500">Цель</div>
                        <p className="mt-2 text-sm leading-6 text-slate-700">
                          Изучить источниковую базу по НЭПу и на её основе определить причины введения новой экономической политики, этапы её развития и причины свёртывания.
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="rounded-3xl border-slate-200 bg-slate-50 shadow-none">
                      <CardContent className="p-6">
                        <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-sm">
                          <ScrollText className="h-5 w-5" />
                        </div>
                        <div className="text-sm uppercase tracking-[0.18em] text-slate-500">Результат</div>
                        <p className="mt-2 text-sm leading-6 text-slate-700">
                          Систематизированный обзор проблемы, который можно использовать как основу для доклада, презентации, статьи или более крупного учебного исследования.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </motion.div>
            </section>

            <Section id="intro" eyebrow="Общая характеристика" title="Введение">
              <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
                <Card className="rounded-3xl border-slate-200 shadow-sm">
                  <CardContent className="p-7 text-[15px] leading-7 text-slate-700">
                    <p>
                      Новая экономическая политика заняла особое место в истории Советской России. Она стала ответом на масштабный кризис, возникший после революции и Гражданской войны, и рассматривалась как способ стабилизации хозяйственной системы в условиях разрушенного производства, нарушенных хозяйственных связей и острой социальной напряжённости.
                    </p>
                    <p className="mt-4">
                      История НЭПа представляет интерес не только как отдельный исторический сюжет, но и как пример сочетания государственных и рыночных механизмов в переходной экономике. Именно поэтому анализ причин введения НЭПа, его этапов и итогов позволяет глубже понять логику развития советской модели в 1920-е годы.
                    </p>
                  </CardContent>
                </Card>

                <Card className="rounded-3xl border-slate-200 shadow-sm">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-xl">
                      <BookOpen className="h-5 w-5" />
                      Что рассматривает сайт
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3 text-sm leading-6 text-slate-700">
                    <div className="rounded-2xl bg-slate-50 p-4">Причины перехода к новой экономической политике.</div>
                    <div className="rounded-2xl bg-slate-50 p-4">Основные этапы развития НЭПа в 1920-е годы.</div>
                    <div className="rounded-2xl bg-slate-50 p-4">Положительные и отрицательные последствия политики.</div>
                    <div className="rounded-2xl bg-slate-50 p-4">Региональные и территориальные особенности её проведения.</div>
                  </CardContent>
                </Card>
              </div>
            </Section>

            <Section id="goal" eyebrow="Исследовательская рамка" title="Цель и задачи проекта">
              <div className="grid gap-6 xl:grid-cols-[0.95fr_1.05fr]">
                <Card className="rounded-3xl border-slate-200 shadow-sm">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-xl">
                      <Target className="h-5 w-5" />
                      Цель проекта
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-[15px] leading-7 text-slate-700">
                      Изучить источниковую базу по НЭП с целью формулирования основных причин введения новой экономической политики, анализа этапов её развития и выявления причин свёртывания.
                    </p>
                  </CardContent>
                </Card>

                <Card className="rounded-3xl border-slate-200 shadow-sm">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-xl">
                      <ListChecks className="h-5 w-5" />
                      Задачи проекта
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {tasks.map((task, index) => (
                      <div key={index} className="flex gap-3 rounded-2xl bg-slate-50 p-4">
                        <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-slate-900 text-xs font-semibold text-white">
                          {index + 1}
                        </div>
                        <p className="text-sm leading-6 text-slate-700">{task}</p>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
            </Section>

            <Section id="reasons" eyebrow="Исторический контекст" title="Причины введения НЭПа">
              <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                {reasons.map((item, index) => (
                  <Card key={index} className="rounded-3xl border-slate-200 shadow-sm">
                    <CardContent className="p-6">
                      <div className="mb-4 inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-slate-600">
                        Причина {index + 1}
                      </div>
                      <h3 className="text-lg font-semibold tracking-tight text-slate-900">{item.title}</h3>
                      <p className="mt-3 text-sm leading-7 text-slate-700">{item.text}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </Section>

            <Section id="stages" eyebrow="Хронология" title="Этапы развития НЭПа">
              <div className="space-y-5">
                {stages.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.35, delay: index * 0.05 }}
                    className="grid gap-4 rounded-[1.75rem] border border-slate-200 bg-white p-5 shadow-sm md:grid-cols-[140px_minmax(0,1fr)] md:p-6"
                  >
                    <div className="flex items-start">
                      <div className="rounded-2xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white shadow-sm">
                        {item.year}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold tracking-tight text-slate-900">{item.title}</h3>
                      <p className="mt-3 text-[15px] leading-7 text-slate-700">{item.text}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </Section>

            <Section id="effects" eyebrow="Итоги" title="Позитивные и негативные последствия">
              <div className="grid gap-6 xl:grid-cols-2">
                <Card className="rounded-3xl border-slate-200 shadow-sm">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-xl text-slate-900">
                      <Scale className="h-5 w-5" />
                      Позитивные последствия
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {positives.map((item, index) => (
                      <div key={index} className="rounded-2xl bg-slate-50 p-4 text-sm leading-6 text-slate-700">
                        {item}
                      </div>
                    ))}
                  </CardContent>
                </Card>

                <Card className="rounded-3xl border-slate-200 shadow-sm">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-xl text-slate-900">
                      <Scale className="h-5 w-5" />
                      Негативные последствия
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {negatives.map((item, index) => (
                      <div key={index} className="rounded-2xl bg-slate-50 p-4 text-sm leading-6 text-slate-700">
                        {item}
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
            </Section>

            <Section id="territories" eyebrow="Региональный аспект" title="Территориальные особенности проведения НЭПа">
              <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                {territories.map((item, index) => (
                  <Card key={index} className="rounded-3xl border-slate-200 shadow-sm">
                    <CardContent className="p-6">
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100">
                        <Map className="h-5 w-5" />
                      </div>
                      <h3 className="text-lg font-semibold tracking-tight text-slate-900">{item.title}</h3>
                      <p className="mt-3 text-sm leading-7 text-slate-700">{item.text}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </Section>

            <Section id="sources" eyebrow="База исследования" title="Источники и опора для дальнейшей доработки">
              <div className="grid gap-6 xl:grid-cols-[1fr_0.9fr]">
                <Card className="rounded-3xl border-slate-200 shadow-sm">
                  <CardHeader>
                    <CardTitle className="text-xl">Какие материалы должны быть в финальной версии</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {sources.map((item, index) => (
                      <div key={index} className="flex gap-3 rounded-2xl bg-slate-50 p-4">
                        <div className="mt-0.5 text-sm font-semibold text-slate-500">0{index + 1}</div>
                        <p className="text-sm leading-6 text-slate-700">{item}</p>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                <Card className="rounded-3xl border-slate-200 shadow-sm">
                  <CardHeader>
                    <CardTitle className="text-xl">Примечание к текущей версии сайта</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4 text-sm leading-7 text-slate-700">
                    <p>
                      Текущая версия оформлена как готовый академический сайт и уже подходит для демонстрации структуры проекта, логики исследования и основных тематических блоков.
                    </p>
                    <p>
                      Чтобы довести её до полностью источниковедческой версии, достаточно заменить отдельные абзацы на финальные формулировки из выбранных статей и добавить точный библиографический список.
                    </p>
                    <a
                      href="#hero"
                      className="inline-flex items-center gap-2 rounded-2xl bg-slate-900 px-4 py-3 font-medium text-white transition hover:opacity-90"
                    >
                      Вернуться к началу
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </CardContent>
                </Card>
              </div>
            </Section>

            <footer className="rounded-[2rem] border border-slate-200 bg-white p-8 text-sm leading-7 text-slate-600 shadow-sm">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <div className="text-base font-semibold text-slate-900">История России — проект о НЭП</div>
                  <p className="mt-2">
                    Сайт можно использовать как основу для школьного проекта, доклада, исследования или презентации. Визуальная структура уже готова для дальнейшего наполнения точными цитатами, статистикой и ссылками на конкретные статьи.
                  </p>
                </div>
                <div>
                  <div className="text-base font-semibold text-slate-900">Что можно улучшить дальше</div>
                  <p className="mt-2">
                    Добавить отдельный раздел с документами, таблицу по этапам НЭПа, карточки с ключевыми понятиями и полноценный список литературы по ГОСТ или в любом другом нужном формате.
                  </p>
                </div>
              </div>
            </footer>
          </main>
        </div>
      </div>
    </div>
  );
}
