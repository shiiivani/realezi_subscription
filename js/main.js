// Buy and Sell toggle animation
document.addEventListener("DOMContentLoaded", function () {
  if (window.innerWidth > 768) {
    const toggleButtons = document.querySelectorAll(".first-toggle p");
    let activeToggle = document.querySelector(".first-toggle p.active");
    let toggleSlideLine = document.createElement("div");

    toggleSlideLine.classList.add("first-toggle-slide-line");
    document.querySelector(".first-toggle").appendChild(toggleSlideLine);

    gsap.set(toggleSlideLine, {
      height: 32,
      position: "absolute",
      bottom: 4,
      zIndex: 2,
      borderRadius: "2px",
      transformOrigin: "left center",
      borderRadius: 9,
    });

    if (activeToggle) {
      gsap.set(toggleSlideLine, {
        width: activeToggle.offsetWidth,
        left: activeToggle.offsetLeft,
        backgroundColor: "#111F3C",
      });
    }

    toggleButtons.forEach(function (button) {
      button.addEventListener("click", function () {
        toggleButtons.forEach(function (p) {
          p.classList.remove("active");
        });
        this.classList.add("active");

        updateActiveToggle(this);

        const selectedOption = this.textContent.trim();
        toggleCanvasVisibility(selectedOption);
      });
    });

    function updateActiveToggle(newActiveToggle) {
      if (activeToggle !== newActiveToggle) {
        activeToggle.classList.remove("active");
        newActiveToggle.classList.add("active");

        const tl = gsap.timeline();

        const activeToggleRect = activeToggle.getBoundingClientRect();
        const newToggleRect = newActiveToggle.getBoundingClientRect();
        const direction =
          newToggleRect.left < activeToggleRect.left ? "left" : "right";

        tl.to(toggleSlideLine, {
          duration: 0.3,
          width: newActiveToggle.offsetWidth,
          left: newActiveToggle.offsetLeft,
          ease: "power2.out",
        })
          .to(
            toggleSlideLine,
            {
              duration: 0.1,
              x: direction === "left" ? "-3px" : "+3px",
              ease: "bounce.out",
            },
            "-=0.1"
          )
          .to(toggleSlideLine, {
            duration: 0.1,
            x: direction === "left" ? "+3px" : "-3px",
            ease: "bounce.out",
          })
          .to(toggleSlideLine, {
            duration: 0.2,
            x: "0px",
            ease: "power2.inOut",
          });

        activeToggle = newActiveToggle;
      }
    }

    const initialOption = document
      .querySelector(".first-toggle p.active")
      .textContent.trim();
    toggleCanvasVisibility(initialOption);
  }
});

// Tenant and Owner toggle button
document.addEventListener("DOMContentLoaded", function () {
  if (window.innerWidth > 768) {
    const toggleButtons = document.querySelectorAll(".second-toggle p");
    let activeToggle = document.querySelector(".second-toggle p.active");
    let toggleSlideLine = document.createElement("div");

    toggleSlideLine.classList.add("second-toggle-slide-line");
    document.querySelector(".second-toggle").appendChild(toggleSlideLine);

    gsap.set(toggleSlideLine, {
      height: 32,
      position: "absolute",
      bottom: 4,
      zIndex: 2,
      borderRadius: "2px",
      transformOrigin: "left center",
      borderRadius: 9,
    });

    function setSlideLine() {
      if (
        window.getComputedStyle(document.querySelector(".second-toggle"))
          .display !== "none"
      ) {
        if (activeToggle) {
          gsap.set(toggleSlideLine, {
            width: activeToggle.offsetWidth,
            left: activeToggle.offsetLeft,
            backgroundColor: "#111F3C",
          });
        }
      }
    }

    const observer = new MutationObserver(function (mutationsList) {
      for (const mutation of mutationsList) {
        if (mutation.attributeName === "class") {
          const element = mutation.target;
          if (!element.classList.contains("d-none")) {
            setSlideLine();
          }
        }
      }
    });

    observer.observe(document.querySelector(".second-toggle"), {
      attributes: true,
    });

    toggleButtons.forEach(function (button) {
      button.addEventListener("click", function () {
        toggleButtons.forEach(function (p) {
          p.classList.remove("active");
        });
        this.classList.add("active");

        updateActiveToggle(this);

        const selectedOption = this.textContent.trim();
        toggleCanvasVisibility(selectedOption);
      });
    });

    function updateActiveToggle(newActiveToggle) {
      if (activeToggle !== newActiveToggle) {
        activeToggle.classList.remove("active");
        newActiveToggle.classList.add("active");

        const tl = gsap.timeline();

        const activeToggleRect = activeToggle.getBoundingClientRect();
        const newToggleRect = newActiveToggle.getBoundingClientRect();
        const direction =
          newToggleRect.left < activeToggleRect.left ? "left" : "right";

        tl.to(toggleSlideLine, {
          duration: 0.3,
          width: newActiveToggle.offsetWidth,
          left: newActiveToggle.offsetLeft,
          ease: "power2.out",
        })
          .to(
            toggleSlideLine,
            {
              duration: 0.1,
              x: direction === "left" ? "-3px" : "+3px",
              ease: "bounce.out",
            },
            "-=0.1"
          )
          .to(toggleSlideLine, {
            duration: 0.1,
            x: direction === "left" ? "+3px" : "-3px",
            ease: "bounce.out",
          })
          .to(toggleSlideLine, {
            duration: 0.2,
            x: "0px",
            ease: "power2.inOut",
          });

        activeToggle = newActiveToggle;
      }
    }

    const initialOption = document
      .querySelector(".second-toggle p.active")
      .textContent.trim();
    toggleCanvasVisibility(initialOption);
  }
});

