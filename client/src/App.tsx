import axios from 'axios';
import { useEffect, useState } from 'react';
import { Footer } from './components/footer/footer';
import { Header } from './components/header/header';
import { Phone } from './types/Phone';
import { Main } from './components/mainContent/mainContent';

export const App = () => {
  const [phones, setPhones] = useState<Phone[]>([]);

  useEffect(() => {
    const loadPhones = async () => {
      const response = await axios.get('http://localhost:8080/products');

      const data = await response.data;

      setPhones(data);
    };

    try {
      loadPhones();
    } catch {
      setPhones([]);
    }
  }, []);

  return (
    <div>
      Hello world!
    </div>
  );
};
