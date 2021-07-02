import React from 'react';
import { Breadcrumb } from 'antd';
import { HomeOutlined } from '@ant-design/icons';
import * as routes from '../../routes/paths';

interface IPath{
    text: string;
    url: string;
}
interface IBreadCrumb{
    itens?:IPath[];
}

const BreadCrumb = (props:IBreadCrumb) => {

    const { itens } = props;

    const listItens = () => {
        if(!!itens){
            return(
                itens.map(item => (
                    <Breadcrumb.Item href={item.url}>
                        {item.text}
                    </Breadcrumb.Item>
                ))
            )

        }; return null;
    }

    return(
    <Breadcrumb>
        <Breadcrumb.Item href= {routes.HOME}>
            <HomeOutlined />
        </Breadcrumb.Item>
        { 
            listItens()
        }

    </Breadcrumb>

    )
}; export default BreadCrumb;