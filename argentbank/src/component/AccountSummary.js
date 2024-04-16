import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateUserProfile } from '../actions/userActions'; 
import '../styles/AccountSummary.css';

function AccountSummary() {
  const [isEditing, setIsEditing] = useState(false);
  const [newUserName, setNewUserName] = useState('');
  const dispatch = useDispatch();
  const user = useSelector(state => state.user.user); 

  const handleEdit = () => {
    if (newUserName) {
      dispatch(updateUserProfile({ userName: newUserName }));
      setIsEditing(false);
    }
  };

  const handleCancel = () => {
    setIsEditing(false);
    setNewUserName(user ? user.userName : '');
  };

  return (
    <main className="main bg-dark">
      <div className="header">
        <h1>Welcome back<br />{user ? `${user.firstName} ${user.lastName}` : 'User'}</h1>
        {isEditing ? (
          <form>
            <div className="input-wrapper">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                value={newUserName}
                onChange={(e) => setNewUserName(e.target.value)}
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="firstName">First Name (read-only)</label>
              <input
                type="text"
                id="firstName"
                value={user ? user.firstName : ''}
                readOnly
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="lastName">Last Name (read-only)</label>
              <input
                type="text"
                id="lastName"
                value={user ? user.lastName : ''}
                readOnly
              />
            </div>
            <div className="buttons-container">
              <button type="button" onClick={handleEdit} className="save-button">Save</button>
              <button type="button" onClick={handleCancel} className="cancel-button">Cancel</button>
            </div>
          </form>
        ) : (
          <button onClick={() => { setIsEditing(true); setNewUserName(user ? user.userName : ''); }} className="edit-button">Edit Username</button>
        )}
      </div>
      <h2 className="sr-only">Accounts</h2>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Checking (x8349)</h3>
          <p className="account-amount">$2,082.79</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Savings (x6712)</h3>
          <p className="account-amount">$10,928.42</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
          <p className="account-amount">$184.30</p>
          <p className="account-amount-description">Current Balance</p> 
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
    </main>
  );
}

export default AccountSummary;
