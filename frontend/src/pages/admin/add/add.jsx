import React, { useContext } from "react";
import { Helmet } from "react-helmet";
import MainContext from "../../../context/context";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./add.scss";
import axios from "axios";

const Add = () => {
  const { data, setdata } = useContext(MainContext);
  const formik = useFormik({
    initialValues: {
      title: "",
      img: "",
      desc: "",
      price: "",
    },
    validationSchema: Yup.object({
      title: Yup.string().required("Required"),
      img: Yup.string().required("Required"),
      desc: Yup.string().required("Required"),
      price: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      axios.post("http://localhost:8080/api/examfour", {
        title: values.title,
        img: values.img,
        desc: values.desc,
        price: values.price,
        count: 1,
        totalPrice: values.price,
      });
    },
  });
  return (
    <>
      <Helmet>
        <title>Add</title>
      </Helmet>
      <form className="add_form" onSubmit={formik.handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input
          id="title"
          name="title"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.title}
        />
        {formik.touched.title && formik.errors.title ? (
          <div>{formik.errors.title}</div>
        ) : null}

        <label htmlFor="img">Img URL:</label>
        <input
          id="img"
          name="img"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.img}
        />
        {formik.touched.img && formik.errors.img ? (
          <div>{formik.errors.img}</div>
        ) : null}

        <label htmlFor="desc">Description:</label>
        <input
          id="desc"
          name="desc"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.desc}
        />
        {formik.touched.desc && formik.errors.desc ? (
          <div>{formik.errors.desc}</div>
        ) : null}

        <label htmlFor="price">Price:</label>
        <input
          id="price"
          name="price"
          type="number"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.price}
        />
        {formik.touched.price && formik.errors.price ? (
          <div>{formik.errors.price}</div>
        ) : null}

        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Add;
