import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Layout from '../components/Layout';
import '../styles/globals.css';
import pageView from '../lib/gtag';
import SkeletonGrid from '../components/SkeletonGrid';
import SkeletonAlert from '../components/SkeletonAlert';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [query, setQuery] = useState('');
  const [isSearchShow, setSearchShow] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const start = () => {
      setLoading(true);
    };
    const end = () => {
      setLoading(false);
    };

    const handleRouteChange = (url) => {
      pageView(url);
    };
    router.events.on('routeChangeStart', start);
    router.events.on('routeChangeComplete', end);
    router.events.on('routeChangeError', end);
    router.events.on('routerChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeStart', start);
      router.events.off('routeChangeComplete', end);
      router.events.off('routeChangeError', end);
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  const handleShowSearchBar = () => {
    setSearchShow(!isSearchShow);
  };

  const handleQuery = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/search?q=${query}`);
    setSearchShow(false);
  };
  return (
    <Layout
      handleQuery={handleQuery}
      handleSubmit={handleSubmit}
      handleShowSearchBar={handleShowSearchBar}
      isSearchShow={isSearchShow}
    >
      {loading ? <SkeletonGrid /> : <Component {...pageProps} query={query} />}
    </Layout>
  );
}

export default MyApp;
