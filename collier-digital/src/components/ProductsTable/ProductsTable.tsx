import { FC, ReactNode,} from 'react';
import { Table, Tag, Space } from 'antd';
import { ArrowDownOutlined, ArrowUpOutlined, 
  StarOutlined, WarningOutlined  } from '@ant-design/icons'

const ProductsTable:FC = () => {
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
    },
    {
      title: 'Preço atual',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: 'Ranking de Preços',
      key: 'ranking',
      dataIndex: 'ranking',
      color: 'color',
      render: (tags: string[], record: any) => (
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
      ),
    },
    {
      title: 'Menor preço',
      dataIndex: 'lowPrice',
      key: 'lowPrice',
    },
    {
      title: 'Diferencia de preço R$',
      dataIndex: 'realPrice',
      key: 'realPrice',
      render: (price:number) => (
        <Space size="middle">
        <span>R$  {price}</span>
      </Space>
      ),
  
    },
    {
      title: 'Diferencia de preço %',
      dataIndex: 'percentsPrice',
      key: 'percentsPrice',
      render: (price: number) => (
        <Space size="middle">
          <span>{price}%</span>
        </Space>
      ),
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
      status: [dictStatus['lowPrice'].icon],
      code:'12345678',
      name: 'John Brown',
      price: 150,
      ranking: ['www.pontofrio.com.bb', 'Pontofrio'],
      lowPrice: 150,
      realPrice: 0,
      percentsPrice: 0,
    },
    {
      key: '2',
      status: [dictStatus['upPrice'].icon],
      code:'12345678',
      name: 'John Brown',
      price: 150,
      ranking: ['www.pontofrio.com.bb', 'Pontofrio'],
      lowPrice: 150,
      realPrice: 0,
      percentsPrice: 0,
    },
    {
      key: '3',
      status:  [dictStatus['exclusiveStock'].icon],
      code:'12345678',
      name: 'John Brown',
      price: 150,
      ranking: ['www.pontofrio.com.bb', 'Pontofrio'],
      lowPrice: 150,
      realPrice: 0,
      percentsPrice: 0,
    },
    {
      key: '3',
      status:  [dictStatus['ruptura'].icon],
      code:'12345678',
      name: 'John Brown',
      price: 150,
      ranking: ['www.pontofrio.com.bb', 'Pontofrio'],
      lowPrice: 150,
      realPrice: 0,
      percentsPrice: 0,
    },
  ];
  
  
    return( 
        <Table columns={columns} dataSource={data} /> 
    )
}; export default ProductsTable;
