import PageCounter from '../PageCounter/PageCounter';
import Pagination from '../Pagination/Pagination';
import { FooterWrapper } from './FooterStyle';

const Footer = ({ table }) => {
  return (
    <>
      <FooterWrapper>
        <PageCounter table={table} />
        <Pagination table={table} />
      </FooterWrapper>
    </>
  );
};

export default Footer;
