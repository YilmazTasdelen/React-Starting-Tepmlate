import React from 'react';
import { Space, Table, Tag } from 'antd';
const columns = [
  {
    title: 'Proje Adı',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Başlangış Tarihi',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Bitiş Tarihi',
    dataIndex: 'address',
    key: 'address',
  },
  
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: (_, { tags }) => (
      <>
        {tags.map((tag) => {
          let color = tag == 'Rededildi' ? 'geekblue' : 'green';
          if (tag === 'Rededildi') {
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
    title: 'Son Onay Red Kullanıcısı',
    dataIndex: 'address',
    key: 'address',
    render: (_, record) => (
        <Space size="middle">
          <a>Kullanıcı 1</a>
        </Space>
      ),
  },
  {
    title: 'Son Onay Red Tarihi',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: '',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <a>Detay</a>
        
      </Space>
    ),
  },
];
const data = [
  {
    key: '1',
    name: 'Proje 1',
    age: '03/03/2024',
    address: '03/05/2024',
    tags: ['GMY Onay Bekleniyor'],
  },
  {
    key: '2',
    name: 'Proje 1',
    age: '03/03/2024',
    address: '03/05/2024',
    tags: ['Rededildi'],
  },
  {
    key: '3',
    name: 'Proje 1',
    age: '03/03/2024',
    address: '03/05/2024',
    tags: ['Bölge Yöneticisi Onayı Bekleniyor'],
  },
  {
    key: '1',
    name: 'Proje 1',
    age: '03/03/2024',
    address: '03/05/2024',
    tags: ['GMY Onay Bekleniyor'],
  },
  {
    key: '2',
    name: 'Proje 1',
    age: '03/03/2024',
    address: '03/05/2024',
    tags: ['Rededildi'],
  },
  {
    key: '3',
    name: 'Proje 1',
    age: '03/03/2024',
    address: '03/05/2024',
    tags: ['Bölge Yöneticisi Onayı Bekleniyor'],
  },
  {
    key: '1',
    name: 'Proje 1',
    age: '03/03/2024',
    address: '03/05/2024',
    tags: ['GMY Onay Bekleniyor'],
  },
  {
    key: '2',
    name: 'Proje 1',
    age: '03/03/2024',
    address: '03/05/2024',
    tags: ['Rededildi'],
  },
  {
    key: '3',
    name: 'Proje 1',
    age: '03/03/2024',
    address: '03/05/2024',
    tags: ['Bölge Yöneticisi Onayı Bekleniyor'],
  },
  {
    key: '1',
    name: 'Proje 1',
    age: '03/03/2024',
    address: '03/05/2024',
    tags: ['GMY Onay Bekleniyor'],
  },
  {
    key: '2',
    name: 'Proje 1',
    age: '03/03/2024',
    address: '03/05/2024',
    tags: ['Rededildi'],
  },
  {
    key: '3',
    name: 'Proje 1',
    age: '03/03/2024',
    address: '03/05/2024',
    tags: ['Bölge Yöneticisi Onayı Bekleniyor'],
  },
  {
    key: '1',
    name: 'Proje 1',
    age: '03/03/2024',
    address: '03/05/2024',
    tags: ['GMY Onay Bekleniyor'],
  },
  {
    key: '2',
    name: 'Proje 1',
    age: '03/03/2024',
    address: '03/05/2024',
    tags: ['Rededildi'],
  },
  {
    key: '3',
    name: 'Proje 1',
    age: '03/03/2024',
    address: '03/05/2024',
    tags: ['Bölge Yöneticisi Onayı Bekleniyor'],
  },
  {
    key: '1',
    name: 'Proje 1',
    age: '03/03/2024',
    address: '03/05/2024',
    tags: ['GMY Onay Bekleniyor'],
  },
  {
    key: '2',
    name: 'Proje 1',
    age: '03/03/2024',
    address: '03/05/2024',
    tags: ['Rededildi'],
  },
  {
    key: '3',
    name: 'Proje 1',
    age: '03/03/2024',
    address: '03/05/2024',
    tags: ['Bölge Yöneticisi Onayı Bekleniyor'],
  },
];
const Home = () => {

return (
    <div style={{marginInline:150,marginTop:150}}>
<Table columns={columns} dataSource={data} />
</div>
)

};
export default Home;