import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Dimensions, Image, ScrollView, StyleSheet, Text, View } from "react-native";

export default function Reviews() {
    const screenWidth = Dimensions.get("window").width;
    const isMobile = screenWidth < 600;
    const isTablet = screenWidth >= 600 && screenWidth < 1024;

    const reviews = [
        {
            id: 1,
            name: "Месяц назад",
            avatar: "https://via.placeholder.com/40",
            rating: 4,
            text: `Заказывали у ребят разработку интернет-магазина. Что могу сказать, я
      очень довольна, магазин сделали под ключ сразу с базовыми настройками
      для SEO. Рекомендую, цена, качество и коммуникация на 100%.`,
        },
        {
            id: 2,
            name: "Armen Sargsyan",
            avatar: null,
            rating: 5,
            text: `Пишу отзыв спустя 6 месяцев после сдачи проекта. За это время не
      нашлось ни одной ошибки. Всё работает стабильно. Сотрудничаем дальше.`,
        },
    ];

    return (
        <View
            style={[
                styles.container,
                { paddingVertical: isMobile ? 40 : 60, paddingHorizontal: isMobile ? 16 : 20 },
            ]}
        >
            {/* Subtítulo */}
            <Text
                style={[
                    styles.subtitle,
                    {
                        fontSize: isMobile ? 14 : 16,
                        lineHeight: isMobile ? 20 : 22,
                        maxWidth: isMobile ? 400 : 800,
                    },
                ]}
            >
                Descubre lo que nuestros clientes opinan sobre nosotros. Cada reseña
                refleja la experiencia real de quienes confiaron en nosotros y
                comprobaron los resultados. Sus palabras son nuestra mejor carta de
                presentación y la motivación para seguir mejorando cada día.
            </Text>

            {/* Título principal */}
            <Text
                style={[
                    styles.title,
                    { fontSize: isMobile ? 16 : 20, marginBottom: isMobile ? 30 : 40 },
                ]}
            >
                Tu satisfacción también puede ser la próxima reseña destacada.
            </Text>

            {/* Scroll horizontal de reseñas */}
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={[
                    styles.scrollContent,
                    { gap: isMobile ? 16 : 20, paddingHorizontal: isMobile ? 8 : 12 },
                ]}
            >
                {reviews.map((review) => (
                    <View
                        key={review.id}
                        style={[
                            styles.card,
                            { width: isMobile ? 260 : isTablet ? 320 : 380 },
                        ]}
                    >
                        {/* Header de usuario */}
                        <View style={styles.userHeader}>
                            {review.avatar ? (
                                <Image
                                    source={{ uri: review.avatar }}
                                    style={styles.avatar}
                                />
                            ) : (
                                <View style={styles.avatarPlaceholder}>
                                    <Text style={styles.avatarText}>
                                        {review.name.charAt(0).toUpperCase()}
                                    </Text>
                                </View>
                            )}
                            <View>
                                <Text style={styles.userName}>{review.name}</Text>
                                <View style={styles.rating}>
                                    {[...Array(5)].map((_, i) => (
                                        <Ionicons
                                            key={i}
                                            name={i < review.rating ? "star" : "star-outline"}
                                            color="#FFA500"
                                            size={14}
                                        />
                                    ))}
                                </View>
                            </View>
                        </View>

                        {/* Texto de reseña */}
                        <Text style={styles.reviewText}>{review.text}</Text>
                    </View>
                ))}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#0077B6",
        alignItems: "center",
    },
    subtitle: {
        color: "white",
        textAlign: "center",
        opacity: 0.9,
        marginBottom: 12,
    },
    title: {
        color: "white",
        textAlign: "center",
        fontWeight: "bold",
    },
    scrollContent: {
        justifyContent: "center",
    },
    card: {
        backgroundColor: "white",
        borderRadius: 12,
        padding: 20,
        shadowColor: "#000",
        shadowOpacity: 0.15,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        elevation: 3,
    },
    userHeader: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 8,
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 10,
    },
    avatarPlaceholder: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: "#0077B6",
        justifyContent: "center",
        alignItems: "center",
        marginRight: 10,
    },
    avatarText: {
        color: "white",
        fontWeight: "bold",
    },
    userName: {
        fontWeight: "bold",
        fontSize: 14,
    },
    rating: {
        flexDirection: "row",
        marginTop: 2,
    },
    reviewText: {
        fontSize: 13,
        color: "#333",
        lineHeight: 18,
    },
});
