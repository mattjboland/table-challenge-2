$(document).ready(function(){
    $("tr:odd").addClass("odd");
    $("tr:even").addClass("even");
});<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Table</title>
  <link href='https://fonts.googleapis.com/css?family=Roboto' rel='stylesheet' type='text/css'>
    <script type="text/javascript" src="../js/jquery-3.2.1.js"></script>
    <script type="text/javascript" src="../js/my_script.js"></script>
  <style>
    td, th {
      width: 5rem;
      height: 2rem;
      border: 1px solid #ccc;
      text-align: center;
    }
    th {
      background: lightblue;
      border-color: white;
    }
    body {
      padding: 1rem;
      font-family: Roboto;
    }
    .odd {
      background-color: #E84610;
    }
    .even {
      background-color: #C65353;
    }
  </style>
</head>
<body>
  <table>
    <tr>
      <th></th>
      <th>Country</th>
      <th>Price</th>
      <th>Nutrition</th>
      <th>Category</th>
    </tr>
    <tr>
      <th>Spinach</th>
      <td>America</td>
      <td>28</td>
      <td>90</td>
      <td>Veg</td>
    </tr>
    <tr>
      <th>Carrots</th>
      <td>France</td>
      <td>56</td>
      <td>75</td>
      <td>Veg</td>
    </tr>
     <tr>
      <th>Broccoli</th>
      <td>Bulgaria</td>
      <td>12</td>
      <td>70</td>
      <td>Veg</td>
    </tr>
     <tr>
      <th>Orange</th>
      <td>Morocco</td>
      <td>15</td>
      <td>50</td>
      <td>Fruit</td>
    </tr>
     <tr>
      <th>Tangerine</th>
      <td>Cyprus</td>
      <td>12</td>
      <td>25</td>
      <td>Fruit</td>
    </tr>
  </table>
<script src="https://code.jquery.com/jquery-3.3.1.js" integrity="sha256-2Kok7MbOyxpgUVvAk/HJ2jigOSYS2auK4Pfzbm7uH60=" crossorigin="anonymous"></script>
  <script src="../js/my_script.js"></script>
</body>
</html>