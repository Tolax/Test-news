// интерфейс для данных о новостях
export interface IData_SnippetNews {
ID: number // идентификатор новости
TI: string // заголовок новости
AB: string // содержимое новости
URL: string // ссылка на новость
DOM: string // домен
DP: string // дата и время публикации новости в формате &quot;%Y-%m-%dT%H:%M:%S&quot;)
LANG: string // язык новости
REACH: number // охват новости
KW: IData_TagItem[] // ключевые слова
AU: string[] // автор новости
CNTR: string // страна
CNTR_CODE: string // код страны
SENT: string // сантимент новости
TRAFFIC: IData_TrafficItem[] // траффик из стран
FAV: string // ссылка на иконку
HIGHLIGHTS: string[] // блоки содержимого новости с ключевыми словами
duplicates: IDuplicateItem[];
}
// тэг для сниппета
export interface IData_TagItem {
value: string // название тега
count: number // кол-во тегов с указанным названием
}
// траффик для сниппета
export interface IData_TrafficItem {
value: string// название страны-источник траффика
count: number// объём траффика для указанной страны
}

export interface IDuplicateItem {
    title: string;
    url: string;
  }

  export interface IDuplicateItem {
    DP: string;  // Добавьте поле DP для даты публикации
    TI: string;  // Заголовок новости
    REACH: number;  // Охват
    SENT: string;  // Сентимент
    CNTR: string;  // Страна
    DOM: string;  // Домен
    title: string;  // Заголовок дубликата
    url: string;  // Ссылка на дубликат
    URL: string;  // Ссылка на оригинальную статью
    AU: string[];  // Авторы новости
  }

  export interface DuplicateCardProps {
    item: IDuplicateItem;
    tagColor: string;
    dataReach: number;
    dataSent: string;
    dataDOM: string;
    dataAU: string[];
  }