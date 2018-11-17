import Link from 'next/link'
import css from '../static/style/css/main.sass'
import HeadTag from '../components/head';
import PadletAPI from '../components/padlet';
import NavGlobal from '../components/header';

const Index = () => (
    <div>
        <HeadTag></HeadTag>
        <NavGlobal></NavGlobal>
        <PadletAPI></PadletAPI>
    </div>
)

export default Index