// Selecting Plan
document.addEventListener("DOMContentLoaded", function () {
  const packages = document.querySelectorAll(".package-section"); // Select all packages

  packages.forEach((packageSection) => {
    const planCont = packageSection.querySelectorAll(".plan-container"); // Plan containers within each package
    const buyPlanBtn = packageSection.querySelector(".buy-plan-btn"); // Button within each package

    planCont.forEach((plan) => {
      plan.addEventListener("click", function () {
        // Remove active class from all plans in the current package
        planCont.forEach((cont) => cont.classList.remove("active"));

        // Add active class to the clicked plan
        plan.classList.add("active");

        // Update the button text for the current package
        const planTitle = plan.querySelector("h5").textContent;
        buyPlanBtn.textContent = `Get ${planTitle} Plan`;
      });
    });
  });
});

// Toggling between packages for larger screen
document.addEventListener("DOMContentLoaded", function () {
  const buyOption = document.querySelector(".buy-option");
  const sellOption = document.querySelector(".sell-option");
  const tenantOption = document.querySelector(".tenant-option");
  const ownerOption = document.querySelector(".owner-option");
  const firstToggle = document.querySelector(".first-toggle");
  const secondToggle = document.querySelector(".second-toggle");

  const residentialOption = document.querySelector(".residential-option");
  const commercialOption = document.querySelector(".commercial-option");
  const rentalOption = document.querySelector(".rental-option");

  const residentialBuyerPackage = document.querySelector(
    ".residential-buyer-package"
  );
  const residentialSellerPackage = document.querySelector(
    ".residential-seller-package"
  );
  const commercialBuyerPackage = document.querySelector(
    ".commercial-buyer-package"
  );
  const commercialSellerPackage = document.querySelector(
    ".commercial-seller-package"
  );
  const rentalTenantPackage = document.querySelector(".rental-tenant-package");
  const rentalOwnerPackage = document.querySelector(".rental-owner-package");
  const packageSection = document.querySelectorAll(".package-section");

  function resetPackages() {
    const allPackages = document.querySelectorAll(".packages div");
    allPackages.forEach((pkg) => {
      pkg.classList.remove("d-flex");
      pkg.classList.add("d-none");
    });
  }

  function toggleRentalOptions(showRental) {
    if (showRental) {
      secondToggle.classList.remove("d-none");

      firstToggle.classList.add("d-none");
    } else {
      secondToggle.classList.add("d-none");

      firstToggle.classList.remove("d-none");
    }
  }

  function handlePackageDisplay() {
    resetPackages();

    if (rentalOption.classList.contains("active")) {
      if (tenantOption.classList.contains("active")) {
        packageSection.forEach((package) => {
          package.classList.add("d-none");
          package.classList.remove("d-flex");
        });
        rentalTenantPackage.classList.remove("d-none");
        rentalTenantPackage.classList.add("d-flex");
      } else if (ownerOption.classList.contains("active")) {
        packageSection.forEach((package) => {
          package.classList.add("d-none");
          package.classList.remove("d-flex");
        });
        rentalOwnerPackage.classList.remove("d-none");
        rentalOwnerPackage.classList.add("d-flex");
      }
    } else {
      if (residentialOption.classList.contains("active")) {
        if (buyOption.classList.contains("active")) {
          packageSection.forEach((package) => {
            package.classList.add("d-none");
            package.classList.remove("d-flex");
          });
          residentialBuyerPackage.classList.remove("d-none");
          residentialBuyerPackage.classList.add("d-flex");
        } else if (sellOption.classList.contains("active")) {
          packageSection.forEach((package) => {
            package.classList.add("d-none");
            package.classList.remove("d-flex");
          });
          residentialSellerPackage.classList.remove("d-none");
          residentialSellerPackage.classList.add("d-flex");
        }
      } else if (commercialOption.classList.contains("active")) {
        if (buyOption.classList.contains("active")) {
          packageSection.forEach((package) => {
            package.classList.add("d-none");
            package.classList.remove("d-flex");
          });
          commercialBuyerPackage.classList.remove("d-none");
          commercialBuyerPackage.classList.add("d-flex");
        } else if (sellOption.classList.contains("active")) {
          packageSection.forEach((package) => {
            package.classList.add("d-none");
            package.classList.remove("d-flex");
          });
          commercialSellerPackage.classList.remove("d-none");
          commercialSellerPackage.classList.add("d-flex");
        }
      }
    }
  }

  buyOption.addEventListener("click", function () {
    buyOption.classList.add("active");
    sellOption.classList.remove("active");
    handlePackageDisplay();
  });

  sellOption.addEventListener("click", function () {
    sellOption.classList.add("active");
    buyOption.classList.remove("active");
    handlePackageDisplay();
  });

  tenantOption.addEventListener("click", function () {
    tenantOption.classList.add("active");
    ownerOption.classList.remove("active");
    handlePackageDisplay();
  });

  ownerOption.addEventListener("click", function () {
    ownerOption.classList.add("active");
    tenantOption.classList.remove("active");
    handlePackageDisplay();
  });

  residentialOption.addEventListener("click", function () {
    residentialOption.classList.add("active");
    commercialOption.classList.remove("active");
    rentalOption.classList.remove("active");
    toggleRentalOptions(false);
    handlePackageDisplay();
  });

  commercialOption.addEventListener("click", function () {
    commercialOption.classList.add("active");
    residentialOption.classList.remove("active");
    rentalOption.classList.remove("active");
    toggleRentalOptions(false);
    handlePackageDisplay();
  });

  rentalOption.addEventListener("click", function () {
    rentalOption.classList.add("active");
    residentialOption.classList.remove("active");
    commercialOption.classList.remove("active");
    toggleRentalOptions(true);
    handlePackageDisplay();
  });

  handlePackageDisplay();
});

