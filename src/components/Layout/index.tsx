import * as React from 'react';
import Header from './Header';
import Footer from './Footer';

export interface LayoutProps {
    compiler: string;
    framework: string;
}
export default function Layout(props: LayoutProps) {
    return <div>
        <Header title={"今天天气晴朗"}/>
        {/*内容*/}
        你好，
        {props.compiler}
        {props.framework}
        <Footer title={"今天真是难忘的一天"}/>
    </div>
}
