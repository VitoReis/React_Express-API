import { useState } from 'react'
import axios from "axios"
import './App.css'
// Modules
import Choice from './components/Choice'
import Form from './components/Form';
import Search from './components/Search';
import Result from './components/Result';
import Head from './components/Head';
// Icons
import { IoMdAdd, IoMdSearch, IoMdRefresh, IoMdTrash, IoMdArrowBack} from "react-icons/io";

function App() {

  const [option, setOption] = useState('0')

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [address, setAddress] = useState('')

  const [contact, setContact] = useState('')

  async function handleAdd() {
    if(name === '' || email === '' || phone === '' || address === ''){
      window.alert("Favor preencher todos os campos")
      return
    }
    try {
      const response = await axios.post('http://localhost:3001/create', { "name": name, "email": email, "phone": phone, "address": address }, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      setName('')
      setEmail('')
      setPhone('')
      setAddress('')
      window.alert('Contato adicionado com sucesso!')
      setOption('0')
    } catch (error) {
      window.alert('Houve um erro ao adicionar um novo contato, tente novamente!')
    }
  }

  async function handleSearch() {
    if(name === ''){
      window.alert("Favor preencher a caixa de busca!")
      return
    }
    try {
      const response = await axios.post('http://localhost:3001/find', { "name": name }, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      setContact(response.data)
      setName('')
    } catch (error) {
      window.alert('Contato não encontrado, tente novamente')
    }
  }

  async function handleUpdate(){
    if(name === '' || email === '' || phone === '' || address === ''){
      window.alert("Favor preencher todos os campos")
      return
    }
    try {
      const response = await axios.put('http://localhost:3001/update', { "name": name, "email": email, "phone": phone, "address": address }, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      setName('')
      setEmail('')
      setPhone('')
      setAddress('')
      window.alert('Contato atualizado com sucesso!')
      setOption('0')
    } catch (error) {
      window.alert('Este contato não foi encontrado!')
    }
  }

  async function handleDelete(){
    if(name === ''){
      window.alert("Favor preencher o campo com o nome do contato!")
      return
    }
    try {
      const response = await axios.delete('http://localhost:3001/delete', { data: { "name": name } }, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      setName('')
      window.alert('Contato deletado com sucesso!')
      setOption('0')
    } catch (error) {
      window.alert('O contato pode já ter sido deletado anteriormente!')
    }
  }

  return (
    <div className="mainContainer">
      <section>
        <Head 
          title="Minha agenda de contatos"
          choice={option}
          option={setOption} 
          name={setName} 
          email={setEmail} 
          phone={setPhone} 
          address={setAddress} 
          contact={setContact}
          icon={ <IoMdArrowBack size={25} color="white" />}
        />
      </section>

      <section className='container'>
        {option === '0' && (
          <Choice 
            t1="Adicionar contato" 
            v1='1' 
            t2="Buscar contato" 
            v2='2' 
            t3="Atualizar contato" 
            v3='3' 
            t4="Deletar contato" 
            v4='4' 
            action={setOption}
          />
        )}
        {option === '1' && (
          <Form 
            title="Adicionar novo contato" 
            v1={name} s1={setName} 
            v2={email} s2={setEmail} 
            v3={phone} s3={setPhone} 
            v4={address} s4={setAddress} 
            icon={<IoMdAdd size={25} color="white" />} 
            action={handleAdd} 
          />
        )}
        
        {option === '2' && (
          <div className='SearchContainer'>
            <Search 
              title="Buscar contato" 
              type="text" 
              placeholder="Digite um nome..." 
              value={name} 
              state={setName} 
              icon={<IoMdSearch size={25} color="white" />} 
              action={handleSearch} 
            />
            {Object.keys(contact).length > 0 && (
              <Result 
                name={contact.name} 
                email={contact.email} 
                phone={contact.phone} 
                address={contact.address} 
              />
            )}
          </div>
        )}
        
        {option === '3' && (
          <Form 
            title="Atualizar contato" 
            v1={name} s1={setName} 
            v2={email} s2={setEmail} 
            v3={phone} s3={setPhone} 
            v4={address} s4={setAddress} 
            icon={<IoMdRefresh size={25} color="white" />} 
            action={handleUpdate} 
          />
        )}
        
        {option === '4' && (
          <Search 
            title="Deletar contato" 
            type="text" 
            placeholder="Digite um nome..." 
            value={name} 
            state={setName} 
            icon={<IoMdTrash size={25} color="white" />} 
            action={handleDelete} 
          />
        )}
      </section>
    </div>
  );
}

export default App;
