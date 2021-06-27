import React, { Component, useState, useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import gfm from 'remark-gfm'
import './api.css'
import DocumentacaoHooks from  '../../hooks/documentacao'
import Error from '../../components/error'
import Loading from '../../components/loading';
const Api = () => {
    const { data, error, loading } = DocumentacaoHooks();
    if (error) {
        return <Error error={error} />
    }
    return loading ? 
    <Loading />
    : (
        <div className="readme">
            <ReactMarkdown rehypePlugins={[rehypeRaw, gfm]} children={data} />
        </div>
    )
}

export default Api