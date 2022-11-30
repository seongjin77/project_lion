import React from "react";
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {changeName} from '../store/store';
const Cart = () => {
    let a = useSelector((state) => {
        return state.상품;
    });

    let aa = useSelector((state) => state);
    let dispatch =useDispatch();
    console.log(changeName);

    return (
        <Table>
          <button onClick={()=> {
              dispatch(changeName())
          }}>이름변경</button>
          {aa.내이름}
            <thead>
                <tr>
                    <th>#</th>
                    <th>이름</th>
                    <th>수량</th>
                    <th>변경하기</th>
                </tr>
            </thead>
            <tbody>
                {a.map((v,i) => {
                    return (
                        <tr key={i}>
                            <td>{i+1}</td>
                            <td>{v.name}</td>
                            <td>{v.count}</td>
                            <td>안녕</td>
                        </tr>
                    );
                })}
            </tbody>
        </Table>
    );
};

export default Cart;
