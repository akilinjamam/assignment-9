import React from 'react';

const Blogs = () => {
    return (
        <div>
            <div style={{ width: '80%', margin: 'auto', boxShadow: '0 0 5px 0', borderRadius: '20px', padding: '20px' }}>
                <h2 className='font-bold text-cyan-500 text-center text-2xl'>What is Context Api?</h2>
                <br />
                <p>Context api is a very powerfull way which makes easy to pass data from one component to another component without maintaining serial. Whithout context api usually we pass data from parent component to child component. this is normal in the case of when the number of component is few. but when we have to work with lots of component with passing different data, its very tough and time consuming to pass data from one component to another component.
                    to reduce this time consumption , react introduced a very powerfull tools which is context api. through this api we can easily pass data without maintaining serial from parents to child component one after one. thats makes easy and gives us to do lots of works within a short time. this powerfull tool not only can pass data but also can send function and others. so the summery is , context api is very powerfull tool to transfer data.
                </p>
                <br />
                <h2 className='font-bold text-cyan-500 text-center text-2xl'>what is semantic elements?</h2>
                <br />
                <p>Sementic elements are the tags of html which defines the purpose of positon in UI. its machine and human readable. before 2014, the programmer  used normal div tags and defined the position writing class and id as attributes. that was very hard to read the code because all the code was written under div tags thats makes a lots of confusion in the case of writing vast code. to make it easy after 2014, html 5  was launched with semantic tags. This semantic tags help to read the code for both human and machine. it helps to read and understand the purpose of than code by the name of semantic tags. Search engine and assistive technologies can easily understand the semantic tags thats help for search engine optimization. Overall semantic tags also  leads to  more consistant code. Element such as heder, nav, section, main, article , summary, aside, footer act more as like as div elemets. in Conclusion. semantic tag is now a days used instead of using div. this semantic tags helps human and machine both to understand the purpose of code and helps search engine to define it.     </p>
                <br />
                <h2 className='font-bold text-cyan-500 text-center text-2xl'>what is the difference between inline and inline-block elements?</h2>
                <br />
                <p>The inline and inline-block elements of HTML are one of the important areas where web developers often get confused because they were unable to know which are inline and inline-block elements which may cause clumsiness in a webpage in case he assumes some element to be a block but it is an inline element which causes next element comes next to it.

                    So let us see the differences between the inline and inline-block elements in HTML </p>
                <p>the nature of inline is , inline element set side by side. they dont set vertically. in the case of  inline they dont allow the height and width. in the case of inline-block element , the allow the height and width.</p>
                <p>in the case of inline-block , it respects margin and padding. on the other hand, inline block doesnt do that. </p>
                <p>Now, the difference between display: inline-block and display: block is that, with display: block, a line break happens after the element, so a block element doesn’t sit next to other elements.</p>

            </div>

            <br /><br />
        </div>

    );
};

export default Blogs;