// Smaller screen plan selection
document.addEventListener("DOMContentLoaded", function () {
  const firstPlans = document.querySelectorAll(".smaller-screen-first-plan");
  const firstPlanDescriptions = document.querySelectorAll(
    ".smaller-screen-first-plan-description"
  );

  const secondPlans = document.querySelectorAll(".smaller-screen-second-plan");
  const secondPlanDescriptions = document.querySelectorAll(
    ".smaller-screen-second-plan-description"
  );

  const thirdPlans = document.querySelectorAll(".smaller-screen-third-plan");
  const thirdPlanDescriptions = document.querySelectorAll(
    ".smaller-screen-third-plan-description"
  );

  function clearActiveClasses() {
    // Remove 'active' from all first plans and descriptions
    firstPlans.forEach((plan) => plan.classList.remove("active"));
    firstPlanDescriptions.forEach((description) =>
      description.classList.remove("active")
    );

    // Remove 'active' from all second plans and descriptions
    secondPlans.forEach((plan) => plan.classList.remove("active"));
    secondPlanDescriptions.forEach((description) =>
      description.classList.remove("active")
    );

    // Remove 'active' from all third plans and descriptions
    thirdPlans.forEach((plan) => plan.classList.remove("active"));
    thirdPlanDescriptions.forEach((description) =>
      description.classList.remove("active")
    );
  }

  // Add click listeners to all first plans
  firstPlans.forEach((plan, index) => {
    plan.addEventListener("click", function () {
      clearActiveClasses();
      plan.classList.add("active");
      firstPlanDescriptions[index].classList.add("active");
    });
  });

  // Add click listeners to all second plans
  secondPlans.forEach((plan, index) => {
    plan.addEventListener("click", function () {
      clearActiveClasses();
      plan.classList.add("active");
      secondPlanDescriptions[index].classList.add("active");
    });
  });

  // Add click listeners to all third plans
  thirdPlans.forEach((plan, index) => {
    plan.addEventListener("click", function () {
      clearActiveClasses();
      plan.classList.add("active");
      thirdPlanDescriptions[index].classList.add("active");
    });
  });
});

