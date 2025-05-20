// src/ItemList.js
import React, { useEffect, useState } from 'react';
import { db } from './firebase';
import { collection, getDocs } from 'firebase/firestore';
import 'primeflex/primeflex.css';

function ItemList() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'items'));
        const itemsData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setItems(itemsData);
      } catch (error) {
        console.error("Erro ao buscar itens:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchItems();
  }, []);

  const formatDate = (timestamp) => {
    if (!timestamp) return 'Sem data';
    return new Date(timestamp?.toDate?.() || timestamp).toLocaleString('pt-BR');
  };

  if (loading) return <div className="p-4">Carregando...</div>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Itens Cadastrados</h1>
      
      {items.length === 0 ? (
        <p>Nenhum item encontrado</p>
      ) : (
        <div className="grid">
          {items.map((item) => (
            <div key={item.id} className="col-12 md:col-6 lg:col-4 p-2">
              <div className="card p-3 border-1 surface-border">
                <h3 className="font-bold mb-1">{item.name || 'Sem nome'}</h3>
                <p className="mb-2">{item.description || 'Sem descrição'}</p>
                <p className="text-sm text-color-secondary">
                  Criado em: {formatDate(item.createdAt)}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ItemList;