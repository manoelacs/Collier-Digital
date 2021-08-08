import { FC, ReactNode,} from 'react';
import { Table, Tag, Space } from 'antd';
import { ArrowDownOutlined, ArrowUpOutlined, 
  StarOutlined, WarningOutlined  } from '@ant-design/icons';
import * as S from './styles';
import { upPriceColor, 
         lowPriceColor, 
         exclusiveStockColor, 
         basicGrayColor,
         rupturaColor
         } from '../../variables';

const ProductsTable:FC = () => {
  const dictStatus = { 
    'lowPrice': {
        color: lowPriceColor,
        icon: <ArrowDownOutlined  style={{ color: lowPriceColor, fontSize: '15px'}}/>
      },
   'upPrice':{
        color: upPriceColor,
        icon: <ArrowUpOutlined  style={{  color: upPriceColor, fontSize: '15px'}} />
      },
    'exclusiveStock':{     
      color: exclusiveStockColor,
      icon: <StarOutlined  style={{ color: exclusiveStockColor, fontSize: '15px'}} />
    }, 
    'ruptura':{
      color: rupturaColor,
      icon: <WarningOutlined  style={{color: rupturaColor, fontSize: '15px' }} /> 
      
    },
  };
  const renderExclusiveStock = (item: any) => {
    // console.log(record.coverage); 
     return(
       <S.StyledWrapper>
         <S.StyledButton color={item.color}> 1 de 10 </S.StyledButton>
         <S.StyledLabel> 
           <S.StyledSiteParagraph>{item.site}</S.StyledSiteParagraph>
           <S.StyledSiteSpan>({item.siteName})</S.StyledSiteSpan>
         </S.StyledLabel>
       </S.StyledWrapper>  
 
     )              
   };
   const renderPrice = (item: any)=>{
     return(         
        <Space size="middle">
          <S.StyledSpan 
            color = { item.color? item.color: '#727272'}
            fontWeight = { item.fontWeight? item.fontWeight: 'normal'}>
            R$  {item.value}
          </S.StyledSpan>
        </Space>
        
     )
   }
   const renderPercents = (item: any)=>{
    return(     
       <Space size="middle">
         <span style= {{ color: item.color? item.color: 'black'}}>{item.value}%</span>
       </Space>     
    )
  }

  const columns = [
    {
      title: 'Staus',
      dataIndex: 'status',
      key: 'status',
      render: (icon:ReactNode ) => (icon)
    },
    {
      title: 'Código',
      dataIndex: 'code',
      key: 'code',
    },
    {
      title: 'Nome do Produto',
      dataIndex: 'name',
      key: 'name',
      render: (item: any) => (<S.ProductName>{item}</S.ProductName>)
    },
    {
      title: 'Preço atual',
      dataIndex: 'price',
      key: 'price',
      render: renderPrice,
    },
    {
      title: 'Ranking de Preços',
      key: 'ranking',
      dataIndex: 'ranking',
      color: 'color',
      render: renderExclusiveStock,
    },
    {
      title: <S.TableCustonHeader>Menor preço <span>Concorrente</span></S.TableCustonHeader>,
      dataIndex: 'lowPrice',
      key: 'lowPrice',
      render: renderPrice,
    },
    {
      title: <S.TableCustonHeader>Diferencia R$ <span>Concorrente</span></S.TableCustonHeader>,
      dataIndex: 'realPrice',
      key: 'realPrice',
      render: renderPrice,
  
    },
    {
      title: <S.TableCustonHeader>Diferencia % <span>Concorrente</span></S.TableCustonHeader>,
      dataIndex: 'percentsPrice',
      key: 'percentsPrice',
      render: renderPercents,
    },
    /* {
      title: 'Action',
      key: 'action',
      render: (text: string, record: any) => (
        <Space size="middle">
          <a>Invite {record.name}</a>
          <a>Delete</a>
        </Space>
      ),
    }, */
  ];
  const data = [
    {
      key: '1',
      status:  [dictStatus['lowPrice'].icon],
      code:'12345678',
      name: 'lavadoura eletrolux modelo 78374847484',
      price: {value: 150, fontWeight:600},
      ranking: {site: 'www.pontofrio.com.br', siteName: 'Pontofrio', color: lowPriceColor },
      lowPrice:{value: 150},
      realPrice:{value: 0, color: lowPriceColor},
      percentsPrice: {value: 0, color: lowPriceColor},
    },
    {
      key: '2',
      status: [dictStatus['upPrice'].icon],
      code:'12345678',
      name: 'John Brown',
      price: {value: 150, fontWeight:600},
      ranking: {site: 'www.pontofrio.com.br', siteName: 'Pontofrio', color: upPriceColor},
      lowPrice:{value: 150},
      realPrice:{value: 0, color: upPriceColor},
      percentsPrice: {value: 0, color: upPriceColor},
    },
    {
      key: '3',
      status:  [dictStatus['exclusiveStock'].icon],
      code:'12345678',
      name: 'John Brown',
      price: {value: 150, fontWeight:600},
      ranking: {site: 'www.pontofrio.com.br', siteName: 'Pontofrio', color: exclusiveStockColor },
      lowPrice:{value: 150},
      realPrice:{value: 0, color: exclusiveStockColor},
      percentsPrice: {value: 0, color: exclusiveStockColor},
    },
    {
      key: '3',
      status:  [dictStatus['ruptura'].icon],
      code:'12345678',
      name: 'John Brown',
      price: {value: 150, fontWeight:600},
      ranking: {site: 'www.pontofrio.com.br', siteName: 'Pontofrio', color: rupturaColor },
      lowPrice:{value: 150},
      realPrice:{value: 0, color: rupturaColor},
      percentsPrice: {value: 0, color: rupturaColor},
    },
  ];
  
  
    return( 
        <S.StyledTable columns={columns} dataSource={data} /> 
    )
}; export default ProductsTable;