document
  .querySelectorAll(".smaller-screen-package-section")
  .forEach((packageSection) => {
    const planBtn = packageSection.querySelector(".get-plan-btn");
    const plans = packageSection.querySelectorAll(".smaller-screen-plans");

    plans.forEach((plan, index) => {
      plan.addEventListener("click", function () {
        const planTitle = plan.querySelector("h4").textContent;
        console.log(planTitle);
        planBtn.textContent = `Get ${planTitle} Plan`;
      });
    });
  });

// Filtering Plans for samller screen
document.addEventListener("DOMContentLoaded", function () {
  const buyerSellerOption = document.querySelectorAll(
    ".buyer-seller-option .option-container"
  );
  const tenantOwnerOption = document.querySelectorAll(
    ".tenant-owner-option .option-container"
  );
  const propertyTypeOptions = document.querySelectorAll(
    ".property-type-option"
  );
  const smallerScreenPackages = document.querySelectorAll(
    ".smaller-screen-package-section"
  );
  const planBtn = document.querySelector(".filter-btn");
  const openFilterBtn = document.querySelector(".dropdown p");

  function clearActiveClass(elements) {
    elements.forEach((element) => {
      element.classList.remove("active");
    });
  }

  function activateOption(option) {
    option.classList.add("active");
  }

  buyerSellerOption.forEach((option) => {
    option.addEventListener("click", function () {
      clearActiveClass(buyerSellerOption);
      activateOption(option);
      updatePlanVisibility();
      if (option.classList.contains("seller-plan-option")) {
        planBtn.textContent = "Get the Seller Plan";
        openFilterBtn.childNodes[0].textContent = "Seller Plan";
      } else if (option.classList.contains("buyer-plan-option")) {
        planBtn.textContent = "Get the Buyer Plan";
        openFilterBtn.childNodes[0].textContent = "Buyer Plan";
      }
    });
  });

  tenantOwnerOption.forEach((option) => {
    option.addEventListener("click", function () {
      clearActiveClass(tenantOwnerOption);
      activateOption(option);
      updatePlanVisibility();
      if (option.classList.contains("tenant-plan-option")) {
        planBtn.textContent = "Get the Tenant Plan";
        openFilterBtn.childNodes[0].textContent = "Tenant Plan";
      } else if (option.classList.contains("owner-plan-option")) {
        planBtn.textContent = "Get the Owner Plan";
        openFilterBtn.childNodes[0].textContent = "Owner Plan";
      }
    });
  });

  propertyTypeOptions.forEach((option) => {
    option.addEventListener("click", function () {
      clearActiveClass(propertyTypeOptions);
      activateOption(option);
      updatePlanVisibility();
    });
  });

  smallerScreenPackages.forEach((package) => {
    package.addEventListener("click", function () {
      clearActiveClass(smallerScreenPackages);
      activateOption(package);
    });
  });

  function updatePlanVisibility() {
    const isResidentialActive = document.querySelector(
      ".property-type-option.residential-plan-option.active"
    );
    const isCommercialActive = document.querySelector(
      ".property-type-option.commercial-plan-option.active"
    );
    const isRentalActive = document.querySelector(
      ".property-type-option.rental-plan-option.active"
    );
    const isBuyerActive = document.querySelector(
      ".two-type-option-container.buyer-plan-option.active"
    );
    const isSellerActive = document.querySelector(
      ".two-type-option-container.seller-plan-option.active"
    );
    const isOwnerActive = document.querySelector(
      ".two-type-option-container.owner-plan-option.active"
    );
    const isTenantActive = document.querySelector(
      ".two-type-option-container.tenant-plan-option.active"
    );

    clearActiveClass(smallerScreenPackages);

    if (isResidentialActive && isBuyerActive) {
      document.querySelector(".residential-buyer-plan").classList.add("active");
      openFilterBtn.childNodes[0].textContent = "Buyer Plan";
      planBtn.textContent = "Get the Buyer Plan";
    } else if (isResidentialActive && isSellerActive) {
      document
        .querySelector(".residential-seller-plan")
        .classList.add("active");
      openFilterBtn.childNodes[0].textContent = "Seller Plan";
      planBtn.textContent = "Get the Seller Plan";
    }

    if (isCommercialActive && isBuyerActive) {
      document.querySelector(".commercial-buyer-plan").classList.add("active");
      openFilterBtn.childNodes[0].textContent = "Buyer Plan";
      planBtn.textContent = "Get the Buyer Plan";
    } else if (isCommercialActive && isSellerActive) {
      document.querySelector(".commercial-seller-plan").classList.add("active");
      openFilterBtn.childNodes[0].textContent = "Seller Plan";
      planBtn.textContent = "Get the Seller Plan";
    }

    if (isRentalActive && isOwnerActive) {
      document.querySelector(".rental-owner-plan").classList.add("active");
      openFilterBtn.childNodes[0].textContent = "Owner Plan";
      planBtn.textContent = "Get the Owner Plan";
    } else if (isRentalActive && isTenantActive) {
      document.querySelector(".rental-tenant-plan").classList.add("active");
      openFilterBtn.childNodes[0].textContent = "Tenant Plan";
      planBtn.textContent = "Get the Tenant Plan";
    }
  }

  const rentalPlanOption = document.querySelector(".rental-plan-option");
  const buyerSellerOptionCont = document.querySelector(".buyer-seller-option");
  const tenantOwnerOptionCont = document.querySelector(".tenant-owner-option");

  rentalPlanOption.addEventListener("click", function () {
    buyerSellerOptionCont.classList.add("d-none");
    tenantOwnerOptionCont.classList.remove("d-none");
  });

  const residentialPlanOption = document.querySelector(
    ".residential-plan-option"
  );
  residentialPlanOption.addEventListener("click", function () {
    buyerSellerOptionCont.classList.remove("d-none");
    tenantOwnerOptionCont.classList.add("d-none");
  });

  const commercialPlanOption = document.querySelector(
    ".commercial-plan-option"
  );
  commercialPlanOption.addEventListener("click", function () {
    buyerSellerOptionCont.classList.remove("d-none");
    tenantOwnerOptionCont.classList.add("d-none");
  });

  const ownerPlanOption = document.querySelector(".owner-plan-option");
  const tenantPlanOption = document.querySelector(".tenant-plan-option");

  ownerPlanOption.addEventListener("click", function () {
    // clearActiveClass(buyerSellerOption);
    activateOption(ownerPlanOption);
    updatePlanVisibility();
  });

  tenantPlanOption.addEventListener("click", function () {
    // clearActiveClass(buyerSellerOption);
    activateOption(tenantPlanOption);
    updatePlanVisibility();
  });
});

// Opening and Closing Filter modal
document.addEventListener("DOMContentLoaded", function () {
  const filterBtn = document.querySelectorAll(".close-filter");
  const filterModal = document.querySelector(".filter-plan-modal");
  const openFilterBtn = document.querySelector(".dropdown");

  filterBtn.forEach((btn) => {
    btn.addEventListener("click", function () {
      filterModal.classList.add("d-none");
    });
  });

  openFilterBtn.addEventListener("click", function () {
    filterModal.classList.remove("d-none");
  });
});

// TNC Modal
document.addEventListener("DOMContentLoaded", function () {
  function activateSection(buttonSelector, sectionSelector) {
    const buttons = document.querySelectorAll(buttonSelector);
    const section = document.querySelector(sectionSelector);

    buttons.forEach((button) => {
      button.addEventListener("click", function () {
        document
          .querySelectorAll(".tnc-modal-container")
          .forEach((sec) => sec.classList.remove("active"));
        section.classList.add("active");
      });
    });
  }

  activateSection(".residential-buyer-tnc-btn", ".residential-buyer-tnc");
  activateSection(".residential-seller-tnc-btn", ".residential-seller-tnc");
  activateSection(".commercial-buyer-tnc-btn", ".commercial-buyer-tnc");
  activateSection(".commercial-seller-tnc-btn", ".commercial-seller-tnc");
  activateSection(".rental-tenant-tnc-btn", ".rental-tenant-tnc");
  activateSection(".rental-owner-tnc-btn", ".rental-owner-tnc");

  function closeAllTncModals() {
    document
      .querySelectorAll(".tnc-modal-container")
      .forEach((sec) => sec.classList.remove("active"));
  }

  document.querySelectorAll(".close-tnc").forEach((closeBtn) => {
    closeBtn.addEventListener("click", closeAllTncModals);
  });

  document
    .querySelectorAll(".tnc-modal-container")
    .forEach((modalContainer) => {
      modalContainer.addEventListener("click", function (event) {
        const modalInner = modalContainer.querySelector(".tnc-modal-inner");
        if (!modalInner.contains(event.target)) {
          closeAllTncModals();
        }
      });
    });
});
