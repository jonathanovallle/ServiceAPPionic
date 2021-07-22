-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:8889
-- Tiempo de generación: 22-07-2021 a las 10:44:59
-- Versión del servidor: 5.7.32
-- Versión de PHP: 8.0.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `pulpo`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `servicios`
--

CREATE TABLE `servicios` (
  `id` int(11) NOT NULL,
  `titulo` varchar(255) NOT NULL,
  `precio` decimal(5,2) NOT NULL,
  `unidad` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `servicios`
--

INSERT INTO `servicios` (`id`, `titulo`, `precio`, `unidad`) VALUES
(5, 'Servicio 1', '21.21', 'metro'),
(6, 'Servicio 2', '22.00', 'metro'),
(7, 'servicio solo', '25.00', 'metro'),
(8, 'aaaa', '222.00', 'metro'),
(9, 'aaa', '25.00', 'metro'),
(10, 'aaa', '2.00', 'metro'),
(11, 'ava', '1.00', 'metro'),
(12, 'vvvvvv', '222.00', 'metro'),
(13, 'aa', '1.00', 'metro'),
(14, 'prueba definitiva', '12.22', 'metro'),
(15, 'nuevo producto', '21.00', 'metro'),
(16, 'titulo 1', '1.00', 'metro'),
(17, 'titulo 2', '2.00', 'metro'),
(18, 'titulo 3', '3.00', 'metro'),
(19, 'hola', '1.00', 'metro');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `servicios`
--
ALTER TABLE `servicios`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `servicios`
--
ALTER TABLE `servicios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
