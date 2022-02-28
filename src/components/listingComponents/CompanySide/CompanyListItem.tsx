import React, { useState } from 'react'
import { Flex } from '../../../uikit/uikit';
import { CompanyListItemDD, CompanyListItemDDBottom, CompanyListItemIcon, CompanyListItemIconWrap, CompanyListItemS, CompanyListItemText, CompanyListItemDDTop, CompanyListItemDDBottomText, CompanyDDWrap } from './CompanySC';
import DDDown from '../../../assets/DDDown.svg'
import DDUp from '../../../assets/DDUp.svg' 
import First from './companyListItems/First';
import Second from './companyListItems/Second';
import Third from './companyListItems/Third';
import Fourth from './companyListItems/Fourth';
import Fifth from './companyListItems/Fifth';


type Props = {
  name: string;
  id: number ;
}

const CompanyListItem:React.FC<Props> = ({name, id}) => {

  const [DDClick, setDDClick] = useState(false)
  const [companyListInfo, setCompanyListInfo] = useState({
    first: {header:[
        'Торговый код',
        'ISIN',
        'Площадка',
        'Сектор',
        'Категория',
        'Торги',
        'Индекс'
      ], values:[
        'AAFD',
        'KZ1C00008721',
        'основная',
        'акции',
        'стандарт',
        '15.12.21',
        '-'
      ],},
      second: {header: [
        'Наименование держателя	',
        'Простые акции, шт.	',
        'Простые акции, доля в %	',
        'Привилег. акции',
        'Всего акций, шт',
        'Всего акций, доля в %',
      ], values: [[
        'ТОО "KAZFOODPRODUCTS"',
        '6 512 241	',
        '95,00	',
        '-',
        '6 512 241	',
        '95,00',
      ],[
        'Сарсембаев А.К.',
        '342 750',
        '5,00',
        '-',
        '342 750	',
        '5,00',
      ]], values2: [
        ['Количество объявленных простых акций, шт.	', '150 000 000'],
        ['Количество объявленных привилегированных акций, шт.	', '-'],
        ['Количество размещенных простых акций, шт.	', ''],
        ['Количество размещенных привилегированных акций, шт.	', '6 854 991'],
        ['Количество выкупленных простых акций, шт.	', '-'],
        ['Количество выкупленных привилегированных акций, шт.	', '-'],
        ['Количество простых акций в обращении, шт.	', '-'],
        ['Количество привилегированных акций в обращении, шт.	', '-'],
    ]},
      third: {
        header: [
          'Показатель',
          'На 01.10.21	',
          'На 01.04.21'
        ],
        values: [
          ['Уставный капитал', '685 499,00 тыс. KZT', '685 499,00 тыс. KZT'],
          ['Собственный капитал	', '685 499,00 тыс. KZT', '685 499,00 тыс. KZT'],
          ['Совокупные активы	', '685 499,00 тыс. KZT', '685 499,00 тыс. KZT'],
          ['Совокупные обязательства	', '685 499,00 тыс. KZT', '685 499,00 тыс. KZT'],
          ['Объем продаж', '685 499,00 тыс. KZT', '685 499,00 тыс. KZT'],
          ['Валовый доход', '685 499,00 тыс. KZT', '685 499,00 тыс. KZT'],
          ['Чистая прибыль', '685 499,00 тыс. KZT', '685 499,00 тыс. KZT'],
          ['Балансовая стоимость простой акции', '685 499,00 тыс. KZT', '685 499,00 тыс. KZT'],
          ['ROA	', '4,09%	', '4,09%	'],
          ['ROE', '14,64%	', '14,64%'],
          ['ROS', '4,31%', '4,31%'],
        ]
      },
      fourth: {
        header: [
          'Название документа',
          'Дата предоставления'
        ],
        values: [
         [ 'Правила внутреннего контроля за распоряжением и использованием инсайдерской информации, утвержденные 22 июля 2021 года',
          '18.08.21'],
          ['Кодекс корпоративного управления, утвержденный 22 июля 2021 года', '18.08.21'],
          ['Устав, утвержденный 18 марта 2010 года', '18.08.21'],
          ['Изменения в Устав компании, утвержденные 15 августа 2011 года', '18.08.21'],
          ['Изменения в Устав компании, утвержденные 18 ноября 2010 года', '18.08.21'],
          ['Справка о государственной перерегистрации юридического лица', '18.08.21']
        ]
      }, 
      fifth: [
        ['20.01.22 11:01', 'Предоставлена выписка из системы реестров акционеров АО "АзияАгроФуд" по состоянию на 01 января 2022 г'],
        ['29.12.21 17:12', '10 января состоится внеочередное общее собрание акционеров АО "АзияАгроФуд"'],
        ['15.12.21 14:12', '	С 15 декабря на KASE открыты торги простыми акциями KZ1C00008721 (AAFD) АО "АзияАгроФуд"'],
        ['15.10.21 17:10	', '	Изменен состав Правления АО "АзияАгроФуд"'],
      ]
  })
  

  return (
    <CompanyListItemS>
        <Flex justify='space-between' align='center' margin='0 0 20px 0'>
            <CompanyListItemText>{name}</CompanyListItemText>
            <CompanyListItemIconWrap onClick={() => setDDClick(val => !val)} active={DDClick} justify='center' align='center'>
                    <CompanyListItemIcon active={DDClick} src={!DDClick?DDDown:DDUp}/>
            </CompanyListItemIconWrap>
        </Flex>

        <CompanyDDWrap active={DDClick}>
          <CompanyListItemDD >
            {id===0?<First header={companyListInfo.first.header} values={companyListInfo.first.values} DDClick={DDClick}/>:<></>}
            {id===1?<Second header={companyListInfo.second.header} values={companyListInfo.second.values} values2={companyListInfo.second.values2} DDClick={DDClick}/>:<></>}
            {id===2?<Third header={companyListInfo.third.header} values={companyListInfo.third.values} DDClick={DDClick}/>:<></>}
            {id===3?<Fourth header={companyListInfo.fourth.header} values={companyListInfo.fourth.values} DDClick={DDClick}/>:<></>}
            {id===4?<Fifth values={companyListInfo.fifth} DDClick={DDClick}/>:<></>}
                        

          </CompanyListItemDD>
        </CompanyDDWrap>
    </CompanyListItemS>
  )
}

export default CompanyListItem