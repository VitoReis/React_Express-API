import { useState } from 'react'
import { IoMdAdd, IoMdSearch, IoMdRefresh, IoMdTrash, IoMdArrowBack} from "react-icons/io";
import './styles.css'
import axios from "axios"

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
      <div className='top'>
        {option !== '0' && (
          <button className="back" onClick={() => {
            setOption('0')
            setName('')
            setEmail('')
            setPhone('')
            setAddress('')
            setContact('')
          }}><IoMdArrowBack size={25} color="white" /></button>
        )}
        <h1 className="title">Minha agenda de contatos</h1>
      </div>

      <div className='container'>
        {option === '0' && (
          <div className='selection'>
            <h1>Escolha uma das opções</h1>
            <button className="addShow" onClick={() => {setOption('1')}}>Adicionar contato</button>
            <button className="searchShow" onClick={() => {setOption('2')}}>Buscar contato</button>
            <button className="updateShow" onClick={() => {setOption('3')}}>Atualizar contato</button>
            <button className="deleteShow" onClick={() => {setOption('4')}}>Deletar contato</button>
          </div>
        )}
        {option === '1' && (
          <section className='add'>
            <h1>Adicionar novo contato</h1>
            <div className='addInput'>
              <input type="text" placeholder="Nome" value={name} onChange={(e) => setName(e.target.value)} />
              <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
              <input type="text" placeholder="Telefone" value={phone} onChange={(e) => setPhone(e.target.value)} />
              <input type="text" placeholder="Endereço" value={address} onChange={(e) => setAddress(e.target.value)} />
              <button className="addBtn" onClick={handleAdd}><IoMdAdd size={25} color="white" /></button>
            </div>
          </section>
        )}
        {option === '2' && (
          <section className='search'>
            <section className='searchSection'>
              <h1>Buscar contato</h1>
              <div className="searchInput">
                <input type="text" placeholder="Digite um nome..." value={name} onChange={(e) => setName(e.target.value)} />
                <button className="searchBtn" onClick={handleSearch}><IoMdSearch size={25} color="white" /></button>
              </div>
            </section>

            {Object.keys(contact).length > 0 && (
              <section className="searchResult">
                <p className="name">Nome: {contact.name}</p>
                <p className="email">Email: {contact.email}</p>
                <p className="phone">Telefone: {contact.phone}</p>
                <p className="adress">Endereço: {contact.address}</p>
              </section>
            )}
          </section>
        )}
        
        {option === '3' && (
        <section className='update'>
          <h1>Atualizar contato</h1>
          <div className='updateInput'>
            <input type="text" placeholder="Digite um nome" value={name} onChange={(e) => setName(e.target.value)} />
            <input type="text" placeholder="Digite o novo email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="text" placeholder="Digite o novo telefone" value={phone} onChange={(e) => setPhone(e.target.value)} />
            <input type="text" placeholder="Digite o novo endereço" value={address} onChange={(e) => setAddress(e.target.value)} />
            <button className="updateBtn" onClick={handleUpdate}><IoMdRefresh size={25} color="white" /></button>
          </div>
        </section>
        )}
        {option === '4' && (
          <section className='delete'>
            <section className='deleteSection'>
              <h1>Deletar contato</h1>
              <div className='deleteInput'>
                <input type="text" placeholder="Digite um nome..." value={name} onChange={(e) => setName(e.target.value)} />
                <button className="deleteBtn" onClick={handleDelete}><IoMdTrash size={25} color="white" /></button>
              </div>
            </section>
          </section>
        )}
        </div>
    </div>
  );
}

export default App;
