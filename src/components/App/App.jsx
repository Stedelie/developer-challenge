import React, { useEffect } from 'react';
import { connect } from "react-redux";

import { loadWorks } from 'store/works';
import Header from '../Header';
import Loading from 'components/Loading/Loading';
import Works from 'components/Works/Works'

import STYLES from './App.scss';


const getClassName = (className) => STYLES[className] || 'UNKNOWN';

const mapStateToProps = (state) => {
	return {
		list: state.entities.works.list,
		loading: state.entities.works.loading,
	};
};

const mapDispatchToProps = {
  loadWorks,
};

function App(props) {
  const { list, loading } = props;

  useEffect(() => {
    props.loadWorks()
  }, [])

  return (
    <div className={getClassName('App')}>
      <Header />
      <main className={getClassName('App__main')}>
        <p>Your turn good luck 👍 </p>
        {/* TODO: Add your components here */}
        { loading ? (
          <Loading />
        ) : (
          <Works works={list}/>
        )}

      </main>
    </div>
  )
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
