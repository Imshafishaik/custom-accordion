import React, { useState } from 'react'
import Accordion from 'react-bootstrap/Accordion';
import { BiChevronUp } from "react-icons/bi";
import { BiChevronDown } from "react-icons/bi";

const DynamicAccordion = () => {
    let key = [1,2,3,4,5]
    const [activeKey, setActiveKey] = useState([
        ...Array(key.length).keys()
      ]);
      console.log(".....how work",activeKey)
      const onClickAccordion = (key) => {
        if (activeKey.includes(key)) {
          let activeKeysList = activeKey.filter((eachKey) => eachKey !== key);
          setActiveKey(activeKeysList);
        } else {
          setActiveKey([...activeKey, key]);
        }
      };

      const accordionDropdown = (key) => {
        if (activeKey.includes(key)) {
          return (
            <span className="faq_arrow_up">
              <BiChevronUp />
            </span>
          );
        }
        return (
          <span className="faq_arrow_down">
            <BiChevronDown />
          </span>
        );
      };

    let data = [
        {
          "id": 1,
          "title": "Accordion Item #1",
          "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
          "id": 2,
          "title": "Accordion Item #2",
          "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
          "id": 3,
          "title": "Accordion Item #3",
          "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
          "id": 4,
          "title": "Accordion Item #4",
          "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
          "id": 5,
          "title": "Accordion Item #5",
          "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
    ]

  return (
    <div>
      {data?.map((val,i)=>{
        return(
        <Accordion>
              <Accordion.Header onClick={() => onClickAccordion(i)}>{val.title} {accordionDropdown(i)}</Accordion.Header>
              <Accordion.Body>
                {val.body}
              </Accordion.Body>
          </Accordion>)
      })
      }
    </div>
  )
}

export default DynamicAccordion
