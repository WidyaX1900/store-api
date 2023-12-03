<?php

require "config.php";
require "templates/header.php";

?>

<div class="w-75 mx-auto mt-5">
    <h2 class="mb-3 text-center">Widya Store</h2>
    <form id="searchForm" class="mb-3">
        <div class="input-group">
            <input type="text" class="form-control" placeholder="Search Product...">
            <button type="submit" class="btn btn-primary">
                <i class="fa-solid fa-magnifying-glass"></i>
            </button>
        </div>
    </form>
    <div class="row">
        <div class="col-4 p-3">
            <div class="card rounded p-3">
                <img src="" class="img-fluid" alt="...">
                <h5 class="mt-3">Iphone X</h5>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, ipsa suscipit rerum hic aliquid a quis autem voluptates minus blanditiis?
                </p>
                <button type="button" class="btn btn-info detail-btn">
                    <i class="fa-solid fa-eye"></i>
                    View
                </button>
            </div>
        </div>
    </div>
</div>

<?php require "templates/footer.php" ?>