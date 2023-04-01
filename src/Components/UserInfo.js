import { useState, useEffect } from 'react';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { Table } from 'antd';
import '../App.css'



const UserInfo = () => {
  // const [documents, setDocuments] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    const docsCollection = collection(db, 'Users');

    // Retrieve all documents from the "myCollection" collection
    const retrieveDocs = async () => {
      const querySnapshot = await getDocs(docsCollection);
      const docs = [];
      querySnapshot.forEach((doc) => {
        docs.push(doc.data());
      });
      setData(docs);
    };

    retrieveDocs().catch((error) => {
      console.log('Error getting documents: ', error);
    });
  }, []);

  const columns = [
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Password',
      dataIndex: 'password',
      key: 'password',
    },
  ];

  return (
    <div>
      <Table columns={columns} dataSource={data} />
    </div>
  );
};

export default UserInfo;