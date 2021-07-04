import { FC, ReactNode,} from 'react';
import { Table, Tag, Space , Progress} from 'antd';
import { ArrowDownOutlined, ArrowUpOutlined, 
  StarOutlined, WarningOutlined  } from '@ant-design/icons'
import * as S from './styles';

const MonitoredProductsTable:FC = () => {
  const dictStatus = { 
    'lowPrice': {
        color: '#007BFF',
        icon: <ArrowDownOutlined style={{color: '#007BFF', fontSize: '15px'}}/>
      },
   'upPrice':{
        color: '#9B59B6',
        icon: <ArrowUpOutlined style={{color: '#9B59B6', fontSize: '15px'}} />
      },
    'exclusiveStock':{     
      color: '#2ECC71',
      icon: <StarOutlined  style={{color: '#2ECC71', fontSize: '15px'}} />
    }, 
    'ruptura':{
      color: '#F1C40F',
      icon: <WarningOutlined style={{color: '#F1C40F', fontSize: '15px'}} /> 
      
    },
  };
  const renderProgressBar = (item: any) => {
   // console.log(record.coverage); 
    return(
      <S.StyledColumnItem>
        <div>{item.value}</div>
        <S.StyledHeaderDivider/>
        <S.ProgressContainer > 
          <span>{item.value} ,00% </span>
          <Progress percent={item.value} size="small" strokeColor={item.color} status="active" showInfo={false}/>
        </S.ProgressContainer>
        

      </S.StyledColumnItem>
      

    )
              
  };
  

  const columns = [
    {
      title: 'Lojas Monitoradas',
      dataIndex: 'monitoredStores',
      key: 'monitoredStores',
      //render: (icon:ReactNode ) => (icon)
    },
    {
      title: 'Produtos',
      dataIndex: 'products',
      key: 'products',
    },
    {
      title: 'Cobertura',
      dataIndex: 'coverage',
      key: 'coverage',
      render: renderProgressBar,
    },
    {
      title: 'Menor preço',
      dataIndex: 'minPrice',
      key: 'minPrice',
      render: renderProgressBar,
    },
    {
      title: 'Maior preço',
      key: 'maxPrice',
      dataIndex: 'maxPrice',
      color: 'color',
      render: renderProgressBar,
      /* render: (tags: string[], record: any) => (
        <>
          {tags.map(tag => {
            let color = tag.length > 5 ? 'geekblue' : 'green';
            if (tag === 'loser') {
              color = 'volcano';
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ), */
    },
    {
      title: 'Estoque esclusivo',
      dataIndex: 'exclusiveStock',
      key: 'exclusiveStock',
      render:renderProgressBar,
    },
    {
      title: 'Indisponível',
      dataIndex: 'unavailable',
      key: 'unavailable',
      render: renderProgressBar,  

    },
    {
      title: 'Não encontrado',
      dataIndex: 'notFound',
      key: 'notFound',
      render:renderProgressBar,
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
      monitoredStores: 'www.extra.com.br',
      products: 140,
      coverage: {value: 100, color: '#2ECC71' },
      minPrice: {value: 0, color: '#F1C40F'},
      maxPrice: {value: 100, color: '#007BFF' },
      exclusiveStock: {value: 90, color: '#2ECC71' },
      unavailable: {value: 70, color: '#E74C3C' },
      notFound: {value: 0, color: '#2ECC71' },
      
    },
    {
      key: '2',
      monitoredStores: 'www.extra.com.br',
      products: 140,
      coverage: {value: 100, color: '#2ECC71' },
      minPrice: {value: 80, color: '#F1C40F' },
      maxPrice: {value: 100, color: '#007BFF' },
      exclusiveStock: {value: 70, color: '#2ECC71' },
      unavailable: {value: 100, color: '#E74C3C' },
      notFound: {value: 100, color: '#2ECC71' },
    },
    {
      key: '3',
      monitoredStores: 'www.extra.com.br',
      products: 140,
      coverage: {value: 100, color: '#2ECC71' },
      minPrice: {value: 100, color: '#F1C40F' },
      maxPrice: {value: 50, color: '#007BFF' },
      exclusiveStock: {value: 70, color: '#2ECC71' },
      unavailable:{value: 100, color: '#E74C3C' },
      notFound: {value: 0, color: '#2ECC71' },
    },
    
  ];
  
  
    return( 
        <Table columns={columns} dataSource={data} /> 
    )
}; export default MonitoredProductsTable;
