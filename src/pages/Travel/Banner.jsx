import React, { useState, useCallback } from "react";
import { Box, Typography, Button, Fade, IconButton } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosNewIcon from "@mui/icons-material/ArrowForwardIos";
import { styled } from "@mui/system";

const AnimatedBackgroundBox = styled(Box, {
  shouldForwardProp: (prop) => prop !== "backgroundimg",
})(({ backgroundimg }) => ({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${backgroundimg})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  transition: "background-image 0.8s ease-in-out",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "white",
  textShadow: "1px 1px 3px rgba(0,0,0,0.7)",
}));

const HomeBanner = () => {
  const slides = [
    {
      title: "Himalayan Trekking Adventure",
      description:
        "Conquer high-altitude trails, explore remote villages, and witness breathtaking mountain vistas on our guided treks.",
      link: "/tours/himalayas",
      imageUrl:
        "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    },
    {
      title: "Caribbean Beach Cruise",
      description:
        "Sail to pristine islands, snorkel vibrant reefs, and relax on white sand beaches with our luxury cruise packages.",
      link: "/tours/caribbean-cruise",
      imageUrl:
        "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    },
    {
      title: "African Safari Expedition",
      description:
        "Track the Big Five, witness the Great Migration, and experience authentic bush camps on our premium safaris.",
      link: "/tours/african-safari",
      imageUrl:
        "https://images.unsplash.com/photo-1509316785289-025f5b846b35?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2076&q=80",
    },
    {
      title: "European Cultural Tour",
      description:
        "Explore historic cities, sample world-class cuisine, and discover hidden gems across Europe's most iconic destinations.",
      link: "/tours/europe-culture",
      imageUrl:
        "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2020&q=80",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const goToNextSlide = useCallback(() => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
  }, [slides.length]);

  const goToPrevSlide = useCallback(() => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
  }, [slides.length]);

  const handleDotClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <Box
      sx={{
        width: "100%",
        position: "relative",
        overflow: "hidden",
        backgroundColor: "#000",
        minHeight: { xs: "350px", sm: "450px", md: "600px" },
        display: "flex",
        alignItems: { xs: "center", md: "flex-start" },
        justifyContent: "center",
      }}
    >
      {/* Background image with fade transition */}
      {slides.map((slide, index) => (
        <Fade
          in={index === activeIndex}
          timeout={{ enter: 1000, exit: 500 }}
          key={slide.title + "-bg"}
        >
          <AnimatedBackgroundBox
            backgroundimg={slide.imageUrl}
            sx={{
              display: index === activeIndex ? "flex" : "none",
              zIndex: 1,
            }}
          />
        </Fade>
      ))}

      {/* Content for the current slide */}
      <Fade
        in={true}
        key={slides[activeIndex].title + "-content"}
        timeout={800}
      >
        <Box
          sx={{
            position: "absolute",
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: { xs: "center", md: "flex-start" },
            justifyContent: { xs: "center", md: "flex-start" },
            zIndex: 2,
            p: { xs: 3, sm: 5, md: 8 },
            pt: { xs: "8%", sm: "6%", md: "4%" },
          }}
        >
          <Box
            sx={{
              maxWidth: { xs: "90%", sm: "70%", md: "50%" },
              textAlign: { xs: "center", md: "left" },
              p: { xs: 2, md: 4 },
              borderRadius: 2,
            }}
          >
            <Typography
              variant="h6"
              color="#FFD700"
              sx={{ mb: 1.5, textTransform: "uppercase", letterSpacing: 1 }}
            >
              Adventure
            </Typography>
            <Typography
              variant="h3"
              component="h2"
              sx={{
                fontWeight: "bold",
                mb: 2.5,
                color: "rgba(255,255,255,0.9)",
                fontSize: { xs: "2.2rem", sm: "3rem", md: "3.8rem" },
                lineHeight: 1.2,
              }}
            >
              {slides[activeIndex].title}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                mb: 4,
                fontSize: { xs: "0.95rem", sm: "1.1rem" },
                color: "rgba(255,255,255,0.9)",
                textShadow: "1px 1px 2px rgba(0,0,0,0.8)",
              }}
            >
              {slides[activeIndex].description}
            </Typography>
            <Button
              variant="contained"
              sx={{
                mt: 0,
                backgroundColor: "#FF8C00",
                color: "white",
                "&:hover": {
                  backgroundColor: "#E67300",
                  transform: "scale(1.02)",
                  transition: "transform 0.2s ease-in-out",
                },
                py: { xs: 1.2, sm: 1.5 },
                px: { xs: 3, sm: 4 },
                fontSize: { xs: "0.9rem", sm: "1rem" },
                borderRadius: "50px",
                boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)",
              }}
              href={"#travelExpert"}
              // target="_blank"
              rel="noopener noreferrer"
            >
              Book Your Trip
            </Button>
          </Box>
        </Box>
      </Fade>

      {/* Navigation Arrows */}
      <IconButton
        sx={{
          position: "absolute",
          top: "50%",
          left: { xs: 10, md: 30 },
          transform: "translateY(-50%)",
          color: "white",
          bgcolor: "rgba(0,0,0,0.4)",
          zIndex: 3,
          p: { xs: 1, sm: 1.5 },
          opacity: 0.8,
          "&:hover": { opacity: 1, bgcolor: "rgba(0,0,0,0.5)" },
          transition: "all 0.3s ease-in-out",
        }}
        onClick={goToPrevSlide}
      >
        <ArrowBackIosNewIcon sx={{ fontSize: { xs: "1.5rem", md: "2rem" } }} />
      </IconButton>
      <IconButton
        sx={{
          position: "absolute",
          top: "50%",
          right: { xs: 10, md: 30 },
          transform: "translateY(-50%)",
          color: "white",
          bgcolor: "rgba(0,0,0,0.4)",
          zIndex: 3,
          p: { xs: 1, sm: 1.5 },
          opacity: 0.8,
          "&:hover": { opacity: 1, bgcolor: "rgba(0,0,0,0.5)" },
          transition: "all 0.3s ease-in-out",
        }}
        onClick={goToNextSlide}
      >
        <ArrowForwardIosNewIcon
          sx={{ fontSize: { xs: "1.5rem", md: "2rem" } }}
        />
      </IconButton>

      {/* Pager Dots */}
      <Box
        sx={{
          position: "absolute",
          bottom: { xs: 20, md: 30 },
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: { xs: 1, sm: 1.5 },
          zIndex: 3,
        }}
      >
        {slides.map((slide, index) => (
          <Button
            key={slide.title + "-dot"}
            onClick={() => handleDotClick(index)}
            sx={{
              width: "auto",
              minWidth: "unset",
              height: { xs: "24px", sm: "28px" },
              borderRadius: "14px",
              px: { xs: 1.5, sm: 2 },
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: { xs: "0.7rem", sm: "0.8rem" },
              fontWeight: activeIndex === index ? "bold" : "normal",
              color: "rgba(255,255,255, 1)",
              border: `1px solid ${
                activeIndex === index
                  ? "rgba(255,255,255, 1)"
                  : "rgba(255,255,255, 0.3)"
              }`,
              backgroundColor:
                activeIndex === index
                  ? "rgba(255,255,255, 0.2)"
                  : "transparent",
              transition: "all 0.3s ease-in-out",
              "&:hover": {
                backgroundColor: "rgba(255,255,255, 0.2)",
                borderColor: "rgba(255,255,255, 0.8)",
                transform: "scale(1.05)",
              },
            }}
          >
            {slide.title.split(" ")[0]}
          </Button>
        ))}
      </Box>
    </Box>
  );
};

export default HomeBanner;
