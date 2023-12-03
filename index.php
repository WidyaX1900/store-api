<?php

require "config.php";
require "templates/header.php";

?>

<div class="w-75 mx-auto mt-5">
    <h2 class="mb-3 text-center">Widya Store</h2>
    <form id="searchForm" class="mb-3">
        <div class="input-group">
            <input type="text" class="form-control" placeholder="Search Product..." id="keyword">
            <button type="submit" class="btn btn-primary">
                <i class="fa-solid fa-magnifying-glass"></i>
            </button>
        </div>
    </form>
    <div class="row" id="productList"></div>
</div>

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-body">
                <?php require "single.php" ?>
            </div>
        </div>
    </div>
</div>

<?php require "templates/footer.php" ?>