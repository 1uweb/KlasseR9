import Link from 'next/link'
import css from '../static/style/css/main.sass'
import HeadTag from '../components/head';
import PadletAPI from '../components/padlet';

const Index = () => (
    <div>
        <HeadTag></HeadTag>
        <PadletAPI></PadletAPI>
    </div>
)

export default